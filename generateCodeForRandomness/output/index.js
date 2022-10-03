const number = ['.', '.', '.', '.'];
const color = ['white', 'red', 'blue', 'brown' , 'pink']; const location1 = new Map();
const text0 = document.getElementById('text0');
text0.innerHTML = number[0];
function textF0() {
const svg = document.getElementById('center');
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text0.setAttribute('fill', newColor);
  if (!location1.get(text0.x['animVal'][0].value+""+text0.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text0.x['animVal'][0].value);
    shadow.setAttribute('y', text0.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
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
  if (!location1.get(text1.x['animVal'][0].value+""+text1.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text1.x['animVal'][0].value);
    shadow.setAttribute('y', text1.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
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
  if (!location1.get(text2.x['animVal'][0].value+""+text2.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text2.x['animVal'][0].value);
    shadow.setAttribute('y', text2.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
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
  if (!location1.get(text3.x['animVal'][0].value+""+text3.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text3.x['animVal'][0].value);
    shadow.setAttribute('y', text3.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
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
  if (!location1.get(text4.x['animVal'][0].value+""+text4.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text4.x['animVal'][0].value);
    shadow.setAttribute('y', text4.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
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
const text5 = document.getElementById('text5');
text5.innerHTML = number[0];
function textF5() {
const svg = document.getElementById('center');
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text5.setAttribute('fill', newColor);
  if (!location1.get(text5.x['animVal'][0].value+""+text5.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text5.x['animVal'][0].value);
    shadow.setAttribute('y', text5.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text5.x['animVal'][0].value+""+text5.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text5.x['animVal'][0].value + 5;
      if (!(valueXIncrease >= svg.width['animVal'].value)){
      text5.setAttribute('x', valueXIncrease);
      }

    } else {
      let valueXIncrease = text5.x['animVal'][0].value - 5;
      if (!(valueXIncrease <= 0)){
      text5.setAttribute('x', valueXIncrease);
      }

    }
  } else {
    if (b) {
      let valueXIncrease = text5.y['animVal'][0].value + 5;
      if (!(valueXIncrease >= svg.height['animVal'].value)){
      text5.setAttribute('y', valueXIncrease);
      }

    } else {
      let valueXIncrease = text5.y['animVal'][0].value - 5;
      if (!(valueXIncrease <= 0)){
      text5.setAttribute('y', valueXIncrease);
      }

    }
  }
}
setInterval(textF5, 0.0001);
const text6 = document.getElementById('text6');
text6.innerHTML = number[0];
function textF6() {
const svg = document.getElementById('center');
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text6.setAttribute('fill', newColor);
  if (!location1.get(text6.x['animVal'][0].value+""+text6.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text6.x['animVal'][0].value);
    shadow.setAttribute('y', text6.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text6.x['animVal'][0].value+""+text6.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text6.x['animVal'][0].value + 5;
      if (!(valueXIncrease >= svg.width['animVal'].value)){
      text6.setAttribute('x', valueXIncrease);
      }

    } else {
      let valueXIncrease = text6.x['animVal'][0].value - 5;
      if (!(valueXIncrease <= 0)){
      text6.setAttribute('x', valueXIncrease);
      }

    }
  } else {
    if (b) {
      let valueXIncrease = text6.y['animVal'][0].value + 5;
      if (!(valueXIncrease >= svg.height['animVal'].value)){
      text6.setAttribute('y', valueXIncrease);
      }

    } else {
      let valueXIncrease = text6.y['animVal'][0].value - 5;
      if (!(valueXIncrease <= 0)){
      text6.setAttribute('y', valueXIncrease);
      }

    }
  }
}
setInterval(textF6, 0.0001);
const text7 = document.getElementById('text7');
text7.innerHTML = number[0];
function textF7() {
const svg = document.getElementById('center');
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text7.setAttribute('fill', newColor);
  if (!location1.get(text7.x['animVal'][0].value+""+text7.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text7.x['animVal'][0].value);
    shadow.setAttribute('y', text7.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text7.x['animVal'][0].value+""+text7.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text7.x['animVal'][0].value + 5;
      if (!(valueXIncrease >= svg.width['animVal'].value)){
      text7.setAttribute('x', valueXIncrease);
      }

    } else {
      let valueXIncrease = text7.x['animVal'][0].value - 5;
      if (!(valueXIncrease <= 0)){
      text7.setAttribute('x', valueXIncrease);
      }

    }
  } else {
    if (b) {
      let valueXIncrease = text7.y['animVal'][0].value + 5;
      if (!(valueXIncrease >= svg.height['animVal'].value)){
      text7.setAttribute('y', valueXIncrease);
      }

    } else {
      let valueXIncrease = text7.y['animVal'][0].value - 5;
      if (!(valueXIncrease <= 0)){
      text7.setAttribute('y', valueXIncrease);
      }

    }
  }
}
setInterval(textF7, 0.0001);
const text8 = document.getElementById('text8');
text8.innerHTML = number[0];
function textF8() {
const svg = document.getElementById('center');
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text8.setAttribute('fill', newColor);
  if (!location1.get(text8.x['animVal'][0].value+""+text8.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text8.x['animVal'][0].value);
    shadow.setAttribute('y', text8.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text8.x['animVal'][0].value+""+text8.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text8.x['animVal'][0].value + 5;
      if (!(valueXIncrease >= svg.width['animVal'].value)){
      text8.setAttribute('x', valueXIncrease);
      }

    } else {
      let valueXIncrease = text8.x['animVal'][0].value - 5;
      if (!(valueXIncrease <= 0)){
      text8.setAttribute('x', valueXIncrease);
      }

    }
  } else {
    if (b) {
      let valueXIncrease = text8.y['animVal'][0].value + 5;
      if (!(valueXIncrease >= svg.height['animVal'].value)){
      text8.setAttribute('y', valueXIncrease);
      }

    } else {
      let valueXIncrease = text8.y['animVal'][0].value - 5;
      if (!(valueXIncrease <= 0)){
      text8.setAttribute('y', valueXIncrease);
      }

    }
  }
}
setInterval(textF8, 0.0001);
const text9 = document.getElementById('text9');
text9.innerHTML = number[0];
function textF9() {
const svg = document.getElementById('center');
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text9.setAttribute('fill', newColor);
  if (!location1.get(text9.x['animVal'][0].value+""+text9.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text9.x['animVal'][0].value);
    shadow.setAttribute('y', text9.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text9.x['animVal'][0].value+""+text9.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text9.x['animVal'][0].value + 5;
      if (!(valueXIncrease >= svg.width['animVal'].value)){
      text9.setAttribute('x', valueXIncrease);
      }

    } else {
      let valueXIncrease = text9.x['animVal'][0].value - 5;
      if (!(valueXIncrease <= 0)){
      text9.setAttribute('x', valueXIncrease);
      }

    }
  } else {
    if (b) {
      let valueXIncrease = text9.y['animVal'][0].value + 5;
      if (!(valueXIncrease >= svg.height['animVal'].value)){
      text9.setAttribute('y', valueXIncrease);
      }

    } else {
      let valueXIncrease = text9.y['animVal'][0].value - 5;
      if (!(valueXIncrease <= 0)){
      text9.setAttribute('y', valueXIncrease);
      }

    }
  }
}
setInterval(textF9, 0.0001);
