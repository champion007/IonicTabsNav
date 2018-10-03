import { Platform } from '@ionic/angular';
import { Component } from '@angular/core';
import { Firebase } from '@ionic-native/firebase/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  constructor(private firebase:Firebase, private platform:Platform){
    platform.ready().then(response=>{
      firebase.getToken().then(response =>{
        console.log('response>>', response);
        this.getNotification()
      }).catch(error =>{
        console.log('error>>>>>', error);
      })
    })
  }

  async getNotification(){
    try{
      await this.firebase.onNotificationOpen().subscribe(data =>{
        console.log('data>>>>>',data);
      },error =>{
        console.log('error>>>>>', error);
      })
    }catch(e){
      console.log('error>>>>>', e);
    }
  }
}
