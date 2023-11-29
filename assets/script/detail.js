'use strict';

class User {
    #id;
    #fullName;
    #email;
    #userName;

    constructor(id, fullName, email, userName) {
        this.#id = id;
        this.#fullName = fullName;
        this.#email = email;
        this.#userName = userName;
    }

    get id() {return this.#id};
    get fullName() {return this.#fullName};
    get email() {return this.#email};
    get userName() {return this.#userName};
}

class Subscriber {
    #pages
    #groups
    #canMonitize

    constructor(pages, groups, canMonitize) {
        this.#pages = pages;
        this.#groups = groups;
        this.#canMonitize = canMonitize;
    }

    get pages() {return this.#pages};
    get groups() {return this.#groups};
    get canMonitize() {return this.#canMonitize};
}