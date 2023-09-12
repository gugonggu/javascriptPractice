// 알파벳이 담긴 배열 spell과 외계어 사전 dic이 주어질 때
// spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가 dic에 존재하면 1을, 없으면 2를 반환하는 문제입니다.
// for문을 사용해서 dic 배열을 순회하는데, 순회할 때 마다 요소를 스프레드 연산자로 분해해서 배열로 저장합니다.
// 내부 for문에서는 spell 순회해서 만약 배열로 저장한 요소에 spell의 요소중 하나가 있다면 count를 증가시키고,
// count가 spell의 길이와 같다면 모든 글자가 한번씩 사용되었다는 의미이니 answer에 true를 추가하고 반대라면 false를 추가합니다.
// 마지막으로 answer에 true가 있다면 1을, 없으면 2를 반환해서 문제를 해결했습니다.

function solution(spell, dic) {
    var answer = [];
    for (let i = 0; i < dic.length; i++) {
        const value = [...dic[i]];
        let count = 0;
        for (let j = 0; j < spell.length; j++) {
            if (value.includes(spell[j])) {
                count++;
            }
        }
        count === spell.length ? answer.push(true) : answer.push(false);
    }
    return answer.includes(true) ? 1 : 2;
}
