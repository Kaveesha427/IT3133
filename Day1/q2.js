//Find 3 large numbers among given array of numbers


let arr=[10,3,5,6,2,8];

for(let i=0;i<arr.length-1;i++){
	let max=arr[i];
	for(let j=i;j<arr.length;j++){
		
		if(arr[j+1]>max){
			max=arr[j+1];
			
			temp=arr[i];
			arr[i]=max;
			arr[j+1]=temp;
		}
		
	}
}

console.log("Max 3 numbers:");
for(let i=0;i<3;i++){
	console.log(arr[i]);
}
	