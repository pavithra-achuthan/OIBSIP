function convertTemp() {
    var tempInput = document.getElementById("tempInput").value;

    if(tempInput.trim() === "") {
        document.getElementById("result").innerText = "Please enter a number!";
        return;
    }

    var temp = parseFloat(tempInput);

    var unitRadios = document.getElementsByName("unit");
    var unit = "";
    for(var i = 0; i < unitRadios.length; i++) {
        if(unitRadios[i].checked) {
            unit = unitRadios[i].value;
            break;
        }
    }

    var result = "";

    if(unit === "C") {
        var f = temp * 9 / 5 + 32;
        var k = temp + 273.15;
        result = temp + " °C = " + f.toFixed(2) + " °F, " + k.toFixed(2) + " K";
    } else if(unit === "F") {
        var c = (temp - 32) * 5 / 9;
        var k = c + 273.15;
        result = temp + " °F = " + c.toFixed(2) + " °C, " + k.toFixed(2) + " K";
    } else if(unit === "K") {
        var c = temp - 273.15;
        var f = (c * 9 / 5) + 32;
        result = temp + " K = " + c.toFixed(2) + " °C, " + f.toFixed(2) + " °F";
    }

    document.getElementById("result").innerText = result;
}