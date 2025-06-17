"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var page_1 = require("tns-core-modules/ui/page");
var nativescript_audio_player_1 = require("nativescript-audio-player");
var platform_1 = require("tns-core-modules/platform");
var util = require("util");
var file_system_1 = require("tns-core-modules/file-system");
var fileSystemModule = require("tns-core-modules/file-system");
var mm = require("music-metadata/lib/core");
var PlayerComponent = /** @class */ (function () {
    function PlayerComponent(zone, router, page) {
        var _this = this;
        this.zone = zone;
        this.router = router;
        this.page = page;
        this.player = new nativescript_audio_player_1.TNSPlayer();
        // this.player.debug = true;
        var songFolder;
        if (platform_1.isAndroid) {
            var androidPath = android.os.Environment.getExternalStorageDirectory().getAbsolutePath();
            songFolder = file_system_1.Folder.fromPath(fileSystemModule.path.join(androidPath, "Music/Jesto/Justin/")); //Folder.fromPath("sdcard/Music/Jesto/Justin/");
        }
        if (platform_1.isIOS) {
            songFolder = file_system_1.knownFolders.ios.music();
        }
        // var array: any[] = [];
        // songFolder.getEntities()
        //     .then((entities) => {
        //         // entities is array with the document's files and folders.
        //         entities.forEach((entity) => {
        //             array.push(
        //                 {
        //                     name: entity.name,
        //                     path: entity.path,
        //                     lastModified: entity.lastModified.toString(),
        //                     mp3: entity.path.endsWith("mp3")
        //                 }
        //             );
        //             console.log("-----------------");
        //             console.log("name: "+ entity.name);
        //             console.log("path: "+ entity.path);
        //             console.log("mp3? "+ entity.path.endsWith("mp3"));
        //         });
        //     }).catch((err) => {
        //     // Failed to obtain folder's contents.
        //         console.log(err.stack);
        // });
        this.file = songFolder.getFile("01. Puttantour.mp3");
        var exists = fileSystemModule.File.exists(this.file.path);
        console.log("Does song exists: ", exists);
        // console.log(this.file.readSync());
        var buffer = require('buffer').Buffer.from(this.file.readSync());
        mm.parseBuffer(buffer, "audio/mpeg", { duration: true, fileSize: this.file.size }).then(function (metadata) {
            _this.tags = {
                title: metadata.common.title,
                artist: metadata.common.artist,
                album: metadata.common.album,
                track: metadata.common.track,
                image: "data:image/jpeg;base64," + metadata.common.picture[0].data.toString('base64'),
                year: metadata.common.year
            };
            console.log(util.inspect(metadata, { showHidden: false, depth: null }));
        });
        this.image = "";
        if (this.tags.image)
            this.image = "data:image/jpeg;base64," + this.tags.image.data.toString('base64');
        // console.log(this.image);
        var playerOptions = {
            audioFile: this.file.path,
            loop: false,
            autoplay: false,
            completeCallback: this._trackComplete.bind(this),
            errorCallback: this._trackError.bind(this)
        };
        this.player
            .playFromFile(playerOptions)
            .then(function (res) {
            console.log(res);
            _this.player.getAudioTrackDuration().then(function (duration) {
                _this.duration = duration;
                // iOS: duration is in seconds
                // Android: duration is in milliseconds
                console.log("song duration:", duration);
            });
        })
            .catch(function (err) {
            console.log("something went wrong...", err);
        });
    }
    PlayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.page.actionBarHidden = true;
        this._checkInterval = setInterval(function () {
            _this.player.getAudioTrackDuration().then(function (duration) {
                // iOS: duration is in seconds
                // Android: duration is in milliseconds
                var progress = _this.player.currentTime;
                if (platform_1.isIOS) {
                    duration *= 1000;
                    progress *= 1000;
                }
                _this.currentTime = progress;
            });
        }, 1);
        console.log(this.file.path);
    };
    PlayerComponent.prototype.ngAfterViewInit = function () {
    };
    PlayerComponent.prototype.ngOnDestroy = function () {
        clearInterval(this._checkInterval);
    };
    PlayerComponent.prototype._trackComplete = function (args) {
        console.log('reference back to player:', args.player);
        // iOS only: flag indicating if completed succesfully
        console.log('whether song play completed successfully:', args.flag);
    };
    PlayerComponent.prototype._trackError = function (args) {
        console.log('reference back to player:', args.player);
        console.log('the error:', args.error);
        // Android only: extra detail on error
        console.log('extra info on the error:', args.extra);
    };
    PlayerComponent.prototype.millisToMinutesAndSeconds = function (millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = Math.floor((millis % 60000) / 1000);
        return (seconds == 60 ? (minutes + 1) + ":00" : minutes + ":" + (seconds < 10 ? "0" : "") + seconds);
    };
    PlayerComponent.prototype.goBack = function () {
        this.router.back();
    };
    PlayerComponent.prototype.playPause = function () {
        if (this.player.isAudioPlaying()) {
            this.player.pause();
        }
        else {
            this.player.play();
        }
    };
    PlayerComponent.prototype.onCurrentTimeChanged = function (args) {
        var slider = args.object;
        if (!isNaN(slider.value)) {
            this.seek(Math.floor(slider.value));
        }
    };
    PlayerComponent.prototype.seek = function (moment) {
        this.player.seekTo(moment);
    };
    PlayerComponent.prototype.isSliderValueChanged = function (val) {
        return Math.round(val) !== Math.round(this.currentTime);
    };
    __decorate([
        core_1.ViewChild('bg'),
        __metadata("design:type", core_1.ElementRef)
    ], PlayerComponent.prototype, "gridlayout", void 0);
    PlayerComponent = __decorate([
        core_1.Component({
            selector: "player",
            moduleId: module.id,
            templateUrl: "./player.component.html"
        }),
        __metadata("design:paramtypes", [core_1.NgZone, router_1.RouterExtensions, page_1.Page])
    ], PlayerComponent);
    return PlayerComponent;
}());
exports.PlayerComponent = PlayerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBsYXllci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkc7QUFDM0csc0RBQStEO0FBQy9ELGlEQUFnRDtBQUNoRCx1RUFBc0Q7QUFDdEQsc0RBQTZEO0FBRTdELDJCQUE2QjtBQUM3Qiw0REFBZ0Y7QUFHaEYsK0RBQWlFO0FBQ2pFLDRDQUE4QztBQWE5QztJQWNJLHlCQUFvQixJQUFZLEVBQVUsTUFBd0IsRUFBVSxJQUFVO1FBQXRGLGlCQWtGQztRQWxGbUIsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUdsRixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUkscUNBQVMsRUFBRSxDQUFDO1FBQzlCLDRCQUE0QjtRQUM1QixJQUFJLFVBQWtCLENBQUM7UUFDdkIsSUFBRyxvQkFBUyxFQUFDO1lBQ1QsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsMkJBQTJCLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN6RixVQUFVLEdBQUcsb0JBQU0sQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUEsZ0RBQWdEO1NBQ2hKO1FBQ0QsSUFBRyxnQkFBSyxFQUFDO1lBQ0wsVUFBVSxHQUFHLDBCQUFZLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3pDO1FBQ0QseUJBQXlCO1FBQ3pCLDJCQUEyQjtRQUMzQiw0QkFBNEI7UUFDNUIsc0VBQXNFO1FBQ3RFLHlDQUF5QztRQUN6QywwQkFBMEI7UUFDMUIsb0JBQW9CO1FBQ3BCLHlDQUF5QztRQUN6Qyx5Q0FBeUM7UUFDekMsb0VBQW9FO1FBQ3BFLHVEQUF1RDtRQUN2RCxv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SUFBTSxNQUFNLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDckM7SUFDTCxDQUFDO0lBRUQsOEJBQUksR0FBSixVQUFLLE1BQWM7UUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsOENBQW9CLEdBQXBCLFVBQXFCLEdBQVc7UUFDNUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFsS2dCO1FBQWhCLGdCQUFTLENBQUMsSUFBSSxDQUFDO2tDQUFhLGlCQUFVO3VEQUFDO0lBWi9CLGVBQWU7UUFMM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUseUJBQXlCO1NBQ3pDLENBQUM7eUNBZTRCLGFBQU0sRUFBa0IseUJBQWdCLEVBQWdCLFdBQUk7T0FkN0UsZUFBZSxDQWdMM0I7SUFBRCxzQkFBQztDQUFBLEFBaExELElBZ0xDO0FBaExZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBOZ1pvbmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZSc7XHJcbmltcG9ydCB7IFROU1BsYXllciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hdWRpby1wbGF5ZXInO1xyXG5pbXBvcnQgeyBpc0lPUywgaXNBbmRyb2lkIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcclxuaW1wb3J0IHsgU2xpZGVyIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvc2xpZGVyXCI7XHJcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAndXRpbCc7XHJcbmltcG9ydCB7IGtub3duRm9sZGVycywgRm9sZGVyLCBGaWxlLCBwYXRoIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIjtcclxuXHJcblxyXG5pbXBvcnQgKiBhcyBmaWxlU3lzdGVtTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCI7XHJcbmltcG9ydCAqIGFzIG1tIGZyb20gJ211c2ljLW1ldGFkYXRhL2xpYi9jb3JlJztcclxuXHJcblxyXG5cclxuZGVjbGFyZSB2YXIgYW5kcm9pZDogYW55O1xyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcInBsYXllclwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcGxheWVyLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFBsYXllckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIHBsYXllcjogVE5TUGxheWVyO1xyXG4gICAgX2NoZWNrSW50ZXJ2YWw6IGFueTtcclxuICAgIGN1cnJlbnRUaW1lIDogYW55O1xyXG4gICAgZHVyYXRpb246IGFueTtcclxuICAgIGZpbGU6IEZpbGU7XHJcblxyXG4gICAgdGFnczogYW55O1xyXG5cclxuICAgIGltYWdlIDphbnk7XHJcblxyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ2JnJykgZ3JpZGxheW91dDogRWxlbWVudFJlZjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHpvbmU6IE5nWm9uZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcGFnZTogUGFnZSkge1xyXG5cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBUTlNQbGF5ZXIoKTtcclxuICAgICAgICAvLyB0aGlzLnBsYXllci5kZWJ1ZyA9IHRydWU7XHJcbiAgICAgICAgbGV0IHNvbmdGb2xkZXI6IEZvbGRlcjtcclxuICAgICAgICBpZihpc0FuZHJvaWQpe1xyXG4gICAgICAgICAgICB2YXIgYW5kcm9pZFBhdGggPSBhbmRyb2lkLm9zLkVudmlyb25tZW50LmdldEV4dGVybmFsU3RvcmFnZURpcmVjdG9yeSgpLmdldEFic29sdXRlUGF0aCgpO1xyXG4gICAgICAgICAgICBzb25nRm9sZGVyID0gRm9sZGVyLmZyb21QYXRoKGZpbGVTeXN0ZW1Nb2R1bGUucGF0aC5qb2luKGFuZHJvaWRQYXRoLCBcIk11c2ljL0plc3RvL0p1c3Rpbi9cIikpOy8vRm9sZGVyLmZyb21QYXRoKFwic2RjYXJkL011c2ljL0plc3RvL0p1c3Rpbi9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGlzSU9TKXtcclxuICAgICAgICAgICAgc29uZ0ZvbGRlciA9IGtub3duRm9sZGVycy5pb3MubXVzaWMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdmFyIGFycmF5OiBhbnlbXSA9IFtdO1xyXG4gICAgICAgIC8vIHNvbmdGb2xkZXIuZ2V0RW50aXRpZXMoKVxyXG4gICAgICAgIC8vICAgICAudGhlbigoZW50aXRpZXMpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIC8vIGVudGl0aWVzIGlzIGFycmF5IHdpdGggdGhlIGRvY3VtZW50J3MgZmlsZXMgYW5kIGZvbGRlcnMuXHJcbiAgICAgICAgLy8gICAgICAgICBlbnRpdGllcy5mb3JFYWNoKChlbnRpdHkpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBhcnJheS5wdXNoKFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBuYW1lOiBlbnRpdHkubmFtZSxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHBhdGg6IGVudGl0eS5wYXRoLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgbGFzdE1vZGlmaWVkOiBlbnRpdHkubGFzdE1vZGlmaWVkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBtcDM6IGVudGl0eS5wYXRoLmVuZHNXaXRoKFwibXAzXCIpXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgICAgICApO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS1cIik7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coXCJuYW1lOiBcIisgZW50aXR5Lm5hbWUpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicGF0aDogXCIrIGVudGl0eS5wYXRoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1wMz8gXCIrIGVudGl0eS5wYXRoLmVuZHNXaXRoKFwibXAzXCIpKTtcclxuICAgICAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgICAgIC8vICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIC8vIEZhaWxlZCB0byBvYnRhaW4gZm9sZGVyJ3MgY29udGVudHMuXHJcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhlcnIuc3RhY2spO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIHRoaXMuZmlsZSA9IHNvbmdGb2xkZXIuZ2V0RmlsZShcIjAxLiBQdXR0YW50b3VyLm1wM1wiKTtcclxuXHJcbiAgICAgICAgY29uc3QgZXhpc3RzID0gZmlsZVN5c3RlbU1vZHVsZS5GaWxlLmV4aXN0cyh0aGlzLmZpbGUucGF0aCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJEb2VzIHNvbmcgZXhpc3RzOiBcIiwgZXhpc3RzKTsgXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5maWxlLnJlYWRTeW5jKCkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBidWZmZXIgPSByZXF1aXJlKCdidWZmZXInKS5CdWZmZXIuZnJvbSh0aGlzLmZpbGUucmVhZFN5bmMoKSk7XHJcbiAgICAgICAgbW0ucGFyc2VCdWZmZXIoYnVmZmVyLCBcImF1ZGlvL21wZWdcIiwgeyBkdXJhdGlvbjogdHJ1ZSwgZmlsZVNpemU6IHRoaXMuZmlsZS5zaXplfSkudGhlbiggbWV0YWRhdGEgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRhZ3MgPSB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWV0YWRhdGEuY29tbW9uLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgYXJ0aXN0OiBtZXRhZGF0YS5jb21tb24uYXJ0aXN0LFxyXG4gICAgICAgICAgICAgICAgYWxidW06IG1ldGFkYXRhLmNvbW1vbi5hbGJ1bSxcclxuICAgICAgICAgICAgICAgIHRyYWNrOiBtZXRhZGF0YS5jb21tb24udHJhY2ssXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogXCJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LFwiICsgbWV0YWRhdGEuY29tbW9uLnBpY3R1cmVbMF0uZGF0YS50b1N0cmluZygnYmFzZTY0JyksXHJcbiAgICAgICAgICAgICAgICB5ZWFyOiBtZXRhZGF0YS5jb21tb24ueWVhclxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2codXRpbC5pbnNwZWN0KG1ldGFkYXRhLCB7IHNob3dIaWRkZW46IGZhbHNlLCBkZXB0aDogbnVsbCB9KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IFwiXCI7XHJcbiAgICAgICAgaWYodGhpcy50YWdzLmltYWdlKVxyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBcImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsXCIgKyB0aGlzLnRhZ3MuaW1hZ2UuZGF0YS50b1N0cmluZygnYmFzZTY0Jyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5pbWFnZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgcGxheWVyT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgYXVkaW9GaWxlOiB0aGlzLmZpbGUucGF0aCwgLy9UT0RPOiBkYSBjYW1iaWFyZSBjb24gbGEgZGlyZWN0b3J5IGRlbCBmaWxlIHNlbGV6aW9uYXRvXHJcbiAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlQ2FsbGJhY2s6IHRoaXMuX3RyYWNrQ29tcGxldGUuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgZXJyb3JDYWxsYmFjazogdGhpcy5fdHJhY2tFcnJvci5iaW5kKHRoaXMpXHJcbiAgICAgICAgfTtcclxuICAgIFxyXG4gICAgICAgIHRoaXMucGxheWVyXHJcbiAgICAgICAgICAgIC5wbGF5RnJvbUZpbGUocGxheWVyT3B0aW9ucylcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmdldEF1ZGlvVHJhY2tEdXJhdGlvbigpLnRoZW4oZHVyYXRpb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpT1M6IGR1cmF0aW9uIGlzIGluIHNlY29uZHNcclxuICAgICAgICAgICAgICAgICAgICAvLyBBbmRyb2lkOiBkdXJhdGlvbiBpcyBpbiBtaWxsaXNlY29uZHNcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgc29uZyBkdXJhdGlvbjpgLCBkdXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzb21ldGhpbmcgd2VudCB3cm9uZy4uLlwiLCBlcnIpO1xyXG4gICAgICAgIH0pOyAgICAgICAgXHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLl9jaGVja0ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5nZXRBdWRpb1RyYWNrRHVyYXRpb24oKS50aGVuKChkdXJhdGlvbjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBpT1M6IGR1cmF0aW9uIGlzIGluIHNlY29uZHNcclxuICAgICAgICAgICAgICAgIC8vIEFuZHJvaWQ6IGR1cmF0aW9uIGlzIGluIG1pbGxpc2Vjb25kc1xyXG4gICAgICAgICAgICAgICAgbGV0IHByb2dyZXNzID0gdGhpcy5wbGF5ZXIuY3VycmVudFRpbWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNJT1MpIHtcclxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbiAqPSAxMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3MgKj0gMTAwMFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSBwcm9ncmVzcztcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIDEpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZS5wYXRoKTtcclxuXHJcblxyXG5cclxuICAgIH1cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICBcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuX2NoZWNrSW50ZXJ2YWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3RyYWNrQ29tcGxldGUoYXJnczogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3JlZmVyZW5jZSBiYWNrIHRvIHBsYXllcjonLCBhcmdzLnBsYXllcik7XHJcbiAgICAgICAgLy8gaU9TIG9ubHk6IGZsYWcgaW5kaWNhdGluZyBpZiBjb21wbGV0ZWQgc3VjY2VzZnVsbHlcclxuICAgICAgICBjb25zb2xlLmxvZygnd2hldGhlciBzb25nIHBsYXkgY29tcGxldGVkIHN1Y2Nlc3NmdWxseTonLCBhcmdzLmZsYWcpO1xyXG4gICAgfVxyXG4gICAgIFxyXG4gICAgcHJpdmF0ZSBfdHJhY2tFcnJvcihhcmdzOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygncmVmZXJlbmNlIGJhY2sgdG8gcGxheWVyOicsIGFyZ3MucGxheWVyKTtcclxuICAgICAgICBjb25zb2xlLmxvZygndGhlIGVycm9yOicsIGFyZ3MuZXJyb3IpO1xyXG4gICAgICAgIC8vIEFuZHJvaWQgb25seTogZXh0cmEgZGV0YWlsIG9uIGVycm9yXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2V4dHJhIGluZm8gb24gdGhlIGVycm9yOicsIGFyZ3MuZXh0cmEpO1xyXG4gICAgfSBcclxuXHJcbiAgICBtaWxsaXNUb01pbnV0ZXNBbmRTZWNvbmRzKG1pbGxpczogbnVtYmVyKSB7XHJcbiAgICAgICAgdmFyIG1pbnV0ZXMgPSBNYXRoLmZsb29yKG1pbGxpcyAvIDYwMDAwKTtcclxuICAgICAgICB2YXIgc2Vjb25kcyA9IE1hdGguZmxvb3IoKG1pbGxpcyAlIDYwMDAwKSAvIDEwMDApO1xyXG4gICAgICAgIHJldHVybiAoc2Vjb25kcyA9PSA2MCA/IChtaW51dGVzKzEpICsgXCI6MDBcIiA6IG1pbnV0ZXMgKyBcIjpcIiArIChzZWNvbmRzIDwgMTAgPyBcIjBcIiA6IFwiXCIpICsgc2Vjb25kcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ29CYWNrKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyLmJhY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5UGF1c2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyLmlzQXVkaW9QbGF5aW5nKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIucGF1c2UoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBvbkN1cnJlbnRUaW1lQ2hhbmdlZChhcmdzOiB7IG9iamVjdDogU2xpZGVyOyB9KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgc2xpZGVyID0gPFNsaWRlcj5hcmdzLm9iamVjdDtcclxuICAgICAgICBpZiAoIWlzTmFOKHNsaWRlci52YWx1ZSkpIHtcclxuICAgICAgICAgIHRoaXMuc2VlayhNYXRoLmZsb29yKHNsaWRlci52YWx1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICAgXHJcbiAgICBzZWVrKG1vbWVudDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuc2Vla1RvKG1vbWVudCk7XHJcbiAgICB9XHJcbiAgICAgIFxyXG4gICAgaXNTbGlkZXJWYWx1ZUNoYW5nZWQodmFsOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh2YWwpICE9PSBNYXRoLnJvdW5kKHRoaXMuY3VycmVudFRpbWUpO1xyXG4gICAgfSAgIFxyXG4gICAgXHJcbn1cclxuIl19