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

function insertNewRecord(data){
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