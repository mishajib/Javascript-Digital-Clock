window.onload = function () {
    var hEl = document.querySelector('.hour .val');
    var mEl = document.querySelector('.min .val');
    var sEl = document.querySelector('.sec .val');

    setInterval(function () {
        var now = new Date();
        hEl.innerHTML = now.getHours();
        mEl.innerHTML = now.getMinutes();
        sEl.innerHTML = now.getSeconds();
    }, 1000)
}