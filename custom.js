PIXI.utils.sayHello();
var pixEle = document.getElementById('display');

var renderer = PIXI.autoDetectRenderer(512,512, {
	transparent:true,
	resolution:1,
});
pixEle.appendChild(renderer.view);

var stage = new PIXI.Container();
PIXI.loader
.add("parasite", './parasite.jpeg')
.load(setup)
var i =0;
var parasite;
function setup(){
	stage.interactive = true;
	var cWidth = document.querySelector('canvas').offsetWidth;
	var cHeight = document.querySelector('canvas').offsetHeight;
	parasite = new PIXI.Sprite(
		PIXI.loader.resources['parasite'].texture
		);
	parasite.height = cHeight;
	parasite.width = cWidth;
	animationLoop(cHeight, cWidth);

	parasite.interactive = true;

	parasite.click = function(){
		this.pivot.set(200, 200);
		this.anchor.set(0.5);
		if( this.scale.x < 3 ){
			this.scale.x += 0.06;
			this.scale.y += 0.06;
			
		}
		else{
			this.scale.x -= 2;
			this.scale.y -= 2;
		}
		
	}

	stage.addChild(parasite);

}

function animationLoop(cHeight, cWidth){
	requestAnimationFrame(animationLoop);
		if(parasite.rotation<=1){
			parasite.rotation  += 0.001;
		}
	else{
		while(parasite.rotation>1){
			parasite.rotation  -= 0.001;
		}
	}
		
	
	// parasite.x= cWidth/2;
	// parasite.y= cHeight/2;


	// parasite.anchor.set(0.5,0.5)
	// parasite.pivot.set(200, 200)

	renderer.render(stage);

}

