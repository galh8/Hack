import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-report-inc",
  templateUrl: "./report-inc.component.html",
  styleUrls: ["./report-inc.component.scss"]
})
export class ReportIncComponent implements OnInit {
  d = new Date(Date.now()).toLocaleString();

  constructor() {}

  ngOnInit() {}

  OnReport() {
    alert("hello");
  }
}
