import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { ArticleService } from '../../services/article.service';


@Component({
  selector: 'app-kmform',
  templateUrl: './kmform.component.html',
  styleUrls: ['./kmform.component.css']
})
export class KmformComponent implements OnInit {
  @Output() onCloseForm = new EventEmitter<string>();

  @Input() fKnowledge:any={
    id:'',
    status:1,
    text:'',
    title:''
  }
  
  constructor(
    private service:ArticleService
  ) { }
  

  onSaveData():void{
    if(this.fKnowledge.id != ''){
      this.service.update({
        id:this.fKnowledge.id,
        status:this.fKnowledge.status,
        text:this.fKnowledge.text,
        title:this.fKnowledge.title
      }).subscribe((output:any) => {
        alert(output.message)  
        this.onCloseForm.next();
        this.onClerForm(); 

      });
    }else{
      this.service.add({
        status:this.fKnowledge.status,
        text:this.fKnowledge.text,
        title:this.fKnowledge.title
      }).subscribe((output:any) => {
        alert(output.message)  
        this.onClerForm();   
      });
    }
  }

  onCancel():void{
    this.onClerForm();
  }

  onClerForm():void{
    this.fKnowledge.id = '';
    this.fKnowledge.status = 1;
    this.fKnowledge.text = '';
    this.fKnowledge.title = '';
  }


  ngOnInit(): void {

  }

}
