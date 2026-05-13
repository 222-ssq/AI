let questions = [
{
  q: "과제를 할 때 AI를 사용한다면 나는 보통 어떻게 활용하는가?",
  answers: [
    { text: "거의 사용하지 않는다", score: 1, type: "A" },
    { text: "간단한 검색이나 아이디어 참고만 한다", score: 2, type: "A" },
    { text: "초안 작성이나 자료 정리에 적극 활용한다.", score: 3, type: "A" },
    { text: "AI의 답을 분석하고 수정하며 효율적으로 활용한다", score: 4, type: "A" }
  ]
},

{
  q: "AI가 제공한 정보가 사실인지 확인해야 할 때 나는?",
  answers: [
    { text: "대부분 그대로 믿는다", score: 1, type: "A" },
    { text: "가끔 확인한다", score: 2, type: "A" },
    { text: "여러 자료를 찾아보고 비교하며 확인한다", score: 3, type: "A" },
    { text: "출처와 오류 가능성까지 검토한다", score: 4, type: "A" }
  ]
},

{
  q: "AI가 만든 결과물이 마음에 들지 않을 때 나는?",
  answers: [
    { text: "그냥 사용하거나 포기한다", score: 1, type: "A" },
    { text: "다시 한번 요청해 본다", score: 2, type: "A" },
    { text: "원하는 방향을 구체적으로 수정해서 요청한다", score: 3, type: "A" },
    { text: "문제점을 분석하고 더 정확한 프롬프트를 만든다", score: 4, type: "A" }
  ]
},

{
  q: "AI에게 원하는 결과를 얻기 위해 질문할 때 나는?",
  answers: [
    { text: "짧고 단순하게 질문한다", score: 1, type: "A" },
    { text: "여러 번 다시 질문한다", score: 2, type: "A" },
    { text: "구체적인 조건을 함께 입력한다", score: 3, type: "A" },
    { text: "목적과 상황까지 자세히 설명한다", score: 4, type: "A" }
  ]
},

{
  q: "새로운 AI 서비스가 나오면 나는?",
  answers: [
    { text: "관심이 없다", score: 1, type: "B" },
    { text: "주변에서 유명하면 사용해 본다", score: 2, type: "B" },
    { text: "직접 기능을 찾아보고 활용해 본다", score: 3, type: "B" },
    { text: "활용 방법과 장단점까지 분석한다", score: 4, type: "B" }
  ]
},

{
  q: "AI가 인간의 일자리에 미치는 영향에 대해 나는?",
  answers: [
    { text: "잘 모르겠다", score: 1, type: "B" },
    { text: "일부 직업만 영향을 받을 것 같다", score: 2, type: "B" },
    { text: "많은 직업이 변화할 것이라고 생각한다", score: 3, type: "B" },
    { text: "새로운 직업과 기술 역량이 중요해질 것이라 생각한다", score: 4, type: "B" }
  ]
},

{
  q: "AI가 만든 그림·글·영상에 대해 나는?",
  answers: [
    { text: "사람과 차이를 모르겠다", score: 1, type: "C" },
    { text: "어느 정도 구분할 수 있다", score: 2, type: "C" },
    { text: "AI 생성 여부를 의심하며 본다", score: 3, type: "C" },
    { text: "생성 방식과 저작권 문제까지 생각한다", score: 4, type: "C" }
  ]
},

{
  q: "AI가 잘못된 답을 줄 수도 있다는 사실에 대해 나는?",
  answers: [
    { text: "잘 몰랐다", score: 1, type: "C" },
    { text: "들어본 적은 있다", score: 2, type: "C" },
    { text: "실제로 경험해 본 적 있다", score: 3, type: "C" },
    { text: "오류 가능성을 고려하며 사용한다", score: 4, type: "C" }
  ]
},

{
  q: "AI가 만든 콘텐츠에 대해 나는?",
  answers: [
    { text: "사람과 구분이 어렵다", score: 1, type: "C" },
    { text: "어느 정도 구분 가능하다", score: 2, type: "C" },
    { text: "AI 생성 여부를 의심한다", score: 3, type: "C" },
    { text: "저작권·윤리까지 생각한다", score: 4, type: "C" }
  ]
},

{
  q: "AI 시대에 가장 중요하다고 생각하는 태도는?",
  answers: [
    { text: "AI를 최대한 사용하지 않는 것", score: 1, type: "C" },
    { text: "필요한 기능만 사용하는 것", score: 2, type: "C" },
    { text: "AI를 효율적으로 활용하는 것", score: 3, type: "C" },
    { text: "AI를 이해하고 비판적으로 활용하는 것", score: 4, type: "C" }
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

let current = 0;
let scores = { A:0, B:0, C:0 };
let total = 0;

/* 시작 */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("start-btn").addEventListener("click", startTest);
});

function startTest() {
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("loading-screen").classList.remove("hidden");

  setTimeout(() => {
    document.getElementById("loading-screen").classList.add("hidden");
    document.getElementById("quiz-screen").classList.remove("hidden");
    showQuestion();
  }, 1200);
}

function showQuestion() {

  if (current >= questions.length) {
    showResult();
    return;
  }

  const q = questions[current];

  document.getElementById("progress").innerText =
    `${current+1} / ${questions.length}`;

  document.getElementById("question").innerText = q.q;

  const box = document.getElementById("answers");
  box.innerHTML = "";

  q.answers.forEach(a => {
    const btn = document.createElement("button");

    btn.innerText = a.text;

    btn.onclick = () => {
      scores[a.type] += a.score;
      total += a.score;
      current++;
      showQuestion();
    };

    box.appendChild(btn);
  });
}

function showResult() {

  let grade = "";

  if (total >= 44) grade = "MASTER";
  else if (total >= 38) grade = "S";
  else if (total >= 33) grade = "A";
  else if (total >= 28) grade = "B";
  else if (total >= 23) grade = "C";
  else if (total >= 19) grade = "D";
  else grade = "F";

  document.body.innerHTML = `
    <div class="screen">
      <h1>결과</h1>
      <h2>${grade}</h2>
      <p>총점: ${total}</p>
      <hr>
      <p>A: ${scores.A}</p>
      <p>B: ${scores.B}</p>
      <p>C: ${scores.C}</p>
      <button onclick="location.reload()">다시하기</button>
    </div>
  `;
}
