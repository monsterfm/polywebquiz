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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var app_component_1 = require('./components/app.component');
var header_component_1 = require("./components/header.component");
var footer_component_1 = require("./components/footer.component");
var accueil_component_1 = require("./components/accueil.component");
var instructions_component_1 = require("./components/instructions.component");
var stats_component_1 = require("./components/stats.component");
var tabBord_component_1 = require("./components/tabBord.component");
var ajouterQuestion_component_1 = require("./components/ajouterQuestion.component");
var testRapide_component_1 = require("./components/testRapide.component");
var examen_component_1 = require("./components/examen.component");
var resultatsExamen_component_1 = require("./components/resultatsExamen.component");
var routes = [
    { path: 'accueil', component: accueil_component_1.AccueilComponent },
    { path: 'instructions', component: instructions_component_1.InstructionsComponent },
    { path: 'tabBord', component: tabBord_component_1.TabBordComponent },
    { path: 'ajouterQuestion', component: ajouterQuestion_component_1.AjouterQuestionComponent },
    { path: 'testRapide', component: testRapide_component_1.TestRapideComponent },
    { path: 'examen', component: examen_component_1.ExamenComponent },
    { path: 'resultatsExamen', component: resultatsExamen_component_1.ResultatsExamenComponent },
    { path: '', component: accueil_component_1.AccueilComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, router_1.RouterModule.forRoot(routes), http_1.HttpModule, http_1.JsonpModule],
            declarations: [app_component_1.AppComponent, header_component_1.HeaderComponent, footer_component_1.FooterComponent, accueil_component_1.AccueilComponent, instructions_component_1.InstructionsComponent, tabBord_component_1.TabBordComponent, ajouterQuestion_component_1.AjouterQuestionComponent, testRapide_component_1.TestRapideComponent, examen_component_1.ExamenComponent, resultatsExamen_component_1.ResultatsExamenComponent, stats_component_1.StatsComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map