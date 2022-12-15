(function() {
  'use strict';
var redClick = document.getElementById('stopButton')
var greenClick = document.getElementById('goButton')
var yellowClick = document.getElementById('slowButton')

var redBulb = document.getElementById('stopLight')
var greenBulb = document.getElementById('goLight')
var yellowBulb = document.getElementById('slowLight')

var buttonCon = 'on'


redClick.addEventListener('click', function (e) {
  //redBulb.style.background = 'red'
  //e.target.classList.add('stop')
  redBulb.classList.toggle('stop')
  // if (buttonCon === 'on'){
  //   redBulb.style.background = 'red'
  //   buttonCon = 'off'
  // } else {
  //   redBulb.style.background = 'black'
  //   buttonCon = 'on'
  // }
  
  // console.log('click happened')
})

greenClick.addEventListener('click', function () {
  //greenBulb.style.background = 'green'
  greenBulb.classList.toggle('go')
  // if (buttonCon === 'on'){
  //   greenBulb.style.background = 'green'
  //   buttonCon = 'off'
  // } else {
  //   greenBulb.style.background = 'black'
  //   buttonCon = 'on'
  // }
  // console.log('click happened')
})

yellowClick.addEventListener('click', function () {
  //yellowBulb.style.background = 'yellow'
  yellowBulb.classList.toggle('slow')
  // if (buttonCon === 'on'){
  //   yellowBulb.style.background = 'yellow'
  //   buttonCon = 'off'
  // } else {
  //   yellowBulb.style.background = 'black'
  //   buttonCon = 'on'
  // }
  // console.log('click happened')
})

// redClick.addEventListener('mouseenter', function (e) {
// console.log('Entered ' + redClick.textContent + ' button')
// })
// redClick.addEventListener('mouseleave', function (e) {
//   console.log('Left ' + redClick.textContent + ' button')
// })
// yellowClick.addEventListener('mouseenter', function (e) {
//   console.log('Entered ' + yellowClick.textContent + ' button')
//   })
//   yellowClick.addEventListener('mouseleave', function (e) {
//     console.log('Left ' + yellowClick.textContent + ' button')
//   })
//   greenClick.addEventListener('mouseenter', function (e) {
//     console.log('Entered ' + greenClick.textContent + ' button')
//     })
//     greenClick.addEventListener('mouseleave', function (e) {
//       console.log('Left ' + greenClick.textContent + ' button')
//     })
document.getElementById('controls').addEventListener('click', function (e) {

  if (e.target && e.target.className == 'button')
    if (buttonCon === 'on'){
     console.log(e.target.id.replace("post-", ""), " bulb on")
      buttonCon = 'off'
    } else {
      console.log(e.target.id.replace("post-", ""), " bulb off")
       buttonCon = 'on'
    }
      
   //console.log("List item ", e.target.id.replace("post-", ""), " was clicked")

})
  // YOUR CODE HERE
//if click happens change bulb background to red.


})();

// "<textContent> bulb on"`
// //Locate what we are trying to manipulate
//         < div id="controls">      
//       // <div id="stopButton" class="button">Stop</div>
//       // <div id="slowButton" class="button">Slow</div>
//       // <div id="goButton" class="button">Go</div>

//       // <div id="traffic-light">
//       // <div id="stopLight" class="bulb"></div>
//       // <div id="slowLight" class="bulb"></div>
//       // <div id="goLight" class="bulb"></div>