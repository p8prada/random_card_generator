// Generate a random card each time the page loads
window.onload = genNewCard();

// Create a new card
function genNewCard(){
    // Suit generator
    genSuit();
    // Number generator
    document.getElementById("number").innerText = genNumber();
}

// Generate the card suit
function genSuit() {
    let suit = Math.floor(Math.random() * 4) + 1;
    if(suit === 1){
        suit  = "♦";
        return redCard(suit);
    }
    if(suit === 2){
        suit  = "♥";
        return redCard(suit);
    }
    if(suit === 3){
        suit  = "♠";
        return blackCard(suit);
    }
    if(suit === 4){
        suit  = "♣";
        return blackCard(suit);
    }
}

// Generate the card number
function genNumber(){
    let num = Math.floor(Math.random() * 13) + 1;
    if(num === 11){
        num = "J";
    }
    if(num === 12){
        num = "Q";
    }
    if(num === 13){
        num = "K";
    }
    if(num === 1){
        num = "A";
    }
    return  num;
}

// If the suit is Diamond or Heart, change the color of the card suit and number to "red"
function redCard(x){
    document.getElementById("number").style.color = "red";

    var h1Elements = document.getElementsByTagName("h1");
    for(var i = 0; i < h1Elements.length; i++) {
        h1Elements[i].innerText = x;
        h1Elements[i].style.color = "red";
    }   
}

// If the suit is Diamond or Heart, change the color of the card suit and number to "black"
function blackCard(x){
    document.getElementById("number").style.color = "black";

    var h1Elements = document.getElementsByTagName("h1");
    for(var i = 0; i < h1Elements.length; i++) {
    h1Elements[i].style.color = "black";
    h1Elements[i].innerText = x;
    }
}

