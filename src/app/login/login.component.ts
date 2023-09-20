import {Component, OnInit} from '@angular/core';
import {LoginService} from "../login.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor (private service: LoginService){}

  ngOnInit() {

  }

  public form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  handleSubmit() {
    // console.log('test')
    this.service.login(this.form.value).subscribe(
      data=> console.log(data),
      err => console.log(err)
    )
  }
}
