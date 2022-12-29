// `La letra "e" es convertida para "enter"
// ``La letra "i" es convertida para "imes"
// ``La letra "a" es convertida para "ai"
// ``La letra "o" es convertida para "ober"
// ``La letra "u" es convertida para "ufat"`

const textAreaIn = document.querySelector('#textIn');
const btnEncrypt = document.querySelector('#encry');
const btnDecrypt = document.querySelector('#decry');
const textOut = document.querySelector('#textOut');
const btnCopy = document.querySelector('#copyT');
let btnYellow = document.querySelector('body');
const searchLogo = document.querySelector('.searchLogo');
const pResult = document.querySelector('.pResult');

btnEncrypt.addEventListener('click', btnOnClick);
// console.log(textIn);

function btnOnClick() {
    //Encriptar
    const textIn = textAreaIn.value;
    let textLower = textIn.toLowerCase();
    // let textOut = document.getElementById('textOut');
    // textLower = textLower.split('');
    let textencrypt = '';
    for (let i = 0; i < textLower.length; i++) {
        if (textLower[i] == 'a' || textLower[i] == 'á') {
            textencrypt = textencrypt + 'ai';
        } else if (textLower[i] == 'e' || textLower[i] == 'é') {
            textencrypt = textencrypt + 'enter';
        } else if (textLower[i] == 'i' || textLower[i] == 'í') {
            textencrypt = textencrypt + 'imes';
        } else if (textLower[i] == 'o' || textLower[i] == 'ó') {
            textencrypt = textencrypt + 'ober';
        } else if (textLower[i] == 'u' || textLower[i] == 'ú') {
            textencrypt = textencrypt + 'ufat';
        } else {
            textencrypt = textencrypt + textLower[i];
        }
    }
    searchLogo.style.display = 'none';
    pResult.style.display = 'none';
    textOut.removeAttribute('hidden');
    textOut.innerText = textencrypt;
}

// btnYellow.addEventListener('click', colorYellow);

function colorYellow() {
    btnYellow.style.backgroundColor = '#FFFF00';
}

/* <button onClick="Mycolor()">Change Color</button>
            <div id="myID">Hello World</div>
            <script type="text/javascript">
                function Mycolor() {
                    var element = document.getElementById('myID');
                    element.style.backgroundColor = '#900';
                }
            </script> */

function decryptFunc() {
    //Desencriptar
    const textIn = textAreaIn.value;
    let textLower = textIn.toLowerCase();
    // textLower = textLower.split('');
    let textencrypt = '';
    for (let i = 0; i < textLower.length; i++) {
        if (textLower[i] == 'a' || textLower[i] == 'á') {
            textencrypt = textencrypt + 'ai';
        } else if (textLower[i] == 'e' || textLower[i] == 'é') {
            textencrypt = textencrypt + 'enter';
        } else if (textLower[i] == 'i' || textLower[i] == 'í') {
            textencrypt = textencrypt + 'imes';
        } else if (textLower[i] == 'o' || textLower[i] == 'ó') {
            textencrypt = textencrypt + 'ober';
        } else if (textLower[i] == 'u' || textLower[i] == 'ú') {
            textencrypt = textencrypt + 'ufat';
        } else {
            textencrypt = textencrypt + textLower[i];
        }
    }
    // console.log('textencrypt ' + textencrypt);
    searchLogo.style.display = 'none';
    pResult.innerText = textencrypt;
}

btnDecrypt.addEventListener('click', decryptFunc);

btnCopy.addEventListener('click', copyText);

function copyText() {
    var content = document.getElementById('textOut');
    content.select();
    document.execCommand('copy');
}
