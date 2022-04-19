import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

// Creating a new recipe...

export default class SupplierRegistration extends Component {

  constructor(props){
    super(props);
    this.state={
        SupplierName:"",
        NIC:"",
        Address:"",
        MobileNumber:"",
        Email:"",
        Item:"",
        newDate:"",
        Remark:""
    }
  }

  handleInputChange = (e) =>{
    const {name,value} = e.target;

    this.setState({
      ...this.state,
      [name]:value
    })

  }

  onSubmit = (e) =>{

    e.preventDefault();

    const {SupplierName,NIC,Address,MobileNumber,Email,Item,newDate,Remark} = this.state;

    const data ={
        SupplierName:SupplierName,
        NIC:NIC,
        Address:Address,
        MobileNumber:MobileNumber,
        Email:Email,
        Item:Item,
        newDate:newDate,
        Remark:Remark
    }

    console.log(data)

    // Validation 

    const cuem = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if(SupplierName.length === 0 || NIC.length === 0 || Address.length === 0 || MobileNumber.length === 0 || Email.length === 0 || Item.length === 0 || newDate.length === 0  ){
      swal(" Fields Cannot empty !","Please enter all data !", "error");
    }else if(SupplierName.length < 4 ){
      swal("Invalid Supplier Name !", "Length shuld be greater than 4 !", "error");
    }else if(NIC.length < 9 ){
      swal("Invalid NIC Number !", "Length shuld be greater than 9 !", "error");
    }else if(Address.length < 4 ){
      swal("Invalid Address !", "Length shuld be greater than 4 !", "error");
    }else if ((!cuem.test(String(Email)))) {
      swal("Invalid email address !", "Please enter valid email address", "error");
    }else if(Item.length < 4 ){
      swal("Invalid Item !", "Length shuld be greater than 4 !", "error");
    }else if(Remark.length < 4 ){
      swal("Invalid Remark !", "Length shuld be greater than 4 !", "error");
    }
    else{

    axios.post("/SupplierRegistration/save",data).then((res) =>{
      if(res.data.success){
        this.setState(
          {
            SupplierName:"",
            NIC:"",
            Address:"",
            MobileNumber:"",
            Email:"",
            Item:"",
            newDate:"",
            Remark:""
          }
        )
      }
    });
    swal({ text: "Legal Case Type Successfully Added", icon: "success", button: "Okay!"})
  .then((value) => {
      window.location = '/'; // ListSupplierRegistration
  });}
  }   
  render() {
    return (
    <div>
      
      <div className style={{ backgroundImage: 'url("https://wallpapercave.com/wp/QGj5HZS.jpg")', backgroundSize: 'cover'}}> <br/>
        <div className="col-md-8 mt-4 mx-auto">
          <h1 className="text-center" > <font face = "Comic sans MS" size ="6" > Supplier Registration </font> </h1> 
          <br/>
          <form className="needs-validation" noValidate style={{backgroundColor: "#e0f6fc"}}>
          <br/><br/>

          <div class="form-group" style={{marginLeft:"100px", marginRight:"100px"}} >
              <label><strong>Supplier Name :</strong></label>
              <input type="text"
              className="form-control"
              name="SupplierName" 
              placeholder="Enter Supplier Name"
              value={this.state.SupplierName}
              onChange={this.handleInputChange} 
              style={{backgroundColor: "#e0f6fc", marginTop:"10px",}} />
          </div><br/>

          <div class="form-group" style={{marginLeft:"100px", marginRight:"100px"}} >
              <label><strong>NIC :</strong></label>
              <input type="text"
              className="form-control"
              name="NIC" 
              placeholder="Enter NIC Number"
              value={this.state.NIC}
              onChange={this.handleInputChange} 
              style={{backgroundColor: "#e0f6fc", marginTop:"10px",}} />
          </div><br/>

          <div class="form-group" style={{marginLeft:"100px", marginRight:"100px"}} >
              <label><strong>Address :</strong></label>
              <input type="text"
              className="form-control"
              name="Address" 
              placeholder="Enter Address"
              value={this.state.Address}
              onChange={this.handleInputChange} 
              style={{backgroundColor: "#e0f6fc", marginTop:"10px",}} />
          </div><br/>

          <div class="form-group" style={{marginLeft:"100px", marginRight:"100px"}} >
              <label><strong>Mobile Number :</strong></label>
              <input type="text"
              className="form-control"
              name="MobileNumber" 
              maxlength = "10"
              placeholder="Enter Mobile Number"
              value={this.state.MobileNumber}
              onChange={this.handleInputChange} 
              style={{backgroundColor: "#e0f6fc", marginTop:"10px",}} />
          </div><br/>

          <div class="form-group" style={{marginLeft:"100px", marginRight:"100px"}} >
              <label><strong>Email :</strong></label>
              <input type="text"
              className="form-control"
              name="Email" 
              placeholder="Enter Email"
              value={this.state.Email}
              onChange={this.handleInputChange} 
              style={{backgroundColor: "#e0f6fc", marginTop:"10px",}} />
          </div><br/>

          <div class="form-group" style={{marginLeft:"100px", marginRight:"100px"}} >
              <label><strong>Item :</strong></label>
              <input type="text"
              className="form-control"
              name="Item" 
              placeholder="Enter Item"
              value={this.state.Item}
              onChange={this.handleInputChange} 
              style={{backgroundColor: "#e0f6fc", marginTop:"10px",}} />
          </div><br/>

          <div class="form-group" style={{marginLeft:"100px", marginRight:"100px"}} >
              <label><strong>Date :</strong></label>
              <input type="text"
              className="form-control"
              name="newDate" 
              placeholder="Date"
              value={this.state.newDate}
              onChange={this.handleInputChange} 
              style={{backgroundColor: "#e0f6fc", marginTop:"10px",}} />
          </div><br/>

          <div class="form-group" style={{marginLeft:"100px", marginRight:"100px"}} >
              <label><strong>Remark :</strong></label>
              <input type="text"
              className="form-control"
              name="Remark" 
              placeholder="Remark"
              value={this.state.Remark}
              onChange={this.handleInputChange} 
              style={{backgroundColor: "#e0f6fc", marginTop:"10px",}} />
          </div><br/>

          


          <div className="text-center" > 
          <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
              <i className="far fa-check-square"></i>
              &nbsp; Save
            </button>&nbsp;
          <a href="/"><button type="button" style={{marginTop:'15px'}} onClick={this.onClick} class="btn btn-warning"><i class="fa fa-close"></i>&nbsp;Cancel</button></a>
          {/* ListSupplierRegistration */}
          </div>
          <br/>
            
          </form>
          <br/>
          </div>
        </div>
        </div>
    )
   }
}


