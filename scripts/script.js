function calculate(number1, number2) {
    n1 = Number(document.getElementById("number1").value)
    n2 = Number(document.getElementById("number2").value)

    selector = document.getElementById("selector").value

    switch (selector) {
        case '+':
            calculation = (n1 + n2)
            document.getElementById("result").innerHTML = `${n1} + ${n2} = ${calculation}`
            break

        case '-':
            calculation = (n1 - n2)
            document.getElementById("result").innerHTML = `${n1} - ${n2} = ${calculation}`
            break

        case '*':
            calculation = (n1 * n2)
            document.getElementById("result").innerHTML = `${n1} * ${n2} = ${calculation}`
            break

        case '/':
            calculation = (n1 / n2)
            if (calculation == NaN) {
                document.getElementById("result").innerHTML = "Enter a valid divisor"
            }

            else if (calculation == Infinity) {
                document.getElementById("result").innerHTML = `${n1} / ${n2} = ${n1}`
            }
            else {
                document.getElementById("result").innerHTML = `${n1} / ${n2} = ${calculation}`
            }
            break
    }
}