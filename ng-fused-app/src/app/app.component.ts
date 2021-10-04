import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './app.model';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private appService: AppService) {
    this.users$ = of([]);
  }
  
  ngOnInit(): void {
    this.users$ = this.appService.getUsers();
  }
}
