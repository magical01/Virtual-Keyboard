function generateWrapper() {
  let html = '';
  html += `
  <div class="container">
  <h1 class="title">
    Virtual Keyboard
  </h1>
  <textarea class="textarea" name="" id="textarea" cols="30" rows="10" autofocus></textarea>
    <div class="keyboard" id="keyboard">
      
    </div>
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
/*16*/, /*17*/, /*'win'*/, /*18*/, 32, /*18*/, '◄', '▼', '►', /*17*/];

const arr = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ',
 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash','Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG',
 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
  'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];

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

function genereteSpecialsKeys() {
  const TAB = document.querySelector('[data-key="Tab"]');
  TAB.classList.add('btn-tab');
  const DEL = document.querySelector('[data-key="Delete"]');
  DEL.classList.add('btn-del');

  const BACKSPACE = document.querySelector('[data-key="Backspace"]');
  BACKSPACE.classList.add('btn-back');

  const CAPS = document.querySelector('[data-key="CapsLock"]');
  CAPS.classList.add('btn-caps');

  const ENTER = document.querySelector('[data-key="Enter"]');
  ENTER.classList.add('btn-enter');

  const SHIFTLEFT = document.querySelector('[data-key="ShiftLeft"]');
  SHIFTLEFT.classList.add('btn-shift');

  const SHIFTRIGHT = document.querySelector('[data-key="ShiftRight"]');
  SHIFTRIGHT.classList.add('btn-shift');

  const CTRLLEFT = document.querySelector('[data-key="ControlLeft"]');
  CTRLLEFT.classList.add('btn-ctrl');

  const WIN = document.querySelector('[data-key="MetaLeft"]');
  WIN.classList.add('btn-win');

  const ALTLEFT = document.querySelector('[data-key="AltLeft"]');
  ALTLEFT.classList.add('btn-alt');

  const ALTRIGHT = document.querySelector('[data-key="AltRight"]');
  ALTRIGHT.classList.add('btn-alt');

  const CTRLRIGHT = document.createElement('div');
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
    document.querySelectorAll('#keyboard .key').forEach((elem) => {
      elem.classList.remove('active');
    });
    document.querySelector(`[data-num="${event.keyCode}"]`).classList.add('active');
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
      buttons.forEach((elem) => {
        elem.classList.add('uppercase');
        elem.innerHTML = elem.textContent.toUpperCase();
      });
    }
    if (event.code === 'CapsLock') {
      event.preventDefault();
      document.querySelector('[data-key="CapsLock"]').classList.toggle('active');
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
      text.value = str + '\n';
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

    // if(event.keyCode === 20 || event.charCode === 20){
    //   document.querySelector('[data-key="CapsLock"]').classList.add('active');
    // }
  });
}
keyDown();