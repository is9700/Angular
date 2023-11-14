/*import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.component.html',
  styleUrls: ['./edit-password.component.css']
})
export class EditPasswordComponent implements OnInit {
  passwordId!: number; // add ! or a default value to silence the error
  passwordItems: any[] = []; 
  decryptedPassword!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.passwordId = +this.route.snapshot.paramMap.get('id');
    this.http.get<any>(`/passwords/${this.passwordId}`).subscribe(
      data => {
        if (data && data.encryptedPassword) {
          this.passwordItems = data;
          this.decryptedPassword = atob(data.encryptedPassword);
        } else {
          console.error(`Invalid data format: ${data}`);
        }
      },
      error => console.log(error)
    );
  }
  
  

  onSubmit(): void {
    const indexOfItemToUpdate = this.passwordItems.findIndex(item => item.id === this.passwordId);
    if (indexOfItemToUpdate === -1) {
      console.log(`Could not find password item with ID ${this.passwordId}`);
      return;
    }
    const itemToUpdate = this.passwordItems[indexOfItemToUpdate];
    itemToUpdate.encryptedPassword = btoa(this.decryptedPassword);
    this.http.put<any>(`/passwords/${this.passwordId}`, itemToUpdate).subscribe(
      data => this.router.navigate(['/passwords', this.passwordId]),
      error => console.log(error)
    );
  }
  

}
*/