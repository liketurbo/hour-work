import passport from 'passport';
import { Strategy as VKontakteStrategy } from 'passport-vkontakte';
import { Express } from 'express';
import User from '../entity/User';

const vkAuth = (app: Express) => {
  app.use(passport.initialize());

  passport.use(
    new VKontakteStrategy(
      {
        clientID: process.env.VKONTAKTE_APP_ID!, // VK.com docs call it 'API ID', 'app_id', 'api_id', 'client_id' or 'apiId'
        clientSecret: process.env.VKONTAKTE_APP_SECRET!,
        callbackURL: 'http://localhost:4000/oauth/vkontakte'
      },
      async (accessToken, refreshToken, params, profile, done) => {
        let user = await User.findOne({ where: { vkontakteId: profile.id } });

        if (!user) {
          user = await User.create({
            vkontakteId: profile.id,
            firstName: profile.name
              ? profile.name.givenName
              : profile.displayName,
            pictureUrl: profile.photos ? profile.photos[0].value : ''
          }).save();
        }

        done(null, user);
      }
    )
  );

  app.get('/auth/vkontakte', passport.authenticate('vkontakte'));

  app.get(
    '/oauth/vkontakte',
    passport.authenticate('vkontakte', { session: false }),
    (req: any, res) => {
      req.session.userId = req.user.id;

      // Successful authentication, redirect home.
      res.redirect('http://localhost:3000');
    }
  );
};

export default vkAuth;
