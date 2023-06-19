import { Router, NavigationEnd } from '@angular/router';
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-quem-somos',
  templateUrl: './quem-somos.component.html',
  styleUrls: ['./quem-somos.component.css']
})
export class QuemSomosComponent {
  constructor(private router: Router, private elementRef: ElementRef) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.scrollIntoView();
      }
    });
  }

  private scrollIntoView(): void {
    const targetElement = this.elementRef.nativeElement.querySelector('#targetComponent');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
