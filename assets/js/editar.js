window.addEventListener('load', function(){
	var nuevoUsuario = JSON.parse(localStorage.getItem("nuevoUsuario"));
	console.log(nuevoUsuario);

	var nombre = document.getElementById('nombre');
	var apellido = document.getElementById('apellido');
	var correo = document.getElementById('correo');
	var password = document.getElementById('password');

	nombre.value =nuevoUsuario.nombre;
	apellido.value =nuevoUsuario.apellido;
	correo.value =nuevoUsuario.correo;
	password.value =nuevoUsuario.password;
});