const x=document.getElementById('number1')
const y=document.getElementById('number2')


const result=document.getElementById('result')
function calculate(operator){

    const num1=parseInt(x.value)
    const num2=parseInt(y.value)

    if(isNaN(num1)||isNaN(num2)){
        result.innerText='please enter a valid number'
        return
    }
      
    switch(operator){
        case '+':{
            result.innerText=`sum:${num1+num2}`

        } 
        break
        case '-':{
            result.innerText=`subtraction:${num1-num2}`
        }
        break
        case '*':{
             result.innerText=`Multiplication:${num1*num2}`
        }
        break
        case '/':{

            if(num2==0){
                result.innerText='cant divided by zero'
            }
            else{
             result.innerText=`Division:${num1/num2}`
            }
        }
        break
        default:
            result.innerText='invalid operator'
    }
    x.value = '';
    y.value = '';

}
