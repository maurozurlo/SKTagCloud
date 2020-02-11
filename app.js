//Setup
const p = document.getElementById('content');
let currentfont = 0;
const fonts = ['tox', '1942', 'OldNewspaperTypes'];

//Helper functions
function setCharAt(str, index, chr) {
  if (index > str.length - 1) return str;
  return str.substr(0, index) + chr + str.substr(index + 1);
}

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function swapFont() {
  //Remove current class
  p.classList.toggle(`font-${fonts[currentfont]}`);

  if (currentfont + 1 <= fonts.length - 1) {
    p.classList.toggle(`font-${fonts[currentfont + 1]}`);
    currentfont = currentfont + 1;
  } else {
    p.classList.toggle(`font-${fonts[0]}`);
    currentfont = 0;
  }
}

function refresh() {
  const word = document.getElementById('word').value;
  const variations = document.getElementById('repetitions').value;
  //Cleanup
  let index = 0;
  content.innerHTML = '';

  while (index < variations) {

    let variation = word;

    for (let i = 0; i < word.length; i++) {
      let temp;
      if (Math.random() > .5) {
        temp = variation[i].toUpperCase();
      } else {
        temp = variation[i].toLowerCase();
      }
      variation = setCharAt(variation, i, temp);
    }
    let style = `font-size: ${randomIntFromInterval(9, 24)}px; font-weight: bold; line-height: ${Math.random()}; opacity: ${Math.random() * 1.5}`;
    content.innerHTML += ` <span style='${style}'>${variation}</span>`;
    index++;
  }
}