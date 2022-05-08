/* eslint-disable no-sparse-arrays */
/* eslint-disable spaced-comment */
/* eslint-disable max-len */
/* eslint-disable comma-style */
/* eslint-disable array-bracket-spacing */
/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
function generateWrapper() {
  let html = '';
  html += `
  <div class="container">
    <h1 class="title">
      Virtual Keyboard
    </h1>
    <textarea class="textarea" name="" id="textarea" cols="30" rows="10" autofocus></textarea>
    <div class="keyboard" id="keyboard"></div>
    <div class="description">${'Клавиатура создана в операционной системе Windows'}</div>
    <div class="description">${'Для переключения языка комбинация: ctrl + alt'}</div>
  </div>
  `;
  const body = document.querySelector('.page__body');
  body.innerHTML = html;
}
generateWrapper();

const parent = document.querySelector('#keyboard');

const keyboard = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, /*8*/,
  /*9*/, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92, /*46*/, /*20*/, 97, 115, 100, 102, 103, 104, 106,
  107, 108, 59, 39, /*13*/, /*16*/, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, 38,
  /*16*/, /*17*/, /*'win'*/, /*18*/, 32, /*18*/, '◄', '▼', '►' /*17*/];

const arr = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ',
  'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG',
  'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
  'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];

const rus = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г',
  'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я',
  'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'ArrowUp', 'Shift', 'Control', 'Meta', 'AltGraph', ' ', 'AltGraph', 'ArrowLeft', 'ArrowDown', 'ArrowRight',
  'Control'];

console.log(arr.length);
console.log(keyboard.length);
console.log(rus.length);
const text = document.querySelector('#textarea');

function generateHTML() {
  let div = '';
  for (let i = 0; i < keyboard.length; i++) {
    if (i === 14 || i === 29 || i === 42 || i === 55) {
      div += '<div class="fix"></div>';
    }
    div += `<div class="key" data-num="${keyboard[i]}">${String.fromCharCode(keyboard[i])}</div>`;
  }
  document.querySelector('#keyboard').innerHTML = div;

  const UP = document.querySelector(`[data-num="${38}"]`);
  UP.innerHTML = '▲';
  const LEFT = document.querySelector(`[data-num="${'◄'}"]`);
  LEFT.innerHTML = '◄';

  const DOWN = document.querySelector(`[data-num="${'▼'}"]`);
  DOWN.innerHTML = '▼';

  const RIGHT = document.querySelector(`[data-num="${'►'}"]`);
  RIGHT.innerHTML = '►';

  const SPACE = document.querySelector(`[data-num="${32}"]`);
  SPACE.innerHTML = ' ';
  SPACE.classList.add('btn-space');
}
generateHTML();

const buttons = document.querySelectorAll('.key');

function getAttributeKey() {
  const dataKey = document.querySelectorAll('.key');

  for (let i = 0; i < arr.length - 1; i++) {
    dataKey[i].setAttribute('data-key', arr[i]);
  }
}
getAttributeKey();

function getRusAttribute() {
  const dataKey = document.querySelectorAll('.key');

  for (let i = 0; i < rus.length - 1; i++) {
    dataKey[i].setAttribute('data-rus', rus[i]);
  }
}
getRusAttribute();

const TAB = document.querySelector('[data-key="Tab"]');
const DEL = document.querySelector('[data-key="Delete"]');
const BACKSPACE = document.querySelector('[data-key="Backspace"]');
const CAPS = document.querySelector('[data-key="CapsLock"]');
const ENTER = document.querySelector('[data-key="Enter"]');
const SHIFTLEFT = document.querySelector('[data-key="ShiftLeft"]');
const SHIFTRIGHT = document.querySelector('[data-key="ShiftRight"]');
const CTRLLEFT = document.querySelector('[data-key="ControlLeft"]');
const WIN = document.querySelector('[data-key="MetaLeft"]');
const ALTLEFT = document.querySelector('[data-key="AltLeft"]');
const ALTRIGHT = document.querySelector('[data-key="AltRight"]');
const CTRLRIGHT = document.createElement('div');
const UP = document.querySelector(`[data-num="${38}"]`);
const DOWN = document.querySelector(`[data-num="${'▼'}"]`);
const LEFT = document.querySelector(`[data-num="${'◄'}"]`);
const RIGHT = document.querySelector(`[data-num="${'►'}"]`);
const BACKQUOTE = document.querySelector('[data-key="Backquote"]');
const DIGIT1 = document.querySelector('[data-key="Digit1"]');
const DIGIT2 = document.querySelector('[data-key="Digit2"]');
const DIGIT3 = document.querySelector('[data-key="Digit3"]');
const DIGIT4 = document.querySelector('[data-key="Digit4"]');
const DIGIT5 = document.querySelector('[data-key="Digit5"]');
const DIGIT6 = document.querySelector('[data-key="Digit6"]');
const DIGIT7 = document.querySelector('[data-key="Digit7"]');
const DIGIT8 = document.querySelector('[data-key="Digit8"]');
const DIGIT9 = document.querySelector('[data-key="Digit9"]');
const DIGIT0 = document.querySelector('[data-key="Digit0"]');
const MINUS = document.querySelector('[data-key="Minus"]');
const EQUAL = document.querySelector('[data-key="Equal"]');
const BRACKETLEFT = document.querySelector('[data-key="BracketLeft"]');
const BRACKETRIGHT = document.querySelector('[data-key="BracketRight"]');
const BACKSLASH = document.querySelector('[data-key="Backslash"]');
const SEMICOLON = document.querySelector('[data-key="Semicolon"]');
const QUOTE = document.querySelector('[data-key="Quote"]');
const COMMA = document.querySelector('[data-key="Comma"]');
const PERIOD = document.querySelector('[data-key="Period"]');
const SLASH = document.querySelector('[data-key="Slash"]');

const TILDA = document.querySelector('[data-rus="ё"]');
const Q = document.querySelector('[data-rus="й"]');
const W = document.querySelector('[data-rus="ц"]');
const E = document.querySelector('[data-rus="у"]');
const R = document.querySelector('[data-rus="к"]');
const T = document.querySelector('[data-rus="е"]');
const Y = document.querySelector('[data-rus="н"]');
const U = document.querySelector('[data-rus="г"]');
const I = document.querySelector('[data-rus="ш"]');
const O = document.querySelector('[data-rus="щ"]');
const P = document.querySelector('[data-rus="з"]');
const XX = document.querySelector('[data-rus="х"]');
const FIRM = document.querySelector('[data-rus="ъ"]');
const rusSlash = document.querySelector('[data-key="Backslash"]');
const A = document.querySelector('[data-rus="ф"]');
const S = document.querySelector('[data-rus="ы"]');
const D = document.querySelector('[data-rus="в"]');
const F = document.querySelector('[data-rus="а"]');
const G = document.querySelector('[data-rus="п"]');
const H = document.querySelector('[data-rus="р"]');
const J = document.querySelector('[data-rus="о"]');
const K = document.querySelector('[data-rus="л"]');
const L = document.querySelector('[data-rus="д"]');
const rusSemicolon = document.querySelector('[data-rus="ж"]');
const rusMarks = document.querySelector('[data-rus="э"]');
const Z = document.querySelector('[data-rus="я"]');
const X = document.querySelector('[data-rus="ч"]');
const C = document.querySelector('[data-rus="с"]');
const V = document.querySelector('[data-rus="м"]');
const B = document.querySelector('[data-rus="и"]');
const N = document.querySelector('[data-rus="т"]');
const M = document.querySelector('[data-rus="ь"]');
const rusComma = document.querySelector('[data-rus="б"]');
const rusDot = document.querySelector('[data-rus="ю"]');
const rusBackslash = document.querySelector('[data-rus="."]');

const engQ = document.querySelector('[data-key="KeyQ"]').textContent;
const engW = document.querySelector('[data-key="KeyW"]').textContent;
const engE = document.querySelector('[data-key="KeyE"]').textContent;
const engR = document.querySelector('[data-key="KeyR"]').textContent;
const engT = document.querySelector('[data-key="KeyT"]').textContent;
const engY = document.querySelector('[data-key="KeyY"]').textContent;
const engU = document.querySelector('[data-key="KeyU"]').textContent;
const engI = document.querySelector('[data-key="KeyI"]').textContent;
const engO = document.querySelector('[data-key="KeyO"]').textContent;
const engP = document.querySelector('[data-key="KeyP"]').textContent;
const engA = document.querySelector('[data-key="KeyA"]').textContent;
const engS = document.querySelector('[data-key="KeyS"]').textContent;
const engD = document.querySelector('[data-key="KeyD"]').textContent;
const engF = document.querySelector('[data-key="KeyF"]').textContent;
const engG = document.querySelector('[data-key="KeyG"]').textContent;
const engH = document.querySelector('[data-key="KeyH"]').textContent;
const engJ = document.querySelector('[data-key="KeyJ"]').textContent;
const engK = document.querySelector('[data-key="KeyK"]').textContent;
const engL = document.querySelector('[data-key="KeyL"]').textContent;
const engZ = document.querySelector('[data-key="KeyZ"]').textContent;
const engX = document.querySelector('[data-key="KeyX"]').textContent;
const engC = document.querySelector('[data-key="KeyC"]').textContent;
const engV = document.querySelector('[data-key="KeyV"]').textContent;
const engB = document.querySelector('[data-key="KeyB"]').textContent;
const engN = document.querySelector('[data-key="KeyN"]').textContent;
const engM = document.querySelector('[data-key="KeyM"]').textContent;

function genereteSpecialsKeys() {
  TAB.classList.add('btn-tab');

  DEL.classList.add('btn-del');

  BACKSPACE.classList.add('btn-back');

  CAPS.classList.add('btn-caps');

  ENTER.classList.add('btn-enter');

  SHIFTLEFT.classList.add('btn-shift');

  SHIFTRIGHT.className += ' btn-shift';
  // SHIFTRIGHT.classList.remove('key');

  CTRLLEFT.classList.add('btn-ctrl');

  WIN.classList.add('btn-win');

  ALTLEFT.classList.add('btn-alt');

  ALTRIGHT.classList.add('btn-alt');

  CTRLRIGHT.className += 'key btn-ctrl';
  CTRLRIGHT.setAttribute('data-key', 'ControlRight');
  parent.append(CTRLRIGHT);
}
genereteSpecialsKeys();

function keyPress() {
  document.addEventListener('keypress', (event) => {
    console.log(event.code); // keyA
    console.log(event.keyCode); // 97;
    console.log(event.charCode);
    // document.querySelectorAll('#keyboard .key').forEach((elem) => {
    //   setTimeout(() => {
    //     elem.classList.remove('active');
    //   }, 400)
    // });
    document.querySelector(`[data-key="${event.code}"]`).classList.add('active');
    text.focus();
  });
}
keyPress();

function keyDown() {
  document.addEventListener('keydown', (event) => {
    if (event.code === 'ShiftLeft') {
      event.preventDefault();
      document.querySelector('[data-key="ShiftLeft"]').classList.add('active');
    }
    if (event.code === 'ShiftRight') {
      event.preventDefault();
      document.querySelector('[data-key="ShiftRight"]').classList.add('active');
    }
    if (event.shiftKey) {
      BACKQUOTE.innerHTML = '~';
      DIGIT1.innerHTML = '!';
      DIGIT2.innerHTML = '@';
      DIGIT3.innerHTML = '#';
      DIGIT4.innerHTML = '$';
      DIGIT5.innerHTML = '%';
      DIGIT6.innerHTML = '^';
      DIGIT7.innerHTML = '&';
      DIGIT8.innerHTML = '*';
      DIGIT9.innerHTML = '(';
      DIGIT0.innerHTML = ')';
      MINUS.innerHTML = '_';
      EQUAL.innerHTML = '+';
      BRACKETLEFT.innerHTML = '{';
      BRACKETRIGHT.innerHTML = '}';
      BACKSLASH.innerHTML = '|';
      SEMICOLON.innerHTML = ':';
      QUOTE.innerHTML = '"';
      COMMA.innerHTML = '<';
      PERIOD.innerHTML = '>';
      SLASH.innerHTML = '?';

      buttons.forEach((elem) => {
        elem.classList.add('uppercase');
        elem.innerHTML = elem.textContent.toUpperCase();
      });
    }
    if (event.code === 'CapsLock') {
      event.preventDefault();
      document.querySelector('[data-key="CapsLock"]').classList.toggle('active');
      buttons.forEach((elem) => {
        elem.classList.toggle('uppercase');
      });
    }
    if (event.code === 'ControlLeft') {
      document.querySelector('[data-key="ControlLeft"]').classList.add('active');
    }
    if (event.code === 'ControlRight') {
      document.querySelector('[data-key="ControlRight"]').classList.add('active');
    }
    if (event.code === 'AltRight') {
      event.preventDefault();
      document.querySelector('[data-key="AltRight"]').classList.add('active');
    }
    if (event.code === 'AltLeft') {
      event.preventDefault();
      document.querySelector('[data-key="AltLeft"]').classList.add('active');
    }
    if (event.code === 'Enter') {
      event.preventDefault();
      document.querySelector('[data-key="Enter"]').classList.add('active');
      const str = text.value;
      text.value = `${str}\n`;
      return text.value;
    }
    if (event.code === 'Backspace') {
      document.querySelector('[data-key="Backspace"]').classList.add('active');
    }
    if (event.code === 'Delete') {
      document.querySelector('[data-key="Delete"]').classList.add('active');
    }
    if (event.code === 'MetaLeft') {
      document.querySelector('[data-key="MetaLeft"]').classList.add('active');
    }
    if (event.code === 'Tab') {
      event.preventDefault();
      document.querySelector('[data-key="Tab"]').classList.add('active');
    }
    if (event.code === 'ArrowUp') {
      event.preventDefault();
      UP.classList.add('active');
      UP.innerHTML = '▲';
      const str = text.value;
      text.value = `${str}▲`;
    }
    if (event.code === 'ArrowDown') {
      event.preventDefault();
      DOWN.classList.add('active');
      DOWN.innerHTML = '▼';
      const str = text.value;
      text.value = `${str}▼`;
    }
    if (event.code === 'ArrowLeft') {
      event.preventDefault();
      LEFT.classList.add('active');
      LEFT.innerHTML = '◄';
      const str = text.value;
      text.value = `${str}◄`;
    }
    if (event.code === 'ArrowRight') {
      event.preventDefault();
      RIGHT.classList.add('active');
      RIGHT.innerHTML = '►';
      const str = text.value;
      text.value = `${str}►`;
    }
    if (event.altKey && event.ctrlKey) {
      TILDA.innerHTML = TILDA.dataset.rus;
      Q.innerHTML = Q.dataset.rus;
      W.innerHTML = W.dataset.rus;
      E.innerHTML = E.dataset.rus;
      R.innerHTML = R.dataset.rus;
      T.innerHTML = T.dataset.rus;
      Y.innerHTML = Y.dataset.rus;
      U.innerHTML = U.dataset.rus;
      I.innerHTML = I.dataset.rus;
      O.innerHTML = O.dataset.rus;
      P.innerHTML = P.dataset.rus;
      XX.innerHTML = XX.dataset.rus;
      FIRM.innerHTML = FIRM.dataset.rus;
      rusSlash.innerHTML = rusSlash.dataset.rus;
      A.innerHTML = A.dataset.rus;
      S.innerHTML = S.dataset.rus;
      D.innerHTML = D.dataset.rus;
      F.innerHTML = F.dataset.rus;
      G.innerHTML = G.dataset.rus;
      H.innerHTML = H.dataset.rus;
      J.innerHTML = J.dataset.rus;
      K.innerHTML = K.dataset.rus;
      L.innerHTML = L.dataset.rus;
      rusSemicolon.innerHTML = rusSemicolon.dataset.rus;
      rusMarks.innerHTML = rusMarks.dataset.rus;
      Z.innerHTML = Z.dataset.rus;
      X.innerHTML = X.dataset.rus;
      C.innerHTML = C.dataset.rus;
      V.innerHTML = V.dataset.rus;
      B.innerHTML = B.dataset.rus;
      N.innerHTML = N.dataset.rus;
      M.innerHTML = M.dataset.rus;
      rusComma.innerHTML = rusComma.dataset.rus;
      rusDot.innerHTML = rusDot.dataset.rus;
      rusBackslash.innerHTML = rusBackslash.dataset.rus;
      text.focus();
    }
    return true;

    // if(event.keyCode === 20 || event.charCode === 20){
    //   document.querySelector('[data-key="CapsLock"]').classList.add('active');
    // }
  });
}
keyDown();

function keyUp() {
  document.addEventListener('keyup', (event) => {
    document.querySelectorAll('#keyboard .key').forEach((elem) => {
      elem.classList.remove('active');
    });
    SHIFTRIGHT.classList.remove('active');
    if (!event.shiftKey) {
      BACKQUOTE.innerHTML = '`';
      DIGIT1.innerHTML = '1';
      DIGIT2.innerHTML = '2';
      DIGIT3.innerHTML = '3';
      DIGIT4.innerHTML = '4';
      DIGIT5.innerHTML = '5';
      DIGIT6.innerHTML = '6';
      DIGIT7.innerHTML = '7';
      DIGIT8.innerHTML = '8';
      DIGIT9.innerHTML = '9';
      DIGIT0.innerHTML = '0';
      MINUS.innerHTML = '-';
      EQUAL.innerHTML = '=';
      BRACKETLEFT.innerHTML = '[';
      BRACKETRIGHT.innerHTML = ']';
      BACKSLASH.innerHTML = String.fromCharCode(92);
      SEMICOLON.innerHTML = ';';
      QUOTE.innerHTML = String.fromCharCode(39);
      COMMA.innerHTML = ',';
      PERIOD.innerHTML = '.';
      SLASH.innerHTML = '/';
      buttons.forEach((elem) => {
        elem.classList.remove('uppercase');
        elem.innerHTML = elem.textContent.toLowerCase();
      });
    }
    if (!(event.altKey && event.shiftKey)) {
      Q.innerHTML = engQ;
      W.innerHTML = engW;
      E.innerHTML = engE;
      R.innerHTML = engR;
      T.innerHTML = engT;
      Y.innerHTML = engY;
      U.innerHTML = engU;
      I.innerHTML = engI;
      O.innerHTML = engO;
      P.innerHTML = engP;
      A.innerHTML = engA;
      S.innerHTML = engS;
      D.innerHTML = engD;
      F.innerHTML = engF;
      G.innerHTML = engG;
      H.innerHTML = engH;
      J.innerHTML = engJ;
      K.innerHTML = engK;
      L.innerHTML = engL;
      Z.innerHTML = engZ;
      X.innerHTML = engX;
      C.innerHTML = engC;
      V.innerHTML = engV;
      B.innerHTML = engB;
      N.innerHTML = engN;
      M.innerHTML = engM;
      text.focus();
    }
  });
}
keyUp();

function mouseDown() {
  document.querySelectorAll('#keyboard .key').forEach((elem) => {
    elem.addEventListener('click', function () {
      document.querySelectorAll('#keyboard .key').forEach((element) => {
        setTimeout(() => {
          element.classList.remove('active');
        }, 50);
        // element.classList.remove('active');
      });
      const code = this.textContent;
      this.classList.add('active');
      // const datakeys = this.getAttribute('data-key');
      // const datanum = this.getAttribute('data-num');
      // console.log('дата нам: ' + datanum);
      // console.log('дата кейс: ' + datakeys);
      text.focus();
      text.value += code;
    });
  });
}
mouseDown();

function paramKey() {
  document.querySelectorAll('.key').forEach((elem) => {
    elem.addEventListener('mousedown', () => {
      if (elem.dataset.key === 'Backspace') {
        const str = text.value;
        text.value = str.slice(0, -1);
        return text.value;
      }
      if (elem.dataset.key === 'Enter') {
        const str = text.value;
        text.value = `${str}\n`;
        return text.value;
      }
      if (elem.dataset.key === 'Delete') {
        const str = text.value;
        text.value = str.slice(0, -1);
        return text.value;
      }
      if (elem.dataset.key === 'ShiftRight' || elem.dataset.key === 'ShiftLeft') {
        BACKQUOTE.innerHTML = '~';
        DIGIT1.innerHTML = '!';
        DIGIT2.innerHTML = '@';
        DIGIT3.innerHTML = '#';
        DIGIT4.innerHTML = '$';
        DIGIT5.innerHTML = '%';
        DIGIT6.innerHTML = '^';
        DIGIT7.innerHTML = '&';
        DIGIT8.innerHTML = '*';
        DIGIT9.innerHTML = '(';
        DIGIT0.innerHTML = ')';
        MINUS.innerHTML = '_';
        EQUAL.innerHTML = '+';
        BRACKETLEFT.innerHTML = '{';
        BRACKETRIGHT.innerHTML = '}';
        BACKSLASH.innerHTML = '|';
        SEMICOLON.innerHTML = ':';
        QUOTE.innerHTML = '"';
        COMMA.innerHTML = '<';
        PERIOD.innerHTML = '>';
        SLASH.innerHTML = '?';
        buttons.forEach((elem) => {
          elem.classList.add('uppercase');
          elem.innerHTML = elem.textContent.toUpperCase();
        });
      }
      if (elem.dataset.key === 'CapsLock') {
        document.querySelector('[data-key="CapsLock"]').classList.toggle('active');
        buttons.forEach((elem) => {
          elem.classList.add('uppercase');
          elem.innerHTML = elem.textContent.toUpperCase();
        });
      }
      return true;
    });
  });
}
paramKey();

function mouseUp() {
  document.querySelectorAll('.key').forEach((elem) => {
    elem.addEventListener('mouseup', () => {
      if (elem.dataset.key === 'ShiftRight' || elem.dataset.key === 'ShiftLeft') {
        BACKQUOTE.innerHTML = '`';
        DIGIT1.innerHTML = '1';
        DIGIT2.innerHTML = '2';
        DIGIT3.innerHTML = '3';
        DIGIT4.innerHTML = '4';
        DIGIT5.innerHTML = '5';
        DIGIT6.innerHTML = '6';
        DIGIT7.innerHTML = '7';
        DIGIT8.innerHTML = '8';
        DIGIT9.innerHTML = '9';
        DIGIT0.innerHTML = '0';
        MINUS.innerHTML = '-';
        EQUAL.innerHTML = '=';
        BRACKETLEFT.innerHTML = '[';
        BRACKETRIGHT.innerHTML = ']';
        BACKSLASH.innerHTML = String.fromCharCode(92);
        SEMICOLON.innerHTML = ';';
        QUOTE.innerHTML = String.fromCharCode(39);
        COMMA.innerHTML = ',';
        PERIOD.innerHTML = '.';
        SLASH.innerHTML = '/';
        buttons.forEach((elem) => {
          elem.classList.remove('uppercase');
          elem.innerHTML = elem.textContent.toLowerCase();
        });
      }
      if (elem.dataset.key === 'CapsLock') {
        document.querySelector('[data-key="CapsLock"]').classList.toggle('active');
        buttons.forEach((elem) => {
          elem.classList.remove('uppercase');
          elem.innerHTML = elem.textContent.toLowerCase();
        });
      }
    });
  });
}
mouseUp();

// window.onload = function () {
//   // eslint-disable-next-line no-alert
//   alert('Буду благодарен, если проверите работу в четверг. Заранее спасибо');
// };
