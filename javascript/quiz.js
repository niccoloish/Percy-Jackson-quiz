const quizData = [
    {
      question: "Wer ist Percys göttliches Elternteil?",
      options: ["Zeus", "Poseidon", "Hades", "Apollo"],
      answer: "Poseidon"
    },
    {
      question: "Wie heißt Percys Schwert?",
      options: ["Rückenbeißerr", "Katoptris", "Anaklusmos", "Todesbringer"],
      answer: "Anaklusmos"
    },
    {
        question: "Zu welcher Hütte gehört Annabeth in Camp Half-Blood?",
        options: ["Hütte 3", "Hütte 6", "Hütte 11", "Hütte 1"],
        answer: "Hütte 6"
      },
      {
        question: "Was für ein Wesen ist Grover Underwood?",
        options: ["Faun", "Zentaur", "Satyr", "Zyklop"],
        answer: "Satyr"
      },
      {
        question: "In welcher Stadt lebt Percy zu Beginn von 'Diebe im Olymp'?",
        options: ["Los Angeles", "Boston", "New York City", "San Francisco"],
        answer: "New York City"
      },
      {
        question: "Welcher magische Gegenstand wurde in 'Diebe im Olymp' gestohlen?",
        options: ["Das Goldene Vlies", "Der Helm der Dunkelheit", "Der Herrscherblitz", "Pandoras Büchse"],
        answer: "Der Herrscherblitz"
      },
      {
        question: "Wer entpuppt sich am Ende von 'Diebe im Olymp' als Antagonist?",
        options: ["Clarisse", "Hades", "Luke", "Zeus"],
        answer: "Luke"
      },
      {
        question: "Was essen und trinken Halbgötter zur Heilung?",
        options: ["Pizza und Saft", "Nektar und Ambrosia", "Wasser und Oliven", "Wein und Brot"],
        answer: "Nektar und Ambroisa"
      },
      {
        question: "Wie heißt Percys Zyklopen-Halbbruder?",
        options: ["Tyson", "Leo", "Polyphem", "Frank"],
        answer: "Tyson"
      },
      {
        question: "Welches Monster  gibt sich in 'Diebe im Olypm' als Percys Mathelehrerin aus?",
        options: ["Hydra", "Empousa", "Furie", "Gorgone"],
        answer: "Furie"
      },
      {
        question: "Welcher Gott fährt einen Sonnenwagen?",
        options: ["Artemis", "Hermes", "Ares", "Apollo"],
        answer: "Apollo"
      },
      {
        question: "Wer war das Orakel vor Rachel Elizabeth Dare?",
        options: ["Eine Mumie", "Medusa", "Thalia", "Ein Geist"],
        answer: "Eine Mumie"
      },
      {
          question: "Welche Prophezeiung steht über Percy während der Serie?",
          options: ["die Prophezeiung des verlorenen Helden", "Die Große Prophezeiung", "Das Orakelspiel", "Der Fluch des Achilleus"],
          answer: "Die Große Prophezeiung"
        },
        {
          question: "Was für ein Wesen ist Mrs. O'Leary?",
          options: ["Höllenhund", "Chimäre", "Greif", "Pegasus"],
          answer: "Höllenhund"
        },
        {
          question: "Welches Gebäude in Manhattan ist heimlich der Eingang zum Olymp?",
          options: ["Chrysler Building", "Empire State Building", "One World Trade Center", "Rockefeller Center"],
          answer: "Empire State Building"
        },
        {
          question: "Wie heißt das Labyrinth, das in 'Die Schlacht um das Labyrinth' eine zentrale Rolle spielt?",
          options: ["Tartarus", "Morpheus' Labyrinth", "Daidalos' Labyrinth", "Kronos' Labyrinth"],
          answer: "Daidalos' Labyrinth"
        },
        {
          question: "Wer ist der Designer des Labyrinths?",
          options: ["Chiron", "Ikarus", "Daidalos", "Hermes"],
          answer: "Daidalos"
        },
        {
          question: "Welches Geschenk  erhält Percy an seinem 15. Geburtstag von Poseidon?",
          options: ["Ein Hippokamp", "Ein Dreizack", "Eine Sanddollar-Münze", "Eine Muschelkette"],
          answer: "Eine Sanddollar-Münze"
        },
        {
          question: "Wie heißt das Schild, das Percy von Tyson bekommt?",
          options: ["Ägis", "Schild des Olymps", "Schild von Daidalos", "Imperium"],
          answer: "Ägis"
        },
        {
          question: "Welcher Titan nutzt Lukes Körper als Wirt?",
          options: ["Hyperion", "Atlas", "Kronos", "Okeanos"],
          answer: "Kronos"
        },
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${quizData.length}</p>
    `;
  }
  
  showQuestion();