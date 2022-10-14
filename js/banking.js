// using function 
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear input 
    inputField.value = '';
    return amountValue;
}



// click event 
// depositBalance system 
document.getElementById('deposit-button').addEventListener('click', function() {
    // const depositInput = document.getElementById('deposit-input');

    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText);

    // get it to main function 
    const depositAmount = getInputValue('deposit-input');


    // deposite update 
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);

    depositTotal.innerText = previousDepositTotal + depositAmount;

    // main balance update 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount;

});

// withdraw system 
document.getElementById('withdraw-button').addEventListener('click', function() {
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmoutText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmoutText);



    //  main funtion to get it 
    const withdrawAmount = getInputValue('withdraw-input');



    // main withdraw system 
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalText);

    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

    // main balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousTotalBalance = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousTotalBalance - withdrawAmount;
    // clear input text field  

});