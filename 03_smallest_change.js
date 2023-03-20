function smallest_change(x, coins) {
    window.cache = new Map();

    if (x === 0) return 0;

    let min = x;
    for (let coin of coins) {
        if (x - coin >= 0) {

            let c = 0;
            if (!cache.has(x - coin)) {
                c = smallest_change(x - coin, coins);
                cache.set(x - coin, c);
            } else {
                c = cache.get(x - coin);
            }

            if (min > c + 1) {
                min = c + 1;
            }

        }
    }

    return min;
}

const coins = [1, 5, 10, 25];
console.log(smallest_change(32, coins));