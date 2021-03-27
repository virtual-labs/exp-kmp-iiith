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

class DemoInstance{
  constructor(){
    this.states = Array() ; //To store all the preconfigured states of the demo 
    this.stateTracker=0;
  }
}

let DI = new DemoInstance();
const init = function init(){
  DI.stateTracker=0;
  let obj = {patternToMatch:"AABAAC" , searchString:"AABAABAACD" , ans:"3" , index:"5" ,shiftVal:"0" };
  DI.states.push(obj);
  obj = {patternToMatch:"INGABO" , searchString:"JINGABINGA" , ans:"5" , index:"5" ,shiftVal:"1" };
  DI.states.push(obj);
  obj = {patternToMatch:"XXXAXXAA" , searchString:"AXXXXAXXBA" , ans:"4" , index:"6" ,shiftVal:"2"};
  DI.states.push(obj);
  obj = {patternToMatch:"AAAABAB" , searchString:"BAAAABBA" , ans:"5" , index:"5" ,shiftVal:"1"};
  DI.states.push(obj);
  obj = {patternToMatch:"ZILIZILIBA" , searchString:"ZILIZILIANI" , ans:"4" , index:"8" ,shiftVal:"0"};
  DI.states.push(obj);
};

const nextState = function nextState() {
  $("input[value='Submit']").attr("disabled", false);
  DI.stateTracker = (DI.stateTracker+1)%DI.states.length ;
  document.getElementById("patternInput").value = DI.states[DI.stateTracker].patternToMatch;
  document.getElementById("stringInput").value = DI.states[DI.stateTracker].searchString;
  search();
  $("#patternString").css({left: DI.states[DI.stateTracker].shiftVal*$(patternCardObjects[0]).width().toString() + "px"});
  for(i=0;i<DI.states[DI.stateTracker].index;i++){
    correctMatchHighlight(i);
  }
  incorrectMatchHighlight(DI.states[DI.stateTracker].index);
  displayComment("Please enter the answer and click the <b>Submit</b> Button");
};

const checkAnswer = function checkAnswer() {
  if(document.getElementById("answer").value === DI.states[DI.stateTracker].ans){
    displayComment("Correct Answer! :)");
  }
  else {
    displayComment("Sorry, it is incorrect :( . The right answer is : " + DI.states[DI.stateTracker].ans );
  }
  shiftSpace(DI.states[DI.stateTracker].ans);
  resetColour();
  $("input[value='Submit']").attr("disabled", true);
};

const preProcessing = function preProcessing(inString){
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

const search = function search(){
  setupCards(); //resets the cards
  $("input[value='Next']").attr("disabled", false); //enables next button

  KS.patternToMatch=document.getElementById("patternInput").value; //gets input text
  KS.searchString=document.getElementById("stringInput").value;

  KS.strlen=KS.searchString.length; //stores their length
  KS.patlen=KS.patternToMatch.length;

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
