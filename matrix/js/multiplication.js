var x=[
[5, 7, 8], 
[6, 3, 2], 
[7, 2, 1] ];
var y=[
[5, 7, 5], 
[1, 3, 2], 
[1, 2, 1] ];
var multiple=[[5, 7, 5], [1,3,2], [1,2,1] ];

document.writeln("Enter the values for matrix A: \n");
document.write("<br/>")
for(i=0; i<x.length; i++)
{

	for(j=0; j<x[i].length; j++)
	{
x[i][j]=prompt("("+i+","+j+"): ")

document.write(x[i][j]);
document.write("  ")

	}
	document.write("<br/>")
}
document.writeln("Enter the values for matrix B: \n");
document.write("<br/>")
for(i=0; i<y.length; i++)
{

	for(j=0; j<y[i].length; j++)
	{
y[i][j]=prompt("("+i+","+j+"): ")

document.write(y[i][j]);
document.write("  ")

	}
	document.write("<br/>")
}


for(i=0; i<x.length; i++)
{
	for(j=0; j<x[i].length; j++)
	{
		for(k=0; k<y[i].length; k++)
		{
			multiple[i][j]=parseInt(multiple[i][j])+parseInt(x[i][k])*parseInt(y[k][j]);

		}
		document.write(multiple[i][j]);
		document.write("  ");
	}
	document.write("<br/>");
}