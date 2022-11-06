window.onload = function() {
  

  cardList = document.getElementsByClassName("card"); // collects cards
  
  cardCount = cardList.length; // how many cards are on the table
  
  for (c = 0;  c < cardCount; c++) { //loop that starts at 0, as long as c is less than card count, then add 1 to c
      cardList[c].onclick = function() { //get 0 element and give onclick function that toggles class
        this.classList.toggle("clicked");
      }
  }
}