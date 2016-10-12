import usersData from './dataset';

export function getPerson(id) {
  return usersData.find(user => user.id === id);
}

export function getPeople(offset, count) {
  return usersData.map(user => user)
      .slice(offset, count + offset);
}