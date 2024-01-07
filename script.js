const apiKey = "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";

const url = "https://api.openai.com/v1/chat/completions";

function summarizeText(text, words) {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are an article summarizer.",
        },
        {
          role: "user",
          content: `Summarize in ${words} words or less: ${text}`,
        },
      ],
    }),
  })
    .then((res) => res.json())
    .then((data) => data.choices[0].message.content);
}
console.log(summarizeText(,))
// let summarizerActivated = true;
// let generateBtnEl = document.getElementById("generate-btn");
// let inputDescEl = document.getElementById("input-desc");
// let inputBoxEl = document.getElementById("input-box");
// let pasteFieldEl = document.getElementById("paste-field");
// let wordCountEl = document.getElementById("word-count");

// generateBtnEl.addEventListener("click", () => {
//   let words = summarizeText(pasteFieldEl.value, wordCountEl.value);
//   if (summarizerActivated === false) {
//     generateBtnEl.textContent = "Use again?";
//     summarizerActivated = true;
//     inputDescEl.innerHTML = "";
//     inputBoxEl.innerHTML = `<p id="output-text">${words}</p>`;
//   } else {
//     generateBtnEl.textContent = "Generate";
//     summarizerActivated = false;
//     inputDescEl.innerHTML = `Desired Word Count: <input id="word-count" type="text" />`;
//     inputBoxEl.innerHTML = `<textarea
//     id="paste-field"
//     maxlength="10000"
//     placeholder="Paste text here..."
//     required=""
//   ></textarea>`;
//   }
// });
