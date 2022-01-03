var userInput=document.getElementById('userName');
userInput.addEventListener('focus',function(event){
	event.target.style.border="3px solid blue";
});
var spanId=document.getElementById('span1');
var spanId2=document.getElementById('span2');
spanId.innerHTML='';
spanId2.innerHTML='';
console.log(spanId);
userInput.addEventListener('blur',function(event){
	event.target.style.border="1px solid black ";
	if(event.target.value.length<3){
		spanId.innerHTML="<img src='../images/signUp/error.jpg'  width='30px' height='30px'>" ;
		event.target.select();
		event.target.style.backgroundColor="grey";
	}
	else{
		spanId.innerHTML="<img src='../images/signUp/valid.png' width='30px' height='30px'>";
		event.target.style.backgroundColor="white";
	}

});
var pass=document.getElementById('userPassword');
var RepPass=document.getElementById('userRepeatPassword');
RepPass.addEventListener('blur',function(event){
	if(pass.value!=RepPass.value){
		event.target.style.backgroundColor="grey";
		spanId2.innerHTML="<img src='../images/signUp/error.jpg'  width='30px' height='30px'>";
		RepPass.focus();
	}
	else{
		spanId2.innerHTML="<img src='../images/signUp/valid.png' width='30px' height='30px'>";
		event.target.style.backgroundColor="white";
	}
});

function handleSubmit(e){
	if(pass.value!=RepPass.value || userInput.value.length<3){
		e.preventDefault();
	}
	else{
		saveData(userInput,pass);
		localStorage.setItem("isLogin","true");
	}
}
//var username=document.getElementById('userName');
//console.log(username);
//var userPassword=document.getElementById('userPassword');
//console.log(userPassword);
function saveData(username,userpass){
	localStorage.setItem("name",username.value);
	localStorage.setItem("password",userPassword.value);
	console.log(username.value);
	console.log(userPassword.value);
}
function getData(){
	if(localStorage.getItem("name")==null||localStorage.getItem("password")==null){
//		alert('Not Found data in localStorage');
	}
	else{
		username.value=localStorage.getItem("name");
		userPassword.value=localStorage.getItem("password");
	}
	


}