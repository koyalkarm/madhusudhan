function readmatrix (matrix)
{
	//var x=[[5, 7, 8], [6,3,2], [7,2,1] ];

	document.writeln("Enter the values for matrix :");
	document.write("<br/>")
	for(i=0; i<matrix.length; i++)
	{

		for(j=0; j<matrix[i].length; j++)
		{
			matrix[i][j]=prompt("("+i+","+j+"): ")
		}
		document.write("<br/>")
	}



	return matrix;
}