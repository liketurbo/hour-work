import { buildSchema } from 'type-graphql';
import Context from '../types/context';

const createSchema = async () =>
  buildSchema({
    resolvers: [__dirname + '/../modules/**/*.ts'],
    authChecker({ context: { req } }: { context: Context }) {
      if (req.session.userId) {
        return true;
      }

      return false;
    }
  });

export default createSchema;
