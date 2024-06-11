//Vida de  inseto. Livre, animação
//divertidamente, Livre, animação, aventura
//furiosa: Um Saga Mad Max 16, ação



function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    let recomendacao = geraRecomendacao(idade);
    text(recomendacao, width / 2, height / 2);
  }
  
  function geraRecomendacao(idade);
    if (idade >= 10) {
     return "Vida de Inseto";
    } else {
      return "divertidamente";
    }
    }
    
