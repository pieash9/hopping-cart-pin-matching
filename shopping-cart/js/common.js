function getTextElementValueById(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotal = parseInt(phoneTotalElement.innerText);
    return currentPhoneTotal;
  }
  function setTextElementValueById(elementId,value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
  }
  function calculateSubtotal(){
      //calculate total
      const currentPhoneTotal = getTextElementValueById('phone-total')
      const currentCaseTotal = getTextElementValueById('case-total');
      const currentSubTotal = currentPhoneTotal  + currentCaseTotal;

      setTextElementValueById('sub-total',currentSubTotal)
      //calculate tex
      const currentTax = parseFloat((currentSubTotal * 0.1).toFixed(2));
      setTextElementValueById('tax-amount',currentTax);
      const finalAmount = currentSubTotal+ currentTax;
      setTextElementValueById('final-total',finalAmount)
  }