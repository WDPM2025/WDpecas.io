import { Component } from '@angular/core';
import {ManageCSVService} from '../../services/manage-csv.service'

@Component({
  selector: 'app-find-motorbike-part',
  imports: [],
  templateUrl: './find-motorbike-part.component.html',
  styleUrl: './find-motorbike-part.component.scss'
})
export class FindMotorbikePartComponent {
  covidData: any[] = [];

  constructor(private covid: ManageCSVService) { }

  ngOnInit() {

    this.getData();

  }

  getData() {

    this.covid.getInfo().subscribe(data => {

    const list = data.split('\n');

    list.forEach( e => {

    this.covidData.push(e);});

  });

}

}

