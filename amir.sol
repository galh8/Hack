pragma solidity ^0.4.8;

contract ContractManager {


  mapping (uint => uint[]) public persons;
  mapping (uint => Incident) public in
  
  
  
  cidents;

  uint public uid;
    

  // deploy a new contract

  function newIncident(uint _personid, uint status,uint amountOfClaim,uint incidentType,bool isGuilty, uint _dateOfCreation)
    returns(address newContract)
	{
    uint caseid = createUniqueId();
    incidents[caseid] = new Incident(_personid, msg.sender, status,amountOfClaim,incidentType,isGuilty, _dateOfCreation);
    persons[_personid].push(caseid);
    return incidents[caseid];
	}
	
    function getCasesByPerson(uint _personid) constant returns(uint[]) {
      return persons[_personid];
    }
  
    function createUniqueId() public returns(uint) {
        return uid++;
    }
    function getCaseAddress(uint caseid) constant returns(address) {
        return incidents[caseid];
    }

    function getData(uint caseid) constant returns(uint,uint,uint,bool) {
        return incidents[caseid].getData();
    }
    
    function updateContract(uint caseid, uint status,uint amountOfClaim,uint incidentType,bool isGuilty) {
        incidents[caseid].setData(status,amountOfClaim,incidentType,isGuilty);
    }
}


contract Incident {
    uint _personId;
    uint256 _dateOfCreation;
    address _companyId;
    uint _status;
    uint _amountOfClaim;
    uint _incidentType;
    bool _isGuilty;
    
    function Incident(uint personid,address companyId ,uint status,uint amountOfClaim,uint incidentType,bool isGuilty, uint dateOfCreation){
        _personId = personid;
        _dateOfCreation = dateOfCreation;
        _companyId = companyId;
        _status = status;
        _amountOfClaim=amountOfClaim;
        _incidentType =incidentType;
        _isGuilty = isGuilty;
    }
    
    function getPersonId() public constant returns (uint personId){
        personId = _personId;
    }
    
    
    function getDateOfCreation() public constant returns (uint256 dateOfCreation){
        dateOfCreation = _dateOfCreation;
    }
    
    function getCompanyId() public constant returns (address companyId){
        companyId = _companyId;
    }
    function getData() public constant returns (uint status_,uint amount_,uint incType_,bool guilty_){
       status_ = _status ;
       amount_ = _amountOfClaim;
       incType_ = _incidentType;
       guilty_ = _isGuilty ;
    }
    
    function setData(uint status_,uint amount_,uint incType_,bool guilty_){
        _status = status_;
        _amountOfClaim = amount_;
        _incidentType = incType_;
        _isGuilty = guilty_;
    }

    
}
