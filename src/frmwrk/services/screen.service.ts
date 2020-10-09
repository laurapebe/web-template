import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable()
export class ScreenService {
    private resizeSource = new Subject<null>();
    resize$ = this.resizeSource.asObservable();

    largeBreakpoint = 800; //Pixel value we consider large
    screenWidth = 1000;
    screenHeight = 800;

    constructor() {
        // We do a try catch because we are going to access the window object, but some technologies (like Angular Universal, which renders on a server) don't.
        try {
            this.screenWidth = window.innerWidth;
            this.screenHeight = window.innerHeight;
            // Listen to change of size
            window.addEventListener('resize', (event) => this.onResize(event));
        } 
        catch (e){
            // If we fail to access the window, use default values. 
        }
    }

    isLarge() : boolean {
        return this.screenWidth >= this.largeBreakpoint;
    }

    onResize($event) : void{
        // Set screen size to new resized window and notify all subscribers. 
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
        this.resizeSource.next();
    }
}

/**
 * Screen Service that allows resize of the screen depending on window/device size.
 * This service will be used in layout component to make the framework responsive. 
 */