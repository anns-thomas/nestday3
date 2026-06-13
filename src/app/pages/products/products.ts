import { ChangeDetectorRef, Component } from '@angular/core';
import { Card } from "../../components/card/card";
import { Fakeapi } from '../../fakeapi';

@Component({
  selector: 'app-products',
  imports: [Card],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  data: any[] = [] ;
  constructor(private api: Fakeapi, private cdr: ChangeDetectorRef){}

  ngOnInit(){
    this.api.getFakeProducts().subscribe((res: any)=>{
      this.data = res;
      this.cdr.detectChanges()
    })
  }
}
