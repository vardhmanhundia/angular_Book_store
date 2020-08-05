import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:4000';
  getCharacters(): any {
    return this.http.get(`${this.url}/characters`);
  }
}
