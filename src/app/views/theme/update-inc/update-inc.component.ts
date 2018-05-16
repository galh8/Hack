import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-update-inc",
  templateUrl: "./update-inc.component.html",
  styleUrls: ["./update-inc.component.scss"]
})
export class UpdateIncComponent implements OnInit {
  d = new Date(Date.now()).toLocaleString();

  constructor() {}

  ngOnInit() {}

  OnReport() {
    alert("hello");
  }
  OnSubmit(date, ID, Amount_of_claim, Opened, Estimated, Finished, option, Guilty, Not_guilty) { }
}
