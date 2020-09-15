import { Component } from '@angular/core';
import {MemberService} from '../../services/member.service'

interface Member {
  key: string;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-member',
  templateUrl:'./member.component.html'
})

export class MemberComponent {
  public listOfData: Member[] = [];
  public visible:boolean=false
  public loadingTbl:boolean= false;
  public fMember:any={
    key:'',
    name:'',
    emial:'',
    address:''
  }


  constructor(
    private sc:MemberService
  ) { }

  onAddNew():void{
    this.visible = true
  }

  onSaveData():void{
    this.sc.add({
        name: this.fMember.name,
        age: this.fMember.age,
        address: this.fMember.address
    }).subscribe((output:any) => {
      alert(output.message)
      this.onClose()      
    });
  }

  deleteRow(deletedKey: string): void {
    this.listOfData = this.listOfData.filter(d => d.key !== deletedKey);
  }
  
  onClose():void{
    this.visible = false
    this.fMember.key=''
    this.fMember.name=''
    this.fMember.age=''
    this.fMember.address=''
  }

  onLoadData():void{
    this.loadingTbl = true
    this.sc.list().subscribe((output:any) => {
      this.listOfData = output;
      this.loadingTbl = false
    });
  }

  ngOnInit(): void {
    this.onLoadData()
  }
}