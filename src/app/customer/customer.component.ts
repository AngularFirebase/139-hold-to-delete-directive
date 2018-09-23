import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {

  @Input() customer;
  progress = 0;

  constructor(private afs: AngularFirestore) { }

  deleteCustomer(e, cust) {
    this.progress = e / 10;
    if (this.progress > 100) {
      this.afs.doc(`customers/${this.customer.id}`).delete()
    }
  }

}
