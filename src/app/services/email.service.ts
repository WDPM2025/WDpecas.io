import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
//https://dev.to/chabbasaad/sending-email-using-nodejs-and-nodemailer-with-angular-app-contact-form-5c58
  private emailUrl = 'http://localhost:3000/send-email'; // Replace with your backend URL

  constructor(private http: HttpClient) { }

  sendEmail(name: string, email: string, message: string) {
    const data = {
      name: name,
      email: email,
      message: message
    };
    return this.http.post(this.emailUrl, data);
  }
}
