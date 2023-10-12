const calculateTemp = () => {

    const inputTemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('temp_diff');

    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    //celsius to fahrenheit [ F = C * (9/5) + 32]  ....

    const celtoFah = (cel) => {
        let fahrenheit = ((cel *9/5) + 32).toFixed(1);
        return fahrenheit;
    } 

    //Fahrenheit to Celcius  [ C = (F -32) * 5/9]  ....

    const Fahtocel = (fah) => {
        let celsius = ((fah - 32) * 5/9).toFixed(1);
        return celsius;
    }

    if(valueTemp == 'cel')
    {
        document.getElementById("result").innerHTML = celtoFah(inputTemp) + "&deg; Fahrenheit";
    }
    else {
        document.getElementById("result").innerHTML = Fahtocel(inputTemp) + "&deg; Celsius";
    }
}