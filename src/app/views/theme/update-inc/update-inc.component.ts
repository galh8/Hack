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

  OnReport(date, ID, Amount_of_claim, Opened, Estimated,Finished,Guilty,NoGuilty,Type) {
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
    alert(date + " Amount: " + Amount_of_claim + " ID: " +ID +" Status: " +status +" Guilty " + guilt +" Type " + Type);
  }
  OnSubmit(date, ID, Amount_of_claim) {
    // alert('new ALERT!!!!!');
    // alert(date + " " + Amount_of_claim + " "  );
  }
}
