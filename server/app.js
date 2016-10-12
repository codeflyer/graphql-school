import express from 'express';
import graphqlHTTP from 'express-graphql';
import mySchema from './schema';
const app = express();

app.use('/graphql', graphqlHTTP({
  schema: mySchema,
  graphiql: true
}));

app.listen(4000);
console.log('Listen to port: ', 4000);
