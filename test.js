var text = "The rain in Spain falls mainly in the plain";
var words = text.split(" ");
var totalCnt = text.replace(/\S/g, '').length + 1;
var arrayObj = new Array([totalCnt]);
for(var i =0; i <totalCnt; i++)
{
	var str = words[i];
	var length = str.length;
	var count = 0;
	for(var j = totalCnt -1; j>=0; j--)
	{
		var strX = words[j];
		if(str.length == strX.length)
		{
			count ++;
		}
	}

	
	arrayObj[i] = "length:"  + length + " have: %:" + 100*count/totalCnt;
}

for(var n= 0; n < arrayObj.length; n++)
{
	var temp = arrayObj[n];
	for(var m= n+1; m < arrayObj.length; m++)
	{
		if(temp == arrayObj[m])
			arrayObj.splice(m,1);
	}
	
}
for(var k=0 ; k < arrayObj.length; k++)
{
	console.log(arrayObj[k]);
}



