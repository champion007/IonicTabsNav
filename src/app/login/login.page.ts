import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private route:Router,
    private navCtrl:NavController) { }
  ngOnInit() {
  }
  async navPage(){
    this.navCtrl.navigateRoot('/app/tabs/(home:home)')
  }

}