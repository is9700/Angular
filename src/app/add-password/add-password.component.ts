import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add-password',
  templateUrl: './add-password.component.html',
  styleUrls: ['./add-password.component.css']
})
export class AddPasswordComponent {

newPassword: { category: string, app: string, userName: string, encryptedPassword: string } = {
  category: '',
  app: '',
  userName: '',
  encryptedPassword: ''
  
};
constructor(private http: HttpClient) { }
onSubmit() {
  // Encode the password using Base64 encoding
  const encodedPassword = btoa(this.newPassword.encryptedPassword);

  // Update the new password object with the encoded password
  this.newPassword.encryptedPassword = encodedPassword;

  // Send a POST request to the API to add the new password item
  this.http.post('/api/passwords', this.newPassword)
    .subscribe(
      (response) => {
        console.log('Password added successfully!', response);
      },
      (error) => {
        console.log('Error adding password:', error);
      }
    );
}

}

