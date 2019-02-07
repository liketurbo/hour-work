import { Request, Response } from 'express';

interface Context {
  req: Request & { session: { userId?: number } | undefined };
  res: Response;
}

export default Context;
