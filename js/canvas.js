function desenhaForca(){
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

        
        pincel.fillStyle = "#0A3871";
        pincel.lineWidth = 5;
        //cabeça
        pincel.beginPath();
        pincel.moveTo(150, 100);
        pincel.arc(250, 120, 25, 0, 2* 3.14);
        pincel.fill();

        //tronco
        pincel.strokeStyle = "#0A3871";
        pincel.beginPath();
        pincel.moveTo(250, 130)
        pincel.lineTo(250, 280)
        
        //braço direito
        pincel.moveTo(250, 150);
        pincel.lineTo(280, 200);
        

        //braço esquerdo
        pincel.moveTo(250, 150);
        pincel.lineTo(220, 200);
        pincel.stroke();

        //perna direita
        pincel.moveTo(250, 280);
        pincel.lineTo(280, 340);

        //perna esquerda
        pincel.moveTo(250, 280);
        pincel.lineTo(220, 340);

        //traço debaixo
        pincel.moveTo(50, 445);
        pincel.lineTo(300, 445);

        //traço da esquerda
        pincel.moveTo(50, 60);
        pincel.lineTo(50, 445);

        //traço de cima
        pincel.moveTo(50, 60);
        pincel.lineTo(250, 60);

        //traço forca
        pincel.moveTo(250, 60);
        pincel.lineTo(250, 100);
        pincel.stroke();
}

function desenhaTracos(){
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.strokeStyle = "#0A3871";
    pincel.beginPath();
    pincel.moveTo(20, 530);
    pincel.lineTo(50, 530);
    pincel.moveTo(60, 530);
    pincel.lineTo(90, 530);
    pincel.moveTo(100, 530);
    pincel.lineTo(130, 530);
    pincel.moveTo(140, 530);
    pincel.lineTo(170, 530);
    pincel.moveTo(180, 530);
    pincel.lineTo(210, 530);
    pincel.moveTo(220, 530);
    pincel.lineTo(250, 530);
    pincel.moveTo(260, 530);
    pincel.lineTo(290, 530);
    pincel.moveTo(300, 530);
    pincel.lineTo(330, 530);
    pincel.stroke();   
}
function palavraSecreta(){
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle = "green";
    pincel.font = '32px inter';
    pincel.lineWidth = 1;
    pincel.fillText("", 60, 440);
    pincel.fillText("", 90, 440);
    pincel.fillText("F", 120, 440);
    pincel.fillText("O", 150, 440);
    pincel.fillText("R", 180, 440);
    pincel.fillText("C", 210, 440);
    pincel.fillText("A", 240, 440);
    pincel.fillText("", 270, 440);
}

function desenhaLetras(){
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle = "#0A3871";
    pincel.font = '32px inter';
    pincel.lineWidth = 1;
    pincel.fillText("", 25, 525);
    pincel.fillText("", 65, 525);
    pincel.fillText("F", 105, 525);
    pincel.fillText("O", 145, 525);
    pincel.fillText("R", 185, 525);
    pincel.fillText("C", 225, 525);
    pincel.fillText("A", 265, 525);
    pincel.fillText("", 305, 525);
}

function letrasErradas(){
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle = "red";
    pincel.font = '32px inter';
    pincel.lineWidth = 1;
    pincel.fillText("B", 45, 570);
    pincel.fillText("D", 90, 570);
    pincel.fillText("U", 135, 570);
    pincel.fillText("Z", 180, 570);
    pincel.fillText("W", 225, 570);
    pincel.fillText("Y", 270, 570);
    
}