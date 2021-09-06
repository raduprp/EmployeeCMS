const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
function onFormSubmit() {
    var formData = readFormData();
    insertNewRecord(formData);
    resetForm();
}
function readFormData() {
    var formData = {};
    formData["firstName"] = document.getElementById("firstName").value;
    formData["lastName"] = document.getElementById("lastName").value;
    formData["email"] = document.getElementById("email").value;
    formData["sex"] = document.getElementById("sex").value;
    formData["birthday"] = document.getElementById("birthday").value;
    formData["image"] = document.getElementById("image").value;
    return formData;
}
function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell = newRow.insertCell(0);
    cell.innerHTML = data.firstName;
    cell = newRow.insertCell(1);
    cell.innerHTML = data.lastName;
    cell = newRow.insertCell(2);
    cell.innerHTML = data.email;
    cell = newRow.insertCell(3);
    cell.innerHTML = data.sex;
    cell = newRow.insertCell(4);
    cell.innerHTML = data.birthday;
    cell = newRow.insertCell(5);
    cell.innerHTML = data.image;
    cell = newRow.insertCell(6);
    cell.innerHTML = `<i class="fa fa-remove" onClick="onDelete(this)"></i>`;
}
function resetForm() {
    document.getElementById("firstName").value ="";
    document.getElementById("lastName").value ="";
    document.getElementById("email").value ="";
    document.getElementById("sex").value ="";
    document.getElementById("birthday").value ="";
    document.getElementById("image").value ="";
    selectedRow = null;
}
function onDelete(td) {
    if(confirm('Are you sure you want to delete this member?')){
    row= td.parentElement.parentElement;
    document.getElementById("employeeList").deleteRow(row.rowIndex);
    resetForm();}
}

th = document.getElementsByTagName('th');

for(let c=0; c< th.length; c++){
    th[c].addEventListener('click',item(c))
}

function item(c){

    return function(){
        console.log(c)
        sortTable(c)
    }
}



function sortTable(c) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("employeeList");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /* Loop through all table rows (except the
        first, which contains table headers): */
        for (i = 1; i < (rows.length - 1); i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;
            /* Get the two elements you want to compare,
            one from current row and one from the next: */
            x = rows[i].getElementsByTagName("TD")[c];
            y = rows[i + 1].getElementsByTagName("TD")[c];
            /* Check if the two rows should switch place,
            based on the direction, asc or desc: */
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            // Each time a switch is done, increase this count by 1:
            switchcount++;
        } else {
            /* If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again. */
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}