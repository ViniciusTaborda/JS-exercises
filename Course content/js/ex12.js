var idade = 77

if (idade < 16 ){
     console.log('Não pode votar.')
}else if (idade < 18 || idade >=60) {
     console.log('Voto facultativo')
}else{
     console.log("Voto obrigatório.")
}