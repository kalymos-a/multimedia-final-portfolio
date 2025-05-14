const text = "Hey! I'm Carter, a Multimedia Student.";
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

const commandInput = document.getElementById("command-line");

commandInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const command = commandInput.value.trim();
    handleCommand(command);
    commandInput.value = ""; // Clear input
  }
});

function handleCommand(command) {
  switch (command.toLowerCase()) {
    case "cd projects":
      window.location.href = "projects.html";
      break;
    case "help":
      alert("Available commands:\ncd projects\nhelp");
      break;
    default:
      alert("Command not found. Try 'help'.");
  }
}
