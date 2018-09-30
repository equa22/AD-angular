import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Ana'];

  ngOnInit() {
  	this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [ Validators.required, this.forbiddenNames.bind(this) ] ), //this.forbiddenNames  will throw error, because Angular will call it
        'email': new FormControl(null, [ Validators.required, Validators.email ], [this.forbiddenEmail.bind(this)])
      }),
  		'gender': new FormControl('male'),
      'hobbies': new FormArray([])
  	});

    this.signupForm.statusChanges.subscribe(
      (value) => console.log(value)
    )

    this.signupForm.setValue({
      'userData': {
        'username': 'Sara',
        'email': 'sara@test.com'
      },
      'gender': 'female',
      'hobbies': []
    })

    this.signupForm.patchValue({
      'userData': {
        'username': 'Ana'
      }
    })
  }

  onSubmit() {
  	console.log(this.signupForm)
    this.signupForm.reset();
  }

  onAddHoby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  forbiddenNames(control: FormControl):{[s: string: boolean]} {
    if(this.forbiddenUsernames.indexOf(control.value) !== -1) { // we did find it
      return {'nameIsForbidden': true};
    }
    // if validation is valid, you have to return nothing or null
    return null;
  }

  forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true})
        } else {
          resolve(null);
        }
      }, 1500);
    });

    return promise;
  }
}


/*
new FormControl({value1, value2, value3})

@value1_ default value
@value2_ array of validators
@value3_ asynchronized validator

*/