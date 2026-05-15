

const cards = [
  {q:"What is the powerhouse of the cell?", a:"The mitochondria. It generates most of the cell's ATP energy through cellular respiration.", cat:"biology"},
  {q:"What does DNA stand for?", a:"Deoxyribonucleic Acid — the molecule that carries genetic information in living organisms.", cat:"biology"},
  {q:"What is Newton's Second Law of Motion?", a:"Force = Mass × Acceleration (F = ma). A larger force produces greater acceleration.", cat:"science"},
  {q:"What is the speed of light?", a:"Approximately 299,792,458 metres per second (about 3 × 10⁸ m/s) in a vacuum.", cat:"science"},
  {q:"What is photosynthesis?", a:"The process by which plants use sunlight, water, and CO₂ to produce glucose and oxygen.", cat:"biology"},
  {q:"Who invented the telephone?", a:"Alexander Graham Bell, who received the first patent for it in 1876.", cat:"history"},
  {q:"What year did World War II end?", a:"1945. Germany surrendered in May; Japan surrendered in September after atomic bombs were dropped.", cat:"history"},
  {q:"Who was the first person to walk on the Moon?", a:"Neil Armstrong, on July 20, 1969, during NASA's Apollo 11 mission.", cat:"history"},
  {q:"What does HTML stand for?", a:"HyperText Markup Language — the standard language for structuring content on the web.", cat:"tech"},
  {q:"What is an algorithm?", a:"A step-by-step set of instructions designed to solve a problem or complete a task.", cat:"tech"},
  {q:"What is the difference between RAM and ROM?", a:"RAM (Random Access Memory) is temporary, fast storage. ROM (Read-Only Memory) is permanent and stores firmware.", cat:"tech"},
  {q:"What is the Pythagorean theorem?", a:"a² + b² = c². In a right triangle, the sum of squares of the two shorter sides equals the square of the hypotenuse.", cat:"math"},
  {q:"What is a prime number?", a:"A natural number greater than 1 that has no divisors other than 1 and itself. E.g. 2, 3, 5, 7, 11.", cat:"math"},
  {q:"What is the value of Pi (π)?", a:"Approximately 3.14159. It is the ratio of a circle's circumference to its diameter.", cat:"math"},
  {q:"What is the periodic table?", a:"A tabular arrangement of chemical elements ordered by atomic number, electron configuration, and recurring properties.", cat:"science"},
  {q:"What causes a solar eclipse?", a:"When the Moon passes between Earth and the Sun, blocking sunlight. A total eclipse occurs when alignment is perfect.", cat:"science"},
  {q:"Who wrote 'Romeo and Juliet'?", a:"William Shakespeare, written around 1594–1596. It is one of his most famous tragedies.", cat:"history"},
  {q:"What is the Internet of Things (IoT)?", a:"A network of physical devices embedded with sensors and software to connect and exchange data over the internet.", cat:"tech"},
  {q:"What is a byte?", a:"A unit of digital information equal to 8 bits. It can represent 256 different values (0–255).", cat:"tech"},
  {q:"What is the quadratic formula?", a:"x = (−b ± √(b²−4ac)) / 2a. It finds the roots of any quadratic equation ax² + bx + c = 0.", cat:"math"},
];

let current = 0;
let known = [];

function renderCard(){

const card = cards[current];

document.getElementById("frontText").innerText =
card.q;

document.getElementById("backText").innerText =
card.a;

document.getElementById("cardNum").innerText =
`${current + 1} / ${cards.length}`;

document.getElementById("counterText").innerText =
`${current + 1} / ${cards.length}`;

document.getElementById("catBadge").innerText =
card.cat;

document.getElementById("catBadgeBack").innerText =
card.cat;

document.getElementById("statTotal").innerText =
cards.length;

document.getElementById("statKnown").innerText =
known.length;

document.getElementById("statLeft").innerText =
cards.length - known.length;

const progress =
(known.length / cards.length) * 100;

document.getElementById("progressFill").style.width =
progress + "%";

document.getElementById("progLabel").innerText =
`${known.length} of ${cards.length} mastered`;

document.getElementById("progPct").innerText =
Math.round(progress) + "%";

document.getElementById("cardEl")
.classList.remove("flipped");

}

function flipCard(){

document.getElementById("cardEl")
.classList.toggle("flipped");

}

function navigate(direction){

current += direction;

if(current < 0){
current = 0;
}

if(current >= cards.length){
current = cards.length - 1;
}

renderCard();

}

function toggleKnown(){

if(!known.includes(current)){

known.push(current);

document.getElementById("knownBtn")
.classList.add("marked");

}
else{

known = known.filter(i => i !== current);

document.getElementById("knownBtn")
.classList.remove("marked");

}

renderCard();

}

function shuffleCards(){

cards.sort(() => Math.random() - 0.5);

current = 0;

renderCard();

}

function resetProgress(){

known = [];

renderCard();

}

renderCard();

function togglePanel(panelId,chevronId,textId){

const panel = document.getElementById(panelId);

const text = document.getElementById(textId);

if(panel.style.display === "none"){

panel.style.display = "block";

text.innerText = "Hide";

}
else{

panel.style.display = "none";

text.innerText = "Show";

}

}


/* SAVE NEW CARD */

function saveCard(){

const q =
document.getElementById("inputQ").value;

const a =
document.getElementById("inputA").value;

const cat =
document.getElementById("inputCat").value;

if(q === "" || a === ""){

alert("Please fill all fields");

return;

}

cards.push({
q:q,
a:a,
cat:cat
});

document.getElementById("inputQ").value = "";
document.getElementById("inputA").value = "";

renderList();
renderCard();

}


/* SHOW ALL CARDS */

function renderList(){

const list =
document.getElementById("cardsList");

document.getElementById("listCount")
.innerText = `(${cards.length})`;

list.innerHTML = "";

cards.forEach((card,index)=>{

list.innerHTML += `

<div class="list-item">

<div class="list-q">
${card.q}
</div>

<div class="list-a">
${card.a}
</div>

</div>

`;

});

}

renderList();