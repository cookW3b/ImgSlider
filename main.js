'use strict'

let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');

let dots = document.getElementsByClassName('dot');

let slides = document.getElementsByClassName('sliders__item');

let slideNum = 0;

nextBtn.addEventListener('click', () => {
	if(slideNum === 3) {
		slides[slideNum].classList.toggle('active');

		dots[slideNum].classList.toggle('active');

		slideNum = 0;

		slides[slideNum].classList.toggle('active');
	} else{
		slides[slideNum].classList.toggle('active');
		slides[slideNum + 1].classList.toggle('active');
		dots[slideNum].classList.toggle('active');

	
		slideNum++;
	}
	dots[slideNum].classList.toggle('active');
})

prevBtn.addEventListener('click', () => {
	slides[slideNum].classList.toggle('active');
	dots[slideNum].classList.toggle('active');

	if(slideNum === 0){
		slideNum = 3;
		slides[slideNum].classList.toggle('active');

	} else {
		slides[slideNum - 1].classList.toggle('active');

		slideNum--;
	}
	dots[slideNum].classList.toggle('active');

	console.log(slideNum)
})

for (let a = 0; a < dots.length; a++){
	dots[a].addEventListener('click', () => {
		dots[slideNum].classList.toggle('active');
		dots[a].classList.toggle('active');
		slides[slideNum].classList.toggle('active');
		slides[a].classList.toggle('active');

		slideNum = a;
	})
}