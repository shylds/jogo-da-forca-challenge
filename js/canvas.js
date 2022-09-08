let secretsWords = ['CACHORRO', 'CELULAR', 'QUADRO', 'CARRO', 'MONITOR', 'GUITARRA', 'PANTERA', 'BRASIL'];

//main-display
function enableForcaDisplay(){
    document.querySelector(".main-display").style.display = 'none';
    document.querySelector(".forca-display").style.display = 'initial';
    newGame();
}

function enableWordsDisplay(){
    document.querySelector(".main-display").style.display = 'none';
    document.querySelector(".words-display").style.display = 'initial';
}   

//add new word
function saveWords(){
    secretsWords.push(document.querySelector('.word-text').value); 
    console.log(secretsWords[8].toUpperCase());
}
function cancelChanges(){
    
}



//forca-display
function newGame(){
    //escolha da palavra secreta
    let number;
    while(number >= secretsWords.length || number == undefined){
        number = Math.round(Math.random()*10);    
    }

    console.log(secretsWords[number]);
}
function exitGame(){

}

//parts of game

//desenha as linhas onde aparece as letras da palavra secreta
function linesDraw(){
    let tela = document.querySelector('canvas');
    let pincel = tela.getContext('2d'); 

    pincel.strokeStyle = '#0A3871';
    pincel.beginPath();
    let lines = [20, 530];
    for(let contador=0; contador<6; contador++){
        pincel.moveTo(lines[0], lines[1]);
        lines[0] = lines[0]+ 30 ;
        pincel.lineTo(lines[0], lines[1]);
        lines[0] = lines[0] + 10 ;
        pincel.stroke(); 
   }  
}

//desenha a estrutura da forca
function forcaDraw(){
    let tela = document.querySelector('canvas');
    let pincel = tela.getContext('2d');

    //array com as posições das linhas do canvas
        let coordenadas = [[50, 445, 300, 445], [50, 60, 50, 445],
        [50, 60, 250, 60], [250, 60, 250, 100]]; 

    pincel.strokeStyle = '#0A3871';
    pincel.beginPath();

    for(let contador = 0; contador < coordenadas.length; contador++){
            pincel.moveTo(coordenadas[contador][0], coordenadas[contador][1]);
            pincel.lineTo(coordenadas[contador][2], coordenadas[contador][3]);
            pincel.stroke();
    }
    linesDraw();
}

//desenha o personagem na forca 
function characterDraw(){
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    //cabeça, tronco, braço direito, braço esquerdo, perna direita, perna esquerda 
    let characterBody =[[275, 120, 250, 120],[250, 130, 250, 280],
        [250, 150, 280, 200],[250, 150, 220, 200],
        [250, 280, 280, 340],[250, 280, 220, 340]]
        
        pincel.fillStyle = "#0A3871";
        pincel.lineWidth = 5;
        pincel.beginPath();
        for(let count=0; count < characterBody.length; count++){
            if(characterBody[count][0]!= 275){
                pincel.beginPath();
                pincel.moveTo(characterBody[count][0], characterBody[count][1]);
                pincel.lineTo(characterBody[count][2], characterBody[count][3]);
                pincel.stroke();  
            }
            else{
                pincel.moveTo(characterBody[count][0], characterBody[count][1]);
                pincel.arc(characterBody[count][2], characterBody[count][3], 25, 0, 2* 3.14);
                pincel.stroke();
           }
        }
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