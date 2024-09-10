function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById('btnUp').className = 'button-up visible';
    } else {
        document.getElementById('btnUp').className = 'button-up hidden';
    }
}

window.onscroll = function () { scrollFunction() };
