import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Import User model
import {User} from '../../models/user';

// Import GithubUsers provider
import {GithubUsers} from '../../providers/github-users/github-users';

/*
  Generated class for the UsersPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/users/users.html',

    // Add the GithubUsers provider as part of our page component
  providers: [GithubUsers]
})
export class UsersPage {
  //declare users as an array of User model
  users: User[];
   // Inject the GithubUsers in the constructor of our page component

  constructor(private navCtrl: NavController, githubUsers: GithubUsers) {

       // Test whether the github provider returns data
    githubUsers
      .load()
      //user arrow function notation
      .then(users=>this.users=users);
        // Log the returned github users
      
  }

}
