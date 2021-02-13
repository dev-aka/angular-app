import { Component, OnInit, Input } from '@angular/core';


import { ICommon } from '../../../services/common/common.IService';

@Component({
  selector: 'app-contentheader',
  templateUrl: './contentheader.component.html',
  styleUrls: ['./contentheader.component.scss']
})
export class ContentheaderComponent implements OnInit {
  @Input() PageName;


  constructor(private iCommon: ICommon) { }

  ngOnInit() {
  }

  onClick(event) {
    this.iCommon.setItemClicked(event);
  }

}
