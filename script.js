const text = "Welcome to my portfolio terminal-style website.";
const typingTarget = document.getElementById("typing-text");
let i = 0;

function type() {
  if (i < text.length) {
    typingTarget.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 50);
  }
}

window.onload = () => {
  type();
};
