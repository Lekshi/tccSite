import { Router, NavigationEnd } from '@angular/router';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements AfterViewInit {
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
