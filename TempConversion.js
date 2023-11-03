// JS function to convert temperature and taking user inputs

document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("input");
  const btn = document.querySelector("button");
  const para = document.querySelector("p");

  btn.addEventListener("click", () => {
    const tempInput = input.value;
    const tempInteger = Number(tempInput);
    const convertedTempInteger = tempInteger * 1.8 + 32;

    para.textContent = convertedTempInteger;
  });
});
