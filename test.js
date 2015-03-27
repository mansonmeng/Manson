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

	
	arrayObj[i] = count;

	//console.log("length:"  + length + " have: %:" + 100*count/totalCnt + " " + str)
	console.log(arrayObj[i]);
}




