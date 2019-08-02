function first()

{
  name=document.forms["myform"]["first1"].value;
  if(name=="")
  {
      alert("Name field should not empty");
      return false;
  }

  else if(! isNaN(name))
    {
alert("number not allowed");
return false;
}
else
{
dob();
}


function dob()
{

    dateOfBirth=document.forms["myform"]["dob1"].value;

    if( dateOfBirth=="")
    {
        alert("Enter DOB");
        return false;
    }
  else
  {
    mobn();
  }


}

function mobn()

{

    mobNum=document.forms["myform"]["number"].value;
    lenMob=mobNum.length;
if(lenMob!=10)
{
    alert("Mobile number should be 10 digits");
}
else
{
    validateForm();
}
}



function validateForm() {
    var x = document.forms["myform"]["email1"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
     {
      alert("Not a valid e-mail address");
      return false;
    }

    else{
       password()
    }
  }

  function password()
{

    password=document.forms["myform"]["pswd1"].value;
    len=password.length;

    if(len<=7){
        alert("password should contain atlest 8 symbols")

    }
    
    else{
     match()
    }
}

function match()
{

    password2=document.forms["myform"]["pswd1"].value;
    password=document.forms["myform"]["pswd2"].value;

    if(password!==password2)
    {
        alert("password not matching")
    }
    else{
        alert("signUp complete please log in")
    }


 }
}