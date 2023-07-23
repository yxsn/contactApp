import React from "react";

 class AddContact extends React.Component{
    render(){
        return(
            <div className = "addcontactUI">
                <h3>Add Contact</h3>
                <form className="addContactForm">
                    <div className="field">
                        <label>Name</label>
                        <input type="text" id="contactInput" name="name" placeholder="Name"/>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" id="contactInput" name="email" placeholder="Email"/>
                    </div>
                    <div className="field">
                        <label>Mobile</label>
                        <input type="text" id="contactInput" name="mobile" placeholder="Mobile"/>
                    </div>
                    <button className="addContactButton"><b>Add</b></button>
                </form>
            </div>
        )
    }
 }

 export default AddContact;