(function(){
  'use strict';

  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var itemAdder = this;
    //item1
    itemAdder.itemName = "Cookies";
    itemAdder.itemQuantity = "10 bags";
    ShoppingListCheckOffService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
    //item2
    itemAdder.itemName = "Cookies";
    itemAdder.itemQuantity = "10 bags";
    ShoppingListCheckOffService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
    //item3
    itemAdder.itemName = "Cookies";
    itemAdder.itemQuantity = "10 bags";
    ShoppingListCheckOffService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
    //item4
    itemAdder.itemName = "Cookies";
    itemAdder.itemQuantity = "10 bags";
    ShoppingListCheckOffService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
    //item5
    itemAdder.itemName = "Cookies";
    itemAdder.itemQuantity = "10 bags";
    ShoppingListCheckOffService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
    //item6
    itemAdder.itemName = "Cookies";
    itemAdder.itemQuantity = "10 bags";
    ShoppingListCheckOffService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
    //item7
    itemAdder.itemName = "Cookies";
    itemAdder.itemQuantity = "10 bags";
    ShoppingListCheckOffService.addItem(itemAdder.itemName, itemAdder.itemQuantity);

    itemAdder.items = ShoppingListCheckOffService.getItems();

    itemAdder.bought = function(itemIndex){
      itemAdder.items[itemIndex].list = "alreadyBought";
    };

    itemAdder.checkItem = function(itemIndex){
      if (itemAdder.items[itemIndex].list == "toBuy")
      return 1;
      else return 0;
    }
    itemAdder.error = function(itemIndex){
      var count = 0;
      var arr = itemAdder.items;
      arr.forEach(function(item){
        if (item.list == "toBuy")
          count++;
      });
      if (count == 0)
        return 1;
      else return 0;
    }

  };
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var itemBought = this;
    itemBought.items = ShoppingListCheckOffService.getItems();

    itemBought.checkItem = function(itemIndex){
      if (itemBought.items[itemIndex].list == "alreadyBought")
      return 1;
      else return 0;
    }
    itemBought.error = function(itemIndex){
      var count = 0;
      var arr = itemBought.items;
      arr.forEach(function(item){
        if (item.list == "alreadyBought")
          count++;
      });
      if (count == 0)
        return 1;
      else return 0;
    }
  };

  function ShoppingListCheckOffService(){
    var service = this;
    var items = [];

    service.addItem = function (itemName, quantity){
      var item = {
        name: itemName,
        quantity: quantity,
        list: "toBuy"
      };
      items.push(item);
    };
    service.addItemByIndex = function (itemIndex){
      items.list = "alreadyBought";
    }
    service.removeItem = function (itemIndex) {
        items.splice(itemIndex,1);
      };
      service.getItems = function() {
        return items;
      };
}
})();
