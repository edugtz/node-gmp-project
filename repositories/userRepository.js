import User from '../models/User';
import userUtil from '../utils/user';

let users = [
    new User(23, 'admin', 'admin', 'a224eb0c-975f-4e41-ad34-a7e5130fba96'),
    new User(30, 'user.1', 'user.1', 'ae4fd6aa-6731-4d3b-af0c-156e4fb6e808'),
    new User(15, 'user.2', 'user.2', '434c372b-7030-43d7-b6a9-5c31eed54592')
];

module.exports = {
    getUserById(userId) {
        const userIndex = users.findIndex(user => {
            if (user.id === userId && !user.isDeleted) return user;
            return null;
        });

        if (userIndex < 0) return null;

        return users[userIndex];
    },
    getUserByLogin(login) {
        const userIndex = users.findIndex(user => {
            if (user.login === login && !user.isDeleted) return user;
            return null;
        });

        if (userIndex < 0) return null;

        return users[userIndex];
    },
    getAutoSuggestUsers(loginSubstring = '', limit = users.length) {
        return users.filter(user => !user.isDeleted && user.login.includes(loginSubstring))
            .slice(0, limit).sort(userUtil.sortByLogin);
    },
    updateUser(userId, { login, password, age }) {
        const userIndex = users.findIndex(user => {
            if (user.id === userId && !user.isDeleted) return user;
            return null;
        });

        if (userIndex < 0) return null;

        return users[userIndex] = { ...users[userIndex], login, password, age };
    },
    deleteUser(userId) {
        const userIndex = users.findIndex(user => {
            if (user.id === userId && !user.isDeleted) return user;
            return null;
        });

        if (userIndex < 0) return null;
        users[userIndex] = { ...users[userIndex], isDeleted: true };

        return 'User was successfully deleted';
    },
    saveUser({ login, password, age }) {
        const previousUsersLength = users.length;
        users = [...users, new User(login, password, age)];

        if (users.length === previousUsersLength) return null;

        return users[users.length - 1];
    }
};

