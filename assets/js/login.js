window.addEventListener('load',function(){
	
	var arrayObjeto = JSON.parse(localStorage.getItem("arrayObjeto"));
	console.log(arrayObjeto);

	var login = document.getElementById('login');
	login.addEventListener('click',function(e){
		e.preventDefault();
		var email = document.getElementById('email').value;
		var password = document.getElementById('password').value;

		if(email.length!=0 && password.length!=0){
			var buscarUsuario=[];
			arrayObjeto.forEach(function(elem){
				if(elem.correo==email){
					buscarUsuario.push(elem);
				}
			});
			console.log(buscarUsuario.length);

			if(buscarUsuario.length !=0){

			}else{
				document.getElementById('email').disabled ="true";
				document.getElementById('password').disabled ="true";
				this.classList.add('ocultar');
				this.nextElementSibling.classList.remove('ocultar');
				this.nextElementSibling.nextElementSibling.classList.remove('ocultar');
			}

		}else{
			this.nextElementSibling.nextElementSibling.innerText= "llenar campos";
		}
	});

	var otraVez = document.getElementById('iniciarOtra');
	otraVez.addEventListener('click', function(e){
		e.preventDefault();
		document.getElementById('email').removeAttribute('disabled');
		document.getElementById('password').disabled ="false";
	});
});