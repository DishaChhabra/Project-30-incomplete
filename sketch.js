const World = Matter.World
const Engine = Matter.Engine
const Constraint = Matter.Constraint
const Bodies = Matter.Bodies

function preload(){
    polygon_img = loadImage("polygon.png")
}

function setup(){
    createCanvas(1250,600)
    engine = Engine.create()
    world = engine.world
    Engine.run(engine)

    stand1 = new Ground(600,550,400,30)
    stand2 = new Ground(1000,300,400,30)

    box1 = new Box(600,525,50,50)
    box2 = new Box(550,525,50,50)
    box3 = new Box(500,525,50,50)
    box4 = new Box(450,525,50,50)
    box5 = new Box(650,525,50,50)
    box6 = new Box(700,525,50,50)
    box7 = new Box(750,525,50,50)

    box8 = new Box(500,475,50,50)
    box9 = new Box(550,475,50,50)
    box10 = new Box(600,475,50,50)
    box11 = new Box(650,475,50,50)
    box12 = new Box(700,475,50,50)

    box13 = new Box(550,425,50,50)
    box14 = new Box(600,425,50,50)
    box15 = new Box(650,425,50,50)

    box16 = new Box(600,375,50,50)

    box17 = new Box(1000,225,50,50)
    box18 = new Box(1050,225,50,50)
    box19 = new Box(1100,225,50,50)
    box20 = new Box(950,225,50,50)
    box21 = new Box(900,225,50,50)

    box22 = new Box(1000,175,50,50)
    box23 = new Box(1050,175,50,50)
    box24 = new Box(950,175,50,50)
    
    box25 = new Box(1000,125,50,50)

    ball = Bodies.circle(100,300,30)
    World.add(this.world, ball)

    sling = new SlingShot(ball, {x: 200 ,y:200})
}

function draw(){
    background("black")


    fill("pink")
    box1.display()
    box2.display()
    box3.display()
    box4.display() 
    box5.display()
    box6.display()
    box7.display()
    fill("skyblue")
    box8.display()
    box9.display()
    box10.display()
    box11.display() 
    box12.display()
    fill("pink")
    box13.display()
    box14.display() 
    box15.display()
    fill("skyblue")
    box16.display()
    
    fill("pink")
    box17.display()
    box18.display()
    box19.display()
    box20.display() 
    box21.display()
    fill("skyblue")
    box22.display()
    box23.display()
    box24.display()
    fill("pink")
    box25.display()

    stand1.display()
    stand2.display()

    imageMode("CENTER")
    image(polygon_img, ball.position.x, ball.position.y, 50, 50)

    sling.display()
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball, {x:mouseX,y:mouseY})
}

function mouseReleased(){
    sling.fly()
}

function keyPressed(){
    if(keyCode === 32){
    sling.attach(this.ball)
    }
}
