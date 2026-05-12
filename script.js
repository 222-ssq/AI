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
  q: "AI가 제공한 정보가 사실인지 확인해야 할 때 나는?",
  answers: [
    { text: "대부분 그대로 믿는다", scores: { A: 2 } },
    { text: "가끔 확인한다", scores: { B: 2 } },
    { text: "여러 자료를 찾아보고 비교하며 확인한다", scores: { C: 2 } },
    { text: "출처와 오류 가능성까지 검토한다", scores: { D: 2 } }
  ]
},

{
  q: "AI가 만든 결과물이 마음에 들지 않을 때 나는?",
  answers: [
    { text: "포기한다", scores: { A: 2 } },
    { text: "그냥 그대로 사용한다", scores: { B: 2 } },
    { text: "원하는 방향을 구체적으로 수정해서 요청한다", scores: { C: 2 } },
    { text: "문제점을 파악하여 더 정확한 프롬프트를 만든다", scores: { D: 2 } }
  ]
},

{
  q: "AI에게 원하는 결과를 얻기 위해 질문할 때 나는?",
  answers: [
    { text: "짧고 단순한 키워드만 던진다", scores: { A: 2 } },
    { text: "구체적인 조건을 입력한다", scores: { B: 2, C: 2 } },
    { text: "질문 목적과 상황을 자세히 설명한다", scores: { D: 2 } }
  ]
},
  
{
  q: "AI가 잘못된 답을 줄 수도 있다는 사실에 대해 나는?",
  answers: [
    { text: "별 생각 없다", scores: { A: 2 } },
    { text: "실제로 경험해 본 적 있다", scores: { B: 2 , C: 2 } },
    { text: "오류 가능성을 고려하며 사용한다", scores: { D: 2 } }
  ]
},
  
{
  q: "새로운 AI 서비스가 나오면 나는?",
  answers: [
    { text: "딱히 관심이 없다", scores: { A: 2 } },
    { text: "많이 유명해지면 사용해 본다", scores: { B: 2 } },
    { text: "직접 기능을 찾아보고 활용해 본다", scores: { C: 2 } },
    { text: "다른 서비스와 비교하여 장단점을 파악한다", scores: { D: 2 } }
  ]
},

{
  q: "학교나 일상에서 AI 활용이 늘어나는 것에 대해 나는?",
  answers: [
    { text: "필요성을 못 느낀다", scores: { A: 2 } },
    { text: "있으면 편리한 정도라고 생각한다", scores: { B: 2 } },
    { text: "앞으로 꼭 필요한 기술이라고 생각한다", scores: { C: 2 } },
    { text: "적극적으로 배우고 활용해야 한다고 생각한다", scores: { D: 2 } }
  ]
},

  {
  q: "내가 AI를 사용하는 가장 큰 이유는?",
  answers: [
    { text: "남들이 써서", scores: { A: 2 } },
    { text: "시간을 절약하기 위해", scores: { B: 2 } },
    { text: "더 좋은 결과를 만들기 위해", scores: { C: 2 } },
    { text: "문제 해결과 새로운 아이디어를 얻기 위해", scores: { D: 2 } }
  ]
},
  
{
  q: "AI가 인간의 일자리에 미치는 영향에 대해 나는?",
  answers: [
    { text: "잘 모르겠다", scores: { E: 2 } },
    { text: "일부 직업만 영향을 받을 것 같다", scores: { E: 2 } },
    { text: "많은 직업이 변화할 것이라고 생각한다", scores: { F: 2 } },
    { text: "새로운 직업과 기술 역량이 중요해질 것이라 생각한다", scores: { F: 2 } }
  ]
},

{
  q: "AI 시대에 가장 중요하다고 생각하는 태도는?",
  answers: [
    { text: "AI사용을 지양하는 것", scores: { E: 2 } },
    { text: "필요한 기능만 단순히 사용하는 것", scores: { E: 2 } },
    { text: "AI를 효율적으로 활용하는 것", scores: { F: 2 } }
    { text: "AI를 이해하고 비판적으로 활용하는 것", scores: { F: 2 } }
  ]
}

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
