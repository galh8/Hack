import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { NgForm } from '@angular/forms';
import * as Web3 from 'web3';
import {parseHttpResponse} from 'selenium-webdriver/http';

@Component({
  selector: "app-update-inc",
  templateUrl: "./update-inc.component.html",
  styleUrls: ["./update-inc.component.scss"]
})
export class UpdateIncComponent {
  d = new Date(Date.now()).toLocaleString();

  web3: any;
  account: string;
  ContractInstance:any;
  ABI: string= '[{"constant":true,"inputs":[{"name":"caseid","type":"uint256"}],"name":"getData","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_personid","type":"uint256"}],"name":"getCasesByPerson","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"createUniqueId","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"persons","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"incidents","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"caseid","type":"uint256"}],"name":"getCaseAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"caseid","type":"uint256"},{"name":"status","type":"uint256"},{"name":"amountOfClaim","type":"uint256"},{"name":"incidentType","type":"uint256"},{"name":"isGuilty","type":"bool"}],"name":"updateContract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_personid","type":"uint256"},{"name":"status","type":"uint256"},{"name":"amountOfClaim","type":"uint256"},{"name":"incidentType","type":"uint256"},{"name":"isGuilty","type":"bool"},{"name":"_dateOfCreation","type":"uint256"}],"name":"newIncident","outputs":[{"name":"newContract","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"uid","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]';

  constructor() {
    let urlProvider="http://localhost:8545"
    this.web3 = new Web3(new Web3.providers.HttpProvider(urlProvider));

    this.web3.eth.getAccounts((error,result)=>{
      this.account = result[0];
    });
    this.fromAddress('0xb29cb14f30d0b7011251dd11012c811eb56e2624');
  }

  fromAddress(address: string): void {
    this.ContractInstance = this.web3.eth.contract(JSON.parse(this.ABI), { from: this.account, gasPrice: 300000 }).at(address);
  }

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
    // alert('new ALERT!');
    // alert(date + " Amount: " + Amount_of_claim + " ID: " +ID +" Status: " +status +" Guilty " + guilt +" Type " + Type);

    this.ContractInstance.updateContract(date,Amount_of_claim,{
      from: this.account,
      gas: 300000,
      gasPrice: 30000000
    },(error, result) =>
    {
      //this.response ='Setting value... Your transaction hash is: ' + String(result);
    });
  }
  OnSubmit(date, ID, Amount_of_claim) {
    // alert('new ALERT!!!!!');
    // alert(date + " " + Amount_of_claim + " "  );
  }
}
