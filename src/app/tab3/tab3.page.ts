import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  nome = "Primeiro projeto"

  constructor() {}
  ngOnInit() {
    //this.chamarNome()
    this.nome = "O Universo"
  }
  chamarNome():void{
    alert('Essa função foi chamada')
  }

}
