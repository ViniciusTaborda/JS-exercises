//condição para verificar intevalo

var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são ${hora} horas`)

if (hora < 12){
     console.log("Bom dia meu querido!")
}else if (hora <= 18){
     console.log("Boa tarde Meu querido!")
}else {
     console.log("Boa noite meu querido!")
}