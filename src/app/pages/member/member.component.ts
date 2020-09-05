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
  listOfData: Member[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    }
  ];

  loadData(): void {
    let myKey = this.listOfData.length + 1;
    this.listOfData = [
      ...this.listOfData,
      {
        key: myKey.toString(),
        name: `Edward King `,
        age: 32,
        address: `London, Park Lane no`
      }
    ];    
  }

  deleteRow(deletedKey: string): void {
    this.listOfData = this.listOfData.filter(d => d.key !== deletedKey);
  }

  ngOnInit(): void {
    
  }
}