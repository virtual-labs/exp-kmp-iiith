class kmpSearch{
  constructor(){
    this.patternToMatch=null
    // pattern to match
    this.searchString=null
    //string in which we have to search
    this.strlen=null
    // length of the search string
    this.patlen=null
    // length of the patternTomatch
    this.lps=null
    // The LPS array 
    this.strind=0
    // to keep track of string index
    this.patind=0
    // to keep track of pattern index
  };
};

let KS = new kmpSearch();

const preProcessing = function preProcessing(inString) {
  let j=0 ;
  let i=0 ; // index of finding the answer

  //A is the array which stores the longest prefix suffix
  let A = Array(inString.length).fill(0);
  //initializes with value = 0

  for(i=1 ; i<inString.length ; i++){
    while(j!==0 && inString[i] !== inString[j]){
      j = A[j-1];
    }
    if(inString[j] === inString[i]){
      j++ ;
      A[i] = j ;
    }
  }
  return A;
};

const search = function search() {
  KS.patternToMatch=document.getElementById("patternInput").value; //gets input text
  KS.searchString=document.getElementById("stringInput").value;

  KS.strlen=KS.searchString.length; //stores their length
  KS.patlen=KS.patternToMatch.length;

  if(KS.strlen > 15 || KS.patlen > 15) {
    displayComment("Input can't be longer than 15 characters. Please enter another text.");
    return;
  }

  setupCards(); //resets the cards
  $("input[value='Next']").attr("disabled", false); //enables next button


  KS.lps=preProcessing(KS.patternToMatch); //stores lps array is KS.lps

  document.getElementById("letters").innerHTML = ""; //creates box for the LPS Array display
  document.getElementById("values").innerHTML = "";
  
  for(i=0;i<KS.patternToMatch.length;i++){ // Displays the LPS array box
    document.getElementById("letters").innerHTML += "<td class=\"lpsCard\">" + KS.patternToMatch[i] +   "</td>" ;
    document.getElementById("values").innerHTML += "<td class=\"lpsCard\">" + KS.lps[i] +   "</td>" ;
  }

  KS.strind=0; //index to follow the string
  KS.patind=0; //index to follow the pattern
};

let prevPatind=0; //stores the previous pattern index

const nextKMPStep = function nextKMPStep(){
  if(KS.strind < KS.strlen){
    prevPatind=KS.patind; //stores current value for next iteration
    if (KS.patternToMatch[KS.patind] === KS.searchString[KS.strind]){
      //Highlight Matching tiles here
      correctMatchHighlight(KS.patind);
      trackStringIndex(KS.strind,KS.patind);
      displayComment("The letters Match. " );
      KS.strind++;
      KS.patind++;
      
      if (KS.patind === KS.patlen) {
        // Found a match of the entire pattern since patind exceeds patlen 
        let ind = KS.strind - KS.patlen;
        console.log("Found a match at " + ind );
        displayComment("<b>Found a match</b> for the pattern at string index : " + ind);
        $("input[value='Next']").attr("disabled", true);
        return;
      }
    }
    else if(KS.strind < KS.strlen && KS.patternToMatch[KS.patind] !== KS.searchString[KS.strind]){
      //Shifts the pattern search tile here
      incorrectMatchHighlight(KS.patind);
      displayComment("The letters do not match. ");
      if(KS.patind!==0){
        shiftSpace(KS.patind-KS.lps[KS.patind-1]); //uses LPS array to shift the strInd accordingly
        displayComment("The letters don't match. Shifting the word by : " + KS.patind.toString() + " - " + KS.lps[KS.patind-1].toString() + " = " + (KS.patind-KS.lps[KS.patind-1]).toString() + " units");
        resetColour();//resets colour
        $(patternCardObjects[KS.patind-1]).removeClass("currentStringCard"); //removes the pointer displayed to the user
        $(patternCardObjects[KS.prevPatind]).removeClass("currentStringCard");
        KS.patind = KS.lps[KS.patind-1]; //Assigns appropriate value for the patind
        trackStringIndex(KS.strind,KS.patind); //Updates the pointer displayed to the user.
      }   
      else {
        shiftSpace(1);
        KS.strind++;
        trackStringIndex(KS.strind,KS.patind);
      }
    }
    KS.prevPatind = KS.patind;
  }
  else {
    displayComment("The pattern doesn't exist in the string.");
  }
};
