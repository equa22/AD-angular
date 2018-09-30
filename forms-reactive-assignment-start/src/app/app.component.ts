import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	projectForm: FormGroup;

	ngOnInit() {
		this.projectForm = new FormGroup({
			'name': new FormControl(null, [ Validators.required, this.nameValidator.bind(this) ], this.asyncNameValidator.bind(this)),
			'mail': new FormControl(null, [ Validators.required, Validators.email ]),
			'status': new FormControl()
		})
	}

	onSubmit() {
		console.log(this.projectForm);
	}

	nameValidator(control: FormControl):{[s:string]:boolean} {
		if(control.value === 'Test') {
			return {'forbiddenName': true}
		}
		else return null;
	}

	asyncNameValidator(control: FormControl) : Promise<any> | Observable<any {
		const promise = new Promise<any>((resolve, reject) => {
			setTimeout(() => {
				if(control.value == 'test') {
					resolve({'exists': true})
				} else
				resolve(null);
			}, 2000);
		});

		return promise;
	}

}
