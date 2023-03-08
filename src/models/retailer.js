export default class User{
    constructor(username, password,fullName,  contactNumber, email,alternateMobNumber,address, token, id) {
       
        this.fullName = fullName;
        this.username = username;
        this.password = password;
        this.contactNumber = contactNumber;
        this.email = email;
        this.alternateMobNumber = alternateMobNumber;
        this.address = null;
        this.token = token;
        this.address = address;
        this.id = id;
    }

    setAddr(newAddress) {
        this.address = {...this.address, ...newAddress}
      }
    
      
  }

