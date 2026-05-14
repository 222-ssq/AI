
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("start-btn").addEventListener("click", startTest);
});

const questions = [
{
  q: "과제를 할 때 AI를 사용한다면 나는 보통 어떻게 활용하는가?",
  answers: [
    { text: "거의 사용하지 않는다", type: "A", score: 1 },
    { text: "간단한 검색이나 아이디어 참고만 한다", type: "A", score: 2 },
    { text: "초안 작성이나 자료 정리에 적극 활용한다.", type: "A", score: 3 },
    { text: "AI의 답을 분석하고 수정하며 효율적으로 활용한다", type: "A", score: 4 }
  ]
},

{
  q: "AI가 제공한 정보가 사실인지 확인해야 할 때 나는?",
  answers: [
    { text: "대부분 그대로 믿는다", type: "C", score: 1 },
    { text: "가끔 확인한다", type: "C", score: 2 },
    { text: "여러 자료를 찾아보고 비교하며 확인한다", type: "C", score: 3 },
    { text: "출처와 오류 가능성까지 검토한다", type: "C", score: 4 }
  ]
},

{
  q: "AI가 만든 결과물이 마음에 들지 않을 때 나는?",
  answers: [
    { text: "그냥 사용하거나 포기한다", type: "A", score: 1 },
    { text: "다시 한번 요청해 본다", type: "A", score: 2 },
    { text: "원하는 방향을 구체적으로 수정해서 요청한다", type: "A", score: 3 },
    { text: "문제점을 분석하고 더 정확한 프롬프트를 만든다", type: "A", score: 4 }
  ]
},

{
  q: "AI에게 원하는 결과를 얻기 위해 질문할 때 나는?",
  answers: [
    { text: "짧고 단순하게 질문한다", type: "A", score: 1 },
    { text: "여러 번 다시 질문한다", type: "A", score: 2 },
    { text: "구체적인 조건을 함께 입력한다", type: "A", score: 3 },
    { text: "목적과 상황까지 자세히 설명한다", type: "A", score: 4 }
  ]
},

{
  q: "새로운 AI 서비스가 나오면 나는?",
  answers: [
    { text: "관심이 없다", type: "A", score: 1 },
    { text: "주변에서 유명하면 사용해 본다", type: "A", score: 2 },
    { text: "직접 기능을 찾아보고 활용해 본다", type: "A", score: 3 },
    { text: "활용 방법과 장단점까지 분석한다", type: "A", score: 4 }
  ]
},

{
  q: "AI가 인간의 일자리에 미치는 영향에 대해 나는?",
  answers: [
    { text: "잘 모르겠다", type: "B", score: 1 },
    { text: "일부 직업만 영향을 받을 것 같다", type: "B", score: 2 },
    { text: "많은 직업이 변화할 것이라고 생각한다", type: "B", score: 3 },
    { text: "새로운 직업과 기술 역량이 중요해질 것이라 생각한다", type: "B", score: 4 }
  ]
},

{
  q: "AI가 만든 그림·글·영상에 대해 나는?",
  answers: [
    { text: "사람이 만든 것과 차이를 모르겠다", type: "B", score: 1 },
    { text: "어느 정도 구분할 수 있다", type: "B", score: 2 },
    { text: "AI 생성 여부를 의심하며 본다", type: "B", score: 3 },
    { text: "생성 방식과 저작권 문제까지 생각한다", type: "B", score: 4 }
  ]
},

{
  q: "학교나 일상에서 AI 활용이 늘어나는 것에 대해 나는?",
  answers: [
    { text: "불편하고 필요성을 못 느낀다", type: "B", score: 1 },
    { text: "있으면 편리한 정도라고 생각한다", type: "B", score: 2 },
    { text: "앞으로 꼭 필요한 기술이라고 생각한다", type: "B", score: 3 },
    { text: "적극적으로 배우고 활용해야 한다고 생각한다", type: "B", score: 4 }
  ]
},

{
  q: "AI가 잘못된 답을 줄 수도 있다는 사실에 대해 나는?",
  answers: [
    { text: "잘 몰랐다", type: "C", score: 1 },
    { text: "들어본 적은 있다", type: "C", score: 2 },
    { text: "실제로 경험해 본 적 있다", type: "C", score: 3 },
    { text: "오류 가능성을 고려하며 사용한다", type: "C", score: 4 }
  ]
},

{
  q: "내가 AI를 사용하는 가장 큰 이유는?",
  answers: [
    { text: "남들이 써서", type: "C", score: 1 },
    { text: "시간을 절약하기 위해", type: "C", score: 2 },
    { text: "더 좋은 결과를 만들기 위해", type: "C", score: 3 },
    { text: "문제 해결과 새로운 아이디어를 얻기 위해", type: "C", score: 4 }
  ]
},

{
  q: "AI 시대에 가장 중요하다고 생각하는 태도는?",
  answers: [
    { text: "AI를 최대한 사용하지 않는 것", type: "C", score: 1 },
    { text: "필요한 기능만 간단히 사용하는 것", type: "C", score: 2 },
    { text: "AI를 효율적으로 활용하는 것", type: "C", score: 3 },
    { text: "AI를 이해하고 비판적으로 활용하는 것", type: "C", score: 4 }
  ]
},

{
  q: "AI가 잘못된 답변을 할 수 있다는 사실에 대해 나는?",
  answers: [
    { text: "잘 모르겠다", type: "C", score: 1 },
    { text: "별로 큰 문제가 아니라고 생각한다", type: "C", score: 2 },
    { text: "기술을 더 개발해야 한다고 생각한다", type: "C", score: 3 },
    { text: "항상 오류 가능성을 고려해야 한다고 생각한다", type: "C", score: 4 }
  ]
}

];

let current = 0;
let total = 0;

let scores = { A:0, B:0, C:0 };

function startTest(){

  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("loading-screen").classList.remove("hidden");

  setTimeout(() => {
    document.getElementById("loading-screen").classList.add("hidden");
    document.getElementById("quiz-screen").classList.remove("hidden");
    showQuestion();
  }, 1200);

}

document.getElementById("start-btn").onclick = startTest;

function showQuestion(){

  if(current >= questions.length){
    showResult();
    return;
  }

  const q = questions[current];

  document.getElementById("progress").innerText =
    `${current+1} / ${questions.length}`;

  document.getElementById("question").innerText = q.q;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.answers.forEach(a => {

    const btn = document.createElement("button");

    btn.innerText = a.text;

    btn.onclick = () => {
      total += a.score;
      scores[a.type] += a.score;
      current++;
      showQuestion();
    };

    answersDiv.appendChild(btn);

  });

}

function showResult(){

  document.getElementById("quiz-screen").classList.add("hidden");
  document.getElementById("result-screen").classList.remove("hidden");

  let grade = "";

  if(total >= 44) grade = "MASTER";
  else if(total >= 38) grade = "S";
  else if(total >= 33) grade = "A";
  else if(total >= 28) grade = "B";
  else if(total >= 23) grade = "C";
  else if(total >= 19) grade = "D";
  else grade = "F";

  document.getElementById("result-screen").innerHTML = `
    <div class="container">
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
