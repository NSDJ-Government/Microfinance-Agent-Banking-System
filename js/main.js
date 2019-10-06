function myFunction() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[5];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}


//Below function Executes on click of login button
function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var level = document.getElementById("level").value;

  if (username == "admin" && password == "admin" && level == "Admin") {
    window.location = "welcomeAdmin.html"; //redirecting to other page
    return false;
  }
  else if (username == "agent" && password == "agent" && level == "Agent") {
    window.location = "welcomeAgent.html"; //redirecting to other page
    return false;

  }
  else {
    alert("Wrong user name and password;");
  }
}


function navigate_admin() {
  window.location.href = "welcomeAdmin.html";
}

function navigate_attendant() {
  window.location.href = "welcomeAgent.html";
}
