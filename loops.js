// print numbers from 1 to 10
function serial(){
    let i = 1
for (; i<=10; i++){
    console.log(`Numbers ${i}`);
}
}
serial()

// print even numbers from 1 to 20
function Even(){
    let count=2
for (;count<=20;count=count+2){
    console.log(`Even numbers ${count}`);
}
}
Even()

// print odd numbers from 1 to 20
function odd(){
    let count=1
for (;count<=20;count=count+2){
    console.log(`Odd Numbers ${count}`);
}
}
odd()

// sum of numbers from 1 to 10

function sum(){
    let sum=0;
    for(let nums=0;nums<=10;nums++){
        sum=sum+nums;
        console.log(`Sum Of Number ${sum}`);   
    }
}
sum()

// print multiplication table of a 6

function Tables() {
    let six_table=1;
    for(;six_table<=10;six_table++){
        console.log(`${six_table}x6=${six_table*6}`);
        
    }
    
}
Tables()

//  print the numbers from 10 -1

function reverse(){
    let reverse_num=10;
    for(;reverse_num>=1;reverse_num--){
        console.log(`${reverse_num}`)
    }
}
reverse()

// factorial of a number (5!)
function fact(){
    let a=1;
    for(let b=5;b>=1;b--){
        a=a*b;
        console.log(a);
    }
}
fact()

// print the first 10 fibonacci numbers
function fib(){
    let fibonaci=10;
    let first_value=0;
    let second_value=1;
    console.log(first_value);
    console.log(second_value);
for(a=3;a<=fibonaci;a++){
    let next_value=first_value+second_value;
    first_value=second_value;
    second_value=next_value;
    console.log(`${next_value}`);
}
}
fib()

