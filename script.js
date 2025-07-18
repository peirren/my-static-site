const fortunes = [
  { 
    title: "00 Start here｜開始於此",
    body: "歡迎來到「育兒禪」——一套面向家庭日常的情緒共修練習，聚焦親子關係中的覺察、表達與修復。這裡不是要你學會做完美父母，而是陪伴你在混亂與愛中，找到內在安住與連結的力量。隨意瀏覽條目，也可依編號一條條體會。" 
  },
  { title: "育兒不是戰爭", body: "別用「對錯」的戰場思維看待孩子或自己。家庭是溫柔而真實的生長基地，不是得分遊戲。慢慢來，比拼贏更好。" },
  { title: "小家庭也有大道", body: "家庭成員不必多，深度陪伴就能成就大影響。不是越努力越愛，而是越在一起越被看見。最微小的練習，是最接近內在的修行。" },
  { title: "情緒是資訊，不是失誤", body: "哭、吵、退縮，都是訊號。不是失控，而是舒緩壓力的語言。覺察它們，聆聽它們，才能清楚看見自己與關係的真實狀態。" },
  { title: "行動即修", body: "多想多怕，都不如小步前進一點。情緒卡片、對話練習、靜心呼吸：哪怕只有三分鐘，都是進步。" },
  { title: "每月重設一次", body: "選一個主題（如焦慮、比較、依賴），給這個月一個練習計畫。覺察→感受→語言→回溫。名字叫「育兒禪月」。" },
  { title: "不賣焦慮，也不壓榨愛", body: "我們不教父母變能幹，而是變自在。這裡沒有「完美教養指南」，只有陪你一起說出「我累了」、「我也需要休息」。" },
  { title: "8/8/8 家庭節奏", body: "一天分三部分：情緒覺察、關係陪伴、個人休息。潛移默化，家庭的內在節奏才能平衡、有韻律。" },
  { title: "不用即時回應", body: "孩子哭，你不一定要馬上講道理；家人提議，不一定要馬上接受。給自己也給彼此一些空間，才能深化真正的對話。" },
  { title: "慢喜悅的累積", body: "教養沒快速成就，比的是持續的陪伴。當你放慢腳步，生活裡的小小進步，就會累積成深刻的改變。" },
  { title: "開放情緒的練習場", body: "在這裡，每一場爭吵、每一次崩潰，都不是失敗，而是關係重新卡位、重新理解的契機。育兒禪，是一場修復修行。" },
  { title: "我們相信：家，是可以住下來的情緒場所", body: "這裡不是看起來好的家，而是感覺得被看見、被允許的家。育兒禪不是你做了什麼，而是你怎麼活在當下，怎麼對自己與家人說話。" }
];

const listEl = document.getElementById("fortuneList");

fortunes.forEach((item, index) => {
  const li = document.createElement("li");
  li.className = "fortune-item";

  const indexDiv = document.createElement("div");
  indexDiv.className = "fortune-index";
  indexDiv.textContent = `${index + 1}.`;

  const contentDiv = document.createElement("div");
  contentDiv.className = "fortune-content";

  const title = document.createElement("div");
  title.className = "fortune-title";
  title.textContent = item.title;

  const body = document.createElement("div");
  body.className = "fortune-body";
  body.textContent = item.body;

  title.addEventListener("click", () => {
    const isActive = title.classList.contains("active");

    // 移除所有 active 樣式
    document.querySelectorAll(".fortune-title").forEach(el => el.classList.remove("active"));
    document.querySelectorAll(".fortune-body").forEach(el => el.classList.remove("active"));

    // 若原本沒打開，就打開這個
    if (!isActive) {
      title.classList.add("active");
      body.classList.add("active");
    }
  });

  contentDiv.appendChild(title);
  contentDiv.appendChild(body);

  li.appendChild(indexDiv);
  li.appendChild(contentDiv);

  listEl.appendChild(li);
});