var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// start canvas animation on page load
window.addEventListener('load', (e) => {
    window.requestAnimationFrame(drawCircle);
    window.requestAnimationFrame(drawCircle2);
    window.requestAnimationFrame(drawCircle3);
    window.requestAnimationFrame(drawCircle4);
    window.requestAnimationFrame(drawCircle5);
    window.requestAnimationFrame(drawCircle6);
});


var r = Math.floor(Math.random() * 255);
var g = Math.floor(Math.random() * 255);
var b = Math.floor(Math.random() * 255);
// White color check
if(r !== 255 && g !== 255 && b !== 255) {
    var generatedColor = 'rgb(' + r + ',' + g + ',' + b + ')';
}
else {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var generatedColor = 'rgb(' + r + ',' + g + ',' + b + ')';
}

var ball1 = {
    x: Math.floor(Math.random() * canvas.width) + 40,     // random x position
    y: Math.floor(Math.random() * canvas.height) + 40,     // random y position
    vx: Math.floor(Math.random() * 6) + 1,   // random x speed
    vy: Math.floor(Math.random() * 2) + 1,   // random y speed
    radius: Math.floor(Math.random() * 40) + 20,   // random radius
    color: generatedColor,  // random color
    drawCircle: function() {  // draw the ball
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
};

function drawCircle() {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);       // default movement
    
    // smooth movement with transparent traces of the ball
    ctx.fillStyle = 'rgb(236, 236, 236);';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ball1.drawCircle();
    ball1.x += ball1.vx;
    ball1.y += ball1.vy;

    // bounce off canvas borders
    if(ball1.y + ball1.vy > canvas.height - ball1.radius || ball1.y + ball1.vy < ball1.radius) {
        ball1.vy = -ball1.vy;
    }
    if(ball1.x + ball1.vx > canvas.width - ball1.radius || ball1.x + ball1.vx < ball1.radius) {
        ball1.vx = -ball1.vx;
    }

    window.requestAnimationFrame(drawCircle);
}


var ball2 = {
    x: Math.floor(Math.random() * canvas.width) + 40,     // random x position
    y: Math.floor(Math.random() * canvas.height) + 40,     // random y position
    vx: Math.floor(Math.random() * 10) + 1,   // random x speed
    vy: Math.floor(Math.random() * 4) + 1,   // random y speed
    radius: Math.floor(Math.random() * 40) + 20,   // random radius
    color: generatedColor,  // random color
    drawCircle2: function() {  // draw the ball
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
};

function drawCircle2() {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);       // default movement
    
    // smooth movement with transparent traces of the ball
    ctx.fillStyle = 'rgba(255,255,255,0.6)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ball2.drawCircle2();
    ball2.x += ball2.vx;
    ball2.y += ball2.vy;

    // bounce off canvas borders
    if(ball2.y + ball2.vy > canvas.height - ball2.radius || ball2.y + ball2.vy < ball2.radius) {
        ball2.vy = -ball2.vy;
    }
    if(ball2.x + ball2.vx > canvas.width - ball2.radius || ball2.x + ball2.vx < ball2.radius) {
        ball2.vx = -ball2.vx;
    }

    window.requestAnimationFrame(drawCircle2);
}

r = Math.floor(Math.random() * 255);
g = Math.floor(Math.random() * 255);
b = Math.floor(Math.random() * 255);
generatedColor = 'rgb(' + r + ',' + g + ',' + b + ')';

var ball3 = {
    x: Math.floor(Math.random() * canvas.width) + 50,     // random x position
    y: Math.floor(Math.random() * canvas.height) + 50,     // random y position
    vx: Math.floor(Math.random() * 7) + 1,   // random x speed
    vy: Math.floor(Math.random() * 4) + 1,   // random y speed
    radius: Math.floor(Math.random() * 50) + 25,   // random radius
    color: generatedColor,  // random color
    drawCircle3: function() {  // draw the ball
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
};

function drawCircle3() {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);       // default movement
    
    // smooth movement with transparent traces of the ball
    ctx.fillStyle = 'rgba(255,255,255,0.6)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    generatedColor = 'rgb(' + r + ',' + g + ',' + b + ')';

    ball3.drawCircle3();
    ball3.x += ball3.vx;
    ball3.y += ball3.vy;

    // bounce off canvas borders
    if(ball3.y + ball3.vy > canvas.height - ball3.radius || ball3.y + ball3.vy < ball3.radius) {
        ball3.vy = -ball3.vy;
    }
    if(ball3.x + ball3.vx > canvas.width - ball3.radius || ball3.x + ball3.vx < ball3.radius) {
        ball3.vx = -ball3.vx;
    }

    window.requestAnimationFrame(drawCircle3);
}

r = Math.floor(Math.random() * 255);
g = Math.floor(Math.random() * 255);
b = Math.floor(Math.random() * 255);
generatedColor = 'rgb(' + r + ',' + g + ',' + b + ')';

var ball4 = {
    x: Math.floor(Math.random() * canvas.width) + 40,     // random x position
    y: Math.floor(Math.random() * canvas.height) + 40,     // random y position
    vx: Math.floor(Math.random() * 3) + 1,   // random x speed
    vy: Math.floor(Math.random() * 1) + 1,   // random y speed
    radius: Math.floor(Math.random() * 40) + 25,   // random radius
    color: generatedColor,  // random color
    drawCircle4: function() {  // draw the ball
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
};

function drawCircle4() {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);       // default movement
    
    // smooth movement with transparent traces of the ball
    ctx.fillStyle = 'rgba(255,255,255,0.6)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ball4.drawCircle4();
    ball4.x += ball4.vx;
    ball4.y += ball4.vy;

    // bounce off canvas borders
    if(ball4.y + ball4.vy > canvas.height - ball4.radius || ball4.y + ball4.vy < ball4.radius) {
        ball4.vy = -ball4.vy;
    }
    if(ball4.x + ball4.vx > canvas.width - ball4.radius || ball4.x + ball4.vx < ball4.radius) {
        ball4.vx = -ball4.vx;
    }

    window.requestAnimationFrame(drawCircle4);
}

r = Math.floor(Math.random() * 255);
g = Math.floor(Math.random() * 255);
b = Math.floor(Math.random() * 255);
generatedColor = 'rgb(' + r + ',' + g + ',' + b + ')';

var ball5 = {
    x: Math.floor(Math.random() * canvas.width) + 40,     // random x position
    y: Math.floor(Math.random() * canvas.height) + 40,     // random y position
    vx: Math.floor(Math.random() * 6) + 1,   // random x speed
    vy: Math.floor(Math.random() * 2) + 1,   // random y speed
    radius: Math.floor(Math.random() * 40) + 25,   // random radius
    color: generatedColor,  // random color
    drawCircle5: function() {  // draw the ball
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
};

function drawCircle5() {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);       // default movement
    
    // smooth movement with transparent traces of the ball
    ctx.fillStyle = 'rgba(255,255,255,0.6)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ball5.drawCircle5();
    ball5.x += ball5.vx;
    ball5.y += ball5.vy;

    // bounce off canvas borders
    if(ball5.y + ball5.vy > canvas.height - ball5.radius || ball5.y + ball5.vy < ball5.radius) {
        ball5.vy = -ball5.vy;
    }
    if(ball5.x + ball5.vx > canvas.width - ball5.radius || ball5.x + ball5.vx < ball5.radius) {
        ball5.vx = -ball5.vx;
    }

    window.requestAnimationFrame(drawCircle5);
}

r = Math.floor(Math.random() * 255);
g = Math.floor(Math.random() * 255);
b = Math.floor(Math.random() * 255);
generatedColor = 'rgb(' + r + ',' + g + ',' + b + ')';

var ball6 = {
    x: Math.floor(Math.random() * canvas.width) + 40,     // random x position
    y: Math.floor(Math.random() * canvas.height) + 40,     // random y position
    vx: Math.floor(Math.random() * 6) + 1,   // random x speed
    vy: Math.floor(Math.random() * 2) + 1,   // random y speed
    radius: Math.floor(Math.random() * 40) + 25,   // random radius
    color: generatedColor,  // random color
    drawCircle6: function() {  // draw the ball
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
};

function drawCircle6() {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);       // default movement
    
    // smooth movement with transparent traces of the ball
    ctx.fillStyle = 'rgba(255,255,255,0.4)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ball6.drawCircle6();
    ball6.x += ball6.vx;
    ball6.y += ball6.vy;

    // bounce off canvas borders
    if(ball6.y + ball6.vy > canvas.height - ball6.radius || ball6.y + ball6.vy < ball6.radius) {
        ball6.vy = -ball6.vy;
    }
    if(ball6.x + ball6.vx > canvas.width - ball6.radius || ball6.x + ball6.vx < ball6.radius) {
        ball6.vx = -ball6.vx;
    }

    window.requestAnimationFrame(drawCircle6);
}