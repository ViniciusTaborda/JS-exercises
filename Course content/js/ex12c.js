//estrutura condicional composta

var agora = new Date()
var diaSem = agora.getDay()
 console.log(diaSem)

switch(diaSem){
     case 0:
          console.log("Tenha um bom Domingo!")
          break;   
     case 1:
          console.log("Tenha uma boa Segunda!")
          break;
     case 2:
          console.log("Tenha uma boa Terça!")
          break;
     case 3:
          console.log("Tenha uma boa Quarta!")
          break;
     case 4:
          console.log("Tenha uma boa Quinta!")
          break;
     case 5:
          console.log("Tenha uma boa Sexta!")
          break;
     case 6:
          console.log("Tenha um bom Sabado!")
          break;
}