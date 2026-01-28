const setupCards = function setupCards(){
  $(".card").remove() 
  $("#patternString").css({left:"0px"}) //Shifts pattern to origin
  let inString=document.getElementById("stringInput").value; //Text value

  for(i=0;i<inString.length;i++){
    document.getElementById("searchStringRow").innerHTML += "<td class=\"card\">" + inString[i] +   "</td>" ;
  } // Displays the cards

  let inPattern=document.getElementById("patternInput").value; //Text Value
  for(i=0;i<inPattern.length;i++){
    document.getElementById("patternStringRow").innerHTML += "<td class=\"card\">" + inPattern[i] +   "</td>" ;  
  } //Displays cards

  document.getElementById("patternString").style.top = toString(document.getElementById("searchString").style.top + 10) + "px" //Places pattern below the text
  
  stringCardObjects = document.querySelectorAll('#searchStringRow > .card'); //makes objects out of cards to use in the core logic program
  patternCardObjects = document.querySelectorAll('#patternStringRow > .card');
};

const shiftSpace = function shiftSpace(shiftAmt){
  $("#patternString").animate({left: "+=" + (shiftAmt*$(patternCardObjects[0]).width()).toString() + "px"},500);
};

const correctMatchHighlight = function correctMatchHighlight(matchIndex){
  $(patternCardObjects[matchIndex]).animate({
    backgroundColor: "#41f471",
    color: "black"
  },200);
};

const incorrectMatchHighlight = function incorrectMatchHighlight(matchIndex){
  $(patternCardObjects[matchIndex]).animate({
    backgroundColor: "#ff6063",
    color: "black"
  },500);
};

const resetColour = function resetColour(){
  for(i=0;i<patternCardObjects.length;i++){
    $(patternCardObjects[i]).animate({backgroundColor: "#f1eded"},200)
  }
};

const displayComment = function displayComment(string){
  document.getElementById("comment").innerHTML = string ;
};

const trackStringIndex = function trackStringIndex(strind,patind){
  $(stringCardObjects[strind]).addClass("currentStringCard");
  $(stringCardObjects[strind-1]).removeClass("currentStringCard")
  $(patternCardObjects[patind]).addClass("currentStringCard");
  $(patternCardObjects[patind-1]).removeClass("currentStringCard")
};
