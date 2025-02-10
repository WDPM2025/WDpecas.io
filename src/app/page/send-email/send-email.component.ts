import { Component } from '@angular/core';
import {EmailService} from '../../services/email.service'

@Component({
  selector: 'app-send-email',
  imports: [],
  templateUrl: './send-email.component.html',
  styleUrl: './send-email.component.css'
})
export class SendEmailComponent {

  name: string;
  email: string;
  message: string;

  constructor(private emailService: EmailService) {
    this.name = '';
    this.email = '';
    this.message = '';
  }

  onSubmit(){
    this.emailService.sendEmail(this.name, this.email, this.message).subscribe(
      response => {
        console.log('Email sent successfully!');
      },
      error => {
        console.log('Error sending email:', error);
      }
    );

  }

}
