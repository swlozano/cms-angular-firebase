import { Component, OnInit } from '@angular/core';
import {Post} from '../../models/post';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  model = new Post("","","","",new Date());
  constructor(public firebaseService: FirebaseService) { }

  ngOnInit() {
  }


  onSubmit() { 

    this.firebaseService.createPost(this.model)
    .then(
      res => {
        this.model = new Post("","","","",new Date());
        console.log("Post Creado con exito ")
      }
    )

   }

  get diagnostic() { return JSON.stringify(this.model); }

}
