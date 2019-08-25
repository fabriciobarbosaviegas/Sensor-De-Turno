 		var atual = new Date()
 		var turno = atual.getHours()
 		var t = document.getElementById('t')
 		var fundo = document.getElementById('fundo')
 		var img = document.getElementById('imagen')
 		if(turno < 12){
 			t.innerHTML = `Manhã`
 			fundo.style.background = '#dbd655'
 			img.src = 'manha.jpg'
 		}
  		else if(turno >= 12 && turno < 18){
 			t.innerHTML = `Tarde`
 			fundo.style.background = '#d69d2c'
 			img.src = 'tarde.jpg'
 		}
 	 	else{
 			t.innerHTML = `Noite`
 			fundo.style.background = '#30302e'
 			img.src = 'noite.jpg'
 		}