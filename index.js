// Import stylesheets
import './style.css';
// Write Javascript code!
window.myFunction = function () {
  let x = document.getElementById('password');
  x.type = x.type === 'password' ? 'text' : 'password';
  // if (x.type === 'password') {
  //   x.type = 'text';
  // } else {
  //   x.type = 'password';
  // }
  console.log(x.type);
};
