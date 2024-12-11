import {Component, OnInit} from '@angular/core';
import {CookieService} from 'ngx-cookie';

@Component({
  selector: 'language-banner',
  templateUrl: './language-banner.component.html',
  styleUrls: ['./language-banner.component.scss'],
})
export class LanguageBannerComponent implements OnInit {
  isVisible: boolean;
  isChecked: boolean = false;
  constructor(private cookieService: CookieService) {}

  ngOnInit(): void {
    if (this.cookieService.get('doNotShowLanguageBanner') !== 'true') {
      this.isVisible = navigator.language.slice(0, 2) !== 'en';
    }
  }

  onButtonClick() {
    //this.isVisible = false;
    if (this.isChecked) {
      this.cookieService.put('doNotShowLanguageBanner', 'true');
    }
  }
}

// get language and check if en --
// when got it is cliked get if checked --
// when got it is clocked remove tooltip --
// save coocie when button clicked if checked --
// save lang pref if cases are specific.
// unit tests
