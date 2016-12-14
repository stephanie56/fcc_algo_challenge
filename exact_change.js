/* Exact Change Solution */

//Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// Coded by Stephanie Zeng https://github.com/stephanie56


function checkCashRegister(price, cash, cid) {
  var changeDue = cash - price;
  var cashInDrawer = 0; // sum of cid
  var change;
  var coinsAndBills;

  for(var i = 0; i < cid.length; i++){
    cashInDrawer += cid[i][1];
  }

  if(cashInDrawer === changeDue){
    change = "Closed";
  }
  else if (cashInDrawer < changeDue){
    change = "Insufficient Funds";
  }
  else {
    change = findChanges(changeDue, cid);;
  }

  function findChanges(changes, arr){
  coinsAndBills = {
    "ONE HUNDRED": 0,
    "TWENTY": 0,
    "TEN": 0,
    "FIVE": 0,
    "ONE": 0,
    "QUARTER": 0,
    "DIME": 0,
    "NICKEL": 0,
    "PENNY": 0,
  };



  while(changes > 0){
    if(changes >= 100 && arr[8][1] > 0){
        changes -= 100;
        arr[8][1] -= 100;
        coinsAndBills["ONE HUNDRED"] += 100;
    }
    else if(changes >= 20 && arr[7][1] > 0 ){
        changes -=20;
        arr[7][1] -= 20;
        coinsAndBills["TWENTY"] += 20;
    }
    else if(changes >= 10 && arr[6 ][1] > 0){
        changes -= 10;
        arr[6][1] -= 10;
        coinsAndBills["TEN"] += 10;
    }
    else if(changes >= 5 && arr[5][1] > 0){
        changes -= 5;
        arr[5][1] -= 5;
        coinsAndBills["FIVE"] += 5;
    }
    else if(changes >= 1 && arr[4][1] > 0){
        changes -= 1;
        arr[4][1] -= 1;
        coinsAndBills["ONE"] += 1;
    }
    else if(changes >= 0.25 && arr[3][1] > 0){
        changes -= 0.25;
        arr[3][1] -= 0.25;
        coinsAndBills["QUARTER"] += 0.25;
    }
    else if(changes >= 0.1 && arr[2][1] > 0){
      changes -= 0.1;
      arr[2][1] -= 0.1;
      coinsAndBills["DIME"] += 0.1;
    }
    else if(changes >= 0.05 && arr[1][1] > 0){
      changes -= 0.05;
      arr[1][1] -= 0.05;
      coinsAndBills["NICKEL"] += 0.05;
    }
    else if (changes >= 0.01 && arr[0][1] > 0){
      changes -= 0.01;
      arr[0][1] -= 0.01;
      coinsAndBills["PENNY"] += 0.01;

      console.log(changes)
    }
    else {
      changes = 0;
    }
  }

  return coinsAndBills;

}

  // return change
  console.log(change);

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

checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
