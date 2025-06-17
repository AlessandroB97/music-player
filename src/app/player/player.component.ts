import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy, NgZone } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page';
import { TNSPlayer } from 'nativescript-audio-player';
import { isIOS, isAndroid } from "tns-core-modules/platform";
import { Slider } from "tns-core-modules/ui/slider";
import * as util from 'util';
import { knownFolders, Folder, File, path } from "tns-core-modules/file-system";


import * as fileSystemModule from "tns-core-modules/file-system";
import * as mm from 'music-metadata/lib/core';



declare var android: any;



@Component({
    selector: "player",
    moduleId: module.id,
    templateUrl: "./player.component.html"
})
export class PlayerComponent implements OnInit, OnDestroy {
    player: TNSPlayer;
    _checkInterval: any;
    currentTime : any;
    duration: any;
    file: File;

    tags: any;

    image :any;


    @ViewChild('bg') gridlayout: ElementRef;

    constructor(private zone: NgZone, private router: RouterExtensions, private page: Page) {

        
        this.player = new TNSPlayer();
        // this.player.debug = true;
        let songFolder: Folder;
        if(isAndroid){
            var androidPath = android.os.Environment.getExternalStorageDirectory().getAbsolutePath();
            songFolder = Folder.fromPath(fileSystemModule.path.join(androidPath, "Music/Jesto/Justin/"));//Folder.fromPath("sdcard/Music/Jesto/Justin/");
        }
        if(isIOS){
            songFolder = knownFolders.ios.music();
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

        const exists = fileSystemModule.File.exists(this.file.path);
        console.log("Does song exists: ", exists); 
        // console.log(this.file.readSync());
        
        let buffer = require('buffer').Buffer.from(this.file.readSync());
        mm.parseBuffer(buffer, "audio/mpeg", { duration: true, fileSize: this.file.size}).then( metadata => {
            this.tags = {
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
        if(this.tags.image)
        this.image = "data:image/jpeg;base64," + this.tags.image.data.toString('base64');
        // console.log(this.image);
        
        const playerOptions = {
            audioFile: this.file.path, //TODO: da cambiare con la directory del file selezionato
            loop: false,
            autoplay: false,
            completeCallback: this._trackComplete.bind(this),
            errorCallback: this._trackError.bind(this)
        };
    
        this.player
            .playFromFile(playerOptions)
            .then((res) => {
                console.log(res);
                this.player.getAudioTrackDuration().then(duration => {
                    this.duration = duration;
                    // iOS: duration is in seconds
                    // Android: duration is in milliseconds
                    console.log(`song duration:`, duration);
                  });
            })
            .catch((err) => {
                console.log("something went wrong...", err);
        });        

    }

    ngOnInit(): void {
        
        this.page.actionBarHidden = true;

        this._checkInterval = setInterval(() => {
            this.player.getAudioTrackDuration().then((duration: any) => {
                // iOS: duration is in seconds
                // Android: duration is in milliseconds
                let progress = this.player.currentTime;
                if (isIOS) {
                    duration *= 1000
                    progress *= 1000
                }

                this.currentTime = progress;

            });
        }, 1);
        
        console.log(this.file.path);



    }
    ngAfterViewInit() {
  
    }

    ngOnDestroy() {
        clearInterval(this._checkInterval);
    }

    private _trackComplete(args: any) {
        console.log('reference back to player:', args.player);
        // iOS only: flag indicating if completed succesfully
        console.log('whether song play completed successfully:', args.flag);
    }
     
    private _trackError(args: any) {
        console.log('reference back to player:', args.player);
        console.log('the error:', args.error);
        // Android only: extra detail on error
        console.log('extra info on the error:', args.extra);
    } 

    millisToMinutesAndSeconds(millis: number) {
        var minutes = Math.floor(millis / 60000);
        var seconds = Math.floor((millis % 60000) / 1000);
        return (seconds == 60 ? (minutes+1) + ":00" : minutes + ":" + (seconds < 10 ? "0" : "") + seconds);
    }

    goBack() {
        this.router.back();
    }

    playPause() {
        if (this.player.isAudioPlaying()) {
            this.player.pause();
        } else {
            this.player.play();
        }
    }
    
    onCurrentTimeChanged(args: { object: Slider; }): void {
        const slider = <Slider>args.object;
        if (!isNaN(slider.value)) {
          this.seek(Math.floor(slider.value));
        }
    }
      
    seek(moment: number): void {
        this.player.seekTo(moment);
    }
      
    isSliderValueChanged(val: number): boolean {
        return Math.round(val) !== Math.round(this.currentTime);
    }   
    
}
