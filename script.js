// Typing effect for index.html only
const typingTarget = document.getElementById("typing-text");
if (typingTarget) {
  const text = "Hey! I'm Carter, a Multimedia student.";
  let i = 0;
  function type() {
    if (i < text.length) {
      typingTarget.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 50);
    }
  }
  window.onload = () => type();
}

// Command handler
function handleCommand(command, currentPage) {
  switch (command.toLowerCase()) {
    case "cd projects":
      if (currentPage !== "projects") {
        window.location.href = "projects.html";
      }
      break;
    case "cd ..":
    case "cd home":
      if (currentPage !== "home") {
        window.location.href = "index.html";
      }
      break;
    case "help":
      alert("Available commands:\ncd projects\ncd ..\ncd home\nhelp");
      break;
    default:
      alert("Command not found. Try 'help'.");
  }
}

// Input listener
function setupTerminalInput(inputId, currentPage) {
  const input = document.getElementById(inputId);
  if (!input) return;

  input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      const cmd = input.value.trim();
      handleCommand(cmd, currentPage);
      input.value = "";
    }
  });
}

// Detect which page is loaded and attach listeners
if (document.body.contains(document.getElementById("command-line"))) {
  setupTerminalInput("command-line", "home");
}
if (document.body.contains(document.getElementById("project-command"))) {
  setupTerminalInput("project-command", "projects");
}

const target = document.getElementById('hoverTarget');
   target.addEventListener('mousemove', (e) => {
     const rect = target.getBoundingClientRect();
     const x = e.clientX - rect.left;
     const y = e.clientY - rect.top;
     target.style.background = `radial-gradient(circle at ${x}px ${y}px, #f2f4f5, #5277C3)`;
     target.style.webkitBackgroundClip = 'text';
     target.style.backgroundClip = 'text';
     target.style.color = 'transparent';
   });
   target.addEventListener('mouseleave', () => {
     target.style.background = 'none';
     target.style.color = '#528bff';
   });
