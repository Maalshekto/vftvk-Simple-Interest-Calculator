
function compute()
{
    a = document.getElementById("amount").value; 
    /* Input control */
    if (a == "") {
        alert("Please, enter a positive number.");
        document.getElementById('amount').focus();
        return;
    }

    amnt = parseInt(a)
    if (amnt < 1) {
        alert("Please, enter a positive number.");
        document.getElementById('amount').focus();
        return;
    }

    r = document.getElementById("rate").value;
    rtext = parseFloat(r).toFixed(1) + '%'
    y = document.getElementById("years").value;

    i = parseFloat(r) * parseInt(a)/100 * parseInt(y); 

    nowYear = new Date().getFullYear();

    futureYear = nowYear + parseInt(y);
    
    document.getElementById('resRate').innerHTML = rtext;
    document.getElementById('resAmount').innerHTML = a;
    document.getElementById('resInterest').innerHTML = i;
    document.getElementById('resYear').innerHTML = futureYear;
    document.getElementById('resultInterest').style.display = 'table-cell';

}
        
function updateTextInput(x) {
    rtext = parseFloat(x).toFixed(1) + '%'
    document.getElementById('textInput').innerHTML= rtext; 
  }

function prepareYearsSelector() {
    for(var i=0; i<=30; i++){
        var select = document.getElementById("years");
        var option = document.createElement("OPTION");
        select.options.add(option);
        option.text = i;
        option.value = i;
    }
}