import dotenv from 'dotenv-safe';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './schema';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3500;

app.use(
  '/graphql',
  graphqlHTTP({
    // @ts-expect-error: the library definition is wrong
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
