import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  isSuccess = false;
  isError = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.isSuccess = false;
      this.isError = false;

      const formData = this.contactForm.value;

      this.http.post('https://formsubmit.co/ajax/kothagokul910@gmail.com', formData)
        .subscribe({
          next: () => {
            this.isSubmitting = false;
            this.isSuccess = true;
            this.contactForm.reset();
            setTimeout(() => this.isSuccess = false, 5000);
          },
          error: (err) => {
            console.error('Error sending message:', err);
            this.isSubmitting = false;
            this.isError = true;
            setTimeout(() => this.isError = false, 5000);
          }
        });
    }
  }
}
