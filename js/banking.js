// using function 
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear input 
    inputField.value = '';
    return amountValue;
}

// update deposit and withdraw system 
function updateTotalField(totalFieldId, amount) {
    // debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);

    totalElement.innerText = previousTotal + amount;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}
// upadte Main balance 
function upadteBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    /* const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText); */
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    } else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}


// click event 
// depositBalance system 
document.getElementById('deposit-button').addEventListener('click', function() {
    // const depositInput = document.getElementById('deposit-input');

    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText);




    // // deposite update 
    // const depositTotal = document.getElementById('deposit-total');
    // const depositTotalText = depositTotal.innerText;
    // const previousDepositTotal = parseFloat(depositTotalText);

    // depositTotal.innerText = previousDepositTotal + depositAmount;



    // main balance update 
    /* 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount; 
    */
    // get it to main function 
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        //    update balance system 
        upadteBalance(depositAmount, true);
    }

});

// withdraw system 
document.getElementById('withdraw-button').addEventListener('click', function() {
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmoutText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmoutText);







    // main withdraw system 
    /*  
    const withdrawTotal = document.getElementById('withdraw-total');
     const withdrawTotalText = withdrawTotal.innerText;
     const previousWithdrawTotal = parseFloat(withdrawTotalText);

     withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

     */



    // main balance 
    /* 
     const balanceTotal = document.getElementById('balance-total');
     const balanceTotalText = balanceTotal.innerText;
     const previousTotalBalance = parseFloat(balanceTotalText);

     balanceTotal.innerText = previousTotalBalance - withdrawAmount;
      */
    // clear input text field  
    //  main funtion to get it 
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount <= currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount)
        upadteBalance(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalance) {
        alert('Ensificient Balance');
    }

});