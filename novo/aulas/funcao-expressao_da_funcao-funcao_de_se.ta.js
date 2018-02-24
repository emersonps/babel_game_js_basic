//Objetos

let caneta = {
	cor: 'preto',
	marca: 'BIC'
};

document.write(caneta.cor+'<br>');
caneta.cor = 'azul';
document.write(caneta.cor+'<br>');


let caneta2 = {};
caneta2['marca'] = 'BIC';
document.write(caneta2.marca+'<br>');

let caneta3 = {};
let propriedade = 'marca';
caneta3[propriedade] = 'FABER';
document.write(caneta3.marca+'<br>');

let caneta4 = {};
caneta4['cor da caneta'] = 'azul';
document.write(caneta4['cor da caneta']+'<br>');

let caneta5 = {
	cor: 'preta',
	minhaCor: function(){
		return 'Minha cor é '+this.cor+'<br>';
	}
}

document.write(caneta5.minhaCor());



//função
function quadrado(num){
	return num*num;
}
document.write(quadrado(2)+'<br>');

//expressao de função
let soma = function(num1,num2){
	return num1+num2;
}
document.write(soma(2,3)+'<br>');

//função de seta
let quadrado2 = numero => {
	return numero * numero;
}

document.write(quadrado2(2)+'<br>');