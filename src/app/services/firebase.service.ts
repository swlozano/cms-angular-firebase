import { Injectable } from '@angular/core';
//import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) {

  }

  createPost(post){
    return this.db.collection('post').add({
      title:post.title,
      post: post.post,
      resum: post.title,
      dateOf: new Date(),
      owner: "alejandro"     
    });
  }

  getPost(postKey){
    return this.db.collection('post').doc(postKey).snapshotChanges();
  }

  getPosts(){
    return this.db.collection('post').snapshotChanges();
  }

  
  
}
