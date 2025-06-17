"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var angular_2 = require("nativescript-ui-listview/angular");
var angular_3 = require("nativescript-ui-calendar/angular");
var angular_4 = require("nativescript-ui-chart/angular");
var angular_5 = require("nativescript-ui-dataform/angular");
var angular_6 = require("nativescript-ui-autocomplete/angular");
var angular_7 = require("nativescript-ui-gauge/angular");
var forms_1 = require("nativescript-angular/forms");
var artist_routing_module_1 = require("./artist-routing.module");
var artist_component_1 = require("./artist.component");
var nativescript_ngx_shadow_1 = require("../nativescript-ngx-shadow");
var ArtistModule = /** @class */ (function () {
    function ArtistModule() {
    }
    ArtistModule = __decorate([
        core_1.NgModule({
            imports: [
                angular_1.NativeScriptUISideDrawerModule,
                angular_2.NativeScriptUIListViewModule,
                angular_3.NativeScriptUICalendarModule,
                angular_4.NativeScriptUIChartModule,
                angular_5.NativeScriptUIDataFormModule,
                angular_6.NativeScriptUIAutoCompleteTextViewModule,
                angular_7.NativeScriptUIGaugeModule,
                common_1.NativeScriptCommonModule,
                artist_routing_module_1.ArtistRoutingModule,
                forms_1.NativeScriptFormsModule,
                nativescript_ngx_shadow_1.NgShadowModule
            ],
            declarations: [
                artist_component_1.ArtistComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], ArtistModule);
    return ArtistModule;
}());
exports.ArtistModule = ArtistModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJ0aXN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFydGlzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBQ3ZFLDhEQUFvRjtBQUNwRiw0REFBZ0Y7QUFDaEYsNERBQWdGO0FBQ2hGLHlEQUEwRTtBQUMxRSw0REFBZ0Y7QUFDaEYsZ0VBQWdHO0FBQ2hHLHlEQUEwRTtBQUMxRSxvREFBcUU7QUFFckUsaUVBQThEO0FBQzlELHVEQUFxRDtBQUNyRCxzRUFBNEQ7QUF1QjVEO0lBQUE7SUFBNEIsQ0FBQztJQUFoQixZQUFZO1FBckJ4QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsd0NBQThCO2dCQUM5QixzQ0FBNEI7Z0JBQzVCLHNDQUE0QjtnQkFDNUIsbUNBQXlCO2dCQUN6QixzQ0FBNEI7Z0JBQzVCLGtEQUF3QztnQkFDeEMsbUNBQXlCO2dCQUN6QixpQ0FBd0I7Z0JBQ3hCLDJDQUFtQjtnQkFDbkIsK0JBQXVCO2dCQUN2Qix3Q0FBYzthQUNqQjtZQUNELFlBQVksRUFBRTtnQkFDVixrQ0FBZTthQUNsQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csWUFBWSxDQUFJO0lBQUQsbUJBQUM7Q0FBQSxBQUE3QixJQUE2QjtBQUFoQixvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQ2FsZW5kYXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWNhbGVuZGFyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlDaGFydE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2hhcnQvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1kYXRhZm9ybS9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQXV0b0NvbXBsZXRlVGV4dFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWF1dG9jb21wbGV0ZS9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJR2F1Z2VNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWdhdWdlL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IEFydGlzdFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcnRpc3Qtcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgQXJ0aXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vYXJ0aXN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBOZ1NoYWRvd01vZHVsZSB9IGZyb20gXCIuLi9uYXRpdmVzY3JpcHQtbmd4LXNoYWRvd1wiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRVSUNhbGVuZGFyTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJQ2hhcnRNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRVSUF1dG9Db21wbGV0ZVRleHRWaWV3TW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJR2F1Z2VNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxyXG4gICAgICAgIEFydGlzdFJvdXRpbmdNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcbiAgICAgICAgTmdTaGFkb3dNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBBcnRpc3RDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXJ0aXN0TW9kdWxlIHsgfVxyXG4iXX0=