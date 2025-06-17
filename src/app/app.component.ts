import { Component , OnInit} from "@angular/core";
var Sqlite = require("nativescript-sqlite");
import { isIOS, isAndroid } from "tns-core-modules/platform";
import { SongService } from "./services/song.service";
import { Song } from "./models/song";
import * as permissions from "nativescript-permissions";

declare var android: any;




@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "app.component.html",
    styleUrls: ["./app.component.scss"],
    providers: [SongService]
})
export class AppComponent implements OnInit{

    public songs: Array<any>;

    public constructor(
        private songService: SongService
        ) {}

    ngOnInit(): void {

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

        
    }

    
    
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

    getPermissions(): void {
        if (!permissions.hasPermission(android.Manifest.permission.READ_EXTERNAL_STORAGE)) {
            console.log("Asking for permissions...");
            permissions.requestPermissions([
                android.Manifest.permission.READ_EXTERNAL_STORAGE,
                android.Manifest.permission.WRITE_EXTERNAL_STORAGE
            ])
            .then(() => {
                console.log("Permissions granted...");
            })
            .catch(() => {
                console.log("Permissions denied...");
            })
        } else {
            console.log("App has necessary permissions...");
        }
    }
 }
