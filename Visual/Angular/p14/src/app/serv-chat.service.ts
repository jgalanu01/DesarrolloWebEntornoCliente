import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServChatService {



constructor(private httpClient: HttpClient) {

  }
}
