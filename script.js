function calcular() {
    var aporte = document.getElementById('aporte').value;
    var lucro = document.getElementById('lucro').value;
    var stop = lucro /2;
    var res = (aporte/4)
    document.getElementById('resultado').innerHTML = "O stop loss ideal é de R$ " + stop.toFixed(2);
    document.getElementById('resultado2').innerHTML = "A perda máxima permitida é de R$ " + res.toFixed(2);
  }