import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  //templateUrl: './blog.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: any
  //item: any

  constructor(
    public firebaseService: FirebaseService, private route: ActivatedRoute
  
  ) { }

  ngOnInit() {
    this.getData()
  }

  getData() {
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.post = data.payload.data();
        this.post.id = data.payload.id;
      }
    })
  }

}
