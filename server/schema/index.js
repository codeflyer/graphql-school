import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
} from 'graphql';

import { Person } from './instances/person';
import { PeopleList } from './lists/people';

var count = 0;
const queryDefinitions = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    hello: {
      type: GraphQLString,
      resolve() {
        return 'world';
      }
    },
    count: {
      type: GraphQLInt,
      resolve() {
        return count;
      }
    },
    viewer : {
      type: new GraphQLObjectType({
        name: 'viewer',
        fields: () => ({
          people: PeopleList
        })
      }),
      resolve: () => ''
    },
    person: Person,
    people: PeopleList
  }
});


export const schema = new GraphQLSchema({
  query: queryDefinitions,
  mutation: new GraphQLObjectType({
    name: 'RootMutationType',
    fields: {
      updateCount: {
        type: GraphQLInt,
        description: 'Updates the count',
        resolve: function() {
          count += 1;
          return count;
        }
      }
    }
  })
});

export default schema;
