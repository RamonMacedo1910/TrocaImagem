let imagem1 = "Carro.jpg";
let  imagem2 = "Carro2.jpg";
let imagem3 = "Carro3.jpg";

function Mudar(){
    document.getElementById("figura").src = imagem1;
    let início= imagem1;
    imagem1 = imagem2;
    imagem2 = imagem3;
    imagem3 = início;
}