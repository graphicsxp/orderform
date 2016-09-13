import { Component, ViewChild } from '@angular/core';
import { ionicBootstrap, Platform, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import 'rxjs/Rx'; // load all features of reactive extensions


import { OrderFormListComponent } from './orderForm/orderForm-list.component';
import { OrderFormService } from './orderForm/orderForm-service';
import { Page2 } from './pages/page2/page2';


@Component({
  templateUrl: './app.html'
})

class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = OrderFormListComponent;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Login', component: Page2 },      
      { title: 'Order Forms', component: OrderFormListComponent }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp);