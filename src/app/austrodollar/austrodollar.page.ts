import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-austrodollar',
  templateUrl: './austrodollar.page.html',
  styleUrls: ['./austrodollar.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AustrodollarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
