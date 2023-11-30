'use strict';

import {User, Subscriber} from "./utils.js";

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
    const profileDiv = document.querySelector('.profile'); // Selecting by class
    const modal = document.getElementById('myModal');
    const closeBtn = document.getElementsByClassName('close')[0];

    // Event listener for the profile div
    profileDiv.addEventListener('click', () => {
        modal.style.display = 'block';
        document.getElementById('fullName').innerText = `Name: ${subscrib.fullName}`;
        document.getElementById('userName').innerText = `User Name: ${subscrib.userName}`;
        document.getElementById('email').innerText = `Email: ${subscrib.email}`;
        document.getElementById('groups').innerText = `Groups: ${subscrib.groups}`;
        document.getElementById('canMonetize').innerText = `Monetized: ${subscrib.canMonitize ? 'Yes' : 'No'}`;
      });
    
      // Event listener for closing the modal
      closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    
      // Clicking outside the modal closes it
      window.addEventListener('click', function(event) {
        if (event.target == modal) {
          modal.style.display = 'none';
        }
      });
    });
