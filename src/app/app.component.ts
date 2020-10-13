
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test';
  ngOnInit() {
    var a =5;
    var b =6;
    var c =10;
    var d =10;
    var chop = new chop(a,b,c,d);
    alert(chop.thetich());
  }
}
export class tamgiac {
  protected a:number;
  protected b:number;
  protected c:number;
  constructor(a:number,b:number,c:number){
    this.a=a;
    this.b=b;
    this.c=c;

  }
  public dienTich():number{
    let p = (this.a+this.b+this.c)/2;
    let s = Math.sqrt((p*(p-this.a)*(p-this.b)*(p-this.c)));
    return s
  }
}
export class chop extends tamgiac {
  protected h:number;
  constructor(a:number,b:number,c:number,h:number){
    super(a,b,c);
    this.h = h;
  }
  public thetich():number{
    return 1/3*this.dienTich()*this.h;
  }
}