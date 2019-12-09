import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  items: Array<any>;
  
  constructor(
    public firebaseService: FirebaseService
    
  ) { }

  ngOnInit() {
    this.getData()
  }

  getData(){
    this.firebaseService.getPosts()
    .subscribe(result => {
      this.items = result;
    })
  }

}
