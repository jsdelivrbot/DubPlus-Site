import { Component, OnInit } from '@angular/core';
import { TeamMember } from './team-member/team-member';
import { TeamMembersService } from './team-member/team-members.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  members: TeamMember[] = [];

  constructor(private _teamMembersService: TeamMembersService) { }

  ngOnInit() {
    this.members = this._teamMembersService.getMembers();
  }

}
