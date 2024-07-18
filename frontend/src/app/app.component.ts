import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WakeLockService } from './wake-lock.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private wakeLockService: WakeLockService) {}

  ngOnInit(): void {
    this.wakeLockService.requestWakeLock();

    console.info(
      '\n\n%cHi 👋!%c \n\nHerzlich Willkommen bei %cFPV Fly Assistant%c!\n\nIch freue mich, dass Sie den Weg zu meiner Seite gefunden haben.\n\nIch hoffe, dass Ihnen diese Seite gefällt und ich Ihnen einen Einblick in meine Fähigkeiten und Leidenschaft für meine Arbeit geben konnte.\nBitte zögern Sie nicht, Kontakt mit mir aufzunehmen, wenn Sie Fragen haben oder an einer Zusammenarbeit interessiert sind.\nIch bin offen für neue Projekte und Herausforderungen und würde mich freuen, auch Ihr nächstes Projekt umzusetzen.\n\nVielen Dank für Ihr Interesse und ich freue mich darauf, von Ihnen zu hören.\n\nMit freundlichen Grüßen,\n\n%cOrange - Kanguru%c',
      'color: #ff7f00;font-size: 25px;',
      '',
      'color: #ff7f00;font-weight: bold;text-decoration: underline',
      '',
      'color: #ff7f00;font-weight: bold;'
    );
  }

  @HostListener('window:blur', ['$event']) windowBlur(event: FocusEvent) {
    this.wakeLockService.releaseWakeLock();
  }
}
