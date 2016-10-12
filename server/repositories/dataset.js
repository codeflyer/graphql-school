const usersData = require('./data/users.json')
    .map(
        (user, index) =>
            Object.assign(
                {},
                user,
                { id: index }
            )
    );

export default usersData;