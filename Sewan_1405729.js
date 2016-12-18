(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#CCCC99",
	manifest: []
};



// symbols:



(lib._71 = function() {
	this.spriteSheet = ss["Sewan_1405729_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._72 = function() {
	this.spriteSheet = ss["Sewan_1405729_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.FRAME = function() {
	this.spriteSheet = ss["Sewan_1405729_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.wr = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgfAOQgIgBgHgEQgGgCgGgDIgJgFIgGgHIgEgFIAOAFIAVAGIANABIAdgBIAMgCIA7gLIAHAAIgWAPQgQAGgJADIgPAEIgQADIgPAAIgQgCg");
	this.shape.setTransform(-0.9,8.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2).p("Ag6BAIATAPQAdAJAtgYQAAgJAHgKQAOgUAggCQACgIgEgIQgJgOgggBQABgQgFgRQgKghgdgHQgQAAgRAIQgiAPAHAmQgMAIgIAKQgSARAOAGIAPALQANAOgEASg");
	this.shape_1.setTransform(0,-2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8C6239").s().p("AgnBPIgTgPQAEgSgNgOIgPgLQgOgGASgRQAIgKAMgIQgHgmAigPQARgIAQAAQAdAHAKAhQAFARgBAQQAgABAJAOQAEAIgCAIQggACgOAUQgHAKAAAJQghASgXAAQgJAAgJgDg");
	this.shape_2.setTransform(0,-2.1);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.9,-16.1,19.9,26.5);


(lib.up_right_leg = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3).p("AC6CXQgKgUialbIjHBmIB0CQQB0CZANAo");
	this.shape.setTransform(-0.3,-0.2,0.752,0.752);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhBAbIh0iPIDHhnQCZFbALAUIh3BIQgNgohziZg");
	this.shape_1.setTransform(0,0,0.752,0.752);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16,-18.6,31.3,36.7);


(lib.Tween77 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("                If this book is yours\n             Take it in your little paws\n            turn the pages one by one\n        See our Deadlefizz have some fun. ", "bold 15px 'Arial'", "#996633");
	this.text.lineHeight = 17;
	this.text.lineWidth = 292;
	this.text.setTransform(-148,-84.8);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-148,-84.8,296,169.6);


(lib.Tween76 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("                If this book is yours\n             Take it in your little paws\n            turn the pages one by one\n        See our Deadlefizz have some fun. ", "bold 15px 'Arial'", "#996633");
	this.text.lineHeight = 17;
	this.text.lineWidth = 292;
	this.text.setTransform(-148,-84.8);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-148,-84.8,296,169.6);


(lib.Tween73 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("DEADLEFIZZ'S FAMILY AND SOME OF HIS FREINDS", "bold 15px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 17;
	this.text.lineWidth = 384;
	this.text.setTransform(-193.9,-10.4);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-193.9,-10.4,388,20.8);


(lib.Tween72 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("DEADLEFIZZ'S FAMILY AND SOME OF HIS FREINDS", "bold 15px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 17;
	this.text.lineWidth = 384;
	this.text.setTransform(-193.9,-10.4);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-193.9,-10.4,388,20.8);


(lib.Tween71 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("WRITTEN BY SIMON HILL", "bold 15px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 17;
	this.text.lineWidth = 193;
	this.text.setTransform(-98.5,-10.4);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-98.5,-10.4,197,20.8);


(lib.Tween70 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("WRITTEN BY SIMON HILL", "bold 15px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 17;
	this.text.lineWidth = 193;
	this.text.setTransform(-98.5,-10.4);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-98.5,-10.4,197,20.8);


(lib.Tween69 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("DEADLEFIZZ DINASAUR'S DISASTROUS DECISION", "bold 16px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 18;
	this.text.lineWidth = 414;
	this.text.setTransform(-208.9,-10.9);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-208.9,-10.9,418,21.9);


(lib.Tween68 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("DEADLEFIZZ DINASAUR'S DISASTROUS DECISION", "bold 16px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 18;
	this.text.lineWidth = 414;
	this.text.setTransform(-208.9,-10.9);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-208.9,-10.9,418,21.9);


(lib.Tween58 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("King Henry VIII, to six wives he was wedded. One died, one survived,\ntwo divorced, two beheaded. (RHYME).", "bold 15px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 17;
	this.text.lineWidth = 511;
	this.text.setTransform(-257.4,-28.5);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-257.4,-28.5,515,57.1);


(lib.Tween57 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("King Henry VIII, to six wives he was wedded. One died, one survived,\ntwo divorced, two beheaded. (RHYME).", "bold 15px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 17;
	this.text.lineWidth = 511;
	this.text.setTransform(-257.5,-28.5);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-257.5,-28.5,515,57.1);


(lib.Tween56 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Sadly Catherine leave the Castle", "bold 20px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 22;
	this.text.lineWidth = 321;
	this.text.setTransform(-162.5,-15.3);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-162.5,-15.3,325,30.7);


(lib.Tween55 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Sadly Catherine leave the Castle", "bold 20px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 22;
	this.text.lineWidth = 321;
	this.text.setTransform(-162.5,-15.3);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-162.5,-15.3,325,30.7);


(lib.Tween54 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("After some year Henry decided to divorce Catherine inorder to marry Anne.\nNot only could he find love with Anne, but she might also give him the son \nthat he so desired.", "bold 14px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 16;
	this.text.lineWidth = 530;
	this.text.setTransform(-266.9,-39);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-266.9,-39,534,78.1);


(lib.Tween53 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("After some year Henry decided to divorce Catherine inorder to marry Anne.\nNot only could he find love with Anne, but she might also give him the son \nthat he so desired.", "bold 14px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 16;
	this.text.lineWidth = 530;
	this.text.setTransform(-267,-39);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-267,-39,534,78.1);


(lib.Tween24 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAYQgLgKABgOQgBgNALgKQAKgLANABQAOgBAKALQAKAKAAANQAAAOgKAKQgKALgOAAQgNAAgKgLg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.5,-3.5,7,7);


(lib.Tween23 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAYQgLgKAAgOQAAgNALgLQAKgJANgBQAOABAKAJQALALgBANQABAOgLAKQgKALgOgBQgNABgKgLg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.5,-3.5,7,7);


(lib.text_3 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("GET OUT", "bold 20px 'Arial'");
	this.text.lineHeight = 22;
	this.text.lineWidth = 100;
	this.text.setTransform(-52,-13.1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52,-13.1,104,26.4);


(lib.t = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZAIIgNgDIALgHQALgFAQgCIAPADIAOAFIAIAEIACAEIgnADQgNAAgMgCg");
	this.shape.setTransform(-0.1,3.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAAJIgsgDQgbgDgNgCQgWgCgQgEQAQgCAXgCICAADQAaADANACQAXABAPAFQgPACgXACIgoABIgsgBg");
	this.shape_1.setTransform(0.3,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AB9ARIgTgIIgKgEIgYgGIgbgGIgOgBIgcgCIgbAAQgTACgJACIgbAEIhHARQAQgNAcgKIAYgIQALgFAPgDIAegFIAPgBIAOAAIAfACIAPADIAcAIIAZALIAKAGIARALIAWAVg");
	this.shape_2.setTransform(0,-1.2);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.2,-4.3,30.4,8.7);


(lib.sword_mc = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7A563B").s().p("AgsILIAmgHIgWi/QgagEgwAZQgZANgTANQhEghAMhBQADgUALgVIAKgRQAeAYA3AIQAcAEAVAAIhZrTIAzhpIBSBdIAyLVQAZgBBjgvQAwBAgbAyQgOAYgXAMQgMgQg0gFIgygCIAPC5IAgAKIAEAzIiEAKg");
	this.shape.setTransform(23.4,115.1,1,1,0,0,0,2.8,57.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,41.1,115.5);


(lib.stop_i = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#990000").ss(1,1,1).p("ADcAAQAABbhBBAQhBBBhaAAQhaAAhAhBQhBhAAAhbQAAhaBBhAQBAhBBaAAQBaAABBBBQBBBAAABag");
	this.shape.setTransform(0,0,0.822,0.822);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#990000").ss(1,1,1).p("AhWhWICtAAIAACtIitAAg");
	this.shape_1.setTransform(-0.2,-0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990000").s().p("AhWBXIAAitICtAAIAACtg");
	this.shape_2.setTransform(-0.2,-0.9);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19,-19,38.2,38.2);


(lib.Stone = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#996633").ss(1,1,1).p("AGfAAQAABrh6BMQh6BNirAAQiqAAh6hNQh6hMAAhrQAAhqB6hMQB6hNCqAAQCrAAB6BNQB6BMAABqg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#996633").s().p("AkkC3Qh5hMAAhrQAAhqB5hMQB5hNCrAAQCsAAB5BNQB5BMABBqQgBBrh5BMQh5BNisgBQirABh5hNg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.5,-27,85,54);


(lib.right_arrow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00A1FF").ss(50,1,1).p("AsS4jIYlYlI4gYi");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-103.7,-182.2,207.5,364.5);


(lib.remc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAYQgLgKABgOQgBgNALgKQAKgLANABQAOgBAKALQAKAKAAANQAAAOgKAKQgKALgOAAQgNAAgKgLg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.5,-3.5,7,7);


(lib.r_hand = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3).p("AkDAGQASgOAYgXQAugwAagmQAGgCADgNQAIgZgLg0IAbgJQAfgDAXAaIgDArQgJAvgeAVQA4gbA7gjQB5hHAYgoIAjAPQAdAXgcAoQgMALgjAWQhHAthvA7ICsgYQCygVAQAMIAEALQADAOgDAMQgMAlhJACQinAFg7AGIB7AgQCEAjAsAIIANAPQAHASgaAMQhTgNhSgMQiigXAIAJIBpA2QBpBAgLArQgJAGgQABQgeADgcgVQgYgUgdgVQg6gpgYgBQgXgEgfgCQg+gEgoAMIgEANQgJAKgagOQASAJAIgnQAIglgHgQQgHgQgRgKQgRgKgTAAQgDAAgNADQgPADgIAEQgGACgGgDQgGgDgBgGQgFgdAzgRg");
	this.shape.setTransform(17.2,-2.9,0.752,0.752);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AA1DhIgDAAIilh5IiMhsIgRgRIATAPIE4DOIABAAIAGgCIAMgGIAZgQQAVgOAcgXQApghAxgtQAEgJABgJQACgLgDgGQgDgGgIgDIgJgCIgFgBIgCAAIh5BXIgMAFQgPAEgNgFQgGgCgHgFIgHgHIgCgDQgFgHgVgXIg2g5IjojiQBHA4A2AwIB7BrQAfAdAaAaQAVAWAHAJIACADIAAAAIABAAIACACIAFADQAEACAHgDIAHgDIADgBIAEgEIBzhRIADgDIAEAAIAQAAQAGABAKADQAJAEAGAFQAIAFAEAIQAHAPgDATQgCANgGAPIgBADIgDACIgvAqIgwAnQghAZgTAMIgbARIgQAHIgJADIgIABIgFgBg");
	this.shape_1.setTransform(-21.8,5.2,0.752,0.752);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AA+DbIidhtQighvgLgOIgDjMICXCJQCZCMAVAfIAMAKQAQAGASgMIB4hXIAgAGQAbAQgTAwIhWBKQhVBGgaAAIgDgBg");
	this.shape_2.setTransform(-22.3,4.8,0.752,0.752);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.6,-24.1,86.9,46.4);


(lib.queen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AlRBQQiLghAAgvQAAguCLgiQCNghDEgBQDFABCMAhQCMAiAAAuQAAAviMAhQiMAjjFAAQjEAAiNgjg");
	this.shape.setTransform(0,0,1.859,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CC99").s().p("AlRBQQiLghAAgvQAAguCLgiQCNghDEgBQDFABCMAhQCMAiAAAuQAAAviMAhQiMAjjFAAQjEAAiNgjg");
	this.shape_1.setTransform(0,0,1.859,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#99FF66").s().p("AlRBQQiLghAAgvQAAguCLgiQCNghDEgBQDFABCMAhQCMAiAAAuQAAAviMAhQiMAjjFAAQjEAAiNgjg");
	this.shape_2.setTransform(0,0,1.859,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AlRBQQiLghAAgvQAAguCLgiQCNghDEgBQDFABCMAhQCMAiAAAuQAAAviMAhQiMAjjFAAQjEAAiNgjg");
	this.shape_3.setTransform(0,0,1.859,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.7,-11.5,177.5,23);


(lib.qh = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZADQgEgDgCgDIgBgEIADABIAIAAIAVgCIAKgBIALAAQAHgBAFACIgCADIgGAFQgFAEgFACQgIAEgHAAIgEABQgNAAgIgIg");
	this.shape.setTransform(3.2,79.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2).p("AjShvICtgUQC3gRA/ASIACApQgBAxgMAoQgqCEiVAGQg0AKg3gaQhsg1gCi0g");
	this.shape_1.setTransform(1.9,56.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhkB6Qhsg1gCi0ICtgUQC3gRA/ASIACApQgBAxgMAoQgqCEiVAGQgOADgPAAQgnAAgngTg");
	this.shape_2.setTransform(1.9,56.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AApARIgLgGIgPgHIgIgDIgHgBIgHAAIgIACIgIACIgWANIABgFQACgIAEgEIAHgGIAJgHIALgEQADgBAIAAQAJABADACIALAFIAIAHIAGAFQADACAEAKIACAFg");
	this.shape_3.setTransform(1.1,33.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIARQgEgHgBgKQABgJAEgHQAEgIAEAAQAFAAAEAIQAEAHABAJQgBAKgEAHQgEAIgFAAQgEAAgEgIg");
	this.shape_4.setTransform(16.7,24.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgRAmQgIgQAAgWQAAgVAIgPQAIgRAJABQAKgBAIARQAHAPAAAVQAAAWgHAQQgIAQgKAAQgJAAgIgQg");
	this.shape_5.setTransform(17,26.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgkALQACgEAEgEIAGgDIAGgDQAIgEAIgCQAJgDAFAAQAHgCAHABQAIABAGACIg9APIgSAJg");
	this.shape_6.setTransform(25.9,33.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgSAPIgCgCIAIgDIAEgCIAKgGQAIgDAFgGIAFgIIABADIgBAHIgEAHQgCAEgHAEQgHAEgCABIgJABg");
	this.shape_7.setTransform(27.4,24);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgLAMIgGgBIgCgBIACgBIAFgCQAGgDAGgEIANgIIAHgEIgDAIQgFAFgHAFQgHAHgHAAIgCgBg");
	this.shape_8.setTransform(26.7,19.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgPANIAFgGIAagTIgBAIIgEAEIgGAGQgGAGgHABg");
	this.shape_9.setTransform(25,15.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag3BkIgNhMIAAglIAEgaIADgNQADgMAFgNQACgGAEgHIAJgLIABgCIACAAQAGgCALgBIAQABQAGACAHAEQAGACAIAHQAIAHADAEIAIANIAMAcQAEANACAQIACAZIgFgYQgDgOgFgOQgOgggTgOQgIgFgEgBIgKgEIgNAAIgKACIgFAJIgEAKQgEALgDAMIgFBHIAIBEQAdAAAWgBIAegCIAPgDIAHgDQAFgCABgCQgBACgFADIgHACIgtAKQgWAGgkAFIgGABgABAAQIABADQACAQAAANIACAeg");
	this.shape_10.setTransform(18.3,23.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag4gzQAFgUAHgOIAHgKIAQgDQAUgBAOALQAzAhAACGQAAAIg7AHIg5AFQgUhbAQg7g");
	this.shape_11.setTransform(18.8,23.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIARQgFgHAAgKQAAgJAFgHQADgIAFAAQAFAAAFAIQADAHAAAJQAAAKgDAHQgFAIgFAAQgFAAgDgIg");
	this.shape_12.setTransform(-16.3,25.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgRAmQgIgQAAgWQAAgVAIgPQAHgQAKgBQAKABAIAQQAIAPAAAVQAAAWgIAQQgIAPgKAAQgKAAgHgPg");
	this.shape_13.setTransform(-16.6,26.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAcAIIgUgIIgvgKIAOgDQAHgBAHACQAGAAAJADIAPAGIAGADIAGADIAHAIIACADg");
	this.shape_14.setTransform(-25.5,34);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AACAPQgCgBgGgEQgGgDgDgEQgDgDgBgFIgBgHIAAgDIAGAHQAEAHAJACIACADIAUAKIgCABIgHAAIgKAAg");
	this.shape_15.setTransform(-27,24.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgEAHQgHgFgFgGIgDgIIAHAEQAEACAIAGIANAHIAHAEIgCABIgGABIgCAAQgHAAgHgGg");
	this.shape_16.setTransform(-26.3,19.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAJANQgIgBgFgGQgDgCgDgEIgEgEIgBgIIAVAPIAKAKIgDAAIgEAAg");
	this.shape_17.setTransform(-24.7,16.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAvBqQghgFgZgGIgsgKIgHgCQgFgCgBgDQABACAFACIAHADIAPADIAeACQAWABAdAAIAIhEIgBgvIgEgYIgHgXIgEgKIgFgIIgKgDIgNAAIgLAEIgMAGQgUAPgMAfQgFANgEAPIgFAbIgDAdIAAAOIAAgdIACgOIADgcIAHgdIALgcIAJgNQAEgGAHgFQAHgHAGgCQAJgEAFgCIAQgBQALABAGACIABAAIACACIAIALIAHANIAIAZIADANIAEAnIgBAYIgCAaIgFAZIgHAgg");
	this.shape_18.setTransform(-17.9,24.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgEBeQg7gHAAgIQAAiFA0giQAXgRAaAKIAHAKQAHAOAFAUQAQA8gUBbQgegCgbgEg");
	this.shape_19.setTransform(-18.4,23.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAzASIgGgDIgYgKIgmgGIgmgBIAEgEIANgHQAVgJAWAFIANADIAKAFIAKAHIAHAFQAGAHADAFIACAFg");
	this.shape_20.setTransform(15.3,6.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Ag0AQIAIgMQAQgRAWgGIALgCIAMAAIALACIAKAEIAHADIAKAIIgMAAIgaABIgRADIgKACIgKADIgiARIACgGg");
	this.shape_21.setTransform(-18.8,8.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(3).p("AAiAAQAAAOgKAKQgKAKgOAAQgNAAgKgKQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANg");
	this.shape_22.setTransform(-27.4,-88);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape_23.setTransform(-27.4,-88);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(3).p("AAiAAQAAAOgKAKQgKAKgOAAQgMAAgLgKQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANg");
	this.shape_24.setTransform(13.8,-87.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgMAAgLgKg");
	this.shape_25.setTransform(13.8,-87.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(3).p("AAiAAQAAAOgKAKQgKAKgOAAQgNAAgKgKQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANg");
	this.shape_26.setTransform(51.1,-69.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape_27.setTransform(51.1,-69.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(3).p("AAiAAQAAAOgKAKQgKAKgOAAQgNAAgKgKQgKgKAAgOQAAgMAKgLQAKgKANAAQAOAAAKAKQAKAKAAANg");
	this.shape_28.setTransform(52.6,-47.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape_29.setTransform(52.6,-47.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(3).p("AAiAAQAAAOgKAKQgKAKgOAAQgMAAgLgKQgKgKAAgOQAAgMAKgLQALgKAMAAQAOAAAKAKQAKALAAAMg");
	this.shape_30.setTransform(9.3,-59.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgXAYQgKgKAAgOQAAgMAKgLQALgKAMAAQAOAAAKAKQAKALAAAMQAAAOgKAKQgKAKgOAAQgMAAgLgKg");
	this.shape_31.setTransform(9.3,-59.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(3).p("AAiAAQAAAOgKAKQgKAKgOAAQgNAAgKgKQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKALAAAMg");
	this.shape_32.setTransform(-31.1,-64.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKALAAAMQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape_33.setTransform(-31.1,-64.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(3).p("AA7AmIg+AhIg8goIAEhFIA+ggIA8Ang");
	this.shape_34.setTransform(4.3,-30.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("Ag/AfIAFhFIA+ggIA7AnIgDBFIg+Ahg");
	this.shape_35.setTransform(4.3,-30.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(3).p("Aj9hhIAfAjQAqAoA0AYQCnBSDZhfIADAKQADAKgCALQgGAmg2ASQhBAUhagEQixgHh6hzQgEgEgBgLQgDgWAJgeg");
	this.shape_36.setTransform(1.7,-17.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF0000").s().p("AAtBfQixgHh6hzQgEgFgBgLQgDgVAJgfIAfAjQAqApA0AXQCnBSDZhfIADAJQADALgCAMQgGAlg2ATQg2ARhIAAIgdgBg");
	this.shape_37.setTransform(1.7,-17.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgUAuIAkhgIACAFQADAGABAHQABAMgBAIIgCALIgEAIQgFAMgFAHIgGAIIgGAHQgFAEgGAEIgEACg");
	this.shape_38.setTransform(32.6,0.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgDAMQgFgFgBgGQAAgEADgGIAFgGIAFAEQAEAFABAGQABAFgEAFIgFAGQgBgBgDgDg");
	this.shape_39.setTransform(20,-6.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AADArQgCAAgBgDQgCgBgDgFIgDgHIgCgJQgBgKABgIQAEgTAHgMQAFgIAFgEIABAPIgEAeIgEAdIABAFQAAABAAABQAAAAAAABQAAAAAAABQAAAAABAAIABAFg");
	this.shape_40.setTransform(-12.4,-6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgCAtIgEgEQgDgEgBgDIgDgIIgBgKQAAgJACgJQAFgUAKgNQAGgIAGgEIgCARQgBAJgGAWIgGAfIAAAQg");
	this.shape_41.setTransform(-21.5,-6.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAPBCIgHgEIgIgHIgFgKIgGgMQgEgHgBgGIgDgPQgDgaAHgYIAFgRIADgGIAFAvIACAYIADAZIADALIAIASIADAGIAEAGg");
	this.shape_42.setTransform(-39.3,10);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgfAeIgcgDIgZgJIgLgGIgRgMIgHgGQgEgFgFgHIgFgMIACADIAHAHIALAJIAPAJIAUAGIALADIALACIAZACQAJABASgCIAFgBIATgDIByggIgXAQIgRAJIgsASIgMAEQgIADgGAAIgVAFIgFAAIgVACIgIgBg");
	this.shape_43.setTransform(55.9,68.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgDAQIgNgEIgNgFQgNgFgIgEQgHgFgGgGIgFgEIBoATIAgABIgEAEIgHAEIgKADIgKADIgOABQgLAAgPgCg");
	this.shape_44.setTransform(49.4,76.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("Ag1AtIgGgBIgDgBIgHgDIAKgBIAPgGIALgFIALgHIAxghIAKgJIAigWQgFAKgKANQgFAHgNANIgZAUIgNAKIgOAHIgOAFIgOADg");
	this.shape_45.setTransform(-40.5,78.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAhgcIARgOQgCAKgGAMIgMATQgHAHgKAJQgJAJgKAHQgJAGgMADIgJACIgNAAg");
	this.shape_46.setTransform(-51.2,63.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(3).p("AlECUQgJhOgOhVQgcisgWgpIARgRIBYBTQBbBeAPAzICYimIAUAFIAvBdQAxBjABAmIAdgbQAkgfAlgZQB3hQBUAZQg7A8g5BAQhyCDAJAfQg4AkhaAMQiyAYinh8g");
	this.shape_47.setTransform(10.9,-37.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#8C6239").s().p("AlACRQgIhOgOhVQgcisgWgpIAQgRIBZBTQBbBeAPAzICYimIAUAFIAvBdQAxBjABAmIAcgbQAlgfAlgZQB2hQBVAZQg7A8g5BAQhyCDAJAfQg5AkhZAMQgbAEgdAAQiVAAiNhog");
	this.shape_48.setTransform(10.4,-37.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(3).p("Ag/pKQicAAiABcQiMBlgFCSQgECagFA2QgNBygnBVQg4B4hhAOIACANQAEAPAJANQAbArA/AKIAIAmQAOAoAeAMIAJAQQANATAXAJIALAMQAOAOARAJQA1AcA7ghIArgXQAugRATAhIAsgcQAygXAhAcQgJgUgXgaQgugzhEgaQhBgggwhBQhgiABWicQAGgEAHgXQAPgxAChqQgBgNADgPQAFgfATgMIAeg7QAng4AnASIAiAmIBSgPIAXg1IATAVQAbAQAmgZIAIAIQAKAJALAEQAjANAhgqIAbAQQAjAMAjgRQgTAtgWAPIAiAiQAsAfAxgQIAZBaQAbBcAMAMIAgAgQAjAnARAuQA0CUifCQQgpAdgpAlQhSBJAAAlIAbgJQAhgKAcgCQBZgFAKBSIAagCQAggFAfgNQBlgpA4hnIAngSQApgbAOgxQAJgJAHgRQANgigOglQg5Alg8gQQh4gigOkNQgDh4gqiBQhSkDi7gxQieALgqAAg");
	this.shape_49.setTransform(-0.1,30.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FBB03B").s().p("AD3IJQgcABghAKIgbAKQAAgmBShJQApgkApgdQCfiRg0iUQgRgugjgnIgggfQgMgMgbhdIgZhaQgxARgsgfIgigiQAWgPATgtQgjAQgjgMIgbgPQghAqgjgNQgLgEgKgJIgIgJQgmAagbgQIgTgVIgXA0IhSAPIgiglQgngTgnA4IgeA8QgTAMgFAeQgDAQABANQgCBpgPAyQgHAXgGADQhWCdBgCAQAwBABBAhQBEAZAuA0QAXAZAJAVQghgcgyAWIgsAcQgTghguARIgrAYQg7Ahg1gdQgRgIgOgOIgLgMQgXgKgNgSIgJgRQgegMgOgoIgIgmQg/gJgbgrQgJgOgEgPIgCgMQBhgPA4h4QAnhUANhzQAFg1AEibQAFiSCMhkQCAhcCcAAQAqAACegMQC7AxBSEDQAqCCADB3QAOEOB4AhQA8ARA5gmQAOAmgNAiQgHAQgJAKQgOAxgpAbIgnARQg4BnhlApQgfANggAFIgaADQgKhShZAFg");
	this.shape_50.setTransform(0,30.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(3).p("Aj/ClQAAhUgFhZQgKi1gcgfIBXBHQBcBRAVA6ICEjsQALA/APBCQAfCBAWANIBXg+QBnhABTgBIAHATQgmAiglAzQhKBqAEBdQg0BDhZAdQivA7i7i/g");
	this.shape_51.setTransform(9.2,-58.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F7931E").s().p("AkuCFQAAhUgFhZQgKi1gcgfIBXBHQBcBRAVA6ICGjsQALA/ANBCQAfCDAWANIBXhAQBnhABTgBIAHATQgmAiglA1QhKBoAEBdQg0BDhZAdQgpAOgpAAQiJAAiPiSg");
	this.shape_52.setTransform(13.9,-55.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(3).p("AidFuQhxgYhYhPQiwidB7kNQgJhLAYhRQAwihCjgfIDngDQDuABAYAVIA1CJQA7ClAeCEIAJAnQAIAvgJAzQgcCki2B5QgnATgnAWQhNAuACATQgGgJgPgGQgegMgqASQgcgdgjgaQhFg1gbANg");
	this.shape_53.setTransform(-0.6,44.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#C69C6D").s().p("ABKHdQgegMgqATQgcgdgjgbQhFg1gbANQhxgYhYhOQiwidB7kOQgJhKAYhRQAwiiCjgeIDngEQDuABAYAVIA1CKQA7CkAeCEIAJAlQAIAxgJA0QgcCji2B5QgnATgnAXQhNAtACAUQgGgKgPgGg");
	this.shape_54.setTransform(-0.6,42.2);

	this.addChild(this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72.5,-92.9,144.9,190.4);


(lib.qbody = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3).p("AmmhMIAxATQBCAWBWAOQETApF5g2IAEAJQAFAQAIAoQibAci8AMQl2AYilhMQgLgJgEgPQgHgiAiglg");
	this.shape.setTransform(-3.5,-28.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AmxATQgKgJgEgPQgIghAigmIAxATQBCAWBXAOQESAqF5g2IAEAIQAGARAIAoQibAbi8AMQhcAGhNAAQj2AAh9g6g");
	this.shape_1.setTransform(-3.7,-28.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3).p("AprDgIAGA9QAQBAAyAJIAcAPQAeAUAMAZIAfAWQAiAVARgDIAggEQAjACAQAbIAngWQAsgOAYAkIAsgOQAygHAcAhQAFgHAJgIQASgRATgHQA6gVArBYQAGALBtgCQBxgBAWgcQARgkAigdQBEg6BXAhQAng9AchNQA3ibg2hRQghiJgoiLQhRkWgpADQiyAijGARQmLAhhlhZIgoEVQgzEyg2Ceg");
	this.shape_2.setTransform(0.5,23.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF00FF").s().p("ABFIEQgrhYg6AVQgSAHgSARQgJAIgGAHQgcghgyAHIgsAOQgYgkgsAOIgnAWQgQgbgjgCIggAEQgQADgjgVIgfgWQgMgZgegUIgcgPQgygJgQhAIgGg9QA2ieAzkyIAokVQBmBZGKghQDGgRCzgiQAogDBREWQAoCLAhCJQA3BRg4CbQgcBNgmA9QhYghhEA6QgiAdgRAkQgVAchyABIgeAAQhQAAgFgJg");
	this.shape_3.setTransform(0.5,24.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(3).p("AjunzIBAA8QBHBNAaBUIBDBkQBcB9CNB6IAJAQQAIAWgBAbQgFBVhlBoQgoAAgnAGQhMAKAFAbQgNg1gTg5QgkhzgbgZQAAgLgEgMQgHgXgOACQAagYAQgfQAfg9gyglQgQhbgYhiQgvjAglglg");
	this.shape_4.setTransform(53.4,-39.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF00FF").s().p("AgxFDQgkhzgbgZQAAgLgEgMQgHgXgOACQAagYAQgfQAfg/gygjQgQhbgYhiQgvjBglgkIBAA8QBHBNAaBUIBDBkQBcB7CNB8IAJAQQAIAWgBAbQgFBVhlBoQgoAAgnAGQhMAKAFAbQgNg1gTg5g");
	this.shape_5.setTransform(53.4,-45.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(3).p("AhEBGIAMADQAPACANgEQAmgKAAg9IAIAMQAKANAKAFQAfASAUg6Igng8IiIAgIgEAoQAAAuAWAWg");
	this.shape_6.setTransform(60.5,-2.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A67C52").s().p("Ag3BIIgNgDQgVgWAAguIAEgoICIggIAnA8QgUA6gggSQgJgFgLgNIgIgLQABA8gmAKQgIACgJAAIgLAAg");
	this.shape_7.setTransform(60.5,-2.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(3).p("AkdlAQgfASgiAoQhCBOgIBqIgGA8QgKBBgRAmIgKA1QgFA+AhAqIBdAYQB0AbBvAOQFeAtClhiIASgKQATgNAOgSQAqg5gohMQgVhVgZhYQgziwgXgDg");
	this.shape_8.setTransform(-0.1,-57.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF00FF").s().p("Ah3EzQhvgOh0gbIhdgYQghgqAFg+IAKg1QARgmAKhBIAGg8QAIhqBChOQAigoAfgSIJmAwQAXADAzCwQAZBYAVBVQAoBMgqA5QgOASgTANIgSAKQhwBDjIAAQhbAAhwgOg");
	this.shape_9.setTransform(-0.1,-57.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(3).p("AEGnnQgpAQgvAgQhdBBgbBUQgTAmgtA+QhfB9iMB6IgJAQQgJAWACAbQAEBVBlBoIBPAGQBNAKgEAbQALg1ATg5QAlhzAagZQABgLADgMQAHgXAOACQgagYgPgfQgfg9AyglQAchUAjhcQBGi3Algjg");
	this.shape_10.setTransform(-54.2,-40.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF00FF").s().p("AhNGAIhPgGQhlhogEhVQgCgbAJgWIAJgQQCMh8Bfh7QAtg+ATgmQAbhUBdhBQAvggApgQQglAjhGC3QgjBcgcBUQgyAjAfA/QAPAfAaAYQgOgCgHAXQgDAMgBALQgaAZglBzQgTA5gLA1QAEgbhNgKg");
	this.shape_11.setTransform(-54.2,-46.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(3).p("ABFBGQgUAHgTgGQgmgLAAg8QgMAVgQAJQggASgUg7IAog8ICHAhIAEAoQAAAugWAWg");
	this.shape_12.setTransform(-63.7,-4.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C69C6D").s().p("AAdBGQgmgLAAg7QgMAUgQAJQggASgUg7IAog8ICHAhIAEAoQAAAugWAWQgLAEgLAAQgJAAgIgDg");
	this.shape_13.setTransform(-63.6,-4.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(3).p("An/i2QgRgFgtATQg3AXgDAmQgEAoAmASQAdAOAngCIgIAUQgHAWAGASQASA5CNgWIAUATQAZAWAdAMQBbAnBUhDIAKAWQAPAZAWAOQBGAuBzhLIAoAYQAwAaAoALQB/AjACiCIAkAHQArAHAjAAQBwABgJhBQAcgKAQgRQAhgig5gqIjXhLQhfAjifAMQk9AalBhsg");
	this.shape_14.setTransform(0.9,74.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C69C6D").s().p("ADmCwQgogLgwgaIgogYQhzBLhGguQgWgOgPgZIgKgWQhUBDhbgnQgdgMgZgWIgUgTQiNAWgSg5QgGgSAHgWIAIgUQgnACgdgOQgmgSAEgoQADgmA3gXQAtgTARAFQFBBsE9gaQCfgMBfgjIDXBLQA5AqghAiQgQARgcAKQAJBBhwgBQgjAAgrgHIgkgHQgBBnhQAAQgVAAgbgIg");
	this.shape_15.setTransform(0.9,74.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(3).p("AkZtIIA4AKQBEAVBBAzQDNCiBdGUIACAKQBbGRhHDkQgUBAgjA1QgYAlAEAFIAUgHQAYgHAVADQBBAIADBfQgFA2gkAqQhHBViZg4g");
	this.shape_16.setTransform(51.9,-8.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AATM1Iku5/IA4AKQBEAVBBAzQDNCiBdGUIACAKQBbGRhHDkQgUBAgjA1QgYAlAEAFIAUgHQAYgHAVADQBBAIADBfQgFA2gkAqQgqAzhJAAQgwAAg9gWg");
	this.shape_17.setTransform(52.1,-8.6);

	this.addChild(this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-82.7,-100.4,164.8,195);


(lib.qb = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAfAaIgLgRIgEgHIgCgCIgDgCIgFgFIgDgBIgDgCIgEgBIgHAAIgHABIgQAEIACgEQADgFAGgFIAHgFIALgEQAFgBAFACIAHACIAFADIAJAJIAGAKIACAHIABAQIgBALg");
	this.shape.setTransform(12.6,-7.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgGAUQgCgIgBgMIADgbIgBgCIAAgBIAEABQADACACAEQAIAIgBAPQAAAMgFAJIgFAKQgDgFgCgGg");
	this.shape_1.setTransform(1.6,-9.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhCASIALgPIAJgGIAMgIIANgGIAPgEIANgCIAPAAIAZAFIAQAIIAGAEIgvAAIgNACIgXAEIgYAIIgeAQg");
	this.shape_2.setTransform(-9.4,-7.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(3).p("AgXBXQgmAmgxAYQhjAyg9hDQgGgIgCgPQgDgeASglQgSgUgMgfQgXhEAkhEIASgIQAZgIAfAAQBjACB3BWIBHg1QBVgzBJAJIAPALQASAOALAUQAkA9glBSIAEAzQgEA5goAaQgfAMgpgEQhRgHg0hOQgDAHgKAEQgUAKgdgLg");
	this.shape_3.setTransform(0,-7.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AkOCEQgGgIgCgPQgDgeASglQgSgUgMgfQgXhEAkhEIASgIQAZgIAfAAQBjACB3BWIBHg1QBVgzBJAJIAPALQASAOALAUQAkA9glBSIAEAzQgEA5goAaQgfAMgpgEQhRgHg0hOQgDAHgKAEQgUAKgdgLQgmAmgxAYQgqAVgjAAQgwAAgjgmg");
	this.shape_4.setTransform(0,-7.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(3).p("Ah5h5IAYBRQAYBYABA1IALAKQAPALATADQA9ALBXhDQAHgOABgaQABgwgig3g");
	this.shape_5.setTransform(13.6,11.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgeB7QgUgDgOgLIgLgKQgCg1gYhZIgYhQIDZAvQAjA2gCAxQAAAZgIAOQhLA6g3AAIgRgBg");
	this.shape_6.setTransform(13.9,11.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(3).p("Agzg8QgaAcgTAgQgkA/ApAZIAaAPQAfASAcAHQBXAZAUhOQAIgkADgrQAGhYgbglg");
	this.shape_7.setTransform(-10.1,10.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgGB+QgcgHgfgSIgagPQgpgZAkg/QATggAagcICOhFQAbAlgGBYQgDArgIAkQgPA7g3AAQgRAAgUgGg");
	this.shape_8.setTransform(-10.1,10.7);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31.8,-25.6,64.2,54);


(lib.play_i = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#990000").ss(1,1,1).p("ADcAAQAABbhBBAQhBBBhaAAQhaAAhAhBQhBhAAAhbQAAhaBBhAQBAhBBaAAQBaAABBBBQBBBAAABag");
	this.shape.setTransform(0,0,0.822,0.822);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AhYhmICyBmIiyBng");
	this.shape_1.setTransform(3.6,2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19,-19,38.2,38.2);


(lib.pip = function() {
	this.initialize();

	// Layer 1
	this.hel = new cjs.Text("Play     Stop", "bold 15px 'Arial'", "#FFFFFF");
	this.hel.name = "hel";
	this.hel.lineHeight = 17;
	this.hel.lineWidth = 100;

	this.addChild(this.hel);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,104,20.8);


(lib.parr = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2).p("AAnhAQgEAFgEAFQgsA6gsANIggAVIgGBvIAcADQAiAAAcgPQAFgwAJg3QANg8ARgmQAOgeAQgQQgMAWgSAYg");
	this.shape.setTransform(67.7,69);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCCFF").s().p("AhRCBIAGhwIAfgTQAsgNAtg7IAIgLQANgeAQgQQgLAWgSAYQgRAngNA7QgMA4gEAwQgaAPgiAAg");
	this.shape_1.setTransform(66.3,71);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGARIgFgBQgDgBgDgDIgCgDIAJABQAGAAAGgHIAMgMIAGgHIgCAKIgDAHIgCAEIgFAFIgEAEIgEACIgEABIgCAAg");
	this.shape_2.setTransform(61.1,74.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgVALIgMgDIA4gOIAIgDIADgBIgCADIgGAGIgKAEIgOAFQgIADgJAAIgGAAg");
	this.shape_3.setTransform(56.5,66.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").p("AgyACIAEgDQAHgDAOAEIAHgFQAKgDALAHIALABQAOgDALgNIgGANQgVAsgTAAQgKABgJgDQgTgGAFgRg");
	this.shape_4.setTransform(56.7,65.4,1,1,0,0,0,0.1,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").p("AgzACIAkgIQAmgIAaAOIACAKQgbgCgZgBQg1gEADgBg");
	this.shape_5.setTransform(61.9,38.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").p("AgnAaQgBgOAHgMQAPgaAoABQgOAGgNAKQgdARgFASg");
	this.shape_6.setTransform(43.4,43.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgNABQABgCADgCQAEgDAFAAQABAAAFACIAFAEQADABABADIgPgCIAAAAQgEAAgEACIgFADQgBgCABgEg");
	this.shape_7.setTransform(53.3,61.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgCALQgEgDgBgGQgCgEACgFQABgEAEgBQACgBADADQAEADABAGQACAEgCAFQgBAFgEABIgBAAQgCAAgCgDg");
	this.shape_8.setTransform(67,49.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").p("AAKgBQADAIgBAHQgBAIgFABQgEABgDgGQgFgFgDgKQgCgIABgIQABgIAEgBQAFgBADAGQAFAGACAKg");
	this.shape_9.setTransform(67.6,51.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgBASQgFgFgDgKQgCgIABgIQABgIAEgBQAEgBADAGQAGAGACAKQADAIgCAHQAAAIgFABIgBAAQgEAAgCgFg");
	this.shape_10.setTransform(67.6,51.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").p("AAlAEQgCAQgMALQgNAKgOgCQgPgCgKgNQgKgNACgOQADgRAMgKQANgKANACQAQACAKANQAJANgCAOg");
	this.shape_11.setTransform(67.9,50.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgEAnQgPgCgKgNQgKgNACgOQADgRAMgKQANgKANACQAQACAKANQAJANgCAOQgCAQgMALQgLAJgMAAIgEgBg");
	this.shape_12.setTransform(67.9,50.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgCALQgEgDgBgGQgCgEACgFQABgFAEgBQACgBADAEQAEADABAGQACAEgCAFQgBAFgEABIgBAAQgCAAgCgDg");
	this.shape_13.setTransform(44.4,55.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").p("AAKgBQACAIAAAHQgBAIgFABQgEABgDgGQgFgFgDgKQgCgIAAgIQABgIAFgBQAEgBADAGQAFAGADAKg");
	this.shape_14.setTransform(45,56.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgBASQgFgFgDgKQgCgIABgIQAAgIAFgBQAEgBADAGQAFAGADAKQACAIgBAHQAAAIgFABIgBAAQgEAAgCgFg");
	this.shape_15.setTransform(45,56.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").p("AAXgGQAEAMgDAMQgEAMgKADQgJADgJgIQgKgHgEgOQgEgMADgMQAEgMAKgDQAJgEAJAIQAKAIAEAOg");
	this.shape_16.setTransform(44.5,56.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgIAcQgKgHgEgOQgEgMADgMQAEgMAKgDQAJgEAJAIQAKAIAEAOQAEAMgDAMQgEAMgKADIgFABQgFAAgIgGg");
	this.shape_17.setTransform(44.5,56.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgaBEIgKAAIgKgCIgJgDIgKgDIAUAEIATABIATgDIAIgEIAQgJIAIgGIAOgNIALgQIAJgOIAAAAIAAgEIAAgEIgBgIIgEgJIgFgHIgMgOIgNgLIgZAKIgSAKIgIAHIgIAGIgOAQIgFAIIgEAIIgGAUIgBALQgBAMABAJQgFgUAEgXIADgKIAEgJIALgTIAPgQIAJgHIAJgFQADgDAHgDIAdgMIACAAIACABIAQANQAHAHAGAIIAGAJIAEAKIABAFIABALIgBADIAAABQgEAKgGAIIgGAJIgHAIIgPANIgJAGIgJAFIgJAEIgIADIgKABg");
	this.shape_18.setTransform(66.8,51.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag/A6QgGgXAJgbQASg0BFgUIAVATQAVAXgEAVQgJAVgVAUQgcAZghAAQgRAAgUgHg");
	this.shape_19.setTransform(66.7,51.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAFAvIgMgCIgCgCIgFgCIgKgGIgIgIIgGgJIgJgSIgEgKIgDgWIAAgDIACgBIAMgHIAEgCIAKgCIAJgBIAKABIAHADIAIAFIAIAFIAHAGIAGAHQAFAGAFAIQALAOAFAQQgMgUgHgHIgMgNIgNgLIgHgFIgNgFIgIgBIgIABIgLAEIgIAFIADAQIADAKIAEAHQABAFADAEIAGAIIAGAHIAIAGIAIAEIAIADQAOADAGAAIAKgBQAFgBAEgCIAEgDIADgEIADgKIgCAKQAAADgDACIgDAEQgEADgGACIgLACIgGAAQgIAAgHgCgAA3AXIAAAAg");
	this.shape_20.setTransform(44.2,56.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAUAtIgcgFQgZgKgMgfIgHggQAngcAkAnQATAUALAYQgCAXgeAAIgBAAg");
	this.shape_21.setTransform(44.4,56.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(2).p("AiZiiIglBKQgdBRAoAjIASAYQAQAfgLAhIgEAIQgEALACALQAHAlBBAiIAxAYQAzAQAYglQASgFAWgNQAsgYAVghQAWgWASggQAlhBgUgwIiGjdg");
	this.shape_22.setTransform(58.3,48.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFCCFF").s().p("AgpDwIgxgYQhBgigHglQgCgLAEgLIAEgIQALghgQgfIgSgYQgogjAdhRIAlhKIDXhRICGDdQAUAwglBBQgSAggWAWQgVAhgsAYQgWANgSAFQgQAagdAAQgOAAgQgFg");
	this.shape_23.setTransform(58.3,48.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgSAgIgbgDIgPgGIgMgEIgRgKIAJgBIAKAAIAbgCIA/gHIAQgEIAHgCIAogTIAHgFIgCAJIgOAUIgMAJIgQAKIgRAIIgUAFIgSACg");
	this.shape_24.setTransform(119.8,91.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3A0608").s().p("AgOAbQgEgqAhgtIgTB5QgIgMgCgWg");
	this.shape_25.setTransform(48.9,78.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#3A0608").s().p("AgDgVQgBgjgIgmIgHggQB6BihFBWQgiAsg5AZQA5glgDhvg");
	this.shape_26.setTransform(91.2,94.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgmBpIBNjZIgwDhg");
	this.shape_27.setTransform(31.8,187.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AhsCkIDZlbIi2Fvg");
	this.shape_28.setTransform(25.6,179.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgvCgIBflGIhCFNg");
	this.shape_29.setTransform(56.1,186.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgVANQgGAAgDgCIgDgBIADgBIAIgBIAWgHIAigOIgHAKIgKAFQgEAEgJAEQgGADgGAAIgHABIgGgBg");
	this.shape_30.setTransform(62.7,56.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgWAeIgFgBIADgEIANgKIAFgEIAFgFIADgEIALgNIADgEIAEgOIADADIAEALQABALgCAEIgEAIIgGAIIgPAKIgGADIgHABg");
	this.shape_31.setTransform(77.7,52.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(2).p("Ag7CMQgygpgRgXQgjgqAAgvQAAhMA5hDQA3hBA0AAQA1AAA1BKQA1BKAABLQAAA1geAmQgZAhgqARIgLALQgKAUADAuIhiACQACgSAAgTQAAgmgKgHg");
	this.shape_32.setTransform(85.5,94.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFF00").s().p("AgxC5QAAgmgKgHQgxgpgSgXQgjgqAAgvQABhMA4hDQA3hBA0AAQA1AAA0BKQA1BKAABLQAAA1gcAmQgaAhgrARIgKALQgLAUADAuIhhACQACgSAAgTg");
	this.shape_33.setTransform(85.5,94.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(2).p("AheAcQAIAaAiAKQAhAKAmgMQAngMAWgaQAWgZgHgaQgIgaghgKQgigKglAMQgnAMgXAbQgWAYAHAag");
	this.shape_34.setTransform(62.5,77.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#3A0608").s().p("Ag0BAQgigKgHgaQgJgaAXgYQAXgbAngMQAmgMAgAKQAiAKAIAaQAIAagXAZQgWAagnAMQgUAGgUAAQgQAAgPgEg");
	this.shape_35.setTransform(62.5,77.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(2).p("ABfjEIATAAQAXAAAVAHQBFATAaBCQg3Acg6AjQh0BCgQAhQgKgXgQgXQghgugTgCIgdA2QgdBAAEAlIAEAeQAGAgALALIhXgPIABgxQgigagTglQgmhKBMg8QAYgZArgbQBXg2BdgJg");
	this.shape_36.setTransform(55.6,88.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFF00").s().p("Ai9CzIABgxQgigZgTgmQgmhJBMg8QAYgZArgbQBXg2BdgJIA0gMIATgBQAXABAVAGQBFAUAaBCQg3Acg6AiQh0BDgQAhQgKgXgQgYQghgtgTgCIgdA2QgdBAAEAlIAEAeQAGAgALALg");
	this.shape_37.setTransform(55.5,88.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(2).p("ACwkaIgPBOQgNBbAQBDQgsAWguAZQhZA1gLAUIALBCQAPBMAaAxQgXAJgjACQhJAGhDgbQAPgpAUgoQAmhSATgBQAFgTgIgcQgRg3hDgxQAKg0ASg1QAlhqApgFQDKAHAjgNg");
	this.shape_38.setTransform(57.4,109.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#3A0608").s().p("AiuECQAQgpAUgoQAmhSASgBQAGgTgIgcQgRg3hDgxQAJg0ATg1QAlhqApgFQDJAHAkgNIgQBOQgMBbAQBDQgsAWguAZQhaA1gLAUIAMBCQAQBMAYAxQgWAJgjACIgZABQg7AAg5gWg");
	this.shape_39.setTransform(57.6,109);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(2).p("AA7keIgBAPQgIAUgfAbQgBACgCABIgLgKAAQjdQgZAXhYBBQhJA1gEALQgMAeBMCUQBNCbAtAMIBMACQBOgDAKgZIgfhPQgTAGgWAFQgsAJgSgHQgggjgegwQhBhfgEg9QCxhQAJgOg");
	this.shape_40.setTransform(69.8,123.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AANEZQgtgMhOibQhLiUAMgeQAEgLBJg2QBXhBAZgXIgKgJIA2g4IgCAPQgHAVgfAbIgEACIBRBJQgIAOixBQQADA9BBBfQAfAvAfAjQATAIAsgJQAWgFASgGIAfBOQgJAZhOAEg");
	this.shape_41.setTransform(69.7,122.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(2).p("AgGh8QgaDhgMAWQgIAOAggKQAQgFAQgIIAhjzg");
	this.shape_42.setTransform(83.1,128.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#C69C6D").s().p("AgrB7QAMgXAajgIAzgGIghD0QgQAIgQAFQgNAEgHAAQgJAAAFgIg");
	this.shape_43.setTransform(83,129);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(2).p("AB3AQIgIAOQgVAfgZAEIgGAjQgJApgSAdQg3Bbh5hBQgRgjgCgXIBalcQBxCaAEgEIARgBQAUgBAOAEQAwAMgVA2QgBAEgCAEQgcBMAlhbg");
	this.shape_44.setTransform(94.1,133.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("Ah+C+QgRgjgCgXIBalcQBxCaAEgEIARgBQAUgBAOAEQAwAMgVA2IgDAIIgIAOQgVAfgZAEIgGAjQgJApgSAdQgiA1g0AAQgoAAgygbgACJAKIAJgNIgVAvIAMgigACJAKg");
	this.shape_45.setTransform(92.3,134.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(2).p("Ai6h9IgEAQQgCAVADAWQALBFBEA8IBZADQBjgEA8geQATgJASgRQAkghgGgsIAvAnQApArggAeQgUAng9AfQh6A/jMgkQgagEgcgUQg5gqgPhSQgDgYABgdQABg7ARgbg");
	this.shape_46.setTransform(93.1,160.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AiSCJQgagEgcgUQg5gqgPhSQgDgYABgdQABg7ARgbIBGAYIgEAQQgCAVADAWQALBFBEA8IBZADQBjgEA8geQATgJASgRQAkghgGgsIAvAnQApArggAeQgUAng9AfQhOAphtAAQhAAAhLgOg");
	this.shape_47.setTransform(93.1,160.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(2).p("AD7hEIgMAeQgSAkgfAbQhjBdi5gHQgbgCgZgZQg0gyAHhyQgTgKgTgPQgngdgCgTIgGAjQgHAsgBAqQgDCCA4A5IAbAYQAmAaAyAIQCfAXDhitQAMgQAEgYQAHgvgogsg");
	this.shape_48.setTransform(98,180.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("Ah0C2QgygHgmgaIgbgZQg4g4ADiDQABgpAHgsIAGgkQACAUAnAdQATAOATALQgHBxA0AyQAZAaAbACQC5AGBjhbQAfgdASgjIAMgeQAoArgHAxQgEAXgMAPQjHCZiSAAQgUAAgTgDg");
	this.shape_49.setTransform(98,183.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(2).p("ACYiCIk3DQIgLBEQA7ggA+gmQB5hKAOgVg");
	this.shape_50.setTransform(35.6,128.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AiWBHIE3jRIhCBwQgOAXh5BIQg+Alg7Ahg");
	this.shape_51.setTransform(34.7,128.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(2).p("AByiLIAIAmQAGAogMAKIhDA+QhDBEgFASQgGATgmAVQgUALgSAHQAtg/Asg/QBWh9gDgCQgDgCADgeIAEgeg");
	this.shape_52.setTransform(31.5,119.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#C69C6D").s().p("AgZAgQBWh8gDgDQgDgBADgfIAEgeIArAVIAIAmQAGAogMALIhDA+QhDBDgFASQgGATgmAWQgUAKgSAHIBZh+g");
	this.shape_53.setTransform(32.4,119.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#3A0608").s().p("Ag2gCIgZhoIAqg/IBaBcIAHBQIAUAOIgcCZg");
	this.shape_54.setTransform(74.2,116);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").p("ABDDtQAahUAUhgQApi/gYg9QgmgRgtgMQhYgYghAZIgkBYQgjBcAJAYQAIAWABgMIgBgTIBLCFQBQCGAogCg");
	this.shape_55.setTransform(71.4,122.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFF00").s().p("Ag1BpIhLiFIABATQgBAMgIgWQgJgYAjhcIAkhYQAhgZBYAYQAtAMAmARQAYA9gpC/QgUBggaBUIgBAAQgoAAhPiEg");
	this.shape_56.setTransform(71.4,122.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#3A0608").s().p("AhwhFQhIh0hYh4IhJhhIEFhfQA/CBFvLQQgRBIhyAsQgjAOgpAJIgiAHQALjEjklzg");
	this.shape_57.setTransform(87.3,147.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(2).p("AGNi0IAVBcQAeBcApAMIAkAeQAgAmgXAsIAWAxQAaA1AUAXIAGAWQAEAcgMAcQgpBai8A7QhTAThkANQjHAahYgdQgMgFgPgDQgegEgSAQQgZAFglgDQhKgIg/guQgbgFgegEQg7gHgJAHQghgLgegXQg8gwAQhEQASgiAPgpQAfhRgLgeQgIgdADglQAGhHA4glQAJggAFgjQAKhIgUgWQgGgbABggQADhBAjgZIAZAAQAaAIAIAlQAbgYAdgiQA6hEALg0QBpgCBqgEQDRgHACgJQACgHAfCJQAlCQAbAPIBCAYQBGAZAQAFg");
	this.shape_58.setTransform(66.7,152.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#29ABE2").s().p("AhjH9QgMgFgPgDQgegEgSAQQgZAFglgDQhKgIg/guQgbgFgegEQg7gHgJAHQghgLgegXQg8gwAQhEQASgiAPgpQAfhRgLgeQgIgdADglQAGhHA4glQAJggAFgjQAKhIgUgWQgGgbABggQADhBAjgZIAZAAQAaAIAIAlQAbgYAdgiQA6hEALg0QBpgCBqgEQDRgHACgJQACgHAfCJQAlCQAbAPIBCAYQBGAZAQAFIAVBcQAeBcApAMIAkAeQAgAmgXAsIAWAxQAaA1AUAXIAGAWQAEAcgMAcQgpBai8A7QhTAThkANQhgAMhGAAQhLAAgugPg");
	this.shape_59.setTransform(66.7,152.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(3).p("AhdixIBdAdQBkAdAcgCQgIA5gTBAQgnCEg7AwIiDg0g");
	this.shape_60.setTransform(74.2,54.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#42210B").s().p("Ah/B+IAikwIBdAdQBkAdAcgCQgHA4gUBCQgnCDg7Awg");
	this.shape_61.setTransform(74.2,54.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(2).p("ApxlTQBEgfBqgdQDWg5DHALIAQgSQAVgVAVgMQBKgpBFA0IBzCWIAMAIQAPAHAKgCQAhgEgWhYIAYAEQAcAIAYAPQBNAxAGBoQgFACgHAHQgMAMgHAXQgWBIAsCKIASAGQAUAGALgDQAmgKg9hZIAagCQAgACAdARQBcA1AYC3QgBAQgNARQgbAkg8ALIAJAZQAIAegHAaQgWBTigAIIAFAUQAFAXgFAPQgPAvhpg0QhhhCiKg6QkThyjPAsQgtAGgkgRQhHgiAvh3QgsgEgvgOQhegbgOgvQgCgNAMgZQAYgwBIg6QgjgjgVgvQgqhdBHg6g");
	this.shape_62.setTransform(71.6,54.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#C69C6D").s().p("AE9HoQhhhCiKg6QkThyjPAsQgtAGgkgRQhHgiAvh3QgsgEgvgOQhegbgOgvQgCgNAMgZQAYgwBIg6QgjgjgVgvQgqhdBHg6QBEgfBqgdQDWg5DHALIAQgSQAVgVAVgMQBKgpBFA0IBzCWIAMAIQAPAHAKgCQAhgEgWhYIAYAEQAcAIAYAPQBNAxAGBoQgFACgHAHQgMAMgHAXQgWBIAsCKIASAGQAUAGALgDQAmgKg9hZIAagCQAgACAdARQBcA1AYC3QgBAQgNARQgbAkg8ALIAJAZQAIAegHAaQgWBTigAIIAFAUQAFAXgFAPQgHAWgcAAQgeAAg3gbg");
	this.shape_63.setTransform(71.6,54.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(2).p("AiWA7QAOgbAWgdQAsg4AqgMIBTAsQBVAtAIAVQgyAJg/AGQh7ANg+gOg");
	this.shape_64.setTransform(53.1,7.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FBB03B").s().p("AiUA7QANgbAWgdQAsg4ArgMIBSAsQBWAtAHAVQgyAJg+AGQg5AGgtAAQgyAAghgHg");
	this.shape_65.setTransform(52.9,7.7);

	this.addChild(this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,143.2,206.2);


(lib.bun = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("( UNLOCK ) INSTRUCTION BY PRESSING HERE", "bold 14px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 16;
	this.text.lineWidth = 328;
	this.text.setTransform(-162.4,-10.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#996666").s().rr(-179.5,-57,359,114,57);
	this.shape.setTransform(0,0,1,0.807);

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-179.4,-46,359,92);


(lib.over_m = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#996666").s().rr(-125,-12.8,250,25.6,12.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-124.9,-12.7,250,25.6);


(lib.op = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIBWQgKgEgKgJQgJgHgHgKQgOgUgFgYIgBgLIgBgKQAAgLADgMQACgMAFgKQAHgLAHgJQAJgJALgDQAJgEAMABQAIAAAJAFQAIAEAGAHQAMALAGAMIAJAUIAEAOIgEgNQgDgJgIgLQgHgLgNgIQgPgKgMACQgPABgKAPQgIAMgCAUIAAATIACAQQAEAUAIAOQAJARAMAJQAGAEAHACIAEAAIAEAAIAIgBQANgDAKgPQAHgKAEgQQADgMgBgKIgBgMIACAMQABAJgBANQgEAUgEAJQgKAUgOAHIgFADIgGABIgEACIgGAAQgNAAgIgEg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8C6239").s().p("AgbBCQgVgVgHgiQgHggALgcQAMgbAYgFQAWgFAVAVQAVAVAHAiQAHAggLAcQgNAbgXAFIgJABQgQAAgSgRg");
	this.shape_1.setTransform(0.7,-0.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.6,-9,13.3,18.2);


(lib.ttn = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#990000").ss(1,1,1).p("AD1AAQAABlhIBHQhIBJhlAAQhkAAhIhJQhIhHAAhlQAAhkBIhIQBIhIBkAAQBlAABIBIQBIBIAABkg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AisCtQhHhIAAhlQAAhkBHhIQBIhIBkAAQBlAABHBIQBJBIgBBkQABBlhJBIQhHBHhlABQhkgBhIhHg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.5,-25.5,51,51);


(lib.middle_right_leg = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3).p("AANDjQgLhvg0iHIg0h0IBrhTIA6B/QA4COgQBZ");
	this.shape.setTransform(-0.1,-0.3,0.752,0.752);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgzgXIg1h0IBrhTIA7B/QA3COgPBZIhbBXQgKhvg0iHg");
	this.shape_1.setTransform(0,0,0.752,0.752);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.7,-19,19.2,37.4);


(lib.middle_left_leg = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3).p("AiTCvQBChaAyiJIAjh5ICJAKIgKAnQgNAxgRAuQg2CPhFA4");
	this.shape.setTransform(0.3,0,0.752,0.752);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Agbg0IAjh6ICJAKIgKAoQgNAxgSAtQg2CPhEA5Ih9AEQBBhZAziJg");
	this.shape_1.setTransform(0,0,0.752,0.752);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.4,-16.8,27,31.5);


(lib.left_up_leg = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3).p("AAFDfQAFgWB0lpIjYg5IgKC5QgNC/gRAn");
	this.shape.setTransform(0.2,-0.1,0.752,0.752);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AiADEQARgnANi/IAKi6IDZA6Qh1FpgFAWg");
	this.shape_1.setTransform(0,0,0.752,0.752);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.2,-18.6,22.9,36.8);


(lib.left_arrow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00A1FF").ss(50,1,1).p("AMT4jI4lYkIYgYj");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-103.7,-182.2,207.6,364.5);


(lib.lemc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAYQgLgKAAgOQAAgNALgLQAKgJANgBQAOABAKAJQALALgBANQABAOgLAKQgKALgOgBQgNABgKgLg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.5,-3.5,7,7);


(lib.l_hand = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,0,0,60).p("AAAAAIAAAA");
	this.shape.setTransform(-9.5,-10,0.752,0.752);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3).p("ABRkiQgTAFAUAiQATAhAQAHQAQAHAVgEQASgEAOgNQADgCAHgLQAIgMAFgJQACgFAGgCQAGgCAFAEQAYARgaAwIgEA5QgCBCAGAuIAEARQAMAWArAfIgOAYQgVAYgigEQgOgNgNgVQgagpAIghIgsB7QgpCGAJAuQgRALgTABQglADgHgwQACgQALgpQAWhQArh3IhuCGQh0CIgUACQgTgHgJgSQgRgjA0g0QB3h1AlgqIhuA5Qh4BAgmAXQgLACgJgEQgRgIALgbQEai5gUgBQg3AUg8AMQh4AYgWgnQAEgKAKgMQAVgXAigDQAfgBAkgFQBGgJAUgQQAUgNAYgTQAvgnAVglQgGgFAAgGQAAgOAcgHg");
	this.shape_1.setTransform(-15.6,11.9,0.752,0.752);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AkHClQgNgGgMgQQgHgJgGgRIgCgDIAHhCIAJg8QAGgiAHgcIAJgfIAHgQIAFgIIAJgJIADgCIADAAIDvgSIB6gHIBbgCQAUAAAKABIgeABIm+AyIAAABIgDAFIgFANQgEAMgEAQQgGAcgFAhQgIA0gGBAIgBgDIABAHIAAgEQAFALAEAGQAHAJAGACQAGADAIgDIAIgFIAFgEIAfiPIAFgMQAIgOAOgFQAGgDAIgBIAKABIABAAIADABQALACAbACQAoADApACIFDALIijAIIhRACIhQABQg2AAgbgBIgrgEIgDgBIgDAAQgDAAgDACQgEABgEAHIgDAGIgBAEIAAADIgdCPIgDADIgMALIgOAIQgKADgIAAIgEAAQgIAAgHgDg");
	this.shape_2.setTransform(14.6,-21.2,0.752,0.752);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AknB3QAFg3AIg6QAShyATgMQHFgtAcAGIA8CKQhiABhpAAQjQAAglgJQgHgBgIADQgQAFgGAWIgdCPQgMANgPAEIgIABQgaAAgQgqg");
	this.shape_3.setTransform(15.1,-21.7,0.752,0.752);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-38.9,-33.9,76.4,69.3);


(lib.kh = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgBATQgIgBgFgHQgFgGABgGQABgIAGgFQAHgFAGABQAIABAFAGQAFAHgBAGQgBAIgHAFQgFAEgGAAIgBAAg");
	this.shape.setTransform(29.9,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgEArQgTgCgLgOQgLgPACgQQADgSAOgMQAPgLAQADQASACALAOQAMAPgDAQQgCASgPALQgLAKgPAAIgEgBg");
	this.shape_1.setTransform(29,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgBATQgIgBgFgHQgFgGABgGQABgIAGgFQAHgFAGABQAIABAFAGQAFAHgBAGQgBAIgGAFQgGAEgGAAIgBAAg");
	this.shape_2.setTransform(-11.5,-2.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgEArQgTgCgLgOQgLgPACgQQADgSAOgMQAPgLAQADQASACALAOQAMAPgDAQQgCASgPAMQgLAJgPAAIgEgBg");
	this.shape_3.setTransform(-12.5,-0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AA/AGIgegGQgPgBgSgBIgTAAIgRABIgRABIgkAJIgIADIARgJIAMgDIAOgEIARgDIASgDIASgCQAYgBALABIAgADIAXADIAHABIABABIgFARQgLgEgSgDg");
	this.shape_4.setTransform(24.9,-73.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhDgIIAWgBQAagBAUADQAKAAAQADQALACAKACIAIADIAMAGIgGgCIgPgEQgLgCgKAAIgZAAQgQAAgcAFIgUAEg");
	this.shape_5.setTransform(-21,-69.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("ACQBcIgJgnIgRg1IgPgfQgJgSgSgWQgRgVgQgOIgTgOIgUgMQgQgLgWgHQgSgHgUgEQgggGgcgCIgXAAIAXgDQAdgFAhAFQAbADAOAFQAdAJANAHQAXALATAQQARANAUAZQASAXAKAUIAGAMIANAhIAGAWIAIAsIACAUQABAMAAAXIgCAyg");
	this.shape_6.setTransform(22.1,-49);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAHgBIgFgnIgDgmIgLhDIgThAIAKAPIAUAuIAQBDQAFAZABANIAGAoIADAmIABAnQABATgBAyIgGBDg");
	this.shape_7.setTransform(7,-41.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhnCSIgFgSQgDgKgFgeIgDgvIABgYIAFgYQAJgiAIgQQAJgWASgWQAKgOAZgXQAhgcAogSQAXgKAjgJIAXgDIgWAIQgdAKgaAPQgNAHgUAOQgNAKgUASQgSASgNARQgQAVgIAUQgKATgGAaIgFAWIgCAWIAAAtIAFAoIASBSg");
	this.shape_8.setTransform(-13.4,-44.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(3).p("AmIhjIgKAkQgGArAPAjQAzB2D/AGIA9ABQBJgBBEgLQDagkBFh2QAEgIgBgQQgDghgbguQhQBViIAsQkPBckYi/g");
	this.shape_9.setTransform(4.7,-20.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F7931E").s().p("AhXCGQj/gGgzh2QgPgiAGgsIAKgkQEYC/EPhaQCIguBQhVQAbAuADAhQABARgEAHQhFB3jaAjQhEALhJABg");
	this.shape_10.setTransform(4.7,-20);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag9FtIgYgDIgYgEIgvgLIgugPQgJgCgkgPIgsgTIgqgWIBYAlIAtAOIAXAHIBGAPIAXADIBdAEIAXgBIAvgGQAfgFAPgEIAtgNIAsgRIAWgKIAUgKQAQgJAZgPQAQgLAVgRQAVgQAMgMIAVg1IAJgcIAIgcIAFgdIAFgVIAChNIgGgjIgGgUIgEgNIgGgNQgDgHgDgGQgJgQgGgHIgJgLIgTgUIghgXIgGgDIgYg3IgOgWIgJgKIgJgKIgUgQQgPgJgIgDIgYgIQgOgEgMAAIgbgBIgbACIgbAFIhNAaIgxAYIgFADIhUgOIgmACIgTADIgSAGIgJADIgIAFQgJAFgHAFQgPALgLAQIgKARQgEAIgDAJIgGATIgEAYIgFADIgcAOQgUAMgHAGIgYAUQgPARgFAHIgPAbIgFAPIgIAfIgBANQgBAWABAKIALBAIAXA9QAIAUAVAmQATAgARAXQgUgYgTgdQgTgegNgbIgOgfIgMgfQgFgQgEgQIgFghQgCgQAAgRIABgPIAHgiIAGgQIAHgPIAJgPQADgGASgVQAUgUAFgDQAJgHATgMIAYgNIADgQQACgLAEgLIAIgUIALgTQANgTAQgOIATgNIAJgFIAggMIAVgEIAWgDIArACIA5AKIAVgMIA0gYIAbgJIA6gOIA8gCQARACANADIAPAEIAPAGQAMAFAPAJIANAKIAMAKIAKALIAKAMIAJAMIAIANQAFAIAIATIAJAWIAJAGIANAJIAjAhIAJAMIARAbIAIAPIAGAOQACADADAMIAHAXIADAXIACAQIACAlIgJBFIgQA7IgJAdIgXA4IgBACIgCABQgPAQgWARQgYARgRALQgSALgYANIgWAKIgWAKQgZAKgVAGIgYAHQgMAEgLACQgWAEgaAEIhJAFg");
	this.shape_11.setTransform(3.1,-51.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AlJEOQhAhPgdhfQg5i7CvhPQAAgMAFgRQAJgiAVgZQBBhPCYAnIAvgYQA4gaA0gHQCngZA1CkIAeAUQAjAcAVApQBDCBheDRQhDBIh7ArQhdAhhhAAQifAAishZg");
	this.shape_12.setTransform(2.7,-51.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").p("AhFgeIAJgJQAMgLANgFQApgPAsAqIAKATQALAYgCAeQgKgVgXgUQgqgng/AFg");
	this.shape_13.setTransform(33.2,-15.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAlALQgrgmg/AEIAJgJQAMgKAOgFQApgQArAqIALAUQAKAXgCAfQgKgVgWgVg");
	this.shape_14.setTransform(33.2,-16.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgLCIIgHgBQgEAAgFgCQgSgEgOgLQgegVgNglIgGgSQgDgNAAgGIgBgTIABgSIAGgbIAEgJIAHgRIAKgQQAYghAhgNQAggNAhAMQAcAKATAZQAPAVAHAWQAFAUABAQIAAAWIgBAIIAAgeQgBgQgHgTQgJgXgPgRQgHgIgNgIQgPgIgKgCQgdgGgYAOQgOAIgKAKQgMAMgHALQgGALgHARIgCAIIgFAYQgEAfAJAcQADANAJAPQAHANALAKQALAKANAFIAHADIAHABQAIACAEAAQALABAPgEQAQgFAIgGQASgLAQgVQAKgPAGgRIAEgNIgDANQgFAQgKARQgMAUgUARQgYASgeADIgGABIgJgBg");
	this.shape_15.setTransform(31.6,0.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgPCAQgsgFgagqQgZgqAHgzQAHg1AjgiQAkgiApAGQArAFAaAqQAaAqgHAzQgGA1gkAiQgfAdgiAAIgMgBg");
	this.shape_16.setTransform(32.3,1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C69C6D").s().p("AgECXQgxgBggguQghguACg9QADg/AjgrQAkgrAuABQAxACAhAuQAhAtgCA9QgCA/gkAsQgjAqgsAAIgEgBg");
	this.shape_17.setTransform(31.6,-1.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgOCdIgJgBIgKgCQgWgHgOgLQgjgZgPgrIgGgUIgEgWQgCgTADgWIAKgqIAJgUQAHgNAFgGQAagmAngOQAlgQAmAOQAfAKAXAeQAQAVAJAcQAHAYABASQABAJgBAHIgBAJIAAgJIAAgQQgBgSgIgXQgKgbgSgTQgIgJgPgLQgSgJgMgDQghgIgeARQgQAIgMAMQgOAOgIAOQgLARgFAQIgFASIgEATQgEAjAKAkQAEAPALARQAJAQANALQAMAMAQAGIAIADIAWAEQANABATgFQARgGALgHQAVgNARgYQANgTAGgTIAIgaIgDALIgEAPQgFASgNAVQgOAYgXASQgcAVgiADIgIABIgJgBg");
	this.shape_18.setTransform(-14.2,-3.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgSCVQgygGgegxQgegwAIg8QAIg/ApgnQApgnAxAHQAyAGAeAxQAfAwgJA8QgIA+gpAnQgkAigoAAIgOgBg");
	this.shape_19.setTransform(-13.5,-3.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C69C6D").s().p("AgFCzQg3gCglg2Qglg1AChJQAChKApgzQApg0A2ACQA3ACAlA2QAmA2gDBIQgCBLgpAzQgoAxgzAAIgEAAg");
	this.shape_20.setTransform(-13.1,-6.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAkBEIgPgBIgagGIgbgKIgkgXIgJgGIgLgCIgSgEQgKgEgHgEQgKgIgDgHQgDgGAAgFQAAgEACgGQACgGAGgKQAKgMAPgLQgMARgEALQgIAQAHAIIADAFIAFACQAHAEAGAAIAeADIAEAAIAYAOIAiAPIAVAHIAMACIAYACIAYgCIAYgFIAWgJIAAgBIACgEIACgIIABgIIAAgHIgCgKIgKgcIANAQIAGAJIAEAKQADAGAAACIACAMIgCAMIgCAGQgBAEgCACIgBABIgCACIgMAHQgIAGgEABIgNAGIgOAEIgOADIgPACg");
	this.shape_21.setTransform(9.7,20.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C69C6D").s().p("AgXArQhZgLALhMIBYAuIB0gWQgEAbghAUQgdASglAAQgLAAgMgCg");
	this.shape_22.setTransform(11.8,26.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C69C6D").s().p("AhhgfIBKAaQBQAQApgeQgXAegkAOQgSAHgSAAQgzAAgxg/g");
	this.shape_23.setTransform(2.7,59.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgTAXQgBgPAGgOIAJgQIAFgGIAFgFIAGgDIAJgBIgCADIgPAiQgEAOgHAMIgIAMQgCgGgBgJg");
	this.shape_24.setTransform(50.3,13.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AARAlIgLgjIgDgGIgDgHIgDgHIgJgLIgNgKIAFgBQAGgBAHACIAHADQAEADAEADIAIAIIAFAKIAEALIABAIIAAAKIgBAIQgBAHgDAFIgCAFg");
	this.shape_25.setTransform(34.1,33.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgbAOQADgPALgMIAHgFIAGgFIAHgDIAHgBQAFgBAFABIAFABIgDADIgEADIgxAwQgCgGACgIg");
	this.shape_26.setTransform(-21.3,26.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AANA3IABgKIAAgZIgEgZIgFgNIgFgNIgNgUIgNgOIgFgFIAHACQAKADAIAFIAJAIIAKALIAJAOIAHAQIADAPIAAAQIgCAPIgFANQgBAFgDAFIgJANg");
	this.shape_27.setTransform(-48.6,6.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgVAcQgHgUAGgTIAFgLIAHgKIAJgHIAHgEIAIgBIALACIgEADIgFACIgFAEIgJAMIgCAHIgDAIIgCAHIgFAaIgDASQgFgGgDgLg");
	this.shape_28.setTransform(-51.7,0.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgEAbIgWgFIgUgIIghgRQgNgKgGgIIgHgIIBpAdIASABIAlABIAQgBIAjgCIgRAMIgNAHQgEADgOAEQgGACgOACQgEABgSAAIgUgDg");
	this.shape_29.setTransform(2.3,56.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AANCKIgMAAIgLgBIgYgEIACABIgagFQgJgBgQgFQgWgGgagMQgagNgSgNIgVgQIgkgmQgIgMgFgJIgHgJIgQgiIgHgZIgGgYIgCgZIgCgZIAEAZIAGAYIAHAXIAUAtIANAUIAQARIAQARIATAQIATAOQAVANAWAJQAVAJAYAGIAvAIIABAAIA1AEIAigEIAVgFIAUgHQAKgEALgFQAHgEAMgHIASgNIAQgOIAeghQAOgSALgSIACgEIgPAGIg2ARIgmAEIglADIgmgBIhIgIIgkgKQgTgGgQgGIhEgfQgggQgggVQgdgUgdgZQAYARAmAWQAkATAeANIAhANIAiAMIAjAKIARAEIA0AJIAkACIAjgBIAjgDIAjgHIAygQIBRgpIgMAjIgKAXQgDAIgIAOQgNAVgNASIgQATIgRARIgnAfIgWAMIgXAKQgLAEgNADIgYAGIglADg");
	this.shape_30.setTransform(7.1,39.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgSB/Qg8gEg9giQh6hFgLiXIAxAiQA8AnBCAZQDNBNClhcQgSA0guAxQhJBPhoAAQgZAAgZgFg");
	this.shape_31.setTransform(5.8,38.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").p("ABbgUQgggHgmAFQhKALghBAQADgcATgdQAkg9BHgKIATAIQAVAPAIAgg");
	this.shape_32.setTransform(-16.6,-22.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AhCAGQAkg7BHgLIAUAJQAUAOAIAhQgfgHgnAEQhKALghBBQAEgdASgeg");
	this.shape_33.setTransform(-16.4,-23.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAIAxIAAgzIgCgLIgBgEIgBgEIgBgEIgDgDQAAgDgEgCIgJgEIgXgGIAGgFIAHgDIALgDQAGgCAGABQAJABAGAFQAEABAEAFIAEADIADAEIADAJIADAJQABAEAAANIgDANQAAAFgEAIIgGALIgKAPIgGAFg");
	this.shape_34.setTransform(41.8,29);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("Ag9AzQgDgJgBgPIAAgQIAFgRIAEgJIAFgJIAHgJIAMgLIAPgIQALgEAHgCIATAAIAQACIAWAJIAIAEIgTADIgoAIIgMAGIgGAEIgEACIgMANIgJAKIgGAOIgGANIgKAdIgDgIg");
	this.shape_35.setTransform(-27.2,19.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgOAdIgKgHIgCgDIANgIIAFgCIAEgFIAAgBIADgCIAQgfIADADIAHAKQACAGAAAJIgBAIIgEALQgGAHgCACQgFADgGABIgJABIgIgCg");
	this.shape_36.setTransform(25.7,22.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(3).p("Ak9iCQACgYAAgHQAChPAWhEQAhhrBRhKQBPhIBsgbQAqgKAuAEQAkACA0AMQB9AcBHA7QBEA3APBTQAAABAiC/QAiDOABBPQAEAdgmBDQhLCHjPDCQglAeg7ANQh0AahlhUQhRgyhNhVQiairASi0QgCAIhFghQhIgwgBh+QAAguAHgVQANghAlgCQAugDAvA2QAZAcAkA/IAIAOQgEgIABgXg");
	this.shape_37.setTransform(-4.5,16.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#C69C6D").s().p("AhfIUQhRgyhNhVQiairASi0QgCAIhFghQhIgwgBh+QAAguAHgVQANghAlgCQAugDAvA2QAZAcAkA/IAIAOQgEgIABgXIACgfQAChPAWhEQAhhrBRhKQBPhIBsgbQAqgKAuAEQAkACA0AMQB9AcBHA7QBEA3APBTIAiDAQAiDOABBPQAEAdgmBDQhLCHjPDCQglAeg7ANQgbAGgbAAQhVAAhOhAg");
	this.shape_38.setTransform(-4.5,16.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgFBFIAGgMIAGgLIAGgMIAKgYIACgKIABgGIABgMIgBgSIgDgMIgJgXIgDgGIgBAAIgJACIgSAIIgnATIAPgRIAQgPIAKgHIAKgHIAJgFIAHgCIAIgBIAEAAIAEAEQAFAGAGAHIAIAOIAFAOQADAJABAHIACAIIAAAQIgBAPIgHAVIgPAbQgDAHgGAFIgKALIgTATIgaAPg");
	this.shape_39.setTransform(52.2,14.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#C7B299").s().p("Agxg2IAdgWQAdgVAQABIALAQQALATACAWQAHBFhOBDg");
	this.shape_40.setTransform(51.4,15.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(3).p("ADGACQgnAUg+gGQiAgLiBiFIArBbQAqBnAABBIApAiQAFgOAMgHQAVgPAhAiIAZgJQAcgDAQAdQAEgFAGgFQAMgIAIAFQgBghAHgmQAPhHApgXQABgBACgB");
	this.shape_41.setTransform(-8.2,71);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#C69C6D").s().p("AArCBIgZAJQgfgigXAOQgMAIgFAOIgpgiQAAhBgqhnIgqhbQCBCHCAALQA+AFAmgTQgoAVgPBHQgIAlABAiQgIgFgMAIIgKAJQgQgcgcADg");
	this.shape_42.setTransform(-6.3,73.5);

	this.addChild(this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-59.4,-88.9,117.3,180.5);


(lib.kb = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOBnIAEgaIAKh0IADglIAEgkIACAKQADAMACAOQACAQABAVQAAASgBAXIgLA9IgKAfIgGAKIgFAJg");
	this.shape.setTransform(-15,35.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AARBeIgQgSIgHgPIgHgRQgEgMgBgHIgEgTIgCgSIABgmIACgQIAFgXIADgJIATCaIAFAOIAFAMIAJARg");
	this.shape_1.setTransform(8.1,37.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgTAfIgPgFIgQgHIgNgKQgLgJgGgGIgEgIIAIAEQAHAGANAEIANAFIAPAFIARACIAIABIAGgBIAJgBIAIgDIAPgFIAOgGIASgMIATgQIgMAWIgQAPIgPAMIgSAJIgUAFIgIAAg");
	this.shape_2.setTransform(-4.9,17.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(3).p("ABVjuIgLgYABVjuQgNgMgOgIQgegQgMAUQgHgNgMgHQgcgMgkAkIg6C2QgyC8AoAlIAIAFQAaAMgDARQgCAKgLAQQgKAbCFAFIARALQAUANARADQA4ALAEhTQAMgIAKgSQATgkgLgtQgJhEgNhKQgZiYgSgpg");
	this.shape_3.setTransform(-1.4,-58.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA8EUQgRgDgUgNIgRgLQiFgFAKgbQALgQACgKQADgRgagMIgIgFQgoglAyi8IA6i2QAkgkAcAMQAMAHAHANQAMgUAeAQQAOAIANAMQASApAZCYQANBKAJBEQALAtgTAkQgKASgMAIQgEBKgsAAIgMgCg");
	this.shape_4.setTransform(-1.4,-58.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgEBmQgEgPgDgSQgFgaAAgIIgFgjIgBglQAAgQADgTQAAgIAFgZIAIgdIAIgXIAKgRQADgFAEgEIADgEIgHAPIgMAqIgDAcIgBAfIgBARIAAARIACAkIABAhIADAjIAFAgIAEAdIAFAYIAEAjg");
	this.shape_5.setTransform(-62.9,61.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgfFuQAJgXAFgPQAHgWAIgcIARhdIAEgiIAGhJQACgfgBgsQgBgkgCgmIgHhJIgKhEIgIg8QgMg/gHgbIgJgjIANAhQARA1AHAkQAGAWAIAnQAHAfAFAlQAGAmADAkQADApABAhQABAngDAmQAAATgDATIgEAkQgCASgEARIgPBBIgJAcIgiBWIgSAfg");
	this.shape_6.setTransform(-54.3,-13.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(3).p("AFhvEQgbAHgjAPQhvAwhiBhQk5E5hJK2IANARQASAVAZARQBRA1CBgHIg4BZQhIBjhRAzIgWAVQgYAbgQAdQg0BbA2BLQgHAAgKABQgTACgLAIQglAbA2BKIAxAoQA8AlA0gRQAUgEAdgTQA6gnAvhJQCVjpgVnwQgUj/AZkGQAunqDEg6IAdgG");
	this.shape_7.setTransform(-54.9,-5.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AkXOuIgygoQg1hKAkgbQALgIATgCIARgBQg1hLAzhbQAQgdAZgbIAVgVQBSgzBIhjIA3hZQiAAHhSg1QgZgRgSgVIgMgRQBIq2E5k5QBjhhBvgwQAjgPAagHQjDA6gvHqQgYEGATD/QAVHwiUDpQgvBJg7AnQgdATgUAEQgQAGgQAAQgmAAgpgag");
	this.shape_8.setTransform(-55.8,-4.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(3).p("AlIOJIAJAWQANAZAYARQBNA2CXgzQA2g0AwhxQBmjigOkuQgUiZAJjSQARmnCPkjQANgVALgdQAXg6gEgqQgGgNgNgMQgZgZggADQhEAGguArQhUBOg2DPIgNBeQgRB2gKB5QghGAAnEHIgLBeQgPBwgbBdQhUEqidgLg");
	this.shape_9.setTransform(-41.9,-2.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AkZPJQgYgRgOgZIgJgWQCeALBUkqQAahdAQhwIAKheQgmkHAhmAQAKh5AQh2IANheQA2jPBVhOQAtgrBEgGQAggDAZAZQANAMAGANQAFAqgXA6QgMAdgMAVQiPEjgSGnQgJDSAUCZQAOEuhlDiQgxBxg1A0QhKAZg4AAQg7AAgngcg");
	this.shape_10.setTransform(-41.9,-2.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(3).p("ABHCLQg7gLg9gdQh8g6gNhXQACgYAJgYQASgvAnADIBbA8QBoA8BDgEIAKgBQBDgKhEBUQgiArgwAtg");
	this.shape_11.setTransform(-70.3,26.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgxBjQh8g6gNhXQACgYAJgYQASgvAnADIBbA8QBoA8BDgEIAKgBQBDgKhEBUQgiArgwAtQg7gLg9gdg");
	this.shape_12.setTransform(-70.3,26.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgIBjIAEggIAEgiQABgYAAgKQACgXAAgMIAAgRIgBgRIgCggIgFgpIgJgdIgIgPIADADIAIAKIANAcIAFAMQAEAMAEARQAEAZABAIQACATAAARIgBAkIgDAjIgGAjQgDAQgFAQIgaBWg");
	this.shape_13.setTransform(63,66.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAcFvIgRglIgJgXIgIgaIgYhdIgGgjIgEgkIgDgmQgCgmAAgnQABghADgpQADgiAGgoQAFglAHgfIAOg9QAIgnAQgyIANghIgJAiQgHAcgMA/QgEAfgEAdIgKBEIgHBJIgDBKQgBAsACAfIAGBJIAEAiIARBdIAPAyIAOAlIAOAhg");
	this.shape_14.setTransform(54.3,-9.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(3).p("AkVu6QAdAIAfAOQBvAvBiBiQE5E4BJK2IgNASQgSAUgZARQhRA1iBgHIA4BZQBIBjBSAzIAVAVQAZAbAQAdQAzBcg2BKIARABQATACAMAJQAkAag2BLIgxAnQg8Alg0gRQgUgEgdgTQg6gmgvhJQiVjqAVnvQAUj/gZkHQgunojCg7QgPgEgQgCIAZAFQADABADAAg");
	this.shape_15.setTransform(47.6,-1.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("ACoPCQgUgFgdgTQg7gmgvhJQiUjpAVnwQATj/gYkGQgunojDg7QAdAIAfANQBvAwBjBhQE5E5BIK2IgMARQgSAVgZAQQhSA2iAgHIA3BZQBIBjBSAzIAWAVQAYAbAQAcQA0Bcg2BLIARAAQATADALAIQAlAag2BLIgyAoQgpAZglAAQgRAAgQgFg");
	this.shape_16.setTransform(55.9,-0.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(3).p("AFJOIIgJAWQgNAagYARQhNA2iXgzQg1g1gxhwQhmjiAOkuQAUiZgJjSQgRmniPkjQgNgVgLgdQgXg6AEgqQAHgNAMgMQAZgZAgADQBEAGAuArQBUBOA1DPIAOBeQARB2AKB5QAhGAgnEHIALBeQAQBwAaBdQBUEpCdgLg");
	this.shape_17.setTransform(41.9,2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AA3PMQg2g1gxhwQhljiAOkuQAUiZgJjSQgSmniPkjQgMgVgMgdQgXg6AFgqQAGgNANgMQAZgZAgADQBEAGAuArQBUBOA1DPIAOBeQAQB2ALB5QAhGAgnEHIAKBeQAQBwAaBdQBUEpCegLIgJAWQgOAagYARQgnAcg7AAQg4AAhJgZg");
	this.shape_18.setTransform(41.9,2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(3).p("AhGCLIAlgJQAsgNAngSQB8g5ANhXQgBgZgKgXQgSgwgnADIhbA8QhoA8hDgEIgKgBQhDgJBEBUQAiArAwAsg");
	this.shape_19.setTransform(70.3,30.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AiYA0QhEhUBDAJIAKABQBDAEBog8IBbg8QAngDASAwQAKAXABAZQgNBXh8A5QgnASgsANIglAJQgwgsgigrg");
	this.shape_20.setTransform(70.3,30.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(3).p("AlVhwIAwAqQA/AvBKAbQDsBdEGh8IAKBmQhHAnh9ALQj2AYkFiIg");
	this.shape_21.setTransform(-1.7,-10.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#8C6239").s().p("AlfAFIAKh9IAwAqQA/AvBKAdQDsBbEGh8IAKBmQhHAnh9ALQgkAEglAAQjTAAjfh0g");
	this.shape_22.setTransform(-1.7,-9.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(3).p("AGiAAQAAC+hjCHQhiCGiMAAQhHAAhUggQhYghhLg5Qi0iJAAixQAAixC0ieQBMhDBXgnQBVgoBGAAQCMAABiCHQBjCGAAC9g");
	this.shape_23.setTransform(-1.6,-46);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00A99D").s().p("AhKGrQhYghhLg5Qi0iJAAixQAAixC0ieQBMhDBXgnQBVgoBGAAQCMAABiCHQBjCGAAC9QAAC+hjCHQhiCGiMAAQhHAAhUggg");
	this.shape_24.setTransform(-1.6,-46);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(3).p("AlREgIAfAEQAnADAkgIQB2gXA3huIAUArQAcAxAkAfQB3BjCph4IAloiQguA4hvAcQjdA4lFiMg");
	this.shape_25.setTransform(0.9,23);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00A99D").s().p("AAbEGQgkgfgcgxIgUgrQg3Buh1AXQglAIgngDIgfgEIgPpCQFGCMDcg4QBvgcAug4IglIiQhcBBhOAAQhAAAg2gsg");
	this.shape_26.setTransform(0.8,24.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(3).p("AAYBRIgvAAQgiAAgXgYQgYgYAAghQAAggAYgYQAXgXAiAAIAvAAQAiAAAYAXQAXAYAAAgQAAAhgXAYQgYAYgiAAg");
	this.shape_27.setTransform(-24.6,51);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#8C6239").s().p("AgXBQQgiABgXgYQgYgYAAghQAAggAYgYQAXgYAiAAIAvAAQAiAAAYAYQAXAYAAAgQAAAhgXAYQgYAYgigBg");
	this.shape_28.setTransform(-24.6,51);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(3).p("AAhBQIhBAAQgiAAgXgYQgYgXAAghQAAggAYgYQAXgYAiAAIBBAAQAiAAAXAYQAYAYAAAgQAAAhgYAXQgXAYgiAAg");
	this.shape_29.setTransform(16.4,54);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#8C6239").s().p("AggBQQgiAAgXgXQgYgYAAghQAAggAYgXQAXgZAiAAIBBAAQAiAAAXAZQAYAXAAAgQAAAhgYAYQgXAXgiAAg");
	this.shape_30.setTransform(16.4,54);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(3).p("AhhiNIAUEGIArAWQA0AQAyghIAekQg");
	this.shape_31.setTransform(-27.6,68.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AghCOIgsgWIgUkGIDDgFIgeEQQgiAXgiAAQgQAAgRgGg");
	this.shape_32.setTransform(-27.6,68.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(3).p("AhHiJIgFDvIALAKQAOALAQAHQAzAVA9giIgDj+g");
	this.shape_33.setTransform(15.4,71.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgjCCQgQgHgOgLIgLgKIAFjvICRAAIADD+QglAVgjAAQgTAAgVgIg");
	this.shape_34.setTransform(15.4,71.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(3).p("AhUh1IgPBQQgRBPgLAIIADAKQAFALAQAKQAzAdCHgFQAcgEAMgaQAag0hJhpQgIABgZgEQgugHhRgZg");
	this.shape_35.setTransform(-27.4,89.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#603813").s().p("AhoBXQgQgKgFgLIgDgKQALgIARhPIAPhQQBRAZAuAHQAZAEAIgBQBJBpgaA0QgMAagcAEIgjABQhrAAgsgZg");
	this.shape_36.setTransform(-27.3,89.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(3).p("AgYhzIgTAWQgWAagOAbQgvBUAtA4IATAIQAYAHAXABQBJADArhAQAEghgBgjQgBhLgWgWg");
	this.shape_37.setTransform(13.4,90.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#603813").s().p("AgPB0QgXgBgYgIIgTgHQgtg4AvhUQAOgbAWgbIATgVIBpAFQAWAWABBKQABAkgEAhQgpA9hFAAIgGAAg");
	this.shape_38.setTransform(13.4,90.7);

	this.addChild(this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-94.7,-103.7,188.2,215.3);


(lib.janebtn = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAABcIgBgUIgEgXIgDhgIAIhVIAIBUIABAZIAACcQgFgQgEgZg");
	this.shape.setTransform(71.9,130.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAVDZIABhAIgDgwIgEg1QgCgbgEgZIgtkfIAJAYQAKAeAIAiIAJArIALAvIAXCgQACASABAjIAAAxQgBARgDAcQgBAOgEAXIgDAQIgLAlg");
	this.shape_1.setTransform(78.5,146);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ADHG3IgMhNIgRhaQgCgTgHgeIgMgzIgahqQgYhPgJgbIg6idIhEiKIgyhNQgKgOglgvQgeghgLgJIgJgIIgggZIAMAHIAOAJIASANQAPANAdAdIAyA6QAMAOAPAWIAaAoIBJCLIAfBOIALAaIASA2QAIAWAJAfIAPA2IAOA2IALA2QARBSACASIANBbQADARACAYIADAlIAJBvg");
	this.shape_2.setTransform(99.6,169.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AjjHiIAAgjIAGg2QAIguAGgYIALgnQAFgSAIgYQAMgmAUgyQAVg0ASgoIAuhaIAxhbIAwhWIAyhPQAbgqATgbQAkg1AlgyIAcgmIgZApIhCBpIiJDvIgxBaIgtBaIgpBaQgWA0gMAjIgOAoIgNAmQgLAngGAdIgKA2QgCAOgBAUIgBAMg");
	this.shape_3.setTransform(40.2,162.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2).p("AieqDQhtBYh4CRQjuEigxEcIg0BhQgyBjAMAOIBQA9QBUA7AagKQgUgVgLgSQgXgiAtASIAgAnQArAuA5AkQC0B0DygcIAsAAQA5gDA1gIQCtgZBQhGIAcgHQAWgBgeAfIAbgGQAkgKApgQQCCg0CFhkQhCjAh6jbQjzm7kUiTg");
	this.shape_4.setTransform(77.8,172.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C1272D").s().p("AnCImQg5gkgrguIgggnQgtgSAXAiQALASAUAVQgaAKhUg7IhQg9QgMgOAyhjIA0hhQAxkcDukiQB4iRBthYIDYANQEUCTDzG7QB6DbBCDAQiFBkiCA0QgpAQgkAKIgbAGQAegfgWABIgcAHQhQBGitAZQg1AIg5ADIgsAAQgvAGgtAAQi5AAiRheg");
	this.shape_5.setTransform(77.7,172.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(2).p("AA6geQgVgNgYgIQgvgOgTAhIgDAGQAAAGASgBIANAIQAMALgHAJQgFAJgOAUQgGAQAZADQARgXARgWQAlgrAHADg");
	this.shape_6.setTransform(55.5,75.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D4145A").s().p("AgnAkIATgdQAGgJgLgKIgOgJQgRACgBgGIAEgGQATghAvAOQAYAHAUAOQgGgEgmArIghAuQgagEAHgQg");
	this.shape_7.setTransform(55.5,75.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(2).p("AgThCIAcA7QAgA7AMAJQAUAQg5gaQgzgYgNgUQgFgBgCgDQgGgGAJgNQgBgKADgLQAHgWAYgHg");
	this.shape_8.setTransform(92.4,86.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(2).p("ACBCtQgEAVgZgBQgzgChrhxQgRgSgOgbQgcgzALgqQAIgZgKgOIgRAcQgFgJgCgLQgDgWAUgKQAAgGABgGQADgMAKACQgCgGABgFQACgJAQAIQAaAMgdgSQgMgFgJgHQgRgNANgEIAnAWQAmAbACAYIgKAnQgMAsgPAUIA4AyQA+A1AmAFIAdAWQAaAcgMAfg");
	this.shape_9.setTransform(89.2,84);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFCCFF").s().p("ABkDBQgzgChrhxQgRgSgOgbQgcgzALgqQAIgagKgOIgRAcQgFgJgCgLQgDgVAUgLIABgMQADgLAKACQgCgHABgEQACgKAQAIQAaANgdgSQgMgGgJgGQgRgNANgEIAnAVQAmAbACAZIgKAnQgMArgPAVIA4AxQA+A1AmAGIAdAVQAaAcgMAfQgDAVgYAAIgCAAg");
	this.shape_10.setTransform(89.2,84.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(2).p("ACKjXIgvBpIgmAuQguA8gkBGIgbAgQgeAfgMgCIhIADQghAegNAFIAEAJQAMAEArgbIA3ADIAGAMQADAMgOAAIgWAKQgUANAIAKIADAHQAHADAYgSIAcgHQAdgMAHgZQAOgSAQgTQAfgmAQgEQAegbAdghQA7hAgBgbQALgdANgcQAZg4AHACQAaAJgegOQgNgGgJAIQgDgDgBgFQgCgKAGgKQgdAFgOgHg");
	this.shape_11.setTransform(38.3,106.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFCCFF").s().p("AiLDZIgDgHQgIgKAUgNIAWgKQAOAAgDgMIgGgMIg3gDQgrAbgMgEIgEgJQANgFAhgeIBIgDQAMACAegfIAbggQAkhGAug8IAmguIAvhpQAOAHAdgFQgGAKACAKQABAFADADQAJgIANAGQAeAOgagJQgHgCgZA4IgYA5QABAbg7BAQgdAhgeAbQgQAEgfAmQgQATgOASQgHAZgdAMIgcAHQgVAPgIAAIgCAAg");
	this.shape_12.setTransform(38.4,106.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgMARQgEgBgDgDIgCgDIAKABQAHAAAGgIIANgNIAHgHIgCAJIgEAIIgDAGIgEAEIgFAFIgEACIgHABg");
	this.shape_13.setTransform(70.4,74.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(2).p("AAqlhQgygEgzAXQgzAXgcApQgBABgNAZQgIAPgLAHQgPALgbAEQgNACghADQgOAAgPAgQgQAlADAxQADAxAUAmQAzBiBfgrQgcgJgTgXQgogrAlhDQAygIA0gYQBngyAPhWIAWBQQAkBYBCArIAGAJQAHANABASQAGA3grBYIgMArQgGA0AYAsIACASQgDASgTAHQBNgaAug8QAYggANgmQAHgUgDgdQgEgggBgSQgBgYAKguQAKgvgBgZQgBgtgMgrQgThBgsguQgtgvhAgUQgjgLgogDg");
	this.shape_14.setTransform(60.9,51.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D9E021").s().p("ACTE6IgCgRQgYgtAGg0IAMgrQArhXgGg6QgBgQgHgNIgGgJQhCgrgkhYIgWhPQgPBWhnAxQg0AZgyAHQglBDAoAsQATAWAcAJQhfArgzhiQgUglgDgyQgDgxAQglQAPgfAOgBIAugEQAbgFAPgKQALgHAIgPIAOgaQAcgpAzgXQAzgYAyAFQAoADAjALQBAATAtAvQAsAuATBCQAMAqABAuQABAYgKAuQgKAvABAZQABARAEAhQADAcgHAVQgNAmgYAfQguA9hNAZQATgHADgSg");
	this.shape_15.setTransform(60.9,50.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgcALIA2gWIADgBIgBADIgGAGIgIAFIgLAGQgJAFgLAAg");
	this.shape_16.setTransform(64.1,62.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").p("AgpALQAAgDADgCQAGgEAMACIAGgEQAIgCAKADIAKgBQAMgBAIgNIgDALQgPAqgQACQgIABgJgBQgQgEACgOg");
	this.shape_17.setTransform(63.8,61.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").p("AgtAJIAegLQAggMAYAKIAEAIQgYABgWACQgvADADgBg");
	this.shape_18.setTransform(66,37.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").p("AgfAbQgCgMAFgNQAKgXAjgDQgLAHgLAKQgYASgCAQg");
	this.shape_19.setTransform(50.1,44.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgMABIADgEQAEgDAEAAQACgBADACQADAAACADIAEADIgNAAIAAABQgEAAgDACIgEADQgBgCAAgEg");
	this.shape_20.setTransform(60.8,59);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAAAKQgEgCgCgFQgEgKAHgDQADgCABADQAEADACAFQACACgBAFQAAAEgDACIgCAAQgDAAAAgCg");
	this.shape_21.setTransform(71.5,47);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").p("AAIgCQAEAGAAAHQgBAHgDACQgEABgEgFQgEgEgEgJQgDgGAAgHQABgHADgCQAEgBADAFQAFAEADAJg");
	this.shape_22.setTransform(72.3,48.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAAAQQgEgEgEgJQgDgGAAgHQABgHADgCQAEgBADAFQAFAEADAJQAEAGAAAHQgBAHgDACIgCAAQgDAAgDgEg");
	this.shape_23.setTransform(72.3,48.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").p("AAhAAQAAAOgKALQgJAKgOAAQgNAAgJgKQgKgLAAgOQAAgNAKgKQAJgLANAAQAOAAAJALQAKAKAAANg");
	this.shape_24.setTransform(72.5,47.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgWAZQgKgLAAgOQAAgNAKgKQAJgLANAAQAOAAAJALQAKAKAAANQAAAOgKALQgJAKgOAAQgNAAgJgKg");
	this.shape_25.setTransform(72.5,47.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgGACQgEgJAHgEQADgBACADQADACACAFQACADgBAFQAAAEgDABIgDABQgEAAgEgKg");
	this.shape_26.setTransform(52.2,54.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").p("AAIgCQAEAGAAAHQAAAHgEABQgEACgEgFQgEgFgDgIQgEgHAAgGQABgHADgCQAEgBADAFQAFAEADAJg");
	this.shape_27.setTransform(52.9,55.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAAAQQgEgFgDgIQgEgHAAgGQABgHADgCQAEgBADAFQAFAEADAJQAEAGAAAHQAAAHgEABIgCABQgDAAgDgEg");
	this.shape_28.setTransform(52.9,55.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").p("AATgIQAGAKgCALQgCALgJAEQgIAEgIgGQgJgGgGgMQgFgKACgLQACgKAIgEQAJgEAHAGQAKAFAFAMg");
	this.shape_29.setTransform(52.4,55);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgEAaQgJgGgGgMQgFgKACgLQACgKAIgEQAJgEAHAGQAKAFAFAMQAGAKgCALQgCALgJAEQgDABgDAAQgGAAgEgDg");
	this.shape_30.setTransform(52.4,55);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgZBAIgJgBIgSgDIAJABIASAAIAIgCIAJgCIAIgCIAFgEIAHgFIANgLIAGgHIAFgGIAIgPQAEgHACgHIAAABIAAgEIgBgDIgCgIIgEgGIgFgGIgMgLIgMgIIgVAMIgHAFIgIAFIgNANIgKAPIgGAQIgDASIAAAJQAAAJACAKQgHgSACgUIABgJIAGgRIAEgJIAMgQIAOgNIARgLIAPgJIACgBIACABIAQAKIANAMIAGAHIAHANIABAFIgBAFIgBAFIAAAAIABABIgHAPIgIAPIgGAIIgGAGIgPAMIgQAIIgQADIgHABIgCAAg");
	this.shape_31.setTransform(71.7,48.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgzA6QgHgUAFgZQAJgvA7gZIAVAOQAVASgBATQgGAUgQATQgaAdgjAAQgLAAgNgCg");
	this.shape_32.setTransform(71.6,48.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgDAoIgEgCIgJgEIgIgHIgHgHIgGgIIgIgPIgGgTIAAgDIAMgJIALgFIAJgCIAJAAIAIACIAGADIAOAJIARARQALANAGALQgJgNgMgIIgLgKIgGgFIgNgHIgFgCIgHgBIgHAAIgHACIgJAEIgDADIgDADIAEANIAIAOQAEAIAGAGIAHAFIAHAFIAEABIAAABIACAAIAIACQAIABAKgBIAJgBQAFgCADgCQADgDACgEIACgJQABAFgCAFQgBAEgEAEQgDAEgFABQgEADgFAAIgTACg");
	this.shape_33.setTransform(52.1,55.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgCAlQgXgGgOgdIgKgZQAggdAjAfQATAQAMATQACAWgbACg");
	this.shape_34.setTransform(52.3,55.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(2).p("AiYh6IgYBFQgRBIAnAcIASATQASAagGAfIgDAHQgCAKADAKQAKAfA9AXIAtAQQAvAIASgiQAPgHASgNQAkgbAPgfQARgWAMgeQAag9gXgoIiOi0g");
	this.shape_35.setTransform(63.7,46.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFCCFF").s().p("AgJDaIgugPQg9gXgJggQgEgKADgJIADgIQAFgfgRgZIgSgTQgogcARhJIAZhFIC0hfICOC1QAXAogZA8QgNAfgRAWQgPAfgkAaQgSANgPAHQgOAcgiAAQgHAAgJgCg");
	this.shape_36.setTransform(63.7,46.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(2).p("Ag0gQQgDAXgFABIgIArQgHAvAEAOIAugCQA0gBAnAGIAHjdg");
	this.shape_37.setTransform(71.6,70.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFCCFF").s().p("AgZBqIguACQgEgOAHgvIAIgrQAFgBAEgXIB8haIgGDdQgogGg0ABg");
	this.shape_38.setTransform(71.5,70.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(2).p("AhcjGQgZAIgeAWQg7ArgWBHIBCAhIAOgFIgDBVQAABeAUAiIAEACQAFAEABAHIAHAAQAIABADAEIAKACQALACABADQABACAKgFQALgBAFAQIAJgDQAJgBAFAJIALgIQANgFAHALQACgHAGgEQALgJAIALIAKgFQAMgEAFAGQAEgGAEgFQAKgLADAEQABgEADgDQAEgHAFACIAijXQgGgFgCgGQgGgMAOgHQgCgLADgKQAFgTAUAIQgGgIACgIQAEgRAmgCQAEgBACgFQADgJgOgVIABgKQAHgJAbAIIANgEQAHgLgageQgQgKgVgEQgrgHgfAeg");
	this.shape_39.setTransform(74.8,90.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#9E005D").s().p("AguDgIgJADQgFgQgLABQgKAFgBgCQgBgDgLgCIgKgCQgDgEgIgBIgHAAQgBgHgFgEIgEgCQgUgiAAheIADhVIgOAFIhCghQAWhHA7grQAegWAZgIIC/gMQAfgeArAHQAVAEAQAKQAaAegHALIgNAEQgbgIgHAJIgBAKQAOAVgDAJQgCAFgEABQgmACgEARQgCAIAGAIQgUgIgFATQgDAKACALQgOAHAGAMQACAGAGAFIgiDXQgFgCgEAHIgEAHQgDgEgKALIgIALQgFgGgMAEIgKAFQgIgLgLAJQgGAEgCAHQgHgLgNAFIgLAIQgFgJgJABg");
	this.shape_40.setTransform(74.9,90.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(2).p("Ag4klIAOAQQAQAWAIAcQAXBbg/B2IggAyQgjBAgSBAQg4DNCPB6QgQg+ANhHQAZiOCMgrIA6mHIjXkYQgfAOgdAVQg7ArAHAlQABAGADAGQAVApArAYQAWANARAEg");
	this.shape_41.setTransform(53,87.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D9E021").s().p("AiOCoQARhAAkhAIAggzQA+h2gWhaQgIgcgQgWIgOgRQgSgDgWgNQgrgZgUgoQgEgHAAgFQgHglA6grQAegVAegOIDXEXIg6GIQiMArgZCOQgMBGAQA/QiQh6A5jNg");
	this.shape_42.setTransform(53,87.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(2).p("AgkBIIgnhiIA1BQIANgyIAaBKIAghAIgDBEIAyhGIgYBZg");
	this.shape_43.setTransform(66.9,11.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#C1272D").s().p("AguAjIgnhiIA1BQIANgvIAaBHIAgg+IgDBCIAyhDIgYBWg");
	this.shape_44.setTransform(67.9,15.3);

	this.addChild(this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.1,155.5,238.1);


(lib.Path_4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C59D72","#C59D72","#AB8059"],[0,0.518,0.914],-100.5,0,100.5,0).s().p("At3DWQgwAAgigiQgjgjABgvIAAjDQgBgwAjgiQAigiAwAAIbvAAQAwAAAiAiQAjAigBAwIAADDQABAvgjAjQgiAigwAAg");
	this.shape.setTransform(108.5,29.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(8,8,201,42.9);


(lib.Path_4_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#C59D72","#C59D72","#AB8059"],[0,0.518,0.914],-100.5,0,100.5,0).s().p("At3DWQgwAAgigiQgjgjABgvIAAjDQgBgwAjgiQAigiAwAAIbvAAQAwAAAiAiQAjAigBAwIAADDQABAvgjAjQgiAigwAAg");
	this.shape_1.setTransform(108.5,29.5);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(8,8,201,42.9);


(lib.Path_6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C59D72","#C59D72","#AB8059"],[0,0.518,0.914],-100.5,0,100.5,0).s().p("At0KNQgxABgjgkQgjgjAAgxIAAwrQAAgxAjgjQAjgjAxAAIbpAAQAxAAAjAjQAkAjgBAxIAAQrQABAxgkAjQgjAkgxgBg");
	this.shape.setTransform(108.5,73.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(8,8,201,130.8);


(lib.hel = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3).p("ACgIdIAbgJQAhgKAcgCQBZgFAKBSIAagCQAggFAfgNQBlgpA4hnIAngSQApgbAOgxQAJgJAHgRQANgigOglQg5Alg8gQQh4gigOkNQgDh4gqiBQhSkDi7gxQieALgqAAQicAAiABcQiMBlgFCSQgECagFA2QgNBygnBVQg4B4hhAOIACANQAEAPAJANQAbArA/AKIAIAmQAOAoAeAMIAIAQQANASAWAKQADABAAABQATAXAcANQAzAXA3gfIArgXQAugRATAhIAnAIQAyAKAxAEQCeAPBqgpg");
	this.shape.setTransform(0,-101.7,1.276,1.276);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBB03B").s().p("AD3IJQgcABghAKIgbAKQhqAoiegOQgxgFgygJIgngJQgTghguARIgrAYQg3AfgzgYQgcgMgTgYIgDgCQgWgJgNgTIgIgQQgegMgOgoIgIgmQg/gJgbgrQgJgOgEgPIgCgMQBhgPA4h4QAnhUANhzQAFg1AEibQAFiSCMhkQCAhcCcAAQAqAACegMQC7AxBSEDQAqCCADB3QAOEOB4AhQA8ARA5gmQAOAmgNAiQgHAQgJAKQgOAxgpAbIgnARQg4BnhlApQgfANggAFIgaADQgKhShZAFg");
	this.shape_1.setTransform(0.2,-101.7,1.276,1.276);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3).p("Am5hQIAzAUQBFAXBaAOQEgAsGKg5IAEAJQAGASAIApQiiAdjFANQmHAZithQQgLgJgEgQQgIgjAkgng");
	this.shape_2.setTransform(-3.5,15.9,1.276,1.276);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AnFAUQgLgKgEgQQgIgjAkgnIAzAUQBFAXBaAPQEgArGKg4IAEAJQAGARAIAqQiiAdjFAMQhfAHhQAAQkCAAiDg9g");
	this.shape_3.setTransform(-3.6,15.8,1.276,1.276);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(3).p("AqIDqIAHBAQARBDA0AKIAdAPQAfAVANAaIAgAXQAkAWASgDIAigDQAkABAQAcIAqgWQAugPAYAlIAvgOQA0gHAdAiIAPgQQATgRATgHQA9gXAuBcQAFAMBygCQB3gCAXgdIANgWQASgaAWgTQBIg9BbAiQAphAAdhQQA5iig5hVQgiiQgqiSQhVkigqADQi6AkjQARQmdAjhqhdIgqEiQg1FAg5Clg");
	this.shape_4.setTransform(1.9,85.8,1.276,1.276);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF00FF").s().p("ABJIbQguhbg9AWQgTAHgTASIgPAQQgdgjg0AIIgvAOQgYgmguAPIgqAXQgQgcgkgCIgiAEQgSADgkgWIgggXQgNgagfgVIgdgQQg0gJgRhDIgHhBQA5ikA1lBIAqkiQBqBdGdgjQDQgRC6gkQAqgDBVEjQAqCRAiCQQA5BVg5CiQgdBRgpBAQhbgjhIA9QgWATgSAaIgNAXQgXAdh3ABIgeABQhUAAgFgLg");
	this.shape_5.setTransform(1.9,86.7,1.276,1.276);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(3).p("AoXi+QgRgGgwAUQg5AYgEAoQgDAqAnATQAeAPApgDIgIAVQgIAXAHATQATA8CTgXIAVAUQAbAWAdANQBgApBYhGIALAXQAPAaAXAPQBKAwB4hOIApAZQAyAbAqAMQCGAkACiJIAlAIQAtAHAlAAQB1ACgKhFIARgHQATgKALgLQAjgjg9gsIjghPQhkAkimAOQlMAalQhwg");
	this.shape_6.setTransform(2.5,153.4,1.276,1.276);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C69C6D").s().p("ADwC5QgqgMgygbIgpgZQh4BOhKgwQgXgPgPgaIgLgXQhYBGhggpQgdgNgbgWIgVgUQiTAXgTg8QgHgTAIgXIAIgVQgpADgegPQgngTADgqQAEgoA5gYQAwgUARAGQFQBwFMgaQCmgOBkgkIDgBPQA9AsgjAjQgLALgTAKIgRAHQAKBFh1gCQglAAgtgHIglgIQgCBshTAAQgWAAgdgHg");
	this.shape_7.setTransform(2.5,153.4,1.276,1.276);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(3).p("Akik+QgfATghAnQhCBPgHBqIgFA8QgIBCgRAlIgKA2QgEA9AhAqIBeAXQB0AaBvANQFfApCkhkIARgKQAUgOANgSQAqg5gqhMQgVhVgbhYQg0ivgYgDg");
	this.shape_8.setTransform(-2.3,-12.5,1.276,1.276);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF00FF").s().p("Ah1EzQhvgNh0gaIhegXQghgqAEg9IAKg2QARglAIhCIAFg8QAHhqBChPQAhgnAfgTIJmAoQAYADA0CvQAbBYAVBVQAqBMgqA5QgNASgUAOIgRAKQh0BHjTAAQhVAAhngMg");
	this.shape_9.setTransform(-2.3,-12.5,1.276,1.276);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(3).p("AjunzIBAA8QBHBNAaBUIBDBkQBcB9CNB6IAJAQQAIAWgBAbQgFBVhlBoQgoAAgnAGQhMAKAFAbQgNg1gTg5QgkhzgbgZQAAgLgEgMQgHgXgOACQAagYAQgfQAfg9gyglQgQhbgYhiQgvjAglglg");
	this.shape_10.setTransform(74.7,36.1,1.276,1.276);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF00FF").s().p("AgxFDQgkhzgbgZQAAgLgEgMQgHgXgOACQAagYAQgfQAfg/gygjQgQhbgYhiQgvjBglgkIBAA8QBHBNAaBUIBDBkQBcB7CNB8IAJAQQAIAWgBAbQgFBVhlBoQgoAAgnAGQhMAKAFAbQgNg1gTg5g");
	this.shape_11.setTransform(74.7,27.6,1.276,1.276);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(3).p("AhEBGIAMADQAPACANgEQAmgKAAg9IAIAMQAKANAKAFQAfASAUg6Igng8IiIAgIgEAoQAAAuAWAWg");
	this.shape_12.setTransform(83.8,82.8,1.276,1.276);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A67C52").s().p("Ag3BIIgNgDQgVgWAAguIAEgoICIggIAnA8QgUA6gggSQgKgFgKgNIgIgLQABA8gmAKQgIACgJAAIgLAAg");
	this.shape_13.setTransform(83.7,82.9,1.276,1.276);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(3).p("ADvnzQgeAWgjAmQhGBOgbBUQgTAlgvA+QhdB9iMB7IgJAQQgJAWACAaQAEBVBlBpIBPAFQBMALgFAaQANg0ATg5QAlhzAagZQABgMADgLQAHgXAOABQgZgXgQggQgfg8AyglQAQhbAYhiQAvjEAlgig");
	this.shape_14.setTransform(-74.7,31,1.276,1.276);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF00FF").s().p("Ag2GMIhPgFQhlhpgEhVQgCgaAJgWIAJgQQCMh9Bdh7QAvg+ATglQAbhUBGhOQAjgmAegWQglAigvDEQgYBigQBbQgyAjAfA+QAQAgAZAXQgOgBgHAXQgDALgBAMQgaAZglBzQgTA5gNA0QAFgahMgLg");
	this.shape_15.setTransform(-74.7,22.4,1.276,1.276);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(3).p("ABFBGQgUAHgUgGQgmgKAAg9QgMAVgPAJQggASgUg6IAng8ICHAgIAFAoQAAAugWAWg");
	this.shape_16.setTransform(-83.8,77.7,1.276,1.276);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#A67C52").s().p("AAdBGQgngKAAg8QgLAUgQAJQggASgUg6IAng8ICHAgIAFAoQAAAugWAWQgLADgLAAQgJAAgIgCg");
	this.shape_17.setTransform(-83.7,77.9,1.276,1.276);

	this.addChild(this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-106.8,-179.6,214.4,359.2);


(lib.head = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAYQgKgKAAgOQAAgNAKgLQAKgJANgBQAOABAKAJQALALAAANQAAAOgLAKQgKAKgOAAQgMAAgLgKg");
	this.shape.setTransform(46.5,22.9,0.752,0.752);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFChIgKgCQgTgEgRgLQgRgLgNgQQgOgRgIgTQgQghgBgwIABgTQAAgLADgLIAFgUIAIgUQAIgSAOgRQANgQARgLQAQgLAUgEQASgEARAEQAfAGAbAcQASAWALAaQAHAUAEAVIADAbIAAAIIgBgIQAAgKgDgRQgDgUgJgVQgLgagUgTQgKgKgPgIQgRgJgNgBQgggGgeAXQgcAVgPAmQgIAUgCAQIgEAlQABAoANAiQAPAmAcAVQAMAKASAFIAJACIAPABIAIgBQAdgEAagYQAUgUALgZQAJgVADgUQADgRAAgKIABgJIAAAJIgDAbQgEAUgHAVQgLAagSAWQgaAcggAGIgJABIgJABIgHAAg");
	this.shape_1.setTransform(42.2,18,0.752,0.752);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhRBuQgigtAAhBQAAg/AiguQAiguAvAAQAwAAAiAuQAiAuAAA/QAABBgiAtQgiAugwAAQgvAAgigug");
	this.shape_2.setTransform(42.6,18,0.752,0.752);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag4geIBxAiIgNAbg");
	this.shape_3.setTransform(39.6,40.3,0.752,0.752);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAwAJIgPgGIgIgDIgZgGIgQgDIgRAAIgRACIgNAEIgVAIIgHAFQABgEAEgEIAHgGIAKgJQAIgGAHgCQAGgDANgDIAKgBIAKAAIASACIAdAKIAIAFIAQAJIAMAIIALAJIANAPg");
	this.shape_4.setTransform(3.6,30.4,0.752,0.752);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D1B08A").s().p("AhbAFQAEgFAIgEQAOgMAUgFQA7gPBOA9g");
	this.shape_5.setTransform(3.6,30.8,0.752,0.752);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhRBqIgmgbQgRgPgJgLQgQgVgHgRQgMgaAFgXQADgPAIgLQAHgLANgKIAMgIIANgGQANgGAOgDQAYgGAfADQAZADAZAHQAkAKAxAYIBQAnIgYgHIg9gVQg2gUgfgHQgXgHgYgCQgcgBgVAEQgNADgLAFIgLAFIgKAGQgVAOgFAVQgFAUAJAVQAGASANASQASAbAXAUIAUAQg");
	this.shape_6.setTransform(3.5,31.3,0.752,0.752);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D1B08A").s().p("AikAMQgdhBBAgiQA8gfBdAeQA1ARBhAqIj9CFQg8gjgZg5g");
	this.shape_7.setTransform(3.8,31.6,0.752,0.752);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhqAJIA0gVIAZgHIAbgFIAZgDIAaABIAZAEQAIABANADIASAHIANAHIAKAFIgZgFIg+gFIgZACIgYADQgRACgIACQgRABgHACIhWAZg");
	this.shape_8.setTransform(40.8,4.9,0.752,0.752);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgnAqQgTgKgEgUIgBgKQAAgDACgEQACgKAGgHQALgNAQgHQAOgGAMAAQAOAAAMADQAMADAIAFQAIAHADAFQgKgOgWgCQgLgBgMADQgLADgLAHQgLAHgHALQgEAFAAAGIgBADIAAACIAAACIAAABIAAABIABAAIgBgBIABABIAAAAQACAJAKAIQAKAGAOADIALABIANgBQALgCALgGQATgLAEgQIABgEIgBAEQgCAIgEAGQgFAIgJAIQgLAIgMAFIgNAEQgHACgHAAIgEAAQgPAAgNgHgAgrAIg");
	this.shape_9.setTransform(32.2,-5.7,0.752,0.752);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00FFFF").s().p("AgiAmQgTgJgEgRQgEgQAOgQQAPgQAYgFQAXgFAUAJQAUAJADARQAEAPgPAQQgOARgZAFQgIACgIAAQgOAAgMgGg");
	this.shape_10.setTransform(32.6,-5.8,0.752,0.752);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgdAxQgUgFgJgUIgDgIIAAgKQAAgHAFgJQAHgPAPgKQALgHAQgFQAKgEAOABQAMABAIAEQAIADAGAFIAEAFIgEgEQgMgLgWACQgLAAgKAGQgLAFgKAKQgKALgEAKQgCADAAAHIAAAFIAAACIACAEIAAAAIABABIAFAGQAGAFAEACQALAEAMgBQAHAAAGgBIAMgEQALgEAJgIQARgPAAgPQAAgFgCgFIgBgDIACADIABAKQAAAHgDAHQgEAJgHAKQgIAKgLAHIgMAHQgIADgHABQgGACgIAAQgJAAgIgCg");
	this.shape_11.setTransform(10.4,2,0.752,0.752);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00FFFF").s().p("AgZAsQgVgEgIgRQgHgQALgRQALgSAXgKQAVgKAVAEQAVAFAHAQQAHARgKAQQgLATgXAKQgPAHgNAAQgHAAgHgCg");
	this.shape_12.setTransform(10.7,1.7,0.752,0.752);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgdAxQgUgFgJgUIgDgIIAAgKQAAgHAFgJQAHgPAPgKQALgHAQgFQAKgEAOABQAMABAIAEQAIADAGAFIAEAFIgEgEQgMgLgWACQgLAAgKAGQgLAFgKAKQgKALgEAKQgCADAAAHIAAAFIAAACIACAEIAAAAIABABIAFAGQAGAFAEACQALAEAMgBQAHAAAGgBIAMgEQALgEAJgIQARgPAAgPQAAgFgCgFIgBgDIACADIABAKQAAAHgDAHQgEAJgHAKQgIAKgLAHIgMAHQgIADgHABQgGACgIAAQgJAAgIgCg");
	this.shape_13.setTransform(-12.2,12.5,0.752,0.752);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00FFFF").s().p("AgZAsQgVgEgIgRQgHgQALgRQALgSAXgKQAVgKAVAEQAVAFAHAQQAHARgKAQQgLATgXAKQgPAHgNAAQgHAAgHgCg");
	this.shape_14.setTransform(-11.8,12.3,0.752,0.752);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFF99").s().p("AAiBRQisifh3hUIA/g+IC0CNQDCCgBOBmIhKAtQg/g/hXhQg");
	this.shape_15.setTransform(-36.2,-6,0.752,0.752);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(3).p("AKGCjQgph+gdiUQg5ksA+h3IlyAoQARAdAPAuQAfBbgDBUQiRAtgtAPIhnjcIkECqICRCgIilCUIiRiZIi+C8QBwBPBxBbQDiC1AJA7QBwhLCchSQE+ilDtgmg");
	this.shape_16.setTransform(-9.6,-26.6,0.752,0.752);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFF00").s().p("AmhEfQhxhbhvhPIC+i8ICRCZICliUIiRigIEEiqIBnDcQAtgPCRgtQADhUgfhcQgPgtgRgdIFygoQg+B3A5EsQAdCUApB+QjtAmk+CkQidBThvBLQgKg8jii0g");
	this.shape_17.setTransform(-9.2,-26.9,0.752,0.752);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("An2EUQgIAAgHgFIgIgFIgEgFQgJgMgOgbIgIgWQgEgJgBgNQgEgbAJgVQAFgMAIgKIARgQIAdgbQAlgpAVgUQARgOARgMIAkgWQBZgzA5geQBMgoBKggIBNgfIAngOIApgLQBRgTBVgCQBYgDBQAQQAuAKAiAQQAZAMAMAJQAUAPAJATQAKAVgEAWQgDAVgNATQgaAkgqAMIgCABIgbhFIAdBAQAogPAWghQAMgTABgSQADgUgKgRQgPgdgugSQgigOgtgJQhMgOhXAFQhVAEhMAVQghAJgtAQQgaALgwAVQg/AbhVAuQgwAZhgA3IgiATQgNAJgRARQgUASglApQgXAXgJAHIgHAHIgGAFQgGAHgDAHQgLAdASAnQAKAVAJAMIAEAEIgBAAIAEABQAFAAAHgEIAPgKIARgOIBrhBQAxgbAZgNQA7gfBcgnQBKgfBQgaQBngiA4gPIBRgUIBRgTIBSgQIBRgOIg9AOIhkAYIhQAVIhQAYQhMAXhRAcQhSAghFAeQhQAkhEAkIhIAoIhpBCIgPAMQgLAJgIAEQgOAIgLAAIgDAAg");
	this.shape_18.setTransform(14.8,5.7,0.752,0.752);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AoBEGQgLgFgVgpQgNgeACgbQACgeAXgSQARgOAzg2QAqgrAegRQB7hIBXgsQB2g8BkgiQBogjB/gBQCPgBBbAtQBFAigQA8QgPA4g/AUIgdhDIAugJIg1AKQoTBslqDwQgKAGgUARQgNAIgKAAQgEAAgEgCg");
	this.shape_19.setTransform(15.2,5.5,0.752,0.752);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(2).p("AAUgsQg6gwAEgwQABgPAIgOIAHgKQAhhBCUAkQBLASBDAfQgvhOg/gfQgUgKgUgEIgPgCQAsgMBBARQAhAJAXALQgcg+hKgrIhEgeIlICbIgxBhQgxByADBSQAKgNAQgPQAfgbAcgDIgVAaQgYAkgUAnQg+B/AMBzQAKgzAXg4QAthxA+gZIgBATQABAYAJAaQAeBTBqBEQgMgpAIgxQAQhjBlgpQgRgLgZgNQgwgagmgKQAYgMAVgNQAngegQgNg");
	this.shape_20.setTransform(-7.2,41,0.752,0.752);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#666666").s().p("AkEB9QAUgnAYgkIAVgcQgcADgfAdQgQAOgKAOQgDhTAxhxIAxhhIFIibIBEAeQBKAqAcA/QgXgLghgJQhBgSgsANIAPACQAUAEAUAJQA/AgAvBOQhDgfhLgTQiUgkghBCIgHAKQgIAOgBAPQgEAvA6AxQAQANgpAbQgTAPgYANQAmAJAwAaQAZAOARALQhlAogQBjQgIAyAMApQhqhFgehSQgJgagBgYIABgTQg+AZgtBwQgXA5gKAzQgMh0A+h+g");
	this.shape_21.setTransform(-7.8,38.9,0.752,0.752);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(3).p("AIBAAQAADUiWCXQiXCWjUAAQjTAAiXiWQiWiXAAjUQAAjTCWiXQCXiWDTAAQDUAACXCWQCWCXAADTg");
	this.shape_22.setTransform(15.2,15.9,0.752,0.752);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D1B08A").s().p("AlqFrQiWiXAAjUQAAjTCWiWQCXiXDTAAQDUAACXCXQCWCWAADTQAADUiWCXQiXCWjUAAQjTAAiXiWg");
	this.shape_23.setTransform(15.2,15.9,0.752,0.752);

	this.addChild(this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-59.8,-72.5,117.4,145.6);


(lib.gn = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3).p("EAUUArkMgongsvMAAAgqvMAonAAAg");
	this.shape.setTransform(350,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#736357").s().p("A0Tg/MAAAgqvMAonAAAMAAABXeg");
	this.shape_1.setTransform(350,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3).p("AX/hMMgv8As0MAAUhXjMAvoAAAg");
	this.shape_2.setTransform(-326.5,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#736357").s().p("EgXqgrxMAvoAAAMAAAAqvMgv8As0g");
	this.shape_3.setTransform(-326.5,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(3).p("EAhLAWbMhCYAAAMAR+gs1IYgAAg");
	this.shape_4.setTransform(43.6,136.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("EghLAWbMAR+gs1IYfAAMAX6As1g");
	this.shape_5.setTransform(43.5,136.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(3).p("EhK8AWaMAv+gs0MA9YAAAMAooAsvg");
	this.shape_6.setTransform(-0.2,136.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#754C24").s().p("A7B2ZMA9YAAAMAopAsvMiV/AAEg");
	this.shape_7.setTransform(0,136.8);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-483.7,-281.7,967.1,565.4);


(lib.flatbluestop = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AgvAwIAAhfIBfAAIAABfg");
	this.shape.setTransform(0,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFF00").ss(0.1,1,1).p("ACNAAQAAA6gpAqQgqApg6AAQg5AAgqgpQgpgqAAg6QAAg5ApgqQAqgpA5AAQA6AAAqApQApAqAAA5g");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.1,-15.1,30.3,30.3);


(lib.flatblueplay = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(0.1,1,1).p("ACNAAQAAA6gpAqQgqApg6AAQg5AAgqgpQgpgqAAg6QAAg5ApgqQAqgpA5AAQA6AAAqApQApAqAAA5g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AiBhwIEDAAIiCDgg");
	this.shape_1.setTransform(1.7,0.3,0.542,0.542,-90);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.1,-15.1,30.3,30.3);


(lib.fire_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AACAiIgBgCIgBAAIAAAFIAAAAIAAgEIAAAAIAAgBIAAgBIABAAQAAAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAgBIAAgCIAAADQAAAAAAABQAAAAAAAAQABABAAAAQAAAAAAAAIABgBIABgFIAAABIACABIAAAAIACACIAAABIAAgBIgBABIAAAAIAAgBIgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAABIAAABIgBgBIgBAAIAAADIgBgBIgBAAIAAAEIAAgDgAAHAlIAAgCIAAACgAAJAkIAAgBIAAgCIABACIAAABgAgHAiIAAAAIAAAAIAAAAgAgCAiIAAgBIABABgAgHAhIAAgBIAAABgAgJAgIABgCIACgEIgBADIAAABIgCADgAgCAYIABgBIAAAAIAAACIAAADIgBAEgAgEAgIAAgBIABgEIAAAEIAAABIAAgBIgBABIAAAAgAgGAfIAAgDIACgGIAAgBIABADIgBACIgBAGIgBgBgAAAAaIAAgBIAAAAIAAAAIAAAGIAAgFgAAOAeIABAAIgBABgAALAeIgDgEIAAgDIABACIABABIAAAAIAAgBIACADIAAAAIAAABIAAABgAADAZIABgBIgBAFIAAgEgAAAAZIABAAIAAAEIgBgEgAgOAcIAAgBIAAAAIAAACIAAgBgAALAXIACgBIAAAEIAAABIAAAAIgCgEgAgNAaIABAAIgBABIAAgBgAAFAXIACAAIAAAEIgCgEgAAPAZIAAAAIgBAAIAAgBIABABIABAAgAgMAYIACgCIgCADIAAgBgAABAXIAAABIgBAAgAAAAYIAAgBIgBgBIAAgCIAAgDIABAAIAAADIAAgBIABACIAAABIgBABIAAgBIAAABIAAABgAAJAWIAAAAIAAACIAAgCgAgQAXIgBAAIAAAAIABgBIAAgBIgBAAIAAAAIABgBIABAAIABAAIAAAAIgCAEgAAPAXIgBgBIABgBIAAACgAADAXIABgBIAAABgAgEASIAAgCIAAgBIgBABIAAgDIAAgBIACgBIgBAAIgBABIgBgDIABAAIAAABIABAAIABgBIABgBIAAANIgBABIgBgEgAAKAVIACgBIAAAAIAAABIgBABIgBgBgAAFAVIABgBIABAAIAAABIgCABgAgJAVIABgCIAAgBIgBgBIgBABIgBAAIABgBIAAgDIAAAAIAAgBIADAAIAAABIABAAIABADIgBACIgBgBIgBACIgBABgAANATIABgBIABACIgBABIgBgCgAADAUIAAgCIAAAAIABAAIAAACIgBABgAAEATIABgBIAAgBIABAAIAAACIgBABIgBgBgAABAUIAAgBIABgBIAAACgAAQAQIAAAAIABgBIACgBIABACIAAABIgCgCIAAABIgBAAIACACIgBgBIgBAAIAAABIAAABIgBAAIAAAAIAAgDgAAKASIABgBIAAABIgBABIAAgBgAgRASIABgBIABABIgBAAgAAVARIAAAAIAAABIAAgBgAAHAQIAAAAIABABIgBABIAAgCgAgUASIgBAAIAAgBIAAAAIACgBIgBAAIAAgBIAAgBIgDAAIACgBIAAAAIgBgBIgBAAIABgBIAAAAIgBgBIABAAIAAAAIgBgBIgCgBIADgBIAAAAIgCgBIgBgBIABAAIABAAIAAABIAHAEIgEAAIgBAAQAAABAAAAQABAAAAABQAAAAABAAQAAAAABAAIAFABIgDACIgBAAIgBgBIAAABIAAAAIABABIAAAAIgCACIgBAAgAAMAQIABAAIAAABIgBgBgAABARIABAAIAAAAIgBAAgAgOAQIACgCIgBACIgBABgAAJAPIABgBIAAABIgBABgAAEAQIAAAAIAAgBIAAABgAABAPIABAAIAAAAIgBABgAgBANIAAACIAAAAIAAgCgAAVANIABAAIAAABIABAAIgBABIgBgCgAAUAOIAAAAIABAAIgBAAgAADAOIABAAIgBAAgAAAAMIgBgEIABgBIAAAFIAAACIAAAAIAAgCgAAGAOIAAgBIABAAIAAABgAAQANIAAAAIAAAAgAAIAMIACgBIAAABIgCABIAAgBgAARAMIAFgFIABgBIABABIABACIgBgBIgBAAIgBAAIAAABIABABIgCgBIgBAAIABACIABAAIgBAAIgBAAIgBAAIAAABIAAAAIgCABIAAgBgAAMAMIAAAAIgBABIABgBgAAAAHIAAAAIABAFIgBABIAAgGgAAEAMIABgBIAAABIgCAAgAgHAMIAAAAIABAAgAgJAMIgBgBIgBABIgBAAIgFAAIgDgBIADAAIABAAIADABIAAgBIgBgBIAGAAIAAACgAAOAKIABgBIAAAAIABACIgBABIgBgCgAAKALIACgBIAAABIgBABgAABAGIABAAIABABIABAAIAAABIAAAAIABAAIgCACIAAABIABAAIgCABIgBgGgAAZALIgBAAIAAgCIABABIAAABgAARAKIgBgCIACgDIgBAAIAAAAIAAgCIABACIACABIABgBIAAgBIAAgCIgBgBIABAAIACgBIAAABIABABIgBAAIABABIgBAAIgBgBIgBAAIABACIgCAEIgDADgAAGALIAAgBIAAABgAAHAKIAAgBIAEgCIgDADIgBAAgAgPAJIgCgBIAAAAIAFABgAgJAJIgBAAIgCgBIABAAIADgCIAAADgAgGAIIAAgBIgBgBIAAgBIABAAIAAABIAAACgAAZAGIABAAIAAABIgBgBgAgEAEIAAgBIABgBIAAABIAAAAIAAABIAAABQAAAAAAAAQAAAAAAABQAAAAABAAQAAAAAAAAIgBABIgBgDgAANAHIAAgBIABAAIAAAAIAAABgAgOAHIABgBIAAABgAgZAHIAAgBIAAABgAgBAGIABAAIAAAAIAAAAIgBAAgAAGAGIAAgBIABgBIADgCIgCADIgCABgAADAGIAAAAIABAAIAAAAgAgFAEIAAAAIAAAAIABABIAAABIgBgCgAgMAGIABgBIAAgBIAAABIAAAAIABAAIAAgCIAAgCIACAAIAAABIgBABIgBABIAAABIABAAIgCABgAgSAGIgCgBIgDgCIAEABIACAAIAAAAIAAgBIACAAIAAADgAASACIABAAIABACIAAABIgCgDgAAPAEIABgBIAAACIgBgBgAABAEIAAAAIgBABIABgBgAgBAFQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAgBAAIACgBIAAACIAAAAIAAABgAAMABIAAABIgCACIACgDgAgJAEIACgBIgBABIgBAAgAADADIAAgBIABABIgCABIABgBgAAFADIAAAAIAAAAgAgTADIgEgBIgBAAIgBgBIACAAIAFACgAAOADIACgBIAAAAIgCABgAAFADIACgCIgBACIgBAAgAgZADIAAgBIAAABgAAEACIADgCIADgCIAAABIADgCIAAABQABACABABIgCABIgCgCIAAAAIAAgBIAAAAIgFACIgCABgAgFABIADgBIgBABIAAAAIgBABIgBgBgAAZAAIgBAAIABAAIAAABIAAAAIAAgBgAARABIABgBIABABIgCAAgAAKAAIABAAIAAAAIgBABIgBAAIABgBgAgBABIAAgBIABAAIAAABgAgSAAIABAAIgBAAIgDgCIAAgBIACAAIACgBIAAAAIgEgDIgBAAIAAAAIgCgBIAAAAIAAgBIADAAIABgBIgBgBIgCgDIAAAAIABABIABAAIAAAAIgBgCIAAgBIABAAIABAAIAAAAIgBgBIAAgBIABAAIABABIAAACIAAADIABADIgBAAIAAABIAEABIAAABIgBAAIAAAGIAAABIgCgBgAATAAIAAAAIABAAIgBAAgAgOAAIAAAAIgBAAIAAgBIAAgBIABgCIAAAAIAAACIACACIABAAIAAAAIgBAAIgBAAIgBAAgAAaAAIAAAAIAAAAgAAUAAIADgBIABABIgDAAIAAAAIgBAAgAAPgDIAAAAIACADIAAAAIgBAAIgBgDgAgHAAIACgCIABgBIACAAIgCABIAAABIAAABIACAAIgDAAIgCAAgAgIAAIAAAAIAAAAIABAAIAAAAgAgZAAIAAAAIACAAIgCAAgAADAAIAAAAIAAAAgAgKAAIAAgBIABAAIABABIgBAAIgBAAgAgTAAIgDAAIgBgBIABAAIAAAAIADABgAARgCIACACIgBAAIgBgCgAgMgCIgBgBIACABIgBABIABAAIAAABIgBgCgAATgBIgBgCIAAgBIABgBIABgBIABgBIABABIABACIgBgBIAAAAIABACIgDACIgBAAgAAYgCIAAAAIABABgAgDgBIACgBIAAAAIABABIgDAAgAAZgDIABAAIAAABIgBgBgAAAgCIABgBIABgCIgBACIAAABgAgJgDIACgCIAAACIABAAIAAAAIgCABIgBgBgAANgEIAAABIgCAAIACgBgAAKgDIABgCIABAAIAAABIgCABgAgNgEIABAAIAAABIgBgBgAAEgGIABAAIABgBIgBACIgCABIABgCgAgGgEIABgBIAAABIABAAIAAAAIgCAAgAAYgGIABAAIAAAAIgBgCIABAAIAAAAIAAgBIABADIAAABIgBABIgBgCgAAIgFIABgBIAAAAIAAgBIAAgBIAAAAIgCACIAAgCIAAAAIACgCIABACIAAACIgCACgAgCgFIgBAAIACAAIABAAIgCABgAgUgEIgBgBIABAAIABAAIABAAIAAABgAANgFIgBAAIABAAIAAAAgAgLgFIABgBIAAABgAgOgHIABAAIAAACgAgZgFIAAAAIABAAIgBAAgAAPgGIgBAAIABAAIAAAAgAgJgGIAAgBIABABIAAAAgAAQgHIABgBIAAABIgBABIAAgBgAAAgGIAAgBIAEgCIgBACIgDABIAAAAgAgKgHIAAgCIAAACIAAAAgAgMgJIABAAIgBACIAAgCgAASgIIADgCIAAABIgDACIAAgBgAALgHIgBgCIABgBIACACIgBABgAAFgJIAAgBIgCAAIABgBIADABIAAAAIgCACIAAgBgAgJgJIgBgBIAAgBIABAAIABgBIAEgCIABgBIAAABIgEAFIAAAAIgCABIAAgBgAgOgIIgBgGIgBgGIABACIABADIAAgBIAAgBIAAgGIAAAAIABACIACACIAAAAIAAgHIACAEIAAAEIAAADQAAgFgBAAIAAAAIAAAEIgBAAIAAAAIAAAGIgBAAIAAgDQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAIAAAAIAAAFIAAAEgAgQgIIgCgGIADAFIAAABgAAMgKIADAAIgBABIgCgBgAgDgJIAGgHIADAAIgCACIgCABIgCACIgCACIgBAAgAAYgJIAAgBIABgBIAAACIgBAAgAAVgNIABABIgEACIADgDgAgXgKIAAgBIABABIgBAAgAABgLIACgBIAAABIgCABgAgDgLIgBAAIgBABIACgBgAAQgLIgCgBIAAAAIABAAIACABgAAMgLIABgBIABABIgCAAgAARgMIAAgBIADAAIgCACIgBgBgAAHgLIgCgBIAAAAIAAgBIAEgCIABAAIAAAAIAAACIAAABIgBABIgCAAgAgCgMIABgCIABgBIgCADIAAAAgAgYgMIAAAAIABAAgAgCgOIAAABIgBABIABgCgAANgNIABAAIAAAAgAALgOIABABIgBAAgAgGgQIABABIABgEIAAACIABABIgBABIgEACIACgDgAgRgPIgBgCIAAAAIAAgBIAAAAIABAAIABAFIgBgCgAAOgOIACgCQAAgBABAAQAAgBABAAQAAgBAAAAQAAgBAAAAIABABIABACIABABIAAAAIAAAAIgBABIABABIAAAAIgCAAIgEABIgBgBgAALgQIgBAAIADgCIAAABIAAABIAAABIgCgBgAABgRIABgCIAAAAIABgCIgBACIAAABIgBABIAAABIgBAAIABgBgAAOgRIAAgBIADgCIgCADIgBABgAAHgRIABAAIACgDIABAAIABABIgEACgAgGgRIAAgIIACgBIACgBIAAABIgBAAIgCACIABABIgBADIAAADgAgIgVIAAgEIABAAIAAACIgBAGIAAgEgAAIgTIgCABIgBABIADgCgAgBgTIABAAIgBACIAAgCgAgDgRIAAgEIAAgCIABAAIAAABIAAADIAAAAIAAACgAAAgSIAAAAIAAAAgAABgVIACAAIgCACIgBAAIAAAAIABgCgAAGgVIAAAAIgBABIgBABIACgCgAAMgVIADgBIAAAAIgDACIAAgBgAgQgWIABAAIAAACIgBgCgAgSgUIgBgBIABAAIABABgAAQgVIAAAAIgBABIABgBgAgNgZIAAAAIABAAIAAAEIgBgEgAASgWIAAAAIABgBIAAABIABABIgCgBgAAAgXIAAABIAAgBIAAAAIAAACgAAMgXIACgCIAAgBIACAAIABAAIgBABIgBABIgEACgAAIgWIABgCIACgBIAAABIgCACIgBAAgAAQgXIABgBIAAABIgBAAgAgQgYIABABIAAAAIgBgBgAAJgaIgCABIAAAAIgDACIAFgDgAACgZIAAABIgBAAIABgBgAgBgaIAAABIgCABIACgCgAAHgcIAAAAIgBAAIAAgBIAAAAIgCABIgBAAIAAAAIACgCIgBAAIABgCIABgBIAAgCIABACIABABIAAAAIAAgDIABABIAAABIABADIAAAAIABgBIAAABIgBACIAAAAIgEACIgCABIADgDgAgKgbIgBgBIAAABIgBgBIgBgCIAAAAIABABIABAAIABAAIgBgCIAAAAIAAgBIADADIABAAIAAgBIgBAAIAAgBIABgBIAAgBIgBgBIADACIAAACIgBAAIgBABIAAACIAAgBIgBAAQAAAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAAAIAAACIgBgCgAALgbIAAABIgBAAIABgBgAAAgaIAAAAIAAgBIAAABgAgIgbIAAABIAAAAIAAgBgAgMgaIgBgCIABABIAAABIAAAAIAAAAgAgQgaIABgBIAAABIgBAAgAAAgcIADgBIgDACIAAgBgAgGgbIABgCIAAACIgBAAgAANgbIABgCIABABIAAABIgCAAgAAMgcIgBAAIAAgBIACgBIABAAIgCACgAgEgfIABgCIABABIAAADIgBABIgBAAIAAgDgAAEghIgBADIgCAAIADgDgAAAgeIgBgEIgBgBIgBgBIACACIABABIAAAAIAAAAIAAgCIgBgBIABAAIAAADIAAACIAAABgAAMgfIAAAAIAAgBIABABIgBAAgAgKggIAAgBIAAABIAAAAgAgJghIAAAAIABAAgAgFgjIABABIAAABIgBgCgAgHgiIABgBIAAABIgBAAgAgEgjIAAAAIAAAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.6,-3.8,5.4,7.6);


(lib.f_r2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhiFDIAAgBIABABgAAEFCIAFgGQAGABgBADIAAACgAhAE/IACgQQgBgIgCgCQAPgTAVggIgBAGQABAEAKAAQAJAAAIgNIAAAFQAAAUAFALIAFgCIABgVIADAAIgBAUIABAGQgGAFgEAKQgFAWgHAAIgBgBIABgUQgBgRgGABQgEgBgCACIgBABQAAAEgCAJIgGALIACgNQgBgJgGAAQgFAAgBACIgBABIAAAFQgPgCgBALQgCATgBACgAhTEwIADADIABgBIgFAMIABgOgAA5E3IABADIgCABIABgEgAihE7IAAgJIgHgDIgNAHQgBgGgGgEQgEAFgHAKQgEgNAGgOQAIgQAAgEQAAgBAAgBQAAgBAAAAQAAgBgBAAQAAAAAAgBIgFgBQgIADgCAEQAAAEgBACIgDgHQgDgFAAgDIACgDQAIgDALgHIAMgKQAHAAAFAGQgDAPABAaIAIABQADAAADgDIADgDIADAUIABADIgDACQgIAFgCAGgAjZE4IACgGIABACIABAHIgEgDgAhrE4IACgRQAAgFgCgDQAKAAABgBQADgCAFgRQACAEgBANIgDgEQgIAHgDAJIgGARgAh+EuIACgEIAFgGIgDAGIgEAMgAjrEsQAFAAABgDIgCAHIgEgEgABvEhIACAAIgCABIAAgBgAiEEfQAAgGARgbQAKgMAEgJQACAFADAEIgDAGQgUAbgMAMgAAqEBQAEAHADALIgEABIgBABIAAAIIgCgcgAkDEaIACAAIAAACIgCgCgAB2EEQgBgPgHAAIABgSIADADQACACAEABQALAAADgNIAAgRQARABARgDQgEAFAAAFIAAAMQgDgBgJAAQgBAhgDALIgBgBIAAgVQAAgOgGAAQgFAAgBACIgBABIABAcQAAAMgHAHIgEAEQgFgHgBgRgAjzESIABABIgCADIABgEgAhKEBIADgJQAMgIAHgbIABADQAAAEgJAXIgOAigABJDXIAAgBQAEAEAFAQQAFAQAAAHIgBAMIgCACIAAACIgLg6gAidEEQACgYASgTIASgRIgBgDQgCgCgFAAQgKAAgNAPIgQATIgBgCQABgKARgRQATgTACgDIACgYIAEAOQAPAdAAANIAAABQgIAEgSATQgRAUgGAIgAjuEEQAAgDADgEIACgBQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAABIgGAFgAkLDyIAEgFIABAAQAFAAAKgCIgGAHQgIANgGAGgAgrDiQAFgPAJgFQgEAQgRAcIAHgYgAkkDxQgDgFAAgEIABgEIAAABQANACAEADIgBACIgLAOQAAgDgDgGgAAcD1IAAgBIABgCIAAADgAjiDzIAAgBIATgSQAAADgJAMIgJAFIgBgBgAAmDrQgFAAgBACIADgNIAAgHQAGAGAHAQQgEgEgGAAgAi0DXQgBAJgSAPIATgYgAC0DXQgBgJgDgGIAIgBIAAAPQABANgGAGIABgSgAgRDWIACgCQACAEADABIgHAQgABiDoIgBgZQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAIAAAZgAhaDdIgEgQQAAgKAGgFIAOAGIAAARIgBADIgMAPIgDgKgAARDZIAAgdIAHgCIAAADIAAAZIgDANIgEgKgAkFDfQAbgYAXgbQAMgOAbgjQABACAAAWQgBASAHAHIAEgBQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAKgEAEQgGgHgBAAQgbAQgKAFQAUgWAAgEQAAgBAAgBQAAgBAAAAQAAgBAAAAQAAAAgBAAIgFgBQgMAGgTAXQgRATgUAIgADGDLIgBgHIAJgDIAAAbIgCACQgEgFgCgOgAkZDWIAAgFQAFgIgBgEIAAAAQAEgJAJgJIARgSQAAgBAAgBQAAgBAAAAQAAgBgBAAQAAgBgBAAIgDgBIgUAQQgLAKgPADQAMgJAOgHQAIgGAAgJIgIgHQADgDgBgHIgRAAQAIgHAFgJQgCgEgIgCQADAAAEgJIgSgPIgUAAIAFgDIAUgKQAKgGAJAAQgGALAAALQAAAEABABIAGAEQAEgBAGgJQAFgGANgCIAAACIgKAWQgKATABAEQAAAEABABIAFABQAHgDAHgMIALgSIAAACQgIASgEAmQgHAiggAUgADbDNIACgPIAAgCIAEgCIAAAAQABAJgCAFIgFAGgAAkC9IABgJQASgGAIgGIAAACQgQAQgLATIAAgQgAgwDGIADgRQAFgFACgIQADAKAFAAQAGgBgBgCIACABIgBABQgDABgBACIAAACQgPASgDABgAlGDGIADgEIAEABIgGAEIgBgBgACRC/IAGgCIA0gSQAOgGAIgFIgBALIgOAHIgCABQgeAMgPAAgAACCxIAFgCIgCAEIgCAAIgBgCgAg7CnIAAgFIADgBIgCAPIgBABgAiSCvIAKgWIAAgBQABAPgIAKgAARCrIACAAIAEgBIABADIgHABIAAgDgACwCXIAUABIgFABQgMACgQAHIgTAIQARgMAPgHgAhrCqQgEgSgBgQIABgFIAIgDIAMgBIgFAJIgDAGIABABQgHARgCAKgAAkClIAGgBIgGAEIAAgDgAhQCjIADgNIACAAIAGAAIAAACQgBAIgDAGIgHgDgAgYCQIAGgBIABAIIAAAGIgIAEIABgRgAiaCeIAJgXQAFgOAFgFQABAKgHAMIgNAUgACFCcIACAAIAIgCIACAAQgFADgEAAIgDgBgAgICMIAYgJQA6gWAGgBIABAIQAAAHg5ATQgEgCgEAAQgIAAgJALIgCABIgFgMgAjPCAIgEANQgDAIgDADIAKgYgAA5CQQABAAAAAAQAAgBABAAQAAAAAAABQAAAAABAAQgRAFgCAAgAB7CQIAAgBQAkgIAPgCIAAABQglALgLAAQgBAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBgAk8CNIAEgDIAFgCIgDABQAAAEgHABgAD+B2IgPgaQAOgEAFgOQAGgRACgBIAKAPQAGAGALABIACAAIgBAJIAAATQgBALgFAFQgBgBAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAIABgOQAAgGgHgEQgJAGABAUQAAALgFAHQgDgJgIgMgAhHCIIABAAIAAABIgBgBgADCCIIAFgGIACgFQAAAAAAgBQAAAAAAgBQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAgBIAEgXIASAaIAKAOQgOgBgUABgAgqCIIgBgBIgCgEIADgBIAAAGgAEaCGIAAAAIgBABIABgBgAifByIABgCQACgFABgHIABABIABAIIABAGIAAAAIgHASgAgYCAIAAAAIABADIgBABIAAgEgAjDCDIAEgaQAAgPgGgIIgFACIgSAmIAAgCIAGgaQAAgFgBgBQgDgGgLADIACgBIAYgHQAPgFAFgFQABADAEACIAEgBQAEgHAIgRQAGgSAEgEQgOAxgEAVIgZAlgAgNB9IADAAIgDABIAAgBgACiB4QADgCAFgCQAAgBABAAQABAAAAAAQABAAAAAAQABAAAAAAIAAABQgFAFgIABgABiByIgCgHIAugJIAgABQgJAPg/ADQgCAAgCgDgAhrBLIABgKIABgGIBpgYIAIADIgCABIg6AOQggAIgXAOQALAIAEgBQAJABATgFIgFAJQgSAGAAAHQABAHgDAIIgQABIgFABIADgqgAlKBwIAAgCIgBAAQADgCAGgCQALgFAHACIgCABQgLAIgKAAIgDAAgACKA+QgVANg0ARQgrAOgPADICDgvgAlcBpQACgDgBgDIAEgCQAJgEAFABIgSAMgAiGBTIAAATIgBAAIgEABIAFgUgAE1BjIAAgSQAAgGgCgEIADgFIAEAHIAGAJIgKARIgBAAgAgyBfIAFgCIABADIgGABIAAgCgABsBaQAQgFAsgdIABAdQghACgdAEgAC7BUIAAgFIAAiEIgBgDQgCgCgEAAQgDAAgCACIgBABQAAgLgGABIgEAAIAAgCQAAAAAAgBQAAgBABAAQAAgBAAAAQABAAABgBQAAAAABAAQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgEAEgHQAGgKAKAAIADAEQAEADACAAIAGgBQAPAiAAADQABARgGAWIAAAAIACgfQAAgTgKAAQgKAAgCASIAAAXQAAAGADAQIACANIgBgBQgEAAgBACIgCADQgBAFAGAOIABADIgFAfQgEAEgBAFIADADIgBACgAg3BRQAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAABAAIADgCIACAFIgHACgAlhBRIAEgEQAGgCALAAIgDADQgGADgKAAIgCAAgAgoBHIApgOQBDgWAaAHIgGADQgXANhTAPIgSAFIgEgHgADsBNQgDgCAAgGIAGAIgAiCBAIABAAIgCAGIABgGgAi9A4IAGgBIgBAHIgFgGgAEaA7IgEgFIgBgGQAAgBAAgBQAAAAAAgBQABAAAAgBQABAAAAAAIABAAIABAAIACAPgAlRAzIAFgIQATgEANABIAEgCQACgBAAgEQAAgBAAgBQAAAAAAgBQgBAAAAgBQgBAAAAgBIgEgBIglABIAFgEQADgGAAgCIgBgCIAbgBQgCAEABAHIAJABQAGAAACgDQADgBAGgKQAAAFgQAhQgSAAgPAFIgOAFIAEgIgAEoA6IAAgtQADATgBAagAFFAtIAAgBIAHAIIgBABgAh5AZIAGAAIgJAZIAAABIgDABQACgPAEgMgABsAvIACAEIgIABgAkKATQAcACAMgEQAUgGALgBIgJAEIgSAGQgJADgYADIgCABIAAADQAAAFADABIAEABIAsABIgEAEQgQAAgKACIgMABQgDABgBgDQgBgDgEAAQgHAAgIAFIgJAHQAGgMAJgVgACFAwQAHgHAAgLIgBgSQAMASAEARIgCABIgVABgAi+AqQABgCgDgFQgEgFgCgFIARgJIAJgFIgFAQIgDARIgKgCgAEFArIAAgWIACgBIABgEIgBAbgAhlAYQANgFAggLQArgNAaACIh0AtIACgSgAByAgIgEgJQANgHADABIABANQAAAIgIADQgCgCgDgHgAE4AXQAAgFALgYIABgBIAVgBQgQAEgDAPQgBAKgBARQgIgBgDABIgBgPgAAKAJIADAAQgLAOgPAEQgWADgMADgADeAgIgFgFIAFgTIAAAZgACXAIQgIgPAAgEQAAgCAEgCQAFgDAEgIIgEgFIgBgCIgCAAQgMgLgJgMQAFgGAPgDIADAWQADALAHAIIAAA2IAAAAIgKgWgAFYATIAAAAIAAABIAAgBgAAdAOIAYgOQAPgGADgBIAAABQgRAUgYAAIgBAAgAD+gjIADADIAAAEQABARAGALIAAALQgJgcgBgSgAhyAFIACADIgDABIABgEgAitABQgFgBgGgBQAEgIAMgCIAAADIgCANIgDgEgABWgBIACACQgFADgGAAgAh+AAQAAgDgEgEIgEgEIAKgCIgBACIAAAIQAAADgBABgAE4AAIgBgIIAEAAIgDAIgAlUgXIgPABIABgJIAGAAIANAEQASAGAXgCQABAGgDAGQgCAHgFABQgLgXgaADgAibgEIADgNIAAgBQAEAFgGAJgAFcgIIACgBIAAACIgCgBgAhjgOQAMgGAKgHQASgMAAgGIgBgEQAJgBAEgCIAAAKIAAAFQgqAOAAAMQAAAAAAABQAAAAAAABQABAAAAAAQAAABAAAAIAAAAIgKABgAEogIQgEgQgBgSQAGARABARgABugJQABgEAIgHIAEAEIgNAIgADjgKIABgGIAAAGIgBAAgAEwguIAJAAQgHADAAAFQAAAEACACIAGAIIgFAAQgCgPgDgHgAkTgaQACgEAKgFQAKgEAFACIgBABQgDADgKAEIgQAFgAiJgaQAcgOAPgCQgIADgEAFIgEAIgAgQghIACgCIATgGIAWgFIgEAIQgNAEgNACIgKABIgDgCgAk3gkQgMgBgKgEQAHgBAEgCIACgEIAEAAQAJAAAKgFIAKgGQAAgIAAgBQAlgBAIgCIAAAAQgJAGgQAPIgWATQgCgEgUgBgABSg+QAEABAEADIABADQADAFAFADIAFAGQgFAGgIADIgJgegAA6ggQACgFgFgDIAQgMIABABIADATgAFegqQABgOAEgJIgCAfQgDgEAAgEgAD+goIAAgIIACALIgCACIAAgFgAiGg3QAAgBABAAQAAAAAAAAQABAAAAAAQAAAAAAABQgBABgUAKQAEgEAPgHgAApgyIALgDIgBABIgMAHIACgFgAEPhBIAIAAIAAADQgCAGgEAFIgCgOgAi2g2QAAAAAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAQAQgGAfgVQAYgRAIgJIABADQABAHACADQgZAJgbARQgPAJgLAIIgGgCgAgBg5IgEgBIgUAAIgCAAQgBgHACgEQAXgEAUgTIARgNIAAAFQgFADAAACQAAAEACACIADAAIAAAJIgDAUIgfAHQAAAAAAgBQAAgBAAAAQAAgBAAAAQgBgBAAAAgAAwhfIASgKIAAACIgKAiIADAEIgPADIAEghgAFChHQATAAADAAIgGAHIgSABQACgFAAgDgAhEhAIABgBIAFgEIACAGgAlPhGIgFgDQAEADAGABIgFgBgAgxhHIgBgIIAEgDIgBALgABQhMIgBgOIAGgaIAFgCIAFAEIACAEQgFACgEAJQgEALAAALIAAADIgEgCgAEvhPIADgBIALgIIAbABQgdABgBAIQgEgBgHAAgAjhhUQAHgBAGAGIgPABQACgDAAgDgAlLhSIACAAIADABIgCABIgDgCgAEOhWIAKAAQAEAAAGgFQAEgDAMgBIgBABIgbAKIgIADIAAgFgADXhjIABgEIAGgJIgBAeIgGgRgADwhjIACACIgBALIgBgNgAknhXIgBgBQACgHgCgEIgBgBQAGgBAPAJIgBACQgFAEgFAAIgIgBgAhFhXIAEgBIAAACIgEgBgACFhnIACAEIgLAIIAJgMgAiHhyIABAAIgMANQgKAJgDABQAIgHAQgQgAjPhhIgDgHIAGgBIgBAOQgCgCAAgEgAhXiIQABgcgBgMQAKAVAHAqIABAKIgOAEQgEgPAAgWgAkDhjQgHgJgKgHQgPgKgRgCIgLgWIAEgFIABACQAFAMAJAFIAFgCIABgGIgFgOQgEgHgBgEQACAEAGAFQAGAHAFABIAFgBIABgHIgEgLIADACQABACAEAAQAGAAgBgCQABACAAgHQAAgFgDgNIAFAIQAMATABAMQABAIgBAUQABARAPAIgAFhhlIADgDIAAAFIgDgCgAFGhoIgFgEIAVABIgIAGIgFAAIgDgDgAg2ibQAJAKACAOIAAAPIAAAKIgJABQgCgYAAgagACRhtIgCgGQAdgegBgIQAAgEgBgCIgDgCIAFgDIAFALIgBAEQAAAMAHAIQgWAUgNACgAlMhrIgBAAIABgCIAGgFQAGAFAGACgAEjh0QgIgIAAgHIADgKQADADAHAAQAFAAAIgFQALgGATgDIgEAEQgDACgNAFQgKAEgFAGQABAEAGACIAVAAIgBABQgBACgJABIgKABIgCACIAAADQAAAFACABIAEABIAGAAIgJABQgMAAgJgJgAAxhxIAEgBIgEAFIAAgEgAB6iBIADAEQADAEAAAEQAAAGgGABgAAIiLQAJgQALgKQAFAGAAAFQAAAJgQANIgYAWIAPgdgAAXhzQAEgDAGgIIABgCIAAAEIgLAKgAjYiFQAHgDAGgIIAFgHIgBARQgFARgMACgABqh+IAAAAIACgBIABACIAAAJQgCgHgBgDgAD1h0QgDgCAAgGQAAgBAAgBQAAgBAAAAQAAgBABAAQAAAAAAAAIACAAQABABAAALgAlNh8IABACIgFAFIAEgHgAgRh4QAJg1gBgYIAdAAIAEASQAAAEgOASQgKASgRAUgAA+h8IAIgDQgCACgDABIgCABIgBgBgAFXiLQAHgEADgGIACAXQgFgKgHgDgAiLiAIALgOIABgBIAAACIAEAIIgQAHgAEDiEIACgBIAAAFIgCABgACGiFQgCgBAAgEQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABAAIABAAQAKgEACACQAAAAABABQAAAAAAAAQAAABABABQAAAAAAABIgGAGIgHAFIgCgEgABZiLIAIgEIgIAEgADviQQAAgEADgHIAEgGQgBAHgFAKgAhkiSQgIgQAAgFQAAgEAMgaQgDAPAAAkgAEfiVQABgRgJAAIgHABIABgIIAFAAIAPgDIALgBQgBAAAAABQgBAAAAABQAAAAAAABQAAABAAABQAAABAAABQAAABAAABQAAAAAAAAQAAAAAAgBQACAEAQAAIgEAEIgVAJIgIAEgAEDibIADgGQAAAGgDAEgAjYiXQAAgEgEgMIgDgNQAAgEACgDIAEgEQAEgBAAAIIgCAhgACNifQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAABQgBAAAAAAQgBABAAAAQgBABgBAAIgGACgABZigIAHgFIACAFIgJAGIAAgGgAiti8QgBgJAAggQACAFAGAJQAIAJADAAQAGAAgBgCIABgHQAAgFgJgRQgFgKgCgGIADgCIABgQIADAAIAHACIABACQgCAYAEAVQAGAagBAOIgBAHQAAAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAAAIgEgBQgIAHgGAMQgHgNgCgQgAhEihQgEgIAAgGQAAgdAOABQAOABAAAdIgBAFIgBAAQgEgHgFgFQgHACgCAHIgDAKgADbimIgDgEQgBgEALgRIAMgSIABgBQgDAIgIAkQgEAAgBACIgBAAIAAABIgDgDgAFVinQAEgCgDgJIAGAMIgHgBgAC9isIAAgIIADAAQABAAAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAFgCACIgBACIgCgEgABsioIgLgQQgGgKgBgDQAFgJABgCQgBgEgQgFIgBgBIgEAAIgGgCIAfgIQAAALADASIAHAfgAjVjRIAAgBIACgQQAHAEAEgDIABgIQAAgDgFgIQgFgHAAgDIABgFIAGAOQAGAMAGAAIAEAAIgBAEQgBAZABAdQgOgegMgEgACEiyIAAgTQADAKAAAJgAEPi5IAAgCIABgBQAEgBADgDQAFgEAYgBIgGADIgUAFQgGACgFADIAAgBgAkGjKIABABQAKANADAAQAHAAgBgCIgCgQIAEADQAEADADAAIAEgBIACgCIABgDQgIgTAAgEIABgHIAEgFIgBARQAAAIAJAGQgDACgCADQgCAIgCABQgFAHgGABIgLAAIgKgOgAC/jcQABgSgGAAQgFAAgBABIgBABQAAAGgCAHIgGAKIgCgBIACgrQAEgDAFgKQAFgLAGgCIABAJQABAGAFAFQAGgBALgIIABABIgFAIQgEAIgBAEIABAHIAJABQAGAAAJgGIAAACIgDAIQABAFAEACIgDAFIgHAOIAAAAIADgOQACgJgHgFQgHAIgGASIgJAaQgKgIACgXgAAijFIAUAAIAAAEIgSAEQgCgDAAgFgAFFjCIAEgDIAEAHQgDgDgFgBgABCi/IAAgGIAEAAQgBAFgCACgAB2jMIgEgOQgEgJABgGIABAAIAHALIAAASgAEUjWQAGgEAFABIAAABIgLAHIAAgFgAEqjUIABgBIAEgFIAKAHgAAgjUQAAAAAAAAQAAgBABAAQAAAAABAAQAAgBABAAIADACgAhWjVIAAgBIgBgCIAIABIAAACgAg1jrIAKAAIgJACgACAjxIgkg2IgGgKIAFgNIgBALQABAJAHAAQABAAABAAQAAAAABABQAAAAAAABQAAAAAAABQABAEAGADQAGgCADgMQADgKAKgDIACABIAAAKIgEAFQgCADAAADQAAAFACABIAFABQADAAAJgKIABACQABACgBAKQAAAJAHADIADgDIAAAeQgBgHgHgBQgEABgBABIgBABQAAAMgBACIgNgHgAhbj1IAMgCIAAAEQAAABgMAHgAD5jtIABgBIgBACgAi/kCIAAgNIAAAAIAEAKIAFAEIgDAPgABWj6QgEgEgMAAIAIgDQAIgBADAEIAIAGQgEABgGAAQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAgAD0j7IABgEIAEACIgFACgABdkMIACgBIADAJQgFgFAAgDgADhkGIACgDIACABIgEADgAhekxIgDgMIADAAIACAMQACASAIAJIACgBQABAGgBAFIgLAAQgBgYgCgNgAhDkRIAAgBIAAgOIAFACIAEgBIADghIABAAIAAANQABAOAKAAQAHAAAAgDIAAgWQACAFgBARIAAACQgDAEgBAKQgBAHgWABIgFgBgAgWk0QANABABgIIAAgHIAIAAIAAAFQAAAKAGACIAFgDQgCAKAAASIggACIABgegAh4kWIgCgLIgBgFIABgUQADAFADAMQgEAMABAHgAi3kcIgBgBIAFgCIgBAJIgDgGgABakYIgTgSIAAgMIACAAIAAACQAAAFAHACIACAAQAFAHAEAOIgBAAgAiTkoQgEgFgFgDIAIgFQAEgCAFgCIgBAFIAAAcQgBgHgGgJgAAZkZIgBgNIACANIgBAAgAAnkaIgEgMQAGgFABgJIAAgFIAFAIIgCACQgDAKgDALgAA6kjIAFAGIgDACIgGAAIAEgIgAihkeIAAgEIADAFIgDgBgACpkhIACgBIgCADIAAgCgACfktIABAAIgBABgABok2IAAgMIADAAQgBAIgBAEgAALlCIAEACQgCAEgCAFg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-35.6,-32.3,71.2,64.6);


(lib.e = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2).p("AB2APIjsAAQgGAAgEgFQgFgEAAgGQAAgFAFgEQAEgFAGAAIDsAAQAGAAAFAFQAFAEAAAFQAAAGgFAEQgFAFgGAAg");
	this.shape.setTransform(0,-2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah1APQgHAAgEgFQgEgEgBgGQABgFAEgEQAEgFAHAAIDrAAQAHAAAEAFQAEAEABAFQgBAGgEAEQgEAFgHAAg");
	this.shape_1.setTransform(0,-2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgnAPIgTgDIgPgGQgJgEgDgCIgIgIIgGgIIAIAGIAJADIAMAEIAPACIARABIASAAIBXgLIAggFIgIAFQgKAGgLAEIghAKIglAHg");
	this.shape_2.setTransform(1.1,1.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag9AIQgdgHgJgMIDGAAQhKAXgwAAQgVAAgRgEg");
	this.shape_3.setTransform(1.1,1.5);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.4,-4.6,28.8,8.2);


(lib.crownai = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3).p("AgXgIQAEgKAKgEQAJgEAJADQAKAEAFAKQAEAJgEAJQgEAKgKAFQgKAEgIgEQgKgEgEgKQgFgKAEgIg");
	this.shape.setTransform(53.9,69.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIAYQgKgEgEgKQgFgKAEgIQAEgKAKgEQAJgEAJADQAKAEAFAKQAEAJgEAJQgEAKgKAFQgFACgFAAQgDAAgFgCg");
	this.shape_1.setTransform(53.9,69.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3).p("AgXgIQAEgKAKgEQAJgEAJADQAKAEAFAKQAEAJgEAJQgEAKgKAFQgKAEgIgEQgKgEgEgKQgFgKAEgIg");
	this.shape_2.setTransform(25.3,57.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgIAYQgKgEgEgKQgFgKAEgIQAEgKAKgEQAJgEAJADQAKAEAFAKQAEAJgEAJQgEAKgKAFQgFACgFAAQgDAAgFgCg");
	this.shape_3.setTransform(25.3,57.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(3).p("AgWgIQAEgKAJgEQAJgEAJAEQAKADAFAKQAEAJgEAJQgEAKgKAEQgKAFgIgFQgKgDgEgKQgFgKAFgIg");
	this.shape_4.setTransform(4.1,34.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIAXQgKgDgEgKQgEgKAEgIQADgKAKgFQAJgDAJADQAKAEAEAKQAFAJgFAJQgDAKgKAEQgFADgFAAQgDAAgFgDg");
	this.shape_5.setTransform(4.1,34.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(3).p("AgXgIQAEgKAKgEQAJgEAJAEQAKAEAEAJQAFAJgEAJQgEAKgKAFQgKAEgIgEQgKgEgEgKQgFgKAEgIg");
	this.shape_6.setTransform(9.1,19.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIAXQgKgDgEgKQgFgKAEgIQAEgKAKgEQAJgFAJAFQAKADAEAKQAFAJgEAJQgEAKgKAEQgFACgFAAQgDAAgFgCg");
	this.shape_7.setTransform(9.1,19.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(3).p("AgXgIQAEgKAKgFQAJgEAJAEQAKAEAEAKQAFAJgEAJQgEAKgKAEQgKAFgIgEQgKgEgFgKQgEgKAEgIg");
	this.shape_8.setTransform(36.1,39.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgIAYQgKgEgFgKQgEgKAEgIQAEgKAKgFQAJgEAJAEQAKAEAEAKQAFAJgEAJQgEAKgKAEQgFADgFAAQgDAAgFgCg");
	this.shape_9.setTransform(36.1,39.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(3).p("AgXgIQAEgKAKgEQAJgEAJADQAKAEAFAKQAEAJgEAJQgEAKgKAFQgKAEgIgEQgKgEgEgKQgFgKAEgIg");
	this.shape_10.setTransform(62.9,54.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgIAYQgKgEgEgKQgFgKAEgIQAEgKAKgEQAJgEAJADQAKAEAFAKQAEAJgEAJQgEAKgKAFQgFACgFAAQgDAAgFgCg");
	this.shape_11.setTransform(62.9,54.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(3).p("AgegrIA0gEIAfAsIgXAvIgzAEIgfgsg");
	this.shape_12.setTransform(47.8,20.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag0AEIAWgvIA0gEIAfAsIgXAvIgzAEg");
	this.shape_13.setTransform(47.8,20.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(3).p("ACeCCQgLg1gwg0QhfhmixAHIAHgYQAOgZArACIAhAFQApAJAlASQB7A3A1BxIgBANQgEAQgPASg");
	this.shape_14.setTransform(52.2,13.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("ABhATQhfhmixAHIAHgYQAOgZArACIAhAFQApAJAlASQB7A3A1BxIgBANQgEAQgPASQgLg1gwg0g");
	this.shape_15.setTransform(52.5,14);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(3).p("AEhg6QgPA6gOA+QgdCAAEAjIgQAHQgUglgTguQgmhaAEgpIiWBLIgNgKQgFgkgEgqQgGhTAKgbQgqAUg1ALQhpAXg0goQA6gaA6geQB0g9ACgYIAhgDQAoAAApAKQCEAiBTCFg");
	this.shape_16.setTransform(39,28.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8C6239").s().p("ACtCXQgmhaAEgpIiWBLIgNgKQgFgkgEgqQgGhTAKgbQgqAUg1ALQhpAXg0goQA6gaA6geQB0g9ACgYIAhgDQAoAAApAKQCEAiBTCFQgPA4gOBAQgdCAAEAjIgQAHQgUglgTgug");
	this.shape_17.setTransform(39.7,28.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(3).p("AEGhhQgXA7gWA/QgrCCALAdQgVgggUgpQgqhTABgsIieB+QAKgvAIgzQAPhigMgPQghAMgtAIQhbAQg6gWIAAgPQAkgNApgbQBSg2AXhCQA3ghBDAFQCNAIBOC5g");
	this.shape_18.setTransform(32.7,44.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F7931E").s().p("ACQClQgqhTABguIieCAQAKgvAHgzQAQhigMgPQgiAMgtAIQhaAQg6gWIAAgPQAkgNApgbQBSg2AXhCQA2ghBFAFQCMAIBOC5QgXA5gWBBQgrCCALAdQgVgggUgpg");
	this.shape_19.setTransform(32.7,39.2);

	this.addChild(this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,71.6,75.2);


(lib.close = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2).p("Ag3AAIBvAB");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.7,-1.1,13.4,2.3);


(lib.clives = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AALAWIgHgCQgEgDgBgEIgGgJQgEgIgBgJIAAgJIAFAIIAPAeIACADIACACIABABg");
	this.shape.setTransform(36.6,33.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9F0F44").s().p("AgEAAIgIgWIAZAsQgJgCgIgUg");
	this.shape_1.setTransform(36.6,33.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AADgOIADgHIADAIQABAKgDAFQgDAMgFAEQgCADgDAAIgCABg");
	this.shape_2.setTransform(59.9,29.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9F0F44").s().p("AAIgVIgCASQgFASgIAHg");
	this.shape_3.setTransform(59.7,29.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhpnGIAMAmIAfBmQAMAoAcBoQAWBXATBQIAmClQALAvAFAfQAJApAEAdQAIApACASIAKBWg");
	this.shape_4.setTransform(89.9,178.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AASHRQgGhDgDgwQgGhPgDhUIgPl0IgEijIgCifIANCeIAZIXIAECjIABB0IAAArg");
	this.shape_5.setTransform(57.9,184.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhOHfIAAgfIAEgxQADgjAEgdIAJhLIAMhTIAukOIAOhYIAgidIAiiYIgXCaQgNBXgNBGIhuKeg");
	this.shape_6.setTransform(27.2,180.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").p("AlxnKIi6KqIAEAVQAGAZAPAWQAwBGByAPIAlAUQAuAWAxAPQCeAuB+g1IAmAHQAwAHAxgDQCdgLBohqIAZABQAkgJAzgyQgiiognirQhPlbgggdQgMAMgTAHQglAOgegbQgbAXguANQhcAahig0QgpAPg0AGQhqALgyguQgYALgcAEQg4AJgXggg");
	this.shape_7.setTransform(56.1,192.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9F0F44").s().p("AjsG0QgxgPgugWIglgUQhygPgwhGQgPgWgGgZIgEgVIC6qqQAXAgA4gJQAcgEAYgLQAyAuBqgLQA0gGApgPQBiA0BcgaQAugNAbgXQAeAbAlgOQATgHAMgMQAgAdBPFbQAnCrAiCoQgzAygkAJIgZgBQhoBqidALQgxADgwgHIgmgHQhDAchNAAQhDAAhJgVg");
	this.shape_8.setTransform(56.1,192.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").p("AiWjoIgeAgQgjAoggAuQhmCSgVCTIAgAOQArALA4gRIANAJQATAKAYAFQBQATBxgdIAXAKQAdALAfAFQBjAQBRg0IAkAMQAoAGAWgYQgZhNguhbQhbi0hnhDQgsANg3AHQhrAMgygig");
	this.shape_9.setTransform(56.2,128.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E5729C").s().p("ABdDkQgfgFgdgLIgXgKQhxAdhQgTQgYgFgTgKIgNgJQg4ARgrgLIgggOQAViTBmiSQAgguAjgoIAeggQAyAiBrgMQA3gHAsgNQBnBDBbC0QAuBbAZBNQgWAYgogGIgkgMQg+AohJAAQgWAAgXgEg");
	this.shape_10.setTransform(56.2,128.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").p("AhugtQgHgDgJAiQgIAgAKAIIBYASQBjAKBCgjQADgIgBgLQgDgXgUgSQgkAGguADQhZAFgvgSg");
	this.shape_11.setTransform(54,103.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D4145A").s().p("AgkAsIhYgSQgKgIAIggQAJgiAHADQAvASBZgFQAugDAkgGQAUASADAXQABALgDAIQg0AbhIAAQgTAAgWgCg");
	this.shape_12.setTransform(54,103.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").p("AC0AMIAABEQgFBFgaAGQgCAIgWgIQgugOhmhLIhRhRIgJhAIgSgFIgwARQgBgIAHgIQAQgQAqgDIAmAOQgDgMgJgLQgTgUgdAKIgIAIQgIAJAFACQgDADgFgDQgKgHASgUIAKgJQAAgFADgFQAHgKASAAIAvAiQAsArgVAxIBuA6IAXgNQAigKA1AJg");
	this.shape_13.setTransform(62.6,87.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C69C6D").s().p("AB9CbQgugOhmhLIhRhRIgJhAIgSgFIgwARQgBgIAHgIQAQgQAqgDIAmAOQgDgMgJgLQgTgUgdAKIgIAIQgIAJAFACQgDADgFgDQgKgHASgUIAKgJQAAgFADgFQAHgKASAAIAvAiQAsArgVAxIBuA6IAXgNQAigKA1AJIAABEQgFBFgaAGQgBAEgGAAQgGAAgLgEg");
	this.shape_14.setTransform(62.6,87.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").p("AgEg5IgbANQgWAYASAvQASAyAfgeIAegpQgFgOgIgQQgRgggSgBg");
	this.shape_15.setTransform(51.7,78.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C69C6D").s().p("AgjAbQgSgvAWgYIAbgNQASABARAgQAJAQAEAOIgdApQgNALgJAAQgRAAgLgfg");
	this.shape_16.setTransform(51.7,78.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").p("AAoAbIhPg1");
	this.shape_17.setTransform(73.7,92.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").p("AgnAVIBPgp");
	this.shape_18.setTransform(33.3,91.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").p("AB8gvIglA0Qg3BBhcAyQgVABgSgIQgkgSATgwIAhhVIAhABQAkAFAMAXIA8goQADgBACgEQAGgHgBgOQgDgHAEgJQAGgSAdgKIAQAQg");
	this.shape_19.setTransform(38.9,90.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C69C6D").s().p("AhjBwQgkgRATgwIAhhVIAhAAQAkAGAMAXIA8gpQADgBACgDQAGgIgBgNQgDgHAEgJQAGgTAdgJIAQAPIAEA4IglA1Qg3BAhcAzIgEAAQgTAAgQgIg");
	this.shape_20.setTransform(38.9,90.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").p("AgPhyQgiAFgeATQg8AlAYBDIACAPQAEASAIANQAYApAzgWQARgGATgRQAnAVAIAAIAEAnQASgIARgPQAhgfgHgnQgHgngWgmQgqhLhCAPg");
	this.shape_21.setTransform(74.5,78.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF7BAC").s().p("AA5BOQgIAAgngVQgTARgRAGQgzAWgYgpQgIgNgEgSIgCgPQgYhDA8glQAegTAigFQBCgPAqBLQAWAmAHAnQAHAnghAfQgRAPgSAIg");
	this.shape_22.setTransform(74.5,78.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").p("AhNBdQgRgXgEgiQgIhBA+gyIAzgPQA7gJAhAkIhOCJQgOADgPAAQghAAgPgLg");
	this.shape_23.setTransform(37.1,78.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF7BAC").s().p("AhhAmQgIhBA9gyIAzgPQA7gJAhAkIhNCJQgOADgPAAQgiAAgOgLIgWAfQgQgXgEgig");
	this.shape_24.setTransform(37.1,78.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").p("Agxh3QgIgIgEgIQgIgRAUADIANgIQAQgDAQASIASgPQAYgLAQAQIAPgHQARgFAIAGIAXgKIABBRQAFBXAZAlIAEAZIgpADQgBBUgGAFQgjALguAFQhYAJgxgdIgGhJQgQgNgJgWQgTgqAggpIA8hOg");
	this.shape_25.setTransform(54.4,83.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#ED1E79").s().p("AhyCVIgGhJQgQgOgJgWQgTgqAhgpIA8hNIAXAAQgIgJgFgIQgIgQAVACIANgHQAQgEAPASIATgOQAXgLAQAPIAPgGQARgGAJAGIAXgKIAABRQAFBZAaAjIAEAZIgpAEQgCBTgGAGQgjAKgtAFQgWADgSAAQg8AAgmgWg");
	this.shape_26.setTransform(54.3,83.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").p("AATAFQgFASgJALQgIAMgIgDQgIgCgCgOQgCgPAFgQQAFgSAJgLQAIgMAIADQAIACACAOQACAPgFAQg");
	this.shape_27.setTransform(70.5,56.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0000FF").s().p("AgLArQgIgCgCgOQgCgPAFgQQAFgSAKgLQAGgMAJADQAIACACAOQACAPgFAQQgFASgJALQgGAKgHAAIgDgBg");
	this.shape_28.setTransform(70.5,56.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").p("AASgGQAHAPAAAPQgBAOgIAEQgHADgJgKQgKgLgHgRQgHgPAAgPQABgPAIgDQAIgDAIAKQALALAGARg");
	this.shape_29.setTransform(37.3,60.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0000FF").s().p("AAAAjQgKgLgHgRQgHgPAAgPQABgPAIgDQAIgDAIAKQALALAGARQAHAPAAAPQgBAOgIAEIgDAAQgHAAgGgHg");
	this.shape_30.setTransform(37.3,60.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").p("AgGgvIgKBaIAQgLQARgRAAgWQACgHgDgJQgFgRgRgHg");
	this.shape_31.setTransform(71.7,48.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#A67C52").s().p("AgGgtQARAHAFASQACAJgBAHQAAAWgRAQIgQAMg");
	this.shape_32.setTransform(71.8,47.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").p("AgMgmIgJAdQgBAgAnAWg");
	this.shape_33.setTransform(35.2,54);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#A67C52").s().p("AgSgLIAJgeIAdBTQgngWABgfg");
	this.shape_34.setTransform(35,54.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").p("AghgDIAYACQAYgBAQgOIgGAXQgIAYgNgFQgFACgJgDQgRgHgGgVg");
	this.shape_35.setTransform(53.4,60.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#ED1E79").s().p("AAFAVQgFACgIgDQgRgHgGgVIAXACQAZgBAPgOIgFAXQgHAUgLAAIgEgBg");
	this.shape_36.setTransform(53.2,60.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").p("AgeALQAFgLAKgGQATgOAZATg");
	this.shape_37.setTransform(52.9,57.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#ED1E79").s().p("AgOgFQATgOAZATIg7AMQAFgLAKgGg");
	this.shape_38.setTransform(52.8,57.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgQAAIAHgDIAJgCQADgBAEABIAIADQAEACADABIgIAAIgcAEIgHABQABgDAEgDg");
	this.shape_39.setTransform(52,53.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgEAMQgDgEgBgHQgBgEACgFQABgFAEgBQADAAADAEQAEAEABAGQABAEgCAFQgCAFgEABIgCAAQgBAAgDgDg");
	this.shape_40.setTransform(59.2,44.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").p("AALgBQACAJgCAIQgCAIgFABQgEABgEgHQgEgHgCgLQgCgIACgIQACgIAFgBQADgBAFAHQAEAHACAKg");
	this.shape_41.setTransform(59.7,46.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgDATQgFgHgCgLQgCgIACgIQACgIAFgBQADgBAFAHQAEAHACAKQACAJgCAIQgCAIgFABIgBAAQgDAAgDgGg");
	this.shape_42.setTransform(59.7,46.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").p("AAZgEQADANgFANQgFAMgLACQgIADgKgJQgKgJgDgQQgEgNAGgMQAFgNAKgCQAJgCAKAJQAJAJAEAPg");
	this.shape_43.setTransform(59.2,45.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgLAeQgJgJgEgQQgEgNAGgMQAFgNALgCQAIgCAKAJQAJAJAEAPQADANgFANQgFAMgKACIgFABQgGAAgIgHg");
	this.shape_44.setTransform(59.2,45.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").p("AApAEQgCATgOAMQgOAMgPgDQgSgCgKgPQgLgOACgRQADgTAOgLQAOgMAPACQARADALAOQALAPgDAQg");
	this.shape_45.setTransform(59,44.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgEAsQgSgCgKgPQgLgOACgRQADgTAOgLQAOgMAPACQARADALAOQALAPgDAQQgCATgOAMQgLAKgOAAIgEgBg");
	this.shape_46.setTransform(59,44.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgBAMQgEgDgDgGQgCgEABgFQABgFADgCQAEgBACADQAFADACAGQADAEgBAFQgBAFgEACIgCAAQgDAAgBgCg");
	this.shape_47.setTransform(43.6,47.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").p("AAKgDQAEAIAAAIQAAAJgFABQgEADgFgGQgFgGgEgKQgEgIAAgIQAAgIAFgCQAEgDAEAGQAGAGAEAKg");
	this.shape_48.setTransform(44.5,49.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAAATQgFgFgEgKQgEgIAAgIQAAgIAFgDQAEgCAEAHQAGAFAEAKQAEAIAAAJQAAAIgFACIgCAAQgEAAgDgFg");
	this.shape_49.setTransform(44.5,49.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").p("AAXgJQAHAMgCANQgDANgKAFQgJAEgKgHQgLgHgHgOQgHgMADgNQACgOAKgEQAKgEAJAHQAMAHAGAOg");
	this.shape_50.setTransform(43.8,48.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgEAfQgLgHgHgOQgHgMADgNQACgOAKgEQAKgEAJAHQAMAHAGAOQAHAMgCANQgDANgKAFQgEACgEAAQgGAAgFgFg");
	this.shape_51.setTransform(43.8,48.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").p("AAoAZQAAASgEACQgCABgYAAQgTAAgPgNQgPgOAAgTQAAgRAPgOQAPgOATAAQAeAAAABGg");
	this.shape_52.setTransform(42.6,47.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgYAgQgPgNAAgTQAAgRAPgOQAPgOATAAQAeAAAABFQAAASgFADQgBABgYAAQgTAAgPgOg");
	this.shape_53.setTransform(42.6,47.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(2).p("AiKh/IgFAqQgGAsgKAHIAEAtQAPA9A1BAIATAQQAYASAaAHQBRAVBIhfQAJgqAIgtQAOhWgKgNQgOgLgSgQQgkgggTgdQgQAYgUAXQgoAtgZgEQgTgDgXgHQgtgNgTgVg");
	this.shape_54.setTransform(52,48.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#C69C6D").s().p("AgSCsQgagHgYgRIgTgQQg1hBgPg8IgEguQAKgGAGgsIAFgrQATAVAtAOQAXAHATACQAZAFAoguQAUgWAQgYQATAdAkAgIAgAaQAKANgOBXQgIAsgJAqQg7BOhDAAQgMAAgPgEg");
	this.shape_55.setTransform(52,49.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").p("AAwgvIAGBgIhrgGIAMhJg");
	this.shape_56.setTransform(55.5,62.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#8C6239").s().p("Ag1ArIAMhKIBZgRIAGBhg");
	this.shape_57.setTransform(55.5,62.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").p("Ag8AFIAhADQAhAHAOATIAmghIg2giIg6gCg");
	this.shape_58.setTransform(36.5,86.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF7BAC").s().p("AgaAJIgggDIAFgoIA6ACIA2AiIgmAhQgNgTgigHg");
	this.shape_59.setTransform(36.4,86.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").p("Ag3gPIADAoIAogKQAqgIAZAQIgIgyg");
	this.shape_60.setTransform(75.1,86.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#D4145A").s().p("Ag2gOIBlgMIAIAzQgYgQgrAHIgnALg");
	this.shape_61.setTransform(75.1,86);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").p("AiVhkIgVAiQgUAlACAUIAMAUQARAaAUAWQBCBGBSABQAigPAngYQBPgvAcgqIgEhoIgugbg");
	this.shape_62.setTransform(52.4,53.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#BC842C").s().p("AiLA7QgUgWgRgaIgMgUQgCgUAUglIAVgiIEggdIAuAbIAEBoQgcAqhPAvQgnAYgiAPQhSgBhChGg");
	this.shape_63.setTransform(52.4,53.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(2).p("AhdnWQgegOgkACQhJADgfBLQgOARgRASQgiAkgPACIAEATQAIATATADIgMAOQgPAOgTAAIgCAKQAAAMAEAMQAOAmA6AVIgUAcQgWAlgOApQgrCCA9CCIANApQAGAmglgOIgDAiQAIAgAzgEIACAVQgGAUglgIIAEAKQAFALAHAHQAZAUAqgjIABAYQAEAcARAYQA2BLCegHIAeACQAoAAAkgIQBygYAehYIAegIQAhgMAJgYQgkgKADgNQASgEAQgKQAhgTgIgdQgNAGgMgCQgWgEALgnQAshEAKhhQAVi/ioiNIAgghQAdgngJgiQg7gFgQgKIAPgKQANgOgFgXQgZgCglgJQhJgTg1gnQgagJgdABQg6AAgDAsg");
	this.shape_64.setTransform(55.7,65.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F15A24").s().p("AgIICQieAHg2hLQgRgYgEgcIgBgYQgqAjgZgUQgHgHgFgLIgEgKQAlAIAGgUIgCgVQgzAEgIggIADgiQAlAOgGgmIgNgpQg9iCAriCQAOgpAWglIAUgcQg6gVgOgmQgEgMAAgMIACgKQATAAAPgOIAMgOQgTgDgIgTIgEgTQAPgCAigkQARgSAOgRQAfhLBJgDQAkgCAeAOQADgsA6AAQAdgBAaAJQA1AnBJATQAlAJAZACQAFAXgNAOIgPAKQAQAKA7AFQAJAigdAnIggAhQCoCNgVC/QgKBhgsBEQgLAnAWAEQAMACANgGQAIAdghATQgQAKgSAEQgDANAkAKQgJAYghAMIgeAIQgeBYhyAYQgkAIgoAAg");
	this.shape_65.setTransform(55.7,65.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(2).p("AibgRQApBZAHAnQABAFAAAGQgCASBggVQAugLAwgOQgCglAAgmQgBhLAIgIQgNANgNAPQgbAeACAMQhOg+gNgDIguBeQAAgFgHgKQgNgTgigSg");
	this.shape_66.setTransform(49.3,7.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FBB03B").s().p("AhIBaIgBgLQgGgogqhZQAiAVAOATQAGAJAAADIAvhdQAMACBOBBQgBgPAageQANgPAOgMQgIAIAABMQABAlACAkQgwAOgwALQgzALgXAAQgTAAAAgHg");
	this.shape_67.setTransform(45.9,10.5);

	this.addChild(this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.5,-6.8,113.3,245.7);


(lib.clicked3_mc = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("1. PRESS THE LEFT ARROW TO GO TO NEXT PAGE\n2. PRESS THE RIGHT ARROW TO GO TO PREVIOUS PAGE", "bold 16px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 18;
	this.text.lineWidth = 459;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,463,57.1);


(lib.cl = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("WELCOME PRESS START TO CONTINUE", "bold 15px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 17;
	this.text.lineWidth = 311;
	this.text.setTransform(-155.1,-10.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#996666").s().rr(-212.75,-10.75,425.5,21.5,10.75);

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-212.7,-10.7,425.5,21.5);


(lib.catherine = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABpEzIgFgjIgIgtIgMg1IgPg6IgSg9IgVg9IgWg/IgWg8IgXg3IgVgyIghhKIgOgcIAFAHIAMATIAoBHIAZAwQAMAYAOAfIAXA8IAXA/IAUA+QAMAqAFAUQAJAkADAYQAHAnACAPIAHBvg");
	this.shape.setTransform(100.9,162.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiVFXIgCgZIABgnIAFgyQAKg4AVhBIAZhDIAehBIAihAIAhg+IBFhoQAWgfAggoIAVgaIgSAcIgvBLQgpBDgWAoQgMAUgUAqQgRAfgQAhQgPAdgPAjQgQAmgKAaQgZBDgLA0IgGAZIgEAXQgDASgBAUIgCAig");
	this.shape_1.setTransform(53.9,162.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2).p("AgInWQgrgthWAKQisASjVELIiED+QiAENAWBDIASAaQAYAWAbgNIARAVQAXASAdgNIAaARQAdANATgWIgBATQAKAPAzgQIATAbQAZATAmgmIAPARQAUANAWgRIAaAMQAfAHAZgTIAOASQATAMAbgeIAXANQAcAJAbgWIAQAUQAWAPAbgWIAcAOQAdAKADgTIAgAKQAkAGAIgQIAXgCQAZgDAIgIIAkAQQAnAMAQgYIAnAPQArAJANghIAYAHQAdACAZgWIAQAMQAXAFAegeIARANQAWAHAVgYIAfAHQAeADAAgTIAegIQAhgLAKgTIAXANQAYAEAFgrIAZgCQAagJAGghQhGjYh2jSQjsmojuASQgIgGgTAAQgkABgvAkg");
	this.shape_2.setTransform(77.5,165.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#93278F").s().p("AgkH5IgcgOQgbAWgWgPIgQgUQgbAWgcgJIgXgNQgbAegTgMIgOgSQgZATgfgHIgagMQgWARgUgNIgPgRQgmAmgZgTIgTgbQgzAQgKgPIABgTQgTAWgdgNIgagRQgdANgXgSIgRgVQgbANgYgWIgSgaQgWhDCAkNICEj+QDVkLCsgSQBWgKArAtQAvgkAkgBQATAAAIAGQDugSDsGoQB2DSBGDYQgGAhgaAJIgZACQgFArgYgEIgXgNQgKATghALIgeAIQAAATgegDIgfgHQgVAYgWgHIgRgNQgeAegXgFIgQgMQgZAWgdgCIgYgHQgNAhgrgJIgngPQgQAYgngMIgkgQQgIAIgZADIgXACQgIAQgkgGIgggKQgCAMgNAAQgHAAgKgDg");
	this.shape_3.setTransform(77.5,165.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2).p("AAyAIQgGAogUAaQgUAZgTgDQgVgEgKgeQgKgfAGgmQAHgoAUgZQATgaAUAEQAVAEAKAeQAKAfgHAlg");
	this.shape_4.setTransform(89.1,94.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF66FF").s().p("AgPBfQgVgDgKgfQgKgeAGgmQAHgoAUgaQATgZAUAEQAVADAKAfQAKAegHAmQgGAogUAaQgRAWgRAAIgFgBg");
	this.shape_5.setTransform(89.1,94.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(2).p("AArgbQAWAfADAgQADAggRAMQgSAMgcgPQgbgPgWghQgXgggDggQgDggARgMQASgMAdAPQAaAPAXAig");
	this.shape_6.setTransform(61.4,94.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF66FF").s().p("AAHBNQgagPgXghQgWgggDggQgEggASgMQASgMAcAPQAbAPAWAhQAXAgAEAgQACAggRAMQgIAFgKAAQgNAAgQgIg");
	this.shape_7.setTransform(61.4,94.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(2).p("AgwiSIg4AeIAaEfIC3gFIAAktIhSgig");
	this.shape_8.setTransform(75.8,103.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#93278F").s().p("Ahoh0IA4geIBHgXIBSAiIAAEsIi3AGg");
	this.shape_9.setTransform(75.9,103.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgKAOQgFgGAAgIQAAgHAFgGQAFgGAFAAQAGAAAFAGQAFAGAAAHQAAAIgFAGQgFAGgGAAQgFAAgFgGg");
	this.shape_10.setTransform(87.4,60.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgVAmQgKgQAAgWQAAgVAKgRQAJgQAMAAQANAAAJAQQAKARAAAVQAAAWgKAQQgJARgNAAQgMAAgJgRg");
	this.shape_11.setTransform(88,62.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgKAOQgFgGAAgIQAAgHAFgGQAFgGAFAAQAGAAAFAGQAFAGAAAHQAAAIgFAGQgFAGgGAAQgFAAgFgGg");
	this.shape_12.setTransform(63.2,60.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgVAmQgKgQAAgWQAAgVAKgRQAJgQAMAAQANAAAJAQQAKARAAAVQAAAWgKAQQgJARgNAAQgMAAgJgRg");
	this.shape_13.setTransform(63.8,62.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(2).p("Ag9gVIAZAKQAgAJAhgHQAFAAALgDQAYgGgJALQgIAKgYAJQhDAcgWg9g");
	this.shape_14.setTransform(75.4,76.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAXANQgMgBgNgFIgNgEIgKgCIgEAAIgDABIgDADIgBgEQAAgCACgBQABgEADgCQAEgCAEgBQAEgCAFAAQAIAAAGADQAPAEALAJQAHAFADAGIgFAAIgJgBg");
	this.shape_15.setTransform(75,70.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAeAKIgegEIgJAAIgHAAIgIABIgHABIgKADIgFACIACgFIADgEIAFgEQABgCAGgEIAJgEIALgCIAJAAQAMACAIADIAPAHQAIAHAEAGIgRgDg");
	this.shape_16.setTransform(63.1,53.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgjAGIACgDQADgDAFgCQALgIAPABIAIABIAHADQAHACAFADQAEADACAEIACADIgDAAg");
	this.shape_17.setTransform(86.2,53.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(2).p("AjKDJQgMg7gGhBQgLiBAdgeIBCghQBGgjAYgFIhfBJIAjgGQArgJAmgNQB3gpAbhBIAZA0QAdBAASA7QA7C5hHA+QgyAPhKAHQiSAOh1gpg");
	this.shape_18.setTransform(76.5,61.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C69C6D").s().p("AjKDCQgMg8gGhBQgLiBAdgdIBCgiQBGgiAYgGIhfBKIAjgHQArgJAmgMQB3gqAbhAIAZA0QAdBAASA6QA7C5hHA+QgyAPhKAHQgmAEgiAAQhoAAhXgeg");
	this.shape_19.setTransform(76.5,61.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(2).p("AhUhTIBqBzIglBWIAcAFIAjgWIAnAWQgFgjgTgxQglhfhHhGg");
	this.shape_20.setTransform(96.3,108.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C69C6D").s().p("AAvBnIgiAWIgdgFIAlhWIhqhyIAngsQBHBGAlBfQAUAyAEAig");
	this.shape_21.setTransform(96.4,108.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(2).p("ABLiEIiECvIgbAbQgXAfAQAQIArgNIA2AeIgPhXIBqiIg");
	this.shape_22.setTransform(53,109);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C69C6D").s().p("AgvBoIgrAMQgQgPAXgfIAbgbICEiwIAWAsIhqCIIAPBXg");
	this.shape_23.setTransform(52.9,109);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").p("Ag3hOIAIBOQANBQAbAAQAKABANgJQAagRAFgxIAJhMg");
	this.shape_24.setTransform(75.2,88);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A67C52").s().p("AgHBPQgbAAgNhPIgIhPIBvAJIgJBMQgFAxgaARQgMAIgJAAIgCgBg");
	this.shape_25.setTransform(75.2,88.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(2).p("AmIgdQghhlAjheQBFi8FNAmIBCABQBQAGBAAUQDPBCgTDAIgKA0QgKA9gFA4QgPC0AwAuQhuAtigAUQk/Apj8h3QAahAARhJQAiiSgugng");
	this.shape_26.setTransform(75.3,68.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FCEE21").s().p("AmkElQAahAARhJQAhiSgtgnQghhlAiheQBGi8FNAmIBCABQBQAGBAAUQDPBCgUDAIgJA0QgKA9gGA4QgPC0AxAuQhuAtihAUQhSALhLAAQjiAAi7hZg");
	this.shape_27.setTransform(75,68.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(2).p("Aj7CyIhokTIAWgSIAnABQAmgGgIgmIAjgOIAZAYQAdAOATguIAngHIAuAWQA0AOAZgmIAnAAIAQAcQAWAUAbgjIArAJIAdAbQAfAVAOgjIAeANIASAVQAYASAbgOIAeAaIhaEXg");
	this.shape_28.setTransform(76.3,20);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF66FF").s().p("Aj7CyIhokTIAWgSIAnABQAmgGgIgmIAigNIAaAXQAdAOATguIAngHIAuAWQA0AOAZgmIAnAAIAQAcQAWAVAagkIAsAJIAdAcQAfAUAOgjIAdANIATAVQAYATAbgPIAeAaIhbEXg");
	this.shape_29.setTransform(76.3,20);

	this.addChild(this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,154.9,217.2);


(lib.cathe = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AALAjIgUgDIgVgFIgKgEQgFgCgFgDIgJgFIgIgGIgNgJIgJgMIgGgKIgEgKIARALIAMAHIAPAGIAhAKIASADIBoAIIgZANIgYAHIgTADIgKABg");
	this.shape.setTransform(25.8,100.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A0608").s().p("AgQhDQAlAzgEAuQgCAYgKAOg");
	this.shape_1.setTransform(104.4,86.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3A0608").s().p("AglBBQhMhfCHhtIgIAjQgIAqgBAnQgFB6BBApQhBgaglgxg");
	this.shape_2.setTransform(57.5,104.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Agqh8IBVDxIgdAIg");
	this.shape_3.setTransform(123.3,207);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ah3jLIDvGCIgjAUg");
	this.shape_4.setTransform(130.2,198.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Agzi5IBnFrIgdAIg");
	this.shape_5.setTransform(96.4,205.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AALAPQgFgBgJgEQgJgDgFgEQgGgDgFgEIgJgKIAlAPQANAGAMACIANACIgDABIgKADIgHAAg");
	this.shape_6.setTransform(89.1,62);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAOAgIgIgBIgGgDIgIgFIgIgGIgHgIQgDgFgBgEIgCgIIAAgJQABgGADgFIADgEIAFAPIACAFIAIAMIAOANIAGAEIAOAMIADADIgEABIgMgBg");
	this.shape_7.setTransform(72.5,57.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgIAOIgNgEIgMgGIAaABIAMgBIAMgDIAFgBIAFgEIADgEIAEgGIAAAEIAAAEIgDAFIgDAEIgGAFIgIAEIgIACIgGABg");
	this.shape_8.setTransform(113.8,72.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(2).p("ABCCbQA3gtAVgZQAlgvAAg1QAAhUg/hKQg8hIg6AAQg7AAg6BRQg7BTAABTQAAA7AgAqQAcAlAvATIANAMQALAWgEAzIBsACQgCgUABgVQAAgqAKgIg");
	this.shape_9.setTransform(63.8,103.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C1272D").s().p("AgzD0QAEgzgLgWIgNgMQgvgTgcglQgggqAAg7QAAhTA7hTQA6hRA7AAQA6AAA8BIQA/BKAABUQAAA1glAvQgVAZg3AtQgKAIAAAqQgBAVACAUg");
	this.shape_10.setTransform(63.8,103.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").p("AAPAAQAAAGgFAFQgEAEgGAAQgFAAgEgEQgFgFAAgGQAAgFAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAFg");
	this.shape_11.setTransform(125.3,49.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgKALQgEgFAAgGQAAgFAEgFQAFgEAFAAQAGAAAFAEQAEAFAAAFQAAAGgEAFQgFAEgGAAQgFAAgFgEg");
	this.shape_12.setTransform(125.3,49.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").p("AASAAQAAAHgFAFQgGAGgHAAQgGAAgFgGQgGgFAAgHQAAgGAGgFQAFgGAGAAQAHAAAGAGQAFAFAAAGg");
	this.shape_13.setTransform(107,49.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgLAMQgGgFAAgHQAAgGAGgFQAFgGAGAAQAHAAAGAGQAFAFAAAGQAAAHgFAFQgGAGgHAAQgGAAgFgGg");
	this.shape_14.setTransform(107,49.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").p("AgWgOIALgCQAcgDAKAEIAGAbQgPgKgQgGQgOgIgKgCgAgngLIARgD");
	this.shape_15.setTransform(126.4,40.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgBgBQgQgIgKgCIAMgCQAcgDAJAEIAGAbQgPgKgOgGg");
	this.shape_16.setTransform(126.9,40.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").p("AhXAZIALgMQAOgNAQgIQAzgcA9AeQgcgDgiADQhAAFgbAag");
	this.shape_17.setTransform(105.5,40.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhBAMQAOgMAQgJQAzgcA9AeQgcgDgiADQhAAFgbAag");
	this.shape_18.setTransform(104.4,40.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgOAWQgFgBgEgEIgFgHIgBgCQgDgKAIgJQAFgFAJgEIAKgCIABAAIAMABQALADAEAEIADAFIgEgEQgFgFgJABQgFAAgFADIgDADIgDADIgDAEIgBAEQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAABIAAAAIgCABIACAAIAAACIgCAAIgBgCIAAABIAAAAIAAAAIACACQAEACADABIALABQAEAAAFgDQAJgDACgFQgBAEgHAIIgKAHQgGAEgGABIgGABIgJgBg");
	this.shape_19.setTransform(113.3,67);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#534741").s().p("AgOARQgIgDgDgHQgBgHAGgFQAGgHAKgDQAJgDAKADQAIACADAHQABAGgGAGQgGAHgLADQgEACgFAAIgJgBg");
	this.shape_20.setTransform(113.9,66.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgKAVIgDgBIABgCIAHgNIABgDIABgFIgBgRIADAAIAGADQAEADADAGQACAEAAADIAAAGIgEAHIgFAFQgEADgEABg");
	this.shape_21.setTransform(115.5,58.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgCA/QgJgBgHgEQgPgHgJgRQgIgPgBgTIABgHIACgJQABgIAFgJQAIgQAQgIQAPgJAOAFQANADAKALQAIAIAEAKQAEAJABAHIABALIgCgLQgCgIgDgHQgGgKgHgGQgEgDgGgDQgHgCgFAAQgLgBgKAIQgJAHgGANIgDANIgCAMQAAAMAFAOQAGANAJAHQAGAEAFACIAKACQALgBALgIQAHgFAGgLQADgGACgJIACgLIgBALQgBAHgEAJQgEAKgIAIQgKALgNADIgHABIgEABIgCgBg");
	this.shape_22.setTransform(123.1,50.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AggApQgOgRAAgYQAAgXAOgRQAOgSASAAQATAAAOASQAOARAAAXQAAAYgOARQgOARgTAAQgSAAgOgRg");
	this.shape_23.setTransform(123.6,50.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgWBDQgSgIgMgTQgKgRgBgXIABgJIACgKQADgMAFgIQALgSATgJQASgIAQAEQARAEAMALQARAQAFAYIABAKIgCgKQgBgIgGgKQgIgNgJgGQgMgIgOgBQgOgBgNAJQgHAEgFAGQgGAHgDAGQgEAJgBAHIgCAOQAAAJACAHIAFAPQAIAQANAIQAHAEAGACIAGABIAHAAQAPAAAMgJQAJgGAIgMQAGgKABgIIACgMIgBAMQgFAYgRAPQgLALgRAEIgQABQgLgBgIgEg");
	this.shape_24.setTransform(103.5,49.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgpAwQgRgVAAgbQAAgbARgTQASgUAXAAQAYAAASAUQARATAAAbQAAAbgRAVQgSATgYAAQgXAAgSgTg");
	this.shape_25.setTransform(104,49.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(2).p("AB2kAIAQgFQATgGAKgLQAhghg6g6QgfACgmALQhLAWgoAwQgsAniJBnQgkAAgdAMQg4AZArA9IAiAeQAqAcAkgGIBTBJIAFB/IgsAnIA2AjQA7ArAYAoQAGgIAGgSQANglADg3QgOgFgJgTQgWglAMhHIAaAPQAiAQAhAHQBqAUA6hSIAmg3QAmhDADhNQAHgmgCgxQgDhjgug6QgIAcgXAaQguA1hQgJg");
	this.shape_26.setTransform(97.5,64.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#C69C6D").s().p("AhfEcIg2gjIAsgnIgFiAIhThJQgkAGgqgbIgigfQgrg9A4gYQAdgMAkAAQCJhnAsgnQAogxBLgWQAmgLAfgBQA6A6ghAhQgKAKgTAHIgQAEQBQAJAug0QAXgbAIgcQAuA6ADBjQACAygHAmQgDBMgmBEIgmA2Qg6BThqgVQghgGgigRIgagOQgMBGAWAmQAJATAOAFQgDA3gNAlQgGASgGAHQgYgog7gqg");
	this.shape_27.setTransform(97.5,63.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").p("ABpAfQgJAdglALQglALgpgNQgsgNgZgeQgZgbAJgdQAIgdAmgLQAlgLApANQAsANAZAeQAYAbgIAdg");
	this.shape_28.setTransform(89.3,85.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#3A0608").s().p("AgTBFQgsgNgZgeQgZgbAJgdQAIgdAmgLQAlgLApANQAsANAZAeQAYAbgIAdQgJAdglALQgQAFgTAAQgVAAgWgHg");
	this.shape_29.setTransform(89.3,85.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(2).p("AhojZQgggEgnALQhMAWgdBJIB+BFQCBBLASAkQALgaASgaQAkgyAVgCIAhA8QAfBGgEApIgEAiQgHAkgMAMIBhgSIgCg2QAlgcAVgqQAqhShThCQgbgcgwgeQhgg8hngJg");
	this.shape_30.setTransform(97,97.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#C1272D").s().p("ACFCoIAFghQAEgpgghHIggg8QgWADgjAyQgSAagMAZQgSgkiBhKIh9hFQAdhKBMgWQAmgKAgADIA6AOQBnAKBhA7QAwAeAbAcQBTBDgqBRQgVAqgmAdIACA2IhgARQAMgMAGgkg");
	this.shape_31.setTransform(97.1,97.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(2).p("AjCk4IARBWQANBlgRBJIBjA1QBkA7AMAWIgNBJQgRBVgcA2IBAAMQBRAHBLgfQgRgtgWgtQgrhagUgBQgGgVAJggQATg9BKg2QgLg6gUg6Qgph1gugHQg4ACg7ABQh7AAgYgIg");
	this.shape_32.setTransform(95,120.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#3A0608").s().p("AAmE1IhBgMQAbg2AThVIAMhJQgMgWhjg7Ihjg1QARhJgOhlIgRhWQAZAIB6AAQA7gBA5gCQAuAHAoB1QAVA6ALA6QhLA2gSA9QgJAgAFAVQAVABArBaQAVAtASAtQg+AZhCAAIgcgBg");
	this.shape_33.setTransform(94.8,120.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(2).p("AgQj1IALgKAgQj1QAcAaBgBIQBRA7AFAMQANAhhTClQhXCrgyAOQgpAEgrgCQhWgDgLgcIAjhXIAsAMQAxAKAUgJQAkgmAig1QBIhpADhEQgxgWgygZQhkgwgGgKgAhBk9IACARQAIAXAjAdQACACACAB");
	this.shape_34.setTransform(81.3,135.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AhhE5QhWgDgLgcIAjhXIAsAMQAxAKAUgIQAkgnAig0QBIhqADhEQgxgWgygYQhkgxgGgJIBZhQIgDgDQgjgegIgXIgCgRIA8A+IgMALQAdAaBgBHQBRA8AFAMQANAhhTCkQhXCsgyANQgbADgcAAIgdgBg");
	this.shape_35.setTransform(81.3,135.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(2).p("AAHiJIAQCAQASCCAJAQQAIAPgjgLIgjgOIglkOg");
	this.shape_36.setTransform(66.5,142.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#C69C6D").s().p("AAWCMIgjgOIglkOIA4AGIAQCAQASCCAJAQQAFAJgKAAQgHAAgPgFg");
	this.shape_37.setTransform(66.6,142.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(2).p("AiGAQIAKARQAXAiAcAFIAGAnQALAtATAgQA+BlCGhIQATgnACgZIhlmCQh9CqgEgEQgfgFgaAHQg1AOAXA7QACAFABADQAgBWgphmg");
	this.shape_38.setTransform(54.5,147.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("Ag2C2QgUgggKgtIgHgnQgbgFgYgiIgJgRIgDgIQgXg7A1gOQAagHAfAFQAEAEB9iqIBkGCQgCAZgTAnQg4AdgrAAQg7AAglg6g");
	this.shape_39.setTransform(56.2,148.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(2).p("ADQiKIAEASQADAXgEAYQgMBNhMBCQgrAFg4gCQhtgEhDgiQgVgJgUgUQgogkAGgwIg0ArQgtAvAjAhIAUAaQAcAeAqAWQCIBGDigoQAdgEAfgXQBAguAPhbQAEgagBghQgBhBgTgeg");
	this.shape_40.setTransform(55.4,177.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AjHB6QgqgWgcgeIgUgaQgjghAtgvIA0grQgGAwAoAkQAUAUAVAJQBDAiBtAEQA4ACArgFQBMhCAMhNQAEgYgDgXIgEgSIBNgbQATAeABBBQABAhgEAaQgPBbhAAuQgfAXgdAEQhTAPhHAAQh5AAhXgtg");
	this.shape_41.setTransform(55.4,177.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(2).p("AkVhPIANAhQAUAnAjAeQBtBnDNgHQAegCAdgcQA4g4gHh+QAVgLAVgQQArggACgWIAHAnQAIAxABAuQADCRg9A/QgnAzhZANQixAZj5jAQgNgRgFgbQgIg0Atgwg");
	this.shape_42.setTransform(50,200);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AkoAkQgNgSgFgZQgIg2AtgwIANAhQAUAoAjAgQBtBlDNgHQAegDAdgcQA4g3gHh+QAVgMAVgQQArggACgWIAHAoQAIAxABAuQADCQg9A/QgnAzhZANQgVADgWAAQijAAjcipg");
	this.shape_43.setTransform(50,203);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(2).p("AipiSIFZDoIAMBLQhBgkhEgpQiHhTgQgXg");
	this.shape_44.setTransform(119.3,141.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAuBNQiHhRgQgZIhJh8IFZDoIAMBLQhBgkhEgpg");
	this.shape_45.setTransform(120.2,142.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(2).p("Ah8iaIgJAqQgGAsANAMIBKBFQBKBLAGAVQAGAUArAYQAWAMAUAHQgyhFgxhGQhgiKAEgDQAGgEgKhBg");
	this.shape_46.setTransform(123.5,132);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#C69C6D").s().p("ABWCcQgrgYgGgUQgGgVhKhLIhLhFQgNgMAGgsIAJgqIAwgXQAKBBgGAEQgDADBgCKIBiCLQgUgHgVgMg");
	this.shape_47.setTransform(122.7,131.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#3A0608").s().p("AhXATIAVgQIAJhZIBjhmIAuBGIgbBzIh1DAg");
	this.shape_48.setTransform(76.4,128);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").p("AhKEGQgchdgWhqQgujUAbhDIBcggQBhgbAkAcIApBhQAmBmgJAbQgKAYgBgNIABgVIhSCTQhZCVgtgDg");
	this.shape_49.setTransform(79.5,135.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#C1272D").s().p("AhKEGQgchdgWhqQgujUAbhDIBcggQBhgbAkAcIApBhQAmBmgJAbQgKAYgBgNIABgVIhSCTQhYCSgsAAIgCAAg");
	this.shape_50.setTransform(79.5,135.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#3A0608").s().p("AjuIHQh+gygThPQGYseBFiPIEiBoQiDCkh/DOQj+GcAMDZQg8gJg+gYg");
	this.shape_51.setTransform(61.9,162.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(2).p("Am3jIIgXBmQghBnguANIgoAhQgkArAaAwIgYA2QgdA7gXAaIgHAYQgEAfAPAfQAtBkDQBBIDLAjQDdAdBigfIAdgJQAhgFAVASIASACQAYACAagCQBSgIBGg0IA/gJQBBgIALAHQAlgLAhgbQBCg1gShLQgUgmgRgtQghhaAMgiQAJgggEgpQgGhPg/gpQgKgigGgoQgLhPAXgYQAHgfgCgkQgDhIgngcQgNgDgOAEQgeAJgIApQgegagggmQhBhLgMg6Qh1gDh0gEQjogJgDgJQgBgIgjCYQgqCggeAQQiLA0gdAIg");
	this.shape_52.setTransform(84.7,168.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#C1272D").s().p("AjPI3IjLgjQjQhBgthkQgPgfAEgfIAHgYQAXgaAdg7IAYg2QgagwAkgrIAoghQAugNAhhnIAXhmQAdgICLg0QAegQAqigQAjiYABAIQADAJDoAJQB0AEB1ADQAMA6BBBLQAgAmAeAaQAIgpAegJQAOgEANADQAnAcADBIQACAkgHAfQgXAYALBPQAGAoAKAiQA/ApAGBPQAEApgJAgQgMAiAhBaQARAtAUAmQASBLhCA1QghAbglALQgLgHhBAIIg/AJQhGA0hSAIQgaACgYgCIgSgCQgVgSghAFIgdAJQgzAQhTAAQhOAAhrgOg");
	this.shape_53.setTransform(84.7,168.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(3).p("ABpjEQgxARg3AQQhtAfgggCIAfCGQArCTBBA1ICRg6g");
	this.shape_54.setTransform(76.2,60.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AhvAAIgeiIQAfADBuggQA3gQAxgQIAmFRIiQA6QhCg1griRg");
	this.shape_55.setTransform(76.4,60.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(2).p("AK2l4QhLgih2ggQjthAjcAMQgagigngWQhSguhMA6Ih/CnQgXARgTgDQglgEAZhiQgqADgqAbQhWA2gGB0IAMAJQAOAPAIAYQAZBQgxCaQgiAOgVgFQgqgLBDhjQgtgLgzAeQhlA7gcDMIADALQAEANAJAMQAeAoBDAMIgKAbQgJAiAIAdQAYBbCyAJIgHAWQgFAaAGAQQARA1B0g6QBrhJCahAQEwh/DmAxIAeABQAjgBAZgMQBPgmg0iDIBlgUQBngfAQg0QACgOgNgcQgbg1hPhAQAngnAXg0QAuhohPhAg");
	this.shape_56.setTransform(79.2,60.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#1A1A1A").s().p("AnjIiQgGgQAFgaIAHgWQiygJgYhbQgIgdAJgiIAKgbQhDgMgegoQgJgMgEgNIgDgLQAcjMBlg7QAzgeAtALQhDBjAqALQAVAFAigOQAxiagZhQQgIgYgOgPIgMgJQAGh0BWg2QAqgbAqgDQgZBiAlAEQATADAXgRIB/inQBMg6BSAuQAnAWAaAiQDcgMDtBAQB2AgBLAiQBPBAguBoQgXA0gnAnQBPBAAbA1QANAcgCAOQgQA0hnAfIhlAUQA0CDhPAmQgZAMgjABIgegBQjmgxkwB/QiaBAhrBJQg9AegiAAQgeAAgIgZg");
	this.shape_57.setTransform(79.2,60.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").p("ACmBBQgPgdgYggQgxg/gvgNQgsAWgvAaQhfAzgJAXIB9ARQCJAOBEgQg");
	this.shape_58.setTransform(99.9,7.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFF00").s().p("AgoBCIh9gRQAJgXBfgyQAwgaArgWQAwANAwA+QAZAgAOAeQgjAIg4AAQgyAAhAgHg");
	this.shape_59.setTransform(100,7.9);

	this.addChild(this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.7,161.6,228.6);


(lib.bottom_right_leg = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3).p("AgJiTQABAggiBwICKAOICSgtQAJABgJAoQgIAVgxAmQgZATgXAPIikAzQh+AOgbgfQgIgJACgOIAFgLQAPglgig5Iglgwg");
	this.shape.setTransform(-0.3,-0.3,0.752,0.752);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ai4CCQgIgJACgOIAFgLQAPglgig5IglgwIDkhpQABAggiBwICKAOICSgtQAJABgJAoQgIAVgxAmQgZATgXAPIikAzQgpAFgeAAQhAAAgSgWg");
	this.shape_1.setTransform(0,0,0.752,0.752);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.5,-13.6,40.3,28.6);


(lib.bottom_left_leg = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3).p("ABjhqQgUAZhiA9IBdBnICMA+QAGAGgjAZQgTALg/gFIg6gGIichHQhohJABgnQAAgNALgIIAKgFQAkgSAMhBIAGg+g");
	this.shape.setTransform(0,-0.2,0.752,0.752);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABnC0Ig6gGIichHQhohJABgnQAAgNALgIIAKgFQAkgSAMhBIAGg+IDuBIQgUAZhiA9IBdBnICMA+QAGAGgjAZQgNAHgjAAIgigBg");
	this.shape_1.setTransform(0,0,0.752,0.752);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.7,-15.6,35.5,30.8);


(lib.body = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcDcIgFgOQgEgPgBgOIgDgdIAAgdIADgdIAEgdQAFgaAIgfQAKghAHgVQAHgaAMgcIAZg1IAOgdIgCABIgRADIgSABIgRAAIgggGIgQgFQgigKgcgQIAgALQARAFAPADIAgAGIAfAAIAQgCIAPgFIAHgCIAHgDIAFgEIAIgFIAXgRIABgBIAAAAIABAAIALAPIgBgBIgBAAIgCABIgZASIgZAyIgXA1QgPAigHATIgQA0IgVBTQgDANgBAPIgDAcQgBAUABAJQAAANADAPIAGAdg");
	this.shape.setTransform(18.8,-18.5,0.752,0.752);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhoCxICHjOIA2hjIAXguIAIgSIgEATQgGAVgKAdQgFAPgJARQgFAOgKAVIhABrQgIAOgOAUIgYAeIgWAbQgOAQgWAVIgOAOIALgQg");
	this.shape_1.setTransform(-14.8,23.7,0.752,0.752);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3).p("AnBB/QBghlCiheQFCjBFLAXIAFAeQAEApgJA0QhegKijAmQlFBMlaDuQAEhQANgUg");
	this.shape_2.setTransform(-0.3,37.9,0.752,0.752);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AnCCGQBghlCiheQFCjBFLAXIAFAeQAEApgJA0QhegKijAmQlFBMlaDuQAEhQANgUg");
	this.shape_3.setTransform(-0.2,37.4,0.752,0.752);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(3).p("AGcHLQBWAHgbkAQgOiJg4j7QglirgShNQgdiFgZhJQhAjBhhAAQgyAAgJA8QgEAaAFCBQAFB8gPBVQgXB+hEBhQhBBbhFB+QgjBChQCkQgOAeg2BfQgyBYgZA2QhSCxAkBtQA6gTBkhOQB1heAmgVQExiqEEATg");
	this.shape_4.setTransform(0,0.1,0.752,0.752);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AmkIaQAZg2AyhYQA2hfAOgeQBQikAjhCQBFh+BBhbQBEhhAXh+QAPhVgFh8QgFiBAEgaQAJg8AyAAQBhAABADBQAZBJAdCFIA3D4QA4D7AOCJQAbEAhWgHQkEgTkxCqQgmAVh1BeQhkBOg6ATQgkhtBSixg");
	this.shape_5.setTransform(0,0,0.752,0.752);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.3,-63.5,76.8,127.5);


(lib.anne = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgUAFIAFgFQAHgEAIAAQAFAAADACQAFABADABIAGAFg");
	this.shape.setTransform(93.4,30.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AA0COIiXlSIhEizIAxB3IAaA5IEEI/g");
	this.shape_1.setTransform(128.3,148.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAJCRIgbiRIgYiRQgKhCgHg+QgGg7ACghQABgSAEgHIACgEIAEgBIACABIgCAAIgDABQAAAAgBABQAAAAgBAAQAAABAAAAQAAAAgBABQgDAHAAASQAAAYAHBDQAFAkAPBcIBjIdg");
	this.shape_2.setTransform(95.9,151.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AixF3QAIgIAFgHIAOgVIAggwIAjg8IAlhDQAlhIAhhPQAihDAjhUIA5iGIA2iEIgwCHQgnBigQAlQgeBIglBQQgiBMgnBKQgiBAgoA+QgPAXgTAZIgcAjIgVAVIgHAHg");
	this.shape_3.setTransform(59.3,147.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2).p("AinjBQgnAIgfAbQg/A2AkBfIAHAJQAKAMAOAJQAtAbBEgZIgbBHQgeBKgQANIARAKQAVAKAWACQBHAEA1hSIAJARQAQATAVAOQBDAsBegbQgOgOgRgcQghg3gJhFIAUAHQAYAIAVgBQBGgCAShSQgDglgNgmQgZhNgrgGg");
	this.shape_4.setTransform(93.5,76.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ED1E79").s().p("AiFDLQgWgCgVgKIgRgKQAQgNAehKIAbhHQhEAZgtgbQgOgJgKgMIgHgJQgkhfA/g2QAfgbAngIIFpgJQArAGAZBNQANAmADAlQgSBShGACQgVABgYgIIgUgHQAJBFAhA3QARAcAOAOQheAbhDgsQgVgOgQgTIgJgRQgzBOhCAAIgHAAg");
	this.shape_5.setTransform(93.5,76.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(2).p("ABlCtQANAigJAGIglhBQAfBEgHAKQgEAHgPgUQgHgKgagoIAPAhQANAjgGAHQgmgxgRgaIAFATQACAUgOAHQgDgSgDgYQgHgxAFgfIhokwIBGgXIBkEtIAaAWQAbAiAEA8QACANgDAAQgDABgKgSQgHgNgLgZIARAjQAAACABABg");
	this.shape_6.setTransform(120.5,100.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FBD2E4").s().p("AAGClIAEASQACAVgMAHQgEgSgEgZQgHgxAGgeIhokxIBGgWIBjEtIAaAWQAbAhAEA9QACAMgDABQgDABgJgSIgCgDIgRgjIATAmQAMAhgJAGIgkhBQAeBFgGAKQgFAHgOgUIghgzIAOAhQAOAjgHAHQgmgxgQgZgABRCJIARAjIACADIgTgmg");
	this.shape_7.setTransform(120.6,100.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(2).p("AhVCwQgMAlAKAGIAghEIgMAlQgLAmAEAGQAFAGAOgVQAHgLAWgqIgNAjQgKAjAHAHQAig0ANgaIgDATQgBAUAOAGQAEgTABgYQAEgygIgdIBSk4IhIgRIhNEzIgYAYQgZAkABA8IABANQAEABAJgWQAGgNAIgX");
	this.shape_8.setTransform(68.5,100.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FBD2E4").s().p("AgmDIIANgiQgWApgHALQgOAWgFgGQgEgHALglIAMglIggBDQgKgFAMglIAOgkIgOAkQgJAVgEAAIgBgOQgBg7AZgkIAYgYIBNkzIBIARIhSE4QAIAdgEAxQgBAZgEASQgOgFABgVIADgTQgNAagiA1QgHgHAKgkg");
	this.shape_9.setTransform(68.4,100.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(2).p("AiQohQg7AnhPBOQieCchkDEIiBDOQiHDQgeADIgUARQgQATAXAMIgwAoQgnApAqAKQANgLAVgCQApgFAjAsIAdACQAjgDAdgeIAnAFQAtAMAYAjIAMAIQASADAfgWIAxgLQA2gDAcAoIAZADQAfgCAdgYIAYACQAcAKAVAnIAQAHQATAHAUABQA+AFAng2IAkgEQAqAAAlATIAZAFQAcAAAQgUIAVAAQAYAHALAiIAVAAQAcgGAhgjIAngPQAtgJAdAcIAbABQAdgDAPgWQACgEAEgFQAIgLALgGQAkgUA4AdIAVAGQAcABAjgdIAngGQAqgDAVAUIAWACQAbgGAdgrIAsgIQAugEAHAQQAIgRgCgVQgFgqg1gTQgdgLg0g3QhnhuhujaQhIh4hYh7Qiwj1hNgOIikgig");
	this.shape_10.setTransform(92.5,145.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#770F3D").s().p("AiwJJQgUgBgTgHIgQgHQgVgngcgKIgYgCQgdAYgfACIgZgDQgcgog2ADIgxALQgfAWgSgDIgMgIQgYgjgtgMIgngFQgdAegjADIgdgCQgjgsgpAFQgVACgNALQgqgKAngpIAwgoQgXgMAQgTIAUgRQAegDCHjQICBjOQBkjECeicQBPhOA7gnICCgnICkAiQBNAOCwD1QBYB7BIB4QBuDaBnBuQA0A3AdALQA1ATAFAqQACAVgIARQgHgQguAEIgsAIQgdArgbAGIgWgCQgVgUgqADIgnAGQgjAdgcgBIgVgGQg4gdgkAUQgLAGgIALIgGAJQgPAWgdADIgbgBQgdgcgtAJIgnAPQghAjgcAGIgVAAQgLgigYgHIgVAAQgQAUgcAAIgZgFQglgTgqAAIgkAEQgkAxg4AAIgJAAg");
	this.shape_11.setTransform(92.5,145.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").p("AgugZIAYALQAeAHAngSIgDAZQgKAbghACQgJgBgMgHQgXgPgDgfg");
	this.shape_12.setTransform(94.6,37.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgTATQgYgPgDgeIAYAKQAeAHAngRIgDAaQgKAZghACQgIgBgMgHg");
	this.shape_13.setTransform(94.6,37.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").p("AAKAAQAAAEgDADQgDADgEAAQgDAAgDgDQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADg");
	this.shape_14.setTransform(102.9,27.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_15.setTransform(102.9,27.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgLAoQgMgFgHgLQgHgLAAgNIABgLIAGgMQAHgLAMgFQAKgFAKAEQAJACAHAHQAKAKACANIABAHIgCgHQgBgMgMgIQgHgEgIAAQgIABgEAFQgGADgEAJIgDALIAAADQAAAIADAHQADAHAHAGIAEADIAIACQAIAAAHgEQAMgIABgMIACgHIgBAHQgCANgKAKQgGAHgKACIgFABIgEABQgHgBgEgCg");
	this.shape_16.setTransform(102,27.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgWAaQgKgLAAgPQAAgOAKgLQAJgLANAAQANAAAKALQAKALAAAOQAAAPgKALQgKALgNAAQgNAAgJgLg");
	this.shape_17.setTransform(102.5,27.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").p("AAKAAQAAAEgDADQgEADgDAAQgDAAgDgDQgDgDAAgEQAAgDADgDQADgDADAAQADAAAEADQADADAAADg");
	this.shape_18.setTransform(87.3,28.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQADAAAEADQADADAAADQAAAEgDADQgEADgDAAQgDAAgDgDg");
	this.shape_19.setTransform(87.3,28.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgLAoQgMgFgHgLQgHgKAAgOIAAgFIACgGIAFgMQAHgLAMgFQALgFAJAEQAKADAGAGQAJAJADAOIABADIgBgDQgDgNgLgHQgHgEgIAAQgIABgEAFQgGAEgEAIIgCAIIgBADIAAADQAAAIADAHQAEAIAGAEIAEAEIAIACQAIAAAHgEQAKgHAEgNIABgDIgBADQgDAOgJAJQgHAHgJACIgJACQgHgBgEgCg");
	this.shape_20.setTransform(85.1,28.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgWAaQgKgLAAgPQAAgOAKgLQAJgLANAAQAOAAAJALQAKALAAAOQAAAPgKALQgJALgOAAQgNAAgJgLg");
	this.shape_21.setTransform(85.7,28.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").p("ABLixQgTATgjAXQhGAuhUAWIgLAfQgMAkABAhQABBsB5AlIA0gCQA9gKAggoQAegmALg5QAVhwhjhgg");
	this.shape_22.setTransform(94.2,29.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FBD2E4").s().p("AibAhQgBghAMgkIALgfQBUgVBGgvQAjgXATgTQBjBggVBwQgLA5geAmQggApg9AKIg0ABQh5gkgBhtg");
	this.shape_23.setTransform(94.2,29.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").p("Ai5BHQgKgOAHgTQAPglBVgVIAQgKQASgOAOgXIA4gDIAaAbQAfAcATAGIAxALQAxAWABApg");
	this.shape_24.setTransform(95.8,52.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F14B94").s().p("Ai8AmQAPglBVgVIAQgKQASgPAOgWIA4gDIAaAbQAfAcATAFIAxAMQAxAWABApIl4AGQgKgOAHgTg");
	this.shape_25.setTransform(95.8,52.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").p("AgLkSQgtgCgxAWQhiArgRB3IACBKQAMBTAwAwIADAdQADAhgGASQgOADgKAIQgUAPAVAYIAeAjIAQgUQAZgUArgGIBegGQBpgDAyAOQgLgMgKgQQgTggAFgXQAbgeAWgzQAqhkgchoQgIgughgoQhAhRh0AYg");
	this.shape_26.setTransform(91.3,28.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#42210B").s().p("Ai1D1QgVgZAUgPQAKgHAOgDQAGgTgDggIgDgdQgwgxgMhSIgChLQARh2BigsQAxgVAtACQB0gZBABRQAhApAIAtQAcBogqBkQgWA0gbAeQgFAXATAgQAKAQALALQgygNhpADIheAGQgrAFgZAVIgQATg");
	this.shape_27.setTransform(91.3,28.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(2).p("AGbAAQAACAh4BcQh5BbiqAAQipAAh5hbQh5hcAAiAQAAh/B5hbQB5hcCpAAQCqAAB5BcQB4BbAAB/g");
	this.shape_28.setTransform(90.4,33.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F14B94").s().p("AkiDcQh4hcAAiAQAAh/B4hbQB5hcCpAAQCqAAB5BcQB4BbAAB/QAACAh4BcQh5BbiqAAQipAAh5hbg");
	this.shape_29.setTransform(90.4,33.5);

	this.addChild(this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.5,185.1,205.6);


(lib.Tween4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.r_hand();
	this.instance.setTransform(0.8,-1,1,1,0,0,0,0.8,-1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIAbIAQhCIABAEIACAJIgBAOIgDAOIgCAHIgHAUIgIALg");
	this.shape.setTransform(5.8,6.3,0.752,0.752);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAnAJIhRgQIAOgCIAPAAIAIAAIAHABIAQAFQAGABAHADQAFACAEAEIADADg");
	this.shape_1.setTransform(0.9,-1.7,0.752,0.752);

	this.addChild(this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.6,-24.1,86.9,46.4);


(lib.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.r_hand();
	this.instance.setTransform(0.8,-1,1,1,0,0,0,0.8,-1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIAbIANg1IADgNIABAEIACAJIgBAOIgDAOIgCAHIgHAUIgIALg");
	this.shape.setTransform(5.8,6.3,0.752,0.752);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAnAJIhRgQIAOgCIAPAAIAIAAIAHABIAQAFQAGABAHADQAFACAEAEIADADg");
	this.shape_1.setTransform(0.9,-1.7,0.752,0.752);

	this.addChild(this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.6,-24.1,86.9,46.4);


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.l_hand();
	this.instance.setTransform(-0.6,0.9,1,1,-11.7,0,0,-0.7,0.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAQAiQgEgCgEgEIgIgKIgHgOIgGgMIgEgOIgCgNIAIALIAYAxIAHALIgEgCg");
	this.shape.setTransform(-11.2,-1.9,0.752,0.752,-11.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AglAVIAEgBIAhgUIAZgOIANgHIgJALIgLAKIgNAIIgNAIIgOAFIgLABg");
	this.shape_1.setTransform(-1.9,-1.2,0.752,0.752,-11.7);

	this.addChild(this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40.6,-40.8,75.5,83.3);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.l_hand();
	this.instance.setTransform(-0.8,0.7,1,1,0,0,0,-0.8,0.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAQAiQgEgCgEgEIgIgKIgHgOIgGgMIgEgOIgCgNIAIALIAYAxIAHALIgEgCg");
	this.shape.setTransform(-10.4,-4.2,0.752,0.752);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AglAVIAEgBIAhgUIAZgOIANgHIgJALIgLAKIgNAIIgNAIIgOAFIgLABg");
	this.shape_1.setTransform(-1.5,-1.5,0.752,0.752);

	this.addChild(this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-38.9,-33.9,76.4,69.3);


(lib.text_scene4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(49).call(this.frame_49).wait(1));

	// Layer 1
	this.instance = new lib.Tween53("synched",0);

	this.instance_1 = new lib.Tween54("synched",0);
	this.instance_1.setTransform(555.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},49).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:555.9},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-267,-39,534,78.1);


(lib.text_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(49).call(this.frame_49).wait(1));

	// Layer 1
	this.instance = new lib.Tween57("synched",0);

	this.instance_1 = new lib.Tween58("synched",0);
	this.instance_1.setTransform(566,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},49).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:566},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-257.5,-28.5,515,57.1);


(lib.text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Layer 1
	this.instance = new lib.Tween68("synched",0);
	this.instance.setTransform(209,11);

	this.instance_1 = new lib.Tween69("synched",0);
	this.instance_1.setTransform(772,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},49).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:772},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,418,21.9);


(lib.tew = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(49).call(this.frame_49).wait(1));

	// Layer 1
	this.instance = new lib.Tween55("synched",0);

	this.instance_1 = new lib.Tween56("synched",0);
	this.instance_1.setTransform(450,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},49).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:450},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162.5,-15.3,325,30.7);


(lib.TE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Layer 1
	this.instance = new lib.Tween70("synched",0);
	this.instance.setTransform(98.5,10.4);

	this.instance_1 = new lib.Tween71("synched",0);
	this.instance_1.setTransform(729.5,10.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},49).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:729.5},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,197,20.8);


(lib.royal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.stop();
		this.stop();
		this.stop();
		this.stop();
	}
	this.frame_49 = function() {
		this.stop();
		this.stop();
		this.stop();
		this.stop();
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(49).call(this.frame_49).wait(1));

	// l_eye
	this.instance = new lib.kh();
	this.instance.setTransform(97.3,96.2,1,1,0,0,0,-0.8,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:7.4,x:109.7,y:101.9},49).wait(1));

	// body
	this.instance_1 = new lib.kb();
	this.instance_1.setTransform(92.9,270.6,1,1,0,0,0,-0.6,3.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

	// queen
	this.instance_2 = new lib.qh();
	this.instance_2.setTransform(251.9,95.3,1,1,0,0,0,-0.1,2.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-11.7,x:207.8,y:96.3},49).wait(1));

	// bow
	this.instance_3 = new lib.qb();
	this.instance_3.setTransform(256.7,197.6,1,1,0,0,0,0.3,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:224.9,y:198.6},49).wait(1));

	// body_1
	this.instance_4 = new lib.qbody();
	this.instance_4.setTransform(255.5,271.9,1,1,0,0,0,-0.4,-3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:223.8,y:272.9},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,0,339.2,378.2);


(lib.Btn = function() {
	this.initialize();

	// Layer 3
	this.text = new cjs.Text("Y", "30px 'Old English Text MT'", "#F1E5E5");
	this.text.lineHeight = 36;
	this.text.setTransform(169.7,58.2,1,1,1.1);

	this.text_1 = new cjs.Text("R", "30px 'Old English Text MT'", "#F1E5E5");
	this.text_1.lineHeight = 36;
	this.text_1.setTransform(147.2,29.8,1,1,25.3);

	this.text_2 = new cjs.Text("N", "30px 'Old English Text MT'", "#F1E5E5");
	this.text_2.lineHeight = 36;
	this.text_2.setTransform(89.1,19.5);

	this.text_3 = new cjs.Text("E", "30px 'Old English Text MT'", "#F1E5E5");
	this.text_3.lineHeight = 36;
	this.text_3.setTransform(51.5,35.4,1,1,-13);

	this.text_4 = new cjs.Text("H", "30px 'Old English Text MT'", "#F1E5E5");
	this.text_4.lineHeight = 36;
	this.text_4.setTransform(26.8,57.6,1,1,-13.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#606163"],[0,1],0,0,0,0,0,3.9).s().p("AgaAbQgLgMAAgPQAAgPALgLQAMgLAOAAQAQAAALALQALAMAAAOQAAAPgLAMQgLALgQAAQgOAAgMgLg");
	this.shape.setTransform(197.8,130);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#606163"],[0,1],0,0,0,0,0,3.9).s().p("AgaAbQgLgMAAgPQAAgPALgLQAMgLAOAAQAQAAALALQALAMAAAOQAAAPgLAMQgLALgQAAQgOAAgMgLg");
	this.shape_1.setTransform(197.8,20.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","#606163"],[0,1],0,0,0,0,0,3.9).s().p("AgaAbQgLgMAAgPQAAgPALgLQAMgLAOAAQAQAAALALQALAMAAAOQAAAPgLAMQgLALgQAAQgOAAgMgLg");
	this.shape_2.setTransform(20.8,128);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFFFFF","#606163"],[0,1],0,0,0,0,0,3.9).s().p("AgaAbQgLgMAAgPQAAgPALgLQAMgLAOAAQAQAAALALQALAMAAAOQAAAPgLAMQgLALgQAAQgOAAgMgLg");
	this.shape_3.setTransform(21.8,19);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8F6548").s().p("AB3CiIAHgKIg1g3QgHABgGATIgGARQgdABgKgXIgGgXQAWAAAQgOIjMjQIgLguIAtANIDCDbQAKgLAIgfQAZAGAKAXQAFAMgBAKQgLAAgPAIIgNAJIA1A5IALgHIAQASIghAhg");
	this.shape_4.setTransform(107.9,77);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8F6548").s().p("AioCTIAQgSIALAHIA1g5QgWgSgRABQAAgKAEgMQAKgXAZgGIAGARQAGARAGAIIDCjbIAtgNIgMAuIjLDQIALAHQANAIAOgBQAAAMgGALQgKAXgdgBQgJgjgKgCIg1A3IAHAKIgRASg");
	this.shape_5.setTransform(107.9,77);

	this.text_5 = new cjs.Text(" \nTHE TUDOR DUDE", "16px 'Old English Text MT'", "#F1E5E5");
	this.text_5.lineHeight = 23;
	this.text_5.setTransform(30.3,72.2);

	this.instance = new lib.Path_6();
	this.instance.setTransform(109.9,74.2,1,1,0,0,0,108.5,73.4);
	this.instance.shadow = new cjs.Shadow("rgba(55,53,53,0.749)",0,0,15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#8F6548","#AB8059","#7A563B"],[0,0.525,1],-108.9,0,109,0).s().p("AvILmQgyAAgjgjQgjgjAAgyIAAzbQAAgyAjgjQAjgjAyAAIeRAAQAyAAAjAjQAjAjAAAyIAATbQAAAygjAjQgjAjgyAAg");
	this.shape_6.setTransform(110.3,74.3);

	this.addChild(this.shape_6,this.instance,this.text_5,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.text_4,this.text_3,this.text_2,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.4,0,221.1,151.8);


(lib.overmc_2 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("PRESS HERE FOR INSTRUCTION", "bold 15px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 17;
	this.text.lineWidth = 246;
	this.text.setTransform(-123.9,-11.2);

	this.instance = new lib.over_m();
	this.instance.setTransform(-1,-1.5);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-125.9,-14.2,252,28.6);


(lib.os = function() {
	this.initialize();

	// Layer 1
	this.op = new lib.op();
	this.op.setTransform(-2.7,-2.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcAqIgSgHIgJgEIgHgFIgLgJIgOgQIAJAFQAEADASAHIAXAHIAJACIAIAAIAJAAIAQgDIAIgEIAJgEIALgHIAEgDIANgKIAiglIgHATIgHANIgJANIgNAPIgDAEIgNAKIgVAKQgRAEgEgBIgCAAIgUgCg");
	this.shape.setTransform(0.6,6.9);

	this.addChild(this.shape,this.op);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.4,-11.3,18.9,22.8);


(lib.lipsmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_5 = function() {
		this.stop();
		this.stop();
		this.stop();
		this.stop();
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(1));

	// closed
	this.close = new lib.close();
	this.close.setTransform(75.3,141.2);
	this.close._off = true;

	this.timeline.addTween(cjs.Tween.get(this.close).wait(4).to({_off:false},0).wait(2));

	// wr
	this.wr = new lib.wr();
	this.wr.setTransform(75.3,136.9,1,1,0,0,0,0,-2.9);
	this.wr._off = true;

	this.timeline.addTween(cjs.Tween.get(this.wr).wait(3).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer 1
	this.t = new lib.t();
	this.t.setTransform(73.8,144);
	this.t._off = true;

	this.timeline.addTween(cjs.Tween.get(this.t).wait(1).to({_off:false},0).to({_off:true},1).wait(4));

	// e
	this.e = new lib.e();
	this.e.setTransform(72.7,143.6,1,1,0,0,0,0,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.e).to({_off:true},1).wait(5));

	// o
	this.os = new lib.os();
	this.os.setTransform(76.4,140.7);
	this.os._off = true;

	this.timeline.addTween(cjs.Tween.get(this.os).wait(2).to({_off:false},0).to({_off:true},1).wait(3));

	// right_eye_in
	this.re = new lib.remc();
	this.re.setTransform(107.7,115.6);

	this.instance = new lib.Tween24("synched",0);
	this.instance.setTransform(98.1,119.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.re}]}).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.re).to({_off:true,x:98.1,y:119.9,mode:"synched",startPosition:0},4).wait(2));

	// left_eye_in
	this.lep = new lib.lemc();
	this.lep.setTransform(42.6,119.9);

	this.instance_1 = new lib.Tween23("synched",0);
	this.instance_1.setTransform(52.1,123.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lep}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.lep).to({_off:true,x:52.1,y:123.9,mode:"synched",startPosition:0},4).wait(2));

	// right_eye_out
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABwAMIgRgFIgUgEIgXgDIgzAAIgXAAQgRAAgIABIgtAGIgSADIgaAEIApgQIAtgNIAagEIAZgBIAbAAIAaAEIAYAHIAVAIQAIABAJAFIAMAIIAJAJg");
	this.shape.setTransform(97.4,92.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgLCgIgJgBQgfgGgagcQgSgVgKgbQgKgYgCgRQgDgRAAgKIAEAbQADAUAJAVQAMAbASASQAaAYAdAEIAJABIAPgBIAIgCQASgFANgKQAcgVAPgmQAOgiAAgoIgBgSIgCgTQgDgQgIgUQgPgmgcgVQgegXghAGQgLABgTAJQgQAJgJAJQgSATgMAaQgJAVgDAUIgEAbQAAgKADgRQACgSAKgXQAKgbASgVQAagcAfgGQASgEARAEQAVAEAQALQASAMAMAPQANAQAJATIAHAUQAEANACAHIADAWIABATQgBAZgDARQgCAHgEANIgIATQgHATgOARQgMAPgSAMQgQALgVAEIgKACIgGAAg");
	this.shape_1.setTransform(101.4,113.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhRBuQgiguAAhAQAAhAAigtQAiguAvAAQAwAAAiAuQAiAuAAA/QAABBgiAtQgiAugwAAQgvAAgigug");
	this.shape_2.setTransform(100.9,113.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// left_eye_out
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgFChIgJgCQgVgEgQgLQgRgLgOgQQgNgRgIgTQgQghgBgwIABgTQABgLACgLIAFgUIAIgUQAIgSANgRQAOgQARgLQAQgLAUgEQASgEASAEQAeAGAaAcQAUAWAJAaQAJAUADAVIADAbIAAAIIAAgIQAAgKgDgRQgEgUgJgVQgLgagUgTQgKgKgPgIQgRgJgMgBQgigGgdAXQgcAVgPAmQgIAUgCAQIgFAlQABAoAOAiQAPAmAcAVQANAKASAFIAIACIAPABIAIgBQAdgEAbgYQATgUALgZQAJgVAEgUQADgRAAgKIAAgJIAAAJIgDAbQgDAUgJAVQgJAagUAWQgZAcgfAGIgJABIgKABIgHAAg");
	this.shape_3.setTransform(46.4,117.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhRBuQgigtAAhBQAAg/AiguQAiguAvAAQAwAAAiAuQAiAuAAA/QAABBgiAtQgiAugwAAQgvAAgigug");
	this.shape_4.setTransform(46.9,117.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

	// nose
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhaAaQAEgKAKgNQAOgPAQgJQALgGALgEQAJgDAPgBQAKAAAMADQAMADALAGIARAMIANALIAJANIAKATIgegSIgPgIIgYgIIgJgBQgLgCgFAAQgcABgkAUIgeAUQABgEADgGg");
	this.shape_5.setTransform(74.8,120.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(6));

	// head
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAaApIgcgnIgng9IAHABQAKAEAGAEQAKAFAJAKIAUAVQAIANAGALQAFAPACAKQABAKgBAJIgBAHg");
	this.shape_6.setTransform(128.4,106);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D1B08A").s().p("Agpg7QArAlAYArQANAYADAQg");
	this.shape_7.setTransform(128.4,106);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgTA/QgEgIgBgJQgBgKABgPIABgPIAEgNQAEgOAHgMQAGgLAHgKQAIgIAHgEIAGgEIgaBfIgNAnIgEAGg");
	this.shape_8.setTransform(15,111);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D1B08A").s().p("AABgiIAVgkIgrCMQACg5AUgvg");
	this.shape_9.setTransform(15.4,111);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhqAIIA0gTIAZgIIAbgFIAZgDIAaABIAZAEQAIABANADIASAIIANAGIAKAFIgZgEIg+gGIgZACIgYADQgRACgIACQgRABgHADIhWAXg");
	this.shape_10.setTransform(45.6,97.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DAC0A1").s().p("ABIEZQjLhOhijXQgLgbgJgvQgQhdAQhgIDggoIgDBIQACBaASBUQA5EMDRB1IgQAAQhNAAhdgjg");
	this.shape_11.setTransform(46.6,124.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgUAuQgRgFgMgLQgPgOABgTIACgJIAEgJQAGgKAHgEQANgJASgDQANgBAOADQAMADAMAHQAKAGAHAHQAFAHADAHIABAIIgCgHQgFgQgVgIQgJgEgOgBQgNAAgKADQgOAEgJAIQgFAFgCAFIgCAEIgBADIAAABIAAABIAAABQgBAIAJAKQAHAKANAFQAFADAHACIALACQAKACANgDQAVgFAJgPQgDAGgHAGQgFAFgNAHQgOAFgLABIgMAAIgQgCg");
	this.shape_12.setTransform(105.9,80.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00FFFF").s().p("AgBArQgZgCgRgOQgRgOACgQQABgRATgMQASgLAXABQAYACARAOQAQAOAAAQQgBASgTALQgQAKgUAAIgFAAg");
	this.shape_13.setTransform(106.4,80.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgJAwQgSgBgOgIQgSgLgDgUIAAgFIAAgDIACgKQAEgKAGgGQALgMAQgGQAQgEAMAAQAMAAANAFQALAEAIAGQAHAFAEAHIABADIgBgDQgJgPgWgDQgMgCgLACQgKACgMAHQgMAGgIAKIgGAKIgBAEIAAAEIABABIABAAQACALAJAIQALAHAMADIAKACIANAAQAOgCAJgFQAUgJAEgQQgBAGgGAIQgDAGgMAJQgLAIgMADIgHACIgHABIgKACIgDgBg");
	this.shape_14.setTransform(69.2,78.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00FFFF").s().p("AgkAjQgTgKgDgSQgCgPAPgPQAQgPAZgEQAWgDATAKQAUAKACASQACAQgPAPQgQAPgZADIgKABQgRAAgOgIg");
	this.shape_15.setTransform(69.8,78.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgdAxQgUgFgJgUIgDgIIAAgKQAAgHAFgJQAHgPAPgKQALgHAQgFQAKgEAOABQAMABAIAEQAIADAGAFIAEAFIgEgEQgMgLgWACQgLAAgKAGQgLAFgKAKQgKALgEAKQgCADAAAHIAAAFIAAACIACAEIAAAAIABABIAFAGQAGAFAEACQALAEAMgBQAHAAAGgBIAMgEQALgEAJgIQARgPAAgPQAAgFgCgFIgBgDIACADIABAKQAAAHgDAHQgEAJgHAKQgIAKgLAHIgMAHQgIADgHABQgGACgIAAQgJAAgIgCg");
	this.shape_16.setTransform(37.1,84.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00FFFF").s().p("AgZAsQgVgEgIgRQgHgQALgRQALgSAXgKQAVgKAVAEQAVAFAHAQQAHARgKAQQgLATgXAKQgPAHgNAAQgHAAgHgCg");
	this.shape_17.setTransform(37.6,84.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AovCiQgJgDgFgGIgDgEIgFgKQgGgSgEgaIgBgXQAAgMACgLQAFgaAPgSQAJgHALgHIALgGIAKgEIAkgSIBJgnQAXgLARgGIAqgKQBqgWA6gKQBRgOBUgJIBSgFIAqgBQAWAAAUACQBSAGBTAYQBWAZBFAoQArAaAaAXQAUASAJAMQANASAEAWQADAXgKAUQgKAUgSANQgjAagtgBIgBAAIgBgBIgEhIIAIBFQArgBAegaQARgNAHgSQAJgRgEgUQgGgfgmgeQgdgZgngVQhGgmhSgVQhSgVhQgFQgbgBg2ACIhQAGQhKAIhZAQQhBAMhiAVIgUAFIgTAFQgSAGgSAJIgkATIgkAUQgXAKgQAGIgRAIQgIAFgEAFQgUAYAFAsQAFAbADAKIACADIAAABIAAAAIADACQAFACAIgCQAKgCAcgLIB6gdIBSgPQBDgMBjgJQBPgGBVgCQBhgBBGADIBTAFID3AdIg+gFIhngIIhTgEIhTgCQhJgChcAEQhVAEhOAIQhZAKhLAOIhQAQIgpAJIgnAKIgoALQgYAKgQAEIgNABQgJAAgHgDg");
	this.shape_18.setTransform(71.7,82.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AHSBPIA+AHIhFgJQobg7mjB3QgXAJgMADQgVAGgLgKQgKgIgFgtQgEghAKgZQAMgcAagIQAWgIBAgjQA2geAigIQCOgfBdgPQCCgUBqgCQBugBB6AmQCIAqBJBHQA3A0giA0QggAxhCAAg");
	this.shape_19.setTransform(72.2,82.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFF99").s().p("AAABaQhVjbhFiAIBUgbQAvBaAyBzQBoDmAYB/IhWAHQgchUgphvg");
	this.shape_20.setTransform(20.1,47.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(3).p("AGzGSQATiDAoiTQBSklBshPIldiAQACAhgGAwQgNBggoBKQiWgYgvgGIADj0IkyAlIA7DQIjWA9Ig+jLIj+BWQBBB4A9CCQB7EGgSA6QCFgSCzgEQFjgHDmBHg");
	this.shape_21.setTransform(71.6,41.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFF00").s().p("AiRFRQizAEiFASQASg6h7kGQg9iChBh4ID+hWIA+DLIDWg9Ig7jQIEyglIgDD0QAvAGCWAYQAohKANhgQAGgwgCghIFdCAQhsBPhSElQgoCTgTCDQjmhHljAHg");
	this.shape_22.setTransform(71.1,41.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(3).p("AIBAAQAADUiWCXQiXCWjUAAQjTAAiXiWQiWiXAAjUQAAjTCWiXQCXiWDTAAQDUAACXCWQCWCXAADTg");
	this.shape_23.setTransform(70.5,106.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D1B08A").s().p("AlqFrQiWiXAAjUQAAjTCWiXQCXiWDTAAQDVAACWCWQCWCXAADTQAADUiWCXQiWCWjVAAQjTAAiXiWg");
	this.shape_24.setTransform(70.5,106.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

	// ear
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(3).p("ACIAAQAABCgoAuQgoAwg4AAQg3AAgogwQgoguAAhCQAAhBAoguQAogwA3AAQA4AAAoAwQAoAuAABBg");
	this.shape_25.setTransform(121.9,110);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D1B08A").s().p("AhfBxQgogvAAhCQAAhBAoguQAogwA3AAQA4AAAoAwQAoAuAABBQAABCgoAvQgoAug4ABQg3gBgogug");
	this.shape_26.setTransform(121.9,110);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(3).p("ACIAAQAABCgoAuQgoAwg4AAQg3AAgogwQgoguAAhCQAAhBAoguQAogwA3AAQA4AAAoAwQAoAuAABBg");
	this.shape_27.setTransform(18.9,114);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#DAC0A1").s().p("AhfBwQgoguAAhCQAAhBAogvQAoguA3AAQA4AAAoAuQAoAvAABBQAABCgoAuQgoAwg4gBQg3ABgogwg");
	this.shape_28.setTransform(18.9,114);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(3).p("AF6gTQAAhCAoguQAogwA5AAQA4AAAoAwQAoAuAABCQAABBgoAuQgoAwg4AAQg5AAgogwQgoguAAhBgAqKAUQAAhBAoguQAogwA4AAQA5AAAoAwQAoAuAABBQAABCgoAuQgoAwg5AAQg4AAgogwQgoguAAhCg");
	this.shape_29.setTransform(70.4,112);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CD9A81").s().p("AhfBwQgoguAAhCQAAhBAogvQAoguA3AAQA4AAAoAuQAoAvAABBQAABCgoAuQgoAwg4gBQg3ABgogwg");
	this.shape_30.setTransform(18.9,114);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#C68D6E").s().p("AhfBxQgogvAAhCQAAhBAoguQAogwA3AAQA4AAAoAwQAoAuAABBQAABCgoAvQgoAug4ABQg3gBgogug");
	this.shape_31.setTransform(121.9,110);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#C07361").s().p("AhfBwQgoguAAhCQAAhBAogvQAoguA3AAQA4AAAoAuQAoAvAABBQAABCgoAuQgoAwg4gBQg3ABgogwg");
	this.shape_32.setTransform(18.9,114);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#BB6A53").s().p("AhfBxQgogvAAhCQAAhBAoguQAogwA3AAQA4AAAoAwQAoAuAABBQAABCgoAvQgoAug4ABQg3gBgogug");
	this.shape_33.setTransform(121.9,110);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B34D40").s().p("AhfBwQgoguAAhCQAAhBAogvQAoguA3AAQA4AAAoAuQAoAvAABBQAABCgoAuQgoAwg4gBQg3ABgogwg");
	this.shape_34.setTransform(18.9,114);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#AF4637").s().p("AhfBxQgogvAAhCQAAhBAoguQAogwA3AAQA4AAAoAwQAoAuAABBQAABCgoAvQgoAug4ABQg3gBgogug");
	this.shape_35.setTransform(121.9,110);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A62620").s().p("AhfBwQgoguAAhCQAAhBAogvQAoguA3AAQA4AAAoAuQAoAvAABBQAABCgoAuQgoAwg4gBQg3ABgogwg");
	this.shape_36.setTransform(18.9,114);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#A4231C").s().p("AhfBxQgogvAAhCQAAhBAoguQAogwA3AAQA4AAAoAwQAoAuAABBQAABCgoAvQgoAug4ABQg3gBgogug");
	this.shape_37.setTransform(121.9,110);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#990000").s().p("AhfBxQgogvAAhCQAAhBAoguQAogwA3AAQA4AAAoAwQAoAuAABBQAABCgoAvQgoAug4ABQg3gBgogug");
	this.shape_38.setTransform(121.9,110);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#990000").s().p("AhfBwQgoguAAhCQAAhBAogvQAoguA3AAQA4AAAoAuQAoAvAABBQAABCgoAuQgoAwg4gBQg3ABgogwg");
	this.shape_39.setTransform(18.9,114);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_29}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_29}]},1).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_29}]},1).to({state:[{t:this.shape_39},{t:this.shape_27},{t:this.shape_38},{t:this.shape_25}]},1).wait(1));

	// text
	this.text = new cjs.Text("GE", "bold 20px 'Arial'");
	this.text.lineHeight = 22;
	this.text.lineWidth = 100;
	this.text.setTransform(148.5,113.4);
	this.text._off = true;

	this.text_3 = new lib.text_3();
	this.text_3.setTransform(192.1,127.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text_3}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({_off:false},0).wait(1).to({text:"GET"},0).wait(1).to({text:"GET O"},0).wait(1).to({text:"GET OU"},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,143.2,159.4);


(lib.leavemc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// q_b_h
	this.instance = new lib.hel("synched",0);
	this.instance.setTransform(507.7,363.4,1.115,1.115);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.25,scaleY:0.25,guide:{path:[507.6,363.3,508.5,266.9,554.1,198.3,600.6,128.6,666.4,128.6]}},49).wait(1));

	// exterior
	this.instance_1 = new lib.gn("synched",0);
	this.instance_1.setTransform(483.8,281.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:0},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,967.2,576);


(lib.HNHN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Layer 1
	this.instance = new lib.Tween72("synched",0);
	this.instance.setTransform(194,10.4);

	this.instance_1 = new lib.Tween73("synched",0);
	this.instance_1.setTransform(767.9,10.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},49).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:767.9},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,388,20.8);


(lib.tudor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eye
	this.instance = new lib.head();
	this.instance.setTransform(-3.6,-132.4,1,1,0,0,0,-1.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-9.6,y:-124.9},4).to({x:-7.6,y:-136.4},5).to({regY:0.3,rotation:6.5,y:-146.8},5).to({rotation:8.2,x:-2.1,y:-141.3},5).to({rotation:0.9,x:-5.1,y:-137.8},5).to({regX:-1.1,rotation:-4.8,x:-10,y:-138.3},5).to({rotation:2.2,x:-5.5,y:-151.4},5).to({regX:-1.2,regY:0.2,rotation:0,x:-3.6,y:-132.4},5).wait(1));

	// right_hand
	this.instance_1 = new lib.Tween3("synched",0);
	this.instance_1.setTransform(52.5,-54.4);

	this.instance_2 = new lib.Tween4("synched",0);
	this.instance_2.setTransform(56,-33.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,x:56,y:-33.4},4).wait(30).to({_off:false,x:52.5,y:-54.4},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:false},4).to({rotation:46.9,x:31.5,y:-10.4},5).to({rotation:124.4,x:-22,y:-32.9},5).to({regX:2.1,regY:1.1,rotation:138.9,x:-18.3,y:-32.4},5).to({x:-29.8,y:-34.4},5).to({regY:1.2,rotation:73.7,x:20.6,y:-15.9},5).to({rotation:42.2,x:42.5,y:-35.9},5).to({_off:true,regX:0,regY:0,rotation:0,x:52.5,y:-54.4},5).wait(1));

	// body
	this.instance_3 = new lib.body();
	this.instance_3.setTransform(-8.4,-10.2,1,1,0,0,0,-1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-9.4,y:-5.7},4).to({x:-4.4,y:-16.7},5).to({x:-5.9,y:-23.7},5).to({x:-2.4,y:-17.7},5).to({rotation:-5},5).to({x:2.1,y:-18.2},5).to({x:0.1,y:-30.2},5).to({rotation:0,x:-8.4,y:-10.2},5).wait(1));

	// up_left_leg
	this.instance_4 = new lib.left_up_leg();
	this.instance_4.setTransform(-6.2,27.7,1,1,0,0,0,0.2,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:-3.7,y:31.7},4).to({regY:-0.2,rotation:-15,x:20.3,y:22.3},5).to({regX:0.3,regY:-0.4,rotation:-52,x:23.8,y:9},5).to({regY:-0.2,rotation:-44.9,x:22.5,y:26.3},5).to({regX:0.2,regY:-0.1,rotation:-33,x:15.7,y:29},5).to({rotation:-6.8,x:-3.4,y:28},5).to({regX:0.3,rotation:6.9,x:-17.6,y:26.5},5).to({regX:0.2,regY:-0.3,rotation:0,x:-6.2,y:27.7},5).wait(1));

	// bottom_left
	this.instance_5 = new lib.bottom_left_leg();
	this.instance_5.setTransform(-35.6,66.8,1,1,33,0,0,0,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:-0.1,rotation:42.5,x:-28.3},4).to({regX:0.1,regY:-0.3,rotation:39.7,x:2.2,y:54.9},5).to({regX:0,regY:-0.2,rotation:21.9,x:16.6,y:41.6},5).to({regX:0.1,regY:-0.4,rotation:-45.3,x:43.4,y:70.7},5).to({rotation:-33.3,x:27,y:76.6},5).to({rotation:-18.4,x:-9},5).to({rotation:-4.6,x:-34.7,y:72.4},5).to({regX:0,regY:-0.2,rotation:33,x:-35.6,y:66.8},5).wait(1));

	// middle_left_leg
	this.instance_6 = new lib.middle_left_leg();
	this.instance_6.setTransform(-21.3,50.7,1,1,33,0,0,1.1,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:1,rotation:31.7,x:-16,y:52.5},4).to({regX:1.1,regY:-1.2,rotation:41.2,x:13.7,y:41.8},5).to({rotation:31.9,x:27.2,y:25.4},5).to({rotation:-32.4,x:32.1,y:51.4},5).to({rotation:-20.5,x:19.9,y:55.4},5).to({regY:-1.1,rotation:-4.5,x:-10.1,y:55.5},5).to({regX:1.2,regY:-1.2,rotation:9.2,x:-30.6,y:51.6},5).to({regX:1.1,regY:-1.1,rotation:33,x:-21.3,y:50.7},5).wait(1));

	// up_right_leg
	this.instance_7 = new lib.up_right_leg();
	this.instance_7.setTransform(15.5,22.1,1,1,0,0,0,-0.4,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:15,y:35.6},4).to({rotation:41.5,x:-3.5,y:32.2},5).to({regX:-0.5,rotation:53.9,x:-19,y:23.3},5).to({rotation:50.8,x:-9.9,y:22.8},5).to({rotation:36.5,x:-9.7,y:23},5).to({rotation:26.7,x:21.6,y:11.2},5).to({rotation:11.7,x:30.1,y:0.7},5).to({regX:-0.4,rotation:0,x:15.5,y:22.1},5).wait(1));

	// bottom_right_leg
	this.instance_8 = new lib.bottom_right_leg();
	this.instance_8.setTransform(40,63.5,1,1,0,0,0,-0.4,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:21.5,x:31.5,y:76.9},4).to({rotation:30.3,x:-5.5,y:78.2},5).to({regX:-0.3,regY:0.6,rotation:62.7,x:-38.5,y:68.6},5).to({regY:0.8,rotation:75.5,x:-36.5,y:60.4},5).to({x:-33,y:56.4},5).to({rotation:78.9,x:3.4,y:44.2},5).to({rotation:57.7,x:19.9,y:30.3},5).to({regX:-0.4,regY:0.7,rotation:0,x:40,y:63.5},5).wait(1));

	// middle_right_leg
	this.instance_9 = new lib.middle_right_leg();
	this.instance_9.setTransform(26.8,45.6,1,1,0,0,0,-0.1,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regY:-0.5,rotation:16.5,x:24.3,y:59},4).to({regY:-0.4,rotation:33.7,x:-9.5,y:58},5).to({regX:0,rotation:53.4,x:-32.5,y:48.6},5).to({rotation:70.4,x:-24,y:46.1},5).to({regY:-0.3,rotation:89.6,x:-19.3,y:43.4},5).to({regY:-0.4,rotation:93,x:17.9,y:32.1},5).to({x:26.4,y:15.1},5).to({regX:-0.1,rotation:0,x:26.8,y:45.6},5).wait(1));

	// left_hand
	this.instance_10 = new lib.Tween1("synched",0);
	this.instance_10.setTransform(-28.5,-33.9);

	this.instance_11 = new lib.Tween2("synched",0);
	this.instance_11.setTransform(-25.5,-14.9);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true,x:-25.5,y:-14.9},4).wait(30).to({_off:false,x:-28.5,y:-33.9},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:false},4).to({rotation:-21,x:-6.5,y:-16.9},5).to({rotation:-87.9,x:46,y:-28.9},5).to({rotation:-128.1,x:62.5,y:-58.3},5).to({x:60,y:-53.8},5).to({rotation:-43.1,x:19,y:-25.8},5).to({rotation:-27.9,x:0.5,y:-36.3},5).to({_off:true,rotation:0,x:-28.5,y:-33.9},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.4,-205.1,164.2,294.5);


(lib.henry_start = function() {
	this.initialize();

	// start
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#606163"],[0,1],0,0,0,0,0,3.9).s().p("AgaAbQgLgMAAgPQAAgPALgLQAMgLAOAAQAQAAALALQALAMAAAOQAAAPgLAMQgLALgQAAQgOAAgMgLg");
	this.shape.setTransform(196.8,43);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#606163"],[0,1],0,0,0,0,0,3.9).s().p("AgaAbQgLgMAAgPQAAgPALgLQAMgLAOAAQAQAAALALQALAMAAAOQAAAPgLAMQgLALgQAAQgOAAgMgLg");
	this.shape_1.setTransform(196.8,14.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","#606163"],[0,1],0,0,0,0,0,3.9).s().p("AgaAbQgLgMAAgPQAAgPALgLQAMgLAOAAQAQAAALALQALAMAAAOQAAAPgLAMQgLALgQAAQgOAAgMgLg");
	this.shape_2.setTransform(19.3,44);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFFFFF","#606163"],[0,1],0,0,0,0,0,3.9).s().p("AgaAbQgLgMAAgPQAAgPALgLQAMgLAOAAQAQAAALALQALAMAAAOQAAAPgLAMQgLALgQAAQgOAAgMgLg");
	this.shape_3.setTransform(19.3,15.5);

	this.instance = new lib.Path_4();
	this.instance.setTransform(108.5,29.4,1,1,0,0,0,108.5,29.4);
	this.instance.shadow = new cjs.Shadow("rgba(55,53,53,0.749)",0,0,15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#8F6548","#AB8059","#7A563B"],[0,0.525,1],-103.2,0,103.3,0).s().p("AuPDzQgyAAgigjQgkgjAAgyIAAj1QAAgyAkgjQAigjAyAAIcfAAQAxAAAkAjQAjAjAAAyIAAD1QAAAygjAjQgkAjgxAAg");
	this.shape_4.setTransform(108.5,29.5);

	this.addChild(this.shape_4,this.instance,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,221,62);


(lib.gng = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Layer 1
	this.instance = new lib.Tween76("synched",0);
	this.instance.setTransform(142,-157.2);

	this.instance_1 = new lib.Tween77("synched",0);
	this.instance_1.setTransform(142,115.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},49).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:115.8},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-242,296,169.6);


(lib.fire_w = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(50));

	// Layer 1
	this.instance = new lib.fire_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:15.13,scaleY:15.13,y:0.7,alpha:0},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.6,-3.8,5.4,7.6);


(lib.f_r = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(50));

	// Layer 1
	this.f_r = new lib.f_r2();

	this.timeline.addTween(cjs.Tween.get(this.f_r).to({scaleX:16.47,scaleY:16.47,alpha:0},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.6,-32.3,71.2,64.6);


(lib.exit1ai = function() {
	this.initialize();

	// start
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#606163"],[0,1],0,0,0,0,0,3.9).s().p("AgaAbQgLgMAAgPQAAgPALgLQAMgLAOAAQAQAAALALQALAMAAAOQAAAPgLAMQgLALgQAAQgOAAgMgLg");
	this.shape.setTransform(196.8,43);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#606163"],[0,1],0,0,0,0,0,3.9).s().p("AgaAbQgLgMAAgPQAAgPALgLQAMgLAOAAQAQAAALALQALAMAAAOQAAAPgLAMQgLALgQAAQgOAAgMgLg");
	this.shape_1.setTransform(196.8,14.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","#606163"],[0,1],0,0,0,0,0,3.9).s().p("AgaAbQgLgMAAgPQAAgPALgLQAMgLAOAAQAQAAALALQALAMAAAOQAAAPgLAMQgLALgQAAQgOAAgMgLg");
	this.shape_2.setTransform(19.3,44);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFFFFF","#606163"],[0,1],0,0,0,0,0,3.9).s().p("AgaAbQgLgMAAgPQAAgPALgLQAMgLAOAAQAQAAALALQALAMAAAOQAAAPgLAMQgLALgQAAQgOAAgMgLg");
	this.shape_3.setTransform(19.3,15.5);

	this.instance = new lib.Path_4_1();
	this.instance.setTransform(108.5,29.4,1,1,0,0,0,108.5,29.4);
	this.instance.shadow = new cjs.Shadow("rgba(55,53,53,0.749)",0,0,15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#8F6548","#AB8059","#7A563B"],[0,0.525,1],-103.2,0,103.3,0).s().p("AuPDzQgyAAgigjQgkgjAAgyIAAj1QAAgyAkgjQAigjAyAAIcfAAQAxAAAkAjQAjAjAAAyIAAD1QAAAygjAjQgkAjgxAAg");
	this.shape_4.setTransform(108.5,29.5);

	this.addChild(this.shape_4,this.instance,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,221,62);


(lib.crow_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Layer 1
	this.instance = new lib.crownai("synched",0);
	this.instance.setTransform(0.1,0.4,0.54,0.54,0,0,0,35.8,37.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:35.9,rotation:125.3,x:-4.5,y:17.5},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.5,-20.1,39.1,41.2);


// stage content:



(lib.Sewan_1405729 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.overmc_3.visible = false;
		
		this.clicked1_mc.visible = false;
		
		
		this.press1_btn.addEventListener("click",onClick.bind(this));
		
		this.press1_btn.addEventListener("mouseover",onOver.bind(this));
		;
		
		function onClick(){
		this.overmc_3.visible = false;
		
		this.clicked1_mc.visible = true;
		
		}
		
		function onOver(){
			this.overmc_3.visible = true;
		
		this.clicked1_mc.visible = false;
		
		}
		this.stop();
		
		this.start1_btn.addEventListener("click", gotoNextFrameAndStop.bind(this));
		
		function gotoNextFrameAndStop()
		{
			this.start1_btn.removeAllEventListeners();
			this.gotoAndStop(1);
		}
	}
	this.frame_1 = function() {
		this.stop();
		
		
		
		this.clicked3_mc.visible = false;
		
		
		this.press10_btn.addEventListener("click",onClick.bind(this));
		
		
		
		function onClick(){
		
		
		
			this.clicked3_mc.visible = true;
			
		
		}
		
		function onOver(){
			
		this.clicked3_mc.visible = false;
		
		
		}
		this.leftBtn.addEventListener("click", gotoPreviousFrame.bind(this));
		
		function gotoPreviousFrame()
		{
			this.leftBtn.removeAllEventListeners();
			this.gotoAndStop(0);
		}
		this.stop();
		this.rightBtn.addEventListener("click", gotoNextFrame.bind(this));
		
		function gotoNextFrame()
		{
			this.rightBtn.removeAllEventListeners();
			this.gotoAndStop(2);
		}
		this.stop();
		
		var ball= this.myBall;
		
		
		this.addEventListener("tick", gotoPreviousFrameAndStop.bind(this));
		
		function gotoPreviousFrameAndStop()
		{  if (this.myBall.x <= 0){
			this.removeAllEventListeners();
			this.gotoAndStop(0);
		 }	
		}
		this.stop();
		
		var ball= this.myBall;
		
		
		
		this.addEventListener("tick", gotoNextFrameAndStop.bind(this));
		
		function gotoNextFrameAndStop()
		 {  if (this.myBall.x >= 550){
			this.removeAllEventListeners();
			this.gotoAndStop(2);
		 }	
		}
		this.stop();
		this.myBall.visible = false;
		
		var KEYCODE_LEFT = 37;
		var KEYCODE_UP = 38;
		var KEYCODE_RIGHT = 39;
		var KEYCODE_DOWN = 40;
		
		var myframe;
		
		document.onkeydown = handleKeyDown.bind(this);
		
		function handleKeyDown(e) {
			//cross browser issues exist
			
			if (!e) {
				var e = window.event;
			}
			switch (e.keyCode) {
		
				case KEYCODE_LEFT:
					console.log("left");
					this.myBall.x -= 5;
					this.myBall.scaleX = -.28 ;
				
					return false;
		
				case KEYCODE_RIGHT:
					console.log("right");
					this.myBall.x += 5;
				    this.myBall.scaleX = .28;
				    
					return false;
			}
			
		
		
		}
			//function gotoFrame2(){
				//if(myBall.x >= 550){
					//this.gotoAndStop(2);
					//stage.removeChild(myBall);
				
				
			//}
		
		//this.stop();
		
		
		//function gotoNextFrameAndStop()
		//{
			//this.rightBtn.removeAllEventListeners();
			//this.gotoAndStop(7);
		//}
		//}
	}
	this.frame_2 = function() {
		this.pip.visible = false;
		this.stop(); // stops the main timeline
		
		
		this.stop_btn.addEventListener("click", stopMovie.bind(this));
		function stopMovie() {
			this.rod_mc.stop();
			
			this.text_sc12.stop();
		}
		
		this.play_btn.addEventListener("click", playMovie.bind(this));
		function playMovie() {
			this.rod_mc.play();
			
			this.text_sc12.play();
		}
		this.play_btn.visible = false;
		this.stop_btn.visible = false;
		this.leftBtn.addEventListener("click", gotoPreviousFrame.bind(this));
		
		function gotoPreviousFrame()
		{
			this.leftBtn.removeAllEventListeners();
			this.gotoAndStop(1);
		}
		this.stop();
		this.rightBtn.addEventListener("click", gotoNextFrame.bind(this));
		
		function gotoNextFrame()
		{
			this.rightBtn.removeAllEventListeners();
			this.gotoAndStop(3);
		}
		this.stop();
		this.stop();
		
		var ball= this.myBall;
		
		
		this.addEventListener("tick", gotoPreviousFrameAndStop.bind(this));
		
		function gotoPreviousFrameAndStop()
		{  if (this.myBall.x <= 0){
			this.removeAllEventListeners();
			this.gotoAndStop(1);
		 }	
		}
		this.stop();
		
		var ball= this.myBall;
		
		
		
		this.addEventListener("tick", gotoNextFrameAndStop.bind(this));
		
		function gotoNextFrameAndStop()
		 {  if (this.myBall.x >= 550){
			this.removeAllEventListeners();
			this.gotoAndStop(3);
		 }	
		}
		var KEYCODE_LEFT = 37;
		var KEYCODE_UP = 38;
		var KEYCODE_RIGHT = 39;
		var KEYCODE_DOWN = 40;
		
		document.onkeydown = handleKeyDown.bind(this);
		
		function handleKeyDown(e) {
			//cross browser issues exist
			
			if (!e) {
				var e = window.event;
			}
			switch (e.keyCode) {
		
				case KEYCODE_LEFT:
					console.log("left");
					this.myBall.x -= 5;
					this.myBall.scaleX = -.28 ;
				
					return false;
		
				case KEYCODE_RIGHT:
					console.log("right");
					this.myBall.x += 5;
				    this.myBall.scaleX = .28;
				    
					return false;
			}
		}
	}
	this.frame_3 = function() {
		this.stop(); // stops the main timeline
		
		
		this.stop_btn.addEventListener("click", stopMovie.bind(this));
		function stopMovie() {
			
			this.fire_s.stop();
			this.fire_t.stop();
			this.t_i.stop();
			this.royal.stop();
			this.fire_w.visible = false;
			this.f_r.visible = false;
			
			
			
			
		}
		
		this.play_btn.addEventListener("click", playMovie.bind(this));
		function playMovie() {
			this.fire_s.play();
			this.fire_t.play();
			this.t_i.play();
			this.royal.play();
			this.fire_w.visible = true;
			this.f_r.visible = true;
			
			
			
		}
		this.leftBtn.addEventListener("click", gotoPreviousFrame.bind(this));
		
		function gotoPreviousFrame()
		{
			this.leftBtn.removeAllEventListeners();
			this.gotoAndStop(2);
		}
		this.stop();
		this.rightBtn.addEventListener("click", gotoNextFrame.bind(this));
		
		function gotoNextFrame()
		{
			this.rightBtn.removeAllEventListeners();
			this.gotoAndStop(4);
		}
		this.stop();
		this.royal.visible = false;
		this.stop();
		
		var ball= this.myBall;
		
		
		this.addEventListener("tick", gotoPreviousFrameAndStop.bind(this));
		
		function gotoPreviousFrameAndStop()
		{  if (this.myBall.x <= 0){
			this.removeAllEventListeners();
			this.gotoAndStop(2);
		 }	
		}
		this.stop();
		
		var ball= this.myBall;
		
		
		
		this.addEventListener("tick", gotoNextFrameAndStop.bind(this));
		
		function gotoNextFrameAndStop()
		 {  if (this.myBall.x >= 550){
			this.removeAllEventListeners();
			this.gotoAndStop(4);
		 }	
		}
		var KEYCODE_LEFT = 37;
		var KEYCODE_UP = 38;
		var KEYCODE_RIGHT = 39;
		var KEYCODE_DOWN = 40;
		
		document.onkeydown = handleKeyDown.bind(this);
		
		function handleKeyDown(e) {
			//cross browser issues exist
			
			if (!e) {
				var e = window.event;
			}
			switch (e.keyCode) {
		
				case KEYCODE_LEFT:
					console.log("left");
					this.myBall.x -= 5;
					this.myBall.scaleX = -.28 ;
				
					return false;
		
				case KEYCODE_RIGHT:
					console.log("right");
					this.myBall.x += 5;
				    this.myBall.scaleX = .28;
				    
					return false;
			}
		}
	}
	this.frame_4 = function() {
		
		this.stop(); // stops the main timeline
		
		
		this.stop_btn1.addEventListener("click", stopMovie.bind(this));
		function stopMovie() {
			this.text_out.stop();
		}
		
		this.play_btn1.addEventListener("click", playMovie.bind(this));
		function playMovie() {
			this.text_out.play();
		}
		this.play_btn1.visible = false;
		this.stop_btn1.visible = false;
		this.leftBtn.addEventListener("click", gotoPreviousFrame.bind(this));
		
		function gotoPreviousFrame()
		{
			this.leftBtn.removeAllEventListeners();
			this.gotoAndStop(3);
		}
		this.stop();
		this.rightBtn.addEventListener("click", gotoNextFrame.bind(this));
		
		function gotoNextFrame()
		{
			this.rightBtn.removeAllEventListeners();
			this.gotoAndStop(5);
		}
		this.stop();
		this.text_out.visible = false;
		//*********************
		// Initialize:
		this.sword_mc.visible = false;
			var pieceName = "sword_mc"
			var piece = this[pieceName];
			if( piece ){
				piece.name = pieceName;
				piece.on("mousedown", function(evt) 
				{
					this.scaleX = 1;
					this.scaleY = 1;
					this.shadow = null;
					this.parent.addChild(this);// Bump to top of zindex
					this.offset = {x:this.x - evt.stageX, y:this.y - evt.stageY};
				});
				piece.on("pressmove", function(evt) 
				{
					this.x = evt.stageX + this.offset.x;
					this.y = evt.stageY + this.offset.y;
				});
				piece.on("pressup", function(evt) 
				{
					var target = this.parent["t"+this.name.substr(1)];
					if( target && hitTestInRange( target, 30) ){
						this.x = target.x;
						this.y = target.y;
					}
				});
			}
		
		
		function hitTestInRange( target, range )
		{
			if( target.x > stage.mouseX - range &&
				target.x < stage.mouseX + range &&
				target.y > stage.mouseY - range &&
				target.y < stage.mouseY + range )
			{
				return true;
			}
			return false;
		}
		this.num_10.visible = false;
		this.stop(); // stops the main timeline
		
		
		
		
		this.num_10.addEventListener("click", playMov.bind(this));
		function playMov() {
			this.lips.play();
		}
		this.stop();
		this.lips.visible = false;
		this.stop();
		
		var ball= this.myBall;
		
		
		this.addEventListener("tick", gotoPreviousFrameAndStop.bind(this));
		
		function gotoPreviousFrameAndStop()
		{  if (this.myBall.x <= 0){
			this.removeAllEventListeners();
			this.gotoAndStop(3);
		 }	
		}
		this.stop();
		
		var ball= this.myBall;
		
		
		
		this.addEventListener("tick", gotoNextFrameAndStop.bind(this));
		
		function gotoNextFrameAndStop()
		 {  if (this.myBall.x >= 550){
			this.removeAllEventListeners();
			this.gotoAndStop(5);
		 }	
		}
		var KEYCODE_LEFT = 37;
		var KEYCODE_UP = 38;
		var KEYCODE_RIGHT = 39;
		var KEYCODE_DOWN = 40;
		
		document.onkeydown = handleKeyDown.bind(this);
		
		function handleKeyDown(e) {
			//cross browser issues exist
			
			if (!e) {
				var e = window.event;
			}
			switch (e.keyCode) {
		
				case KEYCODE_LEFT:
					console.log("left");
					this.myBall.x -= 5;
					this.myBall.scaleX = -.28 ;
				
					return false;
		
				case KEYCODE_RIGHT:
					console.log("right");
					this.myBall.x += 5;
				    this.myBall.scaleX = .28;
				    
					return false;
			}
		}
	}
	this.frame_5 = function() {
		this.stop(); // stops the main timeline
		
		
		this.stop_btn1.addEventListener("click", stopMovie.bind(this));
		function stopMovie() {
			this.te.stop();
			this.leav_mc.stop();
			this.crow.stop();
		}
		
		this.play_btn1.addEventListener("click", playMovie.bind(this));
		function playMovie() {
			this.te.play();
			this.leav_mc.play();
			this.crow.stop();
		}
		this.leftBtn.addEventListener("click", gotoPreviousFrame.bind(this));
		
		function gotoPreviousFrame()
		{
			this.leftBtn.removeAllEventListeners();
			this.gotoAndStop(4);
		}
		this.stop();
		this.rightBtn.addEventListener("click", gotoNextFrame.bind(this));
		
		function gotoNextFrame()
		{
			this.rightBtn.removeAllEventListeners();
			this.gotoAndStop(6);
		}
		this.stop();
		this.stop();
		this.crow.visible = false;
		//*********************
		// Initialize:
		
			var pieceName = "crow"
			var piece = this[pieceName];
			if( piece ){
				piece.name = pieceName;
				piece.on("mousedown", function(evt) 
				{
					this.scaleX = 1;
					this.scaleY = 1;
					this.shadow = null;
					this.parent.addChild(this);// Bump to top of zindex
					this.offset = {x:this.x - evt.stageX, y:this.y - evt.stageY};
				});
				piece.on("pressmove", function(evt) 
				{
					this.x = evt.stageX + this.offset.x;
					this.y = evt.stageY + this.offset.y;
				});
				piece.on("pressup", function(evt) 
				{
					var target = this.parent["t"+this.name.substr(1)];
					if( target && hitTestInRange( target, 30) ){
						this.x = target.x;
						this.y = target.y;
					}
				});
			}
		
		
		function hitTestInRange( target, range )
		{
			if( target.x > stage.mouseX - range &&
				target.x < stage.mouseX + range &&
				target.y > stage.mouseY - range &&
				target.y < stage.mouseY + range )
			{
				return true;
			}
			return false;
		}
		this.leav_mc.visible = false;
		this.stop();
		
		var ball= this.myBall;
		
		
		this.addEventListener("tick", gotoPreviousFrameAndStop.bind(this));
		
		function gotoPreviousFrameAndStop()
		{  if (this.myBall.x <= 0){
			this.removeAllEventListeners();
			this.gotoAndStop(4);
		 }	
		}
		this.stop();
		
		var ball= this.myBall;
		
		
		
		this.addEventListener("tick", gotoNextFrameAndStop.bind(this));
		
		function gotoNextFrameAndStop()
		 {  if (this.myBall.x >= 550){
			this.removeAllEventListeners();
			this.gotoAndStop(6);
		 }	
		}
		var KEYCODE_LEFT = 37;
		var KEYCODE_UP = 38;
		var KEYCODE_RIGHT = 39;
		var KEYCODE_DOWN = 40;
		
		document.onkeydown = handleKeyDown.bind(this);
		
		function handleKeyDown(e) {
			//cross browser issues exist
			
			if (!e) {
				var e = window.event;
			}
			switch (e.keyCode) {
		
				case KEYCODE_LEFT:
					console.log("left");
					this.myBall.x -= 5;
					this.myBall.scaleX = -.28 ;
				
					return false;
		
				case KEYCODE_RIGHT:
					console.log("right");
					this.myBall.x += 5;
				    this.myBall.scaleX = .28;
				    
					return false;
			}
		}
	}
	this.frame_6 = function() {
		this.stop(); // stops the main timeline
		
		
		this.stop_btn1.addEventListener("click", stopMovie.bind(this));
		function stopMovie() {
			this.text_15.stop();
		
		}
		
		this.play_btn1.addEventListener("click", playMovie.bind(this));
		function playMovie() {
			this.text_15.play();
			
		}
		this.leftBtn.addEventListener("click", gotoPreviousFrame.bind(this));
		
		function gotoPreviousFrame()
		{
			this.leftBtn.removeAllEventListeners();
			this.gotoAndStop(5);
		}
		this.stop();
		this.rightBtn.addEventListener("click", gotoNextFrame.bind(this));
		
		function gotoNextFrame()
		{
			this.rightBtn.removeAllEventListeners();
			this.gotoAndStop(7);
		}
		this.stop();
		this.stop();
		
		this.pop_1.visible = false;
		this.pop_2.visible = false;
		this.pop_3.visible = false;
		this.pop_4.visible = false;
		this.pop_5.visible = false;
		this.pop_6.visible = false;
		
		
		this.queen_btn.addEventListener("click",onClick.bind(this));
		this.queen_btn.addEventListener("mouseover",onOver.bind(this));
		
		function onClick(){
		this.pop_1.visible = true;
		this.pop_2.visible = true;
		this.pop_3.visible = true;
		this.pop_4.visible = true;
		this.pop_5.visible = true;
		this.pop_6.visible = true;
			
			
		}
		
		function onOver(){
			this.pop_1.visible = false;
		    this.pop_2.visible = false;
			this.pop_3.visible = false;
			this.pop_4.visible = false;
			this.pop_5.visible = false;
		    this.pop_6.visible = false;
			
			
			
			
		}
		this.stop();
		
		var ball= this.myBall;
		
		
		this.addEventListener("tick", gotoPreviousFrameAndStop.bind(this));
		
		function gotoPreviousFrameAndStop()
		{  if (this.myBall.x <= 0){
			this.removeAllEventListeners();
			this.gotoAndStop(5);
		 }	
		}
		this.stop();
		
		var ball= this.myBall;
		
		
		
		this.addEventListener("tick", gotoNextFrameAndStop.bind(this));
		
		function gotoNextFrameAndStop()
		 {  if (this.myBall.x >= 550){
			this.removeAllEventListeners();
			this.gotoAndStop(7);
		 }	
		}
		var KEYCODE_LEFT = 37;
		var KEYCODE_UP = 38;
		var KEYCODE_RIGHT = 39;
		var KEYCODE_DOWN = 40;
		
		document.onkeydown = handleKeyDown.bind(this);
		
		function handleKeyDown(e) {
			//cross browser issues exist
			
			if (!e) {
				var e = window.event;
			}
			switch (e.keyCode) {
		
				case KEYCODE_LEFT:
					console.log("left");
					this.myBall.x -= 5;
					this.myBall.scaleX = -.28 ;
				
					return false;
		
				case KEYCODE_RIGHT:
					console.log("right");
					this.myBall.x += 5;
				    this.myBall.scaleX = .28;
				    
					return false;
			}
		}
	}
	this.frame_7 = function() {
		this.stop();
		this.play_again.addEventListener("click", gotoNextFrameAndStop.bind(this));
		
		function gotoNextFrameAndStop()
		{
			this.play_again.removeAllEventListeners();
			this.gotoAndStop(0);
		}
		this.stop();
		
		var ball= this.myBall;
		
		
		this.addEventListener("tick", gotoPreviousFrameAndStop.bind(this));
		
		function gotoPreviousFrameAndStop()
		{  if (this.myBall.x <= 0){
			this.removeAllEventListeners();
			this.gotoAndStop(6);
		 }	
		}
		var KEYCODE_LEFT = 37;
		var KEYCODE_UP = 38;
		var KEYCODE_RIGHT = 39;
		var KEYCODE_DOWN = 40;
		
		document.onkeydown = handleKeyDown.bind(this);
		
		function handleKeyDown(e) {
			//cross browser issues exist
			
			if (!e) {
				var e = window.event;
			}
			switch (e.keyCode) {
		
				case KEYCODE_LEFT:
					console.log("left");
					this.myBall.x -= 5;
					this.myBall.scaleX = -.28 ;
				
					return false;
		
				case KEYCODE_RIGHT:
					console.log("right");
					this.myBall.x += 5;
				    this.myBall.scaleX = .28;
				    
					return false;
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1));

	// Layer 1
	this.pip = new lib.pip();
	this.pip.setTransform(414,259.8,1,1,0,0,0,52,10.4);
	this.pip._off = true;

	this.timeline.addTween(cjs.Tween.get(this.pip).wait(2).to({_off:false},0).to({_off:true},1).wait(5));

	// play_2
	this.stop_btn1 = new lib.stop_i();
	this.stop_btn1.setTransform(429,225.9,0.668,0.668);
	new cjs.ButtonHelper(this.stop_btn1, 0, 1, 1);

	this.play_btn1 = new lib.play_i();
	this.play_btn1.setTransform(393.7,226.9,0.613,0.613);
	new cjs.ButtonHelper(this.play_btn1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.play_btn1},{t:this.stop_btn1}]},4).to({state:[{t:this.play_btn1},{t:this.stop_btn1}]},1).to({state:[{t:this.play_btn1},{t:this.stop_btn1}]},1).to({state:[]},1).wait(1));

	// play
	this.stop_btn = new lib.flatbluestop();
	this.stop_btn.setTransform(423.3,221.8);
	new cjs.ButtonHelper(this.stop_btn, 0, 1, 1);

	this.play_btn = new lib.flatblueplay();
	this.play_btn.setTransform(384.7,221.8);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.play_btn},{t:this.stop_btn}]},2).to({state:[{t:this.play_btn},{t:this.stop_btn}]},1).to({state:[]},1).wait(4));

	// left
	this.leftBtn = new lib.left_arrow();
	this.leftBtn.setTransform(46.8,168.3,0.303,0.303);
	this.leftBtn._off = true;
	new cjs.ButtonHelper(this.leftBtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.leftBtn).wait(1).to({_off:false},0).wait(5).to({_off:true},1).wait(1));

	// right
	this.rightBtn = new lib.right_arrow();
	this.rightBtn.setTransform(492.4,165.2,0.283,0.283);
	this.rightBtn._off = true;
	new cjs.ButtonHelper(this.rightBtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.rightBtn).wait(1).to({_off:false},0).wait(5).to({_off:true},1).wait(1));

	// Layer 8
	this.text_out = new lib.text_scene4();
	this.text_out.setTransform(-276.9,361);
	this.text_out._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_out).wait(4).to({_off:false},0).to({_off:true},1).wait(3));

	// Layer 10
	this.TE = new lib.TE();
	this.TE.setTransform(-345.4,376.8,1,1,0,0,0,98.5,10.4);
	this.TE._off = true;

	this.timeline.addTween(cjs.Tween.get(this.TE).wait(2).to({_off:false},0).to({_off:true},1).wait(5));

	// Layer 7
	this.text = new lib.text();
	this.text.setTransform(-284.9,348.5,1,1,0,0,0,209,11);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({_off:false},0).to({_off:true},1).wait(5));

	// pop_1
	this.text_1 = new cjs.Text("S T A R T", "bold 31px 'Arial'", "#FFFFFF");
	this.text_1.lineHeight = 33;
	this.text_1.lineWidth = 156;
	this.text_1.setTransform(200,234.7);

	this.overmc_3 = new lib.overmc_2();
	this.overmc_3.setTransform(264,83.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.overmc_3},{t:this.text_1}]}).to({state:[]},1).wait(7));

	// pop1
	this.clicked1_mc = new lib.cl();
	this.clicked1_mc.setTransform(274.1,375.3);

	this.timeline.addTween(cjs.Tween.get(this.clicked1_mc).to({_off:true},1).wait(7));

	// start_btn
	this.text_2 = new cjs.Text("DEADLEFIZZ DINASAUR'S\n DISASTROUS DECISION", "bold 27px 'Arial'", "#FFFFFF");
	this.text_2.lineHeight = 29;
	this.text_2.lineWidth = 364;
	this.text_2.setTransform(95.2,127);

	this.start1_btn = new lib.henry_start();
	this.start1_btn.setTransform(276.7,255,1.755,1,0,0,0,108.5,29.4);
	new cjs.ButtonHelper(this.start1_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.start1_btn},{t:this.text_2}]}).to({state:[]},1).wait(7));

	// henry_logo
	this.instance = new lib.FRAME();
	this.instance.setTransform(48,4.1,0.892,1.011);

	this.press1_btn = new lib.Btn();
	this.press1_btn.setTransform(276.1,193,1.706,1.706,0,0,0,110.3,105.9);
	new cjs.ButtonHelper(this.press1_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.press1_btn},{t:this.instance}]}).to({state:[]},1).wait(7));

	// ins
	this.press10_btn = new lib.bun();
	this.press10_btn.setTransform(272.5,171);
	this.press10_btn._off = true;
	new cjs.ButtonHelper(this.press10_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.press10_btn).wait(1).to({_off:false},0).to({_off:true},1).wait(6));

	// Layer 2
	this.clicked3_mc = new lib.clicked3_mc();
	this.clicked3_mc.setTransform(264.5,363.5,1,1,0,0,0,231.5,28.5);
	this.clicked3_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.clicked3_mc).wait(1).to({_off:false},0).to({_off:true},1).wait(6));

	// royal
	this.royal = new lib.royal();
	this.royal.setTransform(272.3,137.3,0.568,0.568,0,0,0,168.2,189.1);
	this.royal._off = true;

	this.timeline.addTween(cjs.Tween.get(this.royal).wait(3).to({_off:false},0).to({_off:true},1).wait(4));

	// fire_red
	this.fire_t = new lib.f_r();
	this.fire_t.setTransform(408.4,67.6,0.087,0.087);
	this.fire_t._off = true;

	this.timeline.addTween(cjs.Tween.get(this.fire_t).wait(3).to({_off:false},0).to({_off:true},1).wait(4));

	// Layer 13
	this.HNHN = new lib.HNHN();
	this.HNHN.setTransform(-286.9,355.8,1,1,0,0,0,194,10.4);
	this.HNHN._off = true;

	this.timeline.addTween(cjs.Tween.get(this.HNHN).wait(3).to({_off:false},0).to({_off:true},1).wait(4));

	// fire_w
	this.fire_s = new lib.fire_w();
	this.fire_s.setTransform(164.3,65);
	this.fire_s._off = true;

	this.timeline.addTween(cjs.Tween.get(this.fire_s).wait(3).to({_off:false},0).to({_off:true},1).wait(4));

	// sword
	this.sword_mc = new lib.sword_mc();
	this.sword_mc.setTransform(144,188.6,1,1,-10.4,0,0,20.6,57.8);
	this.sword_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.sword_mc).wait(4).to({_off:false},0).to({_off:true},1).wait(3));

	// talk
	this.text_3 = new cjs.Text("TALK (PRESS)", "bold 14px 'Arial'", "#FFFFFF");
	this.text_3.lineHeight = 16;
	this.text_3.lineWidth = 100;
	this.text_3.setTransform(226.5,207.7);
	this.text_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_3).wait(4).to({_off:false},0).to({_off:true},1).wait(3));

	// Layer 15
	this.instance_1 = new lib.gng();
	this.instance_1.setTransform(286,138.2,1,1,0,0,0,148,84.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({_off:true},1).wait(3));

	// Layer 12
	this.num_10 = new lib.ttn();
	this.num_10.setTransform(277.5,218.4,2.755,0.714);
	this.num_10._off = true;
	new cjs.ButtonHelper(this.num_10, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.num_10).wait(4).to({_off:false},0).to({_off:true},1).wait(3));

	// Layer 11
	this.instance_2 = new lib._72();
	this.instance_2.setTransform(116.8,28.5,0.668,0.534);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({_off:true},1).wait(4));

	// lips
	this.lips = new lib.lipsmc();
	this.lips.setTransform(276.5,116,1,1,0,0,0,71.6,79.7);
	this.lips._off = true;

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(4).to({_off:false},0).to({_off:true},1).wait(3));

	// tex
	this.te = new lib.tew();
	this.te.setTransform(-164.5,364.7);
	this.te._off = true;

	this.timeline.addTween(cjs.Tween.get(this.te).wait(5).to({_off:false},0).to({_off:true},1).wait(2));

	// crown
	this.crow = new lib.crow_2();
	this.crow.setTransform(242.4,208.3,1,1,0,0,0,0.1,0.4);
	this.crow._off = true;

	this.timeline.addTween(cjs.Tween.get(this.crow).wait(5).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer 14
	this.leav_mc = new lib.leavemc();
	this.leav_mc.setTransform(278.3,135.7,0.362,0.415,0,0,0,483.5,288.1);
	this.leav_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.leav_mc).wait(5).to({_off:false},0).to({_off:true},1).wait(2));

	// text_cham
	this.text_15 = new lib.text_12();
	this.text_15.setTransform(-278.4,363.5);
	this.text_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_15).wait(6).to({_off:false},0).to({_off:true},1).wait(1));

	// btn_text
	this.text_4 = new cjs.Text("Reveal Queens Names", "bold 10px 'Arial'", "#FFFFFF");
	this.text_4.lineHeight = 12;
	this.text_4.lineWidth = 113;
	this.text_4.setTransform(233.8,28.5);
	this.text_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_4).wait(6).to({_off:false},0).to({_off:true},1).wait(1));

	// btn
	this.queen_btn = new lib.queen();
	this.queen_btn.setTransform(286,36);
	this.queen_btn._off = true;
	new cjs.ButtonHelper(this.queen_btn, 0, 1, 2, false, new lib.queen(), 3);

	this.timeline.addTween(cjs.Tween.get(this.queen_btn).wait(6).to({_off:false},0).to({_off:true},1).wait(1));

	// text_6
	this.pop_1 = new cjs.Text("Catherine Of Aragon", "bold 10px 'Arial'");
	this.pop_1.name = "pop_1";
	this.pop_1.lineHeight = 12;
	this.pop_1.lineWidth = 99;
	this.pop_1.setTransform(122.7,50.1);
	this.pop_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.pop_1).wait(6).to({_off:false},0).to({_off:true},1).wait(1));

	// text_7
	this.pop_2 = new cjs.Text("Anne Boleyn", "bold 10px 'Arial'");
	this.pop_2.name = "pop_2";
	this.pop_2.lineHeight = 12;
	this.pop_2.lineWidth = 63;
	this.pop_2.setTransform(125.2,146.8);
	this.pop_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.pop_2).wait(6).to({_off:false},0).to({_off:true},1).wait(1));

	// text_8
	this.pop_3 = new cjs.Text("Jane Seymor", "bold 10px 'Arial'");
	this.pop_3.name = "pop_3";
	this.pop_3.lineHeight = 12;
	this.pop_3.lineWidth = 66;
	this.pop_3.setTransform(222.5,142.6);
	this.pop_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.pop_3).wait(6).to({_off:false},0).to({_off:true},1).wait(1));

	// text_9
	this.pop_4 = new cjs.Text("Anne of Cleves", "bold 10px 'Arial'");
	this.pop_4.name = "pop_4";
	this.pop_4.lineHeight = 12;
	this.pop_4.lineWidth = 77;
	this.pop_4.setTransform(310.3,144.3);
	this.pop_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.pop_4).wait(6).to({_off:false},0).to({_off:true},1).wait(1));

	// text_10
	this.pop_5 = new cjs.Text("Catherine Howard", "bold 10px 'Arial'");
	this.pop_5.name = "pop_5";
	this.pop_5.lineHeight = 12;
	this.pop_5.lineWidth = 100;
	this.pop_5.setTransform(228,50.1);
	this.pop_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.pop_5).wait(6).to({_off:false},0).to({_off:true},1).wait(1));

	// text_11
	this.pop_6 = new cjs.Text("Catherine Parr", "bold 10px 'Arial'");
	this.pop_6.name = "pop_6";
	this.pop_6.lineHeight = 12;
	this.pop_6.lineWidth = 80;
	this.pop_6.setTransform(360.3,45.3);
	this.pop_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.pop_6).wait(6).to({_off:false},0).to({_off:true},1).wait(1));

	// 6
	this.parr = new lib.parr();
	this.parr.setTransform(392.6,97.5,0.392,0.392,0,0,0,71.5,103);
	this.parr._off = true;
	new cjs.ButtonHelper(this.parr, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.parr).wait(6).to({_off:false},0).to({_off:true},1).wait(1));

	// 5
	this.catherine = new lib.catherine();
	this.catherine.setTransform(274,102.6,0.344,0.344,0,0,0,77.5,108.6);
	this.catherine._off = true;
	new cjs.ButtonHelper(this.catherine, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.catherine).wait(6).to({_off:false},0).to({_off:true},1).wait(1));

	// 4
	this.clives = new lib.clives();
	this.clives.setTransform(339.9,198.1,0.354,0.354,0,0,0,56,115.7);
	this.clives._off = true;
	new cjs.ButtonHelper(this.clives, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.clives).wait(6).to({_off:false},0).to({_off:true},1).wait(1));

	// 3
	this.jane = new lib.janebtn();
	this.jane.setTransform(250.9,196.5,0.38,0.38,0,0,0,77.9,119);
	this.jane._off = true;
	new cjs.ButtonHelper(this.jane, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.jane).wait(6).to({_off:false},0).to({_off:true},1).wait(1));

	// 2
	this.anne_1 = new lib.anne();
	this.anne_1.setTransform(160,202,0.407,0.407,0,0,0,92.6,102.6);
	this.anne_1._off = true;
	new cjs.ButtonHelper(this.anne_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.anne_1).wait(6).to({_off:false},0).to({_off:true},1).wait(1));

	// 1
	this.cathe_btn = new lib.cathe();
	this.cathe_btn.setTransform(149.5,108.9,0.335,0.335,0,0,0,80.9,113.6);
	this.cathe_btn._off = true;
	new cjs.ButtonHelper(this.cathe_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.cathe_btn).wait(6).to({_off:false},0).to({_off:true},1).wait(1));

	// TEXT_EXIT
	this.text_5 = new cjs.Text("EXIT", "bold 20px 'Arial'", "#FFFFFF");
	this.text_5.lineHeight = 22;
	this.text_5.lineWidth = 58;
	this.text_5.setTransform(245,160.9);
	this.text_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_5).wait(7).to({_off:false},0).wait(1));

	// TEXT_PLAY
	this.text_6 = new cjs.Text("PLAY AGAIN", "bold 20px 'Arial'", "#FFFFFF");
	this.text_6.lineHeight = 22;
	this.text_6.lineWidth = 128;
	this.text_6.setTransform(215.5,63.4);
	this.text_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_6).wait(7).to({_off:false},0).wait(1));

	// Layer 4
	this.exit = new lib.exit1ai();
	this.exit.setTransform(283,173,1.387,1.533,0,0,0,108.6,29.4);
	this.exit._off = true;
	new cjs.ButtonHelper(this.exit, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.exit).wait(7).to({_off:false},0).wait(1));

	// Layer 3
	this.play_again = new lib.exit1ai();
	this.play_again.setTransform(281.3,77.1,1.387,1.533,0,0,0,108.6,29.4);
	this.play_again._off = true;
	new cjs.ButtonHelper(this.play_again, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.play_again).wait(7).to({_off:false},0).wait(1));

	// hero
	this.myBall = new lib.tudor();
	this.myBall.setTransform(31.8,275.8,0.297,0.297,0,0,0,14.5,-57.9);
	this.myBall._off = true;

	this.timeline.addTween(cjs.Tween.get(this.myBall).wait(1).to({_off:false},0).wait(1).to({regX:14.6,regY:-58,scaleX:0.28,scaleY:0.28,x:37},0).wait(6));

	// road
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#996633").s().p("EgtNAB8IAAj4MBabAAAIAAD4g");
	this.shape.setTransform(274.6,359.4,0.956,3.878);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(7));

	// Layer 9
	this.instance_3 = new lib._71();
	this.instance_3.setTransform(126.8,21.6,0.633,0.553);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({_off:true},1).wait(5));

	// frame
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#996633").ss(3.4,1,1).dr(-168.15,-100.2,336.3,200.4);
	this.shape_1.setTransform(283.9,132.8,1,1.14);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(323,204.1,446.1,382);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;