(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy = this;

        toBuy.items = ShoppingListCheckOffService.getToBuyItems();
        
        toBuy.buyItem = function (index) {
        ShoppingListCheckOffService.buyItem(index);
        };
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var alreadyBought = this;

        alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();

        alreadyBought.allItemsBought = function () {
        return ShoppingListCheckOffService.allItemsBought();
        };
    }

    function ShoppingListCheckOffService() {
        var service = this;

        var toBuyItems = [
            { name: 'Cookies', quantity: 10 },
            { name: 'Apples', quantity: 5 },
            { name: 'Milk', quantity: 2 },
            { name: 'Bread', quantity: 3 },
            { name: 'Eggs', quantity: 6 }
        ];

        var boughtItems = [];

        service.getToBuyItems = function () {
            return toBuyItems;
        };

        service.getBoughtItems = function () {
            return boughtItems;
        };

        service.buyItem = function (index) {
            var item = toBuyItems.splice(index, 1)[0];
            boughtItems.push(item);
        };

        service.allItemsBought = function () {
            return toBuyItems.length === 0;
        };
    }
    })();
    