function solution(number) {
    let AdditionOfNumbersThatAreMultiplicative = 0;

    for (let i = 0; i < number; i++) {
        if (i % 15 == 0) {
            AdditionOfNumbersThatAreMultiplicative += i;
        } else if (i % 3 == 0 || i % 5 == 0) {
            AdditionOfNumbersThatAreMultiplicative += i;
        }
    }
    return AdditionOfNumbersThatAreMultiplicative;
}