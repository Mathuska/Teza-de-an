import Header from "../Header/Header";

// interface FintinaData {
//   denumire: string;
//   tip: string;
//   rol: string;
//   adancime: string;
//   nivelPoluare: string;
//   locatie: string;
// }


const WellListPage = () => {
  
return (
    <div className="bg-[url('/src/assets/bgimage1.png')] bg-no-repeat bg-cover w-screen h-screen flex items-center justify-center">
    <Header />
    <div>
    <table className=" my-6 text-sm font-sans min-w-min overflow-hidden shadow-md">
    <thead className="bg-brun text-white font-bold">
  <tr>
    <th className="p-4">Nr.</th>
    <th className="p-4">Denumire Fintina</th>
    <th className="p-4">Tipul</th>
    <th className="p-4">Rolul</th>
    <th className="p-4">Adancime</th>
    <th className="p-4">Nivelul de poluare</th>
    <th className="p-4">Locatia</th>
  </tr>
</thead>
  <tbody>
 
  </tbody>
</table>

    </div>
</div>
)
};

export default WellListPage ;