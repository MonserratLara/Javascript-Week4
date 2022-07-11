

//Very easy 
function min( firstNum, secondNum ) {
	if ( firstNum < secondNum )
      return firstNum;
    else
      return secondNum;
}

console.log(min(2, 8));
// → 2
console.log(min(0, -10));
// → -8




// Easy 
var students = [
    {
    lastName: 'Doe',
    firstName: 'John',
    age: 20
    },
    {
    lastName: 'Doe',
    firstName: 'John',
    age: 21
    },
    {
    lastName: 'Doe',
    firstName: 'John',
    age: 22
    }
    ];
    
    for (var i = 0; i < students.length; i++) {
    console.log('Hello, my name is ' + students[i].firstName + ' ' + students[i].lastName + ' and I am ' + students[i].age + ' years old');
    }



// MEDIUM
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function takeInput() {
	
	const inputNumber = prompt("Enter a number (1-12): ");

	if (inputNumber < 1 || inputNumber > 12) {
		alert("Its an invalid number!!");
	} 
	// else in the console log the number and its corresponding month
	else {
		console.log(inputNumber,"-", months[inputNumber - 1]);
	}
	// Prompt the user to take input again
	takeInput();
}

// Ask the user to input a number
takeInput();






// Hard
let massTom = 8;
let heightTom = 9;
let massJerry = 45;
let heightJerry = 10;
let bmiTom = massTom / (heightTom * heightTom) ;
let bmiJerry = massJerry / (heightJerry * heightJerry) ;
let tomBmiHigher = true;
if(bmiTom <=  bmiJerry)
{
   //set boolean to false
   tomBmiHigher = false;
}

//print in console
console.log("Is Tom’s BMI higher than Jerry’s? " + tomBmiHigher);


  