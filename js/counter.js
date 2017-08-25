var now = Date.now();
var startDate = new Date(2017, 7, 2, 0, 0);

function calculateTurn () {
    return now - startDate;
}

function refreshTurnCounter () {
    var currentTurn = calculateTurn(now, startDate);
}
setInterval(refreshTurnCounter() {alert(currentTurn); }, 1000);
