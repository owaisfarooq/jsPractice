var assert = require("../functionTesting");

// assert.strictEqualObjects(
//   checkCashRegister(19.5, 20, [
//     ["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["DIME", 3.1],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100]
//   ]), {
//     status: "OPEN",
//     change: [
//       ["QUARTER", 0.5]
//     ]
//   }
// );

assert.strictEqualObjects(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ]), {
    status: "OPEN",
    change: [
      ["TWENTY", 60],
      ["TEN", 20],
      ["FIVE", 15],
      ["ONE", 1],
      ["QUARTER", 0.5],
      ["DIME", 0.2],
      ["PENNY", 0.04]
    ]
  }
);

assert.strictEqualObjects(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ]), {
    status: "INSUFFICIENT_FUNDS",
    change: []
  }
);

assert.strictEqualObjects(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 1],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ]), {
    status: "INSUFFICIENT_FUNDS",
    change: []
  }
);

assert.strictEqualObjects(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ]), {
    status: "CLOSED",
    change: [
      ["PENNY", 0.5],
      ["NICKEL", 0],
      ["DIME", 0],
      ["QUARTER", 0],
      ["ONE", 0],
      ["FIVE", 0],
      ["TEN", 0],
      ["TWENTY", 0],
      ["ONE HUNDRED", 0]
    ]
  }
);


assert.strictEqualObjects(checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]), {
  status: "OPEN",
  change: [
    ["QUARTER", 0.5]
  ]
})

function checkCashRegister(price, cash, cid) {
  let newCid = cid.map(element => {
    return [element[0], element[1] * 100]
  });
  let change = (cash - price) * 100;
  let totalMoni = 0;
  for (let index = 0; index < newCid.length; index++) {
    const currencyValue = newCid[index][1];
    totalMoni += currencyValue;

  }

  if (change > totalMoni) {
    return {
      status: "INSUFFICIENT_FUNDS",
      change: []
    }

  }
  if (change == totalMoni) {
    return {
      status: "CLOSED",
      change: cid
    }

  }
  let returnedVal = getChangeArr(change, newCid)
  if (returnedVal.length == 0) {
    return {
      status: "INSUFFICIENT_FUNDS",
      change: []
    }
  }
  return {
    status: "OPEN",
    change: getChangeArr(change, newCid)
  }
}

function getChangeArr(num, cid, resUntilNow = []) {
  let worth = [{
    nameOfCurrency: "PENNY",
    worthOfCurrency: 1
  }, {
    nameOfCurrency: "NICKEL",
    worthOfCurrency: 5
  }, {
    nameOfCurrency: "DIME",
    worthOfCurrency: 10
  }, {
    nameOfCurrency: "QUARTER",
    worthOfCurrency: 25
  }, {
    nameOfCurrency: "ONE",
    worthOfCurrency: 100
  }, {
    nameOfCurrency: "FIVE",
    worthOfCurrency: 500
  }, {
    nameOfCurrency: "TEN",
    worthOfCurrency: 1000
  }, {
    nameOfCurrency: "TWENTY",
    worthOfCurrency: 2000
  }, {
    nameOfCurrency: "ONE HUNDRED",
    worthOfCurrency: 10000
  }];
  // console.table(worth)
  let currencyWithamount = [];

  for (let index = 0; index < cid.length; index++) {
    const element = cid[index];
    currencyWithamount.push({
      nameOfCurrency: worth[index].nameOfCurrency,
      noOfNotes: Math.round(element[1] / worth[index].worthOfCurrency)
    })
  }

  let anotherNum = num;
  let res = resUntilNow;
  let totalChangeReturnedByaSingleCurrency = 0;

  for (let index = cid.length-1; index >= 0;) {

    if (currencyWithamount[index].noOfNotes > 0 && worth[index].worthOfCurrency < num && anotherNum > 0 && (anotherNum - worth[index].worthOfCurrency) >= 0) {
      totalChangeReturnedByaSingleCurrency += worth[index].worthOfCurrency
      currencyWithamount[index].noOfNotes--;
      anotherNum -= worth[index].worthOfCurrency

    } else {
      if (totalChangeReturnedByaSingleCurrency > 0) {
        res.push([
          currencyWithamount[index].nameOfCurrency,
          totalChangeReturnedByaSingleCurrency
        ]);

      }
      totalChangeReturnedByaSingleCurrency = 0
      index--;

    }

  }
  if (anotherNum > 0) {
    return []
  }
  res = res.map(element => {
    return [element[0], element[1] / 100]
  });
  return res;

}
console.log(checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]));