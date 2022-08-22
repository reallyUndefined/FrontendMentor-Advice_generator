// https://api.adviceslip.com/advice
async function getData() {
  const res = await fetch("https://api.adviceslip.com/advice");
  return await res.json();
}

const adviceCard = document.querySelector("main");

async function setAdvice() {
  const { slip } = await getData();
  adviceCard.querySelector("span").innerText = `ADVICE #${slip.id}`;
  adviceCard.querySelector("h1").innerText = `"${slip.advice}"`;
}

setAdvice();

adviceCard.querySelector("button").addEventListener("click", () => {
  setAdvice();
});
