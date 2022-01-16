const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
};

const myButton = document.getElementById("my_button");
const giftImg1 = document.getElementById("my_gift_01");
const mySpinner = document.getElementById("my_spinner");

const changeSrc = (num) => {
  giftImg1.src = `./img/00${num}.jpeg`;
};

const checkimgSrc = (result) => {
  //   5 >= result && changeSrc(1);
  //   (21 >= result && result >= 6) && changeSrc(2);
  //   result >= 22 && changeSrc(3);
  //   result >= 22 || changeSrc(3);
  if (5 >= result) {
    giftImg1.src = "./img/001.jpeg";
  }
  if (21 >= result && result >= 6) {
    giftImg1.src = "./img/002.jpeg";
  }
  if (result >= 22) {
    giftImg1.src = "./img/003.jpeg";
  }
  console.log("giftNumberArray", giftNumberArray);
};

const giftNumberArray = [];

for (let i = 0; i < 100; i++) {
  giftNumberArray.push(i + 1);
}

const shuffle = (array) => {
  var m = array.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
};

shuffle(giftNumberArray);

console.log("giftNumberArray", giftNumberArray);

// 三獎80, 二獎15, 一獎5
myButton.addEventListener("click", (event) => {
  event.preventDefault();
  mySpinner.setAttribute("style", "display:block");
  giftImg1.setAttribute("style", "display:none");
  //   const result = getRandomInt(1, 101);
  const result = giftNumberArray.pop();
  setTimeout(() => {
    mySpinner.setAttribute("style", "display:none");
    giftImg1.setAttribute("style", "display:block");
    checkimgSrc(result);
  }, 1000);
});


let message ='hello world!';
function sayHello(){
  console.log(message);
  let message ="Hello!!";
  console.log(message);
}

sayHello();