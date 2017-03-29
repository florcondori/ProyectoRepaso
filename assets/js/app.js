window.addEventListener('load',function(){
	var registrar = document.getElementById('registrar');
	var login = document.getElementById('login');

	registrar.addEventListener('click',function(e){
		window.location = "registrarUsuario.html";
	});

	login.addEventListener('click',function(e){

		window.location = "loginUsuario.html";
	});
});