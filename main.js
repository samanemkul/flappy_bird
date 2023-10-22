const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");



const bird = new Bird();
const bg = new Background(0,0);
const pipe = new Pipe();
const bg2 = new Background(bg.size.width,0);



function animate(){
    c.clearRect(0,0,canvas.width,canvas.height)
    
    bg.update(bird.isDead);
    bg2.update(bird.isDead);
    pipe.update();
    bird.update();

    c.beginPath();
    c.fillStyle ="white";
    c.font = "30px sans serif";
    c.fillText(gameScore,10,40);
    if(bird.isDead){
        clearInterval(IntervalId);
    }
    requestAnimationFrame(animate);
}
let gameScore = 0;
const IntervalId = setInterval(()=>{
    gameScore++;
}, 1000);

document.addEventListener("keydown",() =>{
bird.jump();
});
animate();