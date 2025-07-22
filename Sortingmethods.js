let num = [1,5,4,3,11,12,14,9,8];
//num.sort((a,b)=>a-b);
//console.log(num);
// num.reverse();
// console.log(num);
// let sortedarray = num.toSorted();
// console.log(sortedarray);
// let reversedarray = num.toReversed();
// console.log(reversedarray);
//*********************************************************************************
//(no)=>console.log(no)  callback function (Simple Parameterized function)
//num.forEach((no)=>console.log(no));
//*********************************************************************************
//map(function)

// function sqaure(num)
// {
//     return num*num;
// }
//(num)=>num*num;
let mappedArray=num.map((num)=>num*num);
console.log(mappedArray);
//*********************************************************************************
// function check(num)
// {
//     if(num%2!=0)
//     {
//         return num;
//     }
// }
//(num)=>{if(num%2!=0){return num;}}
let filteredArray=num.filter(num=>{if(num%2!=0){return num}});
console.log(filteredArray);

//*********************************************************************************
// for of loop for array only
let numbers=[1,5,4,3,11,12,14,9,8];
for(let x of numbers)
{
console.log(x);

}
//*********************************************************************************

//for in loop used for Objects/array
let employee={
    empid:101,
    ename:'Akshay',
    designation:'Developer',
    salary:500000
}

for(let x in employee)
{
    console.log(x+" --> "+employee[x]);
    
}

// for in loop for Array
let nums=[1,5,4,3,11,12,14,9,8];
for(let x in nums)
{
    console.log(x+" ---> "+nums[x]);
    
}
// Filter, Sort for multiple objects array

// let Product=[{pid:'1',pname:'TV',price:'50000',rating:'3.5',category:'A',colour:'Black'},
//             {pid:'2',pname:'Fridge',price:'45000',rating:'4.5',category:'B',colour:'Silver'},
//             {pid:'3',pname:'AC',price:'35000',rating:'4',category:'A',colour:'White'},
//             {pid:'4',pname:'Table',price:'5000',rating:'2',category:'A',colour:'Brown'},
//             {pid:'5',pname:'Geyser',price:'3000',rating:'3',category:'B',colour:'Creme'}];
// console.log(Product);
let Product1={pid:'1',pname:'TV',price:'50000',rating:'3.5',category:'A',colour:'Black'};
let Product2={pid:'2',pname:'Fridge',price:'45000',rating:'4.5',category:'B',colour:'Silver'};
let Product3={pid:'3',pname:'AC',price:'35000',rating:'4',category:'A',colour:'White'};
let Product4={pid:'4',pname:'Table',price:'5000',rating:'2',category:'A',colour:'Brown'};
let Product5={pid:'5',pname:'Geyser',price:'3000',rating:'3',category:'B',colour:'Creme'};
let Product=[Product1,Product2,Product3,Product4,Product5];
//console.log(Product);
let sortByNameAsc = Product.sort((a,b)=>a.pname.localeCompare(b.pname));
//console.log(sortByNameAsc);
//let sortByNameDesc = Product.sort((a,b)=>b.pname.localeCompare(a.pname));
//console.log(sortByNameDesc);
//localeCompare------------------for sorting string values
//let sortByPriceAsc = Product.sort((a,b)=>b.price-a.price);;
//console.log(sortByPriceAsc);
