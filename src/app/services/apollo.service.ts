import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { Query } from '../models/query';
import gql from 'graphql-tag';


@Injectable({
  providedIn: 'root'
})
export class ApolloService {

  constructor(
    private apollo: Apollo,
  ) { }

  getCharacters():Observable<Query>{
    return this.apollo.query<Query>({
      query: gql`
        query GetCharacters{
          characters{
            id,
            name,
            title,
            image,
            element,
            description
          }
        }
      `
    })
  }

  getCharacterById(id: number): Observable<Query>{
    return this.apollo.query<Query>({
      query: gql`
        query GetCharacter($id: Int){
          character(id: $id){
            id,
            name,
            title,
            image,
            element,
            description
          }
        }
      `,
      variables:{
        "id": id
      }
    })
  }


}
