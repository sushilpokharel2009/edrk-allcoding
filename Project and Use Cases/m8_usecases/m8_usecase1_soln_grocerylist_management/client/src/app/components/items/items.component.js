"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var item_service_1 = require("./../../services/item/item.service");
var ItemsComponent = (function () {
    function ItemsComponent(_itemService) {
        this._itemService = _itemService;
    }
    ItemsComponent.prototype.addItem = function (title) {
        var _this = this;
        var _item = { title: title, isDone: false, _id: 0 };
        this._itemService.addItem(_item)
            .subscribe((function (item) {
            _this.items.push(item);
            _this.title = '';
        }));
    };
    ItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._itemService.getItems()
            .subscribe(function (items) {
            _this.items = items;
        });
    };
    ItemsComponent.prototype.updateItem = function (item) {
        var _item = { _id: item._id, title: item.title, isDone: item.isDone };
        this._itemService.updateItem(_item)
            .subscribe(function (data) {
            item.isDone = !item.isDone;
        });
    };
    ItemsComponent.prototype.deleteItem = function (id) {
        var items = this.items;
        this._itemService.deleteItem(id)
            .subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < items.length; i++) {
                    if (items[i]._id == id) {
                        items.splice(i, 1);
                    }
                }
            }
        });
    };
    return ItemsComponent;
}());
ItemsComponent = __decorate([
    core_1.Component({
        selector: 'items',
        templateUrl: 'app/components/items/items.component.html'
    }),
    __metadata("design:paramtypes", [item_service_1.ItemService])
], ItemsComponent);
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=items.component.js.map