const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var grid = [], dot;
var line;
var drawingSprites = [];

function setup(){
    createCanvas(500, 500);
    dotLoop();
}

function draw(){
    background(255);
    dotline();
    //dotLoop();
    check();
    drawSprites();
}

function dotLoop(){
    for(var y = 2; y < 22; y++){
        for(var x = 2; x < 22; x++){
            dot = createSprite(x*20, y*20, 8, 8);
            grid.push(dot);
        }
    }
}
function dotline(){
    for(var dotL = 0; dotL < 400; dotL++){
        //grid[dotL];
        console.log("Lol");
        if (mousePressedOver(grid[dotL])){
            if(dotL >= 20){
                console.log("top");
                var top = createSprite(grid[dotL].x, grid[dotL].y - 10, 3, 20);
                drawingSprites.push(top);
            }
            if(dotL < 380){
                console.log("bottom");
                var bottom = createSprite(grid[dotL].x, grid[dotL].y + 10, 3, 20);
                drawingSprites.push(bottom);
            }
            if(dotL % 20 !== 0){
                console.log("left");
                var left = createSprite(grid[dotL].x - 10, grid[dotL].y, 20, 3);
                drawingSprites.push(left);
            }
            if((dotL + 1) % 20 !== 0){
                console.log("right");
                var right = createSprite(grid[dotL].x + 10, grid[dotL].y, 20, 3);
                drawingSprites.push(right);
            }
        }
    }
}
function mousePressedOver(d){
    d.mouseActive = true;
    //console.log("out of the If D");
    if(mouseIsPressed && d.mouseIsOver){
       d.visible = false;
       console.log("in the If D");
    }
}
// function mousePressedOverL(l){
//     l.mouseActive = true;
//     //console.log("out of the If L");
//     if(mouseIsPressed && l.mouseIsOver){
//        l.visible = true;
//        console.log("in the If L");
//     }
// }
function check(){
    var checklist = 0;
    for(var i = 0; i<drawingSprites.length; i++){
        if(mousePressedOver(drawingSprites[i])){
            createSprite(drawingSprites[i].x, drawingSprites[i].y, drawingSprites[i].width, drawingSprites[i].height);
            checklist = 1;
            break;
        }
        
    }
    if(checklist === 1){
        for(var i = 0; i<drawingSprites.length; i++){
            drawingSprites[i].destroy();
        }
    }
    }