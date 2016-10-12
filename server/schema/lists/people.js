
import {
    GraphQLList
} from 'graphql';

import { PersonType } from '../types/person';
import { getPeople } from '../../repositories/person';

export const PeopleList = {
  type: new GraphQLList(PersonType),
  resolve() {
    var people = getPeople(0, 3);
    return people;
  },
  description: 'Retrieve the people list'
};