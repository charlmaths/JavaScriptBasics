// JS function to convert temperature and taking user inputs

document.addEventListener("DOMContentLoaded", () => {
  const inputCel = document.getElementById("tempCelcius");
  const btnCel = document.getElementById("buttonCel");
  const paraCel = document.getElementById("paraCel");

  const inputFar = document.getElementById("tempFarenheit");
  const btnFar = document.getElementById("buttonFar");
  const paraFar = document.getElementById("paraFar");

  btnCel.addEventListener("click", () => {
    const tempInputCel = inputCel.value;
    const tempIntegerCel = Number(tempInputCel);
    const convertedTempIntCel = tempIntegerCel * 1.8 + 32;

    paraCel.textContent = convertedTempIntCel;
  });

  btnFar.addEventListener("click", () => {
    const tempInputFar = inputFar.value;
    const tempIntegerFar = Number(tempInputFar);
    const convertedTempIntFar = ((tempIntegerFar - 32) * 5) / 9;

    paraFar.textContent = convertedTempIntFar;
  });
});
