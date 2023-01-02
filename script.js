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
let body = document.querySelector('body');
const btnBlue = document.querySelector('.btnBlue');
const btnGray = document.querySelector('.btnGray');
const btnDarkB = document.querySelector('.btnDarkB');
const btnDarkF = document.querySelector('.btnDarkF');
const searchLogo = document.querySelector('.searchLogo');
const pResult = document.querySelector('.pResult');
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const pTheme = document.querySelector('.theme');

btnEncrypt.addEventListener('click', btnOnClick);
// console.log(textIn);

function btnOnClick() {
    //Encriptar
    const textIn = textAreaIn.value;
    let textLower = textIn.toLowerCase();
    // let textOut = document.getElementById('textOut');
    // textLower = textLower.split('');
    let textencrypt = '';

    if (textLower == '') {
        alert('Por favor ingrese el texto a encriptar');
    } else {
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
}

// btnBlue.addEventListener('click', colorBlue);

function colorBlue() {
    body.style.backgroundColor = '#e9ecf8';
    header.style.backgroundColor = '#052051';
    footer.style.backgroundColor = '#052051';
    pTheme.style.color = '#052051';
    btnEncrypt.style.backgroundColor = '#e9ecf8';
    btnEncrypt.style.color = '#052051';
    btnEncrypt.style.borderColor = '#052051';
    btnDecrypt.style.backgroundColor = '#e9ecf8';
    btnDecrypt.style.color = '#052051';
    btnDecrypt.style.borderColor = '#052051';
    btnCopy.style.backgroundColor = '#e9ecf8';
    btnCopy.style.color = '#052051';
    btnCopy.style.borderColor = '#052051';
}

function colorGray() {
    body.style.backgroundColor = '#ced4da';
    header.style.backgroundColor = '#343a40';
    footer.style.backgroundColor = '#343a40';
    pTheme.style.color = '#343a40';
    btnEncrypt.style.backgroundColor = '#e9ecf8';
    btnEncrypt.style.color = '#343a40';
    btnEncrypt.style.borderColor = '#343a40';
    btnDecrypt.style.backgroundColor = '#e9ecf8';
    btnDecrypt.style.color = '#343a40';
    btnDecrypt.style.borderColor = '#343a40';
    btnCopy.style.backgroundColor = '#e9ecf8';
    btnCopy.style.color = '#343a40';
    btnCopy.style.borderColor = '#343a40';
}

function colorDarkB() {
    body.style.backgroundColor = '#609ed4';
    header.style.backgroundColor = '#0a3871';
    footer.style.backgroundColor = '#0a3871';
    pTheme.style.color = '#0a3871';
    btnEncrypt.style.backgroundColor = '#e9ecf8';
    btnEncrypt.style.color = '#0a3871';
    btnEncrypt.style.borderColor = '#0a3871';
    btnDecrypt.style.backgroundColor = '#e9ecf8';
    btnDecrypt.style.color = '#0a3871';
    btnDecrypt.style.borderColor = '#0a3871';
    btnCopy.style.backgroundColor = '#e9ecf8';
    btnCopy.style.color = '#0a3871';
    btnCopy.style.borderColor = '#0a3871';
}

function colorDarkF() {
    body.style.backgroundColor = '#052051';
    header.style.backgroundColor = '#052051';
    footer.style.backgroundColor = '#052051';
    pTheme.style.color = '#f3f5fc';
    btnEncrypt.style.backgroundColor = '#e9ecf8';
    btnEncrypt.style.color = '#052051';
    btnEncrypt.style.borderColor = '#052051';
    btnDecrypt.style.backgroundColor = '#e9ecf8';
    btnDecrypt.style.color = '#052051';
    btnDecrypt.style.borderColor = '#052051';
    btnCopy.style.backgroundColor = '#e9ecf8';
    btnCopy.style.color = '#052051';
    btnCopy.style.borderColor = '#052051';
}

/* <button onClick="Mycolor()">Change Color</button>
            <div id="myID">Hello World</div>
            <script type="text/javascript">
                function Mycolor() {
                    var element = document.getElementById('myID');
                    element.style.backgroundColor = '#900';
                }
</script> */

btnDecrypt.addEventListener('click', decryptFunc);

function decryptFunc() {
    //Desencriptar
    const textIn = textAreaIn.value;
    let textLower = textIn.toLowerCase();
    let i = 0;
    let textencrypt = '';

    if (textLower == '') {
        alert('Por favor ingrese el texto a encriptar');
    } else {
        while (i < textLower.length) {
            // for (let i = 0; i < textLower.length; i++) {
            if (textLower[i] == 'a') {
                textencrypt = textencrypt + 'a';
                i += 2;
            } else if (textLower[i] == 'e') {
                textencrypt = textencrypt + 'e';
                i += 5;
            } else if (textLower[i] == 'i') {
                textencrypt = textencrypt + 'i';
                i += 4;
            } else if (textLower[i] == 'o') {
                textencrypt = textencrypt + 'o';
                i += 4;
            } else if (textLower[i] == 'u') {
                textencrypt = textencrypt + 'u';
                i += 4;
                console.log('o: ', i);
            } else {
                textencrypt = textencrypt + textLower[i];
                i += 1;
            }

            // if (i > textLower.length) {
            //     console.log(i);
            //     break;
            // }
        }
        searchLogo.style.display = 'none';
        pResult.style.display = 'none';
        textOut.removeAttribute('hidden');
        textOut.innerText = textencrypt;
    }
}

btnCopy.addEventListener('click', copyText);

function copyText() {
    //Se copia el texto que este en el resultado
    var content = document.getElementById('textOut');
    content.select();
    document.execCommand('copy');
}
