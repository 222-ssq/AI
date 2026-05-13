let questions = [

/* ================= A축 ================= */

{
  q: "과제를 할 때 AI를 사용한다면 나는 보통 어떻게 활용하는가?",
  answers: [
    { text: "거의 사용하지 않는다", score: 1, type: "A" },
    { text: "간단한 검색이나 아이디어 참고만 한다", score: 2, type: "A" },
    { text: "초안 작성이나 자료 정리에 적극 활용한다", score: 3, type: "A" },
    { text: "AI의 답을 분석하고 수정하며 효율적으로 활용한다", score: 4, type: "A" }
  ]
},

{
  q: "AI에게 원하는 답변을 얻지 못했을 때 나는?",
  answers: [
    { text: "사용을 그만둔다", score: 1, type: "A" },
    { text: "같은 질문을 반복한다", score: 2, type: "A" },
    { text: "질문 내용을 조금 수정한다", score: 3, type: "A" },
    { text: "조건·예시·목적을 추가해 더 구체적으로 요청한다", score: 4, type: "A" }
  ]
},

{
  q: "AI에게 원하는 결과를 얻기 위해 질문할 때 나는?",
  answers: [
    { text: "짧고 단순한 키워드로 질문한다", score: 1, type: "A" },
    { text: "여러 번 수정해서 질문한다", score: 2, type: "A" },
    { text: "구체적인 조건을 입력하여 질문한다", score: 3, type: "A" },
    { text: "목적과 상황까지 자세히 설명하고 질문한다", score: 4, type: "A" }
  ]
},

{
  q: "새로운 AI 서비스가 나오면 나는?",
  answers: [
    { text: "관심이 없다", score: 1, type: "A" },
    { text: "유행하면 한 번 사용해 본다", score: 2, type: "A" },
    { text: "기능을 찾아보고 사용해본다", score: 3, type: "A" },
    { text: "여러 서비스의 특징을 비교하며 상황에 맞게 활용한다", score: 4, type: "A" }
  ]
},

/* ================= B축 ================= */

{
  q: "내가 AI를 사용하는 가장 큰 이유는?",
  answers: [
    { text: "남들이 써서", score: 1, type: "B" },
    { text: "시간을 절약하기 위해", score: 2, type: "B" },
    { text: "문제를 해결하기 위해", score: 3, type: "B" },
    { text: "활용을 통해 더 좋은 결과를 만들기 위해", score: 4, type: "B" }
  ]
},

{
  q: "AI가 미래 사회에 미치는 영향에 대해 나는?",
  answers: [
    { text: "큰 변화는 없을 것 같다", score: 1, type: "B" },
    { text: "일부 분야만 변할 것 같다", score: 2, type: "B" },
    { text: "많은 직업과 생활 방식이 변할 것 같다", score: 3, type: "B" },
    { text: "사회 구조와 인간의 역할 자체가 변화할 것이라 생각한다", score: 4, type: "B" }
  ]
},

{
  q: "학교나 회사에서 AI 활용이 늘어나는 것에 대해 나는?",
  answers: [
    { text: "굳이 필요 없다고 생각한다", score: 1, type: "B" },
    { text: "있으면 편리한 정도라고 생각한다", score: 2, type: "B" },
    { text: "앞으로 필수적일 기술이라고 생각한다", score: 3, type: "B" },
    { text: "AI 활용 능력이 경쟁력이 될 것이라 생각한다", score: 4, type: "B" }
  ]
},

{
  q: "AI 기술 발전에 대한 나의 생각은?",
  answers: [
    { text: "별로 관심 없다", score: 1, type: "B" },
    { text: "생활을 조금 편하게 해주는 기술이라고 생각한다", score: 2, type: "B" },
    { text: "사회를 크게 변화시킬 기술이라고 생각한다", score: 3, type: "B" },
    { text: "인간의 삶과 가치관까지 영향을 줄 핵심 기술이라고 생각한다", score: 4, type: "B" }
  ]
},

/* ================= C축 ================= */

{
  q: "AI 시대에 가장 중요하다고 생각하는 태도는?",
  answers: [
    { text: "AI를 최대한 사용하지 않는 것", score: 1, type: "C" },
    { text: "필요한 기능만 간단히 사용하는 것", score: 2, type: "C" },
    { text: "AI를 효율적으로 활용하는 것", score: 3, type: "C" },
    { text: "AI를 이해하고 비판적으로 활용하는 것", score: 4, type: "C" }
  ]
},

{
  q: "AI가 잘못된 답변을 할 수 있다는 사실에 대해 나는?",
  answers: [
    { text: "관심없다", score: 1, type: "C" },
    { text: "별로 큰 문제가 아니라고 생각한다", score: 2, type: "C" },
    { text: "기술을 더 개발하여 오류를 최소화해야 한다고 생각한다", score: 3, type: "C" },
    { text: "항상 AI의 오류 가능성을 고려하며 사용해야 한다고 생각한다", score: 4, type: "C" }
  ]
},

{
  q: "AI가 만든 그림·글·영상에 대해 나는?",
  answers: [
    { text: "사람이 만든 것과 구분이 어려워도 별 문제 없다고 생각한다", score: 1, type: "C" },
    { text: "사람이 만든 것과 얼마든지 구분 가능하다고 생각한다", score: 2, type: "C" },
    { text: "모든 작품마다 AI 생성 여부를 의심해야 한다고 생각한다", score: 3, type: "C" },
    { text: "생성 방식과 관련된 저작권·윤리 문제까지 해결해야 한다고 생각한다", score: 4, type: "C" }
  ]
},

{
  q: "AI를 사용할 때 가장 필요한 태도는 무엇이라고 생각하는가?",
  answers: [
    { text: "무조건 믿고 사용하는 것", score: 1, type: "C" },
    { text: "편리만을 위해 사용하는 것", score: 2, type: "C" },
    { text: "필요한 부분만 활용하는 것", score: 3, type: "C" },
    { text: "정보를 비판적으로 판단하며 사용하는 것", score: 4, type: "C" }
  ]
}

];

let scores = {
  A: 0,
  B: 0,
  C: 0
};

let totalScore = 0;
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

/* 질문 표시 */
function showQuestion() {

  if (current >= questions.length) {
    showResult();
    return;
  }

  const q = questions[current];

  document.getElementById("progress").innerText =
    `${current + 1} / ${questions.length}`;

  document.getElementById("question").innerText = q.q;

  const answersDiv = document.getElementById("answers");

  answersDiv.innerHTML = "";

  q.answers.forEach(answer => {

    const btn = document.createElement("button");

    btn.innerText = answer.text;

    btn.onclick = () => selectAnswer(answer);

    answersDiv.appendChild(btn);

  });

}

/* 답변 선택 */
function selectAnswer(answer) {

  scores[answer.type] += answer.score;

  totalScore += answer.score;

  current++;

  showQuestion();

}

/* 결과 */
function showResult() {

  let grade = "";

  if (totalScore >= 44) {
    grade = "MASTER";
  }
  else if (totalScore >= 38) {
    grade = "S";
  }
  else if (totalScore >= 33) {
    grade = "A";
  }
  else if (totalScore >= 28) {
    grade = "B";
  }
  else if (totalScore >= 23) {
    grade = "C";
  }
  else if (totalScore >= 19) {
    grade = "D";
  }
  else {
    grade = "F";
  }

  document.body.innerHTML = `

    <div class="screen">

      <h1>AI 시대 생존 등급</h1>

      <h2>${grade}</h2>

      <p>총점 : ${totalScore}점</p>

      <hr>

      <h3>세부 능력 평가</h3>

      <p>A축 (AI 활용 능숙도) : ${scores.A} / 16</p>

      <p>B축 (AI 사회 이해도) : ${scores.B} / 16</p>

      <p>C축 (AI 비판적 사고) : ${scores.C} / 16</p>

      <button onclick="location.reload()">
        다시 테스트하기
      </button>

    </div>

  `;
}
