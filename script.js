// `La letra "e" es convertida para "enter"
// ``La letra "i" es convertida para "imes"
// ``La letra "a" es convertida para "ai"
// ``La letra "o" es convertida para "ober"
// ``La letra "u" es convertida para "ufat"`

const textAreaIn = document.querySelector('#textIn');
const btnEncrypt = document.querySelector('#encry');

btnEncrypt.addEventListener('click', btnOnClick);
// console.log(textIn);

function btnOnClick() {
    const textIn = textAreaIn.value;
    let textLower = textIn.toLowerCase();
    // textLower = textLower.split('');
    let textencrypt = '';
    for (let i = 0; i < textLower.length; i++) {
        if (textLower[i] == 'a') {
            textencrypt = textencrypt + 'ai';
        } else if (textLower[i] == 'e') {
            textencrypt = textencrypt + 'enter';
        } else if (textLower[i] == 'i') {
            textencrypt = textencrypt + 'imes';
        } else if (textLower[i] == 'o') {
            textencrypt = textencrypt + 'ober';
        } else if (textLower[i] == 'u') {
            textencrypt = textencrypt + 'ufat';
        } else {
            textencrypt = textencrypt + textLower[i];
        }
    }
    console.log('textencrypt ' + textencrypt);
    // console.log('textLower ' + textLower);
    // console.log('textIn ' + textIn);
    // console.log(textAreaIn.value);
}
