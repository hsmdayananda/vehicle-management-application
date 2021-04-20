import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { MainServiceService } from '../main-service.service';

const VEHICLES_QUERY = gql`
  query MyQuery {
    allVehicles {
      nodes {
        carMake
        carModel
        email
        firstName
        id
        lastName
        manufacturedDate
        uuid
        vinNumber
      }
    }
  }
`;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private http: HttpClient, private mainService: MainServiceService, private apollo: Apollo) { }

  page = 1;
  vehicles: any[] = [];
  fileName = '';

  private query: QueryRef<any>;

  ngOnInit() {
    this.query = this.apollo.watchQuery({
      query: VEHICLES_QUERY,
      variables: { offset: 10 * this.page }
    });

    this.query.valueChanges.subscribe(result => {
      this.vehicles = result.data && result.data.vehicles;
    });
  }

  onFileSelected(event) {

    const file: File = event.target.files[0];

    if (file) {

      this.fileName = file.name;
      const formData = new FormData();
      formData.append("csv", file);

      const upload$ = this.http.post("/api/vehicle/import", formData);

      upload$.subscribe();
    }
  }

  update() {
    this.query.refetch({ offset: 10 * this.page });
  }

  nextPage() {
    this.page++;
    this.update();
  }

  prevPage() {
    if (this.page > 0) this.page--;
    this.update();
  }

}