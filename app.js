let resultVrl = 33;
let numberLen = 100;
let operation = "+";

function mainFunctionChild01() {
  x = document.getElementById("j1").innerHTML;
  if (x == resultVrl) {
    userScore();
  } else {
    compScore();
  }
  clearInterval(y);
  setInterval(mainFunction(), 1000);
}

function mainFunctionChild02() {
  x = document.getElementById("j2").innerHTML;
  if (x == resultVrl) {
    userScore();
  } else {
    compScore();
  }
  clearInterval(y);
  setInterval(mainFunction(), 1000);
}

function mainFunctionChild03() {
  x = document.getElementById("j3").innerHTML;
  if (x == resultVrl) {
    userScore();
  } else {
    compScore();
  }
  clearInterval(y);
  setInterval(mainFunction(), 1000);
}

function mainFunctionChild04() {
  x = document.getElementById("j4").innerHTML;
  if (x == resultVrl) {
    userScore();
  } else {
    compScore();
  }
  clearInterval(y);
  setInterval(mainFunction(), 1000);
}

let y;
let userscore = 0;
let compscore = 0;

function userScore() {
  userscore += 1;
  document.getElementById("userscore").innerHTML = userscore;
  if (userscore == 10) {
    document.getElementById("userscore").innerHTML = 10;
    modalFx("user");
  }
}

function compScore() {
  compscore += 1;
  document.getElementById("compscore").innerHTML = compscore;
  if (compscore == 10) {
    document.getElementById("compscore").innerHTML = 10;
    modalFx("comp");
  }
}

let t = 2;

function resetMainFunction() {
  window.location.href = "index.html";
}

function currentOperation(x) {
  if (x == "+") {
    operation = "+";
    document.getElementById("soz").innerHTML = "sum";

    let element = document.getElementById("operationBtn01");
    element = document.getElementById("operationBtn02");
    element = document.getElementById("operationBtn03");
    document.getElementById("numberLen03").style.display = "inline-block";
  } else if (x == "-") {
    operation = "-";
    document.getElementById("soz").innerHTML = "substraction";

    element = document.getElementById("operationBtn01");
    element = document.getElementById("operationBtn02");
    element = document.getElementById("operationBtn03");
    document.getElementById("numberLen03").style.display = "inline-block";
  } else if (x == "*") {
    operation = "*";
    document.getElementById("numberLen03").style.display = "none";
    changeNumLen("1");
    document.getElementById("soz").innerHTML = "multiplication";

    element = document.getElementById("operationBtn01");
    element = document.getElementById("operationBtn02");
    element = document.getElementById("operationBtn03");
  }
}
function changeNumLen(x) {
  if (x == "1") {
    numberLen = 10;
    element = document.getElementById("numberLen01");
    element = document.getElementById("numberLen02");
    element = document.getElementById("numberLen03");
  } else if (x == "2") {
    numberLen = 100;
    element = document.getElementById("numberLen01");
    element = document.getElementById("numberLen02");
    element = document.getElementById("numberLen03");
  } else if (x == "3") {
    numberLen = 1000;
    element = document.getElementById("numberLen01");
    element = document.getElementById("numberLen02");
    element = document.getElementById("numberLen03");
  }
}

function difficultyLevel(x) {
  if (x == "easy") {
    t = 10;
    element = document.getElementById("easy");
    element = document.getElementById("medium");
    element = document.getElementById("hard");
  } else if (x == "medium") {
    t = 6;
    element = document.getElementById("easy");
    element = document.getElementById("medium");
    element = document.getElementById("hard");
  } else if (x == "hard") {
    t = 2;
    element = document.getElementById("easy");
    element = document.getElementById("medium");
    element = document.getElementById("hard");
  }
}

function myTimer() {
  k = t;
  y = setInterval(function () {
    k = k - 1;
    document.getElementById("timer").innerHTML = k;
    if (k == 0) {
      clearInterval(y);
      compScore();
      mainFunction();
    }
  }, 1000);
}

function mainFunction() {
  let num1 = Math.floor(Math.random(10) * numberLen);
  let num2 = Math.floor(Math.random(10) * numberLen);
  document.getElementById("num1").innerHTML = num1;
  document.getElementById("num2").innerHTML = num2;
  if (operation == "+") {
    resultVrl = num1 + num2;
  } else if (operation == "-") {
    resultVrl = num1 - num2;
  } else if (operation == "*") {
    resultVrl = num1 * num2;
  }

  document.getElementById("operationBtn01").classList.add("cursor");
  document.getElementById("operationBtn02").classList.add("cursor");
  document.getElementById("operationBtn03").classList.add("cursor");
  document.getElementById("numberLen01").classList.add("cursor");
  document.getElementById("numberLen02").classList.add("cursor");
  document.getElementById("numberLen03").classList.add("cursor");
  document.getElementById("j1").innerHTML = Math.round(
    Math.random(100) + 1 + resultVrl
  );
  document.getElementById("j2").innerHTML = Math.round(
    Math.random(10) + 2 + resultVrl
  );
  document.getElementById("j3").innerHTML = Math.round(
    Math.random(50) + 3 + resultVrl
  );
  document.getElementById("j4").innerHTML = Math.round(
    Math.random(1000) - 1 + resultVrl
  );
  let random = Math.round((Math.random() * 10) / 3 + 1);
  document.getElementById("j" + random).innerHTML = resultVrl;
  myTimer();
  $("button").attr("disabled", "disabled");
  $("#Restart").attr("disabled", false);
  $(".b").attr("disabled", false);
}

function modalFx(x) {
  if (x == "user") {
    document.getElementById("modalID").style.display = "block";
    document.getElementById("userscore2").innerHTML = userscore;
    document.getElementById("compscore2").innerHTML = compscore;
    t = 0;
  } else if (x == "comp") {
    document.getElementById("congword").innerHTML =
      "Upps! Don't worry have a rest then try again";
    document.getElementById("modalID").style.display = "block";
    document.getElementById("userscore2").innerHTML = userscore;
    document.getElementById("compscore2").innerHTML = compscore;
    t = 0;
  }
}

function closeModal() {
  document.getElementById("modalID").style.display = "none";
  resetMainFunction();
}
