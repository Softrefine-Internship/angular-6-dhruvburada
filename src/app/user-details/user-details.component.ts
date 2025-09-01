import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  userForm = new FormGroup({
    fname: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    lname: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    mail: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(50)]),
    married: new FormControl(false, [Validators.required]),
    gender: new FormControl('male', Validators.required),
    country: new FormControl('', [Validators.required])

  })

  onSubmit() {
    console.log(this.userForm.value)
  }

}
