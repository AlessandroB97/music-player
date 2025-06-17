import { SegmentedBar, SegmentedBarItem } from "tns-core-modules/ui/segmented-bar";
import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from "tns-core-modules/ui/page";
import { screen } from "tns-core-modules/platform";
import { SongService } from "../services/song.service";
import { Song } from "../models/song";
declare var android: any;



@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    providers: [SongService]
})
export class HomeComponent implements OnInit {
    public viewHeigth: number = 0;

    constructor(private router: RouterExtensions, private page: Page
        , private songService: SongService
        ) {
    }

    ngOnInit(): void {
        this.page.actionBarHidden = true;
        this.viewHeigth = screen.mainScreen.heightDIPs * 0.6;
        // this.songService.initDb();

        // this.songService.songs.forEach((song: Song) => {
        //     console.log(song.Title +" - "+song.Artist);
            
        // });
    }

    goTo(component: string) {
        this.router.navigate([component]);
    }

}

















