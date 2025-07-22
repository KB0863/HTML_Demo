let student={
    rollno:1,
    name:'Kshitij',
    address:'Pune'

}

console.log(student);
student.marks=85;
console.log(student);
delete student.address;
console.log(student);
console.log(student.name);

let a=[10,20,'Kshitij',20.5,'Abhishek'];
console.log(a);
console.log(a[2]);
console.log(a.length);

for(let i=0;i<a.length;i++)
{
    console.log(a[i]);
    
}
a[6]='Aditya';
console.log(a);
delete a[3];
console.log(a);
console.log(typeof a[3]);


function add()
{
    let x=10;
    let y=20;
    console.log(`The addition of ${x} and ${y} is `+(x+y));
    
}
add();


function sub(x,y)
{
    console.log(x-y);
    
}
sub(20,5)



function mult()
{
    let x=10;
    let y=5;
    return x*y;
}
let m=mult();
console.log(m);
console.log(mult());

function div(x,y)
{
    return x/y;
}
let n=div(80,5);
console.log(n);
console.log(div(40,5));



let abc=function()
{
    console.log("Hi");
    
}
abc();


let xyz=function(x,y)
{
    
    console.log(` ${x} and ${y} `);
    
}
xyz('Kshitij','Bhatkar');


let oddevencheck=function (num)
{
    return num%2==0;
}

let no=12;
let result=oddevencheck(no);
if(result)
{
console.log(`the ${no} is Even number`);
}
else{
   console.log(`the ${no} is Odd number`); 
}

let pqr=()=>
{
    console.log("hello everyone");
    
}
pqr();



let mno=(x,y)=>
{
    console.log(x);
    console.log(y);
    
    
}
mno('CJC','classes');


let ifb=()=>
{
    return 'This is return type arrow function';
}
let d=ifb();
console.log(d);


let primecheck=(num)=>
{
    let count=0;
    for(let i=1;i<=num;i++)
    {
            if(num%i==0)
            {
                count++;
            }
    }
    return count;
}

let checknum=13;
let factors=primecheck(checknum);
if(factors==2)
{
    console.log(`The ${checknum} is prime number`);
    
}
else
{
     console.log(`The ${checknum} is not prime number`);
}