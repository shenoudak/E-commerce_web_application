var bodylogin=document.getElementById('_bodylogin');
var username=document.getElementById('userName');
console.log(username);
var userPassword=document.getElementById('userPassword');
bodylogin.onload=function(){
	if(localStorage.getItem("name")==null||localStorage.getItem("password")==null){
//		alert('Not Found data in localStorage');
	}
	else{
		username.value=localStorage.getItem("name");
		userPassword.value=localStorage.getItem("password");
	}
}
var islogin = false;
var index = -1;
var jsonName = [];
var jsonPassword = [];
var dataObj = [];
var isFound = false;
var btn = document.getElementById("btn");
console.log(btn);

function checkUser() {
	fetch("../Json/user.json").then(function (res) {
		console.log(res);
		return res.json()
	}).then(function (data) {
		dataObj = data.users;
		var userName = document.getElementById("userName").value;
		var userPassword = document.getElementById("userPassword").value;
		for (var i = 0; i < dataObj.length; i++) {
			console.log(dataObj[i].name);
			console.log(dataObj[i].password);
			if ((dataObj[i].name == userName) && (dataObj[i].password == userPassword)) {
				isFound = true;
				break;
			}

		}
		if (isFound == true) {
			console.log("valid");
		} else {
			console.log("not valid");
		}

		console.log(dataObj);
		for (var i = 0; i < dataObj.length; i++) {
			for (var j = 0; j < data.users; j++) {
				jsonName[i] = dataObj[j].name;
			}
		}
	});
}