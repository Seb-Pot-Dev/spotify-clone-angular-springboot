import {Component, effect, inject, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FaIconLibrary, FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {fontAwesomeIcons} from "./shared/font-awesome-icons";
import { NavigationComponent } from './layout/navigation/navigation.component';
import { LibraryComponent } from './layout/library/library.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule, NavigationComponent, LibraryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

// On implémente l'interface OnInit pour pouvoir utiliser la méthode ngOnInit
export class AppComponent implements OnInit {
  title = 'spotify-clone-angular-springboot';

  private faIconLibrary = inject(FaIconLibrary);

  ngOnInit(): void {
    this.initFontAwesome();
  }

  private initFontAwesome() {
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }
}
