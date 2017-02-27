function submit(){
    var inputValue = document.getElementById("username").value;
    var username = document.getElementById("error");
    if (inputValue.length > 8){
        username.innerHTML = "";
    } else {
        username.innerHTML = "Username must have 8 characters or more!";
      }
    }

