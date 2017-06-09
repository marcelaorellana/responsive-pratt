var nombre = document.getElementById("nameId");
var email = document.getElementById("emailId");
var mensaje = document.getElementById("comentId");

document.getElementById("submitId").addEventListener("click", function(val){

		if(nombre.value.charAt(0) != nombre.value.charAt(0).toUpperCase() || nombre.value == ""){
			
			nombre.classList.add('showInput');
		}else{
			nombre.classList.remove('showInput');
		}

		if(email.value.indexOf("@") == -1){
			email.classList.add('showInput');
		}else{
			email.classList.remove('showInput');
		}

		if(mensaje.value == ""){
			mensaje.classList.add('showInput');
		}else{
			mensaje.classList.remove('showInput');
		}

});

