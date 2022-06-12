import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Dropdown } from 'primereact/dropdown';

const Mode = ({ tab, reset }) => {
  const [displayBasic2, setDisplayBasic2] = useState(true);
  const [selectedMilestone, setSelectedMilestone] = useState(null);

  const onMilestoneChange = (e) => {
    setSelectedMilestone(e.value);
  }

  const milestone1 = [
    { name: 'Low' },
    { name: 'Medium' },
    { name: 'Heavy' },

  ];

  const onHide = (name) => {
    reset("");
    setDisplayBasic2(false);
  };

  const renderFooter = (name) => {
    return (
      <div>
        <Button
          label="Submit"
          icon="pi pi-check"
          onClick={() => onHide(name)}
          autoFocus
        />
      </div>
    );
  };
  const title = tab.charAt(0).toUpperCase() + tab.slice(1);
  return (
    <Dialog
      header={title}
      visible={displayBasic2}
      style={{ width: "50vw" }}
      footer={renderFooter("displayBasic2")}
      onHide={() => onHide("displayBasic2")}
    >
      <div class="grid">
        <div class="col-8 col-offset-4">
          <div className="field">
            <label htmlFor="username1" className="block">
              Mode
            </label>
            <Dropdown value={selectedMilestone} options={milestone1} onChange={onMilestoneChange} variant="outlined info" optionLabel="name" placeholder="Select Mode" />

          </div>
        </div>
      </div>
      <br />
    </Dialog>
  );
};

export default Mode;