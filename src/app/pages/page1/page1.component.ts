import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: [],
})
export class Page1Component
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  name: string = 'Ernesto';
  seconds: number = 0;
  timerSubscription!: Subscription;

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');

   this.timerSubscription= interval(1000).subscribe((i) => {
      this.seconds=i;
      });
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.timerSubscription.unsubscribe();
    console.log('timer unsuscribed')
  }

  

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }

  save() {}
}
