	//With Out Promises.
	function getCallBack(location,callback)
		{
			callback(undefined,78);
			callback('City not found');
		}
	
	getCallBack('Bangalore',function(err,temp){
		if(err)
			{
				console.log('error',err);
			}
		else
			{
				console.log('Success',temp);
			}
		
	});
	//With Promises.
	function getPromise(location)
		{
			return new Promise(function (resolve,reject){
				setTimeout(function(){
						resolve(79);
						reject('City Not Found');
				},3000)
			});
		}
		
		getPromise('Bangalore').then(function (temp){
				console.log('Success',temp);
		},function (err){
				console.log('City Not Found');
		});
	// Challenge Area.	
	function addNumber(a,b)
		{
			return new Promise(function (resolve,reject){
			setTimeout(function(){
				if(typeof a ==='number' && typeof b ==='number')
					{
						resolve(a+b);
					}
				else
					{
						reject('Not a Number');
					}
			},5000);
			});
		}
		
		addNumber(2,'nikunj').then(function(sum){
			console.log('Sum is',sum);
		},function(err){
			console.log('Error',err);
		});