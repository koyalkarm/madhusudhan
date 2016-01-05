var x=["acb", 12, 23, "opq", false];
//document.write(x[1]);
//addition of two no.s
function sum(a, b, str, flag)
{
	var s;
	s=a+b;
	return s;
}
var y=sum(12, 23, "scott", false);
document.write(y);
document.write("<br/>");


//subtraction of two no.s.
function sub(a, b)
{
	var r;
	r=a-b;
	return r;
}
y=sub(33, 44);
document.write(y);
document.write("<br/>");



//addition of three no.s.
function sum1(a, b, c)
{
var p=a+b+c;
return p;
}
var z=sum1(2, 3, 4);
document.write(z);
document.write("<br/>");
document.write(sum1(2, 3, 6));
document.write("<br/>");
document.write(sum(2, 3));
