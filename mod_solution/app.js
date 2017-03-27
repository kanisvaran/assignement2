(
  function () {

    'use strict';

    angular.module('ShoppingListCheckOff',[])
    .controller('ToBuyController',ToBuyController)
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

    ToBuyController.$inject=['ShoppingListCheckOffService']
    function ToBuyController(ShoppingListCheckOffService) {
      var listBuy = this;

      listBuy.items = ShoppingListCheckOffService.ToBuyItems();

      listBuy.buyItem = function (index) {

          ShoppingListCheckOffService.ToBuy(index);
      }
    }


    AlreadyBoughtController.$inject=['ShoppingListCheckOffService']
    function AlreadyBoughtController(ShoppingListCheckOffService) {
      var listBought = this;
      listBought.items = ShoppingListCheckOffService.BoughtItems();
    }


    function ShoppingListCheckOffService() {
      var service = this;

      var toBuyList = [
        {
          name: "Milk",
          quantity: "2"
        },
        {
          name: "Donuts",
          quantity: "200"
        },
        {
          name: "Cookies",
          quantity: "300"
        },
        {
          name: "Chocolate",
          quantity: "5"
        },
        {
          name: "Peanut Butter",
          quantity: "10"
        }
      ];
      var toBoughtList=[];

      service.ToBuyItems = function () {
        return toBuyList;
      }

      service.BoughtItems = function () {
        return toBoughtList;
      }

      service.ToBuy = function (index) {
          var item = toBuyList[index];

          toBuyList.splice(index,1);

          toBoughtList.push(item);

      };


    }

})();


// !function(){"use strict";function t(t){var n=this;n.items=t.ToBuyItems(),n.buyItem=function(n){t.ToBuy(n)}}function n(t){var n=this;n.items=t.BoughtItems()}function e(){var t=this,n=[{name:"Milk",quantity:"2"},{name:"Donuts",quantity:"200"},{name:"Cookies",quantity:"300"},{name:"Chocolate",quantity:"5"},{name:"Peanut Butter",quantity:"10"}],e=[];t.ToBuyItems=function(){return n},t.BoughtItems=function(){return e},t.ToBuy=function(t){var i=n[t];n.splice(t,1),e.push(i)}}angular.module("ShoppingListCheckOff",[]).controller("ToBuyController",t).controller("AlreadyBoughtController",n).service("ShoppingListCheckOffService",e),t.$inject=["ShoppingListCheckOffService"],n.$inject=["ShoppingListCheckOffService"]}();
