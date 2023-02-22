const getValidationRules = (rules: any) => {
  const arr: any = [];
  rules.forEach((rule: any) => {
    switch (true) {
      case /required/.test(rule):
        arr.push({
          required: true,
          message: `Please input your ${rule.replace("required-", " ")}`,
        });
        break;
      case /minimum/.test(rule):
        arr.push({
          min: parseInt(rule.split("-")[1]),
          message: `Value should be ${rule.replace("-", " ")} character`,
        });
        break;
      case /maximum/.test(rule):
        arr.push({
          max: parseInt(rule.split("-")[1]),
          message: `Value should be ${rule.replace("-", " ")} character`,
        });
        break;
      case /type/.test(rule):
        arr.push({
          type: rule.split("-")[1],
          message: `Username should be ${rule.replace("-", " ")}`,
        });
        break;
      case /whitespace/.test(rule):
        arr.push({
          whitespace: true,
        });
    }
  });
  return arr;
};

export default getValidationRules;
