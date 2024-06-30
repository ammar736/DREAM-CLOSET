/* زر تبديل (ذكر انثى) */
// const button = document.querySelector('.my-button');
// let isClicked = false;

// button.addEventListener('click', () => {
//   if (!isClicked) {
//     button.style.backgroundColor = 'pink';
//     button.textContent = 'انثى';
//     isClicked = true;
//   } else {
//     button.style.backgroundColor = 'aqua';
//     button.textContent = 'ذكر';
//     isClicked = false;
//   }
// });
/* */
// document.getElementById('bsw').addEventListener('click', function() {
//   var div1 = document.getElementById('sweaterr');
//   var div2 = document.getElementById('sweaterff');
  
//   if (div1.classList.contains('sweaterf')) {
//       div1.classList.remove('sweaterf');
//       div2.classList.add('sweaterf');
//   } else {
//       div1.classList.add('sweaterf');
//       div2.classList.remove('sweaterf');
//   }
// });

document.getElementById('my-button1').addEventListener('click', function() {
  var div1 = document.getElementById('shop1');
  var div2 = document.getElementById('b');
  
  if (div1.classList.contains('hidden')) {
      div1.classList.remove('hidden');
      div2.classList.add('hidden');
  } else {
      div1.classList.add('hidden');
      div2.classList.remove('hidden');
  }
});

document.getElementById('my-button11').addEventListener('click', function() {
  var div1 = document.getElementById('b');
  var div2 = document.getElementById('shop1');
  
  if (div1.classList.contains('hidden')) {
      div1.classList.remove('hidden');
      div2.classList.add('hidden');
  } else {
      div1.classList.add('hidden');
      div2.classList.remove('hidden');
  }
});

document.getElementById('my-button2').addEventListener('click', function() {
  var div1 = document.getElementById('shop2');
  var div2 = document.getElementById('bb');
  
  if (div1.classList.contains('hidden')) {
      div1.classList.remove('hidden');
      div2.classList.add('hidden');
  } else {
      div1.classList.add('hidden');
      div2.classList.remove('hidden');
  }
});

document.getElementById('my-button22').addEventListener('click', function() {
  var div1 = document.getElementById('bb');
  var div2 = document.getElementById('shop2');
  
  if (div1.classList.contains('hidden')) {
      div1.classList.remove('hidden');
      div2.classList.add('hidden');
  } else {
      div1.classList.add('hidden');
      div2.classList.remove('hidden');
  }
});


document.getElementById('my-button3').addEventListener('click', function() {
  var div1 = document.getElementById('shop3');
  var div2 = document.getElementById('bbb');
  
  if (div1.classList.contains('hidden')) {
      div1.classList.remove('hidden');
      div2.classList.add('hidden');
  } else {
      div1.classList.add('hidden');
      div2.classList.remove('hidden');
  }
});

document.getElementById('my-button33').addEventListener('click', function() {
  var div1 = document.getElementById('bbb');
  var div2 = document.getElementById('shop3');
  
  if (div1.classList.contains('hidden')) {
      div1.classList.remove('hidden');
      div2.classList.add('hidden');
  } else {
      div1.classList.add('hidden');
      div2.classList.remove('hidden');
  }
});


document.getElementById('my-button4').addEventListener('click', function() {
  var div1 = document.getElementById('shop4');
  var div2 = document.getElementById('bbbb');
  
  if (div1.classList.contains('hidden')) {
      div1.classList.remove('hidden');
      div2.classList.add('hidden');
  } else {
      div1.classList.add('hidden');
      div2.classList.remove('hidden');
  }
});

document.getElementById('my-button44').addEventListener('click', function() {
  var div1 = document.getElementById('bbbb');
  var div2 = document.getElementById('shop4');
  
  if (div1.classList.contains('hidden')) {
      div1.classList.remove('hidden');
      div2.classList.add('hidden');
  } else {
      div1.classList.add('hidden');
      div2.classList.remove('hidden');
  }
});