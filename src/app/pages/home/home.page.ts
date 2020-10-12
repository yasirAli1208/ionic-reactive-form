import { Component,ViewChild  } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;
  @ViewChild('slideWithNav2', { static: false }) slideWithNav2: IonSlides;
  @ViewChild('slideWithNav3', { static: false }) slideWithNav3: IonSlides;

  sliderOne: any;


   //Configuration for each Slider
   slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:false,pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + index + '">' + '</span>';
      },
    }
  };


  constructor(
  ) {
    //Item object for Nature
    this.sliderOne =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          id: 995,
          name:'lady2'
        },
        {
          id: 925,
          name:'lady1'
        },
        {
          id: 940,
          name:'lady1'
        },
        {
          id: 943,
          name:'lady2'
        },
        {
          id: 944,
          name:'lady1'
        }
      ]
    };
   
  }




}
