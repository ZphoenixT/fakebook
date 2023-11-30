'use strict';

import {User, Subscriber, createPost} from "./utils.js";

const subscrib = new Subscriber(
    1, 
    "Zander Toews",
    "myrealemail@gmail.com",
    "ProgrammerGuy4326",
    "page 1",
    "group1",
    true
);

document.addEventListener("DOMContentLoaded", function() {
    const profileDiv = document.querySelector('.profile');
    const modal = document.getElementById('myModal');
    const closeBtn = document.getElementsByClassName('close')[0];
    
    //profile div
    profileDiv.addEventListener('click', () => {
        modal.style.display = 'block';
        document.getElementById('fullName').innerText = `Name: ${subscrib.fullName}`;
        document.getElementById('userName').innerText = `User Name: ${subscrib.userName}`;
        document.getElementById('email').innerText = `Email: ${subscrib.email}`;
        document.getElementById('groups').innerText = `Groups: ${subscrib.groups}`;
        document.getElementById('canMonetize').innerText = `Monetized: ${subscrib.canMonitize ? 'Yes' : 'No'}`;
      });
    
      //closing the modal
      closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    
      //click outside to closes
      window.addEventListener('click', function(event) {
        if (event.target == modal) {
          modal.style.display = 'none';
        }
      });

      const submitButton = document.querySelector('.submit');
    submitButton.addEventListener('click', () => {
        const textInput = document.querySelector('.postTxt');
        if (textInput.value.trim() === '') {
            textInput.focus();
        } else {
            createPost();
            textInput.value = '';
        }
    });

    });
