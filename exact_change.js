/* Exact Change Solution */

//Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// Coded by Stephanie Zeng https://github.com/stephanie56


function checkCashRegister(price, cash, cid) {
  var changeDue = cash - price;
  var cashInDrawer = 0; // sum of cid
  var change;


function findChanges(changes, arr){
  var coinsAndBills = {
    hundgred: 0,
    twenty: 0,
    ten: 0,
    five: 0,
    one: 0,
    quarter: 0,
    dime: 0,
    nickel: 0,
    penny: 0,
  };

  while(changes > 0){
    if(changes >= arr[8][1] && arr[8][1] > 0){
        changes -= 100;
        arr[8][1] -= 100;
        coinsAndBills.hundgred += 100;
    }
    else if(changes >= arr[7][1] && arr[7][1] > 0 ){
        changes -=20;
        arr[7][1] -= 20;
        coinsAndBills.twenty += 20;
    }
    else if(changes >= arr[6][1] && arr[6][1] > 0){
        changes -= 10;
        arr[6][1] -= 10;
        coinsAndBills.ten += 10;
    }
    else if(changes >= arr[5][1] && arr[5][1] > 0){
        changes -= 5;
        arr[5][1] -= 5;
        coinsAndBills.five += 5;
    }
    else if(changes >= arr[4][1] && arr[4][1] > 0){
        changes -= 1;
        arr[4][1] -= 1;
        coinsAndBills.one += 1;
    }
    else if(changes >= arr[3][1] && arr[3][1] > 0){
        changes -= 0.25;
        arr[3][1] -= 0.25;
        coinsAndBills.quarter += 0.25;
    }
    else if(changes >= arr[2][1] && arr[2][1] > 0){
      changes -= 0.1;
      arr[2][1] -= 0.1;
      coinsAndBills.dime += 0.1;
    }
    else if(changes >= arr[1][1] && arr[1][1] > 0){
      changes -= 0.05;
      arr[1][1] -= 0.05;
      coinsAndBills.nickel += 0.05;
    }
    else if (changes > arr[0][1] && arr[0][1] > 0){
      changes -= 0.01;
      arr[0][1] -= 0.01;
      coinsAndBills.penny += 0.01;
    }
    else {
      changes = 0;
    }
  }

  console.log(coinsAndBills);

}

findChanges(changeDue, cid);

  /* testing console.log */
  //console.log("changeDue is: " + changeDue);
  //console.log("cashInDrawer is: " + cashInDrawer);
  //console.log("change is: " + change);

}


// Example cash-in-drawer array:
// [["PENNY", 1.01], pennyNum = 101
// ["NICKEL", 2.05], nickelNum = 41
// ["DIME", 3.10], dimeNum = 31
// ["QUARTER", 4.25], quaNum = 17
// ["ONE", 90.00], oneNum = 90
// ["FIVE", 55.00], fiveNum = 11
// ["TEN", 20.00], tenNum = 2
// ["TWENTY", 60.00],twentyNum = 3
// ["ONE HUNDRED", 100.00]] hunNum = 1

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
