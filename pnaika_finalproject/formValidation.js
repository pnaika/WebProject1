function FormValidation(){
    //First Name Validation 
    var fn=document.getElementById('firstname').value;
    if(fn == ""){
        alert("What is your first Name?");
        document.getElementById('firstname').style.borderColor = "red";
        document.getElementById('firstname').focus();
        document.getElementById('firstname').select();
        return false;
    }
    
    //Last Name Validation 
    var ln=document.getElementById('lastname').value;
    if(ln == ""){
        alert('Yoy forgot to enter last name!!');
        document.getElementById('lastname').style.borderColor = "red";
        document.getElementById('lastname').focus();
        document.getElementById('lastname').select();        
        return false;
    }

    //telephone Validation 
    var telnum = document.getElementById('telenum').value;
    var phoneno =/^\+?[0-9]{1}-+[0-9]{3}-+[0-9]{3}-+[0-9]{4}$/  
    if(telnum == ""){
        alert('Did you miss to enter your Phone number?');
        document.getElementById('telenum').style.borderColor = "red";
        document.getElementById('telenum').focus();
        document.getElementById('telenum').select();        
        return false;
    } 
    if(!telnum.match(phoneno)){
        alert('Check Phone Number format !! ,  proper format is. Eg: +1-312-647-8554');
        document.getElementById('telenum').style.borderColor = "red";
        document.getElementById('telenum').focus();
        document.getElementById('telenum').select();        
        return false;
    }

    //e-mail Validation 
    var emvalue = document.getElementById('email').value;
    var em = document.forms["formassign4"]["email_field"].value;
    var atposition = em.indexOf("@");
    var dotposition = em.lastIndexOf(".");
    if(emvalue == ""){
    	alert('Please Enter e-mail address');
        document.getElementById('email').style.borderColor = "red";
        document.getElementById('email').focus();
        document.getElementById('email').select();                
        return false;
    }
    if (atposition < 1 || dotposition<atposition+2 || dotposition+2>=em.length) {
        alert("Not a valid e-mail address");
        document.getElementById('email').style.borderColor = "red";
        document.getElementById('email').focus();
        document.getElementById('email').select();        
        return false;
    }

    // radio button validation
    if((document.getElementById('maleGender').checked == false) && (document.getElementById('FemaleGender').checked== false)){
        document.getElementById("gender").style.color = "red";
        alert('Please select Gender');
        document.getElementById('maleGender').focus();
        document.getElementById("gender").style.color = "black"; 
        return false;
    }

    //age dropdown validation
    var agef = document.getElementById("agefield").value;
    if(agef == ""){
        alert("Select age please..");
        document.getElementById("agefield").style.borderColor = "red";     
        document.getElementById("agefield").focus();
        return false;
    }    
    
    //comment field validation
    var comf = document.getElementById('commentfield').value;
    if(comf == ""){
        alert("Your comment will really help us to assist!");
        document.getElementById('commentfield').style.borderColor = "red";
        document.getElementById('commentfield').focus();
        document.getElementById('commentfield').select();                
        return false;
    } 

}