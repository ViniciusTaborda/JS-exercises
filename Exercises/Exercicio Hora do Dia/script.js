function carregar(){

     var msg = window.document.getElementById('msg')
     var img = window.document.getElementById('foto')
     var data = new Date()
     var hora = data.getHours()
     msg.innerHTML = `Agora são ${hora} horas.`

     if (hora >= 0 && hora <= 12){
          msg.innerHTML = `Bom dia meu querido!`
          img.src = 'manha.png'
          document.body.style.background = '#fee767'
     }else if (hora >= 12 && hora <= 18){
          msg.innerHTML = `Boa tarde meu querido!`
          img.src = 'tarde.png'
          document.body.style.background = '#342b46'

     }else {
          msg.innerHTML = `Boa noite meu querido!`
          img.src = 'noite.png'
          document.body.style.background = '#14151a'

     }

     


}