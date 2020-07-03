import { UserSettings } from './../data/user-settings';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings: UserSettings = {
    name: 'Santiago',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: 'here are some notes... '
  };

  userSettings: UserSettings = {...this.originalUserSettings};

  userSubscriptionType: Observable<string[]>;

  postError: Boolean = false;
  postErrorMessage: String = '';

  startDate: Date;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.startDate = new Date();
    this.userSubscriptionType = this.dataService.getSubscriptionType();
    
  }

  onHttpError(errorResponse: any) {
    console.log('Error:', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit(ngForm: NgForm): void {
    this.dataService.postUserSettingsForm(this.userSettings).subscribe(
      result => console.log('success: ', result),
      error => this.onHttpError(error)
    );
  }

}
