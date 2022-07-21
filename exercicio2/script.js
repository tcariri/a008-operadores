const numero1 =  prompt ("Insira um número")
const numero2 = prompt ("agora insira outro número")

console.log(Number(numero1))
console.log(Number(numero2))
console.log("O primeiro numero é maior que segundo? ",numero1 > numero2)
console.log("O primeiro numero é igual ao segundo?",numero1 === numero2 )
console.log("O primeiro numero é divisível pelo segundo?", ((numero1 % numero2) === 0))
console.log("O segundo numero é divisível pelo primeiro", ((numero2 % numero1) === 0))




