import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('myForm') myForm: NgForm;
  genders = ['male', 'famale'];
  user = {
    username: '',
    email: '',
    secret: 'pet',
    questionAnswer: '',
    gender: 'male'
  };
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.myForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });
    this.myForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  ngOnInit(): void {
    this.myForm.valueChanges.subscribe((algo: any) => {
      console.log(algo);
    });
  }

  ngSubmit() {
    this.user.username = this.myForm.value.userData.username;
    this.user.email = this.myForm.value.userData.username;
    this.user.secret = this.myForm.value.secret;
    this.user.questionAnswer = this.myForm.value.questionAnswer;
    this.user.gender = this.myForm.value.gender;
    console.log(this.user);
    this.submitted = true;
    this.myForm.reset();
    console.log(this.myForm);
  }

}
