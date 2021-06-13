class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Correct Option No..");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
  }

hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);
   
    this.question.html("Mr. Smith was found dead in his room. The room has no window and the door was locked. The only 4 people who had a key to the room were questioned by the detective on scene.The detective knew at once who who the murderer was. Who did it? " );
    this.question.position(150, 80);
    this.option1.html("1: Alice the maid: “I came to wake up Mr. Smith; when I saw him dead, I screamed!” " );
    this.option1.position(150, 120);
    this.option2.html("2: James the butler: “When I heard the scream, I ran into the room, turned on the light and saw Mr. Smith with a knife in his neck.”    " );
    this.option2.position(150, 140);
    this.option3.html("3: Maggie the governess: “I rushed up alongside James; when he turned on the light, the room was all bloody.”    " );
    this.option3.position(150, 160);
    this.option4.html("4: Gustav the cook: “I was preparing dinner and didn’t see anything.”" );
    this.option4.position(150, 180);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });
  }
}
