import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lyubi Bubi';

  toggleSection(event: MouseEvent) {
    const sectionContent = (event.currentTarget as HTMLElement).nextElementSibling;
    if (sectionContent) {
      const allSections = document.querySelectorAll('.section-content');
      for (let i = 0; i < allSections.length; i++) {
        const section = allSections[i] as HTMLElement;
        if (section !== sectionContent && section.classList.contains('show')) {
          section.classList.remove('show');
        }
      }
      sectionContent.classList.toggle('show');
    }
  }
}
