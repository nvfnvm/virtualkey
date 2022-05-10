/* eslint-disable linebreak-style */
alert('Ссылка на репозиторий - https://github.com/nvfnvm/virtualkey');
// keys

const keysEn = [
  [
    { key: '`', caps: '~', code: 'Backquote' },
    { key: '1', caps: '!', code: 'Digit1' },
    { key: '2', caps: '@', code: 'Digit2' },
    { key: '3', caps: '#', code: 'Digit3' },
    { key: '4', caps: '$', code: 'Digit4' },
    { key: '5', caps: '%', code: 'Digit5' },
    { key: '6', caps: '^', code: 'Digit6' },
    { key: '7', caps: '&', code: 'Digit7' },
    { key: '8', caps: '*', code: 'Digit8' },
    { key: '9', caps: '(', code: 'Digit9' },
    { key: '0', caps: ')', code: 'Digit0' },
    { key: '-', caps: '_', code: 'Minus' },
    { key: '=', caps: '+', code: 'Equal' },
    { key: 'backspace', caps: 'backspace', code: 'Backspace' },
  ],
  [
    { key: 'tab', caps: 'tab', code: 'Tab' },
    { key: 'q', caps: 'Q', code: 'KeyQ' },
    { key: 'w', caps: 'W', code: 'KeyW' },
    { key: 'e', caps: 'E', code: 'KeyE' },
    { key: 'r', caps: 'R', code: 'KeyR' },
    { key: 't', caps: 'T', code: 'KeyT' },
    { key: 'y', caps: 'Y', code: 'KeyY' },
    { key: 'u', caps: 'U', code: 'KeyU' },
    { key: 'i', caps: 'I', code: 'KeyI' },
    { key: 'o', caps: 'O', code: 'KeyO' },
    { key: 'p', caps: 'P', code: 'KeyP' },
    { key: '[', caps: '{', code: 'BracketLeft' },
    { key: ']', caps: '}', code: 'BracketRight' },
    { key: '\\', caps: '|', code: 'Backslash' },
  ],
  [
    { key: 'capslock', caps: 'capslock', code: 'CapsLock' },
    { key: 'a', caps: 'A', code: 'KeyA' },
    { key: 's', caps: 'S', code: 'KeyS' },
    { key: 'd', caps: 'D', code: 'KeyD' },
    { key: 'f', caps: 'F', code: 'KeyF' },
    { key: 'g', caps: 'G', code: 'KeyG' },
    { key: 'h', caps: 'H', code: 'KeyH' },
    { key: 'j', caps: 'J', code: 'KeyJ' },
    { key: 'k', caps: 'K', code: 'KeyK' },
    { key: 'l', caps: 'L', code: 'KeyL' },
    { key: ';', caps: ':', code: 'Semicolon' },
    { key: '\'', caps: '"', code: 'Quote' },
    { key: 'enter', caps: 'enter', code: 'Enter' },
  ],
  [
    { key: 'shift', caps: 'shift', code: 'ShiftLeft' },
    { key: 'z', caps: 'Z', code: 'KeyZ' },
    { key: 'x', caps: 'X', code: 'KeyX' },
    { key: 'c', caps: 'C', code: 'KeyC' },
    { key: 'v', caps: 'V', code: 'KeyV' },
    { key: 'b', caps: 'B', code: 'KeyB' },
    { key: 'n', caps: 'N', code: 'KeyN' },
    { key: 'm', caps: 'M', code: 'KeyM' },
    { key: ',', caps: '<', code: 'Comma' },
    { key: '.', caps: '>', code: 'Period' },
    { key: '/', caps: '?', code: 'Slash' },
    { key: '▲', caps: '▲', code: 'ArrowUp' },
    { key: 'shift', caps: 'shift', code: 'ShiftRight' },
  ],
  [
    { key: 'ctrl', caps: 'ctrl', code: 'ControlLeft' },
    { key: 'alt', caps: 'alt', code: 'AltLeft' },
    { key: 'space', caps: 'space', code: 'Space' },
    { key: 'alt', caps: 'alt', code: 'AltRight' },
    { key: 'ctrl', caps: 'ctrl', code: 'ControlRight' },
    { key: '◄', caps: '◄', code: 'ArrowLeft' },
    { key: '▼', caps: '▼', code: 'ArrowDown' },
    { key: '►', caps: '►', code: 'ArrowRight' },

  ],
];

const keysRu = [
  [
    { code: 'Backquote', key: 'ё', caps: 'Ё' },
    { code: 'Digit1', key: '1', caps: '!' },
    { key: '2', caps: '"', code: 'Digit2' },
    { key: '3', caps: '№', code: 'Digit3' },
    { key: '4', caps: ';', code: 'Digit4' },
    { key: '5', caps: '%', code: 'Digit5' },
    { key: '6', caps: ':', code: 'Digit6' },
    { key: '7', caps: '?', code: 'Digit7' },
    { key: '8', caps: '*', code: 'Digit8' },
    { key: '9', caps: '(', code: 'Digit9' },
    { key: '0', caps: ')', code: 'Digit0' },
    { key: '-', caps: '_', code: 'Minus' },
    { key: '=', caps: '+', code: 'Equal' },
    { key: 'backspace', caps: 'backspace', code: 'Backspace' },
  ],
  [
    { key: 'tab', caps: 'tab', code: 'Tab' },
    { key: 'й', caps: 'Й', code: 'KeyQ' },
    { key: 'ц', caps: 'Ц', code: 'KeyW' },
    { key: 'у', caps: 'У', code: 'KeyE' },
    { key: 'к', caps: 'К', code: 'KeyR' },
    { key: 'е', caps: 'Е', code: 'KeyT' },
    { key: 'н', caps: 'Н', code: 'KeyY' },
    { key: 'г', caps: 'Г', code: 'KeyU' },
    { key: 'ш', caps: 'Ш', code: 'KeyI' },
    { key: 'щ', caps: 'Щ', code: 'KeyO' },
    { key: 'з', caps: 'З', code: 'KeyP' },
    { key: 'х', caps: 'Х', code: 'BracketLeft' },
    { key: 'ъ', caps: 'Ъ', code: 'BracketRight' },
    { key: '\\', caps: '/', code: 'Backslash' },
  ],
  [
    { key: 'capslock', caps: 'capslock', code: 'CapsLock' },
    { key: 'ф', caps: 'Ф', code: 'KeyA' },
    { key: 'ы', caps: 'Ы', code: 'KeyS' },
    { key: 'в', caps: 'В', code: 'KeyD' },
    { key: 'а', caps: 'А', code: 'KeyF' },
    { key: 'п', caps: 'П', code: 'KeyG' },
    { key: 'р', caps: 'Р', code: 'KeyH' },
    { key: 'о', caps: 'О', code: 'KeyJ' },
    { key: 'л', caps: 'Л', code: 'KeyK' },
    { key: 'д', caps: 'Д', code: 'KeyL' },
    { key: 'ж', caps: 'Ж', code: 'Semicolon' },
    { key: 'э', caps: 'Э', code: 'Quote' },
    { key: 'enter', caps: 'enter', code: 'Enter' },
  ],
  [
    { key: 'shift', caps: 'shift', code: 'ShiftLeft' },
    { key: 'я', caps: 'Я', code: 'KeyZ' },
    { key: 'ч', caps: 'Ч', code: 'KeyX' },
    { key: 'с', caps: 'С', code: 'KeyC' },
    { key: 'м', caps: 'М', code: 'KeyV' },
    { key: 'и', caps: 'И', code: 'KeyB' },
    { key: 'т', caps: 'Т', code: 'KeyN' },
    { key: 'ь', caps: 'Ь', code: 'KeyM' },
    { key: 'б', caps: 'Б', code: 'Comma' },
    { key: 'ю', caps: 'Ю', code: 'Period' },
    { key: '.', caps: ',', code: 'Slash' },
    { key: '▲', caps: '▲', code: 'ArrowUp' },
    { key: 'shift', caps: 'shift', code: 'ShiftRight' },
  ],
  [
    { key: 'ctrl', caps: 'ctrl', code: 'ControlLeft' },
    { key: 'alt', caps: 'alt', code: 'AltLeft' },
    { key: 'space', caps: 'space', code: 'Space' },
    { key: 'alt', caps: 'alt', code: 'AltRight' },
    { key: 'ctrl', caps: 'ctrl', code: 'ControlRight' },
    { key: '◄', caps: '◄', code: 'ArrowLeft' },
    { key: '▼', caps: '▼', code: 'ArrowDown' },
    { key: '►', caps: '►', code: 'ArrowRight' },
  ],
];

const { body } = document;

const buildNode = (element = 'div', innerHTML = '', ...classes) => {
  const node = document.createElement(element);
  node.classList.add(...classes);
  node.classList.add(...classes);
  node.innerHTML = innerHTML;
  return node;
};

//
(function generatePage() {
  const header = buildNode('div', 'virtual-keyboard', 'header');
  body.append(header);
  const wrapper = buildNode('div', '', 'wrapper');
  body.append(wrapper);
  const textarea = buildNode('textarea', '', 'textarea');
  textarea.setAttribute('autofocus', '');
  textarea.setAttribute('disabled', '');
  wrapper.append(textarea);
  const keyboard = buildNode('div', '', 'keyboard');
  wrapper.append(keyboard);
  const footer = buildNode('div', 'Для переключения языка комбинация: левыe ctrl + alt', 'footer');
  wrapper.append(footer);
}());

const keyboard = document.querySelector('.keyboard');

function generateKeys(data) {
  for (let i = 0; i < data.length; i += 1) {
    const row = buildNode('div', '', 'keyboard-row');
    keyboard.append(row);
    for (let j = 0; j < data[i].length; j += 1) {
      const key = buildNode('div', data[i][j].key, 'key');
      key.setAttribute('keysList', `${data[i][j].code}`);
      row.append(key);
    }
  }
}
//   data switch

(function () {
  if (localStorage.lang === 'ru') {
    generateKeys(keysRu);
  } else {
    localStorage.lang = 'en';
    generateKeys(keysEn);
  }
}());

const backSpace = document.querySelector('[keysList="Backspace"]');
backSpace.classList.add('backspace');
const tab = document.querySelector('[keysList="Tab"]');
tab.classList.add('alter');
const enter = document.querySelector('[keysList="Enter"]');
enter.classList.add('enter');
const shiftLeft = document.querySelector('[keysList="ShiftLeft"]');
shiftLeft.classList.add('alter');
const shiftRight = document.querySelector('[keysList="ShiftRight"]');
shiftRight.classList.add('alter');
const cntrlLeft = document.querySelector('[keysList="ControlLeft"]');
cntrlLeft.classList.add('alter');
const cntrlRight = document.querySelector('[keysList="ControlRight"]');
cntrlRight.classList.add('alter');
const altLeft = document.querySelector('[keysList="AltLeft"]');
altLeft.classList.add('alter');
const altRight = document.querySelector('[keysList="AltRight"]');
altRight.classList.add('alter');
const space = document.querySelector('[keysList="Space"]');
space.classList.add('space');
const capsLock = document.querySelector('[keysList="CapsLock"]');
// anim
function toggleClass(event) {
  const elem = document.querySelector(`[keysList="${event.code}"]`);
  if (elem) {
    elem.classList.toggle('act');
  }
}
document.addEventListener('keydown', toggleClass);
document.addEventListener('keyup', toggleClass);

const keys = document.querySelectorAll('.key');
keys.forEach((element) => element.addEventListener('mousedown', (event) => event.target.classList.add('act')));
keys.forEach((element) => element.addEventListener('mouseup', (event) => event.target.classList.remove('act')));
keys.forEach((element) => element.addEventListener('mouseout', (event) => event.target.classList.remove('act')));

// text

const textarea = document.querySelector('.textarea');
const typeKey = (event) => {
  textarea.focus();
  if (event.code === 'Space' || event.target === space) {
    textarea.value += ' ';
  } else if (event.code === 'Tab' || event.target === tab) {
    textarea.value += '    ';
  } else if (event.code === 'Enter' || event.target === enter) {
    textarea.value += '\n';
  } else if (event.code === 'Backspace' || event.target === backSpace) {
    textarea.value = textarea.value.slice(0, -1);
  } else if (
    ['CapsLock', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'AltLeft', 'AltRight', 'ControlRight'].includes(event.code)
    || [capsLock, shiftLeft, shiftRight, cntrlLeft, cntrlRight, altLeft, altRight]
      .includes(event.target)) {
    textarea.value += '';
  } else if (event.code !== undefined) {
    const element = document.querySelector(`[keysList="${event.code}"]`);
    if (element) {
      textarea.value += document.querySelector(`[keysList="${event.code}"]`).innerHTML;
    }
  } else {
    textarea.value += event.target.innerHTML;
  }
};
keys.forEach((element) => element.addEventListener('click', typeKey));
document.addEventListener('keydown', typeKey);

// language
function changeKeys(data) {
  const values = [];
  for (let i = 0; i < data.length; i += 1) {
    for (let j = 0; j < data[i].length; j += 1) {
      values.push(data[i][j].key);
    }
    for (let n = 0; n < values.length; n += 1) {
      keys[n].textContent = values[n];
    }
  }
}

function changeLang() {
  if (cntrlLeft.classList.contains('act')) {
    if (altLeft.classList.contains('act')) {
      if (localStorage.lang === 'en') {
        localStorage.lang = 'ru';
        changeKeys(keysRu);
      } else if (localStorage.lang === 'ru') {
        localStorage.lang = 'en';
        changeKeys(keysEn);
      }
    }
  }
}

document.addEventListener('keydown', changeLang);

// Caps
capsLock.classList.add('capslock');
function capsLockOn(event) {
  if (event.target === capsLock || event.code === 'CapsLock') {
    let data;
    if (localStorage.lang === 'en') {
      data = keysEn;
    } else if (localStorage.lang === 'ru') {
      data = keysRu;
    }
    capsLock.classList.toggle('active');
    if (capsLock.classList.contains('active')) {
      const values = [];
      for (let i = 0; i < data.length; i += 1) {
        for (let j = 0; j < data[i].length; j += 1) {
          values.push(data[i][j].caps);
        }
        for (let n = 0; n < values.length; n += 1) {
          keys[n].textContent = values[n];
        }
      }
    } else {
      changeKeys(data);
    }
  }
}
capsLock.addEventListener('click', capsLockOn);
document.addEventListener('keydown', capsLockOn);

// Shift
function shiftOn(event) {
  if (event.target === shiftLeft || event.target === shiftRight || event.code === 'ShiftRight' || event.code === 'ShiftLeft') {
    let data;
    if (localStorage.lang === 'en') {
      data = keysEn;
    } else if (localStorage.lang === 'ru') {
      data = keysRu;
    }

    const values = [];
    for (let i = 0; i < data.length; i += 1) {
      for (let j = 0; j < data[i].length; j += 1) {
        values.push(data[i][j].caps);
      }
      for (let n = 0; n < values.length; n += 1) {
        keys[n].textContent = values[n];
      }
    }
  }
}

function shiftOff(event) {
  if (event.target === shiftLeft || event.target === shiftRight || event.code === 'ShiftRight' || event.code === 'ShiftLeft') {
    let data;
    if (localStorage.lang === 'en') {
      data = keysEn;
    } else if (localStorage.lang === 'ru') {
      data = keysRu;
    }
    changeKeys(data);
  }
}
shiftLeft.addEventListener('mousedown', shiftOn);
shiftRight.addEventListener('mousedown', shiftOn);
document.addEventListener('keydown', shiftOn);
document.addEventListener('keydown', shiftOn);
document.addEventListener('keyup', shiftOff);
document.addEventListener('keyup', shiftOff);
shiftLeft.addEventListener('mouseup', shiftOff);
shiftRight.addEventListener('mouseup', shiftOff);
shiftLeft.addEventListener('mouseout', shiftOff);
