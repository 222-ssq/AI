const questions = [
  { q: "질문1", answers: [{ text: "A", type: "A" }, { text: "B", type: "B" }] },
  { q: "질문2", answers: [{ text: "A", type: "A" }, { text: "B", type: "B" }] },
  { q: "질문3", answers: [{ text: "A", type: "A" }, { text: "B", type: "B" }] },
  { q: "질문4", answers: [{ text: "A", type: "A" }, { text: "B", type: "B" }] },
  { q: "질문5", answers: [{ text: "C", type: "C" }, { text: "D", type: "D" }] },
  { q: "질문6", answers: [{ text: "C", type: "C" }, { text: "D", type: "D" }] },
  { q: "질문7", answers: [{ text: "C", type: "C" }, { text: "D", type: "D" }] },
  { q: "질문8", answers: [{ text: "C", type: "C" }, { text: "D", type: "D" }] },
  { q: "질문9", answers: [{ text: "E", type: "E" }, { text: "F", type: "F" }] },
  { q: "질문10", answers: [{ text: "E", type: "E" }, { text: "F", type: "F" }] },
  { q: "질문11", answers: [{ text: "E", type: "E" }, { text: "F", type: "F" }] },
  { q: "질문12", answers: [{ text: "E", type: "E" }, { text: "F", type: "F" }] }
];

let scores = { A:0, B:0, C:0, D:0, E:0, F:0 };
let current = 0;

/* 시작 */
function startTest() {
  document.getElementById("start-screen").classList.add("hidden");

  document.getElementById("loading-screen").classList.remove("hidden");

  setTimeout(() => {
    document.getElementById("loading-screen").classList.add("hidden");
    document.getElementById("quiz-screen").classList.remove("hidden");
    showQuestion();
  }, 2000);
}

/* 질문 */
function showQuestion() {
  const q = questions[current];
  document.getElementById("question").innerText = q.q;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.answers.forEach(a => {
    const btn = document.createElement("button");
    btn.innerText = a.text;
    btn.onclick = () => answer(a.type);
    answersDiv.appendChild(btn);
  });
}

/* 답변 */
function answer(type) {
  scores[type]++;
  current++;

  if (current < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

/* 결과 */
function showResult() {
  const result = [];

  result.push(scores.A >= scores.B ? "A" : "B");
  result.push(scores.C >= scores.D ? "C" : "D");
  result.push(scores.E >= scores.F ? "E" : "F");

  document.body.innerHTML = `
    <div class="screen">
      <h1>결과: ${result.join("")}</h1>
    </div>
  `;
}
