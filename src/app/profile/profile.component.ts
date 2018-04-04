import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  paises;
  private apiUrl = 'https://restcountries.eu/rest/v2/all';
  constructor(public authService: AuthService, private http: HttpClient) { }

  ngOnInit() {
    this.getdato();
  }

  signOut() {
    this.authService.logout();
  }

  getdato() {
    this.http.get(this.apiUrl).subscribe(
      data1 =>  {this.paises = data1; },
    );
}
}


