const display = document.getElementById('display');

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    // eval() takes the string in the display and computes it
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}