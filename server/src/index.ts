import "reflect-metadata";
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { createConnection } from 'typeorm';
import { buildSchema } from 'type-graphql';
import { DataResolver } from './resolvers';

(async () => { 

    await createConnection().catch(e => {
        console.log("error database connection : ", e);
    })
    // init express
    const app = express();
    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [
                DataResolver
            ],
            validate: true
        }),
        context: ({req, res}) => ({req, res})
    });
    apolloServer.applyMiddleware({app});
    app.get('/', (_, res) => {
        res.send('hello world');
    } )
    app.listen(4000, () => {
        console.log("server running at : http://localhost:4000");
    })

})().catch(e => {
    console.log('error : ', e);
});
/*  
createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error)); */
