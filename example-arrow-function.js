var names =['Nikunj','Priyanka','Andrey'];
names.forEach(function(name){
	console.log(name);
});
/*For Each Function*/
names.forEach((name)=>{console.log('arrow',name);});

names.forEach((name)=>console.log('arrow with out',name)); 

var returnName = (name)=> name+'!'; 
console.log(returnName('Nikunj'));

/*Difference between Arror Function and Anonymous Function*/

//Sample of Anonymous Function.
var person ={
	name:'Nikunj',
	greet:function(){
		names.forEach(function(name){
			console.log(this.name+'say hi to'+name)
		});
		
	}
};
person.greet();

//Sample of Arrow Function
var person ={
	name:'Nikunj',
	greet:function(){
		names.forEach((name)=>
			console.log(this.name+'say hi to'+name)
		);
		
	}
};
person.greet();