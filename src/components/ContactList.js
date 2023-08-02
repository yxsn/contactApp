import React from 'react';

const ContactList = (props) =>{
    console.log(props); 

    const renderContactList = props.contacts.map((contact)=>{
        return(
            <div className="item">
                <div className="content">
                    <div className="header">{contact.name}</div>
                    <div>{contact.email}</div>
                    <div>{contact.mobile}</div>
                </div>
                <i className="trashIcon"></i>
            </div>
        );
    })
    return(
        <div className="celledList">
            <h3>Contact List</h3>
            {renderContactList}
        </div>
    );
};

export default ContactList;