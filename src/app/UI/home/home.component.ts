import { Component, OnInit, OnDestroy } from '@angular/core';


import { IHome } from '../../services/home/home.IService';

import { ICard } from '../../Interfaces/ICard.Interface';
import { IPost } from '../../Interfaces/IPost.Interface'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  cardsDetails: Array<ICard>;
  postDetails: Array<IPost>;
  pageName: string = 'Home';

  constructor(private iHome: IHome) {
  }

  ngOnInit() {
    this.loadCardDetails();
    this.loadPostDetails();
  }

  loadPostDetails() {
    this.iHome.getAllPosts().subscribe(postInfos => {
      this.postDetails = postInfos.slice(4, 8);
    });
  }

  loadCardDetails() {
    this.iHome.getAllCardDetails().subscribe(cardInfos => {
      this.cardsDetails = cardInfos.slice(0, 4).map((card, i) => {
        const title = card.title.split(' ');
        card.title = title[0] + " " + title[1];
        card.id = card.id + 100; // to get a 3 digit number
        return card;
      })
    });
  }
}
