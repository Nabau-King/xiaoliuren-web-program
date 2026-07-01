(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  root.XiaoLiuRenCore = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  const SIX = ["大安", "留连", "速喜", "赤口", "小吉", "空亡"];

  function modSix(value) {
    const remainder = value % 6;
    return remainder === 0 ? 6 : remainder;
  }

  function calculateByNumbers(month, day, hourBranchValue) {
    const formulaValue = month + day + hourBranchValue - 2;
    const resultNumber = modSix(formulaValue);
    return {
      formulaValue,
      resultNumber,
      resultIndex: resultNumber - 1,
      resultName: SIX[resultNumber - 1]
    };
  }

  return { SIX, modSix, calculateByNumbers };
});
