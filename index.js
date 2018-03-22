const ELEMENTS_KINDS = {
  HOLEY_SMI_ELEMENTS: "HOLEY_SMI_ELEMENTS",
  HOLEY_DOUBLE_ELEMENTS: "HOLEY_DOUBLE_ELEMENTS",
  HOLEY_ELEMENTS: "HOLEY_ELEMENTS",
  PACKED_SMI_ELEMENTS: "PACKED_SMI_ELEMENTS",
  PACKED_DOUBLE_ELEMENTS: "PACKED_DOUBLE_ELEMENTS",
  PACKED_ELEMENTS: "PACKED_ELEMENTS"
};

function isSMI(arr) {
  return arr.every(e => Number.isSafeInteger(e) && !Object.is(e, -0));
}

/**
 * Handles +-Infinity, Doubles, NaN, -0
 */
function isDouble(arr) {
  return arr.every(e => typeof e === "number");
  //return arr.some(
  //   e =>
  //     Number.isNaN(e) || (Number(e) === e && e % 1 !== 0) || Object.is(e, -0)
  // );
}

function containsHoles(arr) {
  for (const ele of arr) {
    if (typeof ele === "undefined") {
      return true;
    }
  }
  return false;
}

module.exports = function getElementsKinds(inputArray) {
  if (!Array.isArray(inputArray)) {
    throw new Erorr("Input param must be array");
  }

  let kind;
  /**
   * Check if array contains holes
   */
  const isHoley = containsHoles(inputArray);

  if (isHoley) {
    if (isSMI(inputArray)) {
      kind = ELEMENTS_KINDS.HOLEY_SMI_ELEMENTS;
    } else if (isDouble(inputArray)) {
      kind = ELEMENTS_KINDS.HOLEY_DOUBLE_ELEMENTS;
    } else {
      kind = ELEMENTS_KINDS.HOLEY_ELEMENTS;
    }
  } else {
    if (isSMI(inputArray)) {
      kind = ELEMENTS_KINDS.PACKED_SMI_ELEMENTS;
    } else if (isDouble(inputArray)) {
      kind = ELEMENTS_KINDS.PACKED_DOUBLE_ELEMENTS;
    } else {
      kind = ELEMENTS_KINDS.PACKED_ELEMENTS;
    }
  }
  return kind;
};

module.exports.ELEMENTS_KINDS = ELEMENTS_KINDS;
