import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../services/article.service';

@Component({
  selector: 'app-kmunpublish',
  templateUrl: './kmunpublish.component.html',
  styleUrls: ['./kmunpublish.component.css']
})
export class KmunpublishComponent implements OnInit {
  public loadingTbl:boolean=false;
  public listArtickel:any=[];
  
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

  ngOnInit(): void {
    this.onLoadData();
  }

}
