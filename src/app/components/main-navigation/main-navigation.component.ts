import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { Param } from 'src/app/models/param.model';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.css']
})
export class MainNavigationComponent implements OnInit {

  params: Param[];

  selectedParam: Param;



  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getParams()
    .subscribe((data: Param[]) => this.params = data);
  }

}
