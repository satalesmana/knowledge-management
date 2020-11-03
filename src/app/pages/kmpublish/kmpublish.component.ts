import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../services/article.service';
import {KmformComponent} from '../kmform/kmform.component'

@Component({
  selector: 'app-kmpublish',
  templateUrl: './kmpublish.component.html',
  styleUrls: ['./kmpublish.component.css']
})
export class KmpublishComponent implements OnInit {
  public loadingTbl:boolean= false;
  public listArtickel:any=[];
  public display_form:boolean=false;
  public data_knowledge:any={};

  constructor(
    private sc:ArticleService
  ) { }

  onLoadData():void{
    this.loadingTbl = true
    this.sc.list({status:1}).subscribe((output:any) => {
      this.listArtickel = output;
      this.loadingTbl = false
    });
  }

  onSetNonaktif(knowledge):void{
    this.sc.update({
      id:knowledge.id,
      status:0
    }).subscribe((output:any) => {
      alert(output.message) 
      this.onLoadData() 
    });
  }

  onEdit(knowledge):void{
    this.display_form = true;
    this.data_knowledge = knowledge;
    
  }

  onClose():void{
    this.display_form = false;
    this.onLoadData();
  }

  ngOnInit(): void {
      this.onLoadData();
  }

}
