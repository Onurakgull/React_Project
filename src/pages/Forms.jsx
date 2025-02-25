import React from 'react'
import RegisterForm from "../component/RegisterForm";
import UserTable from "../component/UserTable";
import './Css/forms.css'

const Forms = () => {
    return (
        <div className="form-system">
            <RegisterForm />
            <UserTable />
        </div>
    )
};

export default Forms;
