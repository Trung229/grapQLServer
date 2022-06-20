async function serverInitial() {
    const { ApolloServer } = require("apollo-server-express");
    const { typeDefs } = require("./schema/TypeDefs");
    const { resolvers } = require("./schema/Resolvers")
    const express = require("express");
    const mongoose = require('mongoose');
    const app = express();
    const cors = require('cors');
    app.use(cors());
    const server = new ApolloServer({ typeDefs, resolvers });

    mongoose.connect("mongodb://host.docker.internal:27017/test", { useNewUrlParser: true })
        .then((res) => console.log(">>>>>DB connected"))
        .catch((err) => console.error("Connect fail", err));

    await server.start()
    server.applyMiddleware({ app });

    app.listen({ port: 3001 }, () => {
        console.log("server running on port 3001");
    })
}

serverInitial()