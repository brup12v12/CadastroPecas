let peso = 239;

 if(peso > 100){
    console.log("A peça possuí o peso necessário, portanto pode ser cadastrada");
} else {
 console.log("A peça possuí peso inferior a 100, portanto não pode ser cadastrada");
}

let listaPecas = ["câmbio", "vela", "ignição", "correia", "pastilha", "embreagem","amortecedor", "radiador", "baterria","virabrequim"]

//[1,2,3,4,5,6,7,8,9,10]
//[0,1,2,3,4,5,6,7,8,9] - zero based

 if (listaPecas.length < 10) {
     console.log("A lista ainda possui espaço para mais peças!")
     
 } else {
     console.log("Não há mais espaços disponíveis nesta lista, o limite foi atingido!") 
 }

  let texto = "73" // String
  let numero =  73  // Number

  // 73 + 73 = 146
  // "73"+"73" -> "7373"

  let nomePeca = listaPecas[4]

  if (nomePeca.length > 3) {
      console.log("Nome da peça é válido, pode seguir com o cadastro :)")
  } else {
      console.log("O nome da peça não atende ao requisito mínimo de 3 caracteres!")
      
  }
