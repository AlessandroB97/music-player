"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var page_1 = require("tns-core-modules/ui/page");
var platform_1 = require("tns-core-modules/platform");
var song_service_1 = require("../services/song.service");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, page, songService) {
        this.router = router;
        this.page = page;
        this.songService = songService;
        this.viewHeigth = 0;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.viewHeigth = platform_1.screen.mainScreen.heightDIPs * 0.6;
        // this.songService.initDb();
        // this.songService.songs.forEach((song: Song) => {
        //     console.log(song.Title +" - "+song.Artist);
        // });
    };
    HomeComponent.prototype.goTo = function (component) {
        this.router.navigate([component]);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            providers: [song_service_1.SongService]
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, page_1.Page,
            song_service_1.SongService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFDL0QsaURBQWdEO0FBQ2hELHNEQUFtRDtBQUNuRCx5REFBdUQ7QUFZdkQ7SUFHSSx1QkFBb0IsTUFBd0IsRUFBVSxJQUFVLEVBQ2xELFdBQXdCO1FBRGxCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNsRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUgvQixlQUFVLEdBQVcsQ0FBQyxDQUFDO0lBSzlCLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsaUJBQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUNyRCw2QkFBNkI7UUFFN0IsbURBQW1EO1FBQ25ELGtEQUFrRDtRQUVsRCxNQUFNO0lBQ1YsQ0FBQztJQUVELDRCQUFJLEdBQUosVUFBSyxTQUFpQjtRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQXJCUSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO1NBQzNCLENBQUM7eUNBSThCLHlCQUFnQixFQUFnQixXQUFJO1lBQ3JDLDBCQUFXO09BSjdCLGFBQWEsQ0F1QnpCO0lBQUQsb0JBQUM7Q0FBQSxBQXZCRCxJQXVCQztBQXZCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlZ21lbnRlZEJhciwgU2VnbWVudGVkQmFySXRlbSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3NlZ21lbnRlZC1iYXJcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcbmltcG9ydCB7IHNjcmVlbiB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5pbXBvcnQgeyBTb25nU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zb25nLnNlcnZpY2VcIjtcbmltcG9ydCB7IFNvbmcgfSBmcm9tIFwiLi4vbW9kZWxzL3NvbmdcIjtcbmRlY2xhcmUgdmFyIGFuZHJvaWQ6IGFueTtcblxuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxuICAgIHByb3ZpZGVyczogW1NvbmdTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgdmlld0hlaWd0aDogbnVtYmVyID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIHBhZ2U6IFBhZ2VcbiAgICAgICAgLCBwcml2YXRlIHNvbmdTZXJ2aWNlOiBTb25nU2VydmljZVxuICAgICAgICApIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgICAgIHRoaXMudmlld0hlaWd0aCA9IHNjcmVlbi5tYWluU2NyZWVuLmhlaWdodERJUHMgKiAwLjY7XG4gICAgICAgIC8vIHRoaXMuc29uZ1NlcnZpY2UuaW5pdERiKCk7XG5cbiAgICAgICAgLy8gdGhpcy5zb25nU2VydmljZS5zb25ncy5mb3JFYWNoKChzb25nOiBTb25nKSA9PiB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhzb25nLlRpdGxlICtcIiAtIFwiK3NvbmcuQXJ0aXN0KTtcbiAgICAgICAgICAgIFxuICAgICAgICAvLyB9KTtcbiAgICB9XG5cbiAgICBnb1RvKGNvbXBvbmVudDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtjb21wb25lbnRdKTtcbiAgICB9XG5cbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iXX0=