import connectRedis from 'connect-redis';
import cors from 'cors';
import { Express } from 'express';
import expressSession from 'express-session';
import ms from 'ms';
import redis from './redis';

const session = async (app: Express) => {
  app.use(
    cors({
      credentials: true,
      origin:
        process.env.NODE_ENV === 'production'
          ? 'https://157.230.98.243:3000'
          : 'http://localhost:3000'
    })
  );

  app.use(
    expressSession({
      name: 'sid',
      store: new (connectRedis(expressSession))({
        client: redis as any
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

export default session;
