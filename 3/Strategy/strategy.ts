interface Strategy {
  priceMenu(): void;
}
 
class BigMacMenu implements Strategy {
  priceMenu() : void {
    console.log('BigMac Menu  \n Big Mac\n CocaCola \n French fries big \n Sauce \n ---10$---');
  }
}
class GamburgerMenu implements Strategy {
  priceMenu() : void {
    console.log('Gamburger Menu  \n Gamburger\n Sprite \n French fries average  \n Sauce\n ---7$---');
  }
}
class BigTastyMenu implements Strategy {
  priceMenu() : void {
    console.log('Big Tasty Menu  \n Big Tasty\n 7-up \n French fries big  \n Sauce x2\n ---13$---');
  }
}

class OrderBurgerMenu {
  _burgerMenu: Strategy;
  setMenu(_menu : Strategy) {
    this._burgerMenu = _menu
  }
  price() {
    this._burgerMenu.priceMenu();
  }
}

const orderBurger = new OrderBurgerMenu();
const orderBurger2 = new OrderBurgerMenu();
const orderBurger3 = new OrderBurgerMenu();
const bigMac = new BigMacMenu();
const gumberger = new GamburgerMenu();
const bigTasty = new BigTastyMenu();
//---------------
orderBurger.setMenu(bigMac);
orderBurger.price();
// BigMac Menu
// Big Mac
// CocaCola
// French fries big
// Sauce
// ---10$---
//---------------

//---------------
orderBurger2.setMenu(gumberger);
orderBurger2.price();
// Gamburger Menu
//  Gamburger
//  Sprite
//  French fries average
//  Sauce
//  ---7$---
//---------------
orderBurger3.setMenu(bigTasty);
orderBurger3.price();
// Big Tasty Menu
//  7-up
//  French fries big
//  Sauce x2
//  ---13$---
//---------------