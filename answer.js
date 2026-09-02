// Question 1: Value Detective
// Ans No.1:

//function likhlam then value ke pass korlam, typeof dea value ke check kore nilam aita ki type ar data, 
// value null, 0, NaN, ai gula check kore nilam ki return kore
function describeValue(value) {
  return typeof value + ' | ' + (value === null ? "Falsy" : value ? "Truthy" : "Falsy");
};

// Question 2: Bangladesh Weekend Machine
// Ans No. 2:

//getDayType name dea akta function nilam, then day ta ke pass korlam, day te je data recived korbe oi gula lower case kore nilam
// jate exact match korte pari amar switch ar value gular sathe
function getDayType(day){
  let formatDay = day.toLowerCase();

  // c ar default value dea dilam jodi match na kore soja answer dibe Invalid Day
  c = "Invalid Day";
//switch case suru kore dilam ajke ki day seta ber korar jonne jodi case match kore soja oi day ar value return kore dea case break hobe, 
// noyto sesh porjonto cholte chakbe exact value na pawa porjonto
  switch(formatDay){
    case caseGetDay = "friday":
    c = "Weekend";
    break;
    case caseGetDay = "saturday":
    c =  "Weekend";
    break;
    case caseGetDay = "sunday":
    c =  "Working Day";
    break;
    case caseGetDay = "monday":
    c =  "Working Day";
    break;
    case caseGetDay = "tuesday":
    c =  "Working Day";
    break;
    case caseGetDay = "wednesday":
    c =  "Working Day";
    break;
    case caseGetDay = "thursday":
    c =  "Working Day";
    break;
  }
  //default value ke return kore dilam
  return c;
}

//Question 3: Username Gatekeeper
//Ans No. 3:
//userName aita function ar parameter a send kortam data recived korar jonne
function validateUsername(userName){
  //text ar length ta check korlam
  if(userName.length < 4){
    return "Too Short";
  }
  //input data ar vitore kono space ace kina seta check korlam
  if(userName.includes(" ")){
    return "No Space Allowed";
  }
  //input text gula ke upper case thakle lower case kore then oi gular vitore admin lekha ace kina check korlam
  if(userName.toLowerCase().includes("admin")){
    return "Reserved Word";
  }
  //uporer check kora hoye gele jodi kono jale mach atka na pore tahole soja dhora porbe like Available show hobe mane mach dhore felechi
  return "Available";
}


//Question 4: Dhaka CNG Fare Meter
//Ans No. 4:

//ai khane getCngFare function name nilam & distance, isNight ar default value = false rakhci
//waitingMinutes initial vabe 0 rakhci, then fare ta 1,2 km ar jonne 50 fixed kore dici.
function getCngFare(distance, isNight=false, waitingMinutes=0){
  let fare = 50;
//jodi distance 2 km ar kom hoi tahole ata fare ta 50 e nibe, then jodi ar besi jai tobe extra 50 ar sathe + 15 taka add hobe per km a

  if(distance > 2) {
    let extraKm = distance - 2;
    //ai khane small akta kaj korci jodi float km hoi (2.1 or any digit) tobe ai type ar digit gula ke full +1 barai dhorbe
    let floatingDigit = parseInt(extraKm);
    if(extraKm > floatingDigit) {
      extraKm = floatingDigit + 1;
    }
    // ai khane vara ta calculate korci
    fare = fare + (extraKm * 15);
  }
  // ai khane jodi gari kono jagai wait korai per min 2 taka extra pay korte hobe take, ata calculate korci
  fare = fare + ( waitingMinutes * 2);
  // ai khane vara ta rate hoice kina ata calculation korci jodi rate hoi tobe fare + wait min, sathe extra 20% vara add hobe
  if(isNight){
    fare = fare * 1.2;
  }
  // calculated fare ta return kore dici akhon function call korle actual fare show korbe
  return fare;
}

//Question 5: Run Chase Commentator
//Ans No. 5:


// let diya arrow function nilam then ar vitore ai 3ta ke => target, scored, ballsLeft pass koralam jate input ar data ai khane ase
let getChaseVerdict = ((target, scored, ballsLeft) => { 
  //koto run dorker seta ber kore nilam
  let runsNeeded = target - scored;

  // ai khane aktu checking ar kaj kore nillam if else use kore input value actually kon jaga ta te result mean kore seta dekhe nilam
  // first a won and lost ta ke ber kore dekhlam
  if(runsNeeded<=0){
    return "Won";
  }

  if(ballsLeft<=0){
    return "Lost";
  }
  // ai khane jodi win or lost na hoye thake then ai khane ase aktu calculation kore dekhci required run rate koto lage koto ball a
  let requireRunRate = (runsNeeded / ballsLeft) * 6;
  //per ball a koto run dorker seta bor korlam
  let verdict = "";

  if(requireRunRate <= 6){
    verdict = "Comfortable";
  }else if(requireRunRate <= 12){
    verdict = "Tough";
  }else{
    verdict = "Almost Impossible";
  }
//require run rate ta ke aktu check kore nilam asole ata chase kora jabe ki na, 
// jodi jai tahole ak rokom result show hobe noyto else if ar result dibe, noyto default result show hobe


  // ai khane template literals use kore backtick ar vitore (Need) plain text nilam then ${runsNeeded} ai variable ta nilam jate value gula dynamically change hoi
  //same vabe ball left & verdict ta ke o show korano holo
  return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
  //requiredments: Need <runsNeeded> runs in <ballsLeft> balls | <verdict>
});