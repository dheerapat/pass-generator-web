const lower = 'abcdefghijklmnopqrstuvwxyz';
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';
const special = '!@#$%()_*+-';

const strings = lower + upper + nums + special;
//console.log(strings)
let password = ""
//console.log(typeof (password))

let button = document.getElementById('button');
let pw = document.getElementById('pw');
let copy = document.getElementById('copy');

const generatePass = () => {
    let len = 16;
    let ind = 0;
    var arr = [];

    for (i = 0; i < len; i++) {
        ind = Math.floor(Math.random() * strings.length);
        arr.push(strings[ind]);
        password = arr.join('');
    };
    pw.innerHTML = password;
    copy.style.visibility = 'visible';
};

button.onclick = generatePass;

copy.onclick = function () {
    let copied = document.getElementById('pw').innerHTML;
    navigator.clipboard.writeText(copied);
};