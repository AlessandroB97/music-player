"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page");
var router_1 = require("nativescript-angular/router");
var ArtistComponent = /** @class */ (function () {
    function ArtistComponent(_page, router) {
        this._page = _page;
        this.router = router;
        this.headerHeight = 200;
        this.stretchyHeight = this.headerHeight;
        this._page.actionBarHidden = true;
    }
    ArtistComponent.prototype.ngOnInit = function () {
        // let navigationBar = topmost().ios.controller.navigationBar;
        // navigationBar.barStyle = UIBarStyle.UIBarStyleBlack;
    };
    ArtistComponent.prototype.goBack = function () {
        this.router.back();
    };
    ArtistComponent.prototype.goToPlayer = function () {
        this.router.navigate(["player"]);
    };
    ArtistComponent.prototype.onScroll = function (event, scrollView, topView) {
        var parallaxSpeed = 0.33;
        var offset = scrollView.verticalOffset * parallaxSpeed * -1;
        if (scrollView.ios) {
            if (scrollView.verticalOffset < 0) {
                topView.translateY = Math.floor(0);
                this.stretchyHeight = this.headerHeight - scrollView.verticalOffset;
            }
            else {
                this.stretchyHeight = this.headerHeight;
                topView.translateY = Math.floor(offset);
            }
        }
        if (scrollView.android) {
            if (scrollView.verticalOffset < 0) {
                topView.translateY = Math.floor(0);
            }
            else {
                topView.translateY = Math.floor(offset);
            }
        }
    };
    ArtistComponent = __decorate([
        core_1.Component({
            selector: "Artist",
            moduleId: module.id,
            templateUrl: "./artist.component.html"
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.RouterExtensions])
    ], ArtistComponent);
    return ArtistComponent;
}());
exports.ArtistComponent = ArtistComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJ0aXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFydGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFLekUsaURBQWdEO0FBSWhELHNEQUErRDtBQU8vRDtJQUtJLHlCQUFvQixLQUFXLEVBQVUsTUFBd0I7UUFBN0MsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBSDFELGlCQUFZLEdBQUcsR0FBRyxDQUFDO1FBQ25CLG1CQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUd0QyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDdEMsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDSSw4REFBOEQ7UUFDOUQsdURBQXVEO0lBQzNELENBQUM7SUFFRCxnQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBQ0Qsb0NBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsa0NBQVEsR0FBUixVQUFTLEtBQXNCLEVBQUUsVUFBc0IsRUFBRSxPQUFhO1FBQ2xFLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsY0FBYyxHQUFHLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDaEIsSUFBSSxVQUFVLENBQUMsY0FBYyxHQUFHLENBQUMsRUFBRTtnQkFDL0IsT0FBTyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDLGNBQWMsQ0FBQzthQUN2RTtpQkFBTTtnQkFDSCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ3hDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUMzQztTQUNKO1FBRUQsSUFBSSxVQUFVLENBQUMsT0FBTyxFQUFFO1lBQ3BCLElBQUksVUFBVSxDQUFDLGNBQWMsR0FBRyxDQUFDLEVBQUU7Z0JBQy9CLE9BQU8sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN0QztpQkFBTTtnQkFDSCxPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDM0M7U0FDSjtJQUVMLENBQUM7SUExQ1EsZUFBZTtRQUwzQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx5QkFBeUI7U0FDekMsQ0FBQzt5Q0FNNkIsV0FBSSxFQUFrQix5QkFBZ0I7T0FMeEQsZUFBZSxDQTJDM0I7SUFBRCxzQkFBQztDQUFBLEFBM0NELElBMkNDO0FBM0NZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFNjcm9sbFZpZXcsIFNjcm9sbEV2ZW50RGF0YSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvc2Nyb2xsLXZpZXcnO1xyXG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvaW1hZ2UnO1xyXG5pbXBvcnQgeyBzY3JlZW4gfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3JztcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcclxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiO1xyXG5pbXBvcnQgeyBpc0lPUyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJBcnRpc3RcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FydGlzdC5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcnRpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHB1YmxpYyBoZWFkZXJIZWlnaHQgPSAyMDA7XHJcbiAgICBwdWJsaWMgc3RyZXRjaHlIZWlnaHQgPSB0aGlzLmhlYWRlckhlaWdodDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucykge1xyXG4gICAgICAgIHRoaXMuX3BhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBsZXQgbmF2aWdhdGlvbkJhciA9IHRvcG1vc3QoKS5pb3MuY29udHJvbGxlci5uYXZpZ2F0aW9uQmFyO1xyXG4gICAgICAgIC8vIG5hdmlnYXRpb25CYXIuYmFyU3R5bGUgPSBVSUJhclN0eWxlLlVJQmFyU3R5bGVCbGFjaztcclxuICAgIH1cclxuXHJcbiAgICBnb0JhY2soKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIuYmFjaygpO1xyXG4gICAgfVxyXG4gICAgZ29Ub1BsYXllcigpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJwbGF5ZXJcIl0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2Nyb2xsKGV2ZW50OiBTY3JvbGxFdmVudERhdGEsIHNjcm9sbFZpZXc6IFNjcm9sbFZpZXcsIHRvcFZpZXc6IFZpZXcpIHtcclxuICAgICAgICBsZXQgcGFyYWxsYXhTcGVlZCA9IDAuMzM7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gc2Nyb2xsVmlldy52ZXJ0aWNhbE9mZnNldCAqIHBhcmFsbGF4U3BlZWQgKiAtMTtcclxuICAgICAgICBpZiAoc2Nyb2xsVmlldy5pb3MpIHtcclxuICAgICAgICAgICAgaWYgKHNjcm9sbFZpZXcudmVydGljYWxPZmZzZXQgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICB0b3BWaWV3LnRyYW5zbGF0ZVkgPSBNYXRoLmZsb29yKDApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdHJldGNoeUhlaWdodCA9IHRoaXMuaGVhZGVySGVpZ2h0IC0gc2Nyb2xsVmlldy52ZXJ0aWNhbE9mZnNldDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RyZXRjaHlIZWlnaHQgPSB0aGlzLmhlYWRlckhlaWdodDtcclxuICAgICAgICAgICAgICAgIHRvcFZpZXcudHJhbnNsYXRlWSA9IE1hdGguZmxvb3Iob2Zmc2V0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNjcm9sbFZpZXcuYW5kcm9pZCkge1xyXG4gICAgICAgICAgICBpZiAoc2Nyb2xsVmlldy52ZXJ0aWNhbE9mZnNldCA8IDApIHtcclxuICAgICAgICAgICAgICAgIHRvcFZpZXcudHJhbnNsYXRlWSA9IE1hdGguZmxvb3IoMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0b3BWaWV3LnRyYW5zbGF0ZVkgPSBNYXRoLmZsb29yKG9mZnNldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==