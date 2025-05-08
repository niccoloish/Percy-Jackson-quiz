const quizData = [
    {
        question: "Who is Percy's godly parent?",
        options: ["Zeus", "Poseidon", "Hades", "Apollo"],
        answer: "Poseidon"
      },
      {
        question: "What is the name of Percy's sword?",
        options: ["Backbiter", "Katoptris", "Riptide", "Deathbringer"],
        answer: "Riptide"
      },
      {
        question: "Which cabin does Annabeth belong to at Camp Half-Blood?",
        options: ["Cabin 3", "Cabin 6", "Cabin 11", "Cabin 1"],
        answer: "Cabin 6"
      },
      {
        question: "What kind of creature is Grover Underwood?",
        options: ["Faun", "Centaur", "Satyr", "Cyclops"],
        answer: "Satyr"
      },
      {
        question: "In which city does Percy live at the beginning of 'The Lightning Thief'?",
        options: ["Los Angeles", "Boston", "New York City", "San Francisco"],
        answer: "New York City"
      },
      {
        question: "What magical item was stolen in 'The Lightning Thief'?",
        options: ["The Golden Fleece", "The Helm of Darkness", "The Lighning Bolt", "Pandora's Box"],
        answer: "The Lighning Bolt"
      },
      {
        question: "Who is revealed to be the antagonist at the end of 'The Lightning Thief'?",
        options: ["Clarisse", "Hades", "Luke", "Zeus"],
        answer: "Luke"
      },
      {
        question: "What do demigods eat and drink to heal?",
        options: ["Pizza and juice", "Nectar and ambrosia", "Water and olives", "Wine and bread"],
        answer: "Nectar and ambrosia"
      },
      {
        question: "What is the name of Percy's Cyclops half-brother?",
        options: ["Tyson", "Leo", "Polyphemus", "Frank"],
        answer: "Tyson"
      },
      {
        question: "Which monster poses as Percy's math teacher in 'The Lightning Thief'?",
        options: ["Hydra", "Empousa", "Fury", "Gorgon"],
        answer: "Fury"
      },
      {
        question: "Which god drives a sun chariot?",
        options: ["Artemis", "Hermes", "Ares", "Apollo"],
        answer: "Apollo"
      },
      {
        question: "Who was the Oracle before Rachel Elizabeth Dare?",
        options: ["A mummy", "Medusa", "Thalia", "A ghost"],
        answer: "A mummy"
      },
      {
        question: "What prophecy is tied to Percy throughout the series?",
        options: ["The Prophecy of the Lost Hero", "The Great Prophecy", "The Oracle Game", "The Curse of Achilles"],
        answer: "The Great Prophecy"
      },
      {
        question: "What kind of creature is Mrs. O'Leary?",
        options: ["Hellhound", "Chimera", "Griffin", "Pegasus"],
        answer: "Hellhound"
      },
      {
        question: "Which building in Manhattan secretly contains the entrance to Olympus?",
        options: ["Chrysler Building", "Empire State Building", "One World Trade Center", "Rockefeller Center"],
        answer: "Empire State Building"
      },
      {
        question: "What is the name of the labyrinth featured in 'The Battle of the Labyrinth'?",
        options: ["Tartarus", "Morpheus' Labyrinth", "Daedalus' Labyrinth", "Kronos' Labyrinth"],
        answer: "Daedalus' Labyrinth"
      },
      {
        question: "Who is the designer of the Labyrinth?",
        options: ["Chiron", "Icarus", "Daedalus", "Hermes"],
        answer: "Daedalus"
      },
      {
        question: "What gift does Percy receive from Poseidon on his 15th birthday?",
        options: ["A hippocampus", "A trident", "A sand dollar", "A seashell necklace"],
        answer: "A sand dollar"
      },
      {
        question: "What is the name of the shield Percy gets from Tyson?",
        options: ["Aegis", "Shield of Olympus", "Daedalus' Shield", "Imperium"],
        answer: "Aegis"
      },
      {
        question: "Which Titan uses Luke's body as a host?",
        options: ["Hyperion", "Atlas", "Kronos", "Oceanus"],
        answer: "Kronos"
      }
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