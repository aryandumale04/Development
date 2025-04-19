var arr=[1,2,2,3,4];



// FOR EACH 
// arr.forEach(function(val){
//     console.log(val + "  hello");

// });





//MAP 
//  var ans=arr.map(function(val){

//     //blank array banata haoi aur same number of element as in og array bana deta haii
    
//     return val+13;//us array me kya insert karna hai 



// });
// console.log(ans);


//FILTER


//  var ans=arr.filter(function(val){
//     if(val >3){
//         return true;
//     }
//     else{
//         return false;

//     }
     
// })
// console.log(ans);




//INDEX OF 

// var ans=arr.find(function(val){
//     if(val===20){
//         return val;
//     }
// })
// console.log(ans);
// const ans=arr.indexOf(4);
// console.log(ans);



//OBJECT

var obj={
    name : "Aryan",
    age:21 

}
console.log(obj)
console.log(obj.name)
console.log(obj.age)
Object.freeze(obj);

obj.name="Jyoti";
obj['age']=76;
console.log(obj.name)
console.log(obj.age)
console.log(obj)
function abcd (){
    
}

console.log(typeof abcd)