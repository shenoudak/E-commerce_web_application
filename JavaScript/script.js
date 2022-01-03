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
var content = document.getElementById("content");
var btn = document.getElementById("btn");
console.log(btn);
document.addEventListener('DOMContentLoaded', function () {
	AddFlagDataToStorage();
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
			content.appendChild(div);
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
var window;
var jsonAct_price = [];
var jsonPrice = [];
/////////////////fetch data with id cat///////////////
var subcontent = document.getElementById("subcontent");
var buttonName = "Add to cart";
var buttonName_after = "Added to cart";

function _show_by(ind, img_folder) {
	console.log(ind);
	content.style.display = "none";
	console.log(content.style.visibility);
	console.log("hijj");
	fetch("../Json/products.json").then(function (res) {
		console.log(res);
		return res.json();
	}).then(function (data) {
		console.log(data);
		dataObj = data.Categories[ind];
		console.log(dataObj.type.length);
		for (var i = 0; i < dataObj.type.length; i++) {
			console.log("hi");
			jsonName[i] = dataObj.type[i].name;
			jsonPic[i] = dataObj.type[i].picName;
			jsonAct_price[i] = dataObj.type[i].act_price;
			jsonPrice[i] = dataObj.type[i].price;
			div = document.createElement('div');
			div.id = ('container' + i);
			//div.onclick="fun"+(i+1)+"()";
			div.className = 'div_dynamic';
			subcontent.appendChild(div);
			//console.log(div);
			var tag = document.createElement("p");
			var act_price = document.createElement("h4");
			var price = document.createElement("h4");
			price.className = 'pr_style';
			var btn_add_to_cart = document.createElement("button");
			btn_add_to_cart.id = ('btn_add_to_cart' + i);
			var btn_name = document.createTextNode(buttonName);
			btn_add_to_cart.appendChild(btn_name);
			var img = document.createElement("img");
			img.className = 'img_style';
			img.src = "../images/cat/" + jsonPic[i];
			img.id = ('_img' + i);
			div.appendChild(img);
			var text = document.createTextNode(jsonName[i]);
			var text_aP = document.createTextNode(jsonAct_price[i]);
			var text_p = document.createTextNode(jsonPrice[i]);
			tag.appendChild(text);
			div.appendChild(tag);
			act_price.appendChild(text_aP);
			div.appendChild(act_price);
			price.appendChild(text_p);
			div.appendChild(price);
			div.appendChild(btn_add_to_cart);
			console.log(div);
			//content.style.visibility = "visible";




		}

	});



}

var _body = document.getElementById("_body");
_body.onload = function () {
	content.addEventListener('click', function (e) {
		if (e.target && e.target.id == 'container0' || e.target && e.target.id == '_img0') {
			_show_by(0);
			console.log(e.target);

		} else if (e.target && e.target.id == 'container1' || e.target && e.target.id == '_img1') {
			_show_by(1);

		} else if (e.target && e.target.id == 'container2' || e.target && e.target.id == '_img2') {
			_show_by(2);

		} else if (e.target && e.target.id == 'container3' || e.target && e.target.id == '_img3') {
			_show_by(3);

		} else {


		}
	});

}
console.log(jsonName[0]);
//
var sub_contenet = document.getElementById("subcontent");
sub_contenet.addEventListener('click', function (e) {
	if (e.target && e.target.id == 'btn_add_to_cart0') {
		if (e.target.textContent == buttonName) {
			addToCard(0, e);
		} else {
			removeFromCard(0, e);
		}

	}
	if (e.target && e.target.id == 'btn_add_to_cart1') {
		if (e.target.textContent == buttonName) {
			addToCard(1, e);
			console.log("add done done");
		} else {
			removeFromCard(1, e);
			console.log("remove done");
		}

	}
	if (e.target && e.target.id == 'btn_add_to_cart2') {

		if (e.target.textContent == buttonName) {
			console.log("add done done");
			addToCard(2, e);
		} else {
			removeFromCard(2, e);
			console.log("remove done");
		}

	}
	if (e.target && e.target.id == 'btn_add_to_cart3') {

		if (e.target.textContent == buttonName) {
			console.log("add done done");
			addToCard(3, e);
		} else {
			removeFromCard(3, e);
			console.log("remove done");
		}

	}
	if (e.target && e.target.id == 'btn_add_to_cart4') {

		if (e.target.textContent == buttonName) {
			console.log("add done done");
			addToCard(4, e);
		} else {
			console
			removeFromCard(4, e);
			console.log("remove done");
		}

	}
	if (e.target && e.target.id == 'btn_add_to_cart5') {

		if (e.target.textContent == buttonName) {
			console.log("add done done");
			addToCard(5, e);
		} else {
			removeFromCard(5, e);
			console.log("remove done");
		}

	} else {


	}
});
var counterElementInLocalStorage = 0;

function addToCard(ind, e) {

	saveData(jsonName[ind], jsonPrice[ind], jsonPic[ind], ind);
	//	var ele=document.getElementById(("btn_add_to_cart5"+ind));
	console.log(e.target);

	e.target.style.backgroundColor = "red";
	e.target.textContent = buttonName_after;
	//	buttonName=
	//	e.target.appendChild(document.createTextNode("Aded"));



}

function removeFromCard(ind, e) {

	//	saveData(jsonName[ind],jsonPrice[ind],jsonPic[ind],ind);
	//	var ele=document.getElementById(("btn_add_to_cart5"+ind));
	console.log(e.target);

	e.target.style.backgroundColor = "#AB5692";
	e.target.textContent = buttonName;
	RemoveDataFronLocalStorage(ind);
	//	buttonName=
	//	e.target.appendChild(document.createTextNode("Aded"));



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
//////////////////////////save and get and delete data from local storage/////////////////
var username = document.getElementById('userName');
console.log(username);
var userPassword = document.getElementById('userPassword');
console.log(userPassword);

function saveData(_name, _price, _img_src, ind) {
	localStorage.setItem(("name" + ind), _name);
	localStorage.setItem(("price" + ind), _price);
	localStorage.setItem(("image" + ind), _img_src);
	console.log(_name);
	console.log(_price);
	console.log(_img_src);
	counterElementInLocalStorage++;
}
var card_window;
var cardContent = document.getElementById("cardContent");
console.log(cardContent);

//function getDataFromLocalStorage() {
function getData() {
	//var myWindow=window.open('card.html/?test='+counterElementInLocalStorage,'');

	//		if (true) {
	//			div = document.createElement('div');
	//			div.id = 'container_less_data';
	//
	//			div.className = 'container_less_data_class';
	//			cardContent.appendChild(div);
	//			var tag = document.createElement("p");
	//			var text = document.createTextNode("NOt Element in Card");
	//			tag.appendChild(text);
	//			div.appendChild(tag);
	//			console.log(cardContent);
	//			card_window = window.open("card.html");


	//		}
	//		if (localStorage.getItem("name") == null || localStorage.getItem == null) {
	//			alert('Not Found data in localStorage');
	//		} else {
	//			username.value = localStorage.getItem("name");
	//			userPassword.value = localStorage.getItem("password");
	//		}



}
//}

function RemoveDataFronLocalStorage(ind) {

	localStorage.removeItem(("name" + ind));
	localStorage.removeItem(("price" + ind));
	localStorage.removeItem(("image" + ind));
	counterElementInLocalStorage--;
}
function AddFlagDataToStorage() {

	localStorage.setItem("isLogin", "false");
}
