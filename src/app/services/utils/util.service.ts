import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(
    private readonly router: Router
  ) { }

  public goToPage(route: string): void {
    this.router.navigate([route]);
  }
}
