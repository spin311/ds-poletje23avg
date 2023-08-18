



function send() {
	var nameValue = document.getElementById("msg").value;
	const newMsg = document.createElement("center");
	nameValue = '<div class="ediv"><p>' + nameValue + "</p></div>";
	newMsg.innerHTML = nameValue;
	document.body.append(newMsg);


}

function create() {
	const o = document.createElement("center");
	nameValue = '<div class="ediv"><p>my dog is doing quad flips</p></div>';
	o.innerHTML = nameValue;
	document.body.append(o);


	const o1 = document.createElement("center");
	nameValue1 = '<div class="ediv"><p>he wants to go on an 4 year walk</p></div>';
	o1.innerHTML = nameValue1;
	document.body.append(o1);



	const o2 = document.createElement("center");
	nameValue2 = '<div class="ediv"><p>ahhhhhhhhhhhhh fine</p></div>';
	o2.innerHTML = nameValue2;
	document.body.append(o2);
}
