import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
    { path: "artist", loadChildren: "~/app/artist/artist.module#ArtistModule" },
    { path: "player", loadChildren: "~/app/player/player.module#PlayerModule" },
    { path: "tracks", loadChildren: "~/app/tracks/tracks.module#TracksModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
