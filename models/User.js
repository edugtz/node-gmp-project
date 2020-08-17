import { v4 as uuid } from 'uuid';

export default class User {
    constructor(age, login, password, id = uuid()) {
        this.id = id;
        this.age = age;
        this.login = login;
        this.password = password;
        this.isDeleted = false;
    }
}
