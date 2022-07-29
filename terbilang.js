console.clear();

// numbering 1 - 999999
function numbering(data) {
  const urutan = [
    "satu",
    "dua",
    "tiga",
    "empat",
    "lima",
    "enam",
    "tujuh",
    "delapan",
    "sembilan",
  ];
  let numString = data.toString();
  let numLength = numString.length;
  let numSlicesOne = "";
  let numSlicesTwo = "";
  let result = "";

  if (numLength === 6) {
    numSlicesOne = numString.slice(0, 3);
    numSlicesTwo = numString.slice(3, 6);

    if (
      numSlicesTwo[0] === "0" &&
      numSlicesTwo[1] === "0" &&
      numSlicesTwo[2] === "0"
    ) {
      numSlicesTwo = "";
    } else if (numSlicesTwo[0] === "0" && numSlicesTwo[1] === "0") {
      numSlicesTwo = numSlicesTwo.slice(2, 3);
    } else if (numSlicesTwo[0] === "0") {
      numSlicesTwo = numSlicesTwo.slice(1, 3);
    }
  }

  if (numLength === 5) {
    numSlicesOne = numString.slice(0, 2);
    numSlicesTwo = numString.slice(2, 6);

    if (
      numSlicesTwo[0] === "0" &&
      numSlicesTwo[1] === "0" &&
      numSlicesTwo[2] === "0"
    ) {
      numSlicesTwo = "";
    } else if (numSlicesTwo[0] === "0" && numSlicesTwo[1] === "0") {
      numSlicesTwo = numSlicesTwo.slice(2, 3);
    } else if (numSlicesTwo[0] === "0") {
      numSlicesTwo = numSlicesTwo.slice(1, 3);
    }
  }

  if (numLength === 4) {
    for (let i = 0; i < numLength; i++) {
      if (
        numString[i] === "1" &&
        i === 0 &&
        numString[i + 1] === "0" &&
        numString[i + 2] === "0" &&
        numString[i + 3] === "0"
      ) {
        result += "seribu";
        i = numLength - 1;
      } else if (
        numString[i] === "1" &&
        i === 0 &&
        numString[i + 1] === "0" &&
        numString[i + 2] === "0" &&
        numString[i + 3] !== "0"
      ) {
        result += "seribu ";
        i = i + 2;
      } else if (
        numString[i] === "1" &&
        i === 0 &&
        numString[i + 1] === "0" &&
        numString[i + 2] !== "0"
      ) {
        result += "seribu ";
        i = i + 1;
      } else if (numString[i] === "1" && i === 0 && numString[i + 1] !== "0") {
        result += "seribu ";
      } else if (
        numString[i] !== "1" &&
        i === 0 &&
        numString[i + 1] === "0" &&
        numString[i + 2] === "0" &&
        numString[i + 3] === "0"
      ) {
        result += urutan[numString[i] - 1] + " ribu";
        i = numLength - 1;
      } else if (
        numString[i] !== "1" &&
        i === 0 &&
        numString[i + 1] === "0" &&
        numString[i + 2] === "0" &&
        numString[i + 3] !== "0"
      ) {
        result += urutan[numString[i] - 1] + " ribu ";
        i = i + 2;
      } else if (
        numString[i] !== "1" &&
        i === 0 &&
        numString[i + 1] === "0" &&
        numString[i + 2] !== "0"
      ) {
        result += urutan[numString[i] - 1] + " ribu ";
        i = i + 1;
      } else if (numString[i] !== "1" && i === 0 && numString[i + 1] !== "0") {
        result += urutan[numString[i] - 1] + " ribu ";
      } else if (
        numString[i] === "1" &&
        i === 1 &&
        numString[i + 1] === "0" &&
        numString[i + 2] === "0"
      ) {
        result += "seratus";
        i = numLength - 1;
      } else if (numString[i] === "1" && i === 1 && numString[i + 1] === "0") {
        result += "seratus ";
        i++;
      } else if (numString[i] === "1" && i === 1 && numString[i + 1] !== "0") {
        result += "seratus ";
      } else if (
        numString[i] !== "1" &&
        i === 1 &&
        numString[i + 1] === "0" &&
        numString[i + 2] === "0"
      ) {
        result += urutan[numString[i] - 1] + " ratus";
        i = numLength - 1;
      } else if (numString[i] !== "1" && i === 1 && numString[i + 1] === "0") {
        result += urutan[numString[i] - 1] + " ratus ";
        i++;
      } else if (numString[i] !== "1" && i === 1 && numString[i + 1] !== "0") {
        result += urutan[numString[i] - 1] + " ratus ";
      } else if (numString[i] === "1" && i === 2) {
        if (numString[i + 1] !== "1" && numString[i + 1] !== "0") {
          result += urutan[numString[i + 1] - 1] + " belas";
          i++;
        } else if (numString[i + 1] === "0") {
          result += "sepuluh";
          i++;
        } else {
          result += "sebelas";
          i++;
        }
      } else {
        if (numString[i + 1] === "0") {
          result += urutan[numString[i] - 1] + " puluh";
          i++;
        } else if (i !== numLength - 1) {
          result += urutan[numString[i] - 1] + " puluh ";
        } else {
          result += urutan[numString[i] - 1];
        }
      }
    }
  }

  if (numLength === 3) {
    for (let i = 0; i < numLength; i++) {
      if (
        numString[i] === "1" &&
        i === 0 &&
        numString[i + 1] === "0" &&
        numString[i + 2] === "0"
      ) {
        result += "seratus";
        i = numLength - 1;
      } else if (numString[i] === "1" && i === 0 && numString[i + 1] === "0") {
        result += "seratus ";
        i++;
      } else if (numString[i] === "1" && i === 0 && numString[i + 1] !== "0") {
        result += "seratus ";
      } else if (
        numString[i] !== "1" &&
        i === 0 &&
        numString[i + 1] === "0" &&
        numString[i + 2] === "0"
      ) {
        result += urutan[numString[i] - 1] + " ratus";
        i = numLength - 1;
      } else if (numString[i] !== "1" && i === 0 && numString[i + 1] === "0") {
        result += urutan[numString[i] - 1] + " ratus ";
        i++;
      } else if (numString[i] !== "1" && i === 0 && numString[i + 1] !== "0") {
        result += urutan[numString[i] - 1] + " ratus ";
      } else if (numString[i] === "1" && i === 1) {
        if (numString[i + 1] !== "1" && numString[i + 1] !== "0") {
          result += urutan[numString[i + 1] - 1] + " belas";
          i++;
        } else if (numString[i + 1] === "0") {
          result += "sepuluh";
          i++;
        } else {
          result += "sebelas";
          i++;
        }
      } else {
        if (numString[i + 1] === "0") {
          result += urutan[numString[i] - 1] + " puluh";
          i++;
        } else if (i !== numLength - 1) {
          result += urutan[numString[i] - 1] + " puluh ";
        } else {
          result += urutan[numString[i] - 1];
        }
      }
    }
  }

  if (numLength === 2) {
    for (let i = 0; i < numLength; i++) {
      if (i === 0 && numString[i] === "1") {
        if (numString[i + 1] === "1") {
          result += "sebelas";
          i++;
        } else if (numString[i + 1] === "0") {
          result += "sepuluh";
          i++;
        } else if (numString[i] === "1") {
          result += urutan[numString[i + 1] - 1] + " belas";
          i++;
        }
      } else {
        if (numString[i + 1] === "0") {
          result += urutan[numString[i] - 1] + " puluh";
          i++;
        } else if (i !== numLength - 1) {
          result += urutan[numString[i] - 1] + " puluh ";
        } else {
          result += urutan[numString[i] - 1];
        }
      }
    }
  }

  if (numLength === 1) {
    result = urutan[numString[0] - 1];
  }

  if (numSlicesOne.length === 3) {
    for (let i = 0; i < numSlicesOne.length; i++) {
      if (
        numSlicesOne[i] === "1" &&
        i === 0 &&
        numSlicesOne[i + 1] === "0" &&
        numSlicesOne[i + 2] === "0"
      ) {
        result += "seratus";
        i = numSlicesOne.length - 1;
      } else if (
        numSlicesOne[i] === "1" &&
        i === 0 &&
        numSlicesOne[i + 1] === "0"
      ) {
        result += "seratus ";
        i++;
      } else if (
        numSlicesOne[i] === "1" &&
        i === 0 &&
        numSlicesOne[i + 1] !== "0"
      ) {
        result += "seratus ";
      } else if (
        numSlicesOne[i] !== "1" &&
        i === 0 &&
        numSlicesOne[i + 1] === "0" &&
        numSlicesOne[i + 2] === "0"
      ) {
        result += urutan[numSlicesOne[i] - 1] + " ratus";
        i = numSlicesOne.length - 1;
      } else if (
        numSlicesOne[i] !== "1" &&
        i === 0 &&
        numSlicesOne[i + 1] === "0"
      ) {
        result += urutan[numSlicesOne[i] - 1] + " ratus ";
        i++;
      } else if (
        numSlicesOne[i] !== "1" &&
        i === 0 &&
        numSlicesOne[i + 1] !== "0"
      ) {
        result += urutan[numSlicesOne[i] - 1] + " ratus ";
      } else if (numSlicesOne[i] === "1" && i === 1) {
        if (numSlicesOne[i + 1] !== "1" && numSlicesOne[i + 1] !== "0") {
          result += urutan[numSlicesOne[i + 1] - 1] + " belas";
          i++;
        } else if (numSlicesOne[i + 1] === "0") {
          result += "sepuluh";
          i++;
        } else {
          result += "sebelas";
          i++;
        }
      } else {
        if (numSlicesOne[i + 1] === "0") {
          result += urutan[numSlicesOne[i] - 1] + " puluh";
          i++;
        } else if (i !== numSlicesOne.length - 1) {
          result += urutan[numSlicesOne[i] - 1] + " puluh ";
        } else {
          result += urutan[numSlicesOne[i] - 1];
        }
      }
    }
    result += " ribu ";
  }

  if (numSlicesOne.length === 2) {
    for (let i = 0; i < numSlicesOne.length; i++) {
      if (i === 0 && numSlicesOne[i] === "1") {
        if (numSlicesOne[i + 1] !== "1" && numSlicesOne[i + 1] !== "0") {
          result += urutan[numSlicesOne[i + 1] - 1] + " belas";
          i++;
        } else if (numSlicesOne[i + 1] === "0") {
          result += "sepuluh";
          i++;
        } else {
          result += "sebelas";
          i++;
        }
      } else {
        if (numSlicesOne[i + 1] === "0") {
          result += urutan[numSlicesOne[i] - 1] + " puluh";
          i++;
        } else if (i !== numSlicesOne.length - 1) {
          result += urutan[numSlicesOne[i] - 1] + " puluh ";
        } else {
          result += urutan[numSlicesOne[i] - 1];
        }
      }
    }
    result += " ribu ";
  }

  if (numSlicesTwo.length === 1) {
    result += urutan[numSlicesTwo[0] - 1];
  }

  if (numSlicesTwo.length === 2) {
    for (let i = 0; i < numSlicesTwo.length; i++) {
      if (i === 0 && numSlicesTwo[i] === "1") {
        if (numSlicesTwo[i + 1] !== "1" && numSlicesTwo[i + 1] !== "0") {
          result += urutan[numSlicesTwo[i + 1] - 1] + " belas";
          i++;
        } else if (numSlicesTwo[i + 1] === "0") {
          result += "sepuluh";
          i++;
        } else {
          result += "sebelas";
          i++;
        }
      } else {
        if (numSlicesTwo[i + 1] === "0") {
          result += urutan[numSlicesTwo[i] - 1] + " puluh";
          i++;
        } else if (i !== numSlicesTwo.length - 1) {
          result += urutan[numSlicesTwo[i] - 1] + " puluh ";
        } else {
          result += urutan[numSlicesTwo[i] - 1];
        }
      }
    }
  }

  if (numSlicesTwo.length === 3) {
    for (let i = 0; i < numSlicesTwo.length; i++) {
      if (
        numSlicesTwo[i] === "1" &&
        i === 0 &&
        numSlicesTwo[i + 1] === "0" &&
        numSlicesTwo[i + 2] === "0"
      ) {
        result += "seratus";
        i = numSlicesTwo.length - 1;
      } else if (
        numSlicesTwo[i] === "1" &&
        i === 0 &&
        numSlicesTwo[i + 1] === "0"
      ) {
        result += "seratus ";
        i++;
      } else if (
        numSlicesTwo[i] === "1" &&
        i === 0 &&
        numSlicesTwo[i + 1] !== "0"
      ) {
        result += "seratus ";
      } else if (
        numSlicesTwo[i] !== "1" &&
        i === 0 &&
        numSlicesTwo[i + 1] === "0" &&
        numSlicesTwo[i + 2] === "0"
      ) {
        result += urutan[numSlicesTwo[i] - 1] + " ratus";
        i = numSlicesTwo.length - 1;
      } else if (
        numSlicesTwo[i] !== "1" &&
        i === 0 &&
        numSlicesTwo[i + 1] === "0"
      ) {
        result += urutan[numSlicesTwo[i] - 1] + " ratus ";
        i++;
      } else if (
        numSlicesTwo[i] !== "1" &&
        i === 0 &&
        numSlicesTwo[i + 1] !== "0"
      ) {
        result += urutan[numSlicesTwo[i] - 1] + " ratus ";
      } else if (numSlicesTwo[i] === "1" && i === 1) {
        if (numSlicesTwo[i + 1] !== "1" && numSlicesTwo[i + 1] !== "0") {
          result += urutan[numSlicesTwo[i + 1] - 1] + " belas";
          i++;
        } else if (numSlicesTwo[i + 1] === "0") {
          result += "sepuluh";
          i++;
        } else {
          result += "sebelas";
          i++;
        }
      } else {
        if (numSlicesTwo[i + 1] === "0") {
          result += urutan[numSlicesTwo[i] - 1] + " puluh";
          i++;
        } else if (i !== numSlicesTwo.length - 1) {
          result += urutan[numSlicesTwo[i] - 1] + " puluh ";
        } else {
          result += urutan[numSlicesTwo[i] - 1];
        }
      }
    }
  }

  return result;
}

const arra = () => {
  let input = 999999;
  for (let i = 1; i <= input; i++) {
    console.log(i, numbering(i));
  }
};

arra();