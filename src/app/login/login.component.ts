import {Component, OnInit} from '@angular/core';
import {LoginService} from "../login.service";
import {FormControl, FormGroup} from "@angular/forms";
import {IToken} from "../user-interface";
import {AuthService} from "../auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor (private service: LoginService, private auth: AuthService){}

  ngOnInit() {

  }

  public form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  handleSubmit() {
    // console.log('test')
    this.service.login(this.form.value).subscribe(
      (data: IToken) => {
        console.log(data.token);
      this.auth.saveToken(data.token)
      },
      err =>
        console.log(err)
    )
  }
}
