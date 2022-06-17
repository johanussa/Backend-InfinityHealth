import { ApolloServer } from 'apollo-server-express';
import { resolvers } from './src/graphQL/Resolvers';
import { typeDefs } from './src/graphQL/TypeDefs';
import DataBase from './src/database/DataBase';
import mongoose from 'mongoose';
import app from './app';

mongoose.connect(DataBase.db, {     
    useNewUrlParser: true,
    useUnifiedTopology: true
})  
    .then( () => console.log("Data Base MongoAtlas Connected!!"))    
    .catch(error => console.log("Connect wrong ", error));

const server = new ApolloServer({
    typeDefs,
    resolvers
}); 

app.listen(DataBase.port, async () => {
    await server.start();
    server.applyMiddleware({ app });
    console.log(`Api GraphQL on Port #${ DataBase.port }`);
});