import React, { useState, useEffect } from "react";

const Alert = ({ status }) => {
  const [alertClass, setAlertClass] = useState(null);
  const [alert, setAlert] = useState("");

  useEffect(() => {
    if (status === "success") {
      setAlertClass("alert-success");
      setAlert("item added to list!");
    } else if (status === "edited") {
      setAlertClass("alert-success");
      setAlert("item has been updated");
    } else if (status === "cleared") {
      setAlertClass("alert-success");
      setAlert("list has been cleared");
    } else if (status === "danger") {
      setAlertClass("alert-danger");
      setAlert("please enter an item");
    } else {
      setAlertClass("alert-duplicate");
      setAlert("this item is already on the list");
    }
  }, [status]);

  return <p className={`alert ${alertClass}`}>{alert}</p>;
};

export default Alert;
