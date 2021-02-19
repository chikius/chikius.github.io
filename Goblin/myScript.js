
function msg() {
  alert("think");
}

var input = document.querySelector('#ask');
var textarea = document.querySelector('#question');

input.addEventListener('focus', function () {
	textarea.value = '';
}
input.addEventListener('click', function () {
	textarea.value = '';
},);