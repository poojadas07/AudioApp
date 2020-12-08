import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private clientId: string = '44b6976203c748c8b55f7654246ff550';
  private searchUrl: string;
  //private artistsUrl: string = 'https://api.spotify.com/v1/search?type=artist&limit=10&client_id='+this.clientId+'&q=';

  constructor(private http: HttpClient) { }

  searchMusic(searchTerm: string , type='artist'){
    this.searchUrl = 'https://api.spotify.com/v1/search?query='+ searchTerm+'&offset=0&limit=20&type='+type;
    return this.http.get(this.searchUrl).pipe(map((res:any) => res.json()));
}

  // searchArtists(searchTerm: string) {
  //   let url = this.artistsUrl + searchTerm;
  //   return this.http.get(url).pipe(map((res:any) => res.json()));
  // }
}
