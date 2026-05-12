
let questions = [

{
  q: "과제를 할 때 AI를 사용한다면 나는 보통 어떻게 활용하는가?",
  answers: [
    { text: "거의 사용하지 않는다", scores: { A: 2 } },
    { text: "간단한 검색이나 아이디어 참고만 한다", scores: { B: 2 } },
    { text: "초안 작성이나 자료 정리에 적극 활용한다", scores: { C: 2 } },
    { text: "AI의 답을 분석하고 수정하며 효율적으로 활용한다", scores: { D: 2 } }
  ]
},

{
  q: "AI 정보의 정확성을 확인할 때 나는?",
  answers: [
    { text: "대부분 그대로 믿는다", scores: { A: 2 } },
    { text: "가끔 확인한다", scores: { B: 2 } },
    { text: "여러 자료를 비교한다", scores: { C: 2 } },
    { text: "출처까지 검토한다", scores: { D: 2 } }
  ]
},

{
  q: "AI 결과가 마음에 들지 않을 때 나는?",
  answers: [
    { text: "그냥 사용하거나 포기한다", scores: { A: 2 } },
    { text: "한 번 더 요청한다", scores: { B: 2 } },
    { text: "구체적으로 수정 요청한다", scores: { C: 2 } },
    { text: "문제를 분석해 프롬프트를 개선한다", scores: { D: 2 } }
  ]
},

{
  q: "AI 질문 방식은?",
  answers: [
    { text: "짧게 질문한다", scores: { A: 2 } },
    { text: "여러 번 수정해서 질문한다", scores: { B: 2 } },
    { text: "조건을 자세히 넣는다", scores: { C: 2 } },
    { text: "상황과 목적까지 설명한다", scores: { D: 2 } }
  ]
},

{
  q: "AI를 사용하는 이유는?",
  answers: [
    { text: "남들이 써서", scores: { A: 2 } },
    { text: "시간 절약", scores: { B: 2 } },
    { text: "결과 개선", scores: { C: 2 } },
    { text: "문제 해결과 아이디어", scores: { D: 2 } }
  ]
}

];

let scores = { A:0, B:0, C:0, D:0 };
let current = 0;

/* 시작 */
function startTest() {
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("loading-screen").classList.remove("hidden");

  setTimeout(() => {
    document.getElementById("loading-screen").classList.add("hidden");
    document.getElementById("quiz-screen").classList.remove("hidden");
    showQuestion();
  }, 1500);
}

/* 질문 */
function showQuestion() {

  if (current >= questions.length) {
    showResult();
    return;
  }

  const q = questions[current];
  document.getElementById("question").innerText = q.q;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.answers.forEach(a => {
    const btn = document.createElement("button");
    btn.innerText = a.text;

    btn.onclick = () => answer(a.scores);

    answersDiv.appendChild(btn);
  });
}

/* 답변 */
function answer(answerScores) {

  for (let key in answerScores) {
    scores[key] += answerScores[key];
  }

  current++;

  showQuestion();
}

/* 결과 (축별 점수 공개 + 유형 판단) */
function showResult() {

  let total = scores.A + scores.B + scores.C + scores.D;

  let level = "";

  if (total <= 6) {
    level = "AI 입문자";
  } else if (total <= 10) {
    level = "AI 초급 활용자";
  } else if (total <= 14) {
    level = "AI 중급 활용자";
  } else {
    level = "AI 전략적 활용자";
  }

  document.body.innerHTML = `
    <div class="screen">

      <h1>결과: ${level}</h1>

      <h3>📊 축별 점수</h3>

      <p>A (기본 의존형): ${scores.A}</p>
      <p>B (초보 활용형): ${scores.B}</p>
      <p>C (실전 활용형): ${scores.C}</p>
      <p>D (전략 활용형): ${scores.D}</p>

      <hr>

      <p>총점: ${total}</p>

    </div>
  `;
}
