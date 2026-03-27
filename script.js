const lessons = [
  {
    id: 1,
    level: "Beginner",
    title: "Python Basics and print()",
    summary: "Start with Python syntax, print output, and simple statements.",
    objectives: ["Understand Python", "Use print()", "Run first code"],
    content: `
      <p>Python is one of the easiest programming languages to learn. It is readable, powerful, and used in automation, web development, AI, and data science.</p>
      <p>Your first program often uses <strong>print()</strong> to display output.</p>
      <ul>
        <li><strong>print()</strong> shows text or values</li>
        <li>Strings use quotes</li>
        <li>Python is case-sensitive</li>
      </ul>
    `,
    code: `print("Welcome to Youooo Python Academy!")
print("This is your first Python program.")`,
    quiz: {
      question: "What does print() do in Python?",
      options: ["Creates a loop", "Displays output", "Imports a file", "Deletes variables"],
      answer: 1,
      explanation: "print() displays text or values in the output."
    }
  },
  {
    id: 2,
    level: "Beginner",
    title: "Variables and Data Types",
    summary: "Store information in variables.",
    objectives: ["Create variables", "Use strings and numbers", "Understand assignment"],
    content: `
      <p>Variables store data. Python creates variables when you assign values using the equals sign.</p>
      <ul>
        <li>name = "Ahmed"</li>
        <li>age = 30</li>
        <li>price = 19.99</li>
      </ul>
    `,
    code: `name = "Ahmed"
age = 30
price = 19.99

print(name)
print(age)
print(price)`,
    quiz: {
      question: "Which line correctly creates a Python variable?",
      options: ["var name = 'Ali'", "name = 'Ali'", "string name = 'Ali'", "name := 'Ali'"],
      answer: 1,
      explanation: "Python uses = for assignment."
    }
  },
  {
    id: 3,
    level: "Beginner",
    title: "Input and Type Conversion",
    summary: "Take input and convert data types.",
    objectives: ["Use input()", "Convert strings to int", "Handle basic user data"],
    content: `
      <p><strong>input()</strong> reads user text. Since it comes in as text, you often convert it using <strong>int()</strong> or <strong>float()</strong>.</p>
    `,
    code: `name = input("What is your name? ")
age = int(input("How old are you? "))

print("Hello,", name)
print("Next year you will be", age + 1)`,
    quiz: {
      question: "What does int() do?",
      options: ["Prints output", "Turns text into an integer", "Creates a list", "Adds comments"],
      answer: 1,
      explanation: "int() converts a value to an integer."
    }
  },
  {
    id: 4,
    level: "Beginner",
    title: "if, elif, and else",
    summary: "Make decisions in Python.",
    objectives: ["Write conditions", "Use if/else", "Compare values"],
    content: `
      <p>Conditional statements let your program choose different paths.</p>
      <ul>
        <li><strong>if</strong> checks the first condition</li>
        <li><strong>elif</strong> checks another condition</li>
        <li><strong>else</strong> handles the fallback case</li>
      </ul>
    `,
    code: `score = 85

if score >= 90:
    print("Excellent")
elif score >= 70:
    print("Good")
else:
    print("Keep practicing")`,
    quiz: {
      question: "What defines code blocks in Python?",
      options: ["Curly braces", "Semicolons", "Indentation", "Quotes"],
      answer: 2,
      explanation: "Python uses indentation to define code blocks."
    }
  },
  {
    id: 5,
    level: "Intermediate",
    title: "Loops: for and while",
    summary: "Repeat tasks automatically.",
    objectives: ["Use for loops", "Use while loops", "Repeat code"],
    content: `
      <p>Loops repeat code multiple times.</p>
      <ul>
        <li><strong>for</strong> is good for sequences</li>
        <li><strong>while</strong> is good while a condition stays true</li>
      </ul>
    `,
    code: `print("For loop:")
for i in range(5):
    print("Number:", i)

print("\\nWhile loop:")
count = 0
while count < 3:
    print("Count is", count)
    count += 1`,
    quiz: {
      question: "Which function is commonly used with for loops?",
      options: ["open()", "range()", "input()", "type()"],
      answer: 1,
      explanation: "range() is commonly used with for loops."
    }
  },
  {
    id: 6,
    level: "Intermediate",
    title: "Functions",
    summary: "Write reusable code blocks.",
    objectives: ["Define functions", "Use parameters", "Return values"],
    content: `
      <p>Functions help you organize and reuse code.</p>
      <p>You create them with <strong>def</strong>.</p>
    `,
    code: `def greet(name):
    return f"Hello, {name}!"

message = greet("Python student")
print(message)`,
    quiz: {
      question: "Which keyword creates a function?",
      options: ["function", "def", "func", "return"],
      answer: 1,
      explanation: "Functions are created with def."
    }
  },
  {
    id: 7,
    level: "Intermediate",
    title: "Lists, Tuples, and Dictionaries",
    summary: "Work with collections of data.",
    objectives: ["Use lists", "Understand tuples", "Use dictionaries"],
    content: `
      <p>Python includes built-in data structures for storing collections.</p>
      <ul>
        <li>List: ordered and changeable</li>
        <li>Tuple: ordered and fixed</li>
        <li>Dictionary: key-value pairs</li>
      </ul>
    `,
    code: `languages = ["Python", "JavaScript", "C++"]
point = (10, 20)
person = {"name": "Ahmed", "role": "Engineer"}

print(languages[0])
print(point)
print(person["name"])`,
    quiz: {
      question: "Which structure uses key-value pairs?",
      options: ["Tuple", "List", "Dictionary", "String"],
      answer: 2,
      explanation: "Dictionaries store data using keys and values."
    }
  },
  {
    id: 8,
    level: "Advanced",
    title: "File Handling",
    summary: "Read and write files.",
    objectives: ["Open files", "Read text", "Write text safely"],
    content: `
      <p>Python can work with files using <strong>open()</strong>.</p>
      <p>Using <strong>with open()</strong> is the safest common pattern.</p>
    `,
    code: `text = "Learning Python is powerful!"

with open("lesson.txt", "w") as file:
    file.write(text)

with open("lesson.txt", "r") as file:
    content = file.read()

print(content)`,
    quiz: {
      question: 'What does "w" mean in open("file.txt", "w")?',
      options: ["Wrap", "Write", "Watch", "Web"],
      answer: 1,
      explanation: '"w" means write mode.'
    }
  },
  {
    id: 9,
    level: "Advanced",
    title: "Error Handling with try/except",
    summary: "Catch errors gracefully.",
    objectives: ["Catch errors", "Prevent crashes", "Use try/except"],
    content: `
      <p>Programs can fail. Use <strong>try</strong> and <strong>except</strong> to handle errors in a safer way.</p>
    `,
    code: `try:
    number = int("hello")
    print(number)
except ValueError:
    print("That value cannot be converted to an integer.")`,
    quiz: {
      question: "Which block handles the error?",
      options: ["try", "except", "for", "import"],
      answer: 1,
      explanation: "The except block handles the error."
    }
  },
  {
    id: 10,
    level: "Expert",
    title: "Object-Oriented Programming",
    summary: "Build programs with classes and objects.",
    objectives: ["Create classes", "Use __init__", "Work with methods"],
    content: `
      <p>A class is a blueprint. An object is an instance of that class.</p>
      <p><strong>__init__</strong> initializes object data.</p>
    `,
    code: `class Car:
    def __init__(self, brand, year):
        self.brand = brand
        self.year = year

    def describe(self):
        return f"{self.brand} - {self.year}"

my_car = Car("Tesla", 2024)
print(my_car.describe())`,
    quiz: {
      question: "What is __init__ used for?",
      options: ["Delete objects", "Initialize object data", "Import code", "Stop programs"],
      answer: 1,
      explanation: "__init__ initializes object attributes."
    }
  },
  {
    id: 11,
    level: "Expert",
    title: "List Comprehensions",
    summary: "Create lists in a compact way.",
    objectives: ["Create lists elegantly", "Filter data", "Write concise logic"],
    content: `
      <p>List comprehensions are a compact way to build lists.</p>
    `,
    code: `squares = [x * x for x in range(1, 6)]
even_squares = [x * x for x in range(1, 11) if x % 2 == 0]

print(squares)
print(even_squares)`,
    quiz: {
      question: "What does a list comprehension create?",
      options: ["A file", "A list", "A class", "A dictionary only"],
      answer: 1,
      explanation: "A list comprehension creates a list."
    }
  },
  {
    id: 12,
    level: "Expert",
    title: "Modules and Imports",
    summary: "Reuse built-in and external code.",
    objectives: ["Import modules", "Use math", "Understand reusable code"],
    content: `
      <p>Modules contain reusable code. Python includes many built-in modules like <strong>math</strong>.</p>
    `,
    code: `import math

print(math.sqrt(81))
print(math.pi)`,
    quiz: {
      question: "Which keyword loads a module?",
      options: ["include", "using", "import", "require"],
      answer: 2,
      explanation: "Python uses import."
    }
  }
];

const roadmapData = [
  {
    stage: "Stage 1: Beginner",
    items: [
      "print(), variables, strings",
      "input(), numbers, type conversion",
      "if / elif / else",
      "basic loops"
    ]
  },
  {
    stage: "Stage 2: Intermediate",
    items: [
      "functions and parameters",
      "lists, tuples, dictionaries",
      "string methods",
      "basic problem solving"
    ]
  },
  {
    stage: "Stage 3: Advanced",
    items: [
      "file handling",
      "error handling",
      "modules and packages",
      "cleaner program structure"
    ]
  },
  {
    stage: "Stage 4: Expert",
    items: [
      "OOP and classes",
      "list comprehensions",
      "larger project structure",
      "build apps, tools, and automation"
    ]
  }
];

const challenges = [
  {
    id: 1,
    level: "Beginner",
    title: "Print Your Name",
    prompt: "Write Python code that prints your name.",
    description: `
      <p>Create a simple Python program that prints your name on the screen.</p>
      <p>Example output: <code>Ahmed</code></p>
    `,
    hint: "Use print() with a string.",
    starter: `print("Your name here")`
  },
  {
    id: 2,
    level: "Beginner",
    title: "Add Two Numbers",
    prompt: "Create two variables and print their sum.",
    description: `
      <p>Create two variables, store numbers in them, then print the result of adding them together.</p>
    `,
    hint: "Use variable1 + variable2 inside print().",
    starter: `a = 5
b = 7

print(a + b)`
  },
  {
    id: 3,
    level: "Intermediate",
    title: "Loop Through a List",
    prompt: "Print each item in a list using a for loop.",
    description: `
      <p>Create a list of three items and print each item using a <code>for</code> loop.</p>
    `,
    hint: "Use: for item in items:",
    starter: `items = ["Python", "GitHub", "Practice"]

for item in items:
    print(item)`
  },
  {
    id: 4,
    level: "Intermediate",
    title: "Build a Function",
    prompt: "Write a function that doubles a number.",
    description: `
      <p>Create a function named <code>double_number</code> that takes one value and returns that value multiplied by 2.</p>
    `,
    hint: "Use def and return.",
    starter: `def double_number(n):
    return n * 2

print(double_number(6))`
  },
  {
    id: 5,
    level: "Advanced",
    title: "Handle an Error",
    prompt: "Use try/except to catch invalid integer conversion.",
    description: `
      <p>Write code that tries to convert the word <code>"hello"</code> into an integer and catches the error.</p>
    `,
    hint: "Use try, int(), and except ValueError.",
    starter: `try:
    number = int("hello")
    print(number)
except ValueError:
    print("Invalid integer conversion")`
  },
  {
    id: 6,
    level: "Expert",
    title: "Create a Class",
    prompt: "Create a class with one method and print its result.",
    description: `
      <p>Create a class called <code>Student</code> with a method that returns a description string.</p>
    `,
    hint: "Use class, __init__, self, and a method.",
    starter: `class Student:
    def __init__(self, name):
        self.name = name

    def describe(self):
        return f"Student: {self.name}"

s = Student("Ahmed")
print(s.describe())`
  }
];

let selectedLessonId = 1;
let currentFilter = "All";
let selectedChallengeId = 1;
let pyodide = null;
let pyodideReady = false;

const lessonList = document.getElementById("lessonList");
const lessonSearch = document.getElementById("lessonSearch");
const lessonTitle = document.getElementById("lessonTitle");
const lessonSummary = document.getElementById("lessonSummary");
const lessonLevelBadge = document.getElementById("lessonLevelBadge");
const lessonObjectives = document.getElementById("lessonObjectives");
const lessonContent = document.getElementById("lessonContent");
const lessonCodeBlock = document.getElementById("lessonCodeBlock");
const quizContainer = document.getElementById("quizContainer");
const codeEditor = document.getElementById("codeEditor");
const outputBox = document.getElementById("outputBox");

const challengeList = document.getElementById("challengeList");
const challengeLevelBadge = document.getElementById("challengeLevelBadge");
const challengeTitle = document.getElementById("challengeTitle");
const challengePrompt = document.getElementById("challengePrompt");
const challengeDescription = document.getElementById("challengeDescription");
const challengeHint = document.getElementById("challengeHint");
const challengeEditor = document.getElementById("challengeEditor");
const challengeOutput = document.getElementById("challengeOutput");

const roadmapGrid = document.getElementById("roadmapGrid");

const statLessons = document.getElementById("statLessons");
const statCompleted = document.getElementById("statCompleted");
const statChallenges = document.getElementById("statChallenges");
const statProgress = document.getElementById("statProgress");
const runtimeStatus = document.getElementById("runtimeStatus");

const markCompleteBtn = document.getElementById("markCompleteBtn");
const loadExampleBtn = document.getElementById("loadExampleBtn");
const runCodeBtn = document.getElementById("runCodeBtn");
const clearCodeBtn = document.getElementById("clearCodeBtn");
const resetCodeBtn = document.getElementById("resetCodeBtn");
const resetProgressBtn = document.getElementById("resetProgressBtn");
const themeToggle = document.getElementById("themeToggle");
const loadChallengeStarterBtn = document.getElementById("loadChallengeStarterBtn");
const solveChallengeBtn = document.getElementById("solveChallengeBtn");
const markChallengeSolvedBtn = document.getElementById("markChallengeSolvedBtn");

const studentNameInput = document.getElementById("studentNameInput");
const certificateTrackSelect = document.getElementById("certificateTrackSelect");
const generateCertificateBtn = document.getElementById("generateCertificateBtn");
const printCertificateBtn = document.getElementById("printCertificateBtn");
const certificateNamePreview = document.getElementById("certificateNamePreview");
const certificateTrackPreview = document.getElementById("certificateTrackPreview");
const certificateLessonsPreview = document.getElementById("certificateLessonsPreview");
const certificateChallengesPreview = document.getElementById("certificateChallengesPreview");
const certificateDatePreview = document.getElementById("certificateDatePreview");
const certificateLessonsDone = document.getElementById("certificateLessonsDone");
const certificateChallengesDone = document.getElementById("certificateChallengesDone");

function getLessonProgress() {
  return JSON.parse(localStorage.getItem("youooo-python-progress") || "{}");
}

function saveLessonProgress(progress) {
  localStorage.setItem("youooo-python-progress", JSON.stringify(progress));
}

function getChallengeProgress() {
  return JSON.parse(localStorage.getItem("youooo-python-challenges") || "{}");
}

function saveChallengeProgress(progress) {
  localStorage.setItem("youooo-python-challenges", JSON.stringify(progress));
}

function isLessonComplete(id) {
  return !!getLessonProgress()[id];
}

function isChallengeSolved(id) {
  return !!getChallengeProgress()[id];
}

function updateStats() {
  const lessonProgress = getLessonProgress();
  const challengeProgress = getChallengeProgress();

  const completedLessons = Object.keys(lessonProgress).filter((id) => lessonProgress[id]).length;
  const solvedChallenges = Object.keys(challengeProgress).filter((id) => challengeProgress[id]).length;

  const totalLessons = lessons.length;
  const totalChallenges = challenges.length;
  const overallTotal = totalLessons + totalChallenges;
  const overallDone = completedLessons + solvedChallenges;
  const percent = Math.round((overallDone / overallTotal) * 100);

  statLessons.textContent = totalLessons;
  statCompleted.textContent = completedLessons;
  statChallenges.textContent = solvedChallenges;
  statProgress.textContent = `${percent}%`;

  certificateLessonsDone.textContent = completedLessons;
  certificateChallengesDone.textContent = solvedChallenges;
  certificateLessonsPreview.textContent = completedLessons;
  certificateChallengesPreview.textContent = solvedChallenges;
}

function renderLessons() {
  const search = lessonSearch.value.toLowerCase().trim();

  const filtered = lessons.filter((lesson) => {
    const matchesLevel = currentFilter === "All" || lesson.level === currentFilter;
    const matchesSearch =
      lesson.title.toLowerCase().includes(search) ||
      lesson.summary.toLowerCase().includes(search) ||
      lesson.level.toLowerCase().includes(search);

    return matchesLevel && matchesSearch;
  });

  lessonList.innerHTML = "";

  filtered.forEach((lesson) => {
    const item = document.createElement("div");
    item.className = `lesson-item ${lesson.id === selectedLessonId ? "active" : ""}`;
    item.innerHTML = `
      <h4>${lesson.title}</h4>
      <div class="lesson-meta">
        <span>${lesson.level}</span>
        <span class="${isLessonComplete(lesson.id) ? "lesson-complete" : ""}">
          ${isLessonComplete(lesson.id) ? "Completed" : "Not done"}
        </span>
      </div>
      <p class="muted" style="margin: 10px 0 0;">${lesson.summary}</p>
    `;
    item.addEventListener("click", () => {
      selectedLessonId = lesson.id;
      renderLessons();
      renderSelectedLesson();
    });
    lessonList.appendChild(item);
  });

  if (!filtered.length) {
    lessonList.innerHTML = `<p class="muted">No lessons found.</p>`;
  }
}

function renderQuiz(lesson) {
  quizContainer.innerHTML = "";

  const q = lesson.quiz;
  const title = document.createElement("p");
  title.innerHTML = `<strong>${q.question}</strong>`;
  quizContainer.appendChild(title);

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.className = "quiz-option";
    btn.textContent = option;

    btn.addEventListener("click", () => {
      [...quizContainer.querySelectorAll(".quiz-option")].forEach((b) => {
        b.disabled = true;
      });

      const feedback = document.createElement("div");
      feedback.className = "quiz-feedback";

      if (index === q.answer) {
        btn.classList.add("correct");
        feedback.innerHTML = `<strong>Correct.</strong> ${q.explanation}`;
      } else {
        btn.classList.add("wrong");
        const correctButton = quizContainer.querySelectorAll(".quiz-option")[q.answer];
        if (correctButton) correctButton.classList.add("correct");
        feedback.innerHTML = `<strong>Not correct.</strong> ${q.explanation}`;
      }

      quizContainer.appendChild(feedback);
    });

    quizContainer.appendChild(btn);
  });
}

function renderSelectedLesson() {
  const lesson = lessons.find((l) => l.id === selectedLessonId);
  if (!lesson) return;

  lessonTitle.textContent = lesson.title;
  lessonSummary.textContent = lesson.summary;
  lessonLevelBadge.textContent = lesson.level;
  lessonContent.innerHTML = lesson.content;
  lessonCodeBlock.textContent = lesson.code;

  lessonObjectives.innerHTML = lesson.objectives
    .map((objective) => `<span class="objective-chip">${objective}</span>`)
    .join("");

  renderQuiz(lesson);
  codeEditor.value = lesson.code;
}

function renderRoadmap() {
  roadmapGrid.innerHTML = "";
  roadmapData.forEach((stage) => {
    const card = document.createElement("div");
    card.className = "roadmap-card";
    card.innerHTML = `
      <h3>${stage.stage}</h3>
      <ul>
        ${stage.items.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    `;
    roadmapGrid.appendChild(card);
  });
}

function renderChallenges() {
  challengeList.innerHTML = "";

  challenges.forEach((challenge) => {
    const item = document.createElement("div");
    item.className = `challenge-item ${challenge.id === selectedChallengeId ? "active" : ""}`;
    item.innerHTML = `
      <h4>${challenge.title}</h4>
      <div class="challenge-status ${isChallengeSolved(challenge.id) ? "done" : ""}">
        ${challenge.level} • ${isChallengeSolved(challenge.id) ? "Solved" : "Unsolved"}
      </div>
      <p class="muted" style="margin: 10px 0 0;">${challenge.prompt}</p>
    `;
    item.addEventListener("click", () => {
      selectedChallengeId = challenge.id;
      renderChallenges();
      renderSelectedChallenge();
    });
    challengeList.appendChild(item);
  });
}

function renderSelectedChallenge() {
  const challenge = challenges.find((c) => c.id === selectedChallengeId);
  if (!challenge) return;

  challengeLevelBadge.textContent = challenge.level;
  challengeTitle.textContent = challenge.title;
  challengePrompt.textContent = challenge.prompt;
  challengeDescription.innerHTML = challenge.description;
  challengeHint.textContent = challenge.hint;
  challengeEditor.value = challenge.starter;
}

function updateCertificatePreview() {
  const name = studentNameInput.value.trim() || "Your Name Here";
  const track = certificateTrackSelect.value;
  const today = new Date().toLocaleDateString();

  certificateNamePreview.textContent = name;
  certificateTrackPreview.textContent = track;
  certificateDatePreview.textContent = today;
}

function loadTheme() {
  const saved = localStorage.getItem("youooo-python-theme");
  if (saved === "light") {
    document.body.classList.add("light");
  }
}

function saveTheme() {
  localStorage.setItem(
    "youooo-python-theme",
    document.body.classList.contains("light") ? "light" : "dark"
  );
}

async function loadPyRuntime() {
  try {
    runtimeStatus.textContent = "Loading...";
    pyodide = await loadPyodide();
    pyodideReady = true;
    runtimeStatus.textContent = "Ready";
    outputBox.textContent = "Python runtime loaded. You can now run code.";
    challengeOutput.textContent = "Python runtime loaded. You can now run challenge code.";
  } catch (error) {
    runtimeStatus.textContent = "Error";
    outputBox.textContent = `Failed to load Python runtime.\n${error.message}`;
    challengeOutput.textContent = `Failed to load Python runtime.\n${error.message}`;
  }
}

function indentPython(code) {
  return code
    .split("\n")
    .map((line) => `    ${line}`)
    .join("\n");
}

async function runPythonCode(targetCode, targetOutput) {
  if (!pyodideReady) {
    targetOutput.textContent = "Python runtime is still loading. Please wait.";
    return;
  }

  const wrappedCode = `
import sys
import io

_buffer = io.StringIO()
sys.stdout = _buffer

try:
${indentPython(targetCode)}
except Exception as e:
    print("Error:", e)

sys.stdout.getvalue()
`;

  try {
    targetOutput.textContent = "Running...";
    const result = await pyodide.runPythonAsync(wrappedCode);
    targetOutput.textContent = result || "(No output)";
  } catch (error) {
    targetOutput.textContent = `Execution failed:\n${error.message}`;
  }
}

function setupTabs() {
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
      document.querySelectorAll(".tab-content").forEach((c) => c.classList.remove("active"));

      btn.classList.add("active");
      const target = document.getElementById(btn.dataset.tab);
      if (target) target.classList.add("active");
    });
  });
}

markCompleteBtn.addEventListener("click", () => {
  const progress = getLessonProgress();
  progress[selectedLessonId] = true;
  saveLessonProgress(progress);
  updateStats();
  renderLessons();
  updateCertificatePreview();
});

loadExampleBtn.addEventListener("click", () => {
  const lesson = lessons.find((l) => l.id === selectedLessonId);
  if (lesson) {
    codeEditor.value = lesson.code;
    outputBox.textContent = "Lesson example loaded into the editor.";
  }
});

runCodeBtn.addEventListener("click", async () => {
  await runPythonCode(codeEditor.value, outputBox);
});

clearCodeBtn.addEventListener("click", () => {
  codeEditor.value = "";
  outputBox.textContent = "Editor cleared.";
});

resetCodeBtn.addEventListener("click", () => {
  const lesson = lessons.find((l) => l.id === selectedLessonId);
  if (lesson) {
    codeEditor.value = lesson.code;
    outputBox.textContent = "Editor reset to the lesson example.";
  }
});

resetProgressBtn.addEventListener("click", () => {
  const confirmed = confirm("Reset all lesson and challenge progress?");
  if (!confirmed) return;

  localStorage.removeItem("youooo-python-progress");
  localStorage.removeItem("youooo-python-challenges");
  updateStats();
  renderLessons();
  renderChallenges();
  outputBox.textContent = "Progress reset.";
  challengeOutput.textContent = "Progress reset.";
  updateCertificatePreview();
});

lessonSearch.addEventListener("input", renderLessons);

document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.level;
    renderLessons();
  });
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  saveTheme();
});

loadChallengeStarterBtn.addEventListener("click", () => {
  const challenge = challenges.find((c) => c.id === selectedChallengeId);
  if (challenge) {
    challengeEditor.value = challenge.starter;
    challengeOutput.textContent = "Starter code loaded.";
  }
});

solveChallengeBtn.addEventListener("click", async () => {
  await runPythonCode(challengeEditor.value, challengeOutput);
});

markChallengeSolvedBtn.addEventListener("click", () => {
  const progress = getChallengeProgress();
  progress[selectedChallengeId] = true;
  saveChallengeProgress(progress);
  updateStats();
  renderChallenges();
  updateCertificatePreview();
  challengeOutput.textContent = "Challenge marked as solved.";
});

generateCertificateBtn.addEventListener("click", () => {
  updateCertificatePreview();
});

printCertificateBtn.addEventListener("click", () => {
  updateCertificatePreview();
  window.print();
});

studentNameInput.addEventListener("input", updateCertificatePreview);
certificateTrackSelect.addEventListener("change", updateCertificatePreview);

function init() {
  loadTheme();
  setupTabs();
  updateStats();
  renderLessons();
  renderSelectedLesson();
  renderRoadmap();
  renderChallenges();
  renderSelectedChallenge();
  updateCertificatePreview();
  loadPyRuntime();
}

init();
