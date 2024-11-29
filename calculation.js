// let kitchen=document.getElementById("prod");
// const kitchenCount = document.getElementById('clickCount');

// kitchen.addEventListener("click", ()=>{
//     // console.log("confirm")
//     // let click=0;
//     let acc = document.getElementById("pr1");
//     let amnt= acc*39;
//     console.log(amnt);
// })


// const button = document.getElementById('prod');
// const kitchenCount = document.getElementById('clickCount');

// let totalSum = 0;

// const valueToAdd = 39;

// button.addEventListener("click", ()=> {
//        totalSum += valueToAdd; // Add the predefined value to the total sum
//        clickCount.textContent = totalSum; // Update the displayed sum
//      }
//     )

//     alert(totalSum);
    //  button.addEventListener('click', updateClickSum);


// Get the button and the span where the result will be displayed
const button = document.getElementById('clickButtonacc1');
const button2 = document.getElementById('clickButtonacc2');
const button3 = document.getElementById('clickButtonacc3');
const button4 = document.getElementById('clickButtonacc4');
const button5 = document.getElementById('clickButtonacc5');
const button6 = document.getElementById('clickButtonacc6');
const button7 = document.getElementById('clickButtonacc7');
const button8 = document.getElementById('clickButtonacc8');
const button9 = document.getElementById('clickButtonacc9');

const clickCountDisplay = document.getElementById('clickCount');
const clickCountDisplay2 = document.getElementById('clickCount2');
const clickCountDisplay3 = document.getElementById('clickCount3');
const clickCountDisplay4 = document.getElementById('clickCount4');
const clickCountDisplay5 = document.getElementById('clickCount5');
const clickCountDisplay6 = document.getElementById('clickCount6');
const clickCountDisplay7 = document.getElementById('clickCount7');
const clickCountDisplay8 = document.getElementById('clickCount8');
const clickCountDisplay9 = document.getElementById('clickCount9');

const CalcHistory = document.getElementById('calc-history');



//1

function appendEntryToHistory(totalSum){
    let TotalSumDiv=document.createElement("div");
    TotalSumDiv.setAttribute("class", "bg-[rgb(255,255,255)] w-[342px]")
    TotalSumDiv.innerHTML = 
    '<p>1. K. Accessories </p>'
     

//   alert(totalSum);
  CalcHistory.append(TotalSumDiv);

}

// Initialize a variable to keep track of the total sum
let totalSum = 0;

// The value to add on each click
const valueToAdd = 39;

// Function to update the total sum on each click
function updateClickSum() {
  totalSum += valueToAdd; // Add the predefined value to the total sum
  clickCountDisplay.textContent = totalSum; // Update the displayed sum

                // <div id="calc-history" class="bg-[rgb(255,255,255)] w-[342px]">
                //     <div>
                //         <p>1. K. Accessories</p>
                //     </div>
                // </div>   

                appendEntryToHistory(totalSum);            
     
} 

// Add an event listener for the 'click' event
button.addEventListener('click', updateClickSum);
// alert(totalSum);



//2

function appendEntryToHistory2(totalSum2){
    let TotalSumDiv2=document.createElement("div");
    TotalSumDiv2.setAttribute("class", "bg-[rgb(255,255,255)] w-[342px]")
    TotalSumDiv2.innerHTML = 
    '<p>1. K. Accessories </p>'
     

//   alert(totalSum);
  CalcHistory.append(TotalSumDiv2);

}


// Initialize a variable to keep track of the total sum
let totalSum2 = 0;

// The value to add on each click
const valueToAdd2 = 25;

// Function to update the total sum on each click
function updateClickSum2() {
  totalSum2 += valueToAdd2; // Add the predefined value to the total sum
  clickCountDisplay2.textContent = totalSum2; // Update the displayed sum

                // <div id="calc-history" class="bg-[rgb(255,255,255)] w-[342px]">
                //     <div>
                //         <p>1. K. Accessories</p>
                //     </div>
                // </div>   

                appendEntryToHistory2(totalSum2);            
     
} 

// Add an event listener for the 'click' event
button2.addEventListener('click', updateClickSum2);
// alert(totalSum);




//3

function appendEntryToHistory3(totalSum3){
    let TotalSumDiv3=document.createElement("div");
    TotalSumDiv3.setAttribute("class", "bg-[rgb(255,255,255)] w-[342px]")
    TotalSumDiv3.innerHTML = 
    '<p>3. Home Cooker </p>'
     

//   alert(totalSum);
  CalcHistory.append(TotalSumDiv3);

}


// Initialize a variable to keep track of the total sum
let totalSum3 = 0;

// The value to add on each click
const valueToAdd3 = 49;

// Function to update the total sum on each click
function updateClickSum3() {
  totalSum3 += valueToAdd3; // Add the predefined value to the total sum
  clickCountDisplay3.textContent = totalSum3; // Update the displayed sum

                // <div id="calc-history" class="bg-[rgb(255,255,255)] w-[342px]">
                //     <div>
                //         <p>1. K. Accessories</p>
                //     </div>
                // </div>   

                appendEntryToHistory3(totalSum3);            
     
} 

// Add an event listener for the 'click' event
button3.addEventListener('click', updateClickSum3);
// alert(totalSum);





//4


function appendEntryToHistory4(totalSum4){
    let TotalSumDiv4=document.createElement("div");
    TotalSumDiv4.setAttribute("class", "bg-[rgb(255,255,255)] w-[342px]")
    TotalSumDiv4.innerHTML = 
    '<p>4. Sports Back Cap </p>'
     

//   alert(totalSum);
  CalcHistory.append(TotalSumDiv4);

}


// Initialize a variable to keep track of the total sum
let totalSum4 = 0;

// The value to add on each click
const valueToAdd4 = 49;

// Function to update the total sum on each click
function updateClickSum4() {
  totalSum4 += valueToAdd4; // Add the predefined value to the total sum
  clickCountDisplay4.textContent = totalSum4; // Update the displayed sum

                // <div id="calc-history" class="bg-[rgb(255,255,255)] w-[342px]">
                //     <div>
                //         <p>1. K. Accessories</p>
                //     </div>
                // </div>   

                appendEntryToHistory4(totalSum4);            
     
} 

// Add an event listener for the 'click' event
button4.addEventListener('click', updateClickSum4);
// alert(totalSum);



//5


function appendEntryToHistory5(totalSum5){
    let TotalSumDiv5=document.createElement("div");
    TotalSumDiv5.setAttribute("class", "bg-[rgb(255,255,255)] w-[342px]")
    TotalSumDiv5.innerHTML = 
    '<p>5. Full Jersey Set </p>'
     

//   alert(totalSum);
  CalcHistory.append(TotalSumDiv5);

}


// Initialize a variable to keep track of the total sum
let totalSum5 = 0;

// The value to add on each click
const valueToAdd5 = 69;

// Function to update the total sum on each click
function updateClickSum5() {
  totalSum5 += valueToAdd5; // Add the predefined value to the total sum
  clickCountDisplay5.textContent = totalSum5; // Update the displayed sum

                // <div id="calc-history" class="bg-[rgb(255,255,255)] w-[342px]">
                //     <div>
                //         <p>1. K. Accessories</p>
                //     </div>
                // </div>   

                appendEntryToHistory5(totalSum5);            
     
} 

// Add an event listener for the 'click' event
button5.addEventListener('click', updateClickSum5);
// alert(totalSum);



//6


function appendEntryToHistory6(totalSum6){
    let TotalSumDiv6=document.createElement("div");
    TotalSumDiv6.setAttribute("class", "bg-[rgb(255,255,255)] w-[342px]")
    TotalSumDiv6.innerHTML = 
    '<p>6. Sports cates </p>'
     

//   alert(totalSum);
  CalcHistory.append(TotalSumDiv6);

}


// Initialize a variable to keep track of the total sum
let totalSum6 = 0;

// The value to add on each click
const valueToAdd6 = 159;

// Function to update the total sum on each click
function updateClickSum6() {
  totalSum6 += valueToAdd6; // Add the predefined value to the total sum
  clickCountDisplay6.textContent = totalSum6; // Update the displayed sum

                // <div id="calc-history" class="bg-[rgb(255,255,255)] w-[342px]">
                //     <div>
                //         <p>1. K. Accessories</p>
                //     </div>
                // </div>   

                appendEntryToHistory6(totalSum6);            
     
} 

// Add an event listener for the 'click' event
button6.addEventListener('click', updateClickSum6);
// alert(totalSum);




//7


function appendEntryToHistory7(totalSum7){
    let TotalSumDiv7=document.createElement("div");
    TotalSumDiv7.setAttribute("class", "bg-[rgb(255,255,255)] w-[342px]")
    TotalSumDiv7.innerHTML = 
    '<p>7. Single Relax Chair </p>'
     

//   alert(totalSum);
  CalcHistory.append(TotalSumDiv7);

}


// Initialize a variable to keep track of the total sum
let totalSum7 = 0;

// The value to add on each click
const valueToAdd7 = 185;

// Function to update the total sum on each click
function updateClickSum7() {
  totalSum7 += valueToAdd7; // Add the predefined value to the total sum
  clickCountDisplay7.textContent = totalSum7; // Update the displayed sum

                // <div id="calc-history" class="bg-[rgb(255,255,255)] w-[342px]">
                //     <div>
                //         <p>1. K. Accessories</p>
                //     </div>
                // </div>   

                appendEntryToHistory7(totalSum7);            
     
} 

// Add an event listener for the 'click' event
button7.addEventListener('click', updateClickSum7);
// alert(totalSum);




//8


function appendEntryToHistory8(totalSum8){
    let TotalSumDiv8=document.createElement("div");
    TotalSumDiv8.setAttribute("class", "bg-[rgb(255,255,255)] w-[342px]")
    TotalSumDiv8.innerHTML = 
    '<p>8. Children play </p>'
     

//   alert(totalSum);
  CalcHistory.append(TotalSumDiv8);

}


// Initialize a variable to keep track of the total sum
let totalSum8 = 0;

// The value to add on each click
const valueToAdd8 = 299;

// Function to update the total sum on each click
function updateClickSum8() {
  totalSum8 += valueToAdd8; // Add the predefined value to the total sum
  clickCountDisplay8.textContent = totalSum8; // Update the displayed sum

                // <div id="calc-history" class="bg-[rgb(255,255,255)] w-[342px]">
                //     <div>
                //         <p>1. K. Accessories</p>
                //     </div>
                // </div>   

                appendEntryToHistory8(totalSum8);            
     
} 

// Add an event listener for the 'click' event
button8.addEventListener('click', updateClickSum8);
// alert(totalSum);




//9


function appendEntryToHistory9(totalSum9){
    let TotalSumDiv9=document.createElement("div");
    TotalSumDiv9.setAttribute("class", "bg-[rgb(255,255,255)] w-[342px]")
    TotalSumDiv9.innerHTML = 
    '<p>9. Flexible Sofa </p>'
     

//   alert(totalSum);
  CalcHistory.append(TotalSumDiv9);

}


// Initialize a variable to keep track of the total sum
let totalSum9 = 0;

// The value to add on each click
const valueToAdd9 = 339;

// Function to update the total sum on each click
function updateClickSum9() {
  totalSum9 += valueToAdd9; // Add the predefined value to the total sum
  clickCountDisplay9.textContent = totalSum9; // Update the displayed sum

                // <div id="calc-history" class="bg-[rgb(255,255,255)] w-[342px]">
                //     <div>
                //         <p>1. K. Accessories</p>
                //     </div>
                // </div>   

                appendEntryToHistory9(totalSum9);            
     
} 

// Add an event listener for the 'click' event
button9.addEventListener('click', updateClickSum9);
// alert(totalSum);
































// // step-1: add event listener to the deposit button
// document.getElementById('btn-deposit').addEventListener('click', function(){
//     // step-2: get the deposit amount from the deposit input field
//     // For input field use .value to the the value inside the input field
//     const depositField = document.getElementById('deposit-field');
//     const newDepositAmountString = depositField.value;
//     const newDepositAmount = parseFloat(newDepositAmountString);
    
//     // step-3: get the current deposit total
//     // for non-input(element other than input, textarea) use innerText to get the text
//     const depositTotalElement = document.getElementById('deposit-total');
//     const previousDepositTotalString = depositTotalElement.innerText;
//     const previousDepositTotal = parseFloat(previousDepositTotalString);
    
//     // step-4: add numbers to set the total deposit
//     const currentDepositTotal = previousDepositTotal + newDepositAmount;
//     // set the deposit total
//     depositTotalElement.innerText = currentDepositTotal;

//     // step-5: get ballance current total
//     const balanceTotalElement = document.getElementById('balance-total');
//     const previousBalanceTotalString = balanceTotalElement.innerText;
//     const previousBalanceTotal = parseFloat(previousBalanceTotalString);

//     // step-6: calculate current total balance
//     const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
//     // set the balance total
//     balanceTotalElement.innerText = currentBalanceTotal;

//     // step-7: clear the deposit field
//     depositField.value = '';
// })