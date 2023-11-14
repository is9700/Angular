/*import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-password-details',
  templateUrl: './password-details.component.html',
  styleUrls: ['./password-details.component.css']
})
export class PasswordDetailsComponent implements OnInit {
  passwordItem: any;
 
  passwordItems: any[] = []; 

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.passwordId = +this.route.snapshot.paramMap.get('id');
    this.http.get(`https://localhost:3000/passwords/${this.passwordId}`).subscribe(data => {
      this.passwordItem = data;
    });
  }
  
  editPassword() {
    this.router.navigate(['/passwords/edit', this.passwordId]);
  }
}
*/