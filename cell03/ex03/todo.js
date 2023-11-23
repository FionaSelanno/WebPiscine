function askToDo(){
	let todo = prompt("Please enter your todo-item: ");
	let list = document.querySelector("#ft_list");
	console.log(list);
	if (todo == "")
		alert("Input can't be empty!");
	else{
		let div = document.createElement("div");
		div.className = "item";
		div.onclick = removeItem();
		list.prepend(todo, div);
		console.log(list.childNodes);

	}
}

function removeItem(){
	console.log("remove");
}

let item