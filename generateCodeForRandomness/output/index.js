const number = ['▊', '▊', '▊', '▊'];
const color = [ 'red', 'blue', 'brown' , 'black']; const location1 = new Map();
const text0 = document.getElementById('text0');
text0.innerHTML = number[0];
function textF0() {
const svg = document.getElementById('center');
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text0.setAttribute('fill', newColor);
  svg.setAttribute('background-color', newColor);
  if (!location1.get(text0.x['animVal'][0].value+""+text0.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text0.x['animVal'][0].value);
    shadow.setAttribute('y', text0.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', newColor);
    shadow.append('▊');
    document.getElementById('center').append(shadow);
    location1.set(text0.x['animVal'][0].value+""+text0.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text0.x['animVal'][0].value + 5;
      if (!(valueXIncrease >= svg.width['animVal'].value)){
      text0.setAttribute('x', valueXIncrease);
      }

    } else {
      let valueXIncrease = text0.x['animVal'][0].value - 5;
      if (!(valueXIncrease <= 0)){
      text0.setAttribute('x', valueXIncrease);
      }

    }
  } else {
    if (b) {
      let valueXIncrease = text0.y['animVal'][0].value + 5;
      if (!(valueXIncrease >= svg.height['animVal'].value)){
      text0.setAttribute('y', valueXIncrease);
      }

    } else {
      let valueXIncrease = text0.y['animVal'][0].value - 5;
      if (!(valueXIncrease <= 0)){
      text0.setAttribute('y', valueXIncrease);
      }

    }
  }
}
setInterval(textF0, 0.0001);
const text1 = document.getElementById('text1');
text1.innerHTML = number[0];
function textF1() {
const svg = document.getElementById('center');
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text1.setAttribute('fill', newColor);
  svg.setAttribute('background-color', newColor);
  if (!location1.get(text1.x['animVal'][0].value+""+text1.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text1.x['animVal'][0].value);
    shadow.setAttribute('y', text1.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', newColor);
    shadow.append('▊');
    document.getElementById('center').append(shadow);
    location1.set(text1.x['animVal'][0].value+""+text1.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text1.x['animVal'][0].value + 5;
      if (!(valueXIncrease >= svg.width['animVal'].value)){
      text1.setAttribute('x', valueXIncrease);
      }

    } else {
      let valueXIncrease = text1.x['animVal'][0].value - 5;
      if (!(valueXIncrease <= 0)){
      text1.setAttribute('x', valueXIncrease);
      }

    }
  } else {
    if (b) {
      let valueXIncrease = text1.y['animVal'][0].value + 5;
      if (!(valueXIncrease >= svg.height['animVal'].value)){
      text1.setAttribute('y', valueXIncrease);
      }

    } else {
      let valueXIncrease = text1.y['animVal'][0].value - 5;
      if (!(valueXIncrease <= 0)){
      text1.setAttribute('y', valueXIncrease);
      }

    }
  }
}
setInterval(textF1, 0.0001);
const text2 = document.getElementById('text2');
text2.innerHTML = number[0];
function textF2() {
const svg = document.getElementById('center');
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text2.setAttribute('fill', newColor);
  svg.setAttribute('background-color', newColor);
  if (!location1.get(text2.x['animVal'][0].value+""+text2.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text2.x['animVal'][0].value);
    shadow.setAttribute('y', text2.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', newColor);
    shadow.append('▊');
    document.getElementById('center').append(shadow);
    location1.set(text2.x['animVal'][0].value+""+text2.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text2.x['animVal'][0].value + 5;
      if (!(valueXIncrease >= svg.width['animVal'].value)){
      text2.setAttribute('x', valueXIncrease);
      }

    } else {
      let valueXIncrease = text2.x['animVal'][0].value - 5;
      if (!(valueXIncrease <= 0)){
      text2.setAttribute('x', valueXIncrease);
      }

    }
  } else {
    if (b) {
      let valueXIncrease = text2.y['animVal'][0].value + 5;
      if (!(valueXIncrease >= svg.height['animVal'].value)){
      text2.setAttribute('y', valueXIncrease);
      }

    } else {
      let valueXIncrease = text2.y['animVal'][0].value - 5;
      if (!(valueXIncrease <= 0)){
      text2.setAttribute('y', valueXIncrease);
      }

    }
  }
}
setInterval(textF2, 0.0001);
const text3 = document.getElementById('text3');
text3.innerHTML = number[0];
function textF3() {
const svg = document.getElementById('center');
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text3.setAttribute('fill', newColor);
  svg.setAttribute('background-color', newColor);
  if (!location1.get(text3.x['animVal'][0].value+""+text3.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text3.x['animVal'][0].value);
    shadow.setAttribute('y', text3.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', newColor);
    shadow.append('▊');
    document.getElementById('center').append(shadow);
    location1.set(text3.x['animVal'][0].value+""+text3.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text3.x['animVal'][0].value + 5;
      if (!(valueXIncrease >= svg.width['animVal'].value)){
      text3.setAttribute('x', valueXIncrease);
      }

    } else {
      let valueXIncrease = text3.x['animVal'][0].value - 5;
      if (!(valueXIncrease <= 0)){
      text3.setAttribute('x', valueXIncrease);
      }

    }
  } else {
    if (b) {
      let valueXIncrease = text3.y['animVal'][0].value + 5;
      if (!(valueXIncrease >= svg.height['animVal'].value)){
      text3.setAttribute('y', valueXIncrease);
      }

    } else {
      let valueXIncrease = text3.y['animVal'][0].value - 5;
      if (!(valueXIncrease <= 0)){
      text3.setAttribute('y', valueXIncrease);
      }

    }
  }
}
setInterval(textF3, 0.0001);
const text4 = document.getElementById('text4');
text4.innerHTML = number[0];
function textF4() {
const svg = document.getElementById('center');
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text4.setAttribute('fill', newColor);
  svg.setAttribute('background-color', newColor);
  if (!location1.get(text4.x['animVal'][0].value+""+text4.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text4.x['animVal'][0].value);
    shadow.setAttribute('y', text4.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', newColor);
    shadow.append('▊');
    document.getElementById('center').append(shadow);
    location1.set(text4.x['animVal'][0].value+""+text4.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text4.x['animVal'][0].value + 5;
      if (!(valueXIncrease >= svg.width['animVal'].value)){
      text4.setAttribute('x', valueXIncrease);
      }

    } else {
      let valueXIncrease = text4.x['animVal'][0].value - 5;
      if (!(valueXIncrease <= 0)){
      text4.setAttribute('x', valueXIncrease);
      }

    }
  } else {
    if (b) {
      let valueXIncrease = text4.y['animVal'][0].value + 5;
      if (!(valueXIncrease >= svg.height['animVal'].value)){
      text4.setAttribute('y', valueXIncrease);
      }

    } else {
      let valueXIncrease = text4.y['animVal'][0].value - 5;
      if (!(valueXIncrease <= 0)){
      text4.setAttribute('y', valueXIncrease);
      }

    }
  }
}
setInterval(textF4, 0.0001);
