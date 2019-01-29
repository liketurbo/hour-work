import { Request, Response } from 'express';

interface Context {
  req: Request & { session: { userId?: number } };
  res: Response;
}

export default Context;
