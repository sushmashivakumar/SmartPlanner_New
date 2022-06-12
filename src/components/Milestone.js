import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ProductService } from "../service/ProductService";
import { Dialog } from "primereact/dialog";
import { Calendar } from "primereact/calendar";
import "./DataTableDemo.css";


const Milestone = ({ tab, reset }) => {
  const [products, setProducts] = useState([]);
  const [displayBasic2, setDisplayBasic2] = useState(true);
  const [milestoneEdit,setMilestoneEdit] = useState(false)
  const [milestoneDate, setMilestoneDate] = useState({})
  const productService = new ProductService();
  const onHide = (name) => {
    reset(-1);
    setDisplayBasic2(false);
  };
  const renderFooter = (name) => {
    return (
      <div>
        <Button
          label="Submit"
          className="p-button-rounded p-button-outlined mb-2"
          style={{ color: "grey" }}
          icon="pi pi-check"
          onClick={() => onHide(name)}
          autoFocus
        />
      </div>
    );
  };

  useEffect(() => {
    productService.getProductsSmall().then((data) => {
      setProducts(data);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const dateTemplate = (rowData) => {
    return (
      <div className="field col-12 md:col-6">
        <Calendar
          id="icon"
          // className="p-button-rounded p-button-outlined mb-2"
          value={milestoneDate[rowData.milestone] || null}
          onChange={(e) => { 
            setMilestoneDate({...milestoneDate, [rowData.milestone]: e.value})
          }
          }
          showIcon
          {...!milestoneEdit ? { disabled : true} : {} }
        />
      </div>
    );
  };

  if (!products.length) {
    return null;
  }

  return (
    <Dialog
      visible={displayBasic2}
      style={{ width: "40vw" }}
      footer={renderFooter("displayBasic2")}
      onHide={() => onHide("displayBasic2")}
    >
      <div className="datatable-templating-demo">
        <div style={{margin: '0.35em',display: 'flex',justifyContent: 'flex-end'}}>       
        {milestoneEdit ? (
            <Button
            className="p-button-rounded p-button-outlined mb-2"
              icon="pi pi-times"
              style={{ color: "grey" }}
              onClick={() => setMilestoneEdit(false)}
            />
          ) : (
            <Button
              label="Edit"
              className="p-button-rounded p-button-outlined mb-2"
              icon="pi pi-user-edit"
              style={{ color: "grey" }}
              onClick={() => setMilestoneEdit(true)}
            />
          )}
        </div>
 
        <div className="card">
          <DataTable
            value={products}
            responsiveLayout="scroll"
            className="datatable-milestone"
          >
            <Column field="milestone" header="Milestone"></Column>
            <Column header="Date" body={dateTemplate}></Column>
          </DataTable>
        </div>
      </div>
    </Dialog>
  );
};
export default Milestone;