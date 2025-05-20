import { Component, HostListener, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  isLargeScreen: boolean = window.innerWidth >= 768; // Asume que > 768px es una pantalla grande
  showFiller = false;

  constructor(private cdr: ChangeDetectorRef) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isLargeScreen = event.target.innerWidth >= 768;
    this.cdr.detectChanges(); // Fuerza la actualización del cambio
  }
}
