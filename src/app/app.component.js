"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Sqlite = require("nativescript-sqlite");
var song_service_1 = require("./services/song.service");
var permissions = require("nativescript-permissions");
var AppComponent = /** @class */ (function () {
    function AppComponent(songService) {
        this.songService = songService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getPermissions();
        this.songService.initDb();
        // (new Sqlite("songs.db")).then(db => {
        //     db.execSQL("CREATE TABLE IF NOT EXISTS songs (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, artist TEXT, image TEXT, album TEXT, genre TEXT, track TEXT, year TEXT, path TEXT)").then(id => {
        //         this.database = db;
        //         this.fetch();
        //         // this.songs =this.checkSongs(songFolder);
        //         this.songs.forEach(song => {
        //             console.log(song.name);
        //         });
        //     }, error => {
        //         console.log("CREATE TABLE ERROR", error);
        //     });
        // }, error => {
        //     console.log("OPEN DB ERROR", error);
        // });
        // let songFolder: Folder;
        // if(isAndroid){
        //     var androidPath = android.os.Environment.getExternalStorageDirectory().getAbsolutePath();
        //     songFolder = Folder.fromPath(fileSystemModule.path.join(androidPath, "Music/"));//Folder.fromPath("sdcard/Music/Jesto/Justin/");
        // }
        // if(isIOS){
        //     songFolder = knownFolders.ios.music();
        // }
    };
    // private checkSongs(songFolder: Folder) {
    //     var array: any[] = [];
    //     songFolder.getEntities()
    //         .then((entities) => {
    //             // entities is array with the document's files and folders.
    //             entities.forEach((entity) => {
    //                     if(fileSystemModule.Folder.exists(entity.path)){
    //                         array = array.concat(this.checkSongs(fileSystemModule.Folder.fromPath(entity.path)));
    //                     } else if(!entity.path.endsWith("db")){
    //                         var tags: any;
    //                         var extension =entity.path.slice((entity.path.lastIndexOf(".") - 1 >>> 0) + 2);
    //                         console.log("-----------------");
    //                         console.log("path: "+ entity.path);
    //                         console.log("ESTENSIONE: "+extension);
    //                         switch (extension) {
    //                             case "mp2":
    //                             case "mp3":
    //                             case "m2a":
    //                                 console.log("AGGIUNTO COME mpeg");
    //                                 this.insertSong(entity, "mpeg");
    //                                 break;
    //                             case "ape":
    //                             console.log("AGGIUNTO COME ape");
    //                                 this.insertSong(entity, "apev2");
    //                                 break;
    //                             case "aac":
    //                             case "mp4":
    //                             case "m4a":
    //                             case "m4b":
    //                             case "m4pa":
    //                             case "m4v":
    //                             case "m4r":
    //                             case "3gp":
    //                                 console.log("AGGIUNTO COME mp4");
    //                                 this.insertSong(entity, "mp4");
    //                                 break;
    //                             case "wma":
    //                             case "wmv":
    //                             case "asf":
    //                                 console.log("AGGIUNTO COME asf");
    //                                 this.insertSong(entity, "asf");
    //                                 break;
    //                             case "flac":
    //                                 console.log("AGGIUNTO COME flac");
    //                                 this.insertSong(entity, "flac");
    //                                 break;
    //                             case "ogg":
    //                             case "ogv":
    //                             case "oga":
    //                             case "ogm":
    //                             case "ogx":
    //                             case "opus": // recommended filename extension for Ogg Opus
    //                             case "spx": // recommended filename extension for Ogg Speex
    //                                 console.log("AGGIUNTO COME ogg");
    //                                 this.insertSong(entity, "ogg");
    //                                 break;
    //                             case "aif":
    //                             case "aiff":
    //                             case "aifc":
    //                                 console.log("AGGIUNTO COME aiff");
    //                                 this.insertSong(entity, "aiff");
    //                                 break;
    //                             case "wav":
    //                                 console.log("AGGIUNTO COME riff");
    //                                 this.insertSong(entity, "riff");
    //                                 break;
    //                             case "wv":
    //                             case "wvp":
    //                                 console.log("AGGIUNTO COME wavpack");
    //                                 this.insertSong(entity, "wavpack");
    //                                 break;
    //                             case "mpc":
    //                                 console.log("AGGIUNTO COME musepack");
    //                                 this.insertSong(entity, "musepack");
    //                                 break;
    //                         }
    //                     }
    //             });
    //         }).catch((err) => {
    //             console.log(err.stack);
    //     });
    //     return array;
    // }
    // public fetch() {
    //     this.database.all("SELECT * FROM songs").then(rows => {
    //         this.songs = [];
    //         for(var row in rows) {
    //             this.songs.push({
    //                 "id": rows[row][0],
    //                 "title": rows[row][1],
    //                 "artist": rows[row][2],
    //                 "image": rows[row][3],
    //                 "album": rows[row][4],
    //                 "genre": rows[row][5],
    //                 "track": rows[row][6],
    //                 "year": rows[row][7],
    //                 "path": rows[row][8]
    //             });
    //         }
    //     }, error => {
    //         console.log("SELECT ERROR", error);
    //     });
    // }
    // public insert(title: string, artist: string, image: string, album: string, genre: string, track: string, year: string, path: string) {
    //     this.database.execSQL("INSERT INTO songs (title, artist, image, album, genre, track, year, path) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [title, artist, image, album, genre, track, year, path]).then(id => {
    //         console.log("INSERT RESULT", id);
    //         this.fetch();
    //     }, error => {
    //         console.log("INSERT ERROR", error);
    //     });
    // }
    // public insertSong(entity :fileSystemModule.FileSystemEntity, format: string ) {
    //         var file = fileSystemModule.File.fromPath(entity.path);
    //         console.log("BUFFERING ");
    //         let buffer = require('buffer').Buffer.from(entity.path);
    //         mm.parseBuffer(buffer, "audio/mpeg", { duration: true, fileSize: file.size}).then( metadata => {
    //             console.log("INSERIMENTO: "+ format);
    //             this.insert( 
    //                     metadata.common.title? metadata.common.title: "",
    //                     metadata.common.artist? metadata.common.artist: "",
    //                     metadata.common.picture? "data:image/jpeg;base64," + metadata.common.picture[0].data.toString('base64'): "",
    //                     metadata.common.album? metadata.common.album :"",
    //                     metadata.common.genre? metadata.common.genre[0] : "",
    //                     metadata.common.track.no? metadata.common.track.no.toString(): "",
    //                     metadata.common.year? metadata.common.year.toString() : "",
    //                     entity.path
    //                 );
    //         });
    //     console.log("INSERIMENTO COMPLETATO!")
    // }
    AppComponent.prototype.getPermissions = function () {
        if (!permissions.hasPermission(android.Manifest.permission.READ_EXTERNAL_STORAGE)) {
            console.log("Asking for permissions...");
            permissions.requestPermissions([
                android.Manifest.permission.READ_EXTERNAL_STORAGE,
                android.Manifest.permission.WRITE_EXTERNAL_STORAGE
            ])
                .then(function () {
                console.log("Permissions granted...");
            })
                .catch(function () {
                console.log("Permissions denied...");
            });
        }
        else {
            console.log("App has necessary permissions...");
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            moduleId: module.id,
            templateUrl: "app.component.html",
            styleUrls: ["./app.component.scss"],
            providers: [song_service_1.SongService]
        }),
        __metadata("design:paramtypes", [song_service_1.SongService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFFNUMsd0RBQXNEO0FBRXRELHNEQUF3RDtBQWN4RDtJQUlJLHNCQUNZLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQzdCLENBQUM7SUFFUiwrQkFBUSxHQUFSO1FBRUksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXRCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDMUIsd0NBQXdDO1FBQ3hDLHdNQUF3TTtRQUN4TSw4QkFBOEI7UUFDOUIsd0JBQXdCO1FBQ3hCLHNEQUFzRDtRQUN0RCx1Q0FBdUM7UUFDdkMsc0NBQXNDO1FBQ3RDLGNBQWM7UUFDZCxvQkFBb0I7UUFDcEIsb0RBQW9EO1FBQ3BELFVBQVU7UUFDVixnQkFBZ0I7UUFDaEIsMkNBQTJDO1FBQzNDLE1BQU07UUFDTiwwQkFBMEI7UUFDMUIsaUJBQWlCO1FBQ2pCLGdHQUFnRztRQUNoRyx1SUFBdUk7UUFDdkksSUFBSTtRQUNKLGFBQWE7UUFDYiw2Q0FBNkM7UUFDN0MsSUFBSTtJQUdSLENBQUM7SUFJRCwyQ0FBMkM7SUFDM0MsNkJBQTZCO0lBQzdCLCtCQUErQjtJQUMvQixnQ0FBZ0M7SUFDaEMsMEVBQTBFO0lBQzFFLDZDQUE2QztJQUM3Qyx1RUFBdUU7SUFDdkUsZ0hBQWdIO0lBQ2hILDhEQUE4RDtJQUM5RCx5Q0FBeUM7SUFDekMsMEdBQTBHO0lBQzFHLDREQUE0RDtJQUM1RCw4REFBOEQ7SUFDOUQsaUVBQWlFO0lBQ2pFLCtDQUErQztJQUMvQywwQ0FBMEM7SUFDMUMsMENBQTBDO0lBQzFDLDBDQUEwQztJQUMxQyxxRUFBcUU7SUFDckUsbUVBQW1FO0lBQ25FLHlDQUF5QztJQUN6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Q0FBQyxDQUFBO1NBQ0w7YUFBTTtZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQztTQUNuRDtJQUNMLENBQUM7SUFqTVEsWUFBWTtRQVB4QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxvQkFBb0I7WUFDakMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7WUFDbkMsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztTQUMzQixDQUFDO3lDQU0yQiwwQkFBVztPQUwzQixZQUFZLENBa012QjtJQUFELG1CQUFDO0NBQUEsQUFsTUYsSUFrTUU7QUFsTVcsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgLCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG52YXIgU3FsaXRlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1zcWxpdGVcIik7XG5pbXBvcnQgeyBpc0lPUywgaXNBbmRyb2lkIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbmltcG9ydCB7IFNvbmdTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvc29uZy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBTb25nIH0gZnJvbSBcIi4vbW9kZWxzL3NvbmdcIjtcbmltcG9ydCAqIGFzIHBlcm1pc3Npb25zIGZyb20gXCJuYXRpdmVzY3JpcHQtcGVybWlzc2lvbnNcIjtcblxuZGVjbGFyZSB2YXIgYW5kcm9pZDogYW55O1xuXG5cblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9hcHAuY29tcG9uZW50LnNjc3NcIl0sXG4gICAgcHJvdmlkZXJzOiBbU29uZ1NlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblxuICAgIHB1YmxpYyBzb25nczogQXJyYXk8YW55PjtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBzb25nU2VydmljZTogU29uZ1NlcnZpY2VcbiAgICAgICAgKSB7fVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICAgICAgdGhpcy5nZXRQZXJtaXNzaW9ucygpO1xuXG4gICAgICAgIHRoaXMuc29uZ1NlcnZpY2UuaW5pdERiKCk7XG4gICAgICAgIC8vIChuZXcgU3FsaXRlKFwic29uZ3MuZGJcIikpLnRoZW4oZGIgPT4ge1xuICAgICAgICAvLyAgICAgZGIuZXhlY1NRTChcIkNSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIHNvbmdzIChpZCBJTlRFR0VSIFBSSU1BUlkgS0VZIEFVVE9JTkNSRU1FTlQsIHRpdGxlIFRFWFQsIGFydGlzdCBURVhULCBpbWFnZSBURVhULCBhbGJ1bSBURVhULCBnZW5yZSBURVhULCB0cmFjayBURVhULCB5ZWFyIFRFWFQsIHBhdGggVEVYVClcIikudGhlbihpZCA9PiB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5kYXRhYmFzZSA9IGRiO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuZmV0Y2goKTtcbiAgICAgICAgLy8gICAgICAgICAvLyB0aGlzLnNvbmdzID10aGlzLmNoZWNrU29uZ3Moc29uZ0ZvbGRlcik7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5zb25ncy5mb3JFYWNoKHNvbmcgPT4ge1xuICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhzb25nLm5hbWUpO1xuICAgICAgICAvLyAgICAgICAgIH0pO1xuICAgICAgICAvLyAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwiQ1JFQVRFIFRBQkxFIEVSUk9SXCIsIGVycm9yKTtcbiAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAvLyB9LCBlcnJvciA9PiB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIk9QRU4gREIgRVJST1JcIiwgZXJyb3IpO1xuICAgICAgICAvLyB9KTtcbiAgICAgICAgLy8gbGV0IHNvbmdGb2xkZXI6IEZvbGRlcjtcbiAgICAgICAgLy8gaWYoaXNBbmRyb2lkKXtcbiAgICAgICAgLy8gICAgIHZhciBhbmRyb2lkUGF0aCA9IGFuZHJvaWQub3MuRW52aXJvbm1lbnQuZ2V0RXh0ZXJuYWxTdG9yYWdlRGlyZWN0b3J5KCkuZ2V0QWJzb2x1dGVQYXRoKCk7XG4gICAgICAgIC8vICAgICBzb25nRm9sZGVyID0gRm9sZGVyLmZyb21QYXRoKGZpbGVTeXN0ZW1Nb2R1bGUucGF0aC5qb2luKGFuZHJvaWRQYXRoLCBcIk11c2ljL1wiKSk7Ly9Gb2xkZXIuZnJvbVBhdGgoXCJzZGNhcmQvTXVzaWMvSmVzdG8vSnVzdGluL1wiKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBpZihpc0lPUyl7XG4gICAgICAgIC8vICAgICBzb25nRm9sZGVyID0ga25vd25Gb2xkZXJzLmlvcy5tdXNpYygpO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgXG4gICAgfVxuXG4gICAgXG4gICAgXG4gICAgLy8gcHJpdmF0ZSBjaGVja1NvbmdzKHNvbmdGb2xkZXI6IEZvbGRlcikge1xuICAgIC8vICAgICB2YXIgYXJyYXk6IGFueVtdID0gW107XG4gICAgLy8gICAgIHNvbmdGb2xkZXIuZ2V0RW50aXRpZXMoKVxuICAgIC8vICAgICAgICAgLnRoZW4oKGVudGl0aWVzKSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgLy8gZW50aXRpZXMgaXMgYXJyYXkgd2l0aCB0aGUgZG9jdW1lbnQncyBmaWxlcyBhbmQgZm9sZGVycy5cbiAgICAvLyAgICAgICAgICAgICBlbnRpdGllcy5mb3JFYWNoKChlbnRpdHkpID0+IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlmKGZpbGVTeXN0ZW1Nb2R1bGUuRm9sZGVyLmV4aXN0cyhlbnRpdHkucGF0aCkpe1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5ID0gYXJyYXkuY29uY2F0KHRoaXMuY2hlY2tTb25ncyhmaWxlU3lzdGVtTW9kdWxlLkZvbGRlci5mcm9tUGF0aChlbnRpdHkucGF0aCkpKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZighZW50aXR5LnBhdGguZW5kc1dpdGgoXCJkYlwiKSl7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhZ3M6IGFueTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh0ZW5zaW9uID1lbnRpdHkucGF0aC5zbGljZSgoZW50aXR5LnBhdGgubGFzdEluZGV4T2YoXCIuXCIpIC0gMSA+Pj4gMCkgKyAyKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tXCIpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicGF0aDogXCIrIGVudGl0eS5wYXRoKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVTVEVOU0lPTkU6IFwiK2V4dGVuc2lvbik7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChleHRlbnNpb24pIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm1wMlwiOlxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibXAzXCI6XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJtMmFcIjpcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQUdHSVVOVE8gQ09NRSBtcGVnXCIpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnNlcnRTb25nKGVudGl0eSwgXCJtcGVnXCIpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhcGVcIjpcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBR0dJVU5UTyBDT01FIGFwZVwiKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zZXJ0U29uZyhlbnRpdHksIFwiYXBldjJcIik7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImFhY1wiOlxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibXA0XCI6XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJtNGFcIjpcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm00YlwiOlxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibTRwYVwiOlxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibTR2XCI6XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJtNHJcIjpcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIjNncFwiOlxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBR0dJVU5UTyBDT01FIG1wNFwiKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zZXJ0U29uZyhlbnRpdHksIFwibXA0XCIpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ3bWFcIjpcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIndtdlwiOlxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYXNmXCI6XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFHR0lVTlRPIENPTUUgYXNmXCIpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnNlcnRTb25nKGVudGl0eSwgXCJhc2ZcIik7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImZsYWNcIjpcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQUdHSVVOVE8gQ09NRSBmbGFjXCIpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnNlcnRTb25nKGVudGl0eSwgXCJmbGFjXCIpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJvZ2dcIjpcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm9ndlwiOlxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwib2dhXCI6XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJvZ21cIjpcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm9neFwiOlxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwib3B1c1wiOiAvLyByZWNvbW1lbmRlZCBmaWxlbmFtZSBleHRlbnNpb24gZm9yIE9nZyBPcHVzXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzcHhcIjogLy8gcmVjb21tZW5kZWQgZmlsZW5hbWUgZXh0ZW5zaW9uIGZvciBPZ2cgU3BlZXhcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQUdHSVVOVE8gQ09NRSBvZ2dcIik7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluc2VydFNvbmcoZW50aXR5LCBcIm9nZ1wiKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYWlmXCI6XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhaWZmXCI6XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhaWZjXCI6XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFHR0lVTlRPIENPTUUgYWlmZlwiKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zZXJ0U29uZyhlbnRpdHksIFwiYWlmZlwiKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwid2F2XCI6XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFHR0lVTlRPIENPTUUgcmlmZlwiKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zZXJ0U29uZyhlbnRpdHksIFwicmlmZlwiKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwid3ZcIjpcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInd2cFwiOlxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBR0dJVU5UTyBDT01FIHdhdnBhY2tcIik7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluc2VydFNvbmcoZW50aXR5LCBcIndhdnBhY2tcIik7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm1wY1wiOlxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBR0dJVU5UTyBDT01FIG11c2VwYWNrXCIpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnNlcnRTb25nKGVudGl0eSwgXCJtdXNlcGFja1wiKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgIC8vICAgICAgICAgICAgIH0pO1xuICAgIC8vICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5zdGFjayk7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vICAgICByZXR1cm4gYXJyYXk7XG4gICAgLy8gfVxuXG4gICAgLy8gcHVibGljIGZldGNoKCkge1xuICAgIC8vICAgICB0aGlzLmRhdGFiYXNlLmFsbChcIlNFTEVDVCAqIEZST00gc29uZ3NcIikudGhlbihyb3dzID0+IHtcbiAgICAvLyAgICAgICAgIHRoaXMuc29uZ3MgPSBbXTtcbiAgICAvLyAgICAgICAgIGZvcih2YXIgcm93IGluIHJvd3MpIHtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNvbmdzLnB1c2goe1xuICAgIC8vICAgICAgICAgICAgICAgICBcImlkXCI6IHJvd3Nbcm93XVswXSxcbiAgICAvLyAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiByb3dzW3Jvd11bMV0sXG4gICAgLy8gICAgICAgICAgICAgICAgIFwiYXJ0aXN0XCI6IHJvd3Nbcm93XVsyXSxcbiAgICAvLyAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOiByb3dzW3Jvd11bM10sXG4gICAgLy8gICAgICAgICAgICAgICAgIFwiYWxidW1cIjogcm93c1tyb3ddWzRdLFxuICAgIC8vICAgICAgICAgICAgICAgICBcImdlbnJlXCI6IHJvd3Nbcm93XVs1XSxcbiAgICAvLyAgICAgICAgICAgICAgICAgXCJ0cmFja1wiOiByb3dzW3Jvd11bNl0sXG4gICAgLy8gICAgICAgICAgICAgICAgIFwieWVhclwiOiByb3dzW3Jvd11bN10sXG4gICAgLy8gICAgICAgICAgICAgICAgIFwicGF0aFwiOiByb3dzW3Jvd11bOF1cbiAgICAvLyAgICAgICAgICAgICB9KTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfSwgZXJyb3IgPT4ge1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJTRUxFQ1QgRVJST1JcIiwgZXJyb3IpO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG4gICAgLy8gcHVibGljIGluc2VydCh0aXRsZTogc3RyaW5nLCBhcnRpc3Q6IHN0cmluZywgaW1hZ2U6IHN0cmluZywgYWxidW06IHN0cmluZywgZ2VucmU6IHN0cmluZywgdHJhY2s6IHN0cmluZywgeWVhcjogc3RyaW5nLCBwYXRoOiBzdHJpbmcpIHtcbiAgICAvLyAgICAgdGhpcy5kYXRhYmFzZS5leGVjU1FMKFwiSU5TRVJUIElOVE8gc29uZ3MgKHRpdGxlLCBhcnRpc3QsIGltYWdlLCBhbGJ1bSwgZ2VucmUsIHRyYWNrLCB5ZWFyLCBwYXRoKSBWQUxVRVMgKD8sID8sID8sID8sID8sID8sID8sID8pXCIsIFt0aXRsZSwgYXJ0aXN0LCBpbWFnZSwgYWxidW0sIGdlbnJlLCB0cmFjaywgeWVhciwgcGF0aF0pLnRoZW4oaWQgPT4ge1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJJTlNFUlQgUkVTVUxUXCIsIGlkKTtcbiAgICAvLyAgICAgICAgIHRoaXMuZmV0Y2goKTtcbiAgICAvLyAgICAgfSwgZXJyb3IgPT4ge1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJJTlNFUlQgRVJST1JcIiwgZXJyb3IpO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG5cbiAgICAvLyBwdWJsaWMgaW5zZXJ0U29uZyhlbnRpdHkgOmZpbGVTeXN0ZW1Nb2R1bGUuRmlsZVN5c3RlbUVudGl0eSwgZm9ybWF0OiBzdHJpbmcgKSB7XG4gICAgLy8gICAgICAgICB2YXIgZmlsZSA9IGZpbGVTeXN0ZW1Nb2R1bGUuRmlsZS5mcm9tUGF0aChlbnRpdHkucGF0aCk7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcIkJVRkZFUklORyBcIik7XG4gICAgLy8gICAgICAgICBsZXQgYnVmZmVyID0gcmVxdWlyZSgnYnVmZmVyJykuQnVmZmVyLmZyb20oZW50aXR5LnBhdGgpO1xuXG4gICAgICAgICAgICBcbiAgICAvLyAgICAgICAgIG1tLnBhcnNlQnVmZmVyKGJ1ZmZlciwgXCJhdWRpby9tcGVnXCIsIHsgZHVyYXRpb246IHRydWUsIGZpbGVTaXplOiBmaWxlLnNpemV9KS50aGVuKCBtZXRhZGF0YSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coXCJJTlNFUklNRU5UTzogXCIrIGZvcm1hdCk7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5pbnNlcnQoIFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGEuY29tbW9uLnRpdGxlPyBtZXRhZGF0YS5jb21tb24udGl0bGU6IFwiXCIsXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YS5jb21tb24uYXJ0aXN0PyBtZXRhZGF0YS5jb21tb24uYXJ0aXN0OiBcIlwiLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGEuY29tbW9uLnBpY3R1cmU/IFwiZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCxcIiArIG1ldGFkYXRhLmNvbW1vbi5waWN0dXJlWzBdLmRhdGEudG9TdHJpbmcoJ2Jhc2U2NCcpOiBcIlwiLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGEuY29tbW9uLmFsYnVtPyBtZXRhZGF0YS5jb21tb24uYWxidW0gOlwiXCIsXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YS5jb21tb24uZ2VucmU/IG1ldGFkYXRhLmNvbW1vbi5nZW5yZVswXSA6IFwiXCIsXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YS5jb21tb24udHJhY2subm8/IG1ldGFkYXRhLmNvbW1vbi50cmFjay5uby50b1N0cmluZygpOiBcIlwiLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGEuY29tbW9uLnllYXI/IG1ldGFkYXRhLmNvbW1vbi55ZWFyLnRvU3RyaW5nKCkgOiBcIlwiLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgZW50aXR5LnBhdGhcbiAgICAvLyAgICAgICAgICAgICAgICAgKTtcbiAgICAvLyAgICAgICAgIH0pO1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIklOU0VSSU1FTlRPIENPTVBMRVRBVE8hXCIpXG4gICAgLy8gfVxuXG4gICAgZ2V0UGVybWlzc2lvbnMoKTogdm9pZCB7XG4gICAgICAgIGlmICghcGVybWlzc2lvbnMuaGFzUGVybWlzc2lvbihhbmRyb2lkLk1hbmlmZXN0LnBlcm1pc3Npb24uUkVBRF9FWFRFUk5BTF9TVE9SQUdFKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBc2tpbmcgZm9yIHBlcm1pc3Npb25zLi4uXCIpO1xuICAgICAgICAgICAgcGVybWlzc2lvbnMucmVxdWVzdFBlcm1pc3Npb25zKFtcbiAgICAgICAgICAgICAgICBhbmRyb2lkLk1hbmlmZXN0LnBlcm1pc3Npb24uUkVBRF9FWFRFUk5BTF9TVE9SQUdFLFxuICAgICAgICAgICAgICAgIGFuZHJvaWQuTWFuaWZlc3QucGVybWlzc2lvbi5XUklURV9FWFRFUk5BTF9TVE9SQUdFXG4gICAgICAgICAgICBdKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGVybWlzc2lvbnMgZ3JhbnRlZC4uLlwiKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGVybWlzc2lvbnMgZGVuaWVkLi4uXCIpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXBwIGhhcyBuZWNlc3NhcnkgcGVybWlzc2lvbnMuLi5cIik7XG4gICAgICAgIH1cbiAgICB9XG4gfVxuIl19