class Form{
constructor(){

this.input=createInput("ENTER YOUR NAME HERE")
this.title=createElement("h1")
this.button= createButton("Play")
this.greeting=("h3")
}
hide(){

    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();

}
display(){

this.title.html("Carrom Game, the game of legends")
this.title.position(200,100)

this.input.position(200,200)

this.button.position(300,200)
this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();
    player.name = this.input.value();
    playerCount+=1;
    player.index = playerCount;
    player.update();
    player.updateCount(playerCount);
    this.greeting.html("Hello " + player.name)
    this.greeting.position(displayWidth/2-70, displayHeight/4);
  });
}
}
 