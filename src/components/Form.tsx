import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';


function FormMail(): JSX.Element {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();


  const templateParams = {
    from_name: name,
    message: message,
    email: email
  }  

  emailjs.send("service_2109acd", "template_ssedsrh", templateParams, "Vq82VSkvaMXKZ-BH4")
  .then((response) => {
    console.log("EMAIL ENVIADO",response.status, response.text)
    setName('')
    setEmail('')
    setMessage('')
  }, (err) => {
    console.log("ERRO: ", err)
  })

};

  return (
    <div className="container" id='contato' style={{fontFamily:'Playfair Display, serif' }}>
      <h1 className="title">Contato</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <input
          className="input"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea
          className="textarea"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <input className="button" type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default FormMail;
