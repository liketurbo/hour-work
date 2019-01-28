import { Request } from 'express';

interface Context {
  req: Request & { session: { userId?: number } };
}

export default Context;
