const secondHand = document.querySelector(".second");
const minuteHand = document.querySelector(".minute");
const hourHand = document.querySelector(".hour");

const setClock = () => {
  const currentDate = new Date();

  const secondsRatio = currentDate.getSeconds() / 60;
  console.log("secondsDeg", secondsRatio * 360);
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  console.log("minutesDeg", minutesRatio * 360);
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
  console.log("hoursDeg", hoursRatio * 360);

  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
};

const setRotation = (element, rotationRatio) => {
  element.style.setProperty("--rotation", rotationRatio * 360);
};

setInterval(setClock, 1000);

setClock();
