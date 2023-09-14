import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ApiService, Pokemon } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit,OnDestroy {
  public amount = 20;
  public showAbout = true;
  public messageReceived = '';
  public pokemons: Pokemon[] = [];
  public pokemons$ = new Observable<Pokemon[]>()
  // public subscription = new Subscription()

  constructor(
    private router: Router,  //! Inyección de dependencias
    private apiService: ApiService //! Inyección de dependencias
  ){
    setTimeout(()=>{
      this.amount = 30;
    } , 2000 )
  }

  ngOnInit(): void {
    // this.subscription = this.apiService.getPokemons().subscribe( pokemonsResult => {
    //   this.pokemons = pokemonsResult;
    // } )
    this.pokemons$ = this.apiService.getPokemons()

  }

  navigateRouteNotFound(){
    this.router.navigateByUrl('/asdadasdas')
  }

  hideAbout(){
    this.showAbout = false;
  }

  receivedFromChild(event:string){
    this.messageReceived = event
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }
}
