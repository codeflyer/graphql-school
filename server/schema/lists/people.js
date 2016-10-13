
import {
    GraphQLList,
    GraphQLInt
} from 'graphql';

import { PersonType } from '../types/person';
import { getPeople } from '../../repositories/person';

export const PeopleList = {
  type: new GraphQLList(PersonType),
  args: {
    count: {
      type: GraphQLInt
    },
    offset: {
      type: GraphQLInt
    }
  },
  resolve(parent, {count = 10, offset = 0}) {
    return getPeople(offset, count);
  },
  description: 'Retrieve the people list'
};