import usersData from './dataset';

export function getPerson(id) {
  return usersData.find(user => String(user.id) === String(id));
}

export function getPeople(offset, count) {
  return new Promise((resolve, reject) => {
    const list = usersData.map(user => user)
        .slice(offset, count + offset);
    setTimeout(() => resolve(list), 100);
  })
}