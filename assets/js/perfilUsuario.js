window.addEventListener('load', function(){
	var nuevoUsuario = JSON.parse(localStorage.getItem("nuevoUsuario"));
	console.log(nuevoUsuario);

	var arraySpan = document.getElementsByClassName('span-input');
	console.log(arraySpan);

	var i=0;
	for(var prop in nuevoUsuario){
		arraySpan[i].innerText = nuevoUsuario[prop];
		i++;
	}

	var editar = document.getElementById('editar');
	editar.addEventListener('click', function(e){
		e.preventDefault();
		
		window.location = "editarUsuario.html";

	})
});