import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post } from "../models/post";
import { Observable, of } from "rxjs";

const url = "http://localhost:3001/posts";
@Injectable({
  providedIn: "root"
})
export class PostsService {
  constructor(private http: HttpClient) {}

  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(url);
  }

  public getPost(id: string): Observable<Post> {
    if (typeof id === "undefined" || id === null) {
      return of(null);
    }
    return this.http.get<Post>(`${url}/${id}`);
  }
}
