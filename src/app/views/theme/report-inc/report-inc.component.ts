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

  OnReport(fname,lname,date, ID, Amount_of_claim, Opened, Estimated,Finished,Guilty,NoGuilty,Type) {
    var status   = 0;
    var guilt = false;
    if(Opened){
      status=0;
    }else if(Estimated){
      status=1;
    }else if(Finished){
      status=2;
    }
    if(Guilty){
      guilt = true;
    }
    alert('new ALERT!');
    alert("First Name: " + fname + " Last Name " + lname + " Date: "+date + " Amount: " + Amount_of_claim + " ID: " +ID +" Status: " +status +" Guilty " + guilt +" Type " + Type);
  }

  OnSubmit(date, firstName, lastName, ID, ammounOfClaim, Opened, Estimated, Finished, Guilty, Not_guilty, select) { }
}
