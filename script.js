const text = document.querySelector("textarea").value;
const outText = document.getElementById("out-text");
const inputText = document.querySelector("input-text");

function changeText() {
  const text = document.querySelector("textarea").value;
  const outText = document.getElementById("out-text");

  outText.innerHTML = text;
}

function cryptography() {
  const text = document.querySelector("textarea").value;
  const secondText = document.getElementById("out-text");

  const resultCript = text.replace(/[e]/gi, 'enter').replace(/[i]/gi, 'imes').replace(/[a]/gi, 'ai').replace(/[o]/gi, 'ober').replace(/[u]/gi, 'ufat');
  secondText.innerHTML = resultCript;
}

function decryption() {
  const secondText = document.getElementById("out-text").value;
  const outText = document.getElementById("out-text");

  const resultDes = secondText.replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ai/gi, 'a').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');

  outText.innerHTML = resultDes;
}

function copy() {
  const copyText = document.getElementById("out-text");
  const btnCopy = document.getElementById("btn-copy");

  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);

  btnCopy.innerHTML = "Copiado com sucesso!";
  btnCopy.style.backgroundColor = "#00ff00";

  setTimeout(() => {
    btnCopy.innerHTML = "Copiar";
    btnCopy.style.backgroundColor = "#FFFFFF";
  }, 2000);




}

function limpar() {
  const text = document.querySelector("textarea").value;
  const outText = document.getElementById("out-text");


  outText.innerHTML = "";
  text.innerHTML = "";
}
