import { Query } from 'type-graphql';

class JobResolver {
  @Query(() => String)
  hello() {
    return 'Hello World';
  }
}

export default JobResolver;
