import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy, NgZone } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page';
import { isIOS, isAndroid } from "tns-core-modules/platform";
import * as util from 'util';
import { knownFolders, Folder, File, path } from "tns-core-modules/file-system";


import * as fileSystemModule from "tns-core-modules/file-system";
import { SongService } from "../services/song.service";
import { Song } from "../models/song";



declare var android: any;



@Component({
    selector: "tracks",
    moduleId: module.id,
    templateUrl: "./tracks.component.html",
    providers: [ SongService]
})
export class TracksComponent implements OnInit, OnDestroy {

    @ViewChild('bg') gridlayout: ElementRef;


    constructor( private router: RouterExtensions, private page: Page
        , private songService: SongService 
        ) {
        
    }

    ngOnInit(): void {
        
        this.page.actionBarHidden = true;
        this.songService.fetch();

    }
    ngAfterViewInit() {
  
    }

    ngOnDestroy() {
    }

    goBack() {
        this.router.back();
    }

    
}
