import Header from "../Header/Header";
import React, { useState } from 'react';

const InregistrarePage = () => {

  const [fintina, setFintina] = useState({
    denumire: '',
    tip: '',
    rol: '',
    adancime: '',
    nivelPoluare: '',
    locatie: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFintina((prevFintina) => ({
      ...prevFintina,
      [name]: value,
    }));
  };
  

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3001/saveFintina', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fintina),
      });

      if (response.ok) {
        console.log("tot zb");
        
      } else {
        console.log("erroare");
        
      }
    } catch (error) {
      console.error('Eroare la trimiterea datelor:', error);
    }
  };


    return (
<div className="bg-[url('/src/assets/bgimage1.png')] bg-no-repeat bg-cover w-screen h-screen flex items-center justify-center">
     <Header/>
    <div className="max-w-md mx-auto rounded p-8 bg-white  mt-10 ">
    <input type="text" placeholder="Scrieti denumirea fintinii" className="mb-4 p-2 border border-gray-300 rounded w-full"  onChange={handleChange}/>

    <label className="block text-gray-700 text-sm font-bold mb-2">De ce fel de tip este fintina</label>
    <select className="p-2 border border-gray-300 rounded w-full" onChange={handleChange}>
      <option value="" selected disabled >Select an option</option>
      <option value="" >Fintini de Apă Potabilă</option>
      <option value="" >Fintini Arteziene sau Alimentate de Izvoare</option>
      <option value="" >Fintini Tradiționale</option>
      <option value="" >Fintini pentru Irigații</option>
      <option value="" >Fintini Moderne cu Pompe</option>
      
    </select>

    <label className="block text-gray-700 text-sm font-bold mb-2">Ce rol are fintina</label>
    <select className="p-2 border border-gray-300 rounded w-full" onChange={handleChange}>
      <option value="" selected disabled>Select an option</option>
      <option value="" >Furnizarea Apei Potabile</option>
      <option value="" >Asigurarea Siguranței Alimentelor</option>
      <option value="" >Menținerea Sustenabilității</option>
      <option value="" >Diminuarea Riscului de Boli</option>
      <option value="" >Deservirea Comunităților Rurale</option>
      <option value="" >Rol Cultural și Social</option>
      <option value="" >Dezvoltarea Economică</option>
      <option value="" >Reducerea Distanțelor Parcurse pentru Apă </option>
     
    </select>

    <label className="block text-gray-700 text-sm font-bold mb-2">Ce adincime are fintina (metri) </label>
    <select className="p-2 border border-gray-300 rounded w-full" onChange={handleChange}>
      <option value="" selected disabled>Select an option</option>
      <option value="" >  10  </option>
      <option value="" > 25  </option>
      <option value="" > 50  </option>
      <option value="" > 75  </option>
      <option value="" > 100  </option>
      <option value="" > 100+  </option>
      
    </select>

    <label className="block text-gray-700 text-sm font-bold mb-2">Care este nivelul de poluare a fintinii</label>
    <select className="p-2 border border-gray-300 rounded w-full" onChange={handleChange}>
      <option value="" selected disabled>Select an option</option>
      <option value="" >Apă Curată și Sigură</option>
      <option value="" >Ușor Contaminat</option>
      <option value="" >Moderat Contaminată</option>
      <option value="" >Sever Contaminată</option>
      <option value="" >Periculos de Contaminată</option>
      
    </select>

    <input type="text" placeholder="Scrieti locatia fintinii" className="mt-4 p-2 border border-gray-300 rounded w-full"  onChange={handleChange}/>

    <button className="bg-green-500 text-white px-4 py-2 rounded-full mt-4 mx-20"  onClick={handleSubmit}  >Adauga in baza de date</button>
  </div>
    </div>
    )
}


export default InregistrarePage;