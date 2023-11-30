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

class Subscriber extends User{
    #pages
    #groups
    #canMonitize

    constructor(id, fullName, email, userName, pages, groups, canMonitize) {
        super(id, fullName, email, userName);
        this.#pages = pages;
        this.#groups = groups;
        this.#canMonitize = canMonitize;
    }

    get pages() {return this.#pages};
    get groups() {return this.#groups};
    get canMonitize() {return this.#canMonitize};
}

const subscrib = new Subscriber(
    1, 
    "Zander Toews",
    "myrealemail@gmail.com",
    "ProgrammerGuy4326",
     "page 1",
     "group1",
     true
    );


    export { User, Subscriber};