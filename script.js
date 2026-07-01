const pickNumberBtnElement = document.getElementById("pickNumberBtn");
const resultBtnElement = document.getElementById("result");
const lotterySheetContainer = document.getElementById("lotterySheetContainer");
const tickSound = new Audio("ball Tap.wav");
const gameOver = new Audio("GameOver.wav");
const gifts = [
  "₹100 Cash",
  "Toy Car",
  "Chocolate Box",
  "₹500 Cash",
  "Smartphone Cover",
  "Book",
  "HeadPhones",
  "₹50 Cash",
  "Gift Voucher",
  "Watch",
  "Teddy Bear",
  "Bluetooth Speaker",
  "Movie Ticket",
  "₹200 Cash",
  "Puzzle Game",
  "Perfume",
  "Sunglasses",
  "₹1000 Cash",
  "BoardGame",
  "FitnessBand",
  "Digital Clock",
  "Lamp",
  "Shopping Voucher",
  "Laptop Bag",
  "Wireless Mouse",
  "Travel Mug",
  "Notebook Set",
  "Gaming MousePad",
  "₹250 Cash",
  "KeyChain",
  "Water Bottle",
  "Portable Charger",
  "Desk Organizer",
  "Cooking Set",
  "Action Figure",
  "₹300 Cash",
  "Travel Pillow",
  "Mini BackPack",
  "Personalized Mug",
  "Gaming Controller",
  "Camera Strap",
  "Toy Robot",
  "Ear Rings",
  "Ring",
  "Sticker Packet",
  "Bangles",
  "Marker",
  "BedSheet",
  "Shoes",
  "Balloons",
];
console.log(gifts);
pickNumberBtnElement.addEventListener("click", function () {
  // simple loop
  for (let i = 1; i < 50; i++) {
    document.getElementById(i).classList.remove("winningBox");
  }
  resultBtnElement.textContent = `Please Wait...`;
  // setTimeout(function () {
  //   let randomNumber = Math.random() * 50;
  //   let drawnNumber = Math.floor(randomNumber) + 1;
  //   const gift = gifts[drawnNumber - 1];
  //   resultBtnElement.textContent = `Hey!!! You have got ${drawnNumber}, and you won ${gift}`;
  //   document.getElementById(drawnNumber).classList.add("winningBox");
  // }, 5000);
  let secondsCount = 0;
  const intervalId = setInterval(function () {
    tickSound.pause();
    tickSound.currentTime = 0;
    tickSound.play();
    secondsCount = secondsCount + 1;
    const randomBox = Math.floor(Math.random() * 50) + 1;
    console.log(randomBox);
    for (let i = 1; i <= 50; i++) {
      if (i === randomBox) {
        document.getElementById(i).classList.add("highlightedBox");
      } else {
        document.getElementById(i).classList.remove("highlightedBox");
      }
    }
    // document.getElementById(randomBox).classList.add("highlightedBox");
    if (secondsCount === 5) {
      let randomNumber = Math.random() * 50;
      let drawnNumber = Math.floor(randomNumber) + 1;
      const gift = gifts[drawnNumber - 1];
      resultBtnElement.textContent = `Hey!!! You have got ${drawnNumber}, and you won ${gift}`;
      document.getElementById(randomBox).classList.remove("highlightedBox");
      document.getElementById(drawnNumber).classList.add("winningBox");
      gameOver.pause();
      gameOver.currentTime = 0;
      gameOver.play();
      clearInterval(intervalId);
    }
  }, 1000);
});

gifts.forEach(function (value, i) {
  const boxElement = `<div class="box"id="${i + 1}">${i + 1}. ${value}</div> `;
  console.log(boxElement);
  lotterySheetContainer.insertAdjacentHTML("beforeend", boxElement);
});
