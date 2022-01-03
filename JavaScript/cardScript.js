var cardbody = document.getElementById("_cardBody");
console.log(cardbody);
if (localStorage.getItem("isLogin") == "true") {
	cardbody.onload = show;
} else {
	div = document.createElement('div');
	div.id = 'container_less_data';

	div.className = 'container_less_data_class';
	cardbody.appendChild(div);
	var tag = document.createElement("p");
	var text = document.createTextNode("you should do Login Or Register before");
	tag.appendChild(text);
	div.appendChild(tag);
}

var cont = document.getElementById("cardContent");

function show() {
	if ((localStorage.length / 3) == 0) {
		div = document.createElement('div');
		div.id = 'container_less_data';

		div.className = 'container_less_data_class';
		cont.appendChild(div);
		var tag = document.createElement("p");
		var text = document.createTextNode("NOt Element in Card");
		tag.appendChild(text);
		div.appendChild(tag);
		console.log(cont);

	} else {
		for (var i = 0; i < 6; i++) {
			if (localStorage.getItem(("name" + i)) == null) {

			} else {

				div = document.createElement('div');
				div.id = ('container' + i);
				div.className = 'div_dynamic';
				cont.appendChild(div);
				var tag = document.createElement("p");
				var act_price = document.createElement("h4");
				var price = document.createElement("h4");
				var img = document.createElement("img");
				img.className = 'img_style';
				img.src = "../images/cat/" + localStorage.getItem("image" + i);
				img.id = ('_img' + i);
				div.appendChild(img);
				var text = document.createTextNode(localStorage.getItem("name" + i));
				var text_p = document.createTextNode(localStorage.getItem("price" + i));
				tag.appendChild(text);
				div.appendChild(tag);
				price.appendChild(text_p);
				div.appendChild(price);
				console.log(div);


			}


		}

	}


}
