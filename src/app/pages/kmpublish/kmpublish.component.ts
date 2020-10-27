import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../services/article.service';


@Component({
  selector: 'app-kmpublish',
  templateUrl: './kmpublish.component.html',
  styleUrls: ['./kmpublish.component.css']
})
export class KmpublishComponent implements OnInit {
  public loadingTbl:boolean= false;
  public listArtickel:any=[];

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

  ngOnInit(): void {
      this.onLoadData();
  }

}
