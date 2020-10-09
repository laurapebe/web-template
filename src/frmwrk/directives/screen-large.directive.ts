import { AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";
import { Subscription } from 'rxjs';
import { ScreenService } from '../services/screen.service';

@Directive({selector: '[screenLarge]'})
export class ScreenLarge implements AfterViewInit, OnDestroy {
    private hasView = false;
    private screenSubscription: Subscription;
    constructor( private viewContainer: ViewContainerRef,
        private template: TemplateRef<Object>,
        private screenService: ScreenService)
    {
        this.screenSubscription = screenService.resize$.subscribe(() => this.onResize());
    }
    
    // setter
    @Input()
    set screenLarge(condition){
        condition = this.screenService.screenWidth >= this.screenService.largeBreakpoint;
         
        if(condition && !this.hasView){
            this.hasView = true;
            // ViewContainer references the element on which the directive is placed.
            // CreateEmbeddedView adds the template to the DOM
            this.viewContainer.createEmbeddedView(this.template);
        } else if (!condition && this.hasView){
            //If we are on a small screen we take the element off the DOM
            this.hasView = false;
            this.viewContainer.clear();
        }
        
    }
    ngAfterViewInit(){
        this.screenLarge=false;
    }

    ngOnDestroy () {
        this.screenSubscription.unsubscribe;
    }

    onResize(){
        // Trigger the setter
        this.screenLarge = false;
    }
}