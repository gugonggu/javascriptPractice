function solution(s) {
    s = [...s.toLowerCase()];
    var answer = '';
    let count = 1;
    for(let i = 0; i < s.length; i++){
        if(s[i] === " "){
            answer += s[i];
            count = 1;
        } else {
            answer += count % 2 === 0 ? s[i] : s[i].toUpperCase();
            count++;
        }
    }
    return answer;
}