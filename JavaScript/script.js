//////fetch User Data ////////////////////
"use strict"
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
//fetch("../Json/user.json").then(function (res) {
//	console.log(res);
//    return res.json()
//}).then(function (data) {
//	console.log(data);
//    dataObj = data.users;
//	var userName=document.getElementById("userName").value;
//	var userPassword=document.getElementById("userPassword").value;
//	console.log(userName);
//	console.log(userPassword);
//	
//	for(var i=0;i<dataObj.length;i++){
//		console.log(dataObj[i].name);
//		console.log(dataObj[i].password);
//		if((dataObj[i].name=="shenouda")&&(dataObj[i].password=="shenouda@123")){
//			isFound=true;
//			
//		}
//		
//	}
//	if(isFound==true){
//		console.log("valid");
//	}
//	else{
//		console.log("not valid");
//	}
//	
//	console.log(dataObj);
//	for(var i=0;i<dataObj.length;i++){
//		for(var j=0;j<data.users;j++){
//			jsonName[i]=dataObj[j].name;
//		}
////		jsonName[i]=dataObj[i].name;
////		jsonPassword=[i]=dataObj[i].password;
//	}
//	console.log(jsonName);
//	console.log(jsonPassword);
////	console.log(dataObj[0]);
////    jsonImage=dataObj[0].pic;
////	console.log(jsonImage);
//});

function show() {
	if (index == jsonName.length - 1) {
		index = -1;
	}
	index++;
	//console.log(typeof jsonName);
	console.log(jsonName[index].toString());
}
//var isFound=false;
//	var userName=document.getElementById("userName");
//	var userPassword=document.getElementById("userPassword");
//console.log(dataObj.name);
//function checkUser(dataObj){
//	var userName=document.getElementById("userName").value;
//	var userPassword=document.getElementById("userPassword").value;
//	console.log(userName);
//	console.log(userPassword);
//	
//	for(var i=0;i<dataObj.length;i++){
//		if((dataObj[i].name==userName)&&(dataObj[i].password==userPassword)){
//			isFound=true;
//			
//		}
//		
//	}
//	if(isFound==true){
//		console.log("valid");
//	}
//	else{
//		console.log("not valid");
//	}
//	
//}
///////////////////////end fetch User Data ///////////////////////////
////fetch Product Data ////////////////////
//var studentObj;
"use strict"
var index = -1;
var div;
var jsonName = [];
var jsonPic = [];
var dataObj = [];
var btn = document.getElementById("btn");
console.log(btn);
document.addEventListener('DOMContentLoaded', function () {
	fetch("../Json/products.json").then(function (res) {
		console.log(res);
		return res.json()
	}).then(function (data) {
		console.log(data);
		dataObj = data.Categories;
		console.log(dataObj);
		for (var i = 0; i < data.Categories.length; i++) {
			jsonName[i] = dataObj[i].name;
			jsonPic[i] = dataObj[i].picName;
			div = document.createElement('div');
			div.id = ('container' + i);
			//div.onclick="fun"+(i+1)+"()";
			div.className = 'div_dynamic';
			document.body.appendChild(div);
			var tag = document.createElement("p");
			var img = document.createElement("img");
			img.className = 'img_style';
			img.src = "../images/cat/" + jsonPic[i];
			img.id = ('_img' + i);
			var text = document.createTextNode(jsonName[i]);
			tag.appendChild(text);
			var element = document.getElementById("container" + i);
			element.appendChild(img);
			element.appendChild(tag);


		}

	});

}, false);
/////////////////fetch data with id cat///////////////
function _show_by(ind,img_folder) {
	console.log(ind);
	document.addEventListener('DOMContentLoaded', function () {
		console.log("hijj");
		fetch("../Json/products.json").then(function (res) {
			console.log(res);
			return res.json()
		}).then(function (data) {
			console.log(data);
			dataObj = data.Categories[ind];
			console.log(dataObj);
			for (var i = 0; i < dataObj.type.length; i++) {
				jsonName[i] = dataObj.type[i].name;
				jsonPic[i] = dataObj.type[i].picName;
				div = document.createElement('div');
				div.id = ('container' + i);
				//div.onclick="fun"+(i+1)+"()";
				div.className = 'div_dynamic';
				document.body.appendChild(div);
				var tag = document.createElement("p");
				var img = document.createElement("img");
				img.className = 'img_style';
				img.src = "../images/cat/"+img_folder+"/" + jsonPic[i];
				img.id = ('_img' + i);
				var text = document.createTextNode(jsonName[i]);
				tag.appendChild(text);
				var element = document.getElementById("container" + i);
				element.appendChild(img);
				element.appendChild(tag);


			}

		});

	}, false);
}
var _body = document.getElementById("_body");
_body.onload = function () {
	document.addEventListener('click', function (e) {
		if (e.target && e.target.id == 'container0' || e.target && e.target.id == '_img0') {
			_show_by(0,"mob");
			console.log("h");

		}
		else if (e.target && e.target.id == 'container1' || e.target && e.target.id == '_img1') {
			_show_by(1,"lab");

		}
		else if (e.target && e.target.id == 'container2' || e.target && e.target.id == '_img2') {
			_show_by(2,"key");

		}
		else  {
			_show_by(3,"mos");

		}
	});

}

//div.onclick=function(){
//	if(div.target.id=="container1"){
//		alert("container1");
//	}
//	if(div.target.id=="container2"){
//		alert("container2");
//	}
//	if(div.target.id=="container3"){
//		alert("container3");
//	}
//}
//fetch("../Json/products.json").then(function (res) {
//	console.log(res);
//    return res.json()
//}).then(function (data) {
//	console.log(data);
//    dataObj = data.Categories;
//	console.log(dataObj);
//	for(var i=0;i<data.Categories.length;i++){
//		jsonName[i]=dataObj[i].type[0].name;
//		
//		 var tag = document.createElement("p");
//         var text = document.createTextNode(jsonName[i]);
//         tag.appendChild(text);
//		var element = document.getElementById("new");
//        element.appendChild(tag);
//		
//	}
//});
console.log(jsonName);
//for(var i=0;i<jsonName.length;i++){
//	console.log(jsonName[i].name);
//}
//	console.log(dataObj[0]);
//    jsonImage=dataObj[0].pic;
//	console.log(jsonImage);
//});

//function show() {
//	if(index==jsonName.length-1){
//		index=-1;
//	}
//	index++;
//    //console.log(typeof jsonName);
//    console.log(jsonName[index].toString());
//}
/////////////////////////end fetch product Data ///////////////////////////
