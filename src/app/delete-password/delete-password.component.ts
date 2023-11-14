import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-list',
  templateUrl: './delete-password.component.html',
  styleUrls: ['./delete-password.component.css']
})
export class PasswordListComponent implements OnInit {
  passwordItems: any[] = []; 

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/passwordItems').subscribe(data => {
      this.passwordItems = data;
    });
  }

  deletePassword(id: number) {
    this.http.delete(`http://localhost:3000/passwordItems/${id}`).subscribe(() => {
      this.passwordItems = this.passwordItems.filter(item => item.id !== id);
    });
  }
}
