const intialPrice =  document.querySelector("#initial-price");
const noOfStocks = document.querySelector("#stocks");
const currentPrice = document.querySelector("#current-price");
const tellMe = document.querySelector("#submit-btn");
const outputEl = document.querySelector("#output");

tellMe.addEventListener("click", submitHandler);

function submitHandler() {
    var ip = intialPrice.value;
    var qty = noOfStocks.value;
    var cp = currentPrice.value;

    calculateProfitAndLoss(ip, qty, cp);
}

function calculateProfitAndLoss(initial, stocks, current) {
    if(current > initial) {
    var profit = (current - initial) * stocks;
    var profitPercentage = (profit / initial) * 100;
    showMessage(`hey your profit is ${profit} and your profit percentage is ${profitPercentage}% `)
    }else if(inital > current) {
    var loss = (initial - current) *stocks;
    var lossPercentage = (loss/initial) *100;
    showMessage(`hey you loss is ${loss} and your loss percentage is ${lossPercentage}% `)
    }else {
           showMessage('no pain no gain and no gain no pain') 
    } 
     
}

 function showMessage(message) {
    outputEl.innerHTML = message;
 }
  