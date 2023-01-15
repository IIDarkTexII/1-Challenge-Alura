
let buttonEncriptar= document.getElementById("Encriptar");
let buttonDesencriptar= document.getElementById("Desencriptar");




function ocultarTexto(){
    document.getElementById("texto-invisible").style.display = "none";
}
function ocultarImagen(){
    document.getElementById("texto-invisible").style.display = "none";
}

function encrypt(mensaje) {
    var encryptedWord = "";
    for (var i = 0; i < mensaje.length; i++) {
        switch (word[i]) {
            case 'e':
                encryptedWord += "enter";
                break;
            case 'i':
                encryptedWord += "imes";
                break;
            case 'a':
                encryptedWord += "ai";
                break;
            case 'o':
                encryptedWord += "ober";
                break;
            case 'u':
                encryptedWord += "ufat";
                break;
            default:
                encryptedWord += mensaje[i];
        }
    }
    return encryptedWord;
}
function decrypt(encryptedWord) {
    var decryptedWord = "";
    var i = 0;
    while (i < encryptedWord.length) {
        switch (encryptedWord.substring(i, i + 5)) {
            case "enter":
                decryptedWord += "e";
                i += 5;
                break;
            case "imes":
                decryptedWord += "i";
                i += 4;
                break;
            case "ai":
                decryptedWord += "a";
                i += 2;
                break;
            case "ober":
                decryptedWord += "o";
                i += 4;
                break;
            case "ufat":
                decryptedWord += "u";
                i += 4;
                break;
            default:
                decryptedWord += encryptedWord[i];
                i++;
        }
    }
    return decryptedWord;
}


ocultarTexto()
buttonEncriptar.onclick= encrypt;
buttonDesencriptar.onclick = decrypt;

