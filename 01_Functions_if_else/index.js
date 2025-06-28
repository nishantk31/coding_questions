// Sum of two numbwer 
function sum(a,b){
    let result = a + b
    return `Sum of ${a} and ${b} is ${result}`

}
console.log(sum(2,3))


// Square of a number
function square(n){
    let result = n * n
    return `Sqaure of a number ${n} is ${result}`
}
console.log(square(3))


// Check Voting Eligibility
function checkAge(age){
    if(age >=18){
        return `You are eligible to vote.`
    }
    else{
        return `You are not eligible to vote.`
    }
}
console.log(checkAge(18))

// Even or Odd Number
function evenOdd(n){
    if(n%2==0){
        return `${n} is even`
    }
    else{
        return `${n} is odd`
    }
}
console.log(evenOdd(2))