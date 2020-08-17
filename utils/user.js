module.exports = {
    sortByLogin(firstUser, secondUser) {
        const firstUserLogin = firstUser.login.toLowerCase();
        const secondUserLogin = secondUser.login.toLowerCase();

        if (firstUserLogin > secondUserLogin) return 1;
        if (secondUserLogin > firstUserLogin) return -1;

        return 0;
    }
};
