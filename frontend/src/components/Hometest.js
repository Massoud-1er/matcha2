import React, { Fragment } from "react";
import { useAlert } from "react-alert";

const NotifAlert = () => {
  const alert = useAlert();

  return (
    <Fragment>
      <button
        onClick={() => {
          alert.show("michel vous a envoyé un message !");
        }}
      >
        Notification
      </button>
    </Fragment>
  );
};

export default NotifAlert;