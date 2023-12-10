import { Github , Facebook, MailOpen, AtSign} from 'lucide-react';
import Header from '../Header/Header';

const ContactPage = () => {
  
  return (
    <div className="bg-[url('/src/assets/bgimage1.png')] bg-no-repeat bg-cover w-screen h-screen flex items-center justify-center">
      <Header />
<div className="mt-12 flex space-x-16">
        <a href='https://github.com/Mathuska' > <Github size={80} color="#000000" strokeWidth={2.5} /></a>
        <a href='https://www.facebook.com/maxim.cosarca.5/'><Facebook size={80} color="#000000" strokeWidth={2.5} /></a>
        <a href='https://outlook.office365.com/mail/'><MailOpen size={80} color="#000000" strokeWidth={2.5} /></a>
  <a href='https://mail.google.com/mail/u/0/#inbox'><AtSign size={80} color="#000000" strokeWidth={2.5} /></a>
      </div> 
    </div>
  );
};

export default ContactPage;
