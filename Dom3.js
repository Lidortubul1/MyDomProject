// script.js
document.getElementById('myButton').addEventListener('click', function() {
  this.textContent = 'clicked!';
  this.disabled = true;
});
