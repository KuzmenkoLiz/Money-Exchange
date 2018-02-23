// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var res = {};
    if (currency > 10000) {
        res.error = "You are rich, my friend! We don't have so much coins for exchange";
    } else {
        var H = 50;
        var Q = 25;
        var D = 10;
        var N = 5;
        var P = 1;
        var Hr, Qr, Dr, Nr, Pr;

        if (currency >= H) {
            Hr = Math.floor(currency / H);
            currency = currency % H;
            res.H = Hr;
        }
        if (currency >= Q) {
            Qr = Math.floor(currency / Q);
            currency = currency % Q;
            res.Q = Qr;
        }
        if (currency >= D) {
            Dr = Math.floor(currency / D);
            currency = currency % D;
            res.D = Dr;
        }
        if (currency >= N) {
            Nr = Math.floor(currency / N);
            currency = currency % N;
            res.N = Nr;
        }
        if (currency >= P) {
            Pr = Math.floor(currency / P);
            currency = currency % P;
            res.P = Pr;
        }
    }
    return res;
}
