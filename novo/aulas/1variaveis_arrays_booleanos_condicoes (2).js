//variaveis
let nome = 'Emerson "Legal" ';
let snome = ' Pinheiro';
let completo = nome + snome;

document.write(nome + '<br>' + snome + '<br>');
document.write(completo.length + '<br>');
document.write(completo.charAt(2) + '<br>');
document.write(completo.substring(0,3) + '<br>');
document.write(completo.toLowerCase() + '<br>');
document.write(completo.toUpperCase() + '<br>');

var name = "Pedro";
{
	let nome = 'José';
	document.write(nome+'<br>');	
}

document.write(nome+'<br>');

//Booleanos
document.write((5 > 10) + '<br>');
document.write((5 < 10) + '<br>');
document.write((5 == 10) + '<br>');
document.write((5 == '10') + '<br>');
document.write((10 != 10) + '<br>');
document.write((10 === 10) + '<br>');
document.write(('5' < 10) + '<br>');

document.write((5 > 10) && (5 < 10) + '<br>');
document.write((5 > 10) && (5 < 10) + '<br>');

document.write((5 > 10) || (5 < 10) + '<br>');
document.write((5 > 10) || (5 < 10) + '<br>');

document.write(!(5 > 10) || !(5 < 10) + '<br>');

document.write((1 > 2 ? 'é maior' : 'é menor') + '<br>');
document.write((true ? 'é maior' : 'é menor') + '<br>');

//Arrays
let lista = ['leite', 'água', 'banana','cafe','arroz'];

document.write(lista.length+'<br>');
document.write(lista[1]+'<br>');
lista[1] = 'panela';
document.write(lista[1]+'<br>');

document.write(lista+'<br>');
lista.pop();
document.write(lista+'<br>');

lista.shift();
document.write(lista+'<br>');

lista.unshift();
document.write(lista+'<br>');

lista.splice(1,1);
document.write(lista+'<br>');

let i = 0;

while(i<=10){
	document.write(i + '<br>');
	i++;
}

for(let i = 0; i <= 10; i++){
	document.write(i + '<br>');
}

for(let i = 0; i < lista.length; i++ ){
	document.write(lista[i]+'<br>');
}

//Condições
if(3 === 3){
	document.write('é igual!'+'<br>');
}

let idade = 17;

if(idade === 22){
	document.write('você tem 22 anos!'+'<br>');
}else if(idade >= 18){
	document.write('maior de idade!'+'<br>');
}else{
	document.write('menor de idade!'+'<br>');
}

for(let i = 0; i < 10; i++){
	if(i === 3){
		//break;
		continue;
	}
	document.write(i + '<br>');
}


let idade2 = 17;

switch(idade2){
	case 17:
		document.write('tem 17!'+'<br>');
		break;
	case 18:
		document.write('tem 18!'+'<br>');
		break;
	default:
		document.write('Não sei!'+'<br>');
		break;
}


