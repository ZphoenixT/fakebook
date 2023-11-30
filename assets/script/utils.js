'use strict';

export { User, Subscriber, createPost};

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

// user info
const subscrib = new Subscriber(
    1, 
    "Zander Toews",
    "myrealemail@gmail.com",
    "ProgrammerGuy4326",
     "page 1",
     "group1",
     true
    );


    //the post maker

    function createPost() {
        const postFloor = document.querySelector('.postFloor');
    
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
    
        const userName = subscrib.userName;
        const currentTime = new Date();
        const textInput = document.querySelector('.postTxt').value;
    
        const day = currentTime.getDate();
    const year = currentTime.getFullYear();

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentTime.toLocaleDateString(undefined, options);

    const postContent = `
        <p class="username">${userName}</p>
        <p class="timestamp">${formattedDate}</p>
        <p class="text">${textInput}</p>
    `;
    
        postDiv.innerHTML = postContent;
        postFloor.insertBefore(postDiv, postFloor.firstChild);
    }