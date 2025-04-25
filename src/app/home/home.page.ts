import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
})
export class HomePage {
  constructor(private router:Router) {}

  openDollarPage() {
    this.router.navigate(['/dollar'])
  }

  openYenPage() {
    this.router.navigate(['/yen'])
  }

  openAustralianDolPage() {
    this.router.navigate(['/austrodollar'])
  }

  openRubblePage() {
    this.router.navigate(['/rubble'])
  }

  backHomeButton() {
    this.router.navigate(['/'])
  }
}
