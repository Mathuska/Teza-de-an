import { Link } from 'react-router-dom';

const FirstContent = () => {
  return (
    <div className="bg-[url('/src/assets/bgimage1.png')] bg-no-repeat bg-cover w-screen h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-white">-Moldovan Water Well-</h1>
        <h1 className="text-2xl text-white p-12">Cea mai bună sursă de apă</h1>
        <Link to="/about">
          <button className="px-4 py-2 mt-4 bg-brun1 w-52 h-16 rounded-3xl text-3xl font-bold">About</button>
        </Link>
      </div>
    </div>
  );
};

export default FirstContent;


