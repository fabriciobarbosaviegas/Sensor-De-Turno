const turno = new Date().getHours()
let t = document.getElementById('t')
let fundo = document.getElementById('fundo')
let img = document.getElementById('imagen')

if(turno < 12){
	t.innerHTML = 'Manhã'
	fundo.style.background = '#dbd655'
	img.src = 'manha.jpg'
}

else if(turno >= 12 && turno < 18){
	t.innerHTML = 'Tarde'
	fundo.style.background = '#d69d2c'
	img.src = 'tarde.jpg'
}

else{
	t.innerHTML = 'Noite'
	fundo.style.background = '#30302e'
	img.src = 'noite.jpg'
}
