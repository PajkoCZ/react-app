import "./userComp.css";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

import { useState } from "react";
import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";

const UsersComp = () => {

    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });

    const data = [
        {
            id: 1,
            name: "John",
            age: 25,
            city: "New York",
        },
        {
            id: 2,
            name: "Pavel",
            age: 20,
            city: "Ostrava",
        },
        {
            id: 3,
            name: "Sára",
            age: 12,
            city: "Praha",
        },
        {
            id: 4,
            name: "Alena",
            age: 56,
            city: "Sydney",
        },
        {
            id: 5,
            name: "Alois",
            age: 32,
            city: "Olomouc",
        },
        {
            id: 6,
            name: "Josef",
            age: 10,
            city: "Bratislava",
        },
    ];

    return (
        <div className="subcontent">
            <h1>Uživatelé</h1>

            <InputText
                onInput={(e) =>
                    setFilters({
                        global: { value: e.target.value, matchMode: FilterMatchMode.CONTAINS },
                    })
                }
                placeholder="Hledat" className="user-search"
            />

            <DataTable value={data} filters={filters}
                paginator rows={3} rowsPerPageOptions={[1,2,3]} totalRecords={3}>
                <Column field="id" header="ID" sortable />
                <Column field="name" header="Name" sortable />
                <Column field="age" header="Age" sortable />
                <Column field="city" header="City" sortable />
            </DataTable>
        </div>
    )
}

export default UsersComp;