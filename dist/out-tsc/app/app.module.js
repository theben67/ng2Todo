var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataService } from './services/data.service';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './services/employee.service';
import { ToastComponent } from './shared/toast/toast.component';
var routing = RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'employee', component: EmployeeComponent }
]);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            HomeComponent,
            EmployeeComponent,
            AboutComponent,
            ToastComponent
        ],
        imports: [
            BrowserModule,
            FormsModule,
            ReactiveFormsModule,
            HttpModule,
            routing
        ],
        providers: [
            DataService,
            EmployeeService,
            ToastComponent
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=../../../src/app/app.module.js.map