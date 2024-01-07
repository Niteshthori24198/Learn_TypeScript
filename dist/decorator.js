"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Component(constructor) {
    constructor.prototype.isComponent = true;
    console.log("Component decorator called");
}
let ProfileComponent = class ProfileComponent {
};
ProfileComponent = __decorate([
    Component
], ProfileComponent);
function Component1(value) {
    return (constructor) => {
        constructor.prototype.dataValue = value;
        console.log("Component decorator called");
    };
}
let ProfileComponent1 = class ProfileComponent1 {
};
ProfileComponent1 = __decorate([
    Component1(1)
], ProfileComponent1);
