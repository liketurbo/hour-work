import { Express } from 'express';
import { Server } from 'next';

const routes = (server: Express, app: Server) => {
  server.get('/user/confirm-email/:token', (req, res) => {
    const actualPage = '/confirm';
    const queryParams = { token: req.params.token };
    app.render(req, res, actualPage, queryParams);
  });
};

export default routes;
