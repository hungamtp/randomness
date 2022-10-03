const number = ['.', '.', '.', '.'];
const color = ['white', 'red', 'blue', 'brown' , 'pink']; const location1 = new Map();
const text0 = document.getElementById('text0');
text0.innerHTML = number[0];
function textF0() {
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
      text0.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text0.x['animVal'][0].value - 5;
      text0.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text0.y['animVal'][0].value + 5;
      text0.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text0.y['animVal'][0].value - 5;
      text0.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF0, 0.0001);
const text1 = document.getElementById('text1');
text1.innerHTML = number[0];
function textF1() {
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
      text1.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text1.x['animVal'][0].value - 5;
      text1.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text1.y['animVal'][0].value + 5;
      text1.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text1.y['animVal'][0].value - 5;
      text1.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF1, 0.0001);
const text2 = document.getElementById('text2');
text2.innerHTML = number[0];
function textF2() {
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
      text2.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text2.x['animVal'][0].value - 5;
      text2.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text2.y['animVal'][0].value + 5;
      text2.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text2.y['animVal'][0].value - 5;
      text2.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF2, 0.0001);
const text3 = document.getElementById('text3');
text3.innerHTML = number[0];
function textF3() {
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
      text3.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text3.x['animVal'][0].value - 5;
      text3.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text3.y['animVal'][0].value + 5;
      text3.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text3.y['animVal'][0].value - 5;
      text3.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF3, 0.0001);
const text4 = document.getElementById('text4');
text4.innerHTML = number[0];
function textF4() {
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
      text4.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text4.x['animVal'][0].value - 5;
      text4.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text4.y['animVal'][0].value + 5;
      text4.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text4.y['animVal'][0].value - 5;
      text4.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF4, 0.0001);
const text5 = document.getElementById('text5');
text5.innerHTML = number[0];
function textF5() {
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
      text5.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text5.x['animVal'][0].value - 5;
      text5.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text5.y['animVal'][0].value + 5;
      text5.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text5.y['animVal'][0].value - 5;
      text5.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF5, 0.0001);
const text6 = document.getElementById('text6');
text6.innerHTML = number[0];
function textF6() {
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
      text6.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text6.x['animVal'][0].value - 5;
      text6.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text6.y['animVal'][0].value + 5;
      text6.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text6.y['animVal'][0].value - 5;
      text6.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF6, 0.0001);
const text7 = document.getElementById('text7');
text7.innerHTML = number[0];
function textF7() {
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
      text7.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text7.x['animVal'][0].value - 5;
      text7.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text7.y['animVal'][0].value + 5;
      text7.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text7.y['animVal'][0].value - 5;
      text7.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF7, 0.0001);
const text8 = document.getElementById('text8');
text8.innerHTML = number[0];
function textF8() {
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
      text8.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text8.x['animVal'][0].value - 5;
      text8.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text8.y['animVal'][0].value + 5;
      text8.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text8.y['animVal'][0].value - 5;
      text8.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF8, 0.0001);
const text9 = document.getElementById('text9');
text9.innerHTML = number[0];
function textF9() {
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
      text9.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text9.x['animVal'][0].value - 5;
      text9.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text9.y['animVal'][0].value + 5;
      text9.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text9.y['animVal'][0].value - 5;
      text9.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF9, 0.0001);
const text10 = document.getElementById('text10');
text10.innerHTML = number[0];
function textF10() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text10.setAttribute('fill', newColor);
  if (!location1.get(text10.x['animVal'][0].value+""+text10.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text10.x['animVal'][0].value);
    shadow.setAttribute('y', text10.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text10.x['animVal'][0].value+""+text10.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text10.x['animVal'][0].value + 5;
      text10.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text10.x['animVal'][0].value - 5;
      text10.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text10.y['animVal'][0].value + 5;
      text10.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text10.y['animVal'][0].value - 5;
      text10.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF10, 0.0001);
const text11 = document.getElementById('text11');
text11.innerHTML = number[0];
function textF11() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text11.setAttribute('fill', newColor);
  if (!location1.get(text11.x['animVal'][0].value+""+text11.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text11.x['animVal'][0].value);
    shadow.setAttribute('y', text11.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text11.x['animVal'][0].value+""+text11.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text11.x['animVal'][0].value + 5;
      text11.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text11.x['animVal'][0].value - 5;
      text11.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text11.y['animVal'][0].value + 5;
      text11.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text11.y['animVal'][0].value - 5;
      text11.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF11, 0.0001);
const text12 = document.getElementById('text12');
text12.innerHTML = number[0];
function textF12() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text12.setAttribute('fill', newColor);
  if (!location1.get(text12.x['animVal'][0].value+""+text12.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text12.x['animVal'][0].value);
    shadow.setAttribute('y', text12.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text12.x['animVal'][0].value+""+text12.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text12.x['animVal'][0].value + 5;
      text12.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text12.x['animVal'][0].value - 5;
      text12.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text12.y['animVal'][0].value + 5;
      text12.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text12.y['animVal'][0].value - 5;
      text12.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF12, 0.0001);
const text13 = document.getElementById('text13');
text13.innerHTML = number[0];
function textF13() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text13.setAttribute('fill', newColor);
  if (!location1.get(text13.x['animVal'][0].value+""+text13.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text13.x['animVal'][0].value);
    shadow.setAttribute('y', text13.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text13.x['animVal'][0].value+""+text13.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text13.x['animVal'][0].value + 5;
      text13.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text13.x['animVal'][0].value - 5;
      text13.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text13.y['animVal'][0].value + 5;
      text13.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text13.y['animVal'][0].value - 5;
      text13.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF13, 0.0001);
const text14 = document.getElementById('text14');
text14.innerHTML = number[0];
function textF14() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text14.setAttribute('fill', newColor);
  if (!location1.get(text14.x['animVal'][0].value+""+text14.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text14.x['animVal'][0].value);
    shadow.setAttribute('y', text14.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text14.x['animVal'][0].value+""+text14.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text14.x['animVal'][0].value + 5;
      text14.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text14.x['animVal'][0].value - 5;
      text14.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text14.y['animVal'][0].value + 5;
      text14.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text14.y['animVal'][0].value - 5;
      text14.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF14, 0.0001);
const text15 = document.getElementById('text15');
text15.innerHTML = number[0];
function textF15() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text15.setAttribute('fill', newColor);
  if (!location1.get(text15.x['animVal'][0].value+""+text15.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text15.x['animVal'][0].value);
    shadow.setAttribute('y', text15.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text15.x['animVal'][0].value+""+text15.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text15.x['animVal'][0].value + 5;
      text15.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text15.x['animVal'][0].value - 5;
      text15.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text15.y['animVal'][0].value + 5;
      text15.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text15.y['animVal'][0].value - 5;
      text15.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF15, 0.0001);
const text16 = document.getElementById('text16');
text16.innerHTML = number[0];
function textF16() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text16.setAttribute('fill', newColor);
  if (!location1.get(text16.x['animVal'][0].value+""+text16.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text16.x['animVal'][0].value);
    shadow.setAttribute('y', text16.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text16.x['animVal'][0].value+""+text16.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text16.x['animVal'][0].value + 5;
      text16.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text16.x['animVal'][0].value - 5;
      text16.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text16.y['animVal'][0].value + 5;
      text16.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text16.y['animVal'][0].value - 5;
      text16.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF16, 0.0001);
const text17 = document.getElementById('text17');
text17.innerHTML = number[0];
function textF17() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text17.setAttribute('fill', newColor);
  if (!location1.get(text17.x['animVal'][0].value+""+text17.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text17.x['animVal'][0].value);
    shadow.setAttribute('y', text17.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text17.x['animVal'][0].value+""+text17.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text17.x['animVal'][0].value + 5;
      text17.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text17.x['animVal'][0].value - 5;
      text17.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text17.y['animVal'][0].value + 5;
      text17.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text17.y['animVal'][0].value - 5;
      text17.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF17, 0.0001);
const text18 = document.getElementById('text18');
text18.innerHTML = number[0];
function textF18() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text18.setAttribute('fill', newColor);
  if (!location1.get(text18.x['animVal'][0].value+""+text18.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text18.x['animVal'][0].value);
    shadow.setAttribute('y', text18.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text18.x['animVal'][0].value+""+text18.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text18.x['animVal'][0].value + 5;
      text18.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text18.x['animVal'][0].value - 5;
      text18.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text18.y['animVal'][0].value + 5;
      text18.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text18.y['animVal'][0].value - 5;
      text18.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF18, 0.0001);
const text19 = document.getElementById('text19');
text19.innerHTML = number[0];
function textF19() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text19.setAttribute('fill', newColor);
  if (!location1.get(text19.x['animVal'][0].value+""+text19.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text19.x['animVal'][0].value);
    shadow.setAttribute('y', text19.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text19.x['animVal'][0].value+""+text19.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text19.x['animVal'][0].value + 5;
      text19.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text19.x['animVal'][0].value - 5;
      text19.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text19.y['animVal'][0].value + 5;
      text19.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text19.y['animVal'][0].value - 5;
      text19.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF19, 0.0001);
const text20 = document.getElementById('text20');
text20.innerHTML = number[0];
function textF20() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text20.setAttribute('fill', newColor);
  if (!location1.get(text20.x['animVal'][0].value+""+text20.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text20.x['animVal'][0].value);
    shadow.setAttribute('y', text20.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text20.x['animVal'][0].value+""+text20.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text20.x['animVal'][0].value + 5;
      text20.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text20.x['animVal'][0].value - 5;
      text20.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text20.y['animVal'][0].value + 5;
      text20.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text20.y['animVal'][0].value - 5;
      text20.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF20, 0.0001);
const text21 = document.getElementById('text21');
text21.innerHTML = number[0];
function textF21() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text21.setAttribute('fill', newColor);
  if (!location1.get(text21.x['animVal'][0].value+""+text21.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text21.x['animVal'][0].value);
    shadow.setAttribute('y', text21.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text21.x['animVal'][0].value+""+text21.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text21.x['animVal'][0].value + 5;
      text21.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text21.x['animVal'][0].value - 5;
      text21.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text21.y['animVal'][0].value + 5;
      text21.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text21.y['animVal'][0].value - 5;
      text21.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF21, 0.0001);
const text22 = document.getElementById('text22');
text22.innerHTML = number[0];
function textF22() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text22.setAttribute('fill', newColor);
  if (!location1.get(text22.x['animVal'][0].value+""+text22.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text22.x['animVal'][0].value);
    shadow.setAttribute('y', text22.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text22.x['animVal'][0].value+""+text22.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text22.x['animVal'][0].value + 5;
      text22.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text22.x['animVal'][0].value - 5;
      text22.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text22.y['animVal'][0].value + 5;
      text22.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text22.y['animVal'][0].value - 5;
      text22.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF22, 0.0001);
const text23 = document.getElementById('text23');
text23.innerHTML = number[0];
function textF23() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text23.setAttribute('fill', newColor);
  if (!location1.get(text23.x['animVal'][0].value+""+text23.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text23.x['animVal'][0].value);
    shadow.setAttribute('y', text23.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text23.x['animVal'][0].value+""+text23.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text23.x['animVal'][0].value + 5;
      text23.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text23.x['animVal'][0].value - 5;
      text23.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text23.y['animVal'][0].value + 5;
      text23.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text23.y['animVal'][0].value - 5;
      text23.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF23, 0.0001);
const text24 = document.getElementById('text24');
text24.innerHTML = number[0];
function textF24() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text24.setAttribute('fill', newColor);
  if (!location1.get(text24.x['animVal'][0].value+""+text24.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text24.x['animVal'][0].value);
    shadow.setAttribute('y', text24.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text24.x['animVal'][0].value+""+text24.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text24.x['animVal'][0].value + 5;
      text24.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text24.x['animVal'][0].value - 5;
      text24.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text24.y['animVal'][0].value + 5;
      text24.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text24.y['animVal'][0].value - 5;
      text24.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF24, 0.0001);
const text25 = document.getElementById('text25');
text25.innerHTML = number[0];
function textF25() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text25.setAttribute('fill', newColor);
  if (!location1.get(text25.x['animVal'][0].value+""+text25.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text25.x['animVal'][0].value);
    shadow.setAttribute('y', text25.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text25.x['animVal'][0].value+""+text25.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text25.x['animVal'][0].value + 5;
      text25.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text25.x['animVal'][0].value - 5;
      text25.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text25.y['animVal'][0].value + 5;
      text25.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text25.y['animVal'][0].value - 5;
      text25.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF25, 0.0001);
const text26 = document.getElementById('text26');
text26.innerHTML = number[0];
function textF26() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text26.setAttribute('fill', newColor);
  if (!location1.get(text26.x['animVal'][0].value+""+text26.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text26.x['animVal'][0].value);
    shadow.setAttribute('y', text26.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text26.x['animVal'][0].value+""+text26.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text26.x['animVal'][0].value + 5;
      text26.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text26.x['animVal'][0].value - 5;
      text26.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text26.y['animVal'][0].value + 5;
      text26.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text26.y['animVal'][0].value - 5;
      text26.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF26, 0.0001);
const text27 = document.getElementById('text27');
text27.innerHTML = number[0];
function textF27() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text27.setAttribute('fill', newColor);
  if (!location1.get(text27.x['animVal'][0].value+""+text27.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text27.x['animVal'][0].value);
    shadow.setAttribute('y', text27.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text27.x['animVal'][0].value+""+text27.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text27.x['animVal'][0].value + 5;
      text27.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text27.x['animVal'][0].value - 5;
      text27.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text27.y['animVal'][0].value + 5;
      text27.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text27.y['animVal'][0].value - 5;
      text27.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF27, 0.0001);
const text28 = document.getElementById('text28');
text28.innerHTML = number[0];
function textF28() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text28.setAttribute('fill', newColor);
  if (!location1.get(text28.x['animVal'][0].value+""+text28.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text28.x['animVal'][0].value);
    shadow.setAttribute('y', text28.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text28.x['animVal'][0].value+""+text28.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text28.x['animVal'][0].value + 5;
      text28.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text28.x['animVal'][0].value - 5;
      text28.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text28.y['animVal'][0].value + 5;
      text28.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text28.y['animVal'][0].value - 5;
      text28.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF28, 0.0001);
const text29 = document.getElementById('text29');
text29.innerHTML = number[0];
function textF29() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text29.setAttribute('fill', newColor);
  if (!location1.get(text29.x['animVal'][0].value+""+text29.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text29.x['animVal'][0].value);
    shadow.setAttribute('y', text29.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text29.x['animVal'][0].value+""+text29.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text29.x['animVal'][0].value + 5;
      text29.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text29.x['animVal'][0].value - 5;
      text29.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text29.y['animVal'][0].value + 5;
      text29.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text29.y['animVal'][0].value - 5;
      text29.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF29, 0.0001);
const text30 = document.getElementById('text30');
text30.innerHTML = number[0];
function textF30() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text30.setAttribute('fill', newColor);
  if (!location1.get(text30.x['animVal'][0].value+""+text30.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text30.x['animVal'][0].value);
    shadow.setAttribute('y', text30.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text30.x['animVal'][0].value+""+text30.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text30.x['animVal'][0].value + 5;
      text30.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text30.x['animVal'][0].value - 5;
      text30.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text30.y['animVal'][0].value + 5;
      text30.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text30.y['animVal'][0].value - 5;
      text30.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF30, 0.0001);
const text31 = document.getElementById('text31');
text31.innerHTML = number[0];
function textF31() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text31.setAttribute('fill', newColor);
  if (!location1.get(text31.x['animVal'][0].value+""+text31.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text31.x['animVal'][0].value);
    shadow.setAttribute('y', text31.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text31.x['animVal'][0].value+""+text31.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text31.x['animVal'][0].value + 5;
      text31.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text31.x['animVal'][0].value - 5;
      text31.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text31.y['animVal'][0].value + 5;
      text31.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text31.y['animVal'][0].value - 5;
      text31.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF31, 0.0001);
const text32 = document.getElementById('text32');
text32.innerHTML = number[0];
function textF32() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text32.setAttribute('fill', newColor);
  if (!location1.get(text32.x['animVal'][0].value+""+text32.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text32.x['animVal'][0].value);
    shadow.setAttribute('y', text32.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text32.x['animVal'][0].value+""+text32.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text32.x['animVal'][0].value + 5;
      text32.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text32.x['animVal'][0].value - 5;
      text32.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text32.y['animVal'][0].value + 5;
      text32.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text32.y['animVal'][0].value - 5;
      text32.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF32, 0.0001);
const text33 = document.getElementById('text33');
text33.innerHTML = number[0];
function textF33() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text33.setAttribute('fill', newColor);
  if (!location1.get(text33.x['animVal'][0].value+""+text33.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text33.x['animVal'][0].value);
    shadow.setAttribute('y', text33.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text33.x['animVal'][0].value+""+text33.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text33.x['animVal'][0].value + 5;
      text33.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text33.x['animVal'][0].value - 5;
      text33.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text33.y['animVal'][0].value + 5;
      text33.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text33.y['animVal'][0].value - 5;
      text33.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF33, 0.0001);
const text34 = document.getElementById('text34');
text34.innerHTML = number[0];
function textF34() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text34.setAttribute('fill', newColor);
  if (!location1.get(text34.x['animVal'][0].value+""+text34.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text34.x['animVal'][0].value);
    shadow.setAttribute('y', text34.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text34.x['animVal'][0].value+""+text34.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text34.x['animVal'][0].value + 5;
      text34.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text34.x['animVal'][0].value - 5;
      text34.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text34.y['animVal'][0].value + 5;
      text34.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text34.y['animVal'][0].value - 5;
      text34.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF34, 0.0001);
const text35 = document.getElementById('text35');
text35.innerHTML = number[0];
function textF35() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text35.setAttribute('fill', newColor);
  if (!location1.get(text35.x['animVal'][0].value+""+text35.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text35.x['animVal'][0].value);
    shadow.setAttribute('y', text35.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text35.x['animVal'][0].value+""+text35.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text35.x['animVal'][0].value + 5;
      text35.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text35.x['animVal'][0].value - 5;
      text35.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text35.y['animVal'][0].value + 5;
      text35.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text35.y['animVal'][0].value - 5;
      text35.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF35, 0.0001);
const text36 = document.getElementById('text36');
text36.innerHTML = number[0];
function textF36() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text36.setAttribute('fill', newColor);
  if (!location1.get(text36.x['animVal'][0].value+""+text36.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text36.x['animVal'][0].value);
    shadow.setAttribute('y', text36.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text36.x['animVal'][0].value+""+text36.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text36.x['animVal'][0].value + 5;
      text36.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text36.x['animVal'][0].value - 5;
      text36.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text36.y['animVal'][0].value + 5;
      text36.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text36.y['animVal'][0].value - 5;
      text36.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF36, 0.0001);
const text37 = document.getElementById('text37');
text37.innerHTML = number[0];
function textF37() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text37.setAttribute('fill', newColor);
  if (!location1.get(text37.x['animVal'][0].value+""+text37.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text37.x['animVal'][0].value);
    shadow.setAttribute('y', text37.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text37.x['animVal'][0].value+""+text37.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text37.x['animVal'][0].value + 5;
      text37.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text37.x['animVal'][0].value - 5;
      text37.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text37.y['animVal'][0].value + 5;
      text37.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text37.y['animVal'][0].value - 5;
      text37.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF37, 0.0001);
const text38 = document.getElementById('text38');
text38.innerHTML = number[0];
function textF38() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text38.setAttribute('fill', newColor);
  if (!location1.get(text38.x['animVal'][0].value+""+text38.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text38.x['animVal'][0].value);
    shadow.setAttribute('y', text38.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text38.x['animVal'][0].value+""+text38.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text38.x['animVal'][0].value + 5;
      text38.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text38.x['animVal'][0].value - 5;
      text38.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text38.y['animVal'][0].value + 5;
      text38.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text38.y['animVal'][0].value - 5;
      text38.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF38, 0.0001);
const text39 = document.getElementById('text39');
text39.innerHTML = number[0];
function textF39() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text39.setAttribute('fill', newColor);
  if (!location1.get(text39.x['animVal'][0].value+""+text39.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text39.x['animVal'][0].value);
    shadow.setAttribute('y', text39.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text39.x['animVal'][0].value+""+text39.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text39.x['animVal'][0].value + 5;
      text39.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text39.x['animVal'][0].value - 5;
      text39.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text39.y['animVal'][0].value + 5;
      text39.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text39.y['animVal'][0].value - 5;
      text39.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF39, 0.0001);
const text40 = document.getElementById('text40');
text40.innerHTML = number[0];
function textF40() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text40.setAttribute('fill', newColor);
  if (!location1.get(text40.x['animVal'][0].value+""+text40.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text40.x['animVal'][0].value);
    shadow.setAttribute('y', text40.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text40.x['animVal'][0].value+""+text40.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text40.x['animVal'][0].value + 5;
      text40.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text40.x['animVal'][0].value - 5;
      text40.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text40.y['animVal'][0].value + 5;
      text40.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text40.y['animVal'][0].value - 5;
      text40.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF40, 0.0001);
const text41 = document.getElementById('text41');
text41.innerHTML = number[0];
function textF41() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text41.setAttribute('fill', newColor);
  if (!location1.get(text41.x['animVal'][0].value+""+text41.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text41.x['animVal'][0].value);
    shadow.setAttribute('y', text41.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text41.x['animVal'][0].value+""+text41.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text41.x['animVal'][0].value + 5;
      text41.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text41.x['animVal'][0].value - 5;
      text41.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text41.y['animVal'][0].value + 5;
      text41.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text41.y['animVal'][0].value - 5;
      text41.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF41, 0.0001);
const text42 = document.getElementById('text42');
text42.innerHTML = number[0];
function textF42() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text42.setAttribute('fill', newColor);
  if (!location1.get(text42.x['animVal'][0].value+""+text42.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text42.x['animVal'][0].value);
    shadow.setAttribute('y', text42.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text42.x['animVal'][0].value+""+text42.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text42.x['animVal'][0].value + 5;
      text42.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text42.x['animVal'][0].value - 5;
      text42.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text42.y['animVal'][0].value + 5;
      text42.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text42.y['animVal'][0].value - 5;
      text42.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF42, 0.0001);
const text43 = document.getElementById('text43');
text43.innerHTML = number[0];
function textF43() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text43.setAttribute('fill', newColor);
  if (!location1.get(text43.x['animVal'][0].value+""+text43.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text43.x['animVal'][0].value);
    shadow.setAttribute('y', text43.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text43.x['animVal'][0].value+""+text43.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text43.x['animVal'][0].value + 5;
      text43.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text43.x['animVal'][0].value - 5;
      text43.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text43.y['animVal'][0].value + 5;
      text43.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text43.y['animVal'][0].value - 5;
      text43.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF43, 0.0001);
const text44 = document.getElementById('text44');
text44.innerHTML = number[0];
function textF44() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text44.setAttribute('fill', newColor);
  if (!location1.get(text44.x['animVal'][0].value+""+text44.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text44.x['animVal'][0].value);
    shadow.setAttribute('y', text44.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text44.x['animVal'][0].value+""+text44.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text44.x['animVal'][0].value + 5;
      text44.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text44.x['animVal'][0].value - 5;
      text44.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text44.y['animVal'][0].value + 5;
      text44.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text44.y['animVal'][0].value - 5;
      text44.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF44, 0.0001);
const text45 = document.getElementById('text45');
text45.innerHTML = number[0];
function textF45() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text45.setAttribute('fill', newColor);
  if (!location1.get(text45.x['animVal'][0].value+""+text45.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text45.x['animVal'][0].value);
    shadow.setAttribute('y', text45.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text45.x['animVal'][0].value+""+text45.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text45.x['animVal'][0].value + 5;
      text45.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text45.x['animVal'][0].value - 5;
      text45.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text45.y['animVal'][0].value + 5;
      text45.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text45.y['animVal'][0].value - 5;
      text45.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF45, 0.0001);
const text46 = document.getElementById('text46');
text46.innerHTML = number[0];
function textF46() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text46.setAttribute('fill', newColor);
  if (!location1.get(text46.x['animVal'][0].value+""+text46.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text46.x['animVal'][0].value);
    shadow.setAttribute('y', text46.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text46.x['animVal'][0].value+""+text46.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text46.x['animVal'][0].value + 5;
      text46.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text46.x['animVal'][0].value - 5;
      text46.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text46.y['animVal'][0].value + 5;
      text46.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text46.y['animVal'][0].value - 5;
      text46.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF46, 0.0001);
const text47 = document.getElementById('text47');
text47.innerHTML = number[0];
function textF47() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text47.setAttribute('fill', newColor);
  if (!location1.get(text47.x['animVal'][0].value+""+text47.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text47.x['animVal'][0].value);
    shadow.setAttribute('y', text47.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text47.x['animVal'][0].value+""+text47.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text47.x['animVal'][0].value + 5;
      text47.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text47.x['animVal'][0].value - 5;
      text47.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text47.y['animVal'][0].value + 5;
      text47.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text47.y['animVal'][0].value - 5;
      text47.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF47, 0.0001);
const text48 = document.getElementById('text48');
text48.innerHTML = number[0];
function textF48() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text48.setAttribute('fill', newColor);
  if (!location1.get(text48.x['animVal'][0].value+""+text48.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text48.x['animVal'][0].value);
    shadow.setAttribute('y', text48.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text48.x['animVal'][0].value+""+text48.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text48.x['animVal'][0].value + 5;
      text48.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text48.x['animVal'][0].value - 5;
      text48.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text48.y['animVal'][0].value + 5;
      text48.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text48.y['animVal'][0].value - 5;
      text48.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF48, 0.0001);
const text49 = document.getElementById('text49');
text49.innerHTML = number[0];
function textF49() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text49.setAttribute('fill', newColor);
  if (!location1.get(text49.x['animVal'][0].value+""+text49.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text49.x['animVal'][0].value);
    shadow.setAttribute('y', text49.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text49.x['animVal'][0].value+""+text49.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text49.x['animVal'][0].value + 5;
      text49.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text49.x['animVal'][0].value - 5;
      text49.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text49.y['animVal'][0].value + 5;
      text49.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text49.y['animVal'][0].value - 5;
      text49.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF49, 0.0001);
const text50 = document.getElementById('text50');
text50.innerHTML = number[0];
function textF50() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text50.setAttribute('fill', newColor);
  if (!location1.get(text50.x['animVal'][0].value+""+text50.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text50.x['animVal'][0].value);
    shadow.setAttribute('y', text50.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text50.x['animVal'][0].value+""+text50.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text50.x['animVal'][0].value + 5;
      text50.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text50.x['animVal'][0].value - 5;
      text50.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text50.y['animVal'][0].value + 5;
      text50.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text50.y['animVal'][0].value - 5;
      text50.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF50, 0.0001);
const text51 = document.getElementById('text51');
text51.innerHTML = number[0];
function textF51() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text51.setAttribute('fill', newColor);
  if (!location1.get(text51.x['animVal'][0].value+""+text51.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text51.x['animVal'][0].value);
    shadow.setAttribute('y', text51.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text51.x['animVal'][0].value+""+text51.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text51.x['animVal'][0].value + 5;
      text51.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text51.x['animVal'][0].value - 5;
      text51.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text51.y['animVal'][0].value + 5;
      text51.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text51.y['animVal'][0].value - 5;
      text51.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF51, 0.0001);
const text52 = document.getElementById('text52');
text52.innerHTML = number[0];
function textF52() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text52.setAttribute('fill', newColor);
  if (!location1.get(text52.x['animVal'][0].value+""+text52.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text52.x['animVal'][0].value);
    shadow.setAttribute('y', text52.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text52.x['animVal'][0].value+""+text52.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text52.x['animVal'][0].value + 5;
      text52.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text52.x['animVal'][0].value - 5;
      text52.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text52.y['animVal'][0].value + 5;
      text52.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text52.y['animVal'][0].value - 5;
      text52.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF52, 0.0001);
const text53 = document.getElementById('text53');
text53.innerHTML = number[0];
function textF53() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text53.setAttribute('fill', newColor);
  if (!location1.get(text53.x['animVal'][0].value+""+text53.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text53.x['animVal'][0].value);
    shadow.setAttribute('y', text53.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text53.x['animVal'][0].value+""+text53.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text53.x['animVal'][0].value + 5;
      text53.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text53.x['animVal'][0].value - 5;
      text53.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text53.y['animVal'][0].value + 5;
      text53.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text53.y['animVal'][0].value - 5;
      text53.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF53, 0.0001);
const text54 = document.getElementById('text54');
text54.innerHTML = number[0];
function textF54() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text54.setAttribute('fill', newColor);
  if (!location1.get(text54.x['animVal'][0].value+""+text54.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text54.x['animVal'][0].value);
    shadow.setAttribute('y', text54.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text54.x['animVal'][0].value+""+text54.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text54.x['animVal'][0].value + 5;
      text54.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text54.x['animVal'][0].value - 5;
      text54.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text54.y['animVal'][0].value + 5;
      text54.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text54.y['animVal'][0].value - 5;
      text54.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF54, 0.0001);
const text55 = document.getElementById('text55');
text55.innerHTML = number[0];
function textF55() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text55.setAttribute('fill', newColor);
  if (!location1.get(text55.x['animVal'][0].value+""+text55.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text55.x['animVal'][0].value);
    shadow.setAttribute('y', text55.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text55.x['animVal'][0].value+""+text55.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text55.x['animVal'][0].value + 5;
      text55.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text55.x['animVal'][0].value - 5;
      text55.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text55.y['animVal'][0].value + 5;
      text55.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text55.y['animVal'][0].value - 5;
      text55.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF55, 0.0001);
const text56 = document.getElementById('text56');
text56.innerHTML = number[0];
function textF56() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text56.setAttribute('fill', newColor);
  if (!location1.get(text56.x['animVal'][0].value+""+text56.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text56.x['animVal'][0].value);
    shadow.setAttribute('y', text56.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text56.x['animVal'][0].value+""+text56.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text56.x['animVal'][0].value + 5;
      text56.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text56.x['animVal'][0].value - 5;
      text56.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text56.y['animVal'][0].value + 5;
      text56.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text56.y['animVal'][0].value - 5;
      text56.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF56, 0.0001);
const text57 = document.getElementById('text57');
text57.innerHTML = number[0];
function textF57() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text57.setAttribute('fill', newColor);
  if (!location1.get(text57.x['animVal'][0].value+""+text57.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text57.x['animVal'][0].value);
    shadow.setAttribute('y', text57.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text57.x['animVal'][0].value+""+text57.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text57.x['animVal'][0].value + 5;
      text57.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text57.x['animVal'][0].value - 5;
      text57.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text57.y['animVal'][0].value + 5;
      text57.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text57.y['animVal'][0].value - 5;
      text57.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF57, 0.0001);
const text58 = document.getElementById('text58');
text58.innerHTML = number[0];
function textF58() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text58.setAttribute('fill', newColor);
  if (!location1.get(text58.x['animVal'][0].value+""+text58.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text58.x['animVal'][0].value);
    shadow.setAttribute('y', text58.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text58.x['animVal'][0].value+""+text58.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text58.x['animVal'][0].value + 5;
      text58.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text58.x['animVal'][0].value - 5;
      text58.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text58.y['animVal'][0].value + 5;
      text58.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text58.y['animVal'][0].value - 5;
      text58.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF58, 0.0001);
const text59 = document.getElementById('text59');
text59.innerHTML = number[0];
function textF59() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text59.setAttribute('fill', newColor);
  if (!location1.get(text59.x['animVal'][0].value+""+text59.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text59.x['animVal'][0].value);
    shadow.setAttribute('y', text59.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text59.x['animVal'][0].value+""+text59.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text59.x['animVal'][0].value + 5;
      text59.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text59.x['animVal'][0].value - 5;
      text59.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text59.y['animVal'][0].value + 5;
      text59.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text59.y['animVal'][0].value - 5;
      text59.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF59, 0.0001);
const text60 = document.getElementById('text60');
text60.innerHTML = number[0];
function textF60() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text60.setAttribute('fill', newColor);
  if (!location1.get(text60.x['animVal'][0].value+""+text60.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text60.x['animVal'][0].value);
    shadow.setAttribute('y', text60.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text60.x['animVal'][0].value+""+text60.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text60.x['animVal'][0].value + 5;
      text60.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text60.x['animVal'][0].value - 5;
      text60.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text60.y['animVal'][0].value + 5;
      text60.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text60.y['animVal'][0].value - 5;
      text60.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF60, 0.0001);
const text61 = document.getElementById('text61');
text61.innerHTML = number[0];
function textF61() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text61.setAttribute('fill', newColor);
  if (!location1.get(text61.x['animVal'][0].value+""+text61.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text61.x['animVal'][0].value);
    shadow.setAttribute('y', text61.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text61.x['animVal'][0].value+""+text61.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text61.x['animVal'][0].value + 5;
      text61.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text61.x['animVal'][0].value - 5;
      text61.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text61.y['animVal'][0].value + 5;
      text61.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text61.y['animVal'][0].value - 5;
      text61.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF61, 0.0001);
const text62 = document.getElementById('text62');
text62.innerHTML = number[0];
function textF62() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text62.setAttribute('fill', newColor);
  if (!location1.get(text62.x['animVal'][0].value+""+text62.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text62.x['animVal'][0].value);
    shadow.setAttribute('y', text62.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text62.x['animVal'][0].value+""+text62.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text62.x['animVal'][0].value + 5;
      text62.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text62.x['animVal'][0].value - 5;
      text62.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text62.y['animVal'][0].value + 5;
      text62.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text62.y['animVal'][0].value - 5;
      text62.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF62, 0.0001);
const text63 = document.getElementById('text63');
text63.innerHTML = number[0];
function textF63() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text63.setAttribute('fill', newColor);
  if (!location1.get(text63.x['animVal'][0].value+""+text63.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text63.x['animVal'][0].value);
    shadow.setAttribute('y', text63.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text63.x['animVal'][0].value+""+text63.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text63.x['animVal'][0].value + 5;
      text63.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text63.x['animVal'][0].value - 5;
      text63.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text63.y['animVal'][0].value + 5;
      text63.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text63.y['animVal'][0].value - 5;
      text63.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF63, 0.0001);
const text64 = document.getElementById('text64');
text64.innerHTML = number[0];
function textF64() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text64.setAttribute('fill', newColor);
  if (!location1.get(text64.x['animVal'][0].value+""+text64.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text64.x['animVal'][0].value);
    shadow.setAttribute('y', text64.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text64.x['animVal'][0].value+""+text64.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text64.x['animVal'][0].value + 5;
      text64.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text64.x['animVal'][0].value - 5;
      text64.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text64.y['animVal'][0].value + 5;
      text64.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text64.y['animVal'][0].value - 5;
      text64.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF64, 0.0001);
const text65 = document.getElementById('text65');
text65.innerHTML = number[0];
function textF65() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text65.setAttribute('fill', newColor);
  if (!location1.get(text65.x['animVal'][0].value+""+text65.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text65.x['animVal'][0].value);
    shadow.setAttribute('y', text65.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text65.x['animVal'][0].value+""+text65.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text65.x['animVal'][0].value + 5;
      text65.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text65.x['animVal'][0].value - 5;
      text65.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text65.y['animVal'][0].value + 5;
      text65.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text65.y['animVal'][0].value - 5;
      text65.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF65, 0.0001);
const text66 = document.getElementById('text66');
text66.innerHTML = number[0];
function textF66() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text66.setAttribute('fill', newColor);
  if (!location1.get(text66.x['animVal'][0].value+""+text66.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text66.x['animVal'][0].value);
    shadow.setAttribute('y', text66.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text66.x['animVal'][0].value+""+text66.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text66.x['animVal'][0].value + 5;
      text66.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text66.x['animVal'][0].value - 5;
      text66.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text66.y['animVal'][0].value + 5;
      text66.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text66.y['animVal'][0].value - 5;
      text66.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF66, 0.0001);
const text67 = document.getElementById('text67');
text67.innerHTML = number[0];
function textF67() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text67.setAttribute('fill', newColor);
  if (!location1.get(text67.x['animVal'][0].value+""+text67.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text67.x['animVal'][0].value);
    shadow.setAttribute('y', text67.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text67.x['animVal'][0].value+""+text67.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text67.x['animVal'][0].value + 5;
      text67.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text67.x['animVal'][0].value - 5;
      text67.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text67.y['animVal'][0].value + 5;
      text67.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text67.y['animVal'][0].value - 5;
      text67.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF67, 0.0001);
const text68 = document.getElementById('text68');
text68.innerHTML = number[0];
function textF68() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text68.setAttribute('fill', newColor);
  if (!location1.get(text68.x['animVal'][0].value+""+text68.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text68.x['animVal'][0].value);
    shadow.setAttribute('y', text68.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text68.x['animVal'][0].value+""+text68.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text68.x['animVal'][0].value + 5;
      text68.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text68.x['animVal'][0].value - 5;
      text68.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text68.y['animVal'][0].value + 5;
      text68.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text68.y['animVal'][0].value - 5;
      text68.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF68, 0.0001);
const text69 = document.getElementById('text69');
text69.innerHTML = number[0];
function textF69() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text69.setAttribute('fill', newColor);
  if (!location1.get(text69.x['animVal'][0].value+""+text69.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text69.x['animVal'][0].value);
    shadow.setAttribute('y', text69.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text69.x['animVal'][0].value+""+text69.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text69.x['animVal'][0].value + 5;
      text69.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text69.x['animVal'][0].value - 5;
      text69.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text69.y['animVal'][0].value + 5;
      text69.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text69.y['animVal'][0].value - 5;
      text69.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF69, 0.0001);
const text70 = document.getElementById('text70');
text70.innerHTML = number[0];
function textF70() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text70.setAttribute('fill', newColor);
  if (!location1.get(text70.x['animVal'][0].value+""+text70.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text70.x['animVal'][0].value);
    shadow.setAttribute('y', text70.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text70.x['animVal'][0].value+""+text70.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text70.x['animVal'][0].value + 5;
      text70.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text70.x['animVal'][0].value - 5;
      text70.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text70.y['animVal'][0].value + 5;
      text70.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text70.y['animVal'][0].value - 5;
      text70.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF70, 0.0001);
const text71 = document.getElementById('text71');
text71.innerHTML = number[0];
function textF71() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text71.setAttribute('fill', newColor);
  if (!location1.get(text71.x['animVal'][0].value+""+text71.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text71.x['animVal'][0].value);
    shadow.setAttribute('y', text71.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text71.x['animVal'][0].value+""+text71.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text71.x['animVal'][0].value + 5;
      text71.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text71.x['animVal'][0].value - 5;
      text71.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text71.y['animVal'][0].value + 5;
      text71.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text71.y['animVal'][0].value - 5;
      text71.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF71, 0.0001);
const text72 = document.getElementById('text72');
text72.innerHTML = number[0];
function textF72() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text72.setAttribute('fill', newColor);
  if (!location1.get(text72.x['animVal'][0].value+""+text72.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text72.x['animVal'][0].value);
    shadow.setAttribute('y', text72.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text72.x['animVal'][0].value+""+text72.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text72.x['animVal'][0].value + 5;
      text72.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text72.x['animVal'][0].value - 5;
      text72.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text72.y['animVal'][0].value + 5;
      text72.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text72.y['animVal'][0].value - 5;
      text72.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF72, 0.0001);
const text73 = document.getElementById('text73');
text73.innerHTML = number[0];
function textF73() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text73.setAttribute('fill', newColor);
  if (!location1.get(text73.x['animVal'][0].value+""+text73.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text73.x['animVal'][0].value);
    shadow.setAttribute('y', text73.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text73.x['animVal'][0].value+""+text73.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text73.x['animVal'][0].value + 5;
      text73.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text73.x['animVal'][0].value - 5;
      text73.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text73.y['animVal'][0].value + 5;
      text73.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text73.y['animVal'][0].value - 5;
      text73.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF73, 0.0001);
const text74 = document.getElementById('text74');
text74.innerHTML = number[0];
function textF74() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text74.setAttribute('fill', newColor);
  if (!location1.get(text74.x['animVal'][0].value+""+text74.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text74.x['animVal'][0].value);
    shadow.setAttribute('y', text74.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text74.x['animVal'][0].value+""+text74.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text74.x['animVal'][0].value + 5;
      text74.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text74.x['animVal'][0].value - 5;
      text74.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text74.y['animVal'][0].value + 5;
      text74.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text74.y['animVal'][0].value - 5;
      text74.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF74, 0.0001);
const text75 = document.getElementById('text75');
text75.innerHTML = number[0];
function textF75() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text75.setAttribute('fill', newColor);
  if (!location1.get(text75.x['animVal'][0].value+""+text75.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text75.x['animVal'][0].value);
    shadow.setAttribute('y', text75.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text75.x['animVal'][0].value+""+text75.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text75.x['animVal'][0].value + 5;
      text75.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text75.x['animVal'][0].value - 5;
      text75.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text75.y['animVal'][0].value + 5;
      text75.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text75.y['animVal'][0].value - 5;
      text75.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF75, 0.0001);
const text76 = document.getElementById('text76');
text76.innerHTML = number[0];
function textF76() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text76.setAttribute('fill', newColor);
  if (!location1.get(text76.x['animVal'][0].value+""+text76.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text76.x['animVal'][0].value);
    shadow.setAttribute('y', text76.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text76.x['animVal'][0].value+""+text76.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text76.x['animVal'][0].value + 5;
      text76.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text76.x['animVal'][0].value - 5;
      text76.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text76.y['animVal'][0].value + 5;
      text76.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text76.y['animVal'][0].value - 5;
      text76.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF76, 0.0001);
const text77 = document.getElementById('text77');
text77.innerHTML = number[0];
function textF77() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text77.setAttribute('fill', newColor);
  if (!location1.get(text77.x['animVal'][0].value+""+text77.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text77.x['animVal'][0].value);
    shadow.setAttribute('y', text77.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text77.x['animVal'][0].value+""+text77.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text77.x['animVal'][0].value + 5;
      text77.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text77.x['animVal'][0].value - 5;
      text77.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text77.y['animVal'][0].value + 5;
      text77.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text77.y['animVal'][0].value - 5;
      text77.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF77, 0.0001);
const text78 = document.getElementById('text78');
text78.innerHTML = number[0];
function textF78() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text78.setAttribute('fill', newColor);
  if (!location1.get(text78.x['animVal'][0].value+""+text78.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text78.x['animVal'][0].value);
    shadow.setAttribute('y', text78.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text78.x['animVal'][0].value+""+text78.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text78.x['animVal'][0].value + 5;
      text78.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text78.x['animVal'][0].value - 5;
      text78.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text78.y['animVal'][0].value + 5;
      text78.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text78.y['animVal'][0].value - 5;
      text78.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF78, 0.0001);
const text79 = document.getElementById('text79');
text79.innerHTML = number[0];
function textF79() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text79.setAttribute('fill', newColor);
  if (!location1.get(text79.x['animVal'][0].value+""+text79.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text79.x['animVal'][0].value);
    shadow.setAttribute('y', text79.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text79.x['animVal'][0].value+""+text79.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text79.x['animVal'][0].value + 5;
      text79.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text79.x['animVal'][0].value - 5;
      text79.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text79.y['animVal'][0].value + 5;
      text79.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text79.y['animVal'][0].value - 5;
      text79.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF79, 0.0001);
const text80 = document.getElementById('text80');
text80.innerHTML = number[0];
function textF80() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text80.setAttribute('fill', newColor);
  if (!location1.get(text80.x['animVal'][0].value+""+text80.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text80.x['animVal'][0].value);
    shadow.setAttribute('y', text80.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text80.x['animVal'][0].value+""+text80.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text80.x['animVal'][0].value + 5;
      text80.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text80.x['animVal'][0].value - 5;
      text80.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text80.y['animVal'][0].value + 5;
      text80.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text80.y['animVal'][0].value - 5;
      text80.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF80, 0.0001);
const text81 = document.getElementById('text81');
text81.innerHTML = number[0];
function textF81() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text81.setAttribute('fill', newColor);
  if (!location1.get(text81.x['animVal'][0].value+""+text81.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text81.x['animVal'][0].value);
    shadow.setAttribute('y', text81.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text81.x['animVal'][0].value+""+text81.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text81.x['animVal'][0].value + 5;
      text81.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text81.x['animVal'][0].value - 5;
      text81.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text81.y['animVal'][0].value + 5;
      text81.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text81.y['animVal'][0].value - 5;
      text81.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF81, 0.0001);
const text82 = document.getElementById('text82');
text82.innerHTML = number[0];
function textF82() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text82.setAttribute('fill', newColor);
  if (!location1.get(text82.x['animVal'][0].value+""+text82.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text82.x['animVal'][0].value);
    shadow.setAttribute('y', text82.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text82.x['animVal'][0].value+""+text82.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text82.x['animVal'][0].value + 5;
      text82.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text82.x['animVal'][0].value - 5;
      text82.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text82.y['animVal'][0].value + 5;
      text82.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text82.y['animVal'][0].value - 5;
      text82.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF82, 0.0001);
const text83 = document.getElementById('text83');
text83.innerHTML = number[0];
function textF83() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text83.setAttribute('fill', newColor);
  if (!location1.get(text83.x['animVal'][0].value+""+text83.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text83.x['animVal'][0].value);
    shadow.setAttribute('y', text83.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text83.x['animVal'][0].value+""+text83.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text83.x['animVal'][0].value + 5;
      text83.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text83.x['animVal'][0].value - 5;
      text83.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text83.y['animVal'][0].value + 5;
      text83.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text83.y['animVal'][0].value - 5;
      text83.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF83, 0.0001);
const text84 = document.getElementById('text84');
text84.innerHTML = number[0];
function textF84() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text84.setAttribute('fill', newColor);
  if (!location1.get(text84.x['animVal'][0].value+""+text84.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text84.x['animVal'][0].value);
    shadow.setAttribute('y', text84.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text84.x['animVal'][0].value+""+text84.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text84.x['animVal'][0].value + 5;
      text84.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text84.x['animVal'][0].value - 5;
      text84.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text84.y['animVal'][0].value + 5;
      text84.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text84.y['animVal'][0].value - 5;
      text84.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF84, 0.0001);
const text85 = document.getElementById('text85');
text85.innerHTML = number[0];
function textF85() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text85.setAttribute('fill', newColor);
  if (!location1.get(text85.x['animVal'][0].value+""+text85.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text85.x['animVal'][0].value);
    shadow.setAttribute('y', text85.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text85.x['animVal'][0].value+""+text85.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text85.x['animVal'][0].value + 5;
      text85.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text85.x['animVal'][0].value - 5;
      text85.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text85.y['animVal'][0].value + 5;
      text85.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text85.y['animVal'][0].value - 5;
      text85.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF85, 0.0001);
const text86 = document.getElementById('text86');
text86.innerHTML = number[0];
function textF86() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text86.setAttribute('fill', newColor);
  if (!location1.get(text86.x['animVal'][0].value+""+text86.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text86.x['animVal'][0].value);
    shadow.setAttribute('y', text86.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text86.x['animVal'][0].value+""+text86.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text86.x['animVal'][0].value + 5;
      text86.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text86.x['animVal'][0].value - 5;
      text86.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text86.y['animVal'][0].value + 5;
      text86.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text86.y['animVal'][0].value - 5;
      text86.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF86, 0.0001);
const text87 = document.getElementById('text87');
text87.innerHTML = number[0];
function textF87() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text87.setAttribute('fill', newColor);
  if (!location1.get(text87.x['animVal'][0].value+""+text87.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text87.x['animVal'][0].value);
    shadow.setAttribute('y', text87.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text87.x['animVal'][0].value+""+text87.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text87.x['animVal'][0].value + 5;
      text87.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text87.x['animVal'][0].value - 5;
      text87.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text87.y['animVal'][0].value + 5;
      text87.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text87.y['animVal'][0].value - 5;
      text87.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF87, 0.0001);
const text88 = document.getElementById('text88');
text88.innerHTML = number[0];
function textF88() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text88.setAttribute('fill', newColor);
  if (!location1.get(text88.x['animVal'][0].value+""+text88.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text88.x['animVal'][0].value);
    shadow.setAttribute('y', text88.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text88.x['animVal'][0].value+""+text88.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text88.x['animVal'][0].value + 5;
      text88.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text88.x['animVal'][0].value - 5;
      text88.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text88.y['animVal'][0].value + 5;
      text88.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text88.y['animVal'][0].value - 5;
      text88.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF88, 0.0001);
const text89 = document.getElementById('text89');
text89.innerHTML = number[0];
function textF89() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text89.setAttribute('fill', newColor);
  if (!location1.get(text89.x['animVal'][0].value+""+text89.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text89.x['animVal'][0].value);
    shadow.setAttribute('y', text89.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text89.x['animVal'][0].value+""+text89.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text89.x['animVal'][0].value + 5;
      text89.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text89.x['animVal'][0].value - 5;
      text89.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text89.y['animVal'][0].value + 5;
      text89.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text89.y['animVal'][0].value - 5;
      text89.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF89, 0.0001);
const text90 = document.getElementById('text90');
text90.innerHTML = number[0];
function textF90() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text90.setAttribute('fill', newColor);
  if (!location1.get(text90.x['animVal'][0].value+""+text90.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text90.x['animVal'][0].value);
    shadow.setAttribute('y', text90.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text90.x['animVal'][0].value+""+text90.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text90.x['animVal'][0].value + 5;
      text90.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text90.x['animVal'][0].value - 5;
      text90.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text90.y['animVal'][0].value + 5;
      text90.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text90.y['animVal'][0].value - 5;
      text90.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF90, 0.0001);
const text91 = document.getElementById('text91');
text91.innerHTML = number[0];
function textF91() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text91.setAttribute('fill', newColor);
  if (!location1.get(text91.x['animVal'][0].value+""+text91.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text91.x['animVal'][0].value);
    shadow.setAttribute('y', text91.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text91.x['animVal'][0].value+""+text91.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text91.x['animVal'][0].value + 5;
      text91.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text91.x['animVal'][0].value - 5;
      text91.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text91.y['animVal'][0].value + 5;
      text91.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text91.y['animVal'][0].value - 5;
      text91.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF91, 0.0001);
const text92 = document.getElementById('text92');
text92.innerHTML = number[0];
function textF92() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text92.setAttribute('fill', newColor);
  if (!location1.get(text92.x['animVal'][0].value+""+text92.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text92.x['animVal'][0].value);
    shadow.setAttribute('y', text92.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text92.x['animVal'][0].value+""+text92.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text92.x['animVal'][0].value + 5;
      text92.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text92.x['animVal'][0].value - 5;
      text92.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text92.y['animVal'][0].value + 5;
      text92.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text92.y['animVal'][0].value - 5;
      text92.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF92, 0.0001);
const text93 = document.getElementById('text93');
text93.innerHTML = number[0];
function textF93() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text93.setAttribute('fill', newColor);
  if (!location1.get(text93.x['animVal'][0].value+""+text93.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text93.x['animVal'][0].value);
    shadow.setAttribute('y', text93.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text93.x['animVal'][0].value+""+text93.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text93.x['animVal'][0].value + 5;
      text93.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text93.x['animVal'][0].value - 5;
      text93.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text93.y['animVal'][0].value + 5;
      text93.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text93.y['animVal'][0].value - 5;
      text93.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF93, 0.0001);
const text94 = document.getElementById('text94');
text94.innerHTML = number[0];
function textF94() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text94.setAttribute('fill', newColor);
  if (!location1.get(text94.x['animVal'][0].value+""+text94.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text94.x['animVal'][0].value);
    shadow.setAttribute('y', text94.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text94.x['animVal'][0].value+""+text94.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text94.x['animVal'][0].value + 5;
      text94.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text94.x['animVal'][0].value - 5;
      text94.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text94.y['animVal'][0].value + 5;
      text94.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text94.y['animVal'][0].value - 5;
      text94.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF94, 0.0001);
const text95 = document.getElementById('text95');
text95.innerHTML = number[0];
function textF95() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text95.setAttribute('fill', newColor);
  if (!location1.get(text95.x['animVal'][0].value+""+text95.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text95.x['animVal'][0].value);
    shadow.setAttribute('y', text95.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text95.x['animVal'][0].value+""+text95.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text95.x['animVal'][0].value + 5;
      text95.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text95.x['animVal'][0].value - 5;
      text95.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text95.y['animVal'][0].value + 5;
      text95.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text95.y['animVal'][0].value - 5;
      text95.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF95, 0.0001);
const text96 = document.getElementById('text96');
text96.innerHTML = number[0];
function textF96() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text96.setAttribute('fill', newColor);
  if (!location1.get(text96.x['animVal'][0].value+""+text96.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text96.x['animVal'][0].value);
    shadow.setAttribute('y', text96.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text96.x['animVal'][0].value+""+text96.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text96.x['animVal'][0].value + 5;
      text96.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text96.x['animVal'][0].value - 5;
      text96.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text96.y['animVal'][0].value + 5;
      text96.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text96.y['animVal'][0].value - 5;
      text96.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF96, 0.0001);
const text97 = document.getElementById('text97');
text97.innerHTML = number[0];
function textF97() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text97.setAttribute('fill', newColor);
  if (!location1.get(text97.x['animVal'][0].value+""+text97.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text97.x['animVal'][0].value);
    shadow.setAttribute('y', text97.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text97.x['animVal'][0].value+""+text97.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text97.x['animVal'][0].value + 5;
      text97.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text97.x['animVal'][0].value - 5;
      text97.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text97.y['animVal'][0].value + 5;
      text97.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text97.y['animVal'][0].value - 5;
      text97.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF97, 0.0001);
const text98 = document.getElementById('text98');
text98.innerHTML = number[0];
function textF98() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text98.setAttribute('fill', newColor);
  if (!location1.get(text98.x['animVal'][0].value+""+text98.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text98.x['animVal'][0].value);
    shadow.setAttribute('y', text98.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text98.x['animVal'][0].value+""+text98.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text98.x['animVal'][0].value + 5;
      text98.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text98.x['animVal'][0].value - 5;
      text98.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text98.y['animVal'][0].value + 5;
      text98.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text98.y['animVal'][0].value - 5;
      text98.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF98, 0.0001);
const text99 = document.getElementById('text99');
text99.innerHTML = number[0];
function textF99() {
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  text99.setAttribute('fill', newColor);
  if (!location1.get(text99.x['animVal'][0].value+""+text99.y['animVal'][0].value)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', text99.x['animVal'][0].value);
    shadow.setAttribute('y', text99.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:5px');
    shadow.setAttribute('fill', 'white');
    shadow.append('.');
    document.getElementById('center').append(shadow);
    location1.set(text99.x['animVal'][0].value+""+text99.y['animVal'][0].value, true);
  }
  if (a) {
    if (b) {
      let valueXIncrease = text99.x['animVal'][0].value + 5;
      text99.setAttribute('x', valueXIncrease);

    } else {
      let valueXIncrease = text99.x['animVal'][0].value - 5;
      text99.setAttribute('x', valueXIncrease);

    }
  } else {
    if (b) {
      let valueXIncrease = text99.y['animVal'][0].value + 5;
      text99.setAttribute('y', valueXIncrease);

    } else {
      let valueXIncrease = text99.y['animVal'][0].value - 5;
      text99.setAttribute('y', valueXIncrease);

    }
  }
}
setInterval(textF99, 0.0001);
