import { Component } from '@angular/core';
import { inject } from '@angular/core/testing';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'spotify-clone-angular-springboot';

  private faIconLibrary : FaIconLibrary = inject(FaIconLibrary)
}
