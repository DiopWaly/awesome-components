import { Directive, ElementRef, Renderer2, AfterViewInit, Input, HostListener } from "@angular/core";

@Directive({
    selector: '[highlight]'
})
export class HightlightDirective implements AfterViewInit{

    @Input() color = 'yellow'

    constructor(
        private el: ElementRef,
        private renderer: Renderer2
    ){}

    ngAfterViewInit(): void {
        this.setBackgroundColor(this.color)
    }

    setBackgroundColor(color: string){
        this.renderer.setStyle(this.el.nativeElement, 'background-color', color)
    }
    @HostListener('mouseenter') onMouseEnter(){
        this.setBackgroundColor('lightgreen')
        this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer')
    }
    @HostListener('mouseleave') onMouseleave(){
        this.setBackgroundColor(this.color)
    }
}