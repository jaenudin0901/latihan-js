// const close = document. querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', function() {
// 	card.style.display = 'none';
// });

// DOM  Travelsal
const close = document.querySelectorAll('.close');

// for(let i = 0; i < close.length; i++) {
	// close[i].addEventListener('click', function(e) {
	// close[i].parentElement.style.display ='none';
	// e.target.parentElement.style.display ='none';
	// });
// }

// Cara lain

close.forEach(function(el) {
	el.addEventListener('click', function(e) {
		e.target.parentElement.style.display =' none';
	});
});





const nama = document.querySelector('.nama');
console.log(nama .previousElementSibling );