let secretsWords = ['CACHORRO', 'CELULAR', 'QUADRO', 'CARRO', 'MONITOR', 'GUITARRA', 'PANTERA', 'BRASIL'];
let number;
let secretWord;
let wrongLetter;
//main-display
function enableForcaDisplay(){
    document.querySelector(".main-display").style.display = 'none';
    document.querySelector(".forca-display").style.display = 'initial';
    //newGame();
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

let letters;

//forca-display

function newGame(){
    forcaDraw();
    secretWord = secretWordChoice();
    linesDraw();
    drawSecretWord;
    //letrasErradas();
}
function exitGame(){

}

//parts of game
function secretWordChoice(){
    while(number >= secretsWords.length || number == undefined){
        number = Math.round(Math.random()*10);    
    }
    letters = secretsWords[number];
    //console.log(secretsWords[number]);
    return(secretsWords[number]);
}

//desenha as linhas onde aparece as letras da palavra secreta
function linesDraw(){
    let tela = document.querySelector('canvas');
    let pincel = tela.getContext('2d'); 

    pincel.strokeStyle = '#0A3871';
    pincel.beginPath();
    
    let spaceLength =  450/letters.length; //tamanho do traço
    let borderLines = 10;
    let line = 0;
    let word = secretsWords[number];
    for(let contador=0; contador<letters.length; contador++){
        
        line = Math.round( line +spaceLength);
        pincel.moveTo(borderLines, 500);
        pincel.lineTo(line- 20, 500);
        pincel.stroke();

        //texto
        pincel.font = '32px inter';
        pincel.lineWidth = 1;
        pincel.fillText(word[contador], line-50, 495);

        
        //console.log(line);
        borderLines = borderLines+spaceLength;
    }  
}

//desenha a estrutura da forca
function forcaDraw(){
    let tela = document.querySelector('canvas');
    let pincel = tela.getContext('2d');

    //array com as posições das linhas do canvas
        let coordenadas = [[50, 415], [50, 30],
        [250, 30], [250, 70]]; 

    pincel.strokeStyle = '#0A3871';
    pincel.beginPath();
    pincel.moveTo(300, 415);

    for(let contador = 0; contador < coordenadas.length; contador++){
            pincel.lineTo(coordenadas[contador][0], coordenadas[contador][1]);
            pincel.stroke();
    }
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

function drawSecretWord(){
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle = "green";
    pincel.font = '32px inter';
    pincel.lineWidth = 1;

    let x = 60;
    for(let i=0; i< secretWord.length; i++){
        pincel.fillText(secretWord[i], x, 400);
        x = x + 30;
    }
}

function letrasErradas(wrongLetter){
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle = "red";
    pincel.font = '32px inter';
    pincel.lineWidth = 1;
    let x = 45;
    //if(){
        pincel.fillText(wrongLetter, x, 550);
    //}
    //pincel.fillText("B", 45, 550);
    //pincel.fillText("D", 90, 550);
    //pincel.fillText("U", 135, 550);
    //pincel.fillText("Z", 180, 550);
    //pincel.fillText("W", 225, 550);
    //pincel.fillText("Y", 270, 550);
    
}