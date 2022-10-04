const textIndexNumber = document.getElementById('textIndexNumber');
textIndexNumber.innerHTML = number[0];
function textFIndexNumber() {
const svg = document.getElementById('center');
  let a = Math.random() < 0.5;
  let b = Math.random() > 0.5;
  const newColor = color[Math.floor((Math.random() * 10) % 5)];
  textIndexNumber.setAttribute('fill', newColor);
  const id = textIndexNumber.x['animVal'][0].value+""+textIndexNumber.y['animVal'][0].value;
  if (!location1.get(id)) {
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    shadow.setAttribute('x', textIndexNumber.x['animVal'][0].value);
    shadow.setAttribute('id', id);
    shadow.setAttribute('y', textIndexNumber.y['animVal'][0].value);
    shadow.setAttribute('style', 'font-size:10px');
    shadow.setAttribute('fill', newColor);
    shadow.append(pointer);
    document.getElementById('center').append(shadow);
    location1.set(id, true);
  }else{
  svg.removeChild(document.getElementById(id));
            location1.delete(id);
  }
  if (a) {
    if (b) {
      let valueXIncrease = textIndexNumber.x['animVal'][0].value + 5;
      if (!(valueXIncrease >= svg.width['animVal'].value)){
      textIndexNumber.setAttribute('x', valueXIncrease);
      textIndexNumber.innerHTML = number[0];
      }

    } else {
      let valueXIncrease = textIndexNumber.x['animVal'][0].value - 5;
      if (!(valueXIncrease <= 0)){
      textIndexNumber.setAttribute('x', valueXIncrease);
      textIndexNumber.innerHTML = number[1];
      }

    }
  } else {
    if (b) {
      let valueXIncrease = textIndexNumber.y['animVal'][0].value + 5;
      if (!(valueXIncrease >= svg.height['animVal'].value)){
      textIndexNumber.setAttribute('y', valueXIncrease);
      textIndexNumber.innerHTML = number[2];
      }

    } else {
      let valueXIncrease = textIndexNumber.y['animVal'][0].value - 5;
      if (!(valueXIncrease <= 0)){
      textIndexNumber.setAttribute('y', valueXIncrease);
      textIndexNumber.innerHTML = number[3];
      }

    }
  }
}
setInterval(textFIndexNumber, 0.001);
