import Button from '../components/Button';
import Header from '../components/Header';

export default function Contact() {
  return (
    <div className='font-roboto'>
      <Header />
      <main className='px-[20px] py-[60px]'>
        <h1 className="font-semibold text-size-[4rem]">Entre em Contato</h1>
        <p className='mt-[20px]'>Somos uma equipe de desenvolvimento em TI, freelancing e soluções tecnológicas.</p>
        <form
          action="https://formspree.io/f/xanoqdbq"
          method="POST"
          className="space-y-4 max-w-xl mx-auto text-center mt-8"
        >
          <input
            type="text"
            name="name"
            placeholder="Seu nome"
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            required
            className="w-full p-2 border rounded"
          />
          <textarea
            name="message"
            placeholder="Sua mensagem"
            required
            className="w-full p-2 border rounded"
          ></textarea>
          <Button text="Enviar" resize={false} />
        </form>
      </main>
    </div>
  );
}

/* This is the Contact component that includes a contact form for users to send messages.
export default function Contact() {
  return (
    <div className='font-roboto'>
      <Header />
      <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-8">
        <h1 className="text-3xl font-semibold mb-4">Entre em Contato</h1>
        <form
          action="https://formspree.io/f/your-form-id"
          method="POST"
          className="space-y-4 max-w-xl"
        >
          <input
            type="text"
            name="name"
            placeholder="Seu nome"
            required
            className="w-full p-2 border rounded dark:bg-gray-800"
          />
          <input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            required
            className="w-full p-2 border rounded dark:bg-gray-800"
          />
          <textarea
            name="message"
            placeholder="Sua mensagem"
            required
            className="w-full p-2 border rounded dark:bg-gray-800"
          ></textarea>
          <button
            type="submit"
            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          >
            Enviar
          </button>
        </form>
      </main>
    <div/>
  );
}
  */