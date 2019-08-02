 
 function login() {
    var x = document.forms["myform"]["email1"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
     {
      alert("Not a valid e-mail address");
      return false;
    }

    else{
      return true;
    }
  }


function password()
{

    password=document.forms["myform"]["pswd"].value;
    len=password.length;

    if(len<=8){
        alert("password should contain atlest 8 symbols")

    }
    
    else{
        alert("Successfully logged in")
    }
}


