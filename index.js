async function getData() {
  const res = await fetch("https://api.adviceslip.com/advice", {
    cache: "no-cache",
  });
  if (!res.ok) throw new Error(res.statusText);
  return await res.json();
}

const adviceCard = document.querySelector("main");

async function setAdvice() {
  try {
    const { slip } = await getData();
    adviceCard.querySelector("span").innerText = `ADVICE #${slip.id}`;
    adviceCard.querySelector("h1").innerText = `"${slip.advice}"`;
  } catch (err) {
    console.error(err);
  }
}

setAdvice();

adviceCard.querySelector("button").addEventListener("click", () => {
  setAdvice();
});
