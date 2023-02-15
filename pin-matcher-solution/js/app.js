function getPin() {
  const pin = generatePin();
  const pinString = pin + "";
  if (pinString.length === 4) {
    return pin;
  } else {
    // console.log('pin not 3 digit found',pin);
    return getPin();
  }
}

function generatePin() {
  const random = Math.round(Math.random() * 10000);
  return random;
}
document.getElementById("generate-pin").addEventListener("click", function () {
  const pin = getPin();
  // console.log(pin);
  const displayPin = document.getElementById("display-pin");
  displayPin.value = pin;
});

document
  .getElementById("calculator")
  .addEventListener("click", function (event) {
    const number = event.target.innerText;
    const typesNumberField = document.getElementById("typed-number");
    const prevTypedNumber = typesNumberField.value;
    if (isNaN(number)) {
      if(number === 'C'){
        typesNumberField.value ='';
      }else if(number === '<'){
        const digits = prevTypedNumber.split('');
        digits.pop();
        const remainingDigits = digits.join('');
        typesNumberField.value =remainingDigits;
      }
    } else {

      const newTypedNumber = prevTypedNumber + number;
      typesNumberField.value = newTypedNumber;
    }
  });

  document.getElementById('verify-pin').addEventListener('click',function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;
    const typedNumberField = document.getElementById('typed-number');
    const typedNumber = typedNumberField.value;

    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailureMessage = document.getElementById('pin-failure');
    if(typedNumber === currentPin){

      pinSuccessMessage.style.display = 'block';
      pinFailureMessage.style.display = 'none';
    }else{

      pinFailureMessage.style.display = 'block';
      pinSuccessMessage.style.display = 'none';
    }
  })
 