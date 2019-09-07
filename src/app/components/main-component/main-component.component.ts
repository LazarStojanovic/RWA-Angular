import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs"
import { Post } from "src/app/models/post";
import { PostsService } from "src/app/services/posts.service";
import { Store,} from "@ngrx/store";
import { State } from '../../store/index'
import * as PostActions from "../../store/post.action";
@Component({
  selector: "app-main-component",
  templateUrl: "./main-component.component.html",
  styleUrls: ["./main-component.component.css"]
})
export class MainComponentComponent implements OnInit {
  public posts: Observable<Post[]>;

  constructor(private postsService: PostsService, private store: Store<State>) {}

  ngOnInit() {
    this.postsService.getPosts().subscribe(posts => {
      this.store.dispatch(new PostActions.AddPost(posts))
    });

    this.posts = this.store.select(State => State.posts);
    console.log(this.posts)
  }
}
