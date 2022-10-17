import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {AuthService, UserType} from "../../../../../modules/auth";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements  OnInit, OnDestroy {
  @Input() appHeaderDefaulMenuDisplay: boolean;
  @Input() isRtl: boolean;
  user$: Observable<UserType>;
  private unsubscribe: Subscription[] = [];
  itemClass: string = 'ms-1 ms-lg-3';
  btnClass: string =
    'btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px';
  userAvatarClass: string = 'symbol-35px symbol-md-40px';
  btnIconClass: string = 'svg-icon-1';

  constructor(private auth: AuthService) {

  }

  ngOnInit(): void {
    this.user$ = this.auth.currentUserSubject.asObservable();
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}

