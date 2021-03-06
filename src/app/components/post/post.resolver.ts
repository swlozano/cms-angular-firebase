import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { FirebaseService } from '../../services/firebase.service';

@Injectable()
export class PostResolver implements Resolve<any> {

  constructor(public firebaseService: FirebaseService) { }

  resolve(route: ActivatedRouteSnapshot,) {

    return new Promise((resolve, reject) => {
      let key = route.paramMap.get('key');
      this.firebaseService.getPost(key)
      .subscribe(
        data => {
          resolve(data);
        }
      );
    })
  }
}