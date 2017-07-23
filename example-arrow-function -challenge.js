function add(a,b)
	{
		return (a+b);
	}
	console.log('Sum is ',add(3,5));
	
var addSingle = (a,b) =>{
	return (a+b);
};

	console.log('Sum of arrow function is',addSingle(5,8));
	
var addMulti =(a,b) =>(a+b);

	console.log('Sum of arrow function Second is!!!',addMulti(9,8));