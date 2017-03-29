window.addEventListener('load', function(){
	var id=0;
	var arrayUsuario=[];

	function Usuario(id,nombre,apellido,correo,password){
		this.id = id
		this.nombre = nombre;
		this.apellido = apellido;
		this.correo = correo;
		this.password = password;
	}

	var soloLetras = function(e){
		console.log(e.keyCode);
		var keyCode = e.keyCode;
		if((keyCode>=97 && keyCode<=122) || (keyCode>=65 && keyCode<=90) || keyCode==32 || keyCode==209 || keyCode==110){
			this.nextElementSibling.nextElementSibling.innerText = "";
			return true;
		}else{
			this.nextElementSibling.nextElementSibling.innerText = "Este campo solo debe contener letras";
			return false;
		}
	}

	var validacionInput = function(e){
		if(this.value.trim().length!=0){
			this.value = this.value.trim();
			this.nextElementSibling.nextElementSibling.innerText = "";
		}else{
			this.nextElementSibling.nextElementSibling.innerText = "Este campo es Obligatorio";
		}
	}

	var validarPassword = function(password){
		return (password.length>=6 && password.length<=20)
	
	}

	var validarEmail = function(email){
		if(/([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})/gi.test(email)){
			return true;
		}else{
			return false;
		}
	}

	var arrayInput = document.getElementsByClassName('input-registro');
	console.log(arrayInput);

	for(var i=0; i<arrayInput.length;i++){
		arrayInput[i].onblur = validacionInput;

		if(arrayInput[i].id ==="nombre" || arrayInput[i].id === "apellido"){
			arrayInput[i].onkeypress = soloLetras;
		}
	}

	var botonRegistrar = document.getElementById('botonRegistrar');
	botonRegistrar.addEventListener('click', function(e){
		e.preventDefault();
		id++;
		var nombre = document.getElementById('nombre').value;
		var apellido = document.getElementById('apellido').value;
		var correo = document.getElementById('correo').value;
		var password = document.getElementById('password').value;

		if(nombre.length!=0 && apellido.length!=0 && correo.length!=0 && password.length!=0){
			if(validarEmail(correo)){
				this.nextElementSibling.nextElementSibling.innerText = "";

					if(validarPassword(password)){
						this.nextElementSibling.nextElementSibling.innerText = "";
						var usuario = new Usuario(id,nombre,apellido,correo,password);
						arrayUsuario.push(usuario);
						console.log(arrayUsuario);
						localStorage.setItem("arrayObjeto",JSON.stringify(arrayUsuario));
						localStorage.setItem("nuevoUsuario",JSON.stringify(usuario));
						window.location = "perfilUsuario.html";
					}else{
						this.nextElementSibling.nextElementSibling.innerText = "Tu contraseña debe contener entre 6 o 20 caracteres";
					}
				
			}else{
				this.nextElementSibling.nextElementSibling.innerText = "El campo CORREO debe tener este formato: correo@dominio.com";
			}


		}else{
			document.getElementById('spanRegistrar').innerText = "Todos los campos son obligatorios";
		}
	});
});