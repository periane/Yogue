import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost/sociale/web/web.php';

  constructor(private route: ActivatedRoute,
    private postService: PostService,
    private location: Location) { }
}
