const lessons = [
  {
    id: 1,
    level: "Beginner",
    title: "Python Basics and print()",
    summary: "Start with Python syntax, print output, and simple statements.",
    objectives: ["Understand Python", "Use print()", "Run first code"],
    content: `
      <p>Python is one of the easiest programming languages to learn. It is powerful, readable, and used in web development, automation, AI, data science, and more.</p>
      <p>Your first Python program usually uses <strong>print()</strong> to display text on the screen.</p>
      <ul>
        <li><strong>print()</strong> shows output</li>
        <li>Text is written inside quotes</li>
        <li>Python is case-sensitive</li>
      </ul>
      <p>Example: <code>print("Hello, world!")</code></p>
    `,
    code: `print("Welcome to Youooo Python Academy!")
print("This is your first Python program.")`,
    quiz: {
      question: "What does print() do in Python?",
      options: [
        "Deletes variables",
        "Displays output",
        "Creates a loop",
        "Imports a file"
      ],
      answer: 1,
      explanation: "print() is used to display text or values in the output."
    }
  },
  {
    id: 2,
    level: "Beginner",
    title: "Variables and Data Types",
    summary: "Learn how to store information in variables.",
    objectives: ["Create variables", "Use strings and numbers", "Understand assignment"],
    content: `
      <p>Variables are used to store data. In Python, you create a variable by assigning a value using the equals sign.</p>
      <ul>
        <li><strong>name = "Ahmed"</strong> stores a string</li>
        <li><strong>age = 30</strong> stores an integer</li>
        <li><strong>price = 19.99</strong> stores a float</li>
      </ul>
      <p>You can print variables just like text.</p>
    `,
    code: `name = "Ahmed"
age = 30
price = 19.99

print(name)
print(age)
print(price)`,
    quiz: {
      question: "Which line correctly creates a Python variable?",
      options: [
        "var name = 'Ali'",
        "name := 'Ali'",
        "name = 'Ali'",
        "string name = 'Ali'"
      ],
      answer: 2,
      explanation: "Python uses a simple equals sign to assign a value to a variable."
    }
  },
  {
    id: 3,
    level: "Beginner",
    title: "Input and Type Conversion",
    summary: "Take user input and convert between types.",
    objectives: ["Use input()", "Convert strings to int", "Handle basic user data"],
    content: `
      <p>The <strong>input()</strong> function lets the user type something. Python reads input as text by default.</p>
      <p>If you want numbers, you often need to convert input using <strong>int()</strong> or <strong>float()</strong>.</p>
      <p>Example: <code>age = int(input("Enter age: "))</code></p>
    `,
    code: `name = input("What is your name? ")
age = int(input("How old are you? "))

print("Hello,", name)
print("Next year you will be", age + 1)`,
    quiz: {
      question: "What does int() do?",
      options: [
        "Turns text into an integer",
        "Creates a list",
        "Prints output",
        "Adds comments"
      ],
      answer: 0,
      explanation: "int() converts a value into an integer when possible."
    }
  },
  {
    id: 4,
    level: "Beginner",
    title: "if, elif, and else",
    summary: "Control decision-making in Python.",
    objectives: ["Write conditions", "Use if/else", "Compare values"],
    content: `
      <p>Conditional statements let your program make decisions.</p>
      <ul>
        <li><strong>if</strong> checks the first condition</li>
        <li><strong>elif</strong> checks another condition if needed</li>
        <li><strong>else</strong> handles everything else</li>
      </ul>
      <p>Indentation matters in Python. Blocks are defined by indentation.</p>
    `,
    code: `score = 85

if score >= 90:
    print("Excellent")
elif score >= 70:
    print("Good")
else:
    print("Keep practicing")`,
    quiz: {
      question: "What is used to define code blocks in Python?",
      options: ["Semicolons", "Curly braces", "Indentation", "Parentheses"],
      answer: 2,
      explanation: "Python uses indentation to define blocks of code."
    }
  },
  {
    id: 5,
    level: "Intermediate",
    title: "Loops: for and while",
    summary: "Repeat actions with loops.",
    objectives: ["Use for loops", "Use while loops", "Repeat tasks automatically"],
    content: `
      <p>Loops let your code run multiple times.</p>
      <ul>
        <li><strong>for</strong> is often used when repeating over a sequence</li>
        <li><strong>while</strong> repeats while a condition is true</li>
      </ul>
      <p>Be careful with while loops so they do not run forever.</p>
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
      question: "Which function is commonly used with a for loop to create a sequence of numbers?",
      options: ["list()", "range()", "input()", "open()"],
      answer: 1,
      explanation: "range() is commonly used with for loops."
    }
  },
  {
    id: 6,
    level: "Intermediate",
    title: "Functions",
    summary: "Organize reusable code into functions.",
    objectives: ["Define functions", "Use parameters", "Return values"],
    content: `
      <p>Functions help you reuse code and make programs cleaner.</p>
      <p>You define a function using <strong>def</strong>. A function can take parameters and return a value.</p>
    `,
    code: `def greet(name):
    return f"Hello, {name}!"

message = greet("Python student")
print(message)`,
    quiz: {
      question: "Which keyword is used to create a function in Python?",
      options: ["function", "def", "func", "return"],
      answer: 1,
      explanation: "Functions are created using the def keyword."
    }
  },
  {
    id: 7,
    level: "Intermediate",
    title: "Lists, Tuples, and Dictionaries",
    summary: "Store collections of data.",
    objectives: ["Use lists", "Understand tuples", "Work with dictionaries"],
    content: `
      <p>Python has powerful built-in data structures.</p>
      <ul>
        <li><strong>List</strong>: ordered, changeable</li>
        <li><strong>Tuple</strong>: ordered, not changeable</li>
        <li><strong>Dictionary</strong>: key-value pairs</li>
      </ul>
    `,
    code: `languages = ["Python", "JavaScript", "C++"]
point = (10, 20)
person = {"name": "Ahmed", "role": "Engineer"}

print(languages[0])
print(point)
print(person["name"])`,
    quiz: {
      question: "Which structure stores key-value pairs?",
      options: ["List", "Tuple", "Dictionary", "Set"],
      answer: 2,
      explanation: "Dictionaries store data as key-value pairs."
    }
  },
  {
    id: 8,
    level: "Advanced",
    title: "File Handling",
    summary: "Read from and write to files in Python.",
    objectives: ["Open files", "Read text", "Write text safely"],
    content: `
      <p>Python can work with files using <strong>open()</strong>.</p>
      <p>Common modes include:</p>
      <ul>
        <li><strong>"r"</strong> for read</li>
        <li><strong>"w"</strong> for write</li>
        <li><strong>"a"</strong> for append</li>
      </ul>
      <p>Using <strong>with open(...)</strong> is the safest style because it closes the file automatically.</p>
    `,
    code: `text = "Learning Python is powerful!"

with open("lesson.txt", "w") as file:
    file.write(text)

with open("lesson.txt", "r") as file:
    content = file.read()

print(content)`,
    quiz: {
      question: 'What does "w" mean in open("file.txt", "w")?',
      options: ["Watch", "Write", "Web", "Wrap"],
      answer: 1,
      explanation: '"w" opens a file in write mode.'
    }
  },
  {
    id: 9,
    level: "Advanced",
    title: "Error Handling with try/except",
    summary: "Make programs safer by handling errors.",
    objectives: ["Catch errors", "Prevent crashes", "Use try/except"],
    content: `
      <p>Errors happen. A good Python programmer handles them gracefully.</p>
      <p>You can use <strong>try</strong> and <strong>except</strong> to catch exceptions.</p>
    `,
    code: `try:
    number = int("hello")
    print(number)
except ValueError:
    print("That value cannot be converted to an integer.")`,
    quiz: {
      question: "Which block handles an error if one occurs?",
      options: ["try", "except", "for", "finally only"],
      answer: 1,
      explanation: "The except block handles the error after try catches it."
    }
  },
  {
    id: 10,
    level: "Expert",
    title: "Object-Oriented Programming",
    summary: "Build classes and objects for scalable programs.",
    objectives: ["Create classes", "Use __init__", "Work with methods"],
    content: `
      <p>Object-oriented programming helps organize larger applications.</p>
      <p>A <strong>class</strong> is a blueprint. An <strong>object</strong> is an instance of that class.</p>
      <p><strong>__init__</strong> initializes object data when a new object is created.</p>
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
      question: "What is __init__ used for in a Python class?",
      options: [
        "To delete the class",
        "To initialize object data",
        "To stop the program",
        "To import modules"
      ],
      answer: 1,
      explanation: "__init__ is the constructor used to initialize object attributes."
    }
  },
  {
    id: 11,
    level: "Expert",
    title: "List Comprehensions",
    summary: "Write compact and powerful list-building logic.",
    objectives: ["Create lists elegantly", "Filter data", "Use expressions in one line"],
    content: `
      <p>List comprehensions are a concise way to create lists.</p>
      <p>They make code shorter and often more readable when used correctly.</p>
    `,
    code: `squares = [x * x for x in range(1, 6)]
even_squares = [x * x for x in range(1, 11) if x % 2 == 0]

print(squares)
print(even_squares)`,
    quiz: {
      question: "What does a list comprehension create?",
      options: ["A file", "A class", "A list", "A function"],
      answer: 2,
      explanation: "A list comprehension creates a list."
    }
  },
  {
    id: 12,
    level: "Expert",
    title: "Modules and Imports",
    summary: "Reuse built-in and custom Python code with imports.",
    objectives: ["Import modules", "Use math", "Understand reusable code"],
    content: `
      <p>Modules are Python files or built-in libraries that contain reusable code.</p>
      <p>You can import Python modules such as <strong>math</strong>, <strong>random</strong>, and many more.</p>
    `,
    code: `import math

print(math.sqrt(81))
print(math.pi)`,
    quiz: {
      question: "Which keyword is used to load a Python module?",
      options: ["include", "require", "import", "using"],
      answer: 2,
      explanation: "Python uses the import keyword to load modules."
    }
  }
];

let selectedLessonId = 1;
let currentFilter = "All";
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
const statLessons = document.getElementById("statLessons");
const statCompleted = document.getElementById("statCompleted");
const statProgress = document.getElementById("statProgress");
const runtimeStatus = document.getElementById("runtimeStatus");

const markCompleteBtn = document.getElementById("markCompleteBtn");
const loadExampleBtn = document.getElementById("loadExampleBtn");
const runCodeBtn = document.getElementById("runCodeBtn");
const clearCodeBtn = document.getElementById("clearCodeBtn");
const resetCodeBtn = document.getElementById("resetCodeBtn");
const resetProgressBtn = document.getElementById("resetProgressBtn");
const themeToggle = document.getElementById("themeToggle");

function getProgress() {
  return JSON.parse(localStorage.getItem("youooo-python-progress") || "{}");
}

function saveProgress(progress) {
  localStorage.setItem("youooo-python-progress", JSON.stringify(progress));
}

function isLessonComplete(id) {
  const progress = getProgress();
  return !!progress[id];
}

function updateStats() {
  const progress = getProgress();
  const completedCount = Object.keys(progress).filter((id) => progress[id]).length;
  const total = lessons.length;
  const percent = Math.round((completedCount / total) * 100);

  statLessons.textContent = total;
  statCompleted.textContent = completedCount;
  statProgress.textContent = `${percent}%`;
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

markCompleteBtn.addEventListener("click", () => {
  const progress = getProgress();
  progress[selectedLessonId] = true;
  saveProgress(progress);
  updateStats();
  renderLessons();
});

loadExampleBtn.addEventListener("click", () => {
  const lesson = lessons.find((l) => l.id === selectedLessonId);
  if (lesson) {
    codeEditor.value = lesson.code;
    outputBox.textContent = "Lesson example loaded into the editor.";
  }
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
  const confirmed = confirm("Reset all lesson progress?");
  if (!confirmed) return;

  localStorage.removeItem("youooo-python-progress");
  updateStats();
  renderLessons();
  outputBox.textContent = "Progress reset.";
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
  localStorage.setItem(
    "youooo-python-theme",
    document.body.classList.contains("light") ? "light" : "dark"
  );
});

function loadTheme() {
  const saved = localStorage.getItem("youooo-python-theme");
  if (saved === "light") {
    document.body.classList.add("light");
  }
}

async function loadPyRuntime() {
  try {
    runtimeStatus.textContent = "Loading...";
    pyodide = await loadPyodide();
    pyodideReady = true;
    runtimeStatus.textContent = "Ready";
    outputBox.textContent = "Python runtime loaded. You can now run code.";
  } catch (error) {
    runtimeStatus.textContent = "Error";
    outputBox.textContent = `Failed to load Python runtime.\n${error.message}`;
  }
}

runCodeBtn.addEventListener("click", async () => {
  if (!pyodideReady) {
    outputBox.textContent = "Python runtime is still loading. Please wait.";
    return;
  }

  const userCode = codeEditor.value;

  const wrappedCode = `
import sys
import io

_buffer = io.StringIO()
sys.stdout = _buffer

try:
${indentPython(userCode)}
except Exception as e:
    print("Error:", e)

sys.stdout.getvalue()
`;

  try {
    outputBox.textContent = "Running...";
    const result = await pyodide.runPythonAsync(wrappedCode);
    outputBox.textContent = result || "(No output)";
  } catch (error) {
    outputBox.textContent = `Execution failed:\n${error.message}`;
  }
});

function indentPython(code) {
  return code
    .split("\n")
    .map((line) => `    ${line}`)
    .join("\n");
}

function init() {
  loadTheme();
  updateStats();
  renderLessons();
  renderSelectedLesson();
  loadPyRuntime();
}

init();
