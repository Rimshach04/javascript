// how many types of loop? or how many gernal types of loop....
// there are two types of loop => counter control loop => sentinal loop.

// counter control loop .
// dependes on limited number of iteration 

// Sentinal loop 
// depends on special value.
// 3+4+5+5+7+8+2+1=any ansewer

// how many types of loop JS.
// while , do-while , for , for in , for of , for each.


var i=1;
// while(i<10){
//     console.log(i);
//     i=i+1;
// }


// do{
//     console.log(i);
//     i=i+1;
// }while(i<=10);



for(i=1;i<9;i=i+1);

// console.log("check");

    // console.log(i);

var arr=[12,13,14,15];

for(let index in arr)
{
    // if(arr[index]%2==0)
        // console.log(arr[index]);
        // index=index+1
        // console.log(index)
}

// console.log(index)

// Object 
const person={
    name:"Afria & Rimsha",
    semester:"4ht",
    address:"Hasilpur"
}

// console.log(person.address);
for (let keys in person){
    console.log(person[keys]);
}

