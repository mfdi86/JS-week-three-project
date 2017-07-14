import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Member } from '../member.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService]
})


export class AdminComponent {

  constructor(private memberService: MemberService) { }

  submitForm(name: string, age: number, books: string, hostings: string, diet: string) {
    const newMember: Member = new Member(name, age, books, hostings, diet);
    this.memberService.addMember(newMember);
  }

}
