let regexCaracteresEspeciales = /[^a-zA-Z0-9\s]/g;

function getTextToEncrypt(){

    let texto = document.getElementById('textContent').value;
    let arrayText = Array.from(texto);

    if(texto){
        for (let i = 0; i < texto.length; i++){
            
            if (regexCaracteresEspeciales.test(texto)) {
                alert("El texto no debe de contener caracteres especiales.");
                var textoMayusculas = true;
                break;
            }

            if (arrayText[i].toLowerCase() !== arrayText[i].toUpperCase()) {
                if (arrayText[i] === arrayText[i].toUpperCase()) {
                    var textoMayusculas = true;
                    alert("El texto no debe de contener mayúsculas o caracteres especiales");
                    break;
                }
            }
        }
        
        if (!textoMayusculas){
            for (let i = 0; i < texto.length; i++){
                switch (arrayText[i]) {
                    case 'e':
                        arrayText[i] = "enter";
                        break;

                    case 'i':
                        arrayText[i] = "imes";
                        break;

                    case 'a':
                        arrayText[i] = "ai";
                        break;

                    case 'o':
                        arrayText[i] = "ober";
                        break;
                    
                    case 'u':
                        arrayText[i] = "ufat";
                        break;
                
                    default:
                        break;
                }
            }
            document.getElementById("textEncrypt").style.display = "none";
            document.getElementById('textContentEncrypt').textContent = arrayText.join("");
            document.getElementById("btnCopy").innerHTML= `
                    <button class="btnGray" id="copyBtn" onclick="textCopyBtn()">Copiar Textos</button>`;
        }

    }else {
        alert("Introduce un texto");
    }
    
    return arrayText.join("");
}


function getTextToDecrypt() {

    let text = document.getElementById('textContent').value;
    if (text){
        if (regexCaracteresEspeciales.test(text)) {
            alert("El texto no debe de contener caracteres especiales ni mayusculas");
        }else{
    let textToDecrypt = document.getElementById('textContentEncrypt').textContent;
    if(!textToDecrypt){
    let desencriptado = textToDecrypt.replace(/enter/g, 'e')
                                     .replace(/imes/g, 'i')
                                     .replace(/ai/g, 'a')
                                     .replace(/ober/g, 'o')
                                     .replace(/ufat/g, 'u');
    document.getElementById('textContentEncrypt').textContent = `${desencriptado}`;
    }else{
        let texto = document.getElementById('textContent').value;
        let desencriptado = texto.replace(/enter/g, 'e')
                                     .replace(/imes/g, 'i')
                                     .replace(/ai/g, 'a')
                                     .replace(/ober/g, 'o')
                                     .replace(/ufat/g, 'u');
    document.getElementById("textEncrypt").style.display = "none";
    document.getElementById('textContentEncrypt').textContent = `${desencriptado}`;
    document.getElementById("btnCopy").innerHTML= `
            <button class="btnGray" id="copyBtn" onclick="textCopyBtn()">Copiar Textos</button>`;
    
    }
    }
    } else{
        alert("Introduce un texto");
    }
}

function textCopyBtn(){       
    let contentTextArea = document.getElementById('textContentEncrypt');           
    let txt = contentTextArea.innerText;   
    navigator.clipboard.writeText(txt);    
    Swal.fire({
        icon: "success",
        title: "Mensaje copiado",
        showConfirmButton: false,
        timer: 700
      });
    }
