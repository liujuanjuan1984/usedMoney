/*
*
*定义金钱开销相关的变量。
*
*/


//定义：一条金钱开销日志相关变量。

var usedMoneyDate;
var usedMoneyAccountFrom;
var usedMoneyAccountTo;
var usedMoneyNum; 
var usedMoneyFor; 
var usedMoneyKind; 


//第一条消费日志：
usedMoneyDate = '2017-08-18';
usedMoneyAccountFrom = '我的现金账户';
usedMoneyAccountTo = '人家的钱包';
usedMoneyNum = -9.80;
usedMoneyFor = '买一杯咖啡';
usedMoneyKind = '个人生活消费';


//下面运用了语法糖来简写。
var usedMoneyLogObj = {
    usedMoneyDate,
    usedMoneyAccountFrom,
    usedMoneyAccountTo,
    usedMoneyNum,
    usedMoneyFor,
    usedMoneyKind
};



console.log('\n');
console.log('------begin 001-----------');
console.log('\n');
console.log(usedMoneyLogObj);
console.log('\n');
console.log('--------done---------');
console.log('\n');

//第2条消费日志：
usedMoneyDate = '2017-08-19';
usedMoneyAccountFrom = '我的现金账户';
usedMoneyAccountTo = '人家的钱包';
usedMoneyNum = -35;
usedMoneyFor = '买一只烤鸡';
usedMoneyKind = '个人生活消费';

console.log('\n');
console.log('------begin 002-----------');
console.log('\n');
console.log(usedMoneyLogObj);
console.log('\n');
console.log('--------done---------');
console.log('\n');


//定义：账户金额。

var accountBalanceBegin;//账期最初时的账户余额
var accountBalanceChangeSum;//账期内发生的金额变动总额
var accountBalanceNow;//当前账户的理论金额

accountBalanceBegin = 100;
accountBalanceChangeSum = 0; //这个应该放在最上面申明定义和赋值。
accountBalanceChangeSum = accountBalanceChangeSum + usedMoneyNum;
accountBalanceNow = accountBalanceBegin + accountBalanceChangeSum;

console.log('账期最初时的账户余额：' + accountBalanceBegin);
console.log('账期内发生的金额变动总额：' + accountBalanceChangeSum);
console.log('账期内新增一笔金额变动：' + usedMoneyNum);
console.log('当前账户的理论金额：' + accountBalanceNow);
