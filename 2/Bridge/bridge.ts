class PaymentProcessor {
  processPayment(payment: string) {
    console.log("processing payment!");
    console.log(payment);
    console.log("payment processed!");
  }
}

class Company1 {
  name: string = "Company 1";
  paymentProcessor: PaymentProcessor;
  constructor(payment : PaymentProcessor) {
    this.paymentProcessor = payment;
  }
  processPAyment() {
    console.log('Company 1 processing payment');
    this.paymentProcessor.processPayment('First Payment');
  }
}
class Company2 {
  name: string = "Company 2";
  paymentProcessor: PaymentProcessor;
  constructor(payment : PaymentProcessor) {
    this.paymentProcessor = payment;
  }
  processPAyment() {
    console.log('Company 2 processing payment');
    this.paymentProcessor.processPayment('Second Payment');
  }
}
const comp1 = new Company1(new PaymentProcessor());
comp1.processPAyment();