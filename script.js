class PrintBubbles{
    constructor(parent, number) {
        this.parent = parent;
        this.number = number;
    }
    addBubble() {
for(var i = 1; i <= this.number; i++){
    var bubble = document.createElement("div")
    bubble.classList.add("bubble")
    bubble.textContent = 12;
    document.querySelector(this.parent).appendChild(bubble);
}
    }
}

let bubble = new PrintBubbles(".app", 12);
bubble.addBubble(); 