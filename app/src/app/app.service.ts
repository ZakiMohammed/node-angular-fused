import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    const url = `${this.url}users`;
    return this.http.get<User[]>(url);
  }
}
