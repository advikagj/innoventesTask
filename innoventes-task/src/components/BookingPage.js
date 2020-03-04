import React from "react";
import "./css/booking.css";
// import { confirmAlert } from "react-confirm-alert";
import Minus from "./image/Minus.png";
import Plus from "./image/Plus.png";
import { Icon } from "semantic-ui-react";
// import { Icon } from 'antd';
// import Notifications, { notify } from 'react-notify-toast';
// import { Row, Col } from "reactstrap";

class BookingPage extends React.Component {

     state={
      room:1,
      adult:1,
      children:0,
      total:1,
    };
//  constructor(props){
//     super(props);
// }
//Room Count
  minusroomClick() {
     if(this.state.room > 1 ){
       this.setState({
            room : this.state.room - 1
       },()=>{
    console.log("room",this.state.room);
    })
    if(this.state.total > 4){
        if(this.state.adult < 4){
            this.setState({
                children :this.state.children -1
            })
        }
        if(this.state.adult === 4){
             this.setState({
                children :0
            })
        }    
    }
    // this.setState({
    //     room : this.state.room - 1,
    //     adult : this.state.adult - 1,
    //     children : this.state.children - 4,
    //     total:this.state.total - 4
    // },()=>{
    // console.log("room",this.state.room);
    // console.log("adult",this.state.adult);
    
    // })
  }
  }

  plusroomClick() {
  if(this.state.room < 5 ){
    this.setState({
        room : this.state.room + 1,
        adult : this.state.adult +1,
        total:this.state.total +1
    },()=>{
    console.log("room",this.state.room);
    console.log("adult",this.state.adult);
    
    })
  }
 
  }

  //Adult Count
    minusadultClick() {
//   if(this.state.adult > 1 ){
//     this.setState({
//         // room : this.state.room - 1,
//         adult : this.state.adult - 1,
//         total:this.state.total - 1
//     },()=>{

    
//     })
//   }
  }

  plusadultClick(idx) {
    if(this.state.total < 20){    
      this.setState({
        adult : idx + 1,
        total:this.state.total + 1
    },()=>{
    
    // let total =  this.state.adult + this.state.children;
  console.log("after increment",this.state.adult)
    console.log("after total",this.state.total)
   
   if(this.state.total <= 4){
      this.setState({
        room : 1,
    })    
   }else if(this.state.total  <= 8){
    this.setState({
        room : 2,
    })
   }else if(this.state.total  <=12){
    this.setState({
        room : 3,
    })
   }else if(this.state.total  <= 16){
    this.setState({
        room : 4,
    })
   }else if(this.state.total  <= 20){
    this.setState({
        room : 5,
    })
   }else{
return;
   }
 
   })
    }
  }

    //Child Count
   minuschildrenClick(roomcount) {
    if(this.state.children > 1 ){
    this.setState({
        // room : this.state.room - 1,
        children : this.state.adult - 1,
        total:this.state.total - 1
    },()=>{
    // console.log("room",this.state.room);
    // console.log("adult",this.state.adult);
    
    })
  }
  }

  pluschildrenClick() {
      if(this.state.total <= 15){
      this.setState({
          children:this.state.children+1,
          total:this.state.total+1
      },()=>{
      console.log("children",this.state.children)
      console.log("total",this.state.total)

       if(this.state.total <= 4){
      this.setState({
        room : 1,
    })    
   }else if(this.state.total  <= 8){
    this.setState({
        room : 2,
    })
   }else if(this.state.total  <=12){
    this.setState({
        room : 3,
    })
   }else if(this.state.total  <= 16){
    this.setState({
        room : 4,
    })
   }else if(this.state.total  <= 20){
    this.setState({
        room : 5,
    })
   }else{
return;
   }
   });
      }
  }

  render() {
    return (
        <div class="banner-center">
     <div className="banner">
  <div className="banner-room">
    <div className="banner-room-icon">
    <Icon className="font-icon" name="bed"/>
    </div>
    <div className="banner-room-text">
    ROOMS
    </div>
  </div>
  <div className="banner-cart">
 <img
                  src={Minus}
                  alt="minus"
                  onClick={event => this.minusroomClick(this.state.room)}
                  style={{ width: "20px", marginRight: "7px" }}
                />
             <span>{this.state.room}</span>
              <img
                src={Plus}
                alt="plus"
                onClick={event => this.plusroomClick(this.state.room)}
                style={{ width: "20px", marginLeft: "7px" }}
              />
  </div>
</div>
<div className="banner">
  <div className="banner-room">
    <div className="banner-room-icon">
    <Icon name="user"> </Icon>
    </div>
    <div className="banner-room-text">
    ADULT
    </div>
  </div>
  <div className="banner-cart">
  <img
                  src={Minus}
                  alt="minus"
                  onClick={event => this.minusadultClick()}
                  style={{ width: "20px", marginRight: "7px" }}
                />
            <span> {this.state.adult}</span>
              <img
                src={Plus}
                alt="plus"
                onClick={event => this.plusadultClick(this.state.adult)}
                style={{ width: "20px", marginLeft: "7px" }}
              />
  </div>
</div>
<div className="banner">
  <div className="banner-room">
    <div className="banner-room-icon">
    <Icon className="font-icon" name="child" />
    </div>
    <div className="banner-room-text">
    CHILDREN
    </div>
  </div>
  <div className="banner-cart">
   <img
                  src={Minus}
                  alt="minus"
                  onClick={event => this.minuschildrenClick()}
                  style={{ width: "20px", marginRight: "7px" }}
                />
               <span> {this.state.children}</span>
              <img
                src={Plus}
                alt="plus"
                onClick={event => this.pluschildrenClick()}
                style={{ width: "20px", marginLeft: "7px" }}
              />
  </div>
</div>
</div>
    );
  }
}


export default BookingPage;
