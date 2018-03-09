var button = document.querySelector('#scroll-up');
button.addEventListener('click', function() {
  animate();
})

function animate() {
  var curentX = document.documentElement.scrollTop;
  var scroll = setInterval(function() {
    if (curentX <= 0) clearInterval(scroll);
    window.scrollBy(0, -5);
    curentX -= 5;
  }, 10)
}
