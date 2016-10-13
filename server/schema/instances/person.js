import { getPerson } from '../../repositories/person';

import {
    GraphQLID,
    GraphQLNonNull
} from 'graphql';

import { PersonType } from '../types/person';

import {
    fromGlobalId
} from 'graphql-relay';

export const Person = {
  type: PersonType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: (parent, { id: globalId }) => {
    const { id } = fromGlobalId(globalId);
    return getPerson(id);
  },
  description: 'Retrieve a person'
};