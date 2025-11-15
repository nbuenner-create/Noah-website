const plans = {
"Montag": [
"Schulterdrücken", "Lateral Raises", "Front Raises", "Overhead Trizeps",
"Trizeps Pushdown", "Dips", "Cable Flys", "Butterfly"
],
"Dienstag": ["Deadlifts", "Rudern", "Latziehen", "T Bar Rudern", "Reverse Butterfly", "Shrugs", "Preacher Curls", "Hammer Curls"],
"Mittwoch": ["Beinpresse", "Beinstrecker", "Beinbeuger", "Wadenheben", "Bauch Twists", "Bauch Crunches", "Leg Raises"],
"Donnerstag": ["Cardio", "Bauch Training", "Dehnen", "Plyometrics"],
"Freitag": ["Preacher Curls", "Hammer Curls", "Cable Curls", "Reverse Curls", "Chest Flys", "Butterfly", "Dips"],
"Samstag": ["Cardio", "Bauch Training", "Dehnen", "Plyometrics"],
"Sonntag": ["Deadlifts", "Rudern", "TBar Rudern", "Latziehen", "Reverse Butterfly", "Schulterdrücken", "Lateral Raises", "Front Raises"],
"Ernährung": ["Wasser", "Protein Shake", "Zinc", "Creatin", "Magnesium", "Ashwaganda", "kein Zucker", "Meal Prep"]
};


const infoTexts = exercise => `${exercise} ist eine wichtige Übung zur Stärkung deiner Fitness.`;


const listEl = document.getElementById("exercise-list");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");


// Click on day
Array.from(document.getElementsByClassName("day-btn")).forEach(btn => {
btn.addEventListener("click", () => {
const day = btn.dataset.day;
listEl.innerHTML = "";


plans[day].forEach(ex => {
const div = document.createElement("div");
div.className = "exercise-item fade-in-up";
div.textContent = ex;
div.addEventListener("click", () => openModal(ex));
listEl.appendChild(div);
});
});
});


// Modal handler
function openModal(ex) {
document.getElementById("modal-title").textContent = ex;
document.getElementById("modal-img").src = "https://via.placeholder.com/300x200?text=" + ex;
document.getElementById("modal-text").textContent = infoTexts(ex);
modal.classList.remove("hidden");
}


closeModal.addEventListener("click", () => modal.classList.add("hidden"));


window.addEventListener("click", e => {
if (e.target === modal) modal.classList.add("hidden");
});
