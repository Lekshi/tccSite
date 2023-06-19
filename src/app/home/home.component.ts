import { Router, NavigationEnd } from '@angular/router';
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
