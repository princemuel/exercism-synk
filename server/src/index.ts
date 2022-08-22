import cors from 'cors';
import dotenv from 'dotenv-safe';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { connect } from './config';
import { schema } from './schema';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3500;

connect();

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
