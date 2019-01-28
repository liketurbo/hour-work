import connectRedis from 'connect-redis';
import cors from 'cors';
import { Express } from 'express';
import session from 'express-session';
import Redis from 'ioredis';
import ms from 'ms';

const connectSession = async (app: Express) => {
  app.use(
    cors({
      credentials: true,
      origin:
        process.env.NODE_ENV === 'production'
          ? process.env.WEB_URL
          : 'http://localhost:3000'
    })
  );

  app.use(
    session({
      name: 'sid',
      store: new (connectRedis(session))({
        client:
          process.env.NODE_ENV === 'production'
            ? (new Redis(process.env.REDIS_URL) as any)
            : (new Redis() as any)
      }),
      resave: false, // Forces the session to be saved back to the session store, even if the session was never modified during the request.
      saveUninitialized: false, // Forces a session that is "uninitialized" to be saved to the store
      secret: 'SESSION_SECRET',
      cookie: {
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true, // Ensures the cookie is sent only over HTTP(S), not client JavaScript, helping to protect against cross-site scripting attacks.
        maxAge: ms('7d')
      }
    })
  );
};

export default connectSession;
