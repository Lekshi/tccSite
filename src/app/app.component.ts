import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'EuDiversidade';

  @ViewChild('targetComponent') targetComponent: ElementRef | undefined;

  ngAfterViewInit() {
    this.scrollIntoView();
  }

  private scrollIntoView(): void {
    if (this.targetComponent) {
      this.targetComponent.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
