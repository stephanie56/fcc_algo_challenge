/* Exact Change Solution */

//Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// Coded by Stephanie Zeng https://github.com/stephanie56


function checkCashRegister(price, cash, cid) {
  var changeDue = cash - price;
  var cashInDrawer = 0; // sum of cid
  var change;
  var cashRegister = {
    "PENNY": 1.01 / 0.01,
    "NICKEL": 2.05 / 0.05,
    "DIME": 3.10 / 0.10,
    "QUARTER": 4.25 / 0.25,
    "ONE": 90 / 1,
    "FIVE": 55.00 / 5,
    "TEN": 20.00 / 10,
    "TWENTY": 60.00 / 20,
    "ONE HUNDRED": 100.00 / 100
  }

 // map each arr ["PENNY", 1.01]
 var cashRegister = cid.forEach(function(arr){
   var newObj = {};
   newObj[arr[0]] = arr[1];
   return newObj;
 })

 console.log(cashRegister);

  function findChanges(changes){
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
      if(changes > cashRegister[ONE HUNDRED]){
          changes -= 100;
          coinsAndBills.hundgred++;
      }
      else if(changes >= 20 && twentyNum > 0){
          changes -=20;
          coinsAndBills.twenty++;
      }
      else if(changes >= 10 && tenNum > 0){
          changes -= 10;
          coinsAndBills.ten++;
      }
      else if(changes >= 5 && fiveNum > 0){
          changes -= 5;
          coinsAndBills.five++;
      }
      else if(changes >= 1 && oneNum > 0){
          changes -= 1;
          coinsAndBills.one++;
      }
      else if(changes >= 0.25 && quaNum > 0){
          changes -= 0.25;
          coinsAndBills.quarter++;
      }
      else if(changes >= 0.10 && dimeNum > 0){
        changes -= 0.10;
        coinsAndBills.dime++;
      }
      else if(changes >= 0.05 && nickelNum > 0){
        changes -= 0.05;
        coinsAndBills.nickel++;
      }
      else if (pennyNum > 0){
        changes -= 0.01;
        coinsAndBills.penny++;
      }
      else {
        return false;
      }
    }

    console.log(coinsAndBills);

  }

  findChanges(changeDue);


  // if changeDue > cashInDrawer -> change = "Insufficient Funds"

  // if changeDue === cashInDrawer -> change = "Closed"

  // if changeDue < cashInDrawer -> change = new Array();
  // an array of change in coins and bills, sorted in highest to lowest -> e.g. [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]]

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

checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
