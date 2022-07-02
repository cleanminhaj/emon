function registerCV(){

	var fname = $("#fname").val();
	var lname = $("#lname").val();
	var email = $("#email").val();
	var telephone = $("#telephone").val();
	var address = $("#address").val();
	var postcode = $("#postcode").val();
	var msg = $("#msg").val();


	$.ajax({

		type : 'post',
		url : 'ajax/register-cv.php',
		data : {
			'Fname' : fname,
			'Lname' : lname,
			'Email' : email,
			'Telephone' : telephone,
			'Address' : address,
			'Postcode' : postcode,
			'Message' : msg
		},
		success : function(data){
			if(data == 'ok'){
				alert("Thank your for your registration. Please check your email for login details.");
				resetForm();
			}else if(data == 'exists'){
				alert("Your email address is already registered to the system, Please try to login.");
			}else if(data == "invalid"){
				//alert(data);
				alert("Invalid entry found, Please check all the field and make sure all is valid.");
				
			}		
		}

	});

}

function registerUser(id){
	var fname = $("#fname").val();
	var lname = $("#lname").val();
	var email = $("#email").val();
	var telephone = $("#telephone").val();
	var address = $("#address").val();
	var postcode = $("#postcode").val();
	var dob = $("#dob").val();

	//alert(fname+" "+lname+" "+email+" "+telephone+" "+address+" "+postcode+" "+dob);

	$.ajax({
		type : 'post',
		url : 'ajax/register-user.php',
		data : {
			'fname' : fname,
			'lname' : lname,
			'email' : email,
			'telephone' : telephone,
			'address' : address,
			'postcode' : postcode,
			'dob' : dob
		},
		success : function(data){
			
			if(data == 'ok'){
				window.location.replace("submit_application.php?job_id="+id);
			}else if(data == 'exists'){
				alert("Your email address is already registered to the system, Please try to login.");
			}else{
				alert("Invalid entry found, Please check all the field and make sure all is valid.");
			
			}		

		}
	})

}

function registerEmployee(){
	var fname = $("#fname_emp").val();
	var lname = $("#lname_emp").val();
	var email = $("#email_emp").val();
	var telephone = $("#telephone_emp").val();
	var address = $("#address_emp").val();
	var postcode = $("#postcode_emp").val();
	var dob = $("#dob_emp").val();

	//alert(fname+" "+lname+" email is "+email+" "+telephone+" "+address+" "+postcode+" "+dob);

	$.ajax({
		type : 'post',
		url : 'ajax/register-user.php',
		data : {
			'fname' : fname,
			'lname' : lname,
			'email' : email,
			'telephone' : telephone,
			'address' : address,
			'postcode' : postcode,
			'dob' : dob
		},
		success : function(data){
			
			if(data == 'ok'){
				resetEmployee();
				alert("Your account has been created, Please check your email for login details.");
				window.location.replace("my-account.php");
			}else if(data == 'exists'){
				alert("Your email address is already registered to the system, Please try to login.");
			}else if(data == 'invalid'){
				alert("Invalid entry found, Please check all the field and make sure all is valid.");
			}else{
				alert(data);
			}		

		}
	})

}

function requestCallBack(){
		
	var call_name = $("#call_name").val();
	var call_telephone = $("#call_telephone").val();
	var call_msg = $("#call_msg").val();
	//alert(call_name + " and the telephone is  "+ call_telephone);
	if(call_name.length > 0 && call_telephone.length > 0 ){
			
		$.ajax({
			type : 'post',
			url : 'ajax/requestCallBack.php',
			data : {
				'call_name' : call_name,
				'call_telephone' : call_telephone,
				'call_msg' : call_msg
			},
			success : function(data){
				alert(data);
				$("#call_name").val('');
				$("#call_telephone").val('');
				$("#call_msg").val('');
			}
		});

	}else{
		alert("Name and Telephone number is required!");
	}

}

function loginAccount(){
	
	var email = $("#email").val();
	var password = $("#password").val();

	$.ajax({

		type : 'post',
		url : 'ajax/login.php',
		data : {
			'email_my_account' : email,
			'password_my_account' : password,
			'account' : 'user'
		},
		success : function(data){
			if(data == 'nope'){
				alert("Invalid Login Details, Please try again!");
			}else{
				window.location.replace("portal/user/");
			}
		}

	})

}

function loginCompany(){
	
	var email = $("#login_com_email").val();
	var password = $("#login_com_password").val();

	$.ajax({

		type : 'post',
		url : 'ajax/login.php',
		data : {
			'email_my_account' : email,
			'password_my_account' : password,
			'account' : 'company'
		},
		success : function(data){
			if(data == 'nope'){
				alert("Invalid Login Details, Please try again!");
			}else{
				window.location.replace("portal/company/");
			}
		}

	})

}

function loginUser(id){

	var email = $("#email_login").val();
	var pass = $("#password").val();

	$.ajax({
		type : 'post',
		url : 'ajax/login.php',
		data : {
			'email' : email,
			'password' : pass,
		},
		success : function(data){
			if(data == 'invalid'){
				alert("Invalid entry detected, Please check all the fields!");
			}else if(data == 'login'){
				alert("Login details did not match!");
			}else{
				window.location.replace("submit_application.php?job_id="+id);
			}
		}
	})

}


function resetPassword(){
	
	var email_reset = $("#email_reset").val();
	var password_reset = $("#password_reset").val();
	var password_again = $("#password_again").val();
	//alert(account);
	$.ajax({
		type : 'post',
		url : 'ajax/login.php',
		data : {
			'email_reset' : email_reset,
			'password_reset' : password_reset,
			'password_again' : password_again,
			'account' : 'user'
		},
		success : function(data){
			if(data == "password"){
				alert("Both password should be same, Please check again!");
			}else if(data == "invalid"){
				alert("Invalid entry detected, Please check again!");
			}else if(data == "not"){
				alert("Email address is not registered to our system");
			}else if(data == "done"){
				alert("Password has been set, Please try to login using the new password");
			}

			//alert(data);
		}
	})

}

function resetPasswordCompany(){
	
	var email_reset = $("#com_email_reset").val();
	var password_reset = $("#com_password_reset").val();
	var password_again = $("#com_password_again").val();
	//alert(account);
	$.ajax({
		type : 'post',
		url : 'ajax/login.php',
		data : {
			'email_reset' : email_reset,
			'password_reset' : password_reset,
			'password_again' : password_again,
			'account' : 'company'
		},
		success : function(data){
			//alert(data);
			if(data == "password"){
				alert("Both password should be same, Please check again!");
			}else if(data == "invalid"){
				alert("Invalid entry detected, Please check again!");
			}else if(data == "not"){
				alert("Email address is not registered to our system");
			}else if(data == "done"){
				alert("Password has been set, Please try to login using the new password");
			}

			//alert(data);
		}
	})

}

function registerCompany(){

	var com_name = $("#com_name").val();
	var com_address = $("#com_address").val();
	var com_postcode = $("#com_postcode").val();
	var com_email = $("#com_email").val();
	var con_name = $("#con_name").val();
	var com_telephone = $("#com_telephone").val();
	var con_position = $("#con_position").val();

	$.ajax({

		type : 'post',
		url : 'ajax/recruit-today.php',
		data : {
			'com_name' : com_name,
			'com_address' : com_address,
			'com_postcode' : com_postcode,
			'com_email' : com_email,
			'con_name' : con_name,
			'com_telephone' : com_telephone,
			'con_position' : con_position 
		},
		success : function(data){
			if(data == 'exists'){
				alert("Email address already register to the system, please login or use another email!");
				window.location.replace("my-account.php");
			}else if(data == 'invalid'){
				alert("Invalid entry detected, Please check all the input!");
			}else{
				alert("Your account has been created, please check your email for login details.");
				resetEmployer();
			}
		}

	})

}

function resetForm(){
	$("#fname").val('');
	$("#lname").val('');
	$("#email").val('');
	$("#telephone").val('');
	$("#address").val('');
	$("#postcode").val('');
	$("#msg").val('');
}

function resetEmployer(){
	$("#com_name").val('');
	$("#com_address").val('');
	$("#com_postcode").val('');
	$("#com_email").val('');
	$("#com_telephone").val('');
	$("#con_name").val('');
	$("#con_position").val('');
}

function resetEmployee(){
	$("#fname_emp").val('');
	$("#lname_emp").val('');
	$("#email_emp").val('');
	$("#telephone_emp").val('');
	$("#address_emp").val('');
	$("#postcode_emp").val('');
	$("#msg_emp").val('');
}