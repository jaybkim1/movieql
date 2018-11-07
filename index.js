import { GraphQLServer } from "graphql-yoga";

console.log("Hello Node")

const server = new GraphQLServer({});

server.start(() => console.log("GraphQL Server Running"));