//alert("Hello");
var a=[[5, 7, 8], [6,3,2], [7,2,1] ];
var x=[[5, 7, 8], [6,3,2], [7,2,1] ];
var y=[[5, 7, 5], [1,3,2], [1,2,1] ];
var sum=[[5, 7, 5], [1,3,2], [1,2,1] ];
//var sum=[[]];
document.writeln("Enter the values for matrix A: \n");
document.write("<br/>")


x = readmatrix(a);
y = readmatrix(a);

document.writeln("addition of two matrix is : <br/>")
for(i=0; i<x.length; i++)
{
	for(j=0; j<x[i].length; j++)
	{
		sum[i][j]=parseInt(x[i][j])+parseInt(y[i][j]);
document.write(sum[i][j]);
document.write("  ")
	}
	document.write("<br/>")
}
document.writeln("substraction of two matrix is : <br/>")
for(i=0; i<x.length; i++)
{
	for(j=0; j<x[i].length; j++)
	{
		sum[i][j]=parseInt(x[i][j])-parseInt(y[i][j]);
document.write(sum[i][j]);
document.write("  ")
	}
	document.write("<br/>")
}
