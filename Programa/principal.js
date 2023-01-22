
document.getElementById("texto-invisible").style.display = 'none';

let resetBtn = document.getElementsByClassName("reset")[0];
resetBtn.addEventListener("click", function(){
    location.reload();
});

function btnEncriptar(){
    event.preventDefault();
    let originalText = document.getElementsByClassName("aqui")[0].value;
    let encryptedText = encrypt(originalText);
    let resultDisplay = document.getElementsByClassName("texto-fuera")[0];
    resultDisplay.value = encryptedText;
    localStorage.setItem("originalText", originalText);
    document.getElementsByClassName("img-texto")[0].style.display = 'none';
    document.getElementById("texto-invisible").style.display = 'block';
}


function btnDesencriptar(){
    event.preventDefault();
    let originalText = localStorage.getItem("originalText");
    let resultDisplay = document.getElementsByClassName("texto-fuera")[0];
    resultDisplay.value = originalText;
    document.getElementsByClassName("img-texto")[0].style.display = 'none';
    document.getElementById("texto-invisible").style.display = 'block';;
}

function btnCopiar(){
    let texto = document.getElementsByClassName("texto-fuera")[0];
    texto.select();
    document.execCommand("copy");
}

function encrypt(text) {
    let encryptedText = "";
    text = text.toLowerCase()
    for (let i = 0; i < text.length; i++) {
        switch (text[i]) {
            case "e":
                encryptedText += "enter";
                break;
            case "i":
                encryptedText += "imes";
                break;
            case "a":
                encryptedText += "ai";
                break;
            case "o":
                encryptedText += "ober";
                break;
            case "u":
                encryptedText += "ufat";
                break;
            default:
                encryptedText += text[i];
        }
    }
    return encryptedText;
}

function decrypt(text) {
    let decryptedText = "";
    for (let i = 0; i < text.length; i++) {
        if (text.substring(i, i + 5) === "enter") {
            decryptedText += "e";
            i += 4;
        } else if (text.substring(i, i + 4) === "imes") {
            decryptedText += "i";
            i += 3;
        } else if (text.substring(i, i + 2) === "ai") {
            decryptedText += "a";
            i += 1;
        } else if (text.substring(i, i + 4) === "ober") {
            decryptedText += "o";
            i += 3;
        } else if (text.substring(i, i + 4) === "ufat") {
            decryptedText += "u";
            i += 3;
        } else {
            decryptedText += text[i];
        }
    }
    return decryptedText;
}

