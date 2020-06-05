import { SubredditModel } from './../../subreddit/subreddit-response';
import { SubredditService } from './../../subreddit/subreddit.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  ngOnInit(): void {
  }

  goToCreatePost() {

  }

  goToCreateSubreddit() {
    
  }
}
