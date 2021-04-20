import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';


// const VEHICLES = gql `
//   query MyQuery {
//     allVehicles {
//       edges {
//         node {
//           carMake
//           carModel
//           email
//           firstName
//           id
//           lastName
//           manufacturedDate
//           uuid
//           vinNumber
//         }
//       }
//     }
//   }`

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  constructor(private apollo: Apollo) { }

  // getVehicles(): Observable<any> {
  //   return this.apollo.watchQuery<any>({
  //     query: VEHICLES,
  //   }).valueChanges;
  // }
}
