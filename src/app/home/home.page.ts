import { IGift } from './models/IGift';
import { Component, OnInit } from '@angular/core';
import { ApiTrendingService } from './../services/api-trending.service';
import { ModelGift } from './models/model.gift';
import { HOME } from './location/home-en-us';
import { Loading } from '../components/loading.component';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  noImage = `https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png`;
  title = ``;
  localization = HOME;
  data: ModelGift;

  listGifts: Array<IGift> = [];
  filterGifts: Array<IGift> = [];

  constructor(
    private apiService: ApiTrendingService,
    private loadingCtrl: Loading) { this.loadData(); }


  async loadData() {
    try {

      //this.loadingCtrl.display(this.localization.loading.awaitLoad);

      const response = await this.apiService.getGifts();
      console.log(response);
      this.data = response as ModelGift;

      this.listGifts = this.data.data;
      this.filterGifts = this.listGifts;

    } catch (error) {
      console.log(error);
    }
  }

  doRefresh = async (event) => {
    await this.loadData();

    if (event != null) {
      event.target.complete();
    }
  }

  ngOnInit() {

  }

  filterItems(title: string = '') {
    //console.log(title);
    this.filterGifts = this.listGifts;

    // eslint-disable-next-line arrow-body-style
    return this.filterGifts.filter((item: IGift) => {
      return item.title.toLowerCase().includes(title.toLowerCase());
    });

  }

  filterName(event) {
    this.title = event.toLowerCase();
    this.filterGifts = this.filterItems(this.title);
  }
}
