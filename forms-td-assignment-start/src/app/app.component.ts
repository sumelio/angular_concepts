import { Component, ViewChild, OnInit, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild("subscriptionForm") subscriptionForm: NgForm;
  subscription: Subscription;
  
  ngOnInit(): void {
    this.subscription = this.subscriptionForm.valueChanges.subscribe(
      (data: any) => {
        console.log(data);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    const info = {
      email: this.subscriptionForm.value.email,
      subscription: this.subscriptionForm.value.subscription
    };
    console.log(info);
  }
}
