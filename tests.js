const { calculateByNumbers } = require("./xlr-core.js");

const cases = [
  { name: "示例：三月五日辰时", month: 3, day: 5, hour: 5, expected: "小吉" },
  { name: "整除归六", month: 1, day: 1, hour: 6, expected: "空亡" },
  { name: "大安起点", month: 1, day: 1, hour: 1, expected: "大安" }
];

for (const item of cases) {
  const result = calculateByNumbers(item.month, item.day, item.hour);
  if (result.resultName !== item.expected) {
    throw new Error(`${item.name} expected ${item.expected}, got ${result.resultName}`);
  }
}

console.log("小六壬算法测试通过");
