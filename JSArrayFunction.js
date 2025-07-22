let StudentArray=['Akshay','Anand','Aditya','Aditi','Anushree','Aniket'];
console.log(StudentArray);
//toString

console.log(StudentArray.toString());
console.log(StudentArray[2]);
console.log(StudentArray.at(2));
console.log(StudentArray.join(' > '));
let A = StudentArray.pop();
console.log(A);
console.log(StudentArray.pop());
let V=StudentArray.push('Ankit');
console.log(V);
//console.log(StudentArray);
console.log(StudentArray);
StudentArray.shift();
console.log(StudentArray);


StudentArray.unshift('Atharva');
console.log(StudentArray);
delete StudentArray[1];
console.log(StudentArray);
let num1=[1,3,5,7,9]
let num2=[12,14,16,18,20]
let num3=[-1,-2,-3,-4,-5];
//let num4=[10,20,30,40,50];
let mergedArray=num3.concat(num1,num2);
console.log(mergedArray);
let num4=[  [-1,-2,-3,-4,-5],[12,14,16,18,20]  ]
console.log(num4);
let MainArray=num4.flat();
console.log(MainArray);
let stu=['Akshay','Divya','Devananad','Atharv','Gayatri','Divya','Pratik','Kiran','Omkar','Divya','Sainath'];
//console.log(stu);
stu.splice(3,2,'Prathmesh','Nikita');
console.log(stu);
let slicedarray = stu.slice(4,9);
console.log(slicedarray);
console.log(stu);
let stu2=['Akshay','Divya','Devananad','Atharv','Gayatri','Divya','Pratik','Kiran','Omkar','Divya','Sainath'];
console.log(stu2.indexOf('Gayatri'));
console.log(stu2.lastIndexOf('Divya'));
console.log(stu2.includes('Kirana'));
let nums=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let x=(no)=>
{
    for(let i=0; i<no.length;i++)
    {
        if(no[i]>10)
        {
            console.log(no[i])
            // return no[i];
        }
    }
}
x(nums);
// console.log(x(nums));
//console.log(nums.find(no=>  no>10 && no<15));

console.log(nums.find(function no(n){
    if(n>10 && n<15)
    {
        return n;      
    }
}));

console.log(nums.findIndex(no=>no>=8 && no<=12));
console.log(nums.findLast(no=>no>=10 && no<=13));
console.log(nums.findLastIndex(no=> no>=10 && no<=15));



function Prime(n)
{
    
    let count = 0;
    for(let i=1;i<=n;i++)
    {
        if(n%i==0)
        {
         count++;   
        }
        if(count==2)
        {
        console.log("Prime number");
        }
        else
        {
        console.log("Not a prime number");
        }
    }
}
Prime(14);

//String array = 5 string 
//print string length >= 5 

let Subject=['Java','Javascript','Python','Spring','Springboot','Microservices','JDBC','Hibernate'];
let v = [];
  for(let i =0; i<Subject.length; i++)
  {
  if(Subject[i].length>=5)
  {
  v.push(Subject[i]);
  }
  }
  console.log(v);

console.log(Subject.filter(s=>s.length>=5).map(a=>a.toLowerCase()));













