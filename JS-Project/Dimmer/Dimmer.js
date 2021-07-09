const slider = document.querySelector('#switch');
const room = document.querySelector('body')


slider.addEventListener('mousemove', function(e) {
    const y =e.pageY-this.offsetTop;
    const percent = y / this.offsetHeight;
    const height = Math.round(percent * 100);
    const brightness = Math.abs(100-height)/100;
    const rgvalue = 255*brightness;

    room.style.background = "linear-gradient(135deg, rgba("+rgvalue+","+rgvalue+",0,1) 0%, rgba(0,0,0,1) 100%)";

})