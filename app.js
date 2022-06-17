const value1 = document.getElementById("pullUps");
const value2 = document.getElementById("pushUps");
const value3 = document.getElementById("bicycling");
const value4 = document.getElementById("dips");
const value5 = document.getElementById("core");
const value6 = document.getElementById("squads");

let count1 = 1000;

function pullUpsSubtraction() {
  count1 = count1 - 1;
  value1.innerText = count1;
}

let count2 = 3000;

function pushUpsSubtraction() {
  count2 = count2 - 1;
  value2.innerText = count2;
}

let count3 = 1500;

function kmBicycleSubtraction() {
  count3 = count3 - 1;
  value3.innerText = count3;
}

let count4 = 700;

function dipsSubtraction() {
  count4 = count4 - 1;
  value4.innerText = count4;
}

let count5 = 30;

function coreSubtraction() {
  count5 = count5 - 1;
  value5.innerText = count5;
}

let count6 = 3000;

function squadsSubtraction() {
  count6 = count6 - 1;
  value6.innerText = count6;
}

