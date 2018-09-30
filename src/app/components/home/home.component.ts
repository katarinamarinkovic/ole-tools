import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { App } from 'src/app/models/app.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  apps: App[];

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.dataService.getApps()
    .subscribe((data: App[]) => this.apps = data);
  }

}
