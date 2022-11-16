//create player class-name, hand [],score
class Player {
    constructor(name){
        this.name= name;
        this.hand=[];
        this.score = 0;
    }
}
//console.log(Player);
let player1 = new Player('Jamaar');
console.log("player1: ",player1);


let player2 = new Player("Computer");
console.log("player2:",player2)

//create a class for deck with suits, face values, ranks
//methods -create deck,shuffle, and deal

class Deck{
    constructor(){
        //suits
        this.suits= ['♠','♣','♦','♥'];
        //value
        this.faceValues= [2,3,4,5,6,7,8,9,10,"Jack","Queen","King","Ace"];
        //rank
        this.ranks= [2,3,4,5,6,7,8,9,10,11,12,13,14];

        // full deck
        this.deck = [];
    }
    //create deck
    createDeck(){
        //create a for loop to iterate over suits
        for( let s = 0; s< this.suits.length; s++){
        //console.log(this.suits[s])
        //create a for loop to iterate over face values
        for (let f = 0; f < this.faceValues.length; f++){
        //    console.log(this.faceValues[f]);
        //variable for suit
        const suit = this.suits[s];
        const faceValue = this.faceValues[f];
        const rank = this.ranks[f];
    
        // push each card variable in the loop to the deck
        this.deck.push({suit, faceValue, rank})
        }
        }
console.log("printing deck:" ,this.deck);
    }

    //shuffle deck
    shuffleDeck(){
        for (let i = this.deck.length -1; i> 0 ; i--){
        let j=Math.floor(Math.random()*i);
        let temp = this.deck[i];
        this.deck[i]= this.deck[j];
        this.deck[j] = temp;
    }
    }
    //deal the deck
    dealDeck(){
        //for loop 
      //  console.log(player1.hand)
        player1.hand = this.deck.slice(0,26);
        console.log("player1 hand -26 cards",player1.hand);
        player2.hand =this.deck.slice(26,52);
        console.log("player2 hand - 26 cards",player2.hand);
    }
}
let gameDeck = new Deck()
gameDeck.createDeck();
gameDeck.shuffleDeck();
gameDeck.dealDeck();
//console.log(gameDeck)




class Game{
    //methods


    //compare cards
    compareCards(){
        for (let round =0; round < 26;round++){
            //conditional statements to evaluate cards
            //player 1
            console.log(player1.name,player1.hand[round])
            console.log(player2.name,player2.hand[round])

            if (player1.hand[round].rank > player2.hand[round].rank){
               //add to player 1 score
               player1.score +=1;
               console.log(`${player1.name} score: ${player1.score}`)
               console.log(`${player2.name} score: ${player2.score}`)
               console.log(`${player1.name} is the winner!!`)

            }else if (player2.hand[round].rank>player1.hand[round].rank){
                player2.score +=1;
                console.log(`${player1.name} score: ${player1.score}`)
                console.log(`${player2.name} score: ${player2.score}`)
                console.log(`${player2.name} is the winner!!`)
            }else{
                console.log(`${player1.name} score: ${player1.score}`)
                console.log(`${player2.name} score: ${player2.score}`)
                console.log(`I DECLARE WAR!!!`)
            }

        }
    }
    //determine a winner
    determineWinner(){
        //check to see if player 1 score is greater than player 2 or tied
        if(player1.score > player2.score){
            console.log(`${player1.name} score: ${player1.score}`);
            console.log(`${player2.name} score: ${player2.score}`);
            console.log(`${player1.name} Wins the Battle!!!`);
        }else if (player2.score>player1.score){

            console.log(`${player1.name} score: ${player1.score}`);
            console.log(`${player2.name} score: ${player2.score}`);
            console.log(`${player2.name} Wins! YOU HAVE BEEN DEFEATED!!`);
        }else {
            console.log(`It's a DRAW!!!`);
        }

    }
}
let playGame = new Game();
playGame.compareCards();
playGame.determineWinner();



