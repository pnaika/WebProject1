var slideimages = new Array() // create new array to preload images
slideimages[5] = new Image() // create new instance of image object
slideimages[5].src = "files/miscphotos/5468002282_5cd8fc06c4_b.jpg" // set image object src property to an image's src, preloading that image in the process
slideimages[1] = new Image()
slideimages[1].src = "files/miscphotos/hotcoffee.jpg"
slideimages[0] = new Image()
slideimages[0].src = "files/miscphotos/beans1.jpg"
slideimages[6] = new Image()
slideimages[6].src = "files/miscphotos/5484208335_7281e9fffd_b.jpg"
slideimages[4] = new Image()
slideimages[4].src = "files/miscphotos/5970884485_e5ee84b84a_b.jpg"
slideimages[3] = new Image()
slideimages[3].src = "files/miscphotos/4180675282_54f8a4c1a5_b.jpg"
slideimages[2] = new Image()
slideimages[2].src = "files/miscphotos/8808069436_6324fea6bb_b.jpg"
slideimages[7] = new Image()
slideimages[7].src = "files/grid-cell-1256-1405413576-0.jpg"


var step=0
function slideit(){
	//if browser does not support the image object, exit.
	if (!document.images)
		return
	document.getElementById('slide').src = slideimages[step].src
	if (step<7)
		step++
	else
		step=0
	//call function "slideit()" every 2.5 seconds
	setTimeout("slideit()",2000)
}
//e-mail Validation Subscribe button
function message(){
	var emvalue = document.getElementById('email').value;
	if(emvalue == ""){
    	alert('Please Enter e-mail address');
       	document.getElementById('email').style.borderColor = "red";
       	document.getElementById('email').focus();
       	document.getElementById('email').select();                
       	return false;
   	}else{
   		alert("Thank you for your email");
	}
}

function FormValidationContact(){
	//name Validation
	var fn=document.getElementById('firstname').value;
    if(fn == ""){
        alert("What is your first Name?");
        document.getElementById('firstname').style.borderColor = "red";
        document.getElementById('firstname').focus();
        document.getElementById('firstname').select();
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
    //comment field validation
    var comf = document.getElementById('commentfield').value;
    if(comf == ""){
        alert("Your comment will really help us to assist!");
        document.getElementById('commentfield').style.borderColor = "red";
        document.getElementById('commentfield').focus();
        document.getElementById('commentfield').select();                
        return false;
    }else
    {
    	alert('Thank you for Contacting Us , We will get back to you soon!!')
    } 

}

//Sign In form validation
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
        alert('You forgot to enter last name!!');
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
    }else
    {
    	alert('Thank you for Signing with us !!')
    } 

}