

const Top = () => {

  class Person {
    nio = '90';
    greet() {
      console.log('hello');
    }
  }

  class Bank {
    construvtor(name) {
      this.bankName = name;
    }
    // bankName = "prabhu";
    // balance = 0;
    // deposit() {
    //   this.balance += 90;
    // }
  }

  // const bank1 = new Bank();
  // bank1.deposit();
  // console.log(bank1.balance);

  // const m = new Person();

  // m.greet();
  const date = new Date();
  const bank1 = new Bank('prabhu');
  const bank2 = new Bank("nic");
  return (
    <div>
      <h1>{bank2.bankName}</h1>
      <h1>{bank1.bankName}</h1>
      <h1>{date.getHours()} : {date.getMinutes()} : {date.getSeconds()}</h1>
    </div>
  )
}

export default Top
