import { Router } from '@angular/router';
import { PostModel } from './../post-model';
import { PostService } from './../post.service';
import { Component, OnInit, Input } from '@angular/core';
import { faComments } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.css']
})
export class PostTileComponent implements OnInit {

  faComments = faComments;
  // posts: Array<PostModel> = [];
  @Input() posts: PostModel[];

  constructor(private postService: PostService, private router: Router) {
    // this.postService.getAllPosts().subscribe(post => {
    //   this.posts = post
    // });
  }

  ngOnInit(): void {
  }

  goToPost(id: number): void {
    this.router.navigateByUrl('/view-post/' + id)
  }

}
