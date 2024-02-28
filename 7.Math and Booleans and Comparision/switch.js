// switch case
// when any case is match execute this block of code.
// must be put break statement end of each case. else each case will be executed even case is not match
// when no match is found, it executes default block.

// switch case strict comparison is done
let x = "0";
switch (x) {
  case 0:
    console.log("case zero block");
    break;

  default:
    console.log("strict comparison done");
    break;
}

// "0" and 0 are not same in case of switch case.

