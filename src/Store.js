const { Console, Random } = require('@woowacourse/mission-utils');
const { REGEX, ERROR } = require('./constants');

class Store {
  issuedQuantity;
  lottos;

  constructor() {
    this.issuedQuantity;
    this.lottos = [];
  }

  pay() {
    Console.readLine('구입금액을 입력해 주세요.\n', (inputStr) => {
      const purchaseAmount = this.validate(inputStr);
      this.issuedQuantity = purchaseAmount / 1000;
      this.issue(this.issuedQuantity);
    });
  }

  validate(inputStr) {
    if (!REGEX.PURCHASE_AMOUNT_REGEX.test(inputStr)) {
      throw new Error(ERROR.ENTER_VALID_PURCHASE_AMOUNT);
    }

    return parseInt(inputStr);
  }

  issue(issuedQuantity) {
    for (let i = 0; i < issuedQuantity; ++i) {
      this.lottos.push(Random.pickUniqueNumbersInRange(1, 45, 6));
    }
  }
}

module.exports = Store;
