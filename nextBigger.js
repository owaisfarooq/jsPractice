const Test = require('./functionTesting');
let message = "It should work for random inputs too";
// Test.assertEquals(nextBigger(3531870242),3531870422, message);
// Test.assertEquals(nextBigger(3531870242), 3531870422, message);
// Test.assertEquals(nextBigger(33967751), 33971567, message);
// Test.assertEquals(nextBigger(867841798062429), 867841798062492, message);
// Test.assertEquals(nextBigger(25618955959238), 25618955959283, message);
// Test.assertEquals(nextBigger(1978970), 1979078, message);
// Test.assertEquals(nextBigger(41950790764), 41950794067, message);
// Test.assertEquals(nextBigger(4855), 5458, message);
// Test.assertEquals(nextBigger(58132), 58213, message);
// Test.assertEquals(nextBigger(6349924), 6349942, message);
// Test.assertEquals(nextBigger(4018636309), 4018636390, message);
// Test.assertEquals(nextBigger(5713), 5731, message);
// Test.assertEquals(nextBigger(3046500), 3050046, message);
// Test.assertEquals(nextBigger(385414194269), 385414194296, message);
// Test.assertEquals(nextBigger(6098), 6809, message);
// Test.assertEquals(nextBigger(932986699), 932986969, message);
Test.assertEquals(nextBigger(3078), 3087, message);
// Test.assertEquals(nextBigger(97655310), -1, message);
// Test.assertEquals(nextBigger(97786694095502), 97786694095520, message);
// Test.assertEquals(nextBigger(4032), 4203, message);
// Test.assertEquals(nextBigger(51162), 51216, message);
// Test.assertEquals(nextBigger(562800201697), 562800201769, message);
// Test.assertEquals(nextBigger(65237096552), 65237205569, message);
// Test.assertEquals(nextBigger(791493843), 791494338, message);
// Test.assertEquals(nextBigger(68196), 68619, message);
// Test.assertEquals(nextBigger(67595062), 67595206, message);
// Test.assertEquals(nextBigger(9870285768876), 9870285776688, message);
// Test.assertEquals(nextBigger(56028288596646), 56028288596664, message);
// Test.assertEquals(nextBigger(34303261471), 34303261714, message);
// Test.assertEquals(nextBigger(697229883631), 697229886133, message);
// Test.assertEquals(nextBigger(4184139471), 4184139714, message);
// Test.assertEquals(nextBigger(907751630644583), 907751630644835, message);
// Test.assertEquals(nextBigger(3904190749), 3904190794, message);
// Test.assertEquals(nextBigger(8466465), 8466546, message);
// Test.assertEquals(nextBigger(5965396110), 5965601139, message);
// Test.assertEquals(nextBigger(850), -1, message);
// Test.assertEquals(nextBigger(868), 886, message);
// Test.assertEquals(nextBigger(615), 651, message);
// Test.assertEquals(nextBigger(575899166), 575899616, message);
// Test.assertEquals(nextBigger(953), -1, message);
// Test.assertEquals(nextBigger(57927), 57972, message);
// Test.assertEquals(nextBigger(35030344155), 35030344515, message);
// Test.assertEquals(nextBigger(36), 63, message);
// Test.assertEquals(nextBigger(601079), 601097, message);
// Test.assertEquals(nextBigger(99988877765431), -1, message);
// Test.assertEquals(nextBigger(7516149375807), 7516149375870, message);
// Test.assertEquals(nextBigger(499791521075), 499791521507, message);
// Test.assertEquals(nextBigger(68308711276), 68308711627, message);
// Test.assertEquals(nextBigger(62121743242193), 62121743242319, message);
// Test.assertEquals(nextBigger(6010193), 6010319, message);
// Test.assertEquals(nextBigger(57), 75, message);
// Test.assertEquals(nextBigger(63217722), 63221277, message);
// Test.assertEquals(nextBigger(381216074743647), 381216074743674, message);
// Test.assertEquals(nextBigger(21008941393), 21008941933, message);
// Test.assertEquals(nextBigger(8773813), 8773831, message);
// Test.assertEquals(nextBigger(227183), 227318, message);
// Test.assertEquals(nextBigger(598984), 599488, message);
// Test.assertEquals(nextBigger(28), 82, message);
// Test.assertEquals(nextBigger(977742111), -1, message);
// Test.assertEquals(nextBigger(97856), 97865, message);
// Test.assertEquals(nextBigger(142), 214, message);
// Test.assertEquals(nextBigger(97665555422), -1, message);
// Test.assertEquals(nextBigger(359849061), 359849106, message);
// Test.assertEquals(nextBigger(76413157785362), 76413157785623, message);
// Test.assertEquals(nextBigger(638429452), 638429524, message);
// Test.assertEquals(nextBigger(1711439301813), 1711439301831, message);
// Test.assertEquals(nextBigger(976644433321), -1, message);
// Test.assertEquals(nextBigger(98887554321000), -1, message);
// Test.assertEquals(nextBigger(98765543322210), -1, message);
// Test.assertEquals(nextBigger(7039507022), 7039507202, message);
// Test.assertEquals(nextBigger(43), -1, message);
// Test.assertEquals(nextBigger(699602578524), 699602578542, message);
// Test.assertEquals(nextBigger(6441), -1, message);
// Test.assertEquals(nextBigger(165534748109419), 165534748109491, message);
// Test.assertEquals(nextBigger(92), -1, message);
// message = "No brute force solutions 🙃";
// Test.assertEquals(nextBigger(9388), 9838, message);
// Test.assertEquals(nextBigger(599999875110), 701155899999, message);
// Test.assertEquals(nextBigger(5877620), 6025778, message);
// Test.assertEquals(nextBigger(38744210), 40123478, message);
// Test.assertEquals(nextBigger(58764322110), 60112234578, message);
// Test.assertEquals(nextBigger(398877522110), 501122377889, message);
// Test.assertEquals(nextBigger(3999777422100), 4001223777999, message);
// Test.assertEquals(nextBigger(17765530), 30155677, message);
// Test.assertEquals(nextBigger(4333210), -1, message);
// Test.assertEquals(nextBigger(2555533), 3235555, message);
// Test.assertEquals(nextBigger(3988862221000), 6000122238889, message);

function nextBigger(n) {
    const number = String(n);
    // let lastDigit = number[number.length-1];
    for ( let index = number.length-1; index > 1; index-- ) {
        let nextBiggerDigit = number.split("");
        let lastDigit = nextBiggerDigit[index];

        let secondLastDigit = nextBiggerDigit[index-1];
        if ( secondLastDigit < lastDigit ) {
            nextBiggerDigit[index] = secondLastDigit;
            nextBiggerDigit[index-1] = lastDigit;    
        }
        if ( Number(nextBiggerDigit.join("")) > Number(number) ) {
            return Number(nextBiggerDigit.join(""));
        }
    }
    return -1;
    
    // let sorted = Number(n.toString().split('').sort((a, b) => {
    //     return a > b ? -1 : 1;
    // }).join(''));

    // return sorted == n ? -1 : sorted;
}

// not completed
// https://www.codewars.com/kata/55983863da40caa2c900004e/train/javascript