function converte(){
   let valorbr = document.getElementById("valorbrl").value;
   let valorus = valorbr / 5.46;
   document.getElementById("valorusd").innerHTML = "US$ "+valorus.toFixed(2);

}