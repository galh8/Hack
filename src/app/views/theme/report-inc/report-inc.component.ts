import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { NgForm } from '@angular/forms';
import * as Web3 from 'web3';
import {parseHttpResponse} from 'selenium-webdriver/http';
import {type} from 'os';
import * from 'os';

@Component({
  selector: "app-report-inc",
  templateUrl: "./report-inc.component.html",
  styleUrls: ["./report-inc.component.scss"]
})
export class ReportIncComponent implements OnInit {
  d = new Date(Date.now()).toLocaleString();

  web3: any;
  account: string;
  ContractInstance:any;
  ABI: string= '[{"constant":true,"inputs"  :[{"name":"caseid","type":"uint256"}],"name":"getData","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_personid","type":"uint256"}],"name":"getCasesByPerson","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"createUniqueId","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"persons","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"incidents","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"caseid","type":"uint256"}],"name":"getCaseAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"caseid","type":"uint256"},{"name":"status","type":"uint256"},{"name":"amountOfClaim","type":"uint256"},{"name":"incidentType","type":"uint256"},{"name":"isGuilty","type":"bool"}],"name":"updateContract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_personid","type":"uint256"},{"name":"status","type":"uint256"},{"name":"amountOfClaim","type":"uint256"},{"name":"incidentType","type":"uint256"},{"name":"isGuilty","type":"bool"},{"name":"_dateOfCreation","type":"uint256"}],"name":"newIncident","outputs":[{"name":"newContract","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"uid","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]';

  constructor() {
    let urlProvider="http://localhost:8545"
    this.web3 = new Web3(new Web3.providers.HttpProvider(urlProvider));

    this.web3.eth.getAccounts((error,result)=>{
      this.account = result[0];
    });
    this.fromAddress('0xf2dd00bcd940f29d2784f4838ff6658dfed77cd8');
  }

  fromAddress(address: string): void {
    this.ContractInstance = this.web3.eth.contract(JSON.parse(this.ABI), { from: this.account, gasPrice: 300000 }).at(address);
  }

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
    var new_date = new  Date(date);
    var seconds = new_date.getTime()/1000;

    // alert('new ALERT!');
    // alert("First Name: " + fname + " Last Name " + lname + " Date: "+seconds + " Amount: " + Amount_of_claim + " ID: " +ID +" Status: " +status +" Guilty " + guilt +" Type " + Type);
    // alert(seconds);


    ID =  Number(ID);
    status = Number(status);
    Amount_of_claim = Number(Amount_of_claim);
    Type = Number(Type);
    // alert(typeof(ID) + ' ' +  typeof(status) + ' ' +  typeof(Amount_of_claim)+ ' ' + typeof(Type) + ' ' + typeof(guilt));
    this.ContractInstance.newIncident(ID,status,Amount_of_claim,Type,guilt,100,{
      from: this.account,
      value: 10,
      gas: 400000,
    },(error, result) =>
    {

      // alert("amir" + result);
    });


  }

  OnSubmit(date, firstName, lastName, ID, ammounOfClaim, Opened, Estimated, Finished, Guilty, Not_guilty, select) { }
}
