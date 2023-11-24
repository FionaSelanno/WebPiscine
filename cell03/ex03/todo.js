let list = document.querySelector("#ft_list");

function askToDo(){
	let todo = prompt("Please enter your todo-item: ");
	console.log(list);
	if (todo == "")
		alert("Input can't be empty!");
	else{
		let div = document.createElement("div");
		div.innerHTML=todo;
		div.className = "item";
		list.prepend(div);
		console.log(list.childNodes);
	}
	saveDataLocal();
}

list.addEventListener("click", (e)=>{
	let toggle = 0
	let answer = prompt("Are you sure you want to delete this item? Type in YES or NO:  ");
	if (e.target.className=="item"){
		while (toggle == 0){
			if (answer == "YES")
			{
				toggle = 1;
				e.target.remove();
				break ;
			}
			else if (answer == "NO") 
			{
				toggle = 1
				break;
			} else {
				toggle = 0
				answer = prompt("I don't understsand your answer. Please try again. Type in YES or NO: ")
			}
		}	
	}
	saveDataLocal();
});

function saveDataLocal(){
    localStorage.setItem("data", list.innerHTML);
}

function showTask(){
    const savedData = localStorage.getItem("data");
    if(savedData){
        list.innerHTML = savedData;
    }
}
window.addEventListener("load", showTask);