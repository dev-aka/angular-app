import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-post',
  templateUrl: './home-post.component.html',
  styleUrls: ['./home-post.component.scss']
})
export class HomePostComponent implements OnInit {

  @Input() Header;
  @Input() Description;

  constructor() { }

  ngOnInit() {
  }

}
