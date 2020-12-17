/*function Animal(name){
    this.name = name;
}

Animal.prototype.action = function(){
  document.getElementById(this.actionSoundName).play();
  
}

Animal.prototype.putInTheDocument = function(){
    var petsTable = document.getElementById("petsTable");
    var petTR = document.createElement("tr");
  
    var petNameTD = document.createElement("td");
    petNameTD.textContent = this.name;
    petTR.appendChild(petNameTD);
  
    var petLegsTD = document.createElement("td");
    petLegsTD.textContent = this.legs;
    petTR.appendChild(petLegsTD);
  
    var petActionTD = document.createElement("td");
    var petActionTDButton = document.createElement("button");
    petActionTDButton.textContent = this.actionText;
    petActionTD.appendChild(petActionTDButton);
    petTR.appendChild(petActionTD);
    
    petActionTDButton.onclick = this.action.bind(this);
    petsTable.querySelector("tbody").appendChild(petTR)
}


function Cat(name){
    Animal.call(this, name);
    this.legs = 4;
    this.actionText = "Meoow"
    this.actionSoundName = "meow"
}

Cat.prototype = Animal.prototype;

function Monkey(name){
    Animal.call(this, name);
    this.legs = 2;
    this.actionText = "Scream";
    this.actionSoundName = "scream";
}

Monkey.prototype = Animal.prototype;

var Mila = new Cat("Mila");
Mila.putInTheDocument();

var Charlie = new Monkey("Charlie");
Charlie.putInTheDocument();*/

class Animal {
    constructor(name){
      this.name=name;
      }
    
    putInTheDocument (){
      var petsTable = document.getElementById("petsTable");
      var petTR = document.createElement("tr");
    
      var petNameTD = document.createElement("td");
      petNameTD.textContent = this.name;
      petTR.appendChild(petNameTD);
    
      var petLegsTD = document.createElement("td");
      petLegsTD.textContent = this.legs;
      petTR.appendChild(petLegsTD);
    
      var petActionTD = document.createElement("td");
      var petActionTDButton = document.createElement("button");
      petActionTDButton.textContent = this.actionText;
      petActionTD.appendChild(petActionTDButton);
      petTR.appendChild(petActionTD);
      petActionTDButton.onclick = this.action.bind(this);
      petsTable.querySelector("tbody").appendChild(petTR);
      
    
  
      petTR.addEventListener("click",this.view.bind(this));
  
      petActionTDButton.addEventListener("click",function(event){
         event.stopPropagation();
      });
    
  }
  action = function(){
    document.getElementById(this.actionSoundName).play();
    
  }
  view = function(){
    let image=document.querySelector("img");
    image.src=this.imgUrl;
  
  }
  
    
}
  
  class Cat extends Animal{
  constructor(name){
    super(name); 
    this.imgUrl;
  }
  
  
  imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6CpNe1NsT01CyplLyzNLVC-SIXme3Ysi3kg&usqp=CAU";
  legs = 4;
  actionText = "Meoow";
  actionSoundName = "meow";
  
  
  }
  
  class Monkey extends Animal{
  constructor(name){
    super(name);
    this.imgUrl;
  }
  
  imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0kT7TBgRdM1IHQ2a_6Pl0wPOjVSpg4vxnCQ&usqp=CAU"
  legs = 2;
  actionText = "Scream";
  actionSoundName = "scream";
  
  
  }
  
  var Mila = new Cat("Mila");
  Mila.putInTheDocument();
  
  
  var Charlie = new Monkey("Charlie");
  Charlie.putInTheDocument();
