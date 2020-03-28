console.log("se cargo bien");
var flag=0;


function addElement(){
	var add = document.getElementById("addItemButton");
	add.addEventListener("click", (event)=>{
		event.preventDefault();
		console.log("hizo click");
		var input = document.getElementById("shoppingElements");
		console.log(list);
		let text=input.value;
		console.log(text);
		var list = document.getElementById("shoppingList");
		list.innerHTML+=`<li class="check"> ${text} </li><button class="check">Check</button><button class="delete">Delete </button>`;
		input.value=" ";	
	})
}

function checkFunction(){
	let container = document.querySelector('.listContainer');
	container.addEventListener("click", (event)=>{
		event.preventDefault();
		console.log("entro a check");
		if(event.target.matches('.check')){
			if(flag==0){
				console.log(flag);
				event.target.previousSibling.style.setProperty("text-decoration", "line-through");
				flag=1;
				console.log(flag);
			}
		
			else if(flag==1){
				console.log(flag);
				console.log(event.target.previousSibling.innerHTML);
				event.target.previousSibling.style.removeProperty('text-decoration');
				flag=0;
				console.log(flag);
			}
		}	
	
	})

}


function deleteElement(){
	let container = document.querySelector('.listContainer');
	container.addEventListener("click", (event)=>{
		event.preventDefault();
		console.log("entro a delete");
		if(event.target.matches('.delete')){
			console.log("hizo delete");
			event.target.previousSibling.previousSibling.remove();
			event.target.previousSibling.remove();
			event.target.remove();
		}
	})

}

function init(){
	addElement();
	checkFunction();
	deleteElement();
}

init();
