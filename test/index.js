const assert = require("assert");
const getElementsKinds = require("../");
const { ELEMENTS_KINDS } = require("../");

describe("Elements Kinds", () => {
  it("Unitialized array must be holey smi elements", () => {
    assert.equal(
      getElementsKinds(new Array(2)),
      ELEMENTS_KINDS.HOLEY_SMI_ELEMENTS
    );
  });

  it("holey smi elements", () => {
    assert.equal(
      getElementsKinds([1, 2, , 3]),
      ELEMENTS_KINDS.HOLEY_SMI_ELEMENTS
    );
  });

  it("holey double elements", () => {
    assert.equal(
      getElementsKinds([1, 2, Infinity, 3, ,]),
      ELEMENTS_KINDS.HOLEY_DOUBLE_ELEMENTS
    );
  });

  it("holey elements", () => {
    assert.equal(
      getElementsKinds([1, 2, Infinity, 3, , , ""]),
      ELEMENTS_KINDS.HOLEY_ELEMENTS
    );
  });

  it("packed small integers", () => {
    const arr = [1, 2, 3, 4];
    assert.equal(getElementsKinds(arr), ELEMENTS_KINDS.PACKED_SMI_ELEMENTS);
  });

  it("packed double elements", () => {
    const arr = [1, 2, 3, -0];
    arr.push(1.23);
    assert.equal(getElementsKinds(arr), ELEMENTS_KINDS.PACKED_DOUBLE_ELEMENTS);
  });

  it("packed elements", () => {
    const arr = [1, 2, 3];
    arr.push("1");
    assert.equal(getElementsKinds(arr), ELEMENTS_KINDS.PACKED_ELEMENTS);
  });
});
