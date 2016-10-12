import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString
} from 'graphql';

import { NameType } from './name';
import { LocationType } from './location';

export const PersonTypeFieldsList = {
  id: {
    type: GraphQLID
  },
  name: {
    type: NameType
  },
  location: {
    type: LocationType
  },
  email: {
    type: GraphQLString
  },
  phone: {
    type: GraphQLString
  },
  cell: {
    type: GraphQLString
  }
};

export const PersonType = new GraphQLObjectType({
  name: 'person',
  fields: () => (PersonTypeFieldsList)
});