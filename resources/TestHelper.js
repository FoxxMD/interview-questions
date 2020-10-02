export const assert = (testName, expected, actual) => {
  if (expected !== actual) {
    throw new Error(`${testName} did not pass.
    Expected: ${expected}
    ActualL ${actual}`);
  }
}

export const maybeNull = () => {
  const rand = Math.random();
  return rand > 0.5 ? null : rand;
}

export const nullAnswer = (ans) => {
  return ans === null ? 'foo' : 'bar';
}

export const testArray1Answer = 'wompwomp';