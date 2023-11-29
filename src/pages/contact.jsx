import { useState } from "react";
import Email from '@emailjs/browser';

export const Contact = () => {
  const [ email, setEmail ] = useState('');
  const [ name, setName ] = useState('');
  const [message, setMessage] = useState('');
  const [purpose, setPurpose] = useState('');
  const containerStyle = 'flex flex-col mb-5';
  const inputStyle = 'border-2 rounded-lg h-10 pl-3 outline-pink-400';
  const labelStyle = 'text-lg font-bold';

  const handleSubmit = async(e) => {
    e.preventDefault();

    if(email.length < 1 || name.length < 1 || message.length < 1 || purpose.length < 1){
      alert('Todos los campos deben de ser llenados');
      return;
    }

    const emailContent = {
      client_name: name,
      client_email: email,
      message: message,
      purpose: purpose
    };

    await Email.send(
      import.meta.env.VITE_EMAIL_SERVICE, 
      import.meta.env.VITE_TEMPLATE_ID, 
      emailContent, 
      import.meta.env.VITE_EMAIL_API
    );

    alert("Email enviado");
    setEmail('');
    setName('');
    setMessage('');
    setPurpose('');
  }

  return (
    <section className="h-screen pt-9 relative">
      <p
        className="text-center text-3xl font-bold text-violet-950"
      >
        ¿Te interesa algunos de nuestros productos?
      </p>
      <p
        className="text-center text-sm mb-10"      
      >Contactanos para obtener más información</p>

      <section className="px-2">
        <form 
          className="max-w-md mx-auto border-2 rounded-lg p-5"
          onSubmit={e => handleSubmit(e)}
        >        
          <div className={containerStyle}>
            <label 
              htmlFor="name"
              className={labelStyle}
            >
              Tu nombre
            </label>

            <input 
              className={inputStyle}
              type="text" 
              id="name" 
              name="name"
              onChange={e => setName(e.target.value)}
              value={name}
            />
          </div>

          <div className={containerStyle}>
            <label 
              htmlFor="email"
              className={labelStyle}
            >
              Tu correo
            </label>

            <input 
              className={inputStyle}
              type="email" 
              id="email" 
              name="email"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className={containerStyle}>
            <label 
              htmlFor="purpose"
              className={labelStyle}
            >
              El asunto
            </label>

            <input 
              className={inputStyle}
              type="text" 
              id="purpose" 
              name="purpose"
              onChange={e => setPurpose(e.target.value)}
              value={purpose}
            />
          </div>


          <div className={containerStyle}>
            <label 
              className={labelStyle}
              htmlFor="message"
            >
              El mensaje
            </label>

            <textarea 
              className={`${inputStyle} resize-none h-32 p-1`}
              id="message" 
              name="message"
              onChange={e => setMessage(e.target.value)}
              value={message}
            />
          </div>

          <button 
            type="button"
            className="mx-auto block h-10 mt-10 w-3/4 border-2 rounded-lg bg-violet-400 border-violet-500 text-white font-bold"
            onClick={handleSubmit}
          >
            Enviar
          </button>
        </form>
      </section>

    </section>
  );
}