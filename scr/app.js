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
    const suites = ["♦","♥","♠","♣"]
    let suit = Math.floor(Math.random() * 4);
    if(suit == 0 || suit == 1){
        return redCard(suites[suit]);
    }else{
        return blackCard(suites[suit]);
    }
}

// Generate the card number
function genNumber(){
    const number = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
    let num = Math.floor(Math.random() * 13);
    return  number[num];
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

var opt1 = document.getElementById("opt1_btn");
var opt2 = document.getElementById("opt2_btn");
var opt3 = document.getElementById("btn_resize");
var cardAnimation = document.getElementById("card");

// Runs the firts option: show a new card
opt1.addEventListener("click" ,newCard);


// Runs the second option: new card every 10 seconds
opt2.addEventListener("click", function(){
    startTime();
    document.getElementById("time").style.display = "block";
    document.getElementById("btn_stop").style.display = "block";
});

var intervalId;
var timer = document.getElementById("time");
var seconds = 10;

// Start the 10 second timer
function startTime(){
    intervalId = setInterval(updateTimer, 1000);
    updateTimer();
}

// Update the timer every second and when gets 0, create a new card
function updateTimer(){
    timer.textContent = seconds;
    if(seconds === 0){
        seconds = 10;
        newCard();
    }
    document.getElementById("time").innerText = "  " + seconds;
    seconds--;
}

// Stop the timer if the user click the button 'stop'
document.getElementById("btn_stop").addEventListener("click",stopTimer);

function stopTimer(){
    clearInterval(intervalId);
    document.getElementById("time").style.display = "none";
    document.getElementById("btn_stop").style.display = "none";
    seconds = 10;
}


// Runs the third option: resize the card
opt3.addEventListener("click", function(){
    
    var width = document.getElementById("card_width").value;
    var height = document.getElementById("card_height").value;
    
    document.getElementById("card").style.width = width + "px";
    document.getElementById("card").style.height = height + "px";

    newCard();
});

var default_size = document.getElementById("flexCheckDefault");
default_size.addEventListener("change", function(){
    if(this.checked){
        document.getElementById("card_width").value = "226";
        document.getElementById("card_width").disabled = true;
        document.getElementById("card_height").value = "340";
        document.getElementById("card_height").disabled = true;
    }else{
        document.getElementById("card_width").value = "";
        document.getElementById("card_width").disabled = false;
        document.getElementById("card_height").value = "";
        document.getElementById("card_height").disabled = false;
    }
});


// Generate a new card
function newCard(){
    genNewCard();
    animation();
}
// Apply the card animation every time the card change
function animation(){
    cardAnimation.classList.remove("animated");
    cardAnimation.classList.remove("animatedFadeInUp");
    cardAnimation.classList.remove("fadeInUp");
    setTimeout(function() {
        cardAnimation.classList.add("animated");
        cardAnimation.classList.add("animatedFadeInUp");
        cardAnimation.classList.add("fadeInUp");
    }, 1);
}




