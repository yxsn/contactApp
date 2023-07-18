import React from "react";

 class AddContact extends React.Component{
    render(){
        return(
            <div className = "addcontactUI">
                <h3>Add Contact</h3>
                <form className="addContactForm">
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name"/>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email"/>
                    </div>
                    <div className="field">
                        <label>Mobile</label>
                        <input type="text" name="mobile" placeholder="Mobile"/>
                    </div>
                </form>
            </div>
        )
    }
 }

 export default AddContact;