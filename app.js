const sections = [
  {
    id: "warmup",
    time: "00-10 minutes",
    title: "Warm-Up: Fix or Fail?",
    type: "fixFail",
    intro: "Show one scenario at a time. Students choose FIX if the setup should work or FAIL if the setup has a problem.",
    instructor: "Have students commit to FIX or FAIL, then reveal the reason and move to the next scenario.",
    items: [
      {
        prompt: "PC IP: 192.168.1.5\nGateway: 10.0.0.1",
        answer: "FAIL",
        why: "They are not on the same subnet. The PC and gateway are on different streets."
      },
      {
        prompt: "Interface status: Administratively Down",
        answer: "FAIL",
        why: "Someone manually turned the port off. The fix is no shutdown."
      },
      {
        prompt: "You ping 127.0.0.1 and get a reply.",
        answer: "FIX",
        why: "The loopback reply means the computer's internal network stack is healthy."
      },
      {
        prompt: "A switch has 3 cables plugged in. All lights are solid amber.",
        answer: "FAIL",
        why: "This is likely Spanning Tree blocking traffic to prevent a loop."
      },
      {
        prompt: "Subnet mask: 255.255.255.0\nPC A: 192.168.1.10\nPC B: 192.168.1.20",
        answer: "FIX",
        why: "Both devices are in the same /24 neighborhood."
      }
    ]
  },
  {
    id: "sprint",
    time: "10-30 minutes",
    title: "Certification Sprint",
    type: "rapidQuiz",
    intro: "Read each question out loud. Students answer with reactions: thumbs up = A, heart = B, surprised = C, clap = D.",
    instructor: "Keep the pace quick. Reveal the correct letter, give the one-line reason, then move on.",
    questions: [
      {
        q: "Which device uses MAC addresses to send data to the right port?",
        choices: ["Hub", "Switch", "Router", "Firewall"],
        answer: 1,
        why: "Switches learn MAC addresses and forward frames to the right port."
      },
      {
        q: "What is the brain of the computer's network connection?",
        choices: ["CPU", "NIC", "RAM", "SSD"],
        answer: 1,
        why: "The NIC is the network interface card."
      },
      {
        q: "Which command shows your IP on a Mac or Linux machine?",
        choices: ["ipconfig", "ifconfig", "netstat", "ping"],
        answer: 1,
        why: "ifconfig is the classic Mac/Linux answer for this certification-style question."
      },
      {
        q: "If a student's IP starts with 169.254.x.x, what is the problem?",
        choices: ["Internet is fast", "DHCP failed (APIPA)", "Virus", "Wrong cable"],
        answer: 1,
        why: "169.254 means the device self-assigned an APIPA address after DHCP failed."
      },
      {
        q: "What layer of the OSI model is the Physical layer?",
        choices: ["Layer 1", "Layer 3", "Layer 7", "Layer 4"],
        answer: 0,
        why: "Physical cabling, ports, and signals are Layer 1."
      }
    ]
  },
  {
    id: "command",
    time: "30-45 minutes",
    title: "Choose the Next Command",
    type: "singleChoice",
    intro: "Students choose the best next troubleshooting command for each scenario.",
    instructor: "Push students toward bottom-up troubleshooting: verify the local device, then the gateway, then the path, then services.",
    questions: [
      {
        prompt: "The Internet is down for everyone in the building. What do you do first?",
        choices: [
          "Check the Gateway: ping 192.168.1.1",
          "Check the Path: tracert 8.8.8.8",
          "Check your own IP: ipconfig",
          "Check the Switch: show vlan"
        ],
        answer: 2,
        why: "Always start with your own machine. If you do not have an IP, router checks are premature."
      },
      {
        prompt: "A website loads, but it takes 20 seconds. Which command helps identify where the path slows down?",
        choices: ["ipconfig", "tracert 8.8.8.8", "hostname", "arp -a"],
        answer: 1,
        why: "tracert shows each hop on the route, which helps locate the slow segment."
      },
      {
        prompt: "You need to confirm whether the default gateway responds before testing the Internet.",
        choices: ["ping 192.168.1.1", "nslookup example.com", "netstat -ano", "show vlan"],
        answer: 0,
        why: "Pinging the gateway confirms whether the local network path to the router works."
      },
      {
        prompt: "The user can ping 8.8.8.8 but cannot open example.com by name. What command should you try next?",
        choices: ["ipconfig /release", "nslookup example.com", "tracert 127.0.0.1", "show ip route"],
        answer: 1,
        why: "If IP works but names fail, test DNS resolution with nslookup."
      },
      {
        prompt: "A Windows PC has a 169.254.x.x address. Which command asks DHCP for a new address?",
        choices: ["ipconfig /renew", "ping 127.0.0.1", "tracert 8.8.8.8", "netstat"],
        answer: 0,
        why: "ipconfig /renew requests a new lease from DHCP."
      }
    ]
  },
  {
    id: "escape",
    time: "45-65 minutes",
    title: "The Zero-Cost Escape Room",
    type: "escape",
    intro: "Theme: The Silent Server Room. Students solve a sequence of lock codes.",
    instructor: "Accept minor spelling and capitalization differences. Reveal one lock at a time.",
    locks: [
      {
        label: "Puzzle 1: The Door",
        prompt: "The door code is the port number used for Web Browsing (HTTP).",
        answers: ["80"],
        success: "Door unlocked. HTTP uses port 80."
      },
      {
        label: "Puzzle 2: The Console",
        prompt: "To log in, you need the device that connects two different networks.",
        answers: ["router"],
        success: "Console accepted. A router connects different networks."
      },
      {
        label: "Puzzle 3: The Fix",
        prompt: "The server IP is 192.168.1.50 and the router is 192.168.1.1. What missing setting lets the server reach the Internet?",
        answers: ["default gateway", "gateway"],
        success: "Network restored. The missing setting is the default gateway."
      },
      {
        label: "Puzzle 4: The Secure Door",
        prompt: "The secure web console uses HTTPS. What standard port number opens the console?",
        answers: ["443"],
        success: "Secure console opened. HTTPS uses port 443."
      },
      {
        label: "Puzzle 5: The Address Problem",
        prompt: "A workstation shows 169.254.20.10. Which service most likely failed?",
        answers: ["dhcp", "dhcp server"],
        success: "Correct. A 169.254 address usually means DHCP failed."
      },
      {
        label: "Puzzle 6: The Local Test",
        prompt: "What IP address do you ping to test the local network stack on the same computer?",
        answers: ["127.0.0.1", "loopback"],
        success: "Loopback confirmed. 127.0.0.1 tests the local TCP/IP stack."
      }
    ]
  },
  {
    id: "detective",
    time: "65-80 minutes",
    title: "Network Detective",
    type: "singleChoice",
    intro: "Students investigate short case files and pick the most likely cause or next fix.",
    instructor: "Ask students which evidence matters most before revealing the answer.",
    questions: [
      {
        prompt: "Case File: The Red Light Mystery. A user can't get to the shared drive. ipconfig shows Media Disconnected. What is the most likely fix?",
        choices: [
          "Reinstall the shared drive software",
          "Move the user to a different VLAN",
          "Check the physical cable",
          "Change the DNS server"
        ],
        answer: 2,
        why: "Media Disconnected points to Layer 1. The cable is likely unplugged or broken."
      },
      {
        prompt: "A laptop can reach websites by IP address but not by name. Which service is the likely issue?",
        choices: ["DNS", "DHCP", "STP", "NTP"],
        answer: 0,
        why: "DNS turns names into IP addresses. If IP works but names fail, suspect DNS."
      },
      {
        prompt: "A PC has IP 192.168.1.25/24 and gateway 192.168.2.1. Local pings work, but Internet access fails.",
        choices: ["Wrong default gateway", "Bad monitor cable", "HTTPS blocked", "MAC address conflict"],
        answer: 0,
        why: "The gateway must be reachable from the PC's local subnet."
      },
      {
        prompt: "A switch port is orange right after a cable is plugged in, then turns green after a short wait.",
        choices: ["Normal STP listening/learning", "DHCP server failure", "Wrong DNS suffix", "Bad subnet mask"],
        answer: 0,
        why: "Spanning Tree can temporarily block while the port transitions."
      },
      {
        prompt: "Only one office cannot connect. All users in that room plug into the same small switch.",
        choices: ["Check that room's switch uplink", "Replace the Internet firewall", "Change every user's password", "Clear browser cache"],
        answer: 0,
        why: "A shared local failure points to the common device or uplink."
      }
    ]
  },
  {
    id: "matching",
    time: "Bonus / flex",
    title: "Command Matching",
    type: "matching",
    intro: "Match each command to the job it performs, then check the answers.",
    instructor: "Have students make a selection for every row before checking the key.",
    commands: [
      { command: "Ping", answer: "C", prompt: "Are you there, Server?" },
      { command: "Tracert", answer: "A", prompt: "Show me the path to Google" },
      { command: "Ipconfig", answer: "B", prompt: "Am I connected to the wall?" },
      { command: "Nslookup", answer: "D", prompt: "Can this name turn into an IP address?" },
      { command: "Ipconfig /all", answer: "E", prompt: "Show me detailed network settings, including MAC and DNS" }
    ],
    options: [
      ["A", "Show me the path to Google"],
      ["B", "Am I connected to the wall?"],
      ["C", "Are you there, Server?"],
      ["D", "Can this name turn into an IP address?"],
      ["E", "Show me detailed network settings, including MAC and DNS"]
    ]
  },
  {
    id: "mistakes",
    time: "Review",
    title: "Top 5 Cert-Killer Mistakes",
    type: "mistakes",
    intro: "Use this as a fast reset before the final challenge.",
    instructor: "Ask students to give a real-world example for one mistake before moving to the mock challenge.",
    mistakes: [
      ["Forgetting the Gateway", "To leave your house, you need a door. To leave your network, you need a gateway."],
      ["Confusing Switch vs. Router", "Switches connect the same network. Routers connect different networks."],
      ["The APIPA Trap", "If you see 169.254, troubleshoot DHCP before troubleshooting the website."],
      ["Skipping Layer 1", "Many questions are solved by checking whether it is plugged in."],
      ["Mixing Up IP vs. MAC", "IPs are changeable home addresses. MACs stay with the network device."]
    ]
  },
  {
    id: "final",
    time: "80-90 minutes",
    title: "Final Mock Challenge",
    type: "finalQuiz",
    intro: "Use this as a Google Form, chat list, or live browser challenge.",
    instructor: "Students answer in numbered chat format. Use the on-screen answer key after submissions.",
    questions: [
      ["Device for Layer 2?", "Switch"],
      ["Command to test delay/latency?", "Ping"],
      ["Protocol for assigning IPs?", "DHCP"],
      ["A group of computers on one switch acting like they are on separate ones?", "VLAN"],
      ["Which command reveals the MAC address?", "ipconfig /all"],
      ["The exit of a network?", "Default Gateway"],
      ["Is 255.255.255.0 an IP or a Mask?", "Mask"],
      ["What does a router use to route data?", "IP Address"],
      ["Standard port for HTTPS?", "443"],
      ["First step in troubleshooting?", "Identify the problem / check physical"],
      ["What does APIPA usually start with?", "169.254"],
      ["What protocol resolves hostnames to IP addresses?", "DNS"],
      ["What command shows each router hop?", "tracert"],
      ["What device connects different networks?", "Router"],
      ["What device forwards frames by MAC address?", "Switch"],
      ["What layer includes cables and ports?", "Layer 1"],
      ["What layer includes IP addressing?", "Layer 3"],
      ["What command tests the local loopback address?", "ping 127.0.0.1"],
      ["What is the standard HTTP port?", "80"],
      ["What setting lets a PC leave its local network?", "Default Gateway"],
      ["What does DHCP assign?", "IP settings"],
      ["What does DNS resolve?", "Names to IP addresses"],
      ["What does VLAN stand for?", "Virtual Local Area Network"],
      ["What does NIC stand for?", "Network Interface Card"],
      ["Which command can show active network connections?", "netstat"],
      ["What is a subnet mask used for?", "Identifying the network portion of an IP address"],
      ["What should you check first when link status is disconnected?", "Physical cable / Layer 1"],
      ["What address is used for loopback?", "127.0.0.1"],
      ["What does a solid amber switch light often indicate?", "Temporary STP blocking or port state"],
      ["What command renews a DHCP lease on Windows?", "ipconfig /renew"],
      ["What command releases a DHCP lease on Windows?", "ipconfig /release"],
      ["What kind of address does a switch learn?", "MAC address"],
      ["What kind of address does a router use for routing?", "IP address"],
      ["What command checks DNS from the terminal?", "nslookup"]
    ]
  }
];

let currentSection = 0;
let timerSeconds = 0;
let timerId = null;
const state = {
  warmup: { index: 0, revealed: false },
  sprint: { index: 0, revealed: false },
  command: { index: 0, selected: null, revealed: false },
  escape: { index: 0, complete: false },
  detective: { index: 0, selected: null, revealed: false },
  matching: { revealed: false, selections: {} },
  mistakes: { revealed: false },
  final: { revealed: false, page: 0 }
};

const nav = document.getElementById("section-nav");
const title = document.getElementById("section-title");
const sectionTime = document.getElementById("section-time");
const content = document.getElementById("section-content");
const timerDisplay = document.getElementById("session-time");

function init() {
  renderNav();
  renderSection();
  document.getElementById("prev-section").addEventListener("click", () => moveSection(-1));
  document.getElementById("next-section").addEventListener("click", () => moveSection(1));
  document.getElementById("timer-toggle").addEventListener("click", toggleTimer);
  document.getElementById("timer-reset").addEventListener("click", resetTimer);
}

function renderNav() {
  nav.innerHTML = "";
  sections.forEach((section, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = index === currentSection ? "active" : "";
    button.innerHTML = `${section.title}<span>${section.time}</span>`;
    button.addEventListener("click", () => {
      currentSection = index;
      renderSection();
    });
    nav.appendChild(button);
  });
}

function renderSection() {
  const section = sections[currentSection];
  title.textContent = section.title;
  sectionTime.textContent = section.time;
  content.innerHTML = "";
  renderNav();
  document.getElementById("prev-section").disabled = currentSection === 0;
  document.getElementById("next-section").disabled = currentSection === sections.length - 1;

  if (section.type === "fixFail") renderFixFail(section);
  if (section.type === "rapidQuiz") renderRapidQuiz(section);
  if (section.type === "singleChoice") renderSingleChoice(section);
  if (section.type === "escape") renderEscape(section);
  if (section.type === "matching") renderMatching(section);
  if (section.type === "mistakes") renderMistakes(section);
  if (section.type === "finalQuiz") renderFinalQuiz(section);
}

function panel(section) {
  const template = document.getElementById("activity-shell");
  const node = template.content.cloneNode(true);
  node.querySelector(".activity-copy").innerHTML = `<p class="lead">${section.intro}</p>`;
  node.querySelector(".instructor-note").textContent = section.instructor;
  content.appendChild(node);
  return content.querySelector(".activity-panel:last-child");
}

function renderFixFail(section) {
  const view = panel(section);
  const body = view.querySelector(".activity-body");
  const controls = view.querySelector(".control-row");
  const local = state.warmup;
  const item = section.items[local.index];
  body.innerHTML = `
    <div class="prompt-card">
      <p class="eyebrow">Scenario ${local.index + 1} of ${section.items.length}</p>
      <code class="code-output">${escapeHtml(item.prompt)}</code>
    </div>
    <div class="answer-row">
      <button class="choice-button" data-answer="FIX" type="button">FIX</button>
      <button class="choice-button" data-answer="FAIL" type="button">FAIL</button>
    </div>
    <div class="feedback ${local.revealed ? "correct" : "hidden"}">
      <strong>${item.answer}</strong>: ${item.why}
    </div>
  `;
  body.querySelectorAll("[data-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      const correct = button.dataset.answer === item.answer;
      button.classList.add(correct ? "correct" : "wrong");
      body.querySelector(".feedback").className = `feedback ${correct ? "correct" : "wrong"}`;
      body.querySelector(".feedback").innerHTML = `<strong>${correct ? "Correct" : "Not quite"}.</strong> ${item.answer}: ${item.why}`;
      local.revealed = true;
    });
  });
  controls.append(
    makeButton("Reveal Answer", () => {
      local.revealed = true;
      renderSection();
    }),
    makeButton("Next Scenario", () => {
      local.index = (local.index + 1) % section.items.length;
      local.revealed = false;
      renderSection();
    }, "secondary"),
    makeButton("Reset", () => {
      local.index = 0;
      local.revealed = false;
      renderSection();
    }, "secondary")
  );
}

function renderRapidQuiz(section) {
  const view = panel(section);
  const body = view.querySelector(".activity-body");
  const controls = view.querySelector(".control-row");
  const local = state.sprint;
  const q = section.questions[local.index];
  const letters = ["A", "B", "C", "D"];
  body.innerHTML = `
    <div class="prompt-card">
      <p class="eyebrow">Question ${local.index + 1} of ${section.questions.length} | A=thumbs up B=heart C=surprised D=clap</p>
      <p class="large-prompt">${q.q}</p>
    </div>
    <div class="grid two">
      ${q.choices.map((choice, index) => `<button class="choice-button ${local.revealed && index === q.answer ? "correct" : ""}" data-choice="${index}" type="button">${letters[index]}. ${choice}</button>`).join("")}
    </div>
    <div class="feedback ${local.revealed ? "correct" : "hidden"}">
      <strong>${letters[q.answer]} is correct.</strong> ${q.why}
    </div>
  `;
  body.querySelectorAll("[data-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      local.revealed = true;
      renderSection();
    });
  });
  controls.append(
    makeButton("Reveal Answer", () => {
      local.revealed = true;
      renderSection();
    }),
    makeButton("Next Question", () => {
      local.index = (local.index + 1) % section.questions.length;
      local.revealed = false;
      renderSection();
    }, "secondary"),
    makeButton("Reset", () => {
      local.index = 0;
      local.revealed = false;
      renderSection();
    }, "secondary")
  );
}

function renderSingleChoice(section) {
  const view = panel(section);
  const body = view.querySelector(".activity-body");
  const controls = view.querySelector(".control-row");
  const local = state[section.id];
  const questions = section.questions || [section];
  const activeIndex = local.index || 0;
  const active = questions[activeIndex];
  body.innerHTML = `
    <div class="prompt-card">
      <p class="eyebrow">Question ${activeIndex + 1} of ${questions.length}</p>
      <p class="large-prompt">${active.prompt}</p>
    </div>
    <div class="grid">
      ${active.choices.map((choice, index) => {
        const result = local.revealed && index === active.answer ? "correct" : "";
        const wrong = local.selected === index && index !== active.answer ? "wrong" : "";
        return `<button class="choice-button ${result} ${wrong}" data-choice="${index}" type="button">${index + 1}. ${choice}</button>`;
      }).join("")}
    </div>
    <div class="feedback ${local.revealed ? "correct" : "hidden"}">
      <strong>Correct answer: ${active.answer + 1}.</strong> ${active.why}
    </div>
  `;
  body.querySelectorAll("[data-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      local.selected = Number(button.dataset.choice);
      local.revealed = true;
      renderSection();
    });
  });
  controls.append(
    makeButton("Reveal Answer", () => {
      local.revealed = true;
      renderSection();
    }),
    makeButton("Next Question", () => {
      local.index = (activeIndex + 1) % questions.length;
      local.selected = null;
      local.revealed = false;
      renderSection();
    }, "secondary"),
    makeButton("Reset", () => {
      local.index = 0;
      local.selected = null;
      local.revealed = false;
      renderSection();
    }, "secondary")
  );
}

function renderEscape(section) {
  const view = panel(section);
  const body = view.querySelector(".activity-body");
  const controls = view.querySelector(".control-row");
  const local = state.escape;
  const lock = section.locks[local.index];
  body.innerHTML = `
    <div class="prompt-card">
      <p class="eyebrow">${lock.label}</p>
      <p class="large-prompt">${lock.prompt}</p>
    </div>
    <form class="input-row" id="escape-form">
      <input id="escape-input" type="text" autocomplete="off" placeholder="Type lock answer">
      <button class="icon-button" type="submit">Unlock</button>
    </form>
    <div id="escape-feedback" class="feedback ${local.complete ? "correct" : "hidden"}">
      ${local.complete ? "All locks solved. The server room is restored." : ""}
    </div>
  `;
  body.querySelector("#escape-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = body.querySelector("#escape-input");
    const value = input.value.trim().toLowerCase();
    const feedback = body.querySelector("#escape-feedback");
    if (lock.answers.includes(value)) {
      feedback.className = "feedback correct";
      feedback.textContent = lock.success;
      if (local.index === section.locks.length - 1) {
        local.complete = true;
      } else {
        local.index += 1;
        setTimeout(renderSection, 650);
      }
    } else {
      feedback.className = "feedback wrong";
      feedback.textContent = "Access denied. Try the cert keyword or port number.";
    }
  });
  controls.append(
    makeButton("Reveal Lock Answer", () => {
      const feedback = body.querySelector("#escape-feedback");
      feedback.className = "feedback correct";
      feedback.textContent = `Answer: ${lock.answers[0]}. ${lock.success}`;
    }),
    makeButton("Next Lock", () => {
      local.index = Math.min(local.index + 1, section.locks.length - 1);
      renderSection();
    }, "secondary"),
    makeButton("Reset", () => {
      local.index = 0;
      local.complete = false;
      renderSection();
    }, "secondary")
  );
}

function renderMatching(section) {
  const view = panel(section);
  const body = view.querySelector(".activity-body");
  const controls = view.querySelector(".control-row");
  const local = state.matching;
  body.innerHTML = `
    <div class="match-grid">
      <div class="match-item">
        <strong>Commands</strong>
        ${section.commands.map((item, index) => `<p>${index + 1}. ${item.command}</p>`).join("")}
      </div>
      <div class="match-item">
        <strong>Jobs</strong>
        ${section.options.map(([letter, prompt]) => `<p>${letter}. ${prompt}</p>`).join("")}
      </div>
    </div>
    <div class="match-form">
      ${section.commands.map((item, index) => `
        <label class="match-row">
          <span>${index + 1}. ${item.command}</span>
          <select data-match="${index}" aria-label="Match ${item.command}">
            <option value="">Choose a letter</option>
            ${section.options.map(([letter]) => `<option value="${letter}" ${local.selections[index] === letter ? "selected" : ""}>${letter}</option>`).join("")}
          </select>
        </label>
      `).join("")}
    </div>
    <div class="feedback ${local.revealed ? getMatchingScore(section, local).className : "hidden"}">
      ${local.revealed ? getMatchingScore(section, local).message : ""}
    </div>
  `;
  body.querySelectorAll("[data-match]").forEach((select) => {
    select.addEventListener("change", () => {
      local.selections[select.dataset.match] = select.value;
    });
  });
  controls.append(
    makeButton("Check Matches", () => {
      local.revealed = true;
      renderSection();
    }),
    makeButton("Reveal Key", () => {
      section.commands.forEach((item, index) => {
        local.selections[index] = item.answer;
      });
      local.revealed = true;
      renderSection();
    }, "secondary"),
    makeButton("Reset", () => {
      local.revealed = false;
      local.selections = {};
      renderSection();
    }, "secondary")
  );
}

function renderMistakes(section) {
  const view = panel(section);
  const body = view.querySelector(".activity-body");
  body.innerHTML = `
    <ol class="mistake-list">
      ${section.mistakes.map(([titleText, detail]) => `<li><strong>${titleText}</strong><br>${detail}</li>`).join("")}
    </ol>
  `;
}

function renderFinalQuiz(section) {
  const view = panel(section);
  const body = view.querySelector(".activity-body");
  const controls = view.querySelector(".control-row");
  const local = state.final;
  const pageSize = 10;
  const pageCount = Math.ceil(section.questions.length / pageSize);
  const page = Math.min(local.page, pageCount - 1);
  const start = page * pageSize;
  const visibleQuestions = section.questions.slice(start, start + pageSize);
  body.innerHTML = `
    <div class="prompt-card">
      <p class="eyebrow">Set ${page + 1} of ${pageCount}</p>
      <p class="lead">Showing 10 questions from a ${section.questions.length}-question bank.</p>
    </div>
    <div class="grid">
      ${visibleQuestions.map(([question, answer], index) => `
        <div class="mini-card">
          <strong>${start + index + 1}. ${question}</strong>
          <p class="${local.revealed ? "" : "hidden"}">Answer: ${answer}</p>
        </div>
      `).join("")}
    </div>
    <div class="prompt-card score-card ${local.revealed ? "" : "hidden"}">
      <strong>Wrap-up:</strong> Review missed items, then assign a Senior Analyst role to one student for the next session.
    </div>
  `;
  controls.append(
    makeButton("Reveal Answer Key", () => {
      local.revealed = true;
      renderSection();
    }),
    makeButton("Next 10", () => {
      local.page = (page + 1) % pageCount;
      local.revealed = false;
      renderSection();
    }, "secondary"),
    makeButton("Previous 10", () => {
      local.page = (page - 1 + pageCount) % pageCount;
      local.revealed = false;
      renderSection();
    }, "secondary"),
    makeButton("Hide Key", () => {
      local.revealed = false;
      renderSection();
    }, "secondary")
  );
}

function getMatchingScore(section, local) {
  const correct = section.commands.filter((item, index) => local.selections[index] === item.answer).length;
  const total = section.commands.length;
  const key = section.commands
    .map((item, index) => `${index + 1}-${item.answer}`)
    .join(", ");
  return {
    className: correct === total ? "correct" : "wrong",
    message: `<strong>${correct} of ${total} correct.</strong> Key: ${key}`
  };
}

function makeButton(label, onClick, variant = "") {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = label;
  button.className = `icon-button ${variant}`.trim();
  button.addEventListener("click", onClick);
  return button;
}

function moveSection(direction) {
  currentSection = Math.max(0, Math.min(sections.length - 1, currentSection + direction));
  renderSection();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleTimer() {
  const button = document.getElementById("timer-toggle");
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
    button.textContent = "Start";
    button.setAttribute("aria-label", "Start timer");
    return;
  }
  timerId = setInterval(() => {
    timerSeconds += 1;
    renderTimer();
  }, 1000);
  button.textContent = "Pause";
  button.setAttribute("aria-label", "Pause timer");
}

function resetTimer() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
  timerSeconds = 0;
  document.getElementById("timer-toggle").textContent = "Start";
  renderTimer();
}

function renderTimer() {
  const minutes = String(Math.floor(timerSeconds / 60)).padStart(2, "0");
  const seconds = String(timerSeconds % 60).padStart(2, "0");
  timerDisplay.textContent = `${minutes}:${seconds}`;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

init();
