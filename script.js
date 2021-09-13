
            // Import the functions you need from the SDKs you need
            import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
            // TODO: Add SDKs for Firebase products that you want to use
            // https://firebase.google.com/docs/web/setup#available-libraries
            import {getFirestore, doc, addDoc, setDoc, getDoc, getDocs, collection} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";

          
            // Your web app's Firebase configuration
            const firebaseConfig = {
              apiKey: "AIzaSyBEx9pDZF88KwsgtDXz3-opt2paHJSVD6k",
              authDomain: "employeecms3.firebaseapp.com",
              projectId: "employeecms3",
              storageBucket: "employeecms3.appspot.com",
              messagingSenderId: "624284959348",
              appId: "1:624284959348:web:55a05c699cdf6b7b12c721"
            };
          
            // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})


var th = document.getElementsByTagName('th');
for(let c=0; c< th.length; c++) {
    th[c].addEventListener('click',item(c))
}

function item(c) {

    return function() {
        console.log(c)
        sortTable(c)
    }
}

function sortTable(c) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("employeeList");
    switching = true;
    dir = "asc";
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[c];
            y = rows[i + 1].getElementsByTagName("TD")[c];
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;
        } else {
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}


const addPanelForm = document.querySelector('.panel-body .form-horizontal');

const list = document.querySelector('.list');

const renderUser = doc => {
    const tr = `
        <tr>
        <td>${doc.data().firstName}</td>
        <td>${doc.data().lastName}</td>
        <td>${doc.data().email}</td>
        <td>${doc.data().sex}</td>
        <td>${doc.data().birthday}</td>
        <td>${doc.data().image}</td>
        <td>
        
        <button class="btn btn-edit">Edit</button>
        <i class="fa fa-remove" onClick="onDelete(this)"></i>
        </td>
        </tr>
    `;
    list.insertAdjacentHTML('beforeend', tr);
}

whatever();

async function whatever(){
const querySnapshot = await getDocs(collection(db,'members'))
querySnapshot.forEach (doc => {
    renderUser(doc);
})
}


whatever1();

async function whatever1(){
    addPanelForm.addEventListener('submit', async e => {
    e.preventDefault();
    const querySnapshot = await addDoc(collection(db,'members'),{
        firstName: addPanelForm.firstName.value,
        lastName: addPanelForm.lastName.value,
        email: addPanelForm.email.value,
        sex: addPanelForm.sex.value,
        birthday: addPanelForm.birthday.value,
        image: addPanelForm.image.value
    })

})

}

