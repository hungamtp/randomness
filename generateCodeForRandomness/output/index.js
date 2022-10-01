const number = ['.', '.', '.', '.'];
const color = ['┐', '└', '	┴', '┬'];
const text0 = document.getElementById('text0');
text0.innerHTML = number[0];
function textF0() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  if (a) {
    if (b) {
      let valueXIncrease = text0.x['animVal'][0].value + 1;
      text0.style.x = valueXIncrease;
      text0.setAttribute('x', valueXIncrease);
      text0.innerHTML = number[0];
    } else {
      let valueXIncrease = text0.x['animVal'][0].value - 1;
      text0.style.x = valueXIncrease;
      text0.setAttribute('x', valueXIncrease);
      text0.innerHTML = number[1];
    }
  } else {
    if (b) {
      let valueXIncrease = text0.y['animVal'][0].value + 1;
      text0.style.y = valueXIncrease;
      text0.setAttribute('y', valueXIncrease);
      text0.innerHTML = number[2];
    } else {
      let valueXIncrease = text0.y['animVal'][0].value - 1;
      text0.style.y = valueXIncrease;
      text0.setAttribute('y', valueXIncrease);
      text0.innerHTML = number[3];
    }
  }
}
setInterval(textF0, 0.0001);
const text1 = document.getElementById('text1');
text1.innerHTML = number[0];
function textF1() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  if (a) {
    if (b) {
      let valueXIncrease = text1.x['animVal'][0].value + 1;
      text1.style.x = valueXIncrease;
      text1.setAttribute('x', valueXIncrease);
      text1.innerHTML = number[0];
    } else {
      let valueXIncrease = text1.x['animVal'][0].value - 1;
      text1.style.x = valueXIncrease;
      text1.setAttribute('x', valueXIncrease);
      text1.innerHTML = number[1];
    }
  } else {
    if (b) {
      let valueXIncrease = text1.y['animVal'][0].value + 1;
      text1.style.y = valueXIncrease;
      text1.setAttribute('y', valueXIncrease);
      text1.innerHTML = number[2];
    } else {
      let valueXIncrease = text1.y['animVal'][0].value - 1;
      text1.style.y = valueXIncrease;
      text1.setAttribute('y', valueXIncrease);
      text1.innerHTML = number[3];
    }
  }
}
setInterval(textF1, 0.0001);
const text2 = document.getElementById('text2');
text2.innerHTML = number[0];
function textF2() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  if (a) {
    if (b) {
      let valueXIncrease = text2.x['animVal'][0].value + 1;
      text2.style.x = valueXIncrease;
      text2.setAttribute('x', valueXIncrease);
      text2.innerHTML = number[0];
    } else {
      let valueXIncrease = text2.x['animVal'][0].value - 1;
      text2.style.x = valueXIncrease;
      text2.setAttribute('x', valueXIncrease);
      text2.innerHTML = number[1];
    }
  } else {
    if (b) {
      let valueXIncrease = text2.y['animVal'][0].value + 1;
      text2.style.y = valueXIncrease;
      text2.setAttribute('y', valueXIncrease);
      text2.innerHTML = number[2];
    } else {
      let valueXIncrease = text2.y['animVal'][0].value - 1;
      text2.style.y = valueXIncrease;
      text2.setAttribute('y', valueXIncrease);
      text2.innerHTML = number[3];
    }
  }
}
setInterval(textF2, 0.0001);
const text3 = document.getElementById('text3');
text3.innerHTML = number[0];
function textF3() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  if (a) {
    if (b) {
      let valueXIncrease = text3.x['animVal'][0].value + 1;
      text3.style.x = valueXIncrease;
      text3.setAttribute('x', valueXIncrease);
      text3.innerHTML = number[0];
    } else {
      let valueXIncrease = text3.x['animVal'][0].value - 1;
      text3.style.x = valueXIncrease;
      text3.setAttribute('x', valueXIncrease);
      text3.innerHTML = number[1];
    }
  } else {
    if (b) {
      let valueXIncrease = text3.y['animVal'][0].value + 1;
      text3.style.y = valueXIncrease;
      text3.setAttribute('y', valueXIncrease);
      text3.innerHTML = number[2];
    } else {
      let valueXIncrease = text3.y['animVal'][0].value - 1;
      text3.style.y = valueXIncrease;
      text3.setAttribute('y', valueXIncrease);
      text3.innerHTML = number[3];
    }
  }
}
setInterval(textF3, 0.0001);
const text4 = document.getElementById('text4');
text4.innerHTML = number[0];
function textF4() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  if (a) {
    if (b) {
      let valueXIncrease = text4.x['animVal'][0].value + 1;
      text4.style.x = valueXIncrease;
      text4.setAttribute('x', valueXIncrease);
      text4.innerHTML = number[0];
    } else {
      let valueXIncrease = text4.x['animVal'][0].value - 1;
      text4.style.x = valueXIncrease;
      text4.setAttribute('x', valueXIncrease);
      text4.innerHTML = number[1];
    }
  } else {
    if (b) {
      let valueXIncrease = text4.y['animVal'][0].value + 1;
      text4.style.y = valueXIncrease;
      text4.setAttribute('y', valueXIncrease);
      text4.innerHTML = number[2];
    } else {
      let valueXIncrease = text4.y['animVal'][0].value - 1;
      text4.style.y = valueXIncrease;
      text4.setAttribute('y', valueXIncrease);
      text4.innerHTML = number[3];
    }
  }
}
setInterval(textF4, 0.0001);
