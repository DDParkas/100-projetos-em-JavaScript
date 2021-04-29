const calc      =   document.getElementById('calc')


function imc(){
    const nick  = document.getElementById('name').value
    const height = document.getElementById('height').value
    const weight = document.getElementById('weight').value
    const result = document.getElementById('result')

    if (nick !== '' && height !== '' && weight !== ''){
        const imcValue = (weight / (height * height)).toFixed(2)
        
        if (imcValue < 18.5 ){
            result.textContent = `${nick} você está abaixo do peso! Seu IMC é de ${imcValue}`
        }
        else if(imcValue >= 18.5 && imcValue <= 24.9){
            result.textContent = `${nick} você está no seu peso ideal! Seu IMC é de ${imcValue} Beba água.`
        }
        else if(imcValue >= 25.0 && imcValue <= 29.9){
            result.textContent = `${nick} você esta com sobrepeso! Seu IMC é de ${imcValue}. Coma mais frutas!`
        }
        else if(imcvalue >= 30 && imcvalue <= 34.9){
            result.textContent = `${nick} você esta com Obesidade Grau I ! Seu IMC é de ${imcValue}. Cuidado procure um médico!`
        }
        else if (imcvalue >= 35 && imcvalue <= 39.9){
            result.textContent = `${nick} você esta com Obesidade Grau II ! Seu IMC é de ${imcValue}. Cuidado procure um médico!`
        }
        else if (imcvalue >= 40){
            result.textContent = `${nick} você esta com Obesidade Grau III ! Seu IMC é de ${imcValue}. Cuidado procure um médico!`
        }
    }else{
        result.textContent = 'Preencha todos os campos'
    }
    
}
calc.addEventListener('click', imc)
