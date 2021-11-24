import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable()
export class Loading {
    private loading;
    constructor(
        private loadingCtrl: LoadingController
    ) { }

    display(message: string) {
        this.loading = this.loadingCtrl.create({
            spinner: 'crescent',
            message,
            translucent: true,
            backdropDismiss: true
        });

        this.loading.present();
    }

    onDidDismiss() {
        this.loading.onDidDismiss();
    }
}
