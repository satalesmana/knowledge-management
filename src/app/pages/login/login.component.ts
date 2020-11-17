import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public fLogin:any={
    username:'',
    passwrod:''
  }

  constructor( private loginServices:LoginService ) { }

  onCekLogin():void{
    this.loginServices.cek_auth({
      username:this.fLogin.username,
      password: this.fLogin.passwrod
    }).subscribe((output:any) => {
      //console.log(output.satatus)
      if(output.satatus==true){
        localStorage.setItem("token",output.token)
        window.location.reload();  
      }else
        alert('Login Gagal');
      
    });

  }

  ngOnInit(): void {
  }

}
