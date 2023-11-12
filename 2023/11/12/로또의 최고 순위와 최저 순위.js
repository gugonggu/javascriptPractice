// 구매한 로또 번호를 담은 배열 lottos, 당첨 번호를 담은 win_nums배열이 주어질 때 로또의 순위를 반환하는 문제입니다.
// 그런데 주인공의 동생이 로또에 낙서를 해서 일부 번호를 알아볼 수 없게 되어서,
// 번호 중에 0으로 표기된 번호는 알 수 없으므로
// 당첨 가능한 최고 순위와 최저 순위를 반환하는 문제입니다.

// 먼저 맞은 개수에 따른 순위를 표시한 배열 rank와
// 구매한 로또 번호중에 맞는 개수를 저장할 correct,
// 알아볼 수 없는 번호의 개수 zeros를 선언합니다.
// 그 후 for문을 통해 lottos를 순회하며 zeros와 correct를 증가시킵니다.
// lottos를 모두 순회하고 나면, correct + zeros를 통해 최대 순위를 판별하고,
// correct를 통해 최저 순위를 판별합니다.
// 그 둘을 담은 배열을 반환해 주었습니다.
function solution(lottos, win_nums) {
    const rank = [null, 6, 5, 4, 3, 2];
    let correct = 0;
    let zeros = 0;
    for (let i = 0; i < lottos.length; i++) {
        if (lottos[i] === 0) {
            zeros++;
        } else if (win_nums.includes(lottos[i])) {
            correct++;
        }
    }
    const max = correct + zeros < 2 ? 6 : rank.indexOf(correct + zeros);
    const min = correct < 2 ? 6 : rank.indexOf(correct);
    return [max, min];
}
