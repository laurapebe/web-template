import { AfterViewInit, OnDestroy } from '@angular/core';
import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";
import { Subscription } from 'rxjs';
import { ScreenService } from '../services/screen.service';

@Directive({selector: '[screenBelowLarge]'})
export class ScreenBelowLarge implements AfterViewInit, OnDestroy {
    private hasView = false;
    private screenSubscription: Subscription;

    constructor( private viewContainer: ViewContainerRef,
        private template: TemplateRef<Object>,
        private screenService: ScreenService)
    {
        screenService.resize$.subscribe(() => this.onResize());
    }
    
    // setter
    @Input()
    set screenBelowLarge(condition){
        condition = this.screenService.screenWidth < this.screenService.largeBreakpoint;
         
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
        this.screenBelowLarge=false;
    }

    ngOnDestroy () {
        this.screenSubscription.unsubscribe;
    }
    
    onResize(){
        // Trigger the setter
        this.screenBelowLarge = false;
    }
}