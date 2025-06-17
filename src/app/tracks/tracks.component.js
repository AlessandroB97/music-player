"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var page_1 = require("tns-core-modules/ui/page");
var song_service_1 = require("../services/song.service");
var TracksComponent = /** @class */ (function () {
    function TracksComponent(router, page, songService) {
        this.router = router;
        this.page = page;
        this.songService = songService;
    }
    TracksComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.songService.fetch();
    };
    TracksComponent.prototype.ngAfterViewInit = function () {
    };
    TracksComponent.prototype.ngOnDestroy = function () {
    };
    TracksComponent.prototype.goBack = function () {
        this.router.back();
    };
    __decorate([
        core_1.ViewChild('bg'),
        __metadata("design:type", core_1.ElementRef)
    ], TracksComponent.prototype, "gridlayout", void 0);
    TracksComponent = __decorate([
        core_1.Component({
            selector: "tracks",
            moduleId: module.id,
            templateUrl: "./tracks.component.html",
            providers: [song_service_1.SongService]
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, page_1.Page,
            song_service_1.SongService])
    ], TracksComponent);
    return TracksComponent;
}());
exports.TracksComponent = TracksComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhY2tzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRyYWNrcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkc7QUFDM0csc0RBQStEO0FBQy9ELGlEQUFnRDtBQU9oRCx5REFBdUQ7QUFldkQ7SUFLSSx5QkFBcUIsTUFBd0IsRUFBVSxJQUFVLEVBQ25ELFdBQXdCO1FBRGpCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNuRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUd0QyxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUVJLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRTdCLENBQUM7SUFDRCx5Q0FBZSxHQUFmO0lBRUEsQ0FBQztJQUVELHFDQUFXLEdBQVg7SUFDQSxDQUFDO0lBRUQsZ0NBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQXhCZ0I7UUFBaEIsZ0JBQVMsQ0FBQyxJQUFJLENBQUM7a0NBQWEsaUJBQVU7dURBQUM7SUFGL0IsZUFBZTtRQU4zQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUUsMEJBQVcsQ0FBQztTQUM1QixDQUFDO3lDQU0rQix5QkFBZ0IsRUFBZ0IsV0FBSTtZQUN0QywwQkFBVztPQU43QixlQUFlLENBNkIzQjtJQUFELHNCQUFDO0NBQUEsQUE3QkQsSUE2QkM7QUE3QlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE5nWm9uZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlJztcclxuaW1wb3J0IHsgaXNJT1MsIGlzQW5kcm9pZCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XHJcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAndXRpbCc7XHJcbmltcG9ydCB7IGtub3duRm9sZGVycywgRm9sZGVyLCBGaWxlLCBwYXRoIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIjtcclxuXHJcblxyXG5pbXBvcnQgKiBhcyBmaWxlU3lzdGVtTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCI7XHJcbmltcG9ydCB7IFNvbmdTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3Nvbmcuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTb25nIH0gZnJvbSBcIi4uL21vZGVscy9zb25nXCI7XHJcblxyXG5cclxuXHJcbmRlY2xhcmUgdmFyIGFuZHJvaWQ6IGFueTtcclxuXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJ0cmFja3NcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3RyYWNrcy5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgcHJvdmlkZXJzOiBbIFNvbmdTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVHJhY2tzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ2JnJykgZ3JpZGxheW91dDogRWxlbWVudFJlZjtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIHBhZ2U6IFBhZ2VcclxuICAgICAgICAsIHByaXZhdGUgc29uZ1NlcnZpY2U6IFNvbmdTZXJ2aWNlIFxyXG4gICAgICAgICkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc29uZ1NlcnZpY2UuZmV0Y2goKTtcclxuXHJcbiAgICB9XHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB9XHJcblxyXG4gICAgZ29CYWNrKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyLmJhY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBcclxufVxyXG4iXX0=