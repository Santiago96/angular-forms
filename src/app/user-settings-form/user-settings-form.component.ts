import { UserSettings } from './../data/user-settings';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(ngForm: NgForm): void {
    console.log("submitting: ", ngForm.valid);
  }

}
