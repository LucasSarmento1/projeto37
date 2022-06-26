class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
  // escreva aqui o código para ocultar os elementos da questão
     form.hide();
     textSize(30);
     text("Game Start", 120, 100)
     Player.getPlayerInfo();

    // escreva o código aqui para mudar a cor de fundo
    background("Yellow");
    // escreva o código para exibir um cabeçalho indicando o resultado do Quiz

    // chame getContestantInfo () aqui
     if(allContestants !== undefined){
      var display_position = 130;
      display_position+=20;
      textSize(15);
      text(allContestants[plr].name + ": " + allContestants[plr].distance, 120,display_position)
     }
    

    // escreva a condição para verificar se contestantInfor não é indefinido

    // escreva aqui o código para adicionar uma nota
    if(allContestants !== undefined){
      fill("Blue");
      textSize(20);
      TextTrack("Jogador que respondeu a correta é destacado na cor verde",130,230);
    }

    // escreva o código para destacar o competidor que respondeu corretamente
    for(var plr in allContestants){
      var correctAns = "2";
      if (correctAns === allContestants[plr].answer)
      fill("Green")
      else 
      fill("red");
    }
    
  }

}
