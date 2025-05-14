const output = document.getElementById("output");

const introText = [
  "Welcome to my portfolio terminal.",
  "Here you'll find my projects, experience, and more.",
  "",
  "Type 'help' to get started."
];

let lineIndex = 0;
let charIndex = 0;

function typeLine() {
  if (lineIndex < introText.length) {
    if (charIndex < introText[lineIndex].length) {
      output.innerHTML += introText[lineIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeLine, 50);
    } else {
      output.innerHTML += "\n";
      lineIndex++;
      charIndex = 0;
      setTimeout(typeLine, 300);
    }
  }
}

window.onload = typeLine;
