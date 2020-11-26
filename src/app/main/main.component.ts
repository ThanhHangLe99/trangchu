import { Component, OnInit, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseComponent } from '../lib/base-component';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent extends BaseComponent implements OnInit {
  list_item:any;
  list_item_new:any;
  list_item_banchay:any;
  index:any;
  size:any;
  //menus:any;

  constructor(injector: Injector) {
    super(injector);
   }

  ngOnInit(): void {
    // this._api.get('/api/category/get-category').takeUntil(this.unsubscribe).subscribe(res => {
    //   this.menus = res;
    // });
    this.list_item=[];
    this.index=1;
    this.size=8;
    let elem = document.getElementsByClassName("script");
    for(var i = elem.length -1; 0 <= i; i--) {
      elem[i].remove();
    }
      this.loadScripts();
    Observable.combineLatest(
      this._api.get('/api/product/get-all/'+this.index+'/'+this.size),
    ).takeUntil(this.unsubscribe).subscribe(res => {
      this.list_item = res[0];
    }, err => {});

    Observable.combineLatest(
      this._api.get('/api/product/get-new'),
    ).takeUntil(this.unsubscribe).subscribe(res => {
      this.list_item_new = res[0];
    }, err => {});

    Observable.combineLatest(
      this._api.get('/api/product/get-banchay'),
    ).takeUntil(this.unsubscribe).subscribe(res => {
      this.list_item_banchay = res[0];
    }, err => {});

  }
  addToCart(it) {
    this._cart.addToCart(it);
    alert('Thêm thành công!');
  }
  loadPage(page) {
    Observable.combineLatest(
      this._api.get('/api/product/get-all/'+page+'/'+this.size),
    ).takeUntil(this.unsubscribe).subscribe(res => {
      this.list_item = res[0];
    }, err => {});
  }
}
