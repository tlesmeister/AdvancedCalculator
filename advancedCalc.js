//JavaScript Code

function advancedCalc(operation) {
    let userInputOne = document.getElementById('tbFirstNumAd').value;
    let userInputTwo = document.getElementById('tbSecondNumAd').value;
    let calcValue = 0;

    switch (operation) {
        case "multiply":
            calcValue = userInputOne * userInputTwo;
            break;

        case "divide":
            calcValue = userInputOne / userInputTwo;
            break;
        case "minus":
            calcValue = userInputOne - userInputTwo;
            break;

        case "addition":
            calcValue = Number(userInputOne) + Number(userInputTwo);
            break;

        default: calcValue = "Invalid";
            break;
    }
    let output = document.getElementById('advancedCalcOutput');
    output.textContent = calcValue;
}
