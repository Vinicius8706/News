function returnString(string) {
  return string;
}

console.log(returnString("Vinicius Farias"));

// Questão 2

function verificaPalindromo(str) {
  for (var i = 0; i < str.length / 2; i++)
    if (str[i] != str[str.length - i - 1]) return false;
  return true;
}
console.log(verificaPalindromo("radar"));
console.log(verificaPalindromo("reviver"));
console.log(verificaPalindromo("palindromo"));

// Questão 3

const arr = [
  { id: 1, name: "test1" },
  { id: 2, name: "test2" },
  { id: 2, name: "test3" },
  { id: 3, name: "test4" },
  { id: 4, name: "test5" },
  { id: 5, name: "test6" },
  { id: 5, name: "test7" },
  { id: 6, name: "test8" },
];
const verificaDuplicado = (arrInicial) => {
  novoArr = [];
  arrInicial.filter((item) => {
    verificacao = novoArr.filter((itemFilter) => {
      return item.id === itemFilter.id;
    }).length;

    verificacao > 0 ? false : novoArr.push(item);
  });

  return novoArr;
};

// Questão 4

var ar = [
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
];

ar.forEach(function (valor, indice) {
  const max = Math.max(valor[indice], valor[indice - 1]);
  console.log(max);
});
//Questao 5

function somatorio(a, b) {
  let i;
  let soma = 0;
  for(i = 0; i < a; i++){
    if(a <= b){
      soma = a + soma
      console.log(soma);

    }
  }
  return soma
}

somatorio(5,15)
// Questao 6

var intersseção = function (num1, num2) {
  let firstSet = new Set();

  for (let num of num1) {
    firstSet.add(num);
  }

  let intersseçãoSet = new Set();

  for(let num of num2) {
    if(firstSet.has(num)){
      intersseçãoSet.add(num);
    }
  }

  return Array.from(intersseçãoSet)
};

console.log(intersseção([1,2,3],[4,5,6,1]));