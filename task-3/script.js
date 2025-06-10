// 1. Quiz Functionality
const quizData = [
    {
      question: "What does HTML stand for?",
      options: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
      answer: "HyperText Markup Language"
    },
    {
      question: "Which language is used for styling web pages?",
      options: ["HTML", "JQuery", "CSS"],
      answer: "CSS"
    },
    {
      question: "Which is not a JavaScript framework?",
      options: ["Python", "React", "Angular"],
      answer: "Python"
    }
  ];
  
  let currentQuestion = 0;
  
  function loadNextQuestion() {
    if (currentQuestion >= quizData.length) {
      document.getElementById("question").textContent = "Quiz Completed!";
      document.getElementById("options").innerHTML = "";
      document.getElementById("nextBtn").style.display = "none";
      return;
    }
  
    const q = quizData[currentQuestion];
    document.getElementById("question").textContent = q.question;
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
  
    q.options.forEach((opt) => {
      const btn = document.createElement("button");
      btn.textContent = opt;
      btn.onclick = () => {
        if (opt === q.answer) {
          alert("Correct!");
        } else {
          alert("Wrong!");
        }
      };
      optionsDiv.appendChild(btn);
    });
  
    currentQuestion++;
  }
  
  window.onload = loadNextQuestion;
  
  // 2. Fetch Data from API (Joke API)
  function fetchJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then(res => res.json())
      .then(data => {
        const joke = `${data.setup} — ${data.punchline}`;
        document.getElementById("joke").textContent = joke;
      })
      .catch(() => {
        document.getElementById("joke").textContent = "Failed to fetch joke.";
      });
  }
  