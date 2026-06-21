const hangul = {
  consonants: [
    { symbol: "ㄱ", name: "기역 giyeok", sound: "介於 g / k，字首較輕。", example: "가수 gasu｜歌手" },
    { symbol: "ㄴ", name: "니은 nieun", sound: "像英文 n。", example: "노래 norae｜歌曲" },
    { symbol: "ㄷ", name: "디귿 digeut", sound: "介於 d / t。", example: "달 dal｜月亮" },
    { symbol: "ㄹ", name: "리을 rieul", sound: "介於 r / l，舌尖快速輕彈。", example: "리듬 rideum｜節奏" },
    { symbol: "ㅁ", name: "미음 mieum", sound: "像英文 m。", example: "마음 maeum｜心" },
    { symbol: "ㅂ", name: "비읍 bieup", sound: "介於 b / p。", example: "빛 bit｜光" },
    { symbol: "ㅅ", name: "시옷 siot", sound: "像 s；遇到 ㅣ 時接近 sh。", example: "사랑 sarang｜愛" },
    { symbol: "ㅇ", name: "이응 ieung", sound: "字首不發音，字尾發 ng。", example: "음악 eumak｜音樂" },
    { symbol: "ㅈ", name: "지읒 jieut", sound: "介於 j / ch。", example: "지금 jigeum｜現在" },
    { symbol: "ㅊ", name: "치읓 chieut", sound: "送氣的 ch。", example: "친구 chingu｜朋友" },
    { symbol: "ㅋ", name: "키읔 kieuk", sound: "送氣的 k。", example: "코 ko｜鼻子" },
    { symbol: "ㅌ", name: "티읕 tieut", sound: "送氣的 t。", example: "토요일 toyoil｜星期六" },
    { symbol: "ㅍ", name: "피읖 pieup", sound: "送氣的 p。", example: "파도 pado｜海浪" },
    { symbol: "ㅎ", name: "히읗 hieut", sound: "像英文 h。", example: "하늘 haneul｜天空" }
  ],
  vowels: [
    { symbol: "ㅏ", name: "아 a", sound: "像中文「啊」。", example: "나 na｜我" },
    { symbol: "ㅑ", name: "야 ya", sound: "像「呀」。", example: "야구 yagu｜棒球" },
    { symbol: "ㅓ", name: "어 eo", sound: "嘴巴張開，近似「喔」但更後方。", example: "너 neo｜你" },
    { symbol: "ㅕ", name: "여 yeo", sound: "在 eo 前加 y。", example: "여기 yeogi｜這裡" },
    { symbol: "ㅗ", name: "오 o", sound: "圓唇的 o。", example: "오늘 oneul｜今天" },
    { symbol: "ㅛ", name: "요 yo", sound: "在 o 前加 y。", example: "요리 yori｜料理" },
    { symbol: "ㅜ", name: "우 u", sound: "像中文「嗚」。", example: "우리 uri｜我們" },
    { symbol: "ㅠ", name: "유 yu", sound: "像英文 you。", example: "유리 yuri｜玻璃" },
    { symbol: "ㅡ", name: "으 eu", sound: "嘴唇放平，聲音從喉嚨後方發出。", example: "음악 eumak｜音樂" },
    { symbol: "ㅣ", name: "이 i", sound: "像中文「衣」。", example: "이름 ireum｜名字" },
    { symbol: "ㅐ", name: "애 ae", sound: "接近英文 e。", example: "내 nae｜我的" },
    { symbol: "ㅔ", name: "에 e", sound: "現代口語與 ㅐ 很接近。", example: "세상 sesang｜世界" }
  ]
};

const syllableWords = [
  { word: "사랑", romanization: "sa-rang", meaning: "愛", tip: "랑 的尾音 ㅇ 是 ng。", parts: ["ㅅ + ㅏ = 사 (sa)", "ㄹ + ㅏ + ㅇ = 랑 (rang)"] },
  { word: "음악", romanization: "eu-mak", meaning: "音樂", tip: "ㅡ 的嘴唇要放平；악 的尾音 ㄱ 收住。", parts: ["ㅇ + ㅡ + ㅁ = 음 (eum)", "ㅇ + ㅏ + ㄱ = 악 (ak)"] },
  { word: "오늘", romanization: "o-neul", meaning: "今天", tip: "늘 的 ㅡ 不要念成 u。", parts: ["ㅇ + ㅗ = 오 (o)", "ㄴ + ㅡ + ㄹ = 늘 (neul)"] },
  { word: "꿈", romanization: "kkum", meaning: "夢想", tip: "ㄲ 是緊音，起音短而有力。", parts: ["ㄲ + ㅜ + ㅁ = 꿈 (kkum)"] },
  { word: "같이", romanization: "ga-chi", meaning: "一起", tip: "같이 實際常念成 가치，ㅌ 遇 ㅣ 產生顎化。", parts: ["ㄱ + ㅏ + ㅌ = 같 (gat)", "ㅇ + ㅣ = 이 (i) → chi"] },
  { word: "빛", romanization: "bit", meaning: "光", tip: "尾音 ㅊ 收成 t 音，不送氣。", parts: ["ㅂ + ㅣ + ㅊ = 빛 (bit)"] }
];

const songVocabulary = [
  { word: "아주", reading: "aju", meaning: "非常、很", example: "오늘 아주 좋아요.｜今天非常好。" },
  { word: "예쁘다", reading: "yeppeuda", meaning: "漂亮、可愛", example: "꽃이 정말 예뻐요.｜花真的很漂亮。" },
  { word: "박수", reading: "baksu", meaning: "掌聲、拍手", example: "같이 박수 쳐요.｜一起拍手吧。" },
  { word: "울다", reading: "ulda", meaning: "哭", example: "오늘은 울지 않아요.｜今天不哭。" },
  { word: "손오공", reading: "sonogong", meaning: "孫悟空", example: "힘이 아주 강해요.｜力量非常強。" },
  { word: "음악", reading: "eumak", meaning: "音樂", example: "음악을 매일 들어요.｜每天聽音樂。" }
];

const songLessons = [
  {
    title: "아주 NICE",
    level: "Level 1｜明亮節奏",
    focus: "練習 아주、좋다，以及每拍一個音節的跟讀。",
    korean: "오늘 기분이 아주 좋아요",
    reading: "o-neul gi-bun-i a-ju jo-a-yo",
    meaning: "今天心情非常好。",
    points: [["아주", "非常、很"], ["기분", "心情"], ["좋아요", "很好、喜歡"]]
  },
  {
    title: "예쁘다 (Pretty U)",
    level: "Level 1｜描述感受",
    focus: "練習緊音 ㅃ 與形容詞 예쁘다。",
    korean: "웃는 모습이 정말 예뻐요",
    reading: "un-neun mo-seub-i jeong-mal ye-ppeo-yo",
    meaning: "笑著的樣子真的很漂亮。",
    points: [["웃다", "笑"], ["모습", "模樣"], ["정말", "真的"]]
  },
  {
    title: "박수 (CLAP)",
    level: "Level 2｜收音節奏",
    focus: "練習 박、같、힘 等帶 받침 的短促收音。",
    korean: "우리 같이 힘차게 박수 쳐요",
    reading: "u-ri ga-chi him-cha-ge bak-su chyeo-yo",
    meaning: "我們一起有力地拍手吧。",
    points: [["우리", "我們"], ["같이", "一起"], ["힘차게", "有力地"]]
  },
  {
    title: "울고 싶지 않아",
    level: "Level 2｜情緒句型",
    focus: "練習 -고 싶다「想要做……」與否定 지 않다。",
    korean: "오늘은 혼자 있고 싶지 않아요",
    reading: "o-neu-reun hon-ja it-go sip-ji a-na-yo",
    meaning: "今天不想一個人待著。",
    points: [["혼자", "獨自"], ["있다", "在、存在"], ["싶지 않다", "不想要"]]
  },
  {
    title: "손오공 (Super)",
    level: "Level 2｜強拍發音",
    focus: "練習緊音、送氣音和短句強拍。",
    korean: "우리는 더 높이 올라가요",
    reading: "u-ri-neun deo no-pi ol-la-ga-yo",
    meaning: "我們往更高處前進。",
    points: [["더", "更、再"], ["높이", "高高地"], ["올라가다", "上升"]]
  },
  {
    title: "음악의 신",
    level: "Level 2｜助詞理解",
    focus: "練習 의「……的」與 을/를 受詞助詞。",
    korean: "우리는 음악을 함께 즐겨요",
    reading: "u-ri-neun eu-ma-geul ham-kke jeul-gyeo-yo",
    meaning: "我們一起享受音樂。",
    points: [["음악", "音樂"], ["함께", "一起"], ["즐기다", "享受"]]
  }
];

const tasks = [
  { id: "letters", title: "字母 5 個", detail: "點讀子音或母音" },
  { id: "syllables", title: "音節 3 組", detail: "看拆解並播放發音" },
  { id: "song", title: "歌曲課 1 堂", detail: "完成一個情境練習句" },
  { id: "lyrics", title: "歌詞 2 行", detail: "貼上並逐行跟讀" }
];

const state = JSON.parse(localStorage.getItem("hangeulBeatState") || "{}");
state.letters ||= [];
state.words ||= [];
state.lines ||= 0;
state.syllables ||= [];
state.completedSongs ||= [];
state.tasks ||= {};
state.completedDates ||= [];
state.taskDate ||= dateKey(new Date());

if (state.taskDate !== dateKey(new Date())) {
  state.tasks = {};
  state.taskDate = dateKey(new Date());
}

let letterMode = "consonants";
let letterIndex = 0;
let syllableIndex = 0;
let songIndex = 0;
let calendarDate = new Date();

const save = () => localStorage.setItem("hangeulBeatState", JSON.stringify(state));

function speakKorean(text) {
  if (!("speechSynthesis" in window)) {
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ko-KR";
  utterance.rate = 0.72;
  window.speechSynthesis.speak(utterance);
}

function renderStats() {
  document.querySelector("#stat-letters").textContent = state.letters.length;
  document.querySelector("#stat-words").textContent = state.words.length;
  document.querySelector("#stat-lines").textContent = state.lines;
  document.querySelector("#stat-days").textContent = state.completedDates.length;
}

function renderHangul() {
  const letters = hangul[letterMode];
  const grid = document.querySelector("#hangul-grid");
  grid.innerHTML = "";

  letters.forEach((letter, index) => {
    const button = document.createElement("button");
    button.className = "letter-card";
    button.type = "button";
    button.textContent = letter.symbol;
    button.classList.toggle("active", index === letterIndex);
    button.addEventListener("click", () => {
      letterIndex = index;
      if (!state.letters.includes(letter.symbol)) {
        state.letters.push(letter.symbol);
      }
      state.tasks.letters = state.letters.length >= 5;
      updateCheckIn();
      save();
      renderStats();
      renderTasks();
      renderCalendar();
      renderHangul();
    });
    grid.append(button);
  });

  const current = letters[letterIndex];
  document.querySelector("#letter-symbol").textContent = current.symbol;
  document.querySelector("#letter-name").textContent = current.name;
  document.querySelector("#letter-sound").textContent = current.sound;
  document.querySelector("#letter-example").textContent = current.example;
}

function renderSyllables() {
  const picker = document.querySelector("#word-picker");
  picker.innerHTML = "";

  syllableWords.forEach((item, index) => {
    const button = document.createElement("button");
    button.className = "word-chip";
    button.type = "button";
    button.textContent = item.word;
    button.classList.toggle("active", index === syllableIndex);
    button.addEventListener("click", () => {
      syllableIndex = index;
      renderSyllables();
    });
    picker.append(button);
  });

  const item = syllableWords[syllableIndex];
  document.querySelector("#syllable-word").textContent = item.word;
  document.querySelector("#syllable-romanization").textContent = item.romanization;
  document.querySelector("#syllable-meaning").textContent = item.meaning;
  document.querySelector("#syllable-tip").textContent = item.tip;
  document.querySelector("#syllable-blocks").innerHTML = item.parts
    .map((part) => {
      const [formula, reading] = part.split(" = ");
      return `<div class="syllable-block"><strong>${escapeText(formula.split(" + ").join(""))}</strong><span>${escapeText(formula)} = ${escapeText(reading || "")}</span></div>`;
    })
    .join("");
}

function renderVocabulary() {
  const grid = document.querySelector("#vocab-grid");
  grid.innerHTML = "";
  songVocabulary.forEach((item) => {
    const button = document.createElement("button");
    button.className = "vocab-card";
    button.type = "button";
    button.classList.toggle("known", state.words.includes(item.word));
    button.innerHTML = `
      <small>${escapeText(item.reading)}</small>
      <strong>${escapeText(item.word)}</strong>
      <span>${escapeText(item.meaning)}</span>
      <span class="vocab-example">${escapeText(item.example)}</span>
    `;
    button.addEventListener("click", () => {
      if (!state.words.includes(item.word)) {
        state.words.push(item.word);
      }
      speakKorean(item.word);
      save();
      renderVocabulary();
      renderStats();
    });
    grid.append(button);
  });
}

function renderSongs() {
  const list = document.querySelector("#song-list");
  list.innerHTML = "";
  songLessons.forEach((song, index) => {
    const button = document.createElement("button");
    button.className = "song-button";
    button.type = "button";
    button.classList.toggle("active", index === songIndex);
    button.innerHTML = `<strong>${escapeText(song.title)}</strong><span>${escapeText(song.level)}</span>`;
    button.addEventListener("click", () => {
      songIndex = index;
      renderSongs();
    });
    list.append(button);
  });

  const song = songLessons[songIndex];
  document.querySelector("#song-level").textContent = song.level;
  document.querySelector("#song-title").textContent = song.title;
  document.querySelector("#song-focus").textContent = song.focus;
  document.querySelector("#song-practice-korean").textContent = song.korean;
  document.querySelector("#song-practice-reading").textContent = song.reading;
  document.querySelector("#song-practice-meaning").textContent = song.meaning;
  document.querySelector("#lesson-points").innerHTML = song.points
    .map(([word, meaning]) => `<div class="lesson-point"><strong>${escapeText(word)}</strong><span>${escapeText(meaning)}</span></div>`)
    .join("");

  const completeButton = document.querySelector("#complete-song-lesson");
  completeButton.textContent = state.completedSongs.includes(song.title) ? "本課已完成" : "完成這堂歌曲課";
}

function analyzeLyrics() {
  const text = document.querySelector("#lyrics-input").value.trim();
  const lines = text.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  const result = document.querySelector("#lyric-lines");
  document.querySelector("#lyrics-count").textContent = `${lines.length} 行`;

  if (!lines.length) {
    result.innerHTML = '<div class="empty-state">請先貼上至少一行韓語歌詞。</div>';
    return 0;
  }

  result.innerHTML = lines.map((line, index) => `
    <div class="lyric-line">
      <div>
        <strong>${escapeText(line)}</strong>
        <span>${escapeText(romanizeText(line))}</span>
      </div>
      <button class="icon-button speak-button" type="button" data-line="${index}" aria-label="播放這一行">▶</button>
    </div>
  `).join("");

  result.querySelectorAll("[data-line]").forEach((button) => {
    button.addEventListener("click", () => {
      speakKorean(lines[Number(button.dataset.line)]);
      state.lines += 1;
      save();
      renderStats();
    });
  });
  return lines.length;
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
      updateCheckIn();
      save();
      renderCalendar();
      renderStats();
    });
    list.append(label);
  });
}

function updateCheckIn() {
  const today = dateKey(new Date());
  const completed = tasks.every((task) => state.tasks[task.id]);
  if (completed && !state.completedDates.includes(today)) {
    state.completedDates.push(today);
    state.completedDates.sort();
  }
  if (!completed) {
    state.completedDates = state.completedDates.filter((date) => date !== today);
  }
}

function renderCalendar() {
  const year = calendarDate.getFullYear();
  const month = calendarDate.getMonth();
  const start = new Date(year, month, 1 - new Date(year, month, 1).getDay());
  const today = dateKey(new Date());
  const monthKey = `${year}-${String(month + 1).padStart(2, "0")}`;
  const completed = state.completedDates.filter((date) => date.startsWith(monthKey)).length;

  document.querySelector("#calendar-title").textContent = `${year} 年 ${month + 1} 月`;
  document.querySelector("#calendar-summary").textContent = `本月完成 ${completed} 天；四項任務都完成後自動打卡。`;

  const grid = document.querySelector("#calendar-grid");
  grid.innerHTML = "";
  for (let index = 0; index < 42; index += 1) {
    const day = new Date(start);
    day.setDate(start.getDate() + index);
    const key = dateKey(day);
    const cell = document.createElement("div");
    cell.className = "calendar-day";
    cell.textContent = day.getDate();
    cell.classList.toggle("outside", day.getMonth() !== month);
    cell.classList.toggle("checked", state.completedDates.includes(key));
    cell.classList.toggle("today", key === today);
    grid.append(cell);
  }
}

function romanizeText(text) {
  return [...text].map((char) => romanizeSyllable(char)).join("").replace(/\s+/g, " ").trim();
}

function romanizeSyllable(char) {
  const code = char.charCodeAt(0);
  if (code < 0xac00 || code > 0xd7a3) {
    return char;
  }

  const initial = ["g", "kk", "n", "d", "tt", "r", "m", "b", "pp", "s", "ss", "", "j", "jj", "ch", "k", "t", "p", "h"];
  const medial = ["a", "ae", "ya", "yae", "eo", "e", "yeo", "ye", "o", "wa", "wae", "oe", "yo", "u", "wo", "we", "wi", "yu", "eu", "ui", "i"];
  const final = ["", "k", "k", "k", "n", "n", "n", "t", "l", "k", "m", "p", "l", "l", "p", "l", "m", "p", "p", "t", "t", "ng", "t", "t", "k", "t", "p", "h"];
  const value = code - 0xac00;
  const initialIndex = Math.floor(value / 588);
  const medialIndex = Math.floor((value % 588) / 28);
  const finalIndex = value % 28;
  return initial[initialIndex] + medial[medialIndex] + final[finalIndex];
}

function dateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function escapeText(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => {
    const name = button.dataset.tab;
    document.querySelectorAll(".tab-button").forEach((item) => {
      const active = item.dataset.tab === name;
      item.classList.toggle("active", active);
      item.setAttribute("aria-selected", String(active));
    });
    document.querySelectorAll(".learning-pane").forEach((pane) => {
      pane.hidden = pane.id !== `pane-${name}`;
    });
  });
});

document.querySelectorAll("[data-letter-mode]").forEach((button) => {
  button.addEventListener("click", () => {
    letterMode = button.dataset.letterMode;
    letterIndex = 0;
    document.querySelectorAll("[data-letter-mode]").forEach((item) => {
      item.classList.toggle("active", item.dataset.letterMode === letterMode);
    });
    renderHangul();
  });
});

document.querySelector("#speak-letter").addEventListener("click", () => {
  const example = hangul[letterMode][letterIndex].example.split(" ")[0];
  speakKorean(example);
});

document.querySelector("#speak-word").addEventListener("click", () => {
  const word = syllableWords[syllableIndex].word;
  speakKorean(word);
  if (!state.syllables.includes(word)) {
    state.syllables.push(word);
  }
  state.tasks.syllables = state.syllables.length >= 3;
  updateCheckIn();
  save();
  renderTasks();
  renderCalendar();
});

document.querySelector("#speak-practice-line").addEventListener("click", () => {
  speakKorean(songLessons[songIndex].korean);
});

document.querySelector("#complete-song-lesson").addEventListener("click", () => {
  const title = songLessons[songIndex].title;
  if (!state.completedSongs.includes(title)) {
    state.completedSongs.push(title);
  }
  state.tasks.song = true;
  updateCheckIn();
  save();
  renderSongs();
  renderTasks();
  renderCalendar();
});

document.querySelector("#analyze-lyrics").addEventListener("click", () => {
  const lineCount = analyzeLyrics();
  state.tasks.lyrics = lineCount >= 2;
  updateCheckIn();
  save();
  renderTasks();
  renderCalendar();
});

document.querySelector("#clear-lyrics").addEventListener("click", () => {
  document.querySelector("#lyrics-input").value = "";
  document.querySelector("#lyrics-count").textContent = "0 行";
  document.querySelector("#lyric-lines").innerHTML = '<div class="empty-state">貼上歌詞後，這裡會顯示韓文、近似羅馬拼音與播放按鈕。</div>';
});

document.querySelector("#prev-month").addEventListener("click", () => {
  calendarDate = new Date(calendarDate.getFullYear(), calendarDate.getMonth() - 1, 1);
  renderCalendar();
});

document.querySelector("#next-month").addEventListener("click", () => {
  calendarDate = new Date(calendarDate.getFullYear(), calendarDate.getMonth() + 1, 1);
  renderCalendar();
});

renderHangul();
renderSyllables();
renderVocabulary();
renderSongs();
renderTasks();
renderCalendar();
renderStats();
