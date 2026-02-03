const candidateSelect = document.getElementById("candidateSelect");
const candidateInfo = document.getElementById("candidateInfo");

const nameEl = document.getElementById("name");
const partyEl = document.getElementById("party");
const backgroundEl = document.getElementById("background");
const prioritiesEl = document.getElementById("priorities");

// Sample candidate data based on available reports
const candidates = [
  {
    id: "sassou",
    name: "Denis Sassou Nguesso",
    party: "Congolese Party of Labour (PCT)",
    background: "Incumbent President of the Republic of the Congo, in office since 1997 with decades of leadership experience.",
    priorities: "Stability, economic continuity, security, infrastructure development."
  },
  {
    id: "lassy",
    name: "Lassy Mbouity",
    party: "Les Socialistes Congolais",
    background: "Writer, historian, journalist and leader of the Congolese Socialists political party.",
    priorities: "Social justice, democratic transparency, national development."
  },
  {
    id: "dzwon",
    name: "Mathias Dzon",
    party: "Union patriotique pour le renouveau national (UPRN)",
    background: "Former finance minister and experienced political figure.",
    priorities: "Economic reform, private sector development, youth employment."
  },
  {
    id: "alexis",
    name: "Alexis Bongo",
    party: "Journalist and public figure",
    background: "Journalist and talk show host with a focus on communicating with youth and civil society.",
    priorities: "Economic opportunities, youth engagement, transparency."
  }
];

// Populate dropdown
candidates.forEach(c => {
  const option = document.createElement("option");
  option.value = c.id;
  option.textContent = c.name;
  candidateSelect.appendChild(option);
});

// Display selected candidate
candidateSelect.addEventListener("change", () => {
  const selected = candidateSelect.value;
  candidateInfo.classList.add("hidden");

  const candidate = candidates.find(c => c.id === selected);
  if (!candidate) return;

  nameEl.textContent = candidate.name;
  partyEl.textContent = candidate.party;
  backgroundEl.textContent = candidate.background;
  prioritiesEl.textContent = candidate.priorities;

  candidateInfo.classList.remove("hidden");
});
