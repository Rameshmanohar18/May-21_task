import React, { useState } from "react";

function Child({ onSendMessage }) {
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedMessage = message.trim();
    if (!trimmedMessage) return;

    onSendMessage(trimmedMessage);
    setMessage("");
  };

  return React.createElement(
    "form",
    { onSubmit: handleSubmit },
    React.createElement("input", {
      type: "text",
      value: message,
      placeholder: "Type a message",
      onChange: (event) => setMessage(event.target.value),
    }),
    React.createElement("button", { type: "submit" }, "Send")
  );
}

function ChildParentPage() {
  const [parentMessage, setParentMessage] = useState("No message received yet");

  const handleChildMessage = (message) => {
    setParentMessage(message);
  };

  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Child to Parent Communication"),
    React.createElement(Child, { onSendMessage: handleChildMessage }),
    React.createElement("p", null, `Parent received: ${parentMessage}`)
  );
}

export default ChildParentPage;
