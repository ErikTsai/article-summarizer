import { process } from './env.js'

// const apiKey = "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";

const url = "https://api.openai.com/v1/chat/completions";
const apiKey = process.env.OPENAI_API_KEY;

let summarizerActivated = false;
let generateBtnEl = document.getElementById("generate-btn");
let inputDescEl = document.getElementById("input-desc");
let inputBoxEl = document.getElementById("input-box");
let pasteFieldEl = document.getElementById("paste-field");
let wordCountEl = document.getElementById("word-count");


generateBtnEl.addEventListener("click", () => {
  if (summarizerActivated === false) {
    generateBtnEl.textContent = "Use again?";
    summarizerActivated = true;
    inputDescEl.innerHTML = "";
    inputBoxEl.innerHTML = "";
    summarizeText(pasteFieldEl.value, wordCountEl.value);
    
  } else {
    location.reload();
  }
});


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
          content: `Summarize in ${words} words: ${text}`,
        },
      ],
    }),
  })
    .then((res) => res.json())
    .then((data) => inputBoxEl.innerHTML = `<p id="output-text">${data.choices[0].message.content}</p>`);
}




