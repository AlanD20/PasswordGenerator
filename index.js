const gen = document.querySelector('.gen');
const capital = document.querySelector('.capitals');
const numbers = document.querySelector('.numbers');
const symbols = document.querySelector('.symbols');
const display = document.querySelector('.passwordDisplay');
const amountRange = document.querySelector('.amountRange');
const amountNumber = document.querySelector('.amountNumber');


amountRange.addEventListener('input', changer);
amountNumber.addEventListener('input', changer);
function changer(e){
  
  amountRange.value = e.target.value;
  amountNumber.value = e.target.value;
}

const char_uppercase = geenratingChar(65, 90);
const char_lowercase = geenratingChar(97, 122);
const char_numbers = geenratingChar(48, 57);
const char_symbols = geenratingChar(35,38).concat(geenratingChar(40, 43)).concat(geenratingChar(63, 64));

gen.addEventListener('click', generate);

function generate(e){

e.preventDefault();
let char_password = char_lowercase;
if(capital.checked) char_password = char_password.concat(char_uppercase);
if(numbers.checked) char_password = char_password.concat(char_numbers);
if(symbols.checked) char_password = char_password.concat(char_symbols);
if(amountNumber.value > 50)
	amountNumber.value = 50;
let generatedPassword = [];

for(let i=0;i<=amountNumber.value;i++){
let characters = char_password[Math.floor(Math.random() * char_password.length)];
generatedPassword.push(String.fromCharCode(characters));
}
display.innerText =  generatedPassword.join('');

}

function geenratingChar(low, high){
let chars = [];

  for(let i=low;i<=high;i++)
      chars.push(i);

  return chars;
}