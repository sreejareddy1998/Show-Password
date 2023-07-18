// Import stylesheets
import './style.css';
// import './index.html';
// Write Javascript code!
function myFunction() {
  let x = document.getElementById('password');
  if (x.type === 'password') {
    x.type = 'text';
  } else {
    x.type = 'password';
  }
  console.log(x.type);
}
