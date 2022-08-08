const text = document.querySelector("textarea").value;
const outText = document.getElementById("out-text");
const inputText = document.querySelector("input-text");

function onlyLetters() {
  const text = document.querySelector("textarea").value;
  const outText = document.getElementById("out-text");

  if (text.match(/[0-9]/g)) {
    outText.innerHTML = "Não são permitidos números";
  }

  if (text.match(/[^a-z]/g)) {
    outText.innerHTML = "Não são permitidos caracteres especiais";
  }

  if (text.match(/[áàãâä]/g)) {
    outText.innerHTML = "Não são permitidos acentos";
  }

  if (text.match(/[A-Z]/g)) {
    outText.innerHTML = "Não são permitidas letras maiúsculas";
  }
  
}

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
  onlyLetters();
}

function decryption() {
  const secondText = document.getElementById("out-text").value;
  const outText = document.getElementById("out-text");

  const resultDes = secondText.replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ai/gi, 'a').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');

  outText.innerHTML = resultDes;
  onlyLetters();
}

function copy() {
  const copyText = document.getElementById("out-text");
  const btnCopy = document.getElementById("btn-copy");

  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);

  btnCopy.innerHTML = "Copiado com sucesso!";
  btnCopy.style.backgroundColor = "#00ff00";
  btnCopy.style.color = "#fff";
  btnCopy.style.border = "none";

  setTimeout(() => {
    btnCopy.innerHTML = "Copiar";
    btnCopy.style.backgroundColor = "#FFFFFF";
    btnCopy.style.color = "#0A3871";
    btnCopy.style.border = "1px solid #0A3871";
  }, 2000);




}

function limpar() {
  const text = document.querySelector("textarea").value;
  const outText = document.getElementById("out-text");


  outText.innerHTML = "";
  text.innerHTML = "";
}
