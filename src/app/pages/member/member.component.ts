import { Component } from '@angular/core';

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
  public fMember:any={
    key:'',
    name:'',
    emial:'',
    address:''
  }

  onAddNew():void{
    this.visible = true
  }

  onSaveData():void{
    let myKey = this.listOfData.length + 1;
    this.listOfData = [
      ...this.listOfData,
      {
        key: myKey.toString(),
        name: this.fMember.name,
        age: this.fMember.age,
        address: this.fMember.address
      }
    ];
    
    this.onClose()
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

  ngOnInit(): void {
    
  }
}