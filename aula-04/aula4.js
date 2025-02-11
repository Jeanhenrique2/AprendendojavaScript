/*booleans e comparações
console.log(true, false, 'true', 'false')

//metodos podem retornar booleans
const email = 'brucewayne@rogermelo.com.br'
const includes = email.includes('wayne')
const names = ['dio', 'roger', 'robert']
const arrayincludes = names.includes ('rob')

// operadores de comparação
const age = 31
const name ='roger'

console.log(age == 31)
console.log(age == 35)
console.log(age != 31)
console.log(age > 31)
console.log(age < 32)
console.log(age <= 31)
console.log(age <= 31)
*/

/*console.log(name =='roger')
console.log(name =='Roger')
console.log(name >'belinha')
console.log(name >'Roger')
console.log(name >'Belinha')
*/

//const age = 31

// 'igual a' e 'diferente de '
//console.log(age == 31)
//console.log(age == '31')
//console.log(age != 31)
//console.log(age != '31')


//' igual a, e do mesmo tipo' e ' diferente de, e do mesmo tipo'
//console.log(age ===31)
//console.log(age ==='31')
//console.log(age !==31)
//console.log(age !=='31')



//conversão de tipos
let score='100'
//score = Number(score)

//console.log(score + 1)
//console.log(typeof score)

const crazyConversion = Number('maça')
const convertedNumber = String(97)
const booleanConversion = Boolean(10)


console.log(booleanConversion, typeof booleanConversion)

/*valores falsy:
False
0
"",'',``
null
undefined
nan

valores truthy:
qualquer valor que não é falsy */
