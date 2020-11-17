import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isCollapsed = false;
  title:String;
  sessin:String='';
  

  constructor(){
    this.title = 'KM App'
  }

  onLogOut():void{
    localStorage.removeItem("token");
    window.location.reload();
  }

  ngOnInit(): void {    
    let token = localStorage.getItem("token")
     if(token !='' && token != null){
       this.sessin= token
     }
  }
}
