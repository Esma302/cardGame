let colour = ["black", "yellow", "red"];
let number = ["1","2","3","4","5","6","7","8","9","10"];

let deck = new Array(3);
for (let row=0; row<deck.length; row++){
  deck[row] = new Array(10);
  for (let col=0; col<deck[row].length; col++){
    deck[row][col]=colour[row] +" "+ number[col]; 
    console.log(deck[row][col]);
  }
}

function shuffleArray(array) { 
   for (var i = array.length - 1; i > 0; i--) {  
    
         
       var j = Math.floor(Math.random() * (i + 1)); 
                    
       var temp = array[i]; 
       array[i] = array[j]; 
       array[j] = temp; 
   } 
        
   return array; 
} 
console.log(shuffleArray(deck));

   