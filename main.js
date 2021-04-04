var canvas= new fabric.Canvas("myCanvas");
bw=30;
bh=30;
plx=30;
ply=30;
player_object="";
block_object="";
function player_update () {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object=Img;
        player_object.scaleToWidth(140);
        player_object.scaleToHeight(150);
        player_object.set({
            top:ply,left:plx
        });
        canvas.add(player_object);
    });

}
function new_img(get_Img) {
    fabric.Image.fromURL(get_Img, function (Img) {
        block_object=Img;
        block_object.scaleToWidth(140);
        block_object.scaleToHeight(150);
        block_object.set({
            top:ply,left:plx
        });
        canvas.add(block_object);
    });
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e) {
    keypress=e.keyCode;
    console.log(keypress);    
    if (e.shiftKey==true&&keypress=="80") {
        bw=bw+10;
        bh=bh+10;
        document.getElementById("widthl").innerHTML=bw;
        document.getElementById("heightl").innerHTML=bh;
    console.log("Shift and P have been pressed together");
    }
    if (e.shiftKey==true&&keypress=="77") {
        bw=bw-10;
        bh=bh-10;
        document.getElementById("widthl").innerHTML=bw;
        document.getElementById("heightl").innerHTML=bh;
    console.log("Shift and M have been pressed together");
    }
    if (keypress=="70") {
        new_img("ironman_face.png");
        console.log("you pressed f");
    }
    if (keypress=="66") {
        new_img("spiderman_body.png");
    }
    if (keypress=="82") {
        new_img("thor_right_hand.png");
    }
    if (keypress=="72") {
        new_img("captain_america_left_hand.png");
    }
    if (keypress=="76") {
        new_img("hulk_legs.png");
    }
    if (keypress=="38") {
        up(); }
        
        if (keypress=="39") {
            right();
        }
        if (keypress=="37") {
            left();
        }
    }
    function up() {
        if (ply>=0) {
            ply=ply-bh;
            console.log("X ="+plx+"Y =" +ply);
            canvas.remove(player_object);
        player_update();
        }
    }
    
    function down() {
        if (ply<=460) {
            ply=ply+bh;
            console.log("X ="+plx+"Y =" +ply);
            canvas.remove(player_object);
        player_update();
        }
    }
    
    function left() {
        if (plx>=0) {
            plx=plrx-bw;
            console.log("X ="+plx+"Y =" +ply);
            canvas.remove(player_object);
        player_update();
        }
    }
    
    function right() {
        if (plx<=850) {
            plrx=plx+bw;
            console.log("X ="+plx+"Y =" +ply);
            canvas.remove(player_object);
        player_update();
        }
    }
