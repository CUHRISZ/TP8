
// card tracker
cardsClicked = 0;

function cardClicked(what) {
  if ( !what.classList.contains("removed") ) {
  
    if ( what.classList.contains("clicked") ) {
      //if already clicked, act appropriately 
      what.classList.remove("clicked");
      cardsClicked--;

    } else {
      // if not already clicked
      what.classList.add("clicked");
      cardsClicked++;

      if (cardsClicked == 2) {
        // compare card values
        cardCompare();
      }
    }
  }
}


function cardCompare() {
// analyzes pic classes
  clickedCards = document.querySelectorAll(".clicked");
  
  // first clicked element is clickedCards [0]
  //if card 1 and card 2 both match
  
  matched = false;
  if (clickedCards[0].classList.contains("pic1") && clickedCards[1].classList.contains("pic1") ) {
    matched = true; //matches pic 1
  } else if (clickedCards[0].classList.contains("pic2") && clickedCards[1].classList.contains("pic2") ) {
    matched = true; //matches pic 2
  } else if (clickedCards[0].classList.contains("pic3") && clickedCards[1].classList.contains("pic3") ) {
    matched = true; //matches pic 2
  } else if (clickedCards[0].classList.contains("pic4") && clickedCards[1].classList.contains("pic4") ) {
    matched = true; //matches pic 2
  } else if (clickedCards[0].classList.contains("pic5") && clickedCards[1].classList.contains("pic5") ) {
    matched = true; //matches pic 2
  } else if (clickedCards[0].classList.contains("pic6") && clickedCards[1].classList.contains("pic6") ) {
    matched = true; //matches pic 2
  }
  
  if (matched) {
    //hide cards
    removeCards(clickedCards[0], clickedCards[1]);
    
  } else {
    //unflip cards
    unflipCards(clickedCards[0], clickedCards[1]);
    
  }
}

function removeCards(cardA, cardB) {
  
  pause = setTimeout(function() {
    
    cardA.classList.remove("clicked");
    cardB.classList.remove("clicked");

    cardA.classList.add("matched");
    cardB.classList.add("matched");

    cardsClicked = 0;
    
    checkWinning();
  }, 1000); //do code after 1000 milliseconds
}

function unflipCards(cardA, cardB) {
  
  pause = setTimeout(function() {
  cardA.classList.remove("clicked");
  cardB.classList.remove("clicked");
  
  cardsClicked = 0;
  }, 1000);
}

function checkWinning() {
  remainingCards = document.querySelectorAll(".card");
  
  countCards = remainingCards.length;
  
  //cycle through all cards and check for matched class
  for (c = 0; c < remainingCards.length; c++) {
    if ( !remainingCards[c].classList.contains("matched") ) {
      return;
    }
  }
  
  document.getElementById("mainTable").innerHTML = "You won!";
}

function shuffleCards() {
  //function gets main table, gets children length, then does loop which
  //goes through card count and creates a random selection, then tells table
  //to move selection to end
  table = document.querySelector("#mainTable");
  cardCount = table.children.length;
  
  cardToMove = table.children[0]
  table.appendChild( cardToMove );
  
  for (c = 0; c < cardCount; c++) {
    randomCard = Math.floor( Math.random() * cardCount );
    cardToMove = table.children[randomCard]
    table.appendChild( cardToMove );
  }
}

// when page loads
window.onload = function() {
  
  shuffleCards();

  cardList = document.getElementsByClassName("card"); // collects cards
  
  cardCount = cardList.length; // how many cards are on the table
  
  for (c = 0;  c < cardCount; c++) { //loop that starts at 0, as long as c is less than card count, then add 1 to c
      cardList[c].onclick = function() { //get 0 element and give onclick function that toggles class
        cardClicked(this); //passes to 'what'
      }
  }
}