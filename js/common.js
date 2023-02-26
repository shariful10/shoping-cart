function getTextElementById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalStr = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalStr);
    return currentPhoneTotal;
}
function setTexElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}
function calculateSubTotal(){
    // ─── Calculate Total ───────────────────────────────────────────────────
    const currentPhoneTotal = getTextElementById('phone-total');
    const currentCaseTotal = getTextElementById('case-total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTexElementValueById('sub-total', currentSubTotal);
    // ─── Calculate Tax ───────────────────────────────────────────────────
    const taxAmountStr = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountStr);
    setTexElementValueById('text-amount', taxAmount);
    const finalAmount = currentSubTotal + taxAmount;
    setTexElementValueById('final-total', finalAmount);
}