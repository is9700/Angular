import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-password-list',
  templateUrl: './password-list.component.html',
  styleUrls: ['./password-list.component.css']
})
export class PasswordListComponent {
  constructor(private http: HttpClient) { }
  passwordItems: any[] = [];
  ngOnInit() {
    this.http.get<any[]>('http://localhost:3000/passwordItems').subscribe(data => {
      this.passwordItems = data;
    });
  }

}
