document.addEventListener("DOMContentLoaded", () => {
  const terminalBody = document.querySelector(".terminal-body");
  const commandText = "$ system_check --status";
  const logs = [
    "> Executing core diagnostics...",
    "> Stack: Python | DBMS | DevOps Fundamentals | Git | Dynamic HTML Forms",
    "> Operational Status: Ready for high-availability deployment."
  ];

  let charIndex = 0;
  let logIndex = 0;

  function typeCommand() {
    if (!terminalBody) return;

    terminalBody.innerHTML = `<span class="terminal-cmd">${commandText.substring(0, charIndex)}</span><span class="cursor">|</span>`;
    charIndex++;

    if (charIndex <= commandText.length) {
      setTimeout(typeCommand, 60);
    } else {
      setTimeout(printLogs, 400);
    }
  }

  function printLogs() {
    if (logIndex < logs.length) {
      const line = document.createElement("div");
      line.style.marginTop = "0.25rem";
      line.textContent = logs[logIndex];
      terminalBody.appendChild(line);
      logIndex++;
      setTimeout(printLogs, 300);
    }
  }

  typeCommand();
});
