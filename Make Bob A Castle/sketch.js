var runrightAnimation;
var runleftAnimation;
var bobImage;

var TILESIZE;
var groundGroup;

var jumpcount = 0;

function preload() {
    runrightAnimation = loadAnimation("img/run1.png", "img/run2.png", 
                                    "img/run3.png", "img/run4.png", 
                                    "img/run5.png", "img/run6.png", 
                                    "img/run7.png", "img/run8.png");
    runleftAnimation = loadAnimation("img/run1l.png", "img/run2l.png", 
                                    "img/run3l.png", "img/run4l.png", 
                                    "img/run5l.png", "img/run6l.png", 
                                    "img/run7l.png", "img/run8l.png");
    bobImage = loadAnimation("img/bob.png");
}

function setup() {
    canvas = createCanvas(displayWidth - 100, displayHeight - 120);

    bob = createSprite(width / 2, height / 2, 40, 40);
    bob.addAnimation("runningright", runrightAnimation);
    bob.addAnimation("runningleft", runleftAnimation);
    bob.addAnimation("standing", bobImage);

    bob.setCollider("rectangle", 0, 0, bob.width - 30, bob.height);

    groundGroup = new Group();

    TILESIZE = height / 10;

    map = new Map('maps/map1.txt');
    map.loadMap();
    //map.drawMap();
}

function draw() {
    background(51);

    if (keyDown("RIGHT_ARROW")) {
        bob.changeAnimation("runningright");
        bob.x += 5;
    }
    else if (keyDown("LEFT_ARROW")) {
        bob.changeAnimation("runningleft");
        bob.x -= 5;
    }
    else {
        bob.changeAnimation("standing");
    }

    if(keyWentDown("SPACE")) {
        bob.velocityY -= 13;
    }

    camera.position.x = bob.x;
    camera.position.y = bob.y - 200;

    bob.velocityY += 0.8;

    bob.collide(groundGroup);

    if (bob.collide(groundGroup)) {
        jumpcount = 0;
    }

    console.log(bob.position.y);

    drawSprites();
}