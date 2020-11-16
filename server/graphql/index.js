import { makeExecutableSchema } from  "graphql-tools";

import typeDefs from "./types/storage_types";
import resolvers from "./resolvers/storage_resolver";

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schema;
