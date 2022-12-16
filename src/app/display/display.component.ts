import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {
  constructor(private usersvc: UsersService) {}
  users: [] = [];
  selecteduser: string = '';
  multiselecteduser: string = '';
  selectedValues: boolean = false;
  Fruits: string[] = ['apple', 'orange'];
  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers() {
    this.usersvc.getUsers().subscribe((res) => {
      console.log('users-data', res);
      this.users = res;
    });
  }
  termsConditions(event: any) {
    console.log('***', event);
  }
  selectedFruits(event: any) {
    console.log(event, this.Fruits);
  }
}
