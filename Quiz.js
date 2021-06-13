class Quiz {
  constructor(){
    this.heading_result=createElement("h35")
  }
  
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
    //write code here to hide question elements
      Question.hide();
      //write code to change the background color here
   background("yellow")
    //write code to show a heading for showing the result of Quiz
     this.heading_result.html("Here are the results!")
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo()
  
    //write condition to check if contestantInfor is not undefined
      if (allContestants!==undefined){
        fill("black")
        text("The person who gave correct answers is highlited in green color.")
        for (var plr in allContestants){
          var correctAns=1
         if (correctAns===allContestants[plr].answer){
           fill('green')
         }else{
           fill("red")
         }
        }
      }
    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
