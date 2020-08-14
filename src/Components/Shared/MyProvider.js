import React, { useState } from "react";

export const MyContext = React.createContext();

export default function MyProvider(props) {
  const [id, setId] = useState()
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toggleValue, setToggleValue] = useState(false);

  function handleIdChange(e) {
    setId(e.target.value);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handlePhoneNumberChange(e) {
    setPhoneNumber(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }


  function updateUserDetails() {
    fetch(
      'https://localhost:44322/api/windowmonitorcustomerdetails/' + id,
      {
        method: "PUT",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phoneNumber: phoneNumber
        })
      }
    )
      .catch(

      );
  }

  return (
    <MyContext.Provider value={{
      id: id,
      setId: setId,
      handleIdChange: handleIdChange,
      name: name,
      setName: setName,
      handleNameChange: handleNameChange,
      phoneNumber: phoneNumber,
      setPhoneNumber: setPhoneNumber,
      handlePhoneNumberChange: handlePhoneNumberChange,
      email: email,
      setEmail: setEmail,
      handleEmailChange: handleEmailChange,
      password: password,
      setPassword: setPassword,
      handlePasswordChange: handlePasswordChange,
      toggleValue: toggleValue,
      setToggleValue: setToggleValue,
      updateUserDetails: updateUserDetails
    }}>
      {props.children}
    </MyContext.Provider>
  )
}