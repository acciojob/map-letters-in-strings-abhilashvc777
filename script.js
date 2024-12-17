//your JS code here. If required.
let mapLetters = function(str){
	let obj = {};
	for(let i=0; i<=str.length-1; i++){
	 if(obj[str[i]]){
		 obj[str[i]].push(i)
	 }else{
		 obj[str[i]] = [i]
	 }
    }
	return obj
}
let str = prompt("Enter Input")
alert(JSON.stringify(mapLetters(str)))