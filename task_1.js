
function calculate() {
    const input = document.querySelector('.input');
    const answer = document.querySelector('.input1');
  
    
    try {
      const result = eval(input.value);
      answer.value = result;
    } catch (error) {
     
      answer.value = 'Error';
    }
  }


  
  function clearFields() {
    const input = document.querySelector('.input');
    const answer = document.querySelector('.input1');
    input.value = '';
    answer.value = '';
  }
  
 
  const buttons = document.querySelectorAll('.button');
  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      const buttonText = this.innerText;
      const input = document.querySelector('.input');
  
      if (buttonText === '=') {
        calculate();
      } else if (buttonText === 'Ac') {
        clearFields();
      }
      
  
  
      else {
        
        input.value += buttonText;
  
  
      }
    });
  });
  