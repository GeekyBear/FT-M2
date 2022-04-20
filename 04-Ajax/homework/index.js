var lista = document.getElementById('lista')
document.getElementById('boton').addEventListener("click", function(){	
	lista.innerHTML = ''
	fetch('http://localhost:5000/amigos')
  .	then(response => response.json())
  .	then(data => {
	  	data.forEach(element => {
		var newDiv = document.createElement("div");
		newDiv.innerHTML = element.name
		lista.appendChild(newDiv)
	  	//console.log(element)
  	})
  })
})

var searchButton = document.getElementById('search')
var searchInput = document.getElementById('input')

searchButton.addEventListener("click", function(){
	let index = searchInput.value
	$.get(`http://localhost:5000/amigos/${index}`, function(data, status){
    //alert("Nombre: " + data.name + "\nEdad: " + data.age);
	var friend = document.getElementById('amigo')
	friend.innerHTML = data.name
	if(!index) alert("No ingreso ningun valor");
  })
})

var deleteButton = document.getElementById('delete')
var deleteInput = document.getElementById('inputDelete')

deleteButton.addEventListener('click', function(){
	let index = deleteInput.value
	if(!index) alert("No ingreso ningun valor");
	$.ajax(`http://localhost:5000/amigos/${index}`, {type : 'DELETE'});

})