function getSum(a: number, b: number): number {
    while (a != 0) {
        let [x, y] = [(a & b) << 1, a ^ b];
        a = x, b = y
    }

    return b;
}
