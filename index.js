import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers   
});

server.start(() => console.log("GraphQL Server Running"));

// Mutation is used for when the database changes state