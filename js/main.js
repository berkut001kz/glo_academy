// console.log("hello world!");
// console.warn("hello world!");
// console.error("hello world!");
// console.dir(document);
// console.dir(document.documentURI);
// alert('hello world!');


// Айнымалының 3 түрі бар;
// 1) var Ескірген түрі. 
// 2) let Жақында шыққан
// 3) const Жақында шыққан

/*
var myVar = 10; //1-ші түрі

let myLet = 15;	// 2-ші түрі 

const myConst = 20;	// 3-ші түрі
*/

// Олардын айырмашылығы неде? Іздеп көремін

// 1) var Егер тіркелмеген айнымалы болса undefined қайтарады және келесі кодтарды оқиды мысал астында 
// Кеңес:  var айнымалысын қолданбауға кеңес берді

// 2) let Егер тіркелмеген айнымалы болса қате шығарады және келесі кодтарды оқымайды	мысал астында 

// 3) const Бастапқы мәнің өзгертпейді мысал астында 

// ***************** 1) var ***************** ***************** ***************** *****************

// 1) var Егер тіркелмеген айнымалы болса undefined қайтарады және келесі кодтарды оқиды
/*console.log(a); // undefined main.js:23  a айнымалысын жоқ деп шығарды 
var a = 10;
console.log(a);  // 10
*/
// Қайтарды undefined main.js:23    10

// ***************** 2) let ***************** ***************** ***************** *****************

// 2) let Егер тіркелмеген айнымалы болса қате шығарады және келесі кодтарды оқымайды
/*console.log(b1); // main.js:29 Uncaught ReferenceError: Cannot access 'b' before initialization at main.js:29
let b1 = 15;
console.log(b1); // осыны қайтармады
*/

/*// 2) let
let b2 = 15;
console.log(b2); // 15 қайтарды
*/

// ***************** 3) const ***************** ***************** ***************** *****************

// 3) const Бастапқы мәнің өзгертпейді

/*const c = 15;
console.log(c); // 15
c = 10;
console.log(c); // main.js:50 Uncaught TypeError: Assignment to constant variable. at main.js:50*/



// ***************** Жақша ішіндегі айырмашылық ***************** ***************** ***************** *****************

// 1) var айнымалысын Жақша ішінде тіркеу - Жақша ішіндегін жақша сырттында оқи алады

// 2) let айнымалысын Жақша ішінде тіркеу - Жақша ішіндегін жақша сырттында оқи алмайды

// 3) const айнымалысын Жақша ішінде тіркеу - Жақша ішіндегін жақша сырттында оқи алмайды



// ***************** 1) var ***************** ***************** ***************** *****************

/*{
	var a = 20; // a айнымалысын Жақша ішінде тіркеу
}

// a айнымалысын жақша сырттында шақыру 
console.log(a); // 20 қайтарды! Жақша ішіндегін жақша сырттында оқи алады
*/


// ***************** 2) let ***************** ***************** ***************** *****************

/*{
	let b = 20; // b айнымалысын Жақша ішінде тіркеу
}

// b айнымалысын жақша сырттында шақыру 
console.log(b); // main.js:83 Uncaught ReferenceError: b is not defined at main.js:83 қайтарды! Жақша ішіндегін жақша сырттында оқи алмайды
*/

// ***************** 3) const ***************** ***************** ***************** *****************

/*{
	const c = 20; // c айнымалысын Жақша ішінде тіркеу
}

// b айнымалысын жақша сырттында шақыру 
console.log(c); // main.js:93 Uncaught ReferenceError: c is not defined at main.js:93 қайтарды! Жақша ішіндегін жақша сырттында оқи алмайды
*/

// ***************** JavaScript деректер түрлері***************** ***************** ***************** *****************

// const number = 10;
// const string = "Hello World"; // "" - Қос тырнақша осындайды түсіне алмайды және тікелей оқиды  ${'Hello' + ' World'}
// const string2 = 'Hello World'; // '' - Жалғыз тырнақша осындайды оқи алмайды және қате шығады ${'Hello' + ' World'}
// const templateString = `Hello ${'Hello' + ' World'}`; // `` - Қыйғаш тырнақша осындайды оқи алaды ${'Hello' + ' World'}
// const bool = true; // (true \ false) 
/* const obj = {
 	name: 'berkut001',
 	age: 18,
 	family: {
 		father: 'berkut01',
 		mother: 'berkut02'
 	},
	arr: ['Hollo', 5, true, null, [1, 2, 3], {a: 1, b: 2}]
 };*/

// const arr = ['Hollo', 5, true, null, [1, 2, 3], {a: 1, b: 2}];

// const err = error('Қате шықты');

// const date = new Date();

// console.log(obj);



// ***************** Сабақ аяқталды ***************** ***************** ***************** ****************




// ***************** Практика басталды ***************** ***************** ***************** ****************

// left-menu-ді айнымалыға тіркеу

const leftMenu = document.querySelector('.left-menu');
const hamburger = document.querySelector('.hamburger');

// left-menu-дін Ашылып | Жабылуын жасау

// toggle ашады және жабады | қосады және тазартады
// remove жабады | тазартады 
// closest іздейді


hamburger.addEventListener('click', () => {
	leftMenu.classList.toggle('openMenu');
	hamburger.classList.toggle('open');
});

document.addEventListener('click', (event) => {
	if (!event.target.closest('.left-menu')) {
		leftMenu.classList.remove('openMenu');
		hamburger.classList.remove('open');
	}
});


leftMenu.addEventListener('click', (event) => {
	const target = event.target;
	const dropdown = target.closest('.dropdown');
	if (dropdown) {
		dropdown.classList.toggle('active');
		leftMenu.classList.add('openMenu');
		hamburger.classList.add('open');

	}
});





document.querySelectorAll('.tv-card__img').forEach((el, src) => {
	el.addEventListener('mouseenter', () => (src = el.src) && (el.src = el.getAttribute('data-backdrop')));
	el.addEventListener('mouseleave', () => el.src = src);
});



/*const switchImage = (src) => {
    document.querySelectorAll('.tv-card__img').forEach((el) => {
      el.addEventListener('mouseenter', () => {
        src = el.src;
        el.src = el.getAttribute('data-backdrop');
      })
      el.addEventListener('mouseleave', () => {el.src = src});
    });
  }
  switchImage();*/

// console.dir(document.querySelectorAll('.tv-card__img'));




