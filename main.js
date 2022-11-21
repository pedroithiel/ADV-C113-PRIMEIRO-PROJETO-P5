var retangulo;

function preload() {

}

function setup() {
    canvas = createCanvas(450, 400)
    canvas.position(300, 299)
    video = createCapture(VIDEO)
    video.hide()
}

function draw() {
    
    //conectar comera
    image(video, 0, 0, 450, 400)

    //cor amarela
    var cor = color(255, 204, 0);
    fill(cor);

    //retangulo da direito
    rect(395, 0, 55, 400, 20);
    //retangulo da esqueda
    rect(0, 0, 55, 400, 20);
    //retangulo de cima
    rect(50, 0, 350, 50, 20);
    //retangulo de baixo
    rect(50, 350, 350, 50, 20);
    
    //bolinhas de baixo
    //rect(50, 350, 50, 50, 20);
    //rect(350, 350, 50, 50, 20);
    
    //bolinhas de cima
    //rect(50, 0, 50, 50, 20);
    //rect(350, 0, 50, 50, 20);
    
    //bolinhas da esquerda
    rect(0, 0, 55, 50, 20);
    rect(0, 350, 55, 50, 20);
    
    //bolinhas da direita
    rect(395, 0, 55, 50, 20);
    rect(395, 350, 55, 50, 20);
    
}

function takeSnapshot() {
    save("foto.jpg")
}
//rect(400, 0, 55, 400, 20);