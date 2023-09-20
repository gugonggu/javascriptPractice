function solution(n) {
    n = Math.sqrt(n);
    return n % 1 === 0 ? (++n) ** 2 : -1;
}
