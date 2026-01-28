const setupCards = function setupCards(){
  $(".card").remove()
  $("#patternString").css({left:"0px"})

  let inPattern=document.getElementById("patternInput").value;
  
  for(i=0;i<inPattern.length;i++){
    document.getElementById("patternStringRow").innerHTML += "<td class=\"card\">" + inPattern[i] +   "</td>" ;
    document.getElementById("values").innerHTML += "<td class=\"card\">0</td>" ;  
  }

  patternCardObjects = document.querySelectorAll('#patternStringRow > .card');
  valueCardObjects = document.querySelectorAll('#values > .card');
};

const correctMatchHighlight = function correctMatchHighlight(matchIndex){
  $(patternCardObjects[matchIndex]).animate({
    backgroundColor: "#41f471",
    color: "black"
  },100);
};

const incorrectMatchHighlight = function incorrectMatchHighlight(matchIndex){
  $(patternCardObjects[matchIndex]).animate({
    backgroundColor: "#ff6063",
    color: "black"
  },500);
};

const correctMatchRange = function correctMatchRange(startIndex , endIndex){
  //Both start and end index inclusive
  for(i=startIndex ; i<=endIndex ; i++){
    correctMatchHighlight(i);
  }
};

const resetColour = function resetColour(){
  for(i=0;i<patternCardObjects.length;i++){
    $(patternCardObjects[i]).animate({backgroundColor: "#f1eded"},200);
  }
};

const trackStringIndex = function trackStringIndex(patind){
  $(patternCardObjects[patind]).addClass("currentStringCard");
  $(patternCardObjects[patind-1]).removeClass("currentStringCard");
  $(valueCardObjects[patind]).addClass("currentStringCard");
  $(valueCardObjects[patind-1]).removeClass("currentStringCard");
};

const displayComment = function displayComment(string){
  document.getElementById("comment").innerHTML = string ;
};
