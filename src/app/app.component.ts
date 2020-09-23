import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'WCIC';
  constructor(private router: Router,  private route: ActivatedRoute) {
  }

  // goToItems(): void{
  //   this.router.navigate(['recipe'], {relativeTo: this.route});
  // }

  ngOnInit(): void {
    // this.goToItems();
  }
}
