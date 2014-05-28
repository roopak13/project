 var element = document.getElementById('dot');
    var angle = 0;
    var x = 0;
    var y = 0;
    var w = (window.innerWidth - 50) / 10;
    var h = w;

    function dotCircle() {
        x = w + w * Math.cos(angle * Math.PI / 180);
        y = h + h * Math.sin(angle * Math.PI / 180);
        
        dot.style.left = x + 'px';
        dot.style.top = y + 'px';

        angle++;
        if (angle > 360) {
            angle = 0;
        }
        setTimeout(dotCircle,1);
    }
dotCircle();