import React from 'react'
import SupplierComp from '../ExtraComponent/SupplierComp';
import AdminPanel from '../ExtraComponent/AdminPanel';

export default function JSExample6() {
    
    const userRole='Admin';

        switch(userRole)
        {
            case "Admin":
            return <AdminPanel/>;

            case "Supplier":
            return <SupplierComp/>
        }

    return (
    <div>JSExample6</div>
  )
}
