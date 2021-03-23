
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango3,mango4,mango5,mango6,mango7,mango8;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");

  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
stoneObj=new stone(200,340,10);
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	mango2= new mango(1150,130,30);
	mango3= new mango(1040,130,30);
	mango4 =new mango(1090,190,30);
	mango5= new mango(1010,190,30);
	mango6 = new mango(1200,200,30);
	mango7= new mango(940,200,30);
	mango8= new mango(1110,30,30)
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  


  treeObj.display();
  mango1.display();

  groundObject.display();
  mango2.display();
  mango3.display();
 mango4.display();
 mango5.display();
mango6.display();
mango7.display();
mango8.display();
stoneObj.display();
}



