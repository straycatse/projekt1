import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://reqres.in/api/users');
  }

  getEdu() {
    return this.http.get('http://localhost/projekt/web-api/product/read.php');
  }

  getSkills() {
    return this.http.get('http://localhost/projekt/web-api/skill/read.php');
  }

  getExperience() {
    return this.http.get('http://localhost/projekt/web-api/experience/read.php');
  }
}
