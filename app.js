const actions = Array.from(document.querySelectorAll("[data-action]"));

let counter = localStorage.getItem("counter") || 630;

document.querySelector(".counter-value").innerText = counter;

actions.forEach((action) => {
  action.addEventListener("click", () => {
    const action_name = action.dataset.action;

    action.classList.add("animate");

    setTimeout(() => {
      action.classList.remove("animate");
    }, 1000);

    switch (action_name) {
      case "increase":
        counter++;
        break;
      case "decrease":
        counter--;
        break;
      case "save":
        localStorage.setItem("counter", counter);
        break;
      case "clear-save":
        localStorage.removeItem("counter");
        break;
    }

    document.querySelector(".counter-value").innerText = counter;
  });
});

const actions2 = Array.from(document.querySelectorAll("[data-action2]"));

let counter2 = localStorage.getItem("counter2") || 1500;

document.querySelector(".counter-value2").innerText = counter2;

actions2.forEach((action2) => {
  action2.addEventListener("click", () => {
    const action_name2 = action2.dataset.action2;

    action2.classList.add("animate");

    setTimeout(() => {
      action2.classList.remove("animate");
    }, 1000);

    switch (action_name2) {
      case "increase2":
        counter2++;
        break;
      case "decrease2":
        counter2--;
        break;
      case "save2":
        localStorage.setItem("counter2", counter2);
        break;
      case "clear-save2":
        localStorage.removeItem("counter2");
        break;
    }

    document.querySelector(".counter-value2").innerText = counter2;
  });
});

const actions3 = Array.from(document.querySelectorAll("[data-action3]"));

let counter3 = localStorage.getItem("counter3") || 750;

document.querySelector(".counter-value3").innerText = counter3;

actions3.forEach((action3) => {
  action3.addEventListener("click", () => {
    const action_name3 = action3.dataset.action3;

    action3.classList.add("animate");

    setTimeout(() => {
      action3.classList.remove("animate");
    }, 1000);

    switch (action_name3) {
      case "increase3":
        counter3++;
        break;
      case "decrease3":
        counter3--;
        break;
      case "save3":
        localStorage.setItem("counter3", counter3);
        break;
      case "clear-save3":
        localStorage.removeItem("counter3");
        break;
    }

    document.querySelector(".counter-value3").innerText = counter3;
  });
});

const actions4 = Array.from(document.querySelectorAll("[data-action4]"));

let counter4 = localStorage.getItem("counter4") || 750;

document.querySelector(".counter-value4").innerText = counter4;

actions4.forEach((action4) => {
  action4.addEventListener("click", () => {
    const action_name4 = action4.dataset.action4;

    action4.classList.add("animate");

    setTimeout(() => {
      action4.classList.remove("animate");
    }, 1000);

    switch (action_name4) {
      case "increase4":
        counter4++;
        break;
      case "decrease4":
        counter4--;
        break;
      case "save4":
        localStorage.setItem("counter4", counter4);
        break;
      case "clear-save4":
        localStorage.removeItem("counter4");
        break;
    }

    document.querySelector(".counter-value4").innerText = counter4;
  });
});

const actions5 = Array.from(document.querySelectorAll("[data-action5]"));

let counter5 = localStorage.getItem("counter5") || 30;

document.querySelector(".counter-value5").innerText = counter5;

actions5.forEach((action5) => {
  action5.addEventListener("click", () => {
    const action_name5 = action5.dataset.action5;

    action5.classList.add("animate");

    setTimeout(() => {
      action5.classList.remove("animate");
    }, 1000);

    switch (action_name5) {
      case "increase5":
        counter5++;
        break;
      case "decrease5":
        counter5--;
        break;
      case "save5":
        localStorage.setItem("counter5", counter5);
        break;
      case "clear-save5":
        localStorage.removeItem("counter5");
        break;
    }

    document.querySelector(".counter-value5").innerText = counter5;
  });
});

const actions6 = Array.from(document.querySelectorAll("[data-action6]"));

let counter6 = localStorage.getItem("counter6") || 3000;

document.querySelector(".counter-value6").innerText = counter6;

actions6.forEach((action6) => {
  action6.addEventListener("click", () => {
    const action_name6 = action6.dataset.action6;

    action6.classList.add("animate");

    setTimeout(() => {
      action6.classList.remove("animate");
    }, 1000);

    switch (action_name6) {
      case "increase6":
        counter6++;
        break;
      case "decrease6":
        counter6--;
        break;
      case "save6":
        localStorage.setItem("counter6", counter6);
        break;
      case "clear-save6":
        localStorage.removeItem("counter6");
        break;
    }

    document.querySelector(".counter-value6").innerText = counter6;
  });
});

function save1() {
  var checkbox = document.getElementById("checkbox1");
  localStorage.setItem("checkbox1", checkbox.checked);
}

var checked = JSON.parse(localStorage.getItem("checkbox1"));
document.getElementById("checkbox1").checked = checked;

function save2() {
  var checkbox = document.getElementById("checkbox2");
  localStorage.setItem("checkbox2", checkbox.checked);
}

var checked = JSON.parse(localStorage.getItem("checkbox2"));
document.getElementById("checkbox2").checked = checked;

function save3() {
  var checkbox = document.getElementById("checkbox3");
  localStorage.setItem("checkbox3", checkbox.checked);
}

var checked = JSON.parse(localStorage.getItem("checkbox3"));
document.getElementById("checkbox3").checked = checked;

function save4() {
  var checkbox = document.getElementById("checkbox4");
  localStorage.setItem("checkbox4", checkbox.checked);
}

var checked = JSON.parse(localStorage.getItem("checkbox4"));
document.getElementById("checkbox4").checked = checked;

function save5() {
  var checkbox = document.getElementById("checkbox5");
  localStorage.setItem("checkbox5", checkbox.checked);
}

var checked = JSON.parse(localStorage.getItem("checkbox5"));
document.getElementById("checkbox5").checked = checked;

function save6() {
  var checkbox = document.getElementById("checkbox6");
  localStorage.setItem("checkbox6", checkbox.checked);
}

var checked = JSON.parse(localStorage.getItem("checkbox6"));
document.getElementById("checkbox6").checked = checked;

function save7() {
  var checkbox = document.getElementById("checkbox7");
  localStorage.setItem("checkbox7", checkbox.checked);
}

var checked = JSON.parse(localStorage.getItem("checkbox7"));
document.getElementById("checkbox7").checked = checked;

function save8() {
  var checkbox = document.getElementById("checkbox8");
  localStorage.setItem("checkbox8", checkbox.checked);
}

var checked = JSON.parse(localStorage.getItem("checkbox8"));
document.getElementById("checkbox8").checked = checked;

function save9() {
  var checkbox = document.getElementById("checkbox9");
  localStorage.setItem("checkbox9", checkbox.checked);
}

var checked = JSON.parse(localStorage.getItem("checkbox9"));
document.getElementById("checkbox9").checked = checked;

function save10() {
  var checkbox = document.getElementById("checkbox10");
  localStorage.setItem("checkbox10", checkbox.checked);
}

var checked = JSON.parse(localStorage.getItem("checkbox10"));
document.getElementById("checkbox10").checked = checked;

function save11() {
  var checkbox = document.getElementById("checkbox11");
  localStorage.setItem("checkbox11", checkbox.checked);
}

var checked = JSON.parse(localStorage.getItem("checkbox11"));
document.getElementById("checkbox11").checked = checked;

function save12() {
  var checkbox = document.getElementById("checkbox12");
  localStorage.setItem("checkbox12", checkbox.checked);
}

var checked = JSON.parse(localStorage.getItem("checkbox12"));
document.getElementById("checkbox12").checked = checked;

function save13() {
  var checkbox = document.getElementById("checkbox13");
  localStorage.setItem("checkbox13", checkbox.checked);
}

var checked = JSON.parse(localStorage.getItem("checkbox13"));
document.getElementById("checkbox13").checked = checked;

function save14() {
  var checkbox = document.getElementById("checkbox14");
  localStorage.setItem("checkbox14", checkbox.checked);
}

var checked = JSON.parse(localStorage.getItem("checkbox14"));
document.getElementById("checkbox14").checked = checked;

function save15() {
  var checkbox = document.getElementById("checkbox15");
  localStorage.setItem("checkbox15", checkbox.checked);
}

var checked = JSON.parse(localStorage.getItem("checkbox15"));
document.getElementById("checkbox15").checked = checked;

function save16() {
  var checkbox = document.getElementById("checkbox16");
  localStorage.setItem("checkbox16", checkbox.checked);
}

var checked = JSON.parse(localStorage.getItem("checkbox16"));
document.getElementById("checkbox16").checked = checked;

function save17() {
  var checkbox = document.getElementById("checkbox17");
  localStorage.setItem("checkbox17", checkbox.checked);
}

var checked = JSON.parse(localStorage.getItem("checkbox17"));
document.getElementById("checkbox17").checked = checked;

function save18() {
  var checkbox = document.getElementById("checkbox18");
  localStorage.setItem("checkbox18", checkbox.checked);
}

var checked = JSON.parse(localStorage.getItem("checkbox18"));
document.getElementById("checkbox18").checked = checked;

function save19() {
  var checkbox = document.getElementById("checkbox19");
  localStorage.setItem("checkbox19", checkbox.checked);
}

var checked = JSON.parse(localStorage.getItem("checkbox19"));
document.getElementById("checkbox19").checked = checked;

function save20() {
  var checkbox = document.getElementById("checkbox20");
  localStorage.setItem("checkbox20", checkbox.checked);
}

var checked = JSON.parse(localStorage.getItem("checkbox20"));
document.getElementById("checkbox20").checked = checked;

function save21() {
  var checkbox = document.getElementById("checkbox21");
  localStorage.setItem("checkbox21", checkbox.checked);
}

var checked = JSON.parse(localStorage.getItem("checkbox21"));
document.getElementById("checkbox21").checked = checked;

function save22() {
  var checkbox = document.getElementById("checkbox22");
  localStorage.setItem("checkbox22", checkbox.checked);
}

var checked = JSON.parse(localStorage.getItem("checkbox22"));
document.getElementById("checkbox22").checked = checked;

function save23() {
  var checkbox = document.getElementById("checkbox23");
  localStorage.setItem("checkbox23", checkbox.checked);
}

var checked = JSON.parse(localStorage.getItem("checkbox23"));
document.getElementById("checkbox23").checked = checked;

function save24() {
  var checkbox = document.getElementById("checkbox24");
  localStorage.setItem("checkbox24", checkbox.checked);
}

var checked = JSON.parse(localStorage.getItem("checkbox24"));
document.getElementById("checkbox24").checked = checked;

function save25() {
  var checkbox = document.getElementById("checkbox25");
  localStorage.setItem("checkbox25", checkbox.checked);
}

var checked = JSON.parse(localStorage.getItem("checkbox25"));
document.getElementById("checkbox25").checked = checked;

function save26() {
  var checkbox = document.getElementById("checkbox27");
  localStorage.setItem("checkbox27", checkbox.checked);
}

var checked = JSON.parse(localStorage.getItem("checkbox27"));
document.getElementById("checkbox27").checked = checked;

function save28() {
  var checkbox = document.getElementById("checkbox28");
  localStorage.setItem("checkbox28", checkbox.checked);
}

var checked = JSON.parse(localStorage.getItem("checkbox28"));
document.getElementById("checkbox28").checked = checked;

function save29() {
  var checkbox = document.getElementById("checkbox29");
  localStorage.setItem("checkbox29", checkbox.checked);
}

var checked = JSON.parse(localStorage.getItem("checkbox29"));
document.getElementById("checkbox29").checked = checked;

function save30() {
  var checkbox = document.getElementById("checkbox30");
  localStorage.setItem("checkbox30", checkbox.checked);
}

var checked = JSON.parse(localStorage.getItem("checkbox30"));
document.getElementById("checkbox30").checked = checked;
