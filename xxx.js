class MyFrame {
	constructor() {
		this.MyFrame = this.generateHeader();
	}

	generateHeader() {
		const myFrame = document.createElement("header");
		document.body.appendChild(myFrame);
		myFrame.style.width = "100vw";
		myFrame.style.height = "15vw";
		// myFrame.style.display = "flex";
		// myFrame.style.flexWarp = "warp";
		myFrame.style.border = "1px solide white";
		return myFrame;
	}

    generateSquere(parent, color, border, width, height, isRows) {
        let squere = document.createElement("div");
        squere.style.width = width+"px";
        squere.style.height = height+"px";
        squere.style.margin = "10px";
        squere.style.backgroundColor = color;
        squere.style.border = border;
        if(isRows){
            squere.style.display = "flex";
            squere.style.flexWarp = "warp";
        }
        parent.appendChild(squere);
        return squere;
	}

}


document.body.style.background = "black";

const myHeder = new MyFrame();
let s1 = myHeder.generateSquere(myHeder.MyFrame, "black", "red solid 3px", 372, 126, true);
myHeder.generateSquere(s1, "red", "red solid 3px", 100, 100, null);
myHeder.generateSquere(s1, "red", "red solid 3px", 100, 100, null);
myHeder.generateSquere(s1, "red", "red solid 3px", 100, 100, null);
let s2 = myHeder.generateSquere(myHeder.MyFrame, "black", "white solid 3px", 372, 332, false)
myHeder.generateSquere(s2, "green", "green solid 3px", 348, 50, null)
myHeder.generateSquere(s2, "blue", "blue solid 3px", 348, 50, null)
myHeder.generateSquere(s2, "green", "green solid 3px", 348, 50, null)
myHeder.generateSquere(s2, "blue", "blue solid 3px", 348, 50, null)
myHeder.generateSquere(s2, "green", "green solid 3px", 348, 50, null)
let s3 = myHeder.generateSquere(myHeder.MyFrame, "black", "white solid 3px", 372, 72, true)
myHeder.generateSquere(s3, "red", "red solid 3px", 220, 48, null)
myHeder.generateSquere(s3, "yellow", "yellow solid 3px", 110, 48, null)

