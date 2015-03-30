var array1 = [1,5,"a","6"];
var array2 = [2,3,4,"b",9];

for(var i = 0; i< array1.length; i++)
{
	if(isNaN(parseInt(array1[i])))
		array1.splice(i, 1);		
}

for(var j = 0; j < array2.length; j++)
{
	if(isNaN(parseInt(array1[j])))
		array2.splice(j, 1);
}

var newArray = [];
var n = 0;
var m = 0;
var x = 0;
while(x < array1.length + array2.length)
{
	if(n == array1.length)
	{
		array2 = array2.splice(array1.length, array2.length);
		newArray = newArray.concat(array2);
		break;
	}
		

	if(m == array2.length)
	{
		array1 = array1.splice(array2.length, array1.length);
		newArray.push(array1);
		break;
	}

	if(array1[n] < array2[m])
	{
		newArray.push(array1[n]);
		n++;
	}
	else
	{
		newArray.push(array2[m]);
		m++;
	}
	x++;
}

for (var t=0; t<newArray.length; t++)
{
	console.log(newArray[t]);
}