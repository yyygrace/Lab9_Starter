let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let output = document.querySelector("output");
  let firstNum = document.querySelector("#first-num").value;
  let secondNum = document.querySelector("#second-num").value;
  let operator = document.querySelector("#operator").value;

  // try / catch / finally
  try {
    if (operator === "/" && secondNum === "0") {
      throw new DivideByZeroError("Cannot divide by zero");
    }
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Calculated.");
  }
  output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
});

let errorBtns = Array.from(document.querySelectorAll("#error-btns > button"));

// Start your code here
// You may move this JS to another file if you wish

// log
errorBtns[0].addEventListener("click", function () {
  console.log("console log demo");
});

// error
errorBtns[1].addEventListener("click", function () {
  console.error("console error demo");
});

// count
errorBtns[2].addEventListener("click", function () {
  console.count("count demo: ");
});

// warn
errorBtns[3].addEventListener("click", function () {
  console.warn("console warn demo");
});

// assert
errorBtns[4].addEventListener("click", function () {
  console.assert(false, "console assert demo");
});

// clear
errorBtns[5].addEventListener("click", function () {
  console.clear();
});

// dir
errorBtns[6].addEventListener("click", function () {
  console.dir(document.location);
});

// dirxml
errorBtns[7].addEventListener("click", function () {
  console.dirxml(document.location);
});

// group start
errorBtns[8].addEventListener("click", function () {
  console.group();
});

// group end
errorBtns[9].addEventListener("click", function () {
  console.groupEnd();
});

// console table
errorBtns[10].addEventListener("click", function () {
  console.table(["item 1", "item 2", "item 3"]);
});

// start timer
errorBtns[11].addEventListener("click", function () {
  console.time("timer demo");
});

// end timer
errorBtns[12].addEventListener("click", function () {
  console.timeEnd("timer demo");
});

// console trace
errorBtns[13].addEventListener("click", function () {
  console.trace();
});

// global error
errorBtns[14].addEventListener("click", function () {
  throw new Error("global error demo");
});

class DivideByZeroError extends Error {
  constructor(message) {
    super(message);
    this.name = "DivideByZeroError";
  }
}
