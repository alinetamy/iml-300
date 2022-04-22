function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    background(0);
    noLoop()
}

function draw() {
    for (var i = 0; i <= 15; i++) {
        let x = random(width);
        let y = random(height);

        fill(255, 255, 255, 127);
        ellipse(x, y, 20, 20)
        ellipse(x - 15, y + 5, 20, 20)
        ellipse(x - 25, y - 5, 20, 20)
        ellipse(x - 17, y - 20, 20, 20)
        ellipse(x, y - 15, 20, 20)
        fill(250);
        ellipse(x - 12, y - 7, 22, 22)
    }
}
