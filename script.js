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
    cell.innerHTML = `<a>Remove</a>`;
}

function resetForm() {
    document.getElementsById("firstName").value ="";
    document.getElementsById("lastName").value ="";
    document.getElementsById("email").value ="";
    document.getElementsById("sex").value ="";
    document.getElementsById("birthday").value ="";
    document.getElementsById("image").value ="";
}