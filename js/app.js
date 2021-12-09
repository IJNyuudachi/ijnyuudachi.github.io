const sec = document.querySelector('.sec');
const toggle = document.querySelector('.toggle');
toggle.onclick = function (){
	sec.classList.toggle('light')
}

const music = document.getElementById('music');
const player = document.querySelector('.player');
player.onclick = function (){
	player.classList.toggle('music')
	return music.paused ? music.play() : music.pause();
}

const woof = document.getElementById('woof');
const button = document.querySelector('.imgBx');
button.onclick = function (){
	return woof.play();
}
