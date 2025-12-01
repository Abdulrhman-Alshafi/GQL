import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

//db
import _db from "./_db";

//types
import { typeDefs } from "./schema";

const resolvers = {
  Query: {
    games() {
      return _db.games;
    },
    reviews() {
      return _db.reviews;
    },
    authors() {
      return _db.authors;
    },
  },
};

//server setup
const server = new ApolloServer({
  typeDefs,
});

const { url } = await startStandaloneServer(server, {
  listen: { post: 4000 },
});

console.log("Server ready at port", 4000);
