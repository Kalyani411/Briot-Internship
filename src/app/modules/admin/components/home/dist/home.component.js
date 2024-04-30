"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeComponent = void 0;
var core_1 = require("@angular/core");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(student) {
        this.student = student;
        // ... rest of the component code
        this.title = 'first';
        this.show = false;
        this.APIData = [];
        this.show = false;
    }
    HomeComponent.prototype.addData = function () {
        var randomElementIndex = Math.floor(Math.random() * this.getAllStudent.length);
        this.APIData.data.push(this.getAllStudent[randomElementIndex]);
        this.APIData._updateChangeSubscription(); // Trigger update
    };
    HomeComponent.prototype.removeData = function () {
        this.APIData.data.pop();
        this.APIData._updateChangeSubscription(); // Trigger update
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.getAllData();
    };
    HomeComponent.prototype.getAllData = function () {
        var _this = this;
        this.student.getAllStudent().subscribe(function (res) {
            _this.APIData = res;
            console.log("API Data:", _this.APIData);
        });
    };
    HomeComponent.prototype.deleteStudent = function (student_id) {
        var _this = this;
        console.log(student_id);
        this.student.deletestudent(student_id).subscribe(function (result) {
            // console.log(result);
            _this.ngOnInit();
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css'] // Fix the typo here
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
