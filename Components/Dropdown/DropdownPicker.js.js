import DropDownPicker from "react-native-dropdown-picker";
import React, { useState } from "react";
const Drop = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "1 an", value: "1 an" },
    { label: "2 ans", value: "2 ans" },
    { label: "3 ans", value: "3 ans" },
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
  );
};

export default Drop;
