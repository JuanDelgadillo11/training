/*
* Author: Juan Delgadillo
* Task1: Create function to sum, max,min and avg
* */


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



/*
* Task 3
* This class contains functions for sum, Max, min, avg, add, subtract, multiply and divide
 */
calculadora1= {
	memory:0,

	delMemory:function()
	{
		this.memory=0;
		return this.memory;
	},

	addMemory:function(value)
	{
		this.memory+=value;
	},

	suma : function(arguments, pos)
	{
		var result = this.sum(arguments,pos);
		this.memory+=result;
		return result;
	},

	major : function(arguments, pos)
	{
		var result = this.max(arguments,pos);
		this.memory+=result;
		return result;
	},

	minor : function(arguments, pos)
	{
		var result = this.min(arguments,pos);
		this.memory+=result;
		return result;
	},

	averageCalc : function(arguments, pos)
	{
		var result = this.avg(arguments,pos);
		this.memory+=result;
		return result;
	},

	subtraction: function(arguments,pos)
	{
		var result = this.substract(arguments,pos);
		this.memory-=result;
		return result;
	},

	multiplication: function(arguments,pos)
	{
		var result = this.multiply(arguments,pos);
		this.memory*=result;
		return result;
	},

	division: function(arguments,pos)
	{
		var result = this.divide(arguments,pos);
		this.memory/=result;
		return result;
	},

	sum: function(arguments, pos){

		if (!pos)
			pos = 0;

		if (pos == arguments.length - 1)
		{
			//this.memory += arguments[pos];
			return arguments[pos];
		}
		//var result=  arguments[pos] + this.sum(arguments, pos + 1);
		//this.memory += result;
		return arguments[pos] + this.sum(arguments, pos + 1)
		//this.addMemory(result);
		//return result;
	},
	max: function(arguments, pos){

		var result=0;
		if (!pos)
			pos = 0;

		if (pos == arguments.length - 1){

			return result = arguments[0];
			console.log("result"+result);

		}
		else{
			if(arguments[0]<arguments[pos+1]){

				var aux=arguments[pos+1];
				arguments[pos+1]=arguments[0];
				arguments[0]=aux;

			}

			return this.max(arguments,pos+1)
		}
	},//MAX Function

	min: function(arguments, pos){

		var result=0;
		if (!pos)
			pos = 0;

		if (pos == arguments.length - 1){
			//document.getElementById("p3").innerHTML="Result:"+resultado;
			return result = arguments[0];
			console.log("result"+result);
		}
		else{
			if(arguments[0]>arguments[pos+1]){
				//console.log("Entrando al if");
				var aux=arguments[pos+1];
				console.log(aux);
				arguments[pos+1]=arguments[0];
				console.log(arguments[pos+1]);
				arguments[0]=aux;
				console.log(arguments[0]);

			}

			return this.min(arguments,pos+1)
		}
	},//End min function

	avg: function(arguments, pos){
		var result=0;
		var average=0;
		if (!pos)
			pos = 0;

		if (pos == arguments.length - 1)
			return result = arguments[pos];

		result = arguments[pos] + sum(arguments, pos + 1)

		average = result/parseInt(arguments.length);
		console.log("average"+average);
		console.log("size"+parseInt(arguments.length));

		return average;
	},

	substract: function(arguments, pos){

		if (!pos)
			pos = 0;

		if (pos == arguments.length - 1)
		{
			//this.memory += arguments[pos];
			return arguments[pos];
		}
		//var result=  arguments[pos] + this.sum(arguments, pos + 1);
		//this.memory += result;
		return arguments[pos] - this.substract(arguments, pos + 1)
		//this.addMemory(result);
		//return result;
	},

	multiply: function(arguments, pos){

		if (!pos)
			pos = 0;

		if (pos == arguments.length - 1)
		{
			//this.memory += arguments[pos];
			return arguments[pos];
		}
		//var result=  arguments[pos] + this.sum(arguments, pos + 1);
		//this.memory += result;
		return arguments[pos] * this.substract(arguments, pos + 1)
		//this.addMemory(result);
		//return result;
	},

	divide: function(arguments, pos){

		if (!pos)
			pos = 0;

		if (pos == arguments.length - 1)
		{
			//this.memory += arguments[pos];
			return arguments[pos];
		}
		//var result=  arguments[pos] + this.sum(arguments, pos + 1);
		//this.memory += result;
		return arguments[pos] / this.substract(arguments, pos + 1)
		//this.addMemory(result);
		//return result;
	}

}