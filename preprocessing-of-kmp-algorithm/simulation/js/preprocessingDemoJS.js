class demoInstance{
  constructor(){
    this.inString = null;
    this.lpsArray = null;
    this.i=null;
    this.j=null;
  };
};

let DI = new demoInstance() ;

const next = function next(){
  resetColour();
  trackStringIndex(DI.i);
  if(DI.i<DI.inString.length){
    while(DI.j !== 0 && DI.inString[DI.i] !== DI.inString[DI.j]){
      DI.j = DI.lpsArray[DI.j-1];
    }

    if(DI.inString[DI.j] === DI.inString[DI.i]){
      DI.j++ ;
      DI.lpsArray[DI.i] = DI.j ;
      correctMatchRange(0,DI.lpsArray[DI.i]-1);
      correctMatchRange(DI.i-DI.lpsArray[DI.i]+1,DI.i);
    }
  }
  else {
    $("input[value='Next']").attr("disabled", true);
  }
  valueCardObjects[DI.i].innerHTML = DI.lpsArray[DI.i].toString() ;
  displayComment("The pattern scanned till here has a longest prefix which is also a suffix of length "+DI.lpsArray[DI.i] );
  DI.i++;
};

const setup = function setup(){
  DI.inString = document.getElementById("patternInput").value;

  if(DI.inString.length > 15){
    displayComment("Input can't be longer than 15 characters long. Please try again.");
    return;
  }
  setupCards();
  $("input[value='Next']").attr("disabled", false);
  
  DI.i = 0;
  DI.j = 0;
  DI.lpsArray = Array(DI.inString.length).fill(0);
  trackStringIndex(0);
  DI.i = 1;
};
