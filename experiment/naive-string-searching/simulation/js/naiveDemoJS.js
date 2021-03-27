class naiveSearch{
  constructor(){
    this.patternToMatch=null;
    //pattern to match
    this.searchString=null;
    //string in which we need to search
    this.strlen=null;
    //Length of searchString
    this.patlen=null;
    //length of patternToMatch
    this.strind=0;
    //to keep track of string index
    this.patind=0;
    //to keep track of pattern index
  };
};

let NS = new naiveSearch();

const nextStep = function nextStep(){
  if(NS.strind < NS.strlen){
    trackStringIndex(NS.strind,NS.patind); //moves the pointer to help user follow what is going on

    if(NS.searchString[NS.strind]===NS.patternToMatch[NS.patind]){
      //The characters match hence we need to increase both the index
      displayComment("The letters <b>match</b>");
      correctMatchHighlight(NS.patind); //Highlights NS.patind to green
      if(NS.patind===(NS.patlen-1)){
        //if the patind equals the pattern length, it means complete pattern has been matched.
        displayComment("Pattern <b>match found at</b> : <b>" + (NS.strind-NS.patlen+1).toString() + "</b> ");
        $("input[value='Next']").attr("disabled", true);
      }
      NS.strind++;
      NS.patind++;
    }
    else{
      incorrectMatchHighlight(NS.patind);
      displayComment("The letters do not <b>match</b>");
      $(patternCardObjects[NS.patind]).removeClass("currentStringCard"); // Removes the pointer as we need to reset the pointer to the beginning
      $(stringCardObjects[NS.strind]).removeClass("currentStringCard");
      
      NS.strind=NS.strind-NS.patind+1; //resets the index of the string to the beginning 
      NS.patind=0; // resets the index of the pattern to the beginning

      trackStringIndex(NS.strind,NS.patind); // moves the pointer to the new location
      resetColour(); //resets the colour
      shiftSpace(1); //shifts the pattern by one to start a new comparison spree
    }
  }
  else{
    displayComment("The pattern string <b>doesn't exist</b> in the search string. "); // in the event strInd crosses the length of the string
  }
};

const search = function search(){
  NS.patternToMatch=document.getElementById("patternInput").value; //Gets the value of input strings
  NS.searchString=document.getElementById("stringInput").value;
  
  NS.strlen=NS.searchString.length; //length of the strings
  NS.patlen=NS.patternToMatch.length;

  if(NS.strlen > 15 || NS.patlen > 15) {
    displayComment("Input can't be longer than 15 characters. Please enter another text.");
    return;
  }

  setupCards(); //Resets and draws the demo Pane
  $("input[value='Next']").attr("disabled", false); //Enables the Next button

  NS.strind=0; //index to follow the string
  NS.patind=0; //index to follow the pattern
};
