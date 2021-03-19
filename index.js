let colour = ["black", "yellow", "red"];
let number = ["1","2","3","4","5","6","7","8","9","10"];
function createDeck(colour, number){
  let deck = new Array(3);
  for (let row=0; row<deck.length; row++){
    deck[row] = new Array(10);
    for (let col=0; col<deck[row].length; col++){
      deck[row][col]=colour[row] +" "+ number[col]; 
      console.log(deck[row][col]);
  }
}
return deck; 
}
let deck = new Array(3);
for (let row=0; row<deck.length; row++){
  deck[row] = new Array(10);
  for (let col=0; col<deck[row].length; col++){
    deck[row][col]=colour[row] +" "+ number[col]; 
    
  }
}

function shuffleArray(array) { 
   for (var i =2; i >= 0; i--) {      
       var j = Math.floor(Math.random() * (i + 1));            
       var temp = array[i]; 
       array[i] = array[j]; 
       array[j] = temp; 
       for (x=0;x<10;x++){
         var y=Math.floor(Math.random() * (x + 1)); 
         let temp2=array[i][x]
         array[i][x]=array[i][y];
         array[i][y]=temp2;
       }
   } 
        
   return array; 
}
console.log(createDeck(colour,number));
console.log(shuffleArray(deck));



   