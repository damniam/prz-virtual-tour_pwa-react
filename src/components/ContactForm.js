import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Form = styled.form`
  display: grid;
  grid-column: 1;
  max-width: 100%;
`;

const StyledTextarea = styled.textarea`
  font-size: 1rem;
  line-height: 28px;
  padding: 8px 16px;
  margin-bottom: 16px;
  max-width: 90%;
  min-height: 44px;
  border: unset;
  border-radius: 4px;
  outline-color: rgb(44 105 212 / 0.5);
  background-color: rgb(255, 255, 255);
  font-family: Roboto, "Helvetica";
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.16) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px;
`;

const StyledButton = styled.button`
  background: var(--clr-primary-1);
  color: var(--clr-white);
  padding: 1rem;
  display: inline-block;
  font-weight: 700;
  transition: var(--transition);
  font-size: 0.875rem;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  border-color: transparent;
`;

const StyledLabel = styled.label`
  /* text-lg text-gray-200 */
  font-weight: bold;
`;
const ContactForm = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        fullname: "",
        email: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/myylevpl",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          "Dziękujemy, Twoja wiadomość została wysłana."
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <main className="py-2 text-left">
      <form onSubmit={handleOnSubmit}>
        <Form>
          <StyledLabel htmlFor="fullname">
            Imię i Nazwisko*
          </StyledLabel>
          <input
            id="fullname"
            type="text"
            name="fullname"
            onChange={handleOnChange}
            required
            value={inputs.fullname}
            placeholder="Jan Nowak"
          />
          <StyledLabel htmlFor="email">
            Email*
          </StyledLabel>
          <input
            id="email"
            type="email"
            name="_replyto"
            onChange={handleOnChange}
            required
            value={inputs.email}
            placeholder="email@domain.com"
           
          />
         
          <StyledLabel htmlFor="message">
            Wiadomość*
          </StyledLabel>
          <StyledTextarea
            id="message"
            name="message"
            onChange={handleOnChange}
            required
            value={inputs.message}
            placeholder="Treść wiadomości tutaj..."
           
          />
          <div className="pt-12 text-center md:text-right">
            <StyledButton
              type="submit"
              disabled={status.submitting}

            >
              {!status.submitting
                ? !status.submitted
                  ? "Wyślij"
                  : "Wyslano"
                : "Wysyłanie..."}
            </StyledButton>
          </div>
        </Form>
      </form>
      {status.info.error && (
        <div className="error text-bold text-gray-50 text-lg">
          Wystąpił błąd podczas wysyłania. Spróbuj ponownie później. 
        </div>
      )}
      {!status.info.error && status.info.msg && (
        <p className="py-4 text-sm text-gray-400">{status.info.msg}</p>
      )}
    </main>
  );
};

export default ContactForm;
