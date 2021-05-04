const getAnagramsOf = typedText => {

  const alphabetized = alphabetize(typedText)
  let novoPalavras = palavras.filter((palavra, index) => {
    palavra = alphabetize(palavra);
    if (palavra === alphabetized) {
      return palavras[index];
    }
  })
  return novoPalavras;
}

const button = document.getElementById("findButton");
button.addEventListener("click", () => {

  let typedText = document.getElementById("input").value;
  let resultado = getAnagramsOf(typedText);

  for (let i = 0; i < resultado.length; i++) {
    
    let escreverResultado = document.getElementById("result")

    paragrafo = document.createElement("p");
    paragrafo.innerHTML = resultado[i];
    escreverResultado.appendChild(paragrafo);
  }
});

function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
  }
