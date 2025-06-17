import { Injectable, OnInit } from "@angular/core";
import { Song } from "../models/song";
var Sqlite = require("nativescript-sqlite");
import { DataFormStyleBase } from "nativescript-ui-dataform";
import * as fileSystemModule from "tns-core-modules/file-system";
import { knownFolders, Folder, File, path } from "tns-core-modules/file-system";
import {parseBuffer, parseFile} from 'music-metadata';
import { isIOS, isAndroid } from "tns-core-modules/platform";
import {Buffer} from "buffer";
import * as imageSource from "tns-core-modules/image-source";



declare var android: any;


@Injectable()
export class SongService{
    currentSong: Song;
    songs: Song[] = [];
    // mmr: MediaMetadataRetriever;
    img = new imageSource.ImageSource();
    



    public initDb(){
        let songFolder: Folder;
        if(isAndroid){
            var androidPath = android.os.Environment.getExternalStorageDirectory().getAbsolutePath();
            songFolder = Folder.fromPath(fileSystemModule.path.join(androidPath, "Music/Prova"));//Folder.fromPath("sdcard/Music/Jesto/Justin/");
        }
        if(isIOS){
            songFolder = knownFolders.ios.music();
        }
        (new Sqlite("songs.db")).then(db => {
            db.execSQL("DROP TABLE IF EXISTS songs");
            db.execSQL("CREATE TABLE IF NOT EXISTS songs (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, artist TEXT, image TEXT, album TEXT, genre TEXT, track TEXT, year TEXT, path TEXT)").then(id => {
                
                
            }, error => {
                console.log("CREATE TABLE ERROR", error);
            });
        }, error => {
            console.log("OPEN DB ERROR", error);
        });
        this.checkSongs(songFolder);
    }

    private checkSongs(songFolder: Folder) {
        var array: any[] = [];
        songFolder.getEntities()
            .then((entities) => {
                // entities is array with the document's files and folders.
                entities.forEach((entity) => {
                        if(fileSystemModule.Folder.exists(entity.path)){
                            array = array.concat(this.checkSongs(fileSystemModule.Folder.fromPath(entity.path)));
                        } else if(!entity.path.endsWith("db")){
                            var tags: any;
                            var extension =entity.path.slice((entity.path.lastIndexOf(".") - 1 >>> 0) + 2);
                            console.log("-----------------");
                            console.log("path: "+ entity.path);
                            console.log("ESTENSIONE: "+extension);
                            switch (extension) {
                                case "mp2":
                                case "mp3":
                                case "m2a":
                                    console.log("AGGIUNGO COME mpeg");
                                    this.insertSong(entity, "mpeg");
                                    break;
                                case "ape":
                                console.log("AGGIUNGO COME ape");
                                    this.insertSong(entity, "apev2");
                                    break;
                                case "aac":
                                case "mp4":
                                case "m4a":
                                case "m4b":
                                case "m4pa":
                                case "m4v":
                                case "m4r":
                                case "3gp":
                                    console.log("AGGIUNGO COME mp4");
                                    this.insertSong(entity, "mp4");
                                    break;
                                case "wma":
                                case "wmv":
                                case "asf":
                                    console.log("AGGIUNGO COME asf");
                                    this.insertSong(entity, "asf");
                                    break;
                                case "flac":
                                    console.log("AGGIUNGO COME flac");
                                    this.insertSong(entity, "flac");
                                    break;
                                case "ogg":
                                case "ogv":
                                case "oga":
                                case "ogm":
                                case "ogx":
                                case "opus": // recommended filename extension for Ogg Opus
                                case "spx": // recommended filename extension for Ogg Speex
                                    console.log("AGGIUNGO COME ogg");
                                    this.insertSong(entity, "ogg");
                                    break;
                                case "aif":
                                case "aiff":
                                case "aifc":
                                    console.log("AGGIUNGO COME aiff");
                                    this.insertSong(entity, "aiff");
                                    break;
                                case "wav":
                                    console.log("AGGIUNGO COME riff");
                                    this.insertSong(entity, "riff");
                                    break;
                                case "wv":
                                case "wvp":
                                    console.log("AGGIUNGO COME wavpack");
                                    this.insertSong(entity, "wavpack");
                                    break;
                                case "mpc":
                                    console.log("AGGIUNGO COME musepack");
                                    this.insertSong(entity, "musepack");
                                    break;
                            }
                        }
                    
                });
                this.fetch();
            }).catch((err) => {
                console.log("ERRORE: "+err.stack);
        });
    }

    public insertSong(entity :fileSystemModule.FileSystemEntity, format: string ) {
        var file = fileSystemModule.File.fromPath(entity.path);
        console.log("INIZIO BUff");
        let buff = Buffer.from(file.readSync());
        console.log(buff);
        // readFile(file.path, "utf8", function(err, data) {  
        //     if (err) throw err;
        //     buff =data;
        // });
        
        // this.mmr = new MediaMetadataRetriever()
        // this.getMetadata(entity);
        
        parseBuffer(buff, "audio/"+format,{ duration: true, fileSize: file.size}).then( metadata => {
            // console.log(metadata.common.title);
            this.insertDB( 
                    metadata.common.title? metadata.common.title : "",
                    metadata.common.artist? metadata.common.artist : "",
                    metadata.common.picture? "data:image/jpeg;base64," + metadata.common.picture[0].data.toString('base64') : "",
                    metadata.common.album? metadata.common.album : "",
                    metadata.common.genre? metadata.common.genre[0] : "",
                    metadata.common.track.no? metadata.common.track.no.toString() : "",
                    metadata.common.year? metadata.common.year.toString() : "",
                    entity.path
                );
        });
    console.log("INSERIMENTO COMPLETATO!")
}

private insertDB(title: string, artist: string, image: string, album: string, genre: string, track: string, year: string, path: string) {
    
    (new Sqlite("songs.db")).then(db => {

        db.execSQL("INSERT INTO songs (title, artist, image, album, genre, track, year, path) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [title, artist, image, album, genre, track, year, path]).then(id => {
        }, error => {
            console.log("INSERT ERROR", error);
        });
        
    }, error => {
        console.log("OPEN DB ERROR", error);
    });

}


    public fetch() {

        (new Sqlite("songs.db")).then(db => {

            db.all("SELECT * FROM songs").then(rows => {
                this.songs = [];
                for(var row in rows) {
                    var song = new Song;
                    song.Title = rows[row][1];
                    song.Artist = rows[row][2];
                    song.Image = rows[row][3];
                    song.Album = rows[row][4];
                    song.Genre = rows[row][5];
                    song.Track = rows[row][6];
                    song.Year = rows[row][7];
                    song.Path = rows[row][8];
                    
                    this.songs.push(song);
                }
            }, error => {
                console.log("SELECT ERROR", error);
            });
            
        }, error => {
            console.log("OPEN DB ERROR", error);
        });

        
    }
    

    
    
    // getMetadata(entity :fileSystemModule.FileSystemEntity) {
    //     //Set the data source for the media file
    //     console.log(entity.path);
    //     this.mmr.setDataSource(entity.path);

    //     //Get the Embedded Picture(Bitmap)
    //     // this.mmr.getEmbeddedPicture()
    //     // .then((args) => {
    //     //     if(args) {
    //     //         this.img.setNativeSource(args);
    //     //     console.log("IMMAGINE: "+ this.img.toBase64String("jpg"));
    //     //     }
    //     // })
    //     // .catch((ex) => {
    //     //     //Do something else
    //     //     console.log("Failed to set ImageSource..." + ex);
    //     // });

    //     //Get all the metadata
    //     this.mmr.extractAllMetadata()
    //     .then((args) => {
    //         // if(args._mediaMetadataRetriever.getEmbeddedPicture()){
    //         //     this.img.setNativeSource(args.image);
    //         // }
    //         this.img.setNativeSource(args.image);
    //         this.insertDB( 
    //         args.title? args.title : "",
    //         args.artist? args.artist : "",
    //         this.img? "data:image/jpg;base64," +this.img.toBase64String("png") : "",//"data:image/jpeg;base64," + args.picture[0].data.toString('base64') : "",
    //         args.album? args.album : "",
    //         args.genre? args.genre : "",
    //         args.cdtracknumber? args.cdtracknumber : "",
    //         args.year? args.year.toString() : "",
    //         entity.path
    //         );
    //     });

        
    // }
}
