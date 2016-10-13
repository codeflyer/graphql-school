import { getPerson } from '../../repositories/person';

import {
    GraphQLInt,
    GraphQLNonNull
} from 'graphql';

import { PersonType } from '../types/person';

export const Person = {
  type: PersonType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLInt)
    }
  },
  resolve: (parent, { id }) => getPerson(id),
  description: 'Retrieve a person'
};