// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js';

import { getDatabase, ref, set } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js';

let registerBtn = document.getElementById('regBtn');

registerBtn.addEventListener('click', (event) => {

    event.preventDefault();

    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyAQ5_rzxXKDkhdX9owx_X51mDpmxaS4y8U",
        authDomain: "grace-life-conference-2022.firebaseapp.com",
        databaseURL: "https://grace-life-conference-2022-default-rtdb.firebaseio.com",
        projectId: "grace-life-conference-2022",
        storageBucket: "grace-life-conference-2022.appspot.com",
        messagingSenderId: "767148948486",
        appId: "1:767148948486:web:586860958dc74c6cfed787"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Initialize Realtime Database and get a reference to the service
    const database = getDatabase(app);


    //get form data and validate it
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let phoneNumber = document.getElementById('phonenumber').value
    let gender = document.getElementById('gender').value
    let invitedBy = document.getElementById('invitedBy').value
    let stateFrom = document.getElementById('stateFrom').value
    let stateTo = document.getElementById('stateTo').value


    function clearField() {
        document.getElementById('name').value = ''
        document.getElementById('email').value = ''
        document.getElementById('phonenumber').value = ''
        document.getElementById('invitedBy').value = ''
        document.getElementById('stateFrom').value = ''
        document.getElementById('stateTo').value = ''
    }


    function writeUserData(name, number, gender, invitedBy, from, to) {

        registerBtn.setAttribute('disabled', 'disabled')

        set(ref(database, 'attendants/' + name), {
            name: name,
            email: email,
            number: number,
            gender: gender,
            invitedBy: invitedBy,
            from: from,
            to: to,
            createdAt: new Date()
        })
            .then(() => {
                registerBtn.removeAttribute('disabled')
            })
            .catch(() => {
                registerBtn.removeAttribute('disabled')
            })
    }

    //check for not-null values
    let checked = name != null && name != "" && email != null && email != "" && phoneNumber != null && phoneNumber != "" && gender != null && gender != "" && invitedBy != null && invitedBy != "" && stateFrom != null && stateFrom != "" & stateTo != null && stateTo != ""

    if (checked) {
        writeUserData(name, email, phoneNumber, gender, invitedBy, stateFrom, stateTo)

        //show alert success
        const alertSuccess = document.getElementById('success');
        alertSuccess.removeAttribute('style')

        // setTimeout(() => { window.location.reload() }, 2000)

        //clear input field
        clearField()
    }
    else {

        //show alert danger
        const alertDanger = document.getElementById('danger');
        alertDanger.removeAttribute('style')
    }

})