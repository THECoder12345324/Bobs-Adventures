class Map {
    constructor(file) {
        this.file = file;
        this.map = ["1.............................................................1",
                    "1.............................................................1",
                    "1.............................................................1",
                    "1.............................................................1",
                    "1.............................................................1",
                    "1.............................................................1",
                    "1.............................................................1",
                    "1.............................................................1",
                    "1...........................111111111111......................1",
                    "1.............................................................1",
                    "1.............................................................1",
                    "1.............................................................1",
                    "1.............................................................1",
                    "111111111111111111111111111111111111111111111111111111111111111"]

        this.image1 = loadImage('img/ground1.png');
        this.image2 = loadImage('img/ground2.png');
        this.image3 = loadImage('img/ground3.png');
        this.images = [this.image1, this.image2, this.image3]
    }
    loadMap() {
        //this.map = loadStrings(this.file);
        console.log(this.map);
        for (var i = 0; i < this.map.length; i++) {
            for (var j = 0; j < this.map[i].length; j++) {
                /*var pixel;
                pixel = line.splice(j, 1);*/
                if (this.map[i][j] == '1') {
                    var ground = createSprite(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE);
                    var x = random(0, 2);
                    var image = this.images[x];
                    ground.addImage(this.image1);
                    ground.scale = 2.4;
                    //ground.shapeColor = "green";
                    groundGroup.add(ground);
                    console.log("Ground");
                }
            }
        }
        console.log("Drawed");
    }
    drawMap() {
        for (var i = 0; i < 15; i++) {
            var line;
            line = this.map.splice(i, 1);
            console.log(line);
            for (var j = 0; j < line.length; j++) {
                var pixel;
                pixel = line.splice(j, 1);
                if (pixel == '1') {
                    var ground = createSprite(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE);
                    //ground.shapeColor = "green";
                    groundGroup.add(ground);
                    console.log("Ground");
                }
            }
            
        }
        console.log("Drawed");
    }

}