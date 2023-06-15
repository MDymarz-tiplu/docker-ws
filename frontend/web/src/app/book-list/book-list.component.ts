import { Component, OnInit } from '@angular/core';
import { People, PeopleApiService } from '../book-api-client.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  Peoples: People[] = [];

  constructor(private PeopleApiService: PeopleApiService) {}

  ngOnInit() {
    this.loadPeoples();
  }

  async loadPeoples() {
    try {
      this.Peoples = await this.PeopleApiService.getPeoples();
    } catch (error) {
      console.error('API error:', error);
    }
  }

  async addPeople() {
  
    try {
      const addedPeople = await this.PeopleApiService.addPeople();
      console.log('Added People:', addedPeople);
      this.loadPeoples(); // Refresh the People list after adding a new People
    } catch (error) {
      console.error('API error:', error);
    }
  }

  async deletePeople(id: number|undefined) {
    try {
      await this.PeopleApiService.deletePeople(id);
      console.log('People deleted');
      this.loadPeoples(); // Refresh the People list after deleting a People
    } catch (error) {
      console.error('API error:', error);
    }
  }

  
}
