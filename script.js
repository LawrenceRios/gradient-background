var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

color1.addEventListener("input", changeBackgroundColor);
color2.addEventListener("input", changeBackgroundColor);

function changeBackgroundColor(){
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value + ")";

	css.textContent = body.style.background + ";";
}

function isUserValid(bool){
	return bool;
}

//	conditional statement
var answer = isUserValid(true) ? "you may enter" : "Access denied";

var automatedAnswer = "Your acocunt # is " + ( isUserValid(false) ? "1234" : "not available");

//	same condition but using if else statement
function condition(){
	if (isUserValid(true)){
		return "you may enter";
	}
	else {
		return "Access denied";
	}
}

var answer2 = condition();

function moveCommand(direction){
	var whatHappens;
	switch (direction){
		case "forward":
			whatHappens = "you encounter a monster";
			break;
		case "back":
			whatHappens = "you arive at home";
			break;
		case "right":
			whatHappens = "you found a river";
			break;
		case "left":
			whatHappens = "you run into a troll";
			break;
		default:
			whatHappens = "please enter a valid direction";
	}
	return whatHappens;
}

//	new in ES6 (eCMAScript6)
//	let and const

const player = 'bobby';
let experience = 100;
let wizardLevel - false;

if (experience > 90){
	let wizardLevel = true;// only good inside of this scope
}

//	let is scope agnostic;
//	where var is scope driven;

//	destructuring and object
const obj = {
	player: 'bobby',
	experience: 100,
	wizardLevel: false,
}

//	access members of obj
const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

//	or use destructuring
const {player, experience} = obj;
let { wizardLevel} = obj;

//	new way of declaring object properties
const name = 'john snow';

const obj = {
	[name]: 'hello',
	['ray' + 'smith']: 'hihi'
}

//	if property and value are the same no need to declare both, just the property

//Template strings

const name = "Sally"
const age = 34;
const pet = "horse";

const greetingBest = `Hello ${name} you seem to be ${age-10}, What a beautiful ${pet} you have`;


//	Default agruments

function greet(name=' ', age=30, pet='cat'){
	return `Hello ${name} you seem to be ${age-10}, What a beautiful ${pet} you have`;
}

//symbol
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

//	arrow functions
function add(a,b){
	return a+b;
}

//	or like this
const add2 = (a,b) => a+b;

const array = [1,2,10,16];
const double = [];

const newArray = array.forEach((num) => {
	double.push(num * 2);
});

console.log('forEach', double);

//	map, filter, reduce

/*const mapArray = array.map((num) => {
	return num * 2;
});*/
const mapArray = array.map(num => num * 2);// short form since it's a one line operation

console.log('map', mapArray);

//	filter
const filterArray = array.filter(num => num > 5);
console.log('filterArray', filterArray);

//	reduce which uses an accumulator
const reduceArrya = array.reduce((accumulator, num) => accumulator + num,5);
console.log('reduce', reduceArrya);


//	context versus scope
const object4 = {
	a: function() {
		console.log(this);
	}
}

//instantiation
class Player {
	constructor(name, type) {
		this.name = name;
		this.type = type;
	}
	introduce(){
		console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
	}
}

class Wizard extends Player {
	constructor(name, type){
		super(name, type);
	}
	play() {
		console.log(`WEEEEE I'm a ${this.type}`);
	}
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('shawn', 'Dark Magic');

//	ES7 2016 has these new features
//	includes for strings
'Hellooooo'.includes('o'); //returns true
const pets = ['cat', 'dog','goat','horse'];

pets.include('dog');// returns true
pets.include('bird');// returns false

//	expotential operator
const square = (x) => x**2;// square of number
const cube = (y) => y**3;// cube of number ** is the expontial operator

//	ES8 2017
.padStart();// add spacing in front of string
.padEnd();// adds spaces to end of string

// ending comma in parameter list is now valid

//	treat objects like an array
Object.values
Object.entries
Object.keys

let obj = {
	username0: 'Santa',
	username1: 'Rudolf',
	username2: 'Mr.Grinch',
}

Object.keys(obj).forEach((key, index) => {
	console.log(key, obj[key]);
});


Object.values(obj).forEach(value => {
	console.log(value);
});

//	debugger key word stops javascript during execution and allows you
//	to step through code step by step with a watch panel.

const flattened = [[0,1],[2,3],[4,5]].reduce(
	(accumulator, array) => {
		debugger;
		return accumulator.concat(array);
	}, []);

//	function before debugging changes
const flattened = const flattened = [[0,1],[2,3],[4,5]].reduce(
(a,b) => a.concat(b), []);

//	Async Await

//Call stack
console.log('1');
setTimeout(() => {
	console.log('2');
}, 2000);// 2 second pause
console.log('3');

//	WEB API
//	setTimeout(), 2000 puts console.log into call stack queue
callback()// goes into call back queue
//	Callback Queue
//	goes to call stack when time out is up

//	Event Loop
//onClick, onLoad, onDone, go into call back queue

//	inline script is javascript in a html file,
//	not good since it is no-resuable code and polutes the global name space.

// script tags are ways to load javascript files early with each page, which means that each page
//	needs same sacript tags, polutes global namespace

//	Imediately invoked function execute, confusing way execute methods
var mApp = {}

//j2
(function(){
	myApp.add = function(a,b) {
		return a = b;
	}
})();
//	jQuery uses this: allows us to use $

//	Then came CommonJS + Browersify
//	JS1
module.exports = function add(a,b) {
	return a + b;
}

//	in JS2
var add = require("./add");// from JS1
//	this modulizes or bundles all the necessaary JS files together to load before site loads.
//	run JS files through Browserify before publishing to public

//	Then came ES6 + Webpack2
//	JS1
export const add = (a,b) => a+b;// this exports multiple functions
//	OR
export default function add() {// this exports just one function
	return a + b;
}

//JS2
import { add } from './add';// impors multiple functions
//OR
import add from './add';// import one function

//	Webpack2 bundles JS files prior to publishing, reads
//	dependecy tree to determine bundle order
//	webpack use a config file that bundles files
moduel.exports = {
	entry: './app/main.js',
	output: {
		path: './dist',
		filename: 'bundle.js'
	}
}
