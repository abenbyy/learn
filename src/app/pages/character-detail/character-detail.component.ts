import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/character';
import { ActivatedRoute } from '@angular/router';
import { ApolloService } from 'src/app/services/apollo.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  currCharacter: Character;

  constructor(
    private actRoute: ActivatedRoute,
    private service: ApolloService,
  ) { }

  ngOnInit(): void {
    var id =+ this.actRoute.snapshot.paramMap.get('id')
    
    this.service.getCharacterById(id).subscribe(async query=>{
      this.currCharacter = query.data.character
    })
  }

}
