const questions = [
  {
    type: "Part 5",
    text: "The sales report must be submitted _____ Friday afternoon.",
    options: ["by", "during", "since", "while"],
    answer: 0,
    explanation: "by 表示期限，在星期五下午以前要提交。"
  },
  {
    type: "Part 5",
    text: "Our customer service team responds to inquiries as _____ as possible.",
    options: ["quick", "quickly", "quicker", "quickness"],
    answer: 1,
    explanation: "修飾動詞 responds 要用副詞 quickly。"
  },
  {
    type: "Vocabulary",
    text: "The company will _____ its new refund policy next month.",
    options: ["implement", "occur", "attend", "repair"],
    answer: 0,
    explanation: "implement 是實施、執行政策或計畫。"
  },
  {
    type: "Reading",
    text: "Notice: The cafeteria will be closed from 2 p.m. to 4 p.m. for maintenance. What should employees do?",
    options: ["Submit a report", "Use the cafeteria earlier", "Call maintenance", "Cancel lunch orders"],
    answer: 1,
    explanation: "公告指出 2 到 4 點關閉，因此員工應提早使用餐廳。"
  },
  {
    type: "Part 5",
    text: "All applicants are required to attach a copy of _____ resume.",
    options: ["they", "them", "their", "theirs"],
    answer: 2,
    explanation: "resume 是名詞，要用所有格形容詞 their。"
  },
  {
    type: "Listening",
    text: "You hear: The train to Taichung has been delayed due to track maintenance. What is the problem?",
    options: ["A meeting is canceled", "A train is late", "A ticket is missing", "A station is closed"],
    answer: 1,
    explanation: "has been delayed 表示列車誤點。"
  }
];

const vocab = [
  {
    word: "agenda",
    phonetic: "/e-jen-duh/",
    category: "Meeting",
    meaning: "議程；會議要討論的事項",
    example: "Please review the agenda before tomorrow's meeting.",
    scene: "開會前寄通知、安排會議流程、確認討論項目時常用。"
  },
  {
    word: "invoice",
    phonetic: "/in-voys/",
    category: "Business",
    meaning: "發票；帳單",
    example: "The invoice will be sent to your accounting department today.",
    scene: "付款、報帳、採購、與客戶確認費用時常見。"
  },
  {
    word: "confirm",
    phonetic: "/kun-furm/",
    category: "Email",
    meaning: "確認；證實",
    example: "Could you confirm your attendance by Friday afternoon?",
    scene: "email 中確認會議、訂位、出席、時程或資料是否正確。"
  },
  {
    word: "policy",
    phonetic: "/pol-uh-see/",
    category: "Office",
    meaning: "政策；規定",
    example: "The company has updated its refund policy.",
    scene: "公司制度、人資公告、退款規定、保固條款與辦公室規範常用。"
  },
  {
    word: "available",
    phonetic: "/uh-vay-luh-bul/",
    category: "Schedule",
    meaning: "有空的；可取得的",
    example: "The conference room is available after 3 p.m.",
    scene: "詢問時間、會議室、商品庫存、服務是否可用時很常見。"
  },
  {
    word: "estimate",
    phonetic: "/es-tuh-mayt/",
    category: "Project",
    meaning: "估計；估價",
    example: "The contractor provided an estimate for the repair work.",
    scene: "專案成本、工期、維修報價、出貨時間預估時會出現。"
  }
];

const typingPrompts = [
  {
    readingIndex: 0,
    sourceTitle: "Office Renovation Notice",
    english: "Beginning next Monday, the accounting department will temporarily move to the third floor while its office is being renovated.",
    translation: "從下週一開始，會計部門在辦公室整修期間會暫時搬到三樓。"
  },
  {
    readingIndex: 0,
    sourceTitle: "Office Renovation Notice",
    english: "Employees who need reimbursement forms should submit requests through the internal portal before noon.",
    translation: "需要報銷表單的員工應在中午前透過內部入口網站提交申請。"
  },
  {
    readingIndex: 1,
    sourceTitle: "Client Meeting Follow-up",
    english: "Thank you for attending yesterday's product demonstration.",
    translation: "感謝您參加昨天的產品展示。"
  },
  {
    readingIndex: 1,
    sourceTitle: "Client Meeting Follow-up",
    english: "The updated document will include installation fees, optional training, and estimated shipping dates.",
    translation: "更新後的文件會包含安裝費、選用訓練以及預估出貨日期。"
  },
  {
    readingIndex: 2,
    sourceTitle: "Companies Test Shorter Meetings",
    english: "Several technology companies are testing shorter meeting formats to improve employee focus and reduce schedule fatigue.",
    translation: "幾家科技公司正在測試較短的會議形式，以提升員工專注力並減少行程疲勞。"
  },
  {
    readingIndex: 3,
    sourceTitle: "Airlines Expand Digital Check-in",
    english: "Passengers can upload travel documents, choose seats, and receive boarding passes through a mobile application before arriving at the airport.",
    translation: "乘客可以在抵達機場前，透過手機應用程式上傳旅行文件、選位並取得登機證。"
  }
];

const readingPassages = [
  {
    type: "TOEIC-style",
    level: "Business Notice",
    title: "Office Renovation Notice",
    paragraphs: [
      "Beginning next Monday, the accounting department will temporarily move to the third floor while its office is being renovated.",
      "Employees who need reimbursement forms should submit requests through the internal portal before noon. Printed forms will not be available during the renovation period.",
      "The facilities team expects the project to be completed by June 28, and regular office access will resume the following business day."
    ],
    question: "What should employees do if they need reimbursement forms?",
    options: ["Visit the accounting office", "Use the internal portal", "Wait until June 28", "Call the facilities team"],
    answer: 1,
    explanation: "文章說需要報銷表單的人應該在中午前透過 internal portal 提交請求。"
  },
  {
    type: "TOEIC-style",
    level: "Email",
    title: "Client Meeting Follow-up",
    paragraphs: [
      "Thank you for attending yesterday's product demonstration. Our team appreciated your questions about delivery schedules and warranty coverage.",
      "As discussed, we will send a revised quotation by Friday afternoon. The updated document will include installation fees, optional training, and estimated shipping dates.",
      "Please review the quotation carefully and let us know whether your purchasing department requires any additional documents."
    ],
    question: "What will be included in the revised quotation?",
    options: ["A cafeteria menu", "Installation fees", "Employee resumes", "A parking permit"],
    answer: 1,
    explanation: "revised quotation 會包含 installation fees、optional training 與 estimated shipping dates。"
  },
  {
    type: "News Brief",
    level: "Workplace Trend",
    title: "Companies Test Shorter Meetings",
    paragraphs: [
      "Several technology companies are testing shorter meeting formats to improve employee focus and reduce schedule fatigue.",
      "Under the new policy, routine updates are limited to fifteen minutes, while project decisions are shared in a written summary after each meeting.",
      "Managers say the approach encourages clearer agendas and gives employees more time for concentrated work."
    ],
    question: "Why are companies testing shorter meetings?",
    options: ["To reduce focus", "To improve employee focus", "To cancel project decisions", "To remove written summaries"],
    answer: 1,
    explanation: "新聞短文第一段提到 shorter meeting formats 是為了 improve employee focus 和 reduce schedule fatigue。"
  },
  {
    type: "News Brief",
    level: "Travel",
    title: "Airlines Expand Digital Check-in",
    paragraphs: [
      "More airlines are expanding digital check-in services as travelers expect faster airport procedures.",
      "Passengers can upload travel documents, choose seats, and receive boarding passes through a mobile application before arriving at the airport.",
      "Airport staff say the system may shorten lines, but travelers should still arrive early during peak holiday periods."
    ],
    question: "What can passengers receive through the mobile application?",
    options: ["Boarding passes", "Hotel keys", "Refund checks", "Printed magazines"],
    answer: 0,
    explanation: "第二段說 passengers 可以透過 mobile application receive boarding passes。"
  }
];

const wordDefinitions = {
  accounting: "會計；會計部門。例：the accounting department 會計部門。",
  additional: "額外的；附加的。常用於 documents, information, fees。",
  agendas: "議程；會議安排。clearer agendas 表示更清楚的會議議程。",
  airlines: "航空公司。",
  airport: "機場。",
  application: "應用程式；申請。mobile application 是手機 App。",
  appreciated: "感謝；欣賞。商務信常見：We appreciated your questions.",
  arriving: "抵達。before arriving at the airport 是抵達機場前。",
  attending: "參加；出席。",
  available: "可取得的；有空的。",
  boarding: "登機。boarding pass 是登機證。",
  business: "商務；營業。",
  cafeteria: "員工餐廳；自助餐廳。",
  check: "檢查；辦理手續。check-in 是報到、登機報到。",
  client: "客戶；委託人。",
  companies: "公司，company 的複數。",
  completed: "完成的。",
  concentrated: "專注的；集中的。concentrated work 是專心工作的時間。",
  coverage: "保障範圍；報導範圍。warranty coverage 是保固範圍。",
  decisions: "決策；決定。",
  delivery: "交付；配送。",
  demonstration: "展示；示範。product demonstration 是產品展示。",
  department: "部門。",
  digital: "數位的。",
  discussed: "討論過的。as discussed 表示如先前討論。",
  document: "文件。",
  documents: "文件，document 的複數。",
  employee: "員工。",
  employees: "員工，employee 的複數。",
  encourages: "鼓勵；促進。",
  estimated: "估計的；預估的。",
  expects: "預期；期待。",
  expand: "擴大；拓展。",
  expanding: "正在擴大；正在拓展。",
  facilities: "設施；總務。facilities team 可指總務或設備團隊。",
  fatigue: "疲勞。schedule fatigue 是行程過滿造成的疲勞。",
  fees: "費用。",
  fifteen: "十五。",
  focus: "專注；焦點。",
  following: "接下來的；下列的。",
  formats: "形式；格式。",
  holiday: "假日。",
  improve: "改善；提升。",
  include: "包含。",
  installation: "安裝。",
  internal: "內部的。",
  limited: "受限制的；有限的。",
  managers: "經理；主管。",
  meeting: "會議。",
  mobile: "行動的；手機的。",
  optional: "可選的；非必要的。",
  passengers: "乘客。",
  peak: "高峰的；尖峰的。peak holiday periods 是假期尖峰時段。",
  period: "期間；時段。",
  policy: "政策；規定。",
  portal: "入口網站；系統入口。internal portal 是公司內部系統。",
  procedures: "程序；手續。",
  product: "產品。",
  project: "專案。",
  purchasing: "採購。purchasing department 是採購部門。",
  questions: "問題；詢問。",
  quotation: "報價單。",
  reduce: "減少；降低。",
  refund: "退款。",
  regular: "例行的；一般的。",
  reimbursement: "報銷；費用補償。",
  renovated: "翻新的；整修過的。",
  renovation: "整修；翻新。",
  requests: "請求；申請。",
  requires: "需要；要求。",
  resume: "恢復；履歷。本文中 resume 是恢復。",
  revised: "修訂過的。",
  routine: "例行的。",
  schedules: "時程；時間表。",
  services: "服務。",
  shipping: "運送；出貨。",
  shorter: "較短的。",
  staff: "員工；工作人員。",
  submit: "提交。",
  summary: "摘要；總結。",
  temporarily: "暫時地。",
  technology: "科技。",
  travelers: "旅客。",
  warranty: "保固。",
  written: "書面的；寫成文字的"
};

const tasks = [
  { id: "listen", title: "聽力 10 分鐘", detail: "跟讀商務對話並記下關鍵字" },
  { id: "vocab", title: "單字 12 個", detail: "複習高頻商務與辦公字彙" },
  { id: "reading", title: "閱讀 1 篇", detail: "點單字看繁中解釋並完成題目" },
  { id: "typing", title: "打字 5 分鐘", detail: "精準輸入多益常見職場句子" },
  { id: "grammar", title: "文法 6 題", detail: "主攻介系詞、時態、詞性" },
  { id: "review", title: "錯題回顧", detail: "重新說明錯題為什麼錯" }
];

const dailyKey = getDateKey(new Date());
const dailyQuestions = makeDailySet(questions, dailyKey, "questions");
const dailyVocab = makeDailySet(vocab, dailyKey, "vocab");
const dailyReadings = makeDailySet(withSourceIndex(readingPassages), dailyKey, "readings");
const dailyTypingPrompts = makeDailySet(typingPrompts, dailyKey, "typing");

const state = JSON.parse(localStorage.getItem("toeicSprintState") || "{}");
state.answers ||= {};
state.knownWords ||= [];
state.tasks ||= {};
state.goal ||= 750;
state.days ||= 0;
state.lastCompleted ||= "";
state.bestWpm ||= 0;
state.completedDates ||= state.lastCompleted ? [state.lastCompleted] : [];
state.completedDates = [...new Set(state.completedDates)];
state.days = Math.max(state.days, state.completedDates.length);
state.taskDate ||= dailyKey;
if (state.taskDate !== dailyKey) {
  state.tasks = {};
  state.answers = {};
  state.taskDate = dailyKey;
}

let questionIndex = 0;
let vocabIndex = 0;
let showingMeaning = false;
let typingIndex = 0;
let readingIndex = 0;
let calendarDate = new Date();
let typingStart = null;
let typingTimer = null;

const save = () => localStorage.setItem("toeicSprintState", JSON.stringify(state));

function renderStats() {
  const answered = Object.values(state.answers);
  const correct = answered.filter(Boolean).length;
  const accuracy = answered.length ? Math.round((correct / answered.length) * 100) : 0;
  const todayDone = isTodayCompleted();

  document.querySelector("#stat-days").textContent = state.completedDates.length;
  document.querySelector("#stat-score").textContent = `${accuracy}%`;
  document.querySelector("#stat-words").textContent = state.knownWords.length;
  document.querySelector("#stat-streak").textContent = todayDone ? "1" : "0";
  document.querySelector("#stat-wpm").textContent = state.bestWpm;
}

function renderQuestion() {
  const question = dailyQuestions[questionIndex];
  document.querySelector("#question-type").textContent = question.type;
  document.querySelector("#question-index").textContent = questionIndex + 1;
  document.querySelector("#question-total").textContent = dailyQuestions.length;
  document.querySelector("#question-text").textContent = question.text;

  const answers = document.querySelector("#answers");
  answers.innerHTML = "";
  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "answer";
    button.type = "button";
    button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
    button.addEventListener("click", () => chooseAnswer(index));
    answers.append(button);
  });

  document.querySelector("#feedback").textContent = "選一個答案後，這裡會顯示解析。";
  applyAnsweredState();
}

function chooseAnswer(index) {
  const question = dailyQuestions[questionIndex];
  state.answers[questionIndex] = index === question.answer;
  save();
  applyAnsweredState(index);
  renderStats();
  renderReviewList();
}

function applyAnsweredState(selectedIndex = null) {
  const question = dailyQuestions[questionIndex];
  const buttons = [...document.querySelectorAll(".answer")];

  buttons.forEach((button, index) => {
    button.classList.toggle("selected", index === selectedIndex);
    button.classList.toggle("correct", selectedIndex !== null && index === question.answer);
    button.classList.toggle("wrong", selectedIndex === index && index !== question.answer);
  });

  if (selectedIndex !== null) {
    const isCorrect = selectedIndex === question.answer;
    document.querySelector("#feedback").textContent = `${isCorrect ? "答對了。" : "這題要再看一次。"} ${question.explanation}`;
  }
}

function renderVocab() {
  const item = dailyVocab[vocabIndex];
  document.querySelector("#vocab-category").textContent = item.category;
  document.querySelector("#vocab-word").textContent = item.word;
  document.querySelector("#vocab-phonetic").textContent = item.phonetic;
  document.querySelector("#vocab-meaning").textContent = showingMeaning ? item.meaning : "點擊卡片看中文意思";
  document.querySelector("#vocab-details").innerHTML = showingMeaning
    ? `
      <div><strong>例句</strong><span>${escapeText(item.example)}</span></div>
      <div><strong>使用情景</strong><span>${escapeText(item.scene)}</span></div>
    `
    : "";
  document.querySelector("#known-word").textContent = state.knownWords.includes(item.word) ? "已熟悉" : "我會了";
}

function renderReadingList() {
  const list = document.querySelector("#reading-list");
  list.innerHTML = "";

  dailyReadings.forEach((passage, index) => {
    const button = document.createElement("button");
    button.className = "reading-option";
    button.type = "button";
    button.innerHTML = `<strong>${passage.title}</strong><span>${passage.type}</span>`;
    button.classList.toggle("active", index === readingIndex);
    button.addEventListener("click", () => {
      readingIndex = index;
      renderReading();
      syncTypingToReading(false);
    });
    list.append(button);
  });
}

function renderReading() {
  const passage = dailyReadings[readingIndex];
  document.querySelector("#reading-type").textContent = passage.type;
  document.querySelector("#reading-level").textContent = passage.level;
  document.querySelector("#reading-title").textContent = passage.title;
  document.querySelector("#reading-passage").innerHTML = passage.paragraphs
    .map((paragraph) => `<p>${renderClickableWords(paragraph)}</p>`)
    .join("");
  document.querySelector("#word-note").textContent = "點擊文章中的英文單字，這裡會顯示繁體中文解釋。";
  document.querySelector("#reading-question").textContent = passage.question;
  document.querySelector("#reading-feedback").textContent = "選一個答案後，這裡會顯示閱讀解析。";

  const answers = document.querySelector("#reading-answers");
  answers.innerHTML = "";
  passage.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "answer";
    button.type = "button";
    button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
    button.addEventListener("click", () => chooseReadingAnswer(index));
    answers.append(button);
  });

  renderReadingList();
}

function renderClickableWords(text) {
  return text.split(/(\s+)/).map((part) => {
    if (/^\s+$/.test(part)) {
      return part.replaceAll(" ", "&nbsp;");
    }

    const word = normalizeWord(part);
    if (!word) {
      return escapeHtml(part);
    }

    return `<button class="word-button" type="button" data-word="${word}">${escapeHtml(part)}</button>`;
  }).join("");
}

function chooseReadingAnswer(index) {
  const passage = dailyReadings[readingIndex];
  const buttons = [...document.querySelectorAll("#reading-answers .answer")];

  buttons.forEach((button, buttonIndex) => {
    button.classList.toggle("selected", buttonIndex === index);
    button.classList.toggle("correct", buttonIndex === passage.answer);
    button.classList.toggle("wrong", buttonIndex === index && index !== passage.answer);
  });

  document.querySelector("#reading-feedback").textContent = `${index === passage.answer ? "答對了。" : "這題要再看一次。"} ${passage.explanation}`;
}

function showWordDefinition(event) {
  const button = event.target.closest(".word-button");
  if (!button) {
    return;
  }

  document.querySelectorAll(".word-button.active").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");

  const word = button.dataset.word;
  const definition = wordDefinitions[word] || "目前沒有內建解釋。可以先從上下文猜意思，再把這個字加入自己的單字表。";
  document.querySelector("#word-note").innerHTML = `<strong>${escapeText(word)}</strong>：${escapeText(definition)}`;
}

function renderTasks() {
  const list = document.querySelector("#task-list");
  list.innerHTML = "";

  tasks.forEach((task) => {
    const label = document.createElement("label");
    label.className = "task";
    label.innerHTML = `
      <input type="checkbox" ${state.tasks[task.id] ? "checked" : ""}>
      <span><strong>${task.title}</strong><span>${task.detail}</span></span>
    `;

    label.querySelector("input").addEventListener("change", (event) => {
      state.tasks[task.id] = event.target.checked;
      updateCompletedDay();
      save();
      renderStats();
      renderCalendar();
    });

    list.append(label);
  });
}

function updateCompletedDay() {
  const today = getDateKey(new Date());
  const allDone = tasks.every((task) => state.tasks[task.id]);
  if (allDone && !state.completedDates.includes(today)) {
    state.completedDates.push(today);
    state.completedDates.sort();
    state.days = state.completedDates.length;
    state.lastCompleted = today;
  }
  if (!allDone && state.completedDates.includes(today)) {
    state.completedDates = state.completedDates.filter((date) => date !== today);
    state.days = state.completedDates.length;
    state.lastCompleted = state.completedDates.at(-1) || "";
  }
}

function isTodayCompleted() {
  return state.completedDates.includes(getDateKey(new Date()));
}

function renderCalendar() {
  const year = calendarDate.getFullYear();
  const month = calendarDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const start = new Date(year, month, 1 - firstDay.getDay());
  const todayKey = getDateKey(new Date());
  const monthKey = `${year}-${String(month + 1).padStart(2, "0")}`;
  const monthCompleted = state.completedDates.filter((date) => date.startsWith(monthKey)).length;

  document.querySelector("#calendar-title").textContent = `${year} 年 ${month + 1} 月打卡牆`;
  document.querySelector("#calendar-summary").textContent = `本月已完成 ${monthCompleted} 天。完成今日訓練菜單後，今天會自動亮起。`;

  const grid = document.querySelector("#calendar-grid");
  grid.innerHTML = "";

  for (let index = 0; index < 42; index += 1) {
    const day = new Date(start);
    day.setDate(start.getDate() + index);
    const key = getDateKey(day);
    const cell = document.createElement("div");
    cell.className = "calendar-day";
    cell.textContent = day.getDate();
    cell.setAttribute("aria-label", `${key}${state.completedDates.includes(key) ? " 已完成" : " 未完成"}`);
    cell.classList.toggle("outside", day.getMonth() !== month);
    cell.classList.toggle("checked", state.completedDates.includes(key));
    cell.classList.toggle("today", key === todayKey);
    grid.append(cell);
  }
}

function changeCalendarMonth(offset) {
  calendarDate = new Date(calendarDate.getFullYear(), calendarDate.getMonth() + offset, 1);
  renderCalendar();
}

function getDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function withSourceIndex(items) {
  return items.map((item, index) => ({ ...item, sourceIndex: index }));
}

function makeDailySet(items, key, salt) {
  const source = items.map((item) => item);
  let seed = hashString(`${key}-${salt}`);

  for (let index = source.length - 1; index > 0; index -= 1) {
    seed = seededNumber(seed + index);
    const swapIndex = seed % (index + 1);
    [source[index], source[swapIndex]] = [source[swapIndex], source[index]];
  }

  return source;
}

function hashString(text) {
  let hash = 2166136261;
  for (const char of text) {
    hash ^= char.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function seededNumber(seed) {
  let value = seed >>> 0;
  value ^= value << 13;
  value ^= value >>> 17;
  value ^= value << 5;
  return value >>> 0;
}

function renderGoal() {
  const input = document.querySelector("#score-goal");
  const output = document.querySelector("#score-output");
  input.value = state.goal;
  output.textContent = state.goal;
  document.querySelector("#score-message").textContent = state.goal >= 850
    ? "高分目標需要穩定累積閱讀速度與聽力耐心。"
    : "先把基礎題型和高頻字掌握，分數會更快穩住。";
}

function renderReviewList() {
  const list = document.querySelector("#review-list");
  const missed = dailyQuestions
    .map((question, index) => ({ question, index }))
    .filter((item) => state.answers[item.index] === false);

  list.innerHTML = missed.length
    ? missed.map((item) => `<li>${item.question.type}: ${item.question.explanation}</li>`).join("")
    : "<li>目前沒有錯題。做完題目後，錯題解析會集中在這裡。</li>";
}

function renderTypingPrompt() {
  const typingItem = dailyTypingPrompts[typingIndex];
  const prompt = typingItem.english;
  const input = document.querySelector("#typing-input").value;
  const promptElement = document.querySelector("#typing-prompt");
  document.querySelector("#typing-source").textContent = `來源：閱讀分頁「${typingItem.sourceTitle}」`;
  document.querySelector("#typing-translation").textContent = `中文意思：${typingItem.translation}`;

  promptElement.innerHTML = [...prompt].map((char, index) => {
    const typed = input[index];
    const classes = [];
    if (typed !== undefined) {
      classes.push(typed === char ? "correct-char" : "wrong-char");
    }
    if (index === input.length) {
      classes.push("current-char");
    }
    return `<span class="${classes.join(" ")}">${escapeText(char)}</span>`;
  }).join("");

  promptElement.querySelector(".current-char")?.scrollIntoView({
    block: "nearest",
    inline: "center"
  });
}

function updateTypingStats() {
  const prompt = dailyTypingPrompts[typingIndex].english;
  const input = document.querySelector("#typing-input").value;
  const elapsed = typingStart ? Math.max(1, Math.floor((Date.now() - typingStart) / 1000)) : 0;
  const correctChars = [...input].filter((char, index) => char === prompt[index]).length;
  const accuracy = input.length ? Math.round((correctChars / input.length) * 100) : 100;
  const wpm = elapsed ? Math.round((correctChars / 5) / (elapsed / 60)) : 0;

  document.querySelector("#typing-wpm").textContent = wpm;
  document.querySelector("#typing-accuracy").textContent = `${accuracy}%`;
  document.querySelector("#typing-time").textContent = `${elapsed}s`;

  if (input === prompt) {
    finishTyping(wpm, accuracy);
  } else {
    document.querySelector("#typing-message").textContent = "輸入時注意空格、大小寫與句尾標點。";
  }
}

function handleTypingInput() {
  if (!typingStart) {
    typingStart = Date.now();
    typingTimer = window.setInterval(updateTypingStats, 1000);
  }
  renderTypingPrompt();
  updateTypingStats();
}

function finishTyping(wpm, accuracy) {
  window.clearInterval(typingTimer);
  typingTimer = null;
  if (wpm > state.bestWpm) {
    state.bestWpm = wpm;
  }
  save();
  renderStats();
  document.querySelector("#typing-message").textContent = `完成！本次速度 ${wpm} WPM，正確率 ${accuracy}%。`;
}

function resetTyping(advance = false) {
  window.clearInterval(typingTimer);
  typingTimer = null;
  typingStart = null;
  if (advance) {
    typingIndex = (typingIndex + 1) % dailyTypingPrompts.length;
  }
  const input = document.querySelector("#typing-input");
  input.value = "";
  input.maxLength = dailyTypingPrompts[typingIndex].english.length;
  document.querySelector("#typing-wpm").textContent = "0";
  document.querySelector("#typing-accuracy").textContent = "100%";
  document.querySelector("#typing-time").textContent = "0s";
  document.querySelector("#typing-message").textContent = "按原句完整輸入，開始打字後會自動計時。";
  renderTypingPrompt();
}

function syncTypingToReading(shouldReset = true) {
  const sourceIndex = dailyReadings[readingIndex].sourceIndex;
  const nextIndex = dailyTypingPrompts.findIndex((prompt) => prompt.readingIndex === sourceIndex);
  if (nextIndex === -1) {
    return;
  }
  typingIndex = nextIndex;
  resetTyping();
  if (shouldReset) {
    document.querySelector("#typing-message").textContent = "已同步到目前閱讀文章的英打句子。";
  }
}

function escapeHtml(char) {
  return char
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll(" ", "&nbsp;");
}

function escapeText(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function normalizeWord(text) {
  return text
    .toLowerCase()
    .replace(/^[^a-z]+|[^a-z]+$/g, "");
}

function switchPracticeTab(tabName) {
  document.querySelectorAll(".tab-button").forEach((button) => {
    const isActive = button.dataset.tab === tabName;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  document.querySelectorAll(".practice-pane").forEach((pane) => {
    const isActive = pane.id === `pane-${tabName}`;
    pane.classList.toggle("active", isActive);
    pane.hidden = !isActive;
  });

  if (tabName === "typing") {
    document.querySelector("#typing-input").focus();
    renderTypingPrompt();
  }
}

document.querySelector("#next-question").addEventListener("click", () => {
  questionIndex = (questionIndex + 1) % dailyQuestions.length;
  renderQuestion();
});

document.querySelector("#prev-question").addEventListener("click", () => {
  questionIndex = (questionIndex - 1 + dailyQuestions.length) % dailyQuestions.length;
  renderQuestion();
});

document.querySelector("#vocab-card").addEventListener("click", () => {
  showingMeaning = !showingMeaning;
  renderVocab();
});

document.querySelector("#vocab-card").addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    showingMeaning = !showingMeaning;
    renderVocab();
  }
});

document.querySelector("#next-word").addEventListener("click", () => {
  vocabIndex = (vocabIndex + 1) % dailyVocab.length;
  showingMeaning = false;
  renderVocab();
});

document.querySelector("#prev-word").addEventListener("click", () => {
  vocabIndex = (vocabIndex - 1 + dailyVocab.length) % dailyVocab.length;
  showingMeaning = false;
  renderVocab();
});

document.querySelector("#known-word").addEventListener("click", () => {
  const word = dailyVocab[vocabIndex].word;
  if (!state.knownWords.includes(word)) {
    state.knownWords.push(word);
  }
  save();
  renderVocab();
  renderStats();
});

document.querySelector("#score-goal").addEventListener("input", (event) => {
  state.goal = Number(event.target.value);
  save();
  renderGoal();
});

document.querySelector("#prev-month").addEventListener("click", () => changeCalendarMonth(-1));
document.querySelector("#next-month").addEventListener("click", () => changeCalendarMonth(1));

document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => switchPracticeTab(button.dataset.tab));
});

document.querySelector("#reading-passage").addEventListener("click", showWordDefinition);
document.querySelector("#typing-input").addEventListener("input", handleTypingInput);
document.querySelector("#typing-restart").addEventListener("click", () => resetTyping());
document.querySelector("#typing-sync-reading").addEventListener("click", () => syncTypingToReading());
document.querySelector("#typing-next").addEventListener("click", () => resetTyping(true));

renderQuestion();
renderReading();
renderVocab();
renderTasks();
renderGoal();
renderStats();
renderReviewList();
renderCalendar();
resetTyping();
