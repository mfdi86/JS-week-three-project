import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  constructor(private router: Router){}
  members: Member[] = [
    new Member('Jane Stewart', 25, 'Survivor, The God Delusion', 'July, 5, 2017', 'Omnivore', 1)


  ];

  ngOnInit(){

}
  goToDetailPage(clickedMember: Member) {
    this.router.navigate(['members', clickedMember.id]);
  };

}
