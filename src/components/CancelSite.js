import React,{useEffect, useState} from "react";
import UserService from "../services/user_service";
import { Table } from "react-bootstrap";

const CancelSite =() =>{

    const [bookingData, setBookingData]= useState([]);

    let dateOfTransaction;
    let slot;

    useEffect(()=>{

        UserService.getBooking().then(
            (response)=>{
                console.log(response);
                setBookingData(response.data);
    
            },(error)=>{
                console.log(error);
            }
        );

    },[]);
   
    
   

        const cancelBooking=()=>{

            // alert("clicked!");

            UserService.cancelBooking(dateOfTransaction,slot).then(
                (response)=>{
                    console.log(response);
                    
        
                },(error)=>{
                    console.log(error);
                }
            );
    
            }


    
   
  

     
    

    


       
   
    
    
    return <div>
        <div className="jumbotron">
          <strong>Cancel Last Booking</strong>  

            </div> 
          <Table responsive stripped="true" size="small">
            <thead>
                <tr>
                 
                    <th>Date Selected</th>
                    <th>Place Selected</th>
                    <th>Slot Selected</th>
                    <th>Cancel</th>

                </tr>
            </thead>
            <tbody>
               
                    
                    
                        <tr>
                            
                            <td>{bookingData.date}</td>
                            <td>{bookingData.place}</td>
                            <td>{bookingData.slot}</td>
                            <td><button onClick={()=>cancelBooking(bookingData.date,bookingData.slot)} className='btn btn-primary'>Cancel</button></td>

                            {/*  */} 
                        </tr>
                       
              
            </tbody>
            </Table>

            {/* onClick={cancelBooking(bookingData.date,bookingData.slot)} */}
        {/* <button onClick={CancelHelper}>Get Data</button> */}
      
    </div>
}

export default CancelSite;