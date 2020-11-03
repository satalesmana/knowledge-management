import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../services/article.service';
import {KmformComponent} from '../kmform/kmform.component'

@Component({
  selector: 'app-kmunpublish',
  templateUrl: './kmunpublish.component.html',
  styleUrls: ['./kmunpublish.component.css']
})
export class KmunpublishComponent implements OnInit {
  public loadingTbl:boolean=false;
  public listArtickel:any=[];
  public visible:boolean=false;
  public message:any={
    id:'ddd',
    status:1,
    text:'dsd',
    title:'ffff'
  };

  constructor(
    private sc:ArticleService
  ) { }

  onLoadData():void{
    this.loadingTbl = true
    this.sc.list({status:0}).subscribe((output:any) => {
      this.listArtickel = output;
      this.loadingTbl = false
    });
  }

  onSetPublish(knowledge):void{
    this.sc.update({
      id:knowledge.id,
      status:1
    }).subscribe((output:any) => {
      alert(output.message) 
      this.onLoadData() 
    });
  }

  ngOnInit(): void {
    this.onLoadData();
  }

}
