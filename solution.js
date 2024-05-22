

// 1.Sum of two numbers
function sum(a,b){
    return a + b;
}
console.log(sum(3,2));
console.log(sum(-4,-8));
console.log(sum(-3,5));

// 2.Return the next number from the number passed
function nextNumber(num){
    return num + 1;

}
//example
console.log(nextNumber(1))
console.log(nextNumber(0))
console.log(nextNumber(-))

// 3.Find perimeter of a rectangle

function rectanglePerimeter(length,width){
    return 2*(length + width);
}
//example
console.log(rectanglePerimeter(3,3))
//4.Return something to me

function returnSomethingToMe(inputstring){
    return  "something"+" " +inputstring;
}
//example
console.log(returnSomethingToMe ("kimani denies"));
console.log(returnSomethingToMe(" is better than nothing"));


//5.Bob's BMI vs Jane's BMI
function greaterBMI(bob_bmi,jene_bmi){
    if(bob_bmi>jene_bmi){
        return "bob";

    }else if (jane_bmi > bob_bmi){
        return "jane";
    }else{
        return "equal"
    }
}
//example
console.log(greaterBMI(30,25));//bob


//6.Basketball points
function Basketballpoints(twopointers ,threepointers){
    let pointsResult = (twopointers *2) + (threepointers*3)
    return pointsResult;
}

//example
console.log(pointsResult(7,5)); //output:29

//7.Less than 100
function isSumMoreThan100(val1,val2){
    let sum = val1 + val2
    if (sum >100){
        return  true;
    }
    else{
        return false;
    }
        
}
//example 
console.log(isSumMoreThan100(25.55)) //return false

//8.Convert minutes to second
function ConvertToseconds(minutes){
    const seconds = minutes * 60;
}
if (seconds == 0){
    return 0;
}
else if (seconds ===1){
    return "1 second";
}
return `${seconds} second`;
//test case
console.log(ConvertToseconds(5));// output: 300 seconds

//9.Greater among the three
function greater(num1 ,num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    }
else if (num2 > num1 && num2 > num3){
    return num2;
}else if(num1 ===num2 && num2=== num3){
    return num3;
}else{
    return num3;
}
    
}
//example
console.log(greater(2, 35, 9)); // Output: 35

//10.Less among the three
function (num1, num2, num3){
    const smallest = math.min(num1,num2, num3);
    return smallest;
}
//example
console.log(least(2, 35, 9)); // Output: 2

//11.Football points
function footballPoints(wins, draws, losses) {

    const pointsPerWin = 3;
    const pointsPerDraw = 1;
    const pointsPerLoss = 0;
    const totalPoints = wins * pointsPerWin + draws * pointsPerDraw + losses * pointsPerLoss;
    return totalPoints;
  }
//   test case
console.log(footballPoints(5, 0, 2)); // Output: 15

//12.Even numbers
function isEven(number) {
    return number % 2 === 0;
  }
  
  for (let i = 0; i <= 101; i++) {
    if (isEven(i)) {
      console.log(i);
    }
  }
  