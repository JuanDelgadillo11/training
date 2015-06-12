var calculateAll = function(){
    console.log('SUMA: ', sum1(arguments));
	document.getElementById("p1").innerHTML="Result:"+sum1(arguments);
	console.log('MAX: ', mayor(arguments));
	document.getElementById("p2").innerHTML="Result:"+mayor(arguments);
	console.log('MIN: ', menor(arguments));
	document.getElementById("p3").innerHTML="Result:"+menor(arguments);
	console.log('Average: ', avg(arguments));
	document.getElementById("p4").innerHTML="Result:"+avg(arguments);
}

var sum = function(numbers, pos){

    if (!pos)
        pos = 0;

    if (pos == numbers.length - 1)
        return numbers[pos];

    return numbers[pos] + sum(numbers, pos + 1)
}
var sum1 = function(numbers, pos){
var resultado=0;
    if (!pos)
        pos = 0;

    if (pos == numbers.length - 1)
        
		return resultado = numbers[pos];
		
	document.getElementById("p1").innerHTML="Result:"+resultado;
    return resultado = numbers[pos] + sum(numbers, pos + 1)
	
};

var mayor = function(numbers, pos){
	
var resultado=0;
    if (!pos)
        pos = 0;

    if (pos == numbers.length - 1){
	
	return resultado = numbers[0];
	console.log("resultado"+resultado);
	
	}
	else{
		if(numbers[0]<numbers[pos+1]){
			
			var aux=numbers[pos+1];
			numbers[pos+1]=numbers[0];
			numbers[0]=aux;
				
	}
	
	return mayor(numbers,pos+1)
  }
};
var menor = function(numbers, pos){
	
var resultado=0;
    if (!pos)
        pos = 0;

    if (pos == numbers.length - 1){
	document.getElementById("p3").innerHTML="Result:"+resultado;
	return resultado = numbers[0];
	console.log("resultado"+resultado);
	}
	else{
		if(numbers[0]>numbers[pos+1]){
			console.log("Entrando al if");
			var aux=numbers[pos+1];
			console.log(aux);
			numbers[pos+1]=numbers[0];
			console.log(numbers[pos+1]);
			numbers[0]=aux;
			console.log(numbers[0]);
		
	}
	
	return menor(numbers,pos+1)
  }
};

var avg = function(numbers, pos){
var resultado=0;
var promedio=0;
    if (!pos)
        pos = 0;

    if (pos == numbers.length - 1)
        return resultado = numbers[pos];

    resultado = numbers[pos] + sum(numbers, pos + 1)
	
	promedio = resultado/parseInt(numbers.length);
	console.log("promedio"+promedio);
	console.log("size"+parseInt(numbers.length));
	
	return promedio;
};