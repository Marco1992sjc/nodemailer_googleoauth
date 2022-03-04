import React, {useState} from "react";


const Contact = () => {


    const [status, setStatus] = useState("Enviar");
    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus("Enviando...");
      const { name, email, message } = e.target.elements;
      let details = {
        name: name.value,
        email: email.value,
        message: message.value,
      };
      let response = await fetch("/api/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
  
        body: JSON.stringify(details),
      });
      setStatus("Enviado!!");
  

      let result = await response.json();
      alert(result.status);
    };
    return (
        <div className="block">
      <form onSubmit={handleSubmit} >
        <div>
          <label htmlFor="name" id="labeltext">Nome:</label>
          <input type="text" id="name" required placeholder="Seu nome.." />
        </div>
        <div>
          <label htmlFor="email" id="labeltext">Email:</label>
          <input type="email" id="email" required placeholder="Seu Email.."/>
        </div>
        <div>
          <label htmlFor="message" id="labeltext">Mensagem:</label>
          <textarea id="message" required  style={{height: "130px"}} placeholder="Digite sua mensagem aqui.."/>
        </div>
        <button type="submit">{status}</button>
      </form>
      </div>
    );
  };
  export default Contact;