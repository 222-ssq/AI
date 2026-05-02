const questions = [
  { q: "질문1", answers: [{ text: "1-1", type: "A" }, { text: "1-2", type: "B" }] },
  { q: "질문2", answers: [{ text: "2-1", type: "A" }, { text: "2-2", type: "B" }] },
  { q: "질문3", answers: [{ text: "3-1", type: "A" }, { text: "3-2", type: "B" }] },
  { q: "질문4", answers: [{ text: "4-1", type: "A" }, { text: "4-2", type: "B" }] },
  { q: "질문5", answers: [{ text: "5-1", type: "C" }, { text: "5-2", type: "D" }] },
  { q: "질문6", answers: [{ text: "6-1", type: "C" }, { text: "6-2", type: "D" }] },
  { q: "질문7", answers: [{ text: "7-1", type: "C" }, { text: "7-2", type: "D" }] },
  { q: "질문8", answers: [{ text: "8-1", type: "C" }, { text: "8-2", type: "D" }] },
  { q: "질문9", answers: [{ text: "9-1", type: "E" }, { text: "9-2", type: "F" }] },
  { q: "질문10", answers: [{ text: "10-1", type: "E" }, { text: "10-2", type: "F" }] },
  { q: "질문11", answers: [{ text: "11-1", type: "E" }, { text: "11-2", type: "F" }] },
  { q: "질문12", answers: [{ text: "12-1", type: "E" }, { text: "12-2", type: "F" }] }
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
