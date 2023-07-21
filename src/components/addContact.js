import React from "react";

 class AddContact extends React.Component{
    render(){
        return(
            <div className = "addcontactUI">
                <h3>Add Contact</h3>
                <form className="addContactForm">
                    <div className="field">
                        <label>Name</label>
                        <div className="namelInput"><input type="text" name="name" placeholder="Name"/></div> 
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <div className="emailInput"><input type="text" name="email" placeholder="Email"/></div>
                    </div>
                    <div className="field">
                        <label>Mobile</label>
                        <div className="mobilelInput"><input type="text" name="mobile" placeholder="Mobile"/></div>
                    </div>
                </form>
            </div>
        )
    }
 }

 export default AddContact;