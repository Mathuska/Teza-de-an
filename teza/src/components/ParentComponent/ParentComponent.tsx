
// import React, { useState } from 'react';
// import InregistrarePage from '../Inregistrarea/InregistrareaPage';
// import WellList from '../ListOfWell/WellListPage';

// interface FintinaData {
//     denumire: string;
//     tip: string;
//     rol: string;
//     adancime: string;
//     nivelPoluare: string;
//     locatie: string;
//   }

// const ParentComponent: React.FC = () => {
//     const [fintinaList, setFintinaList] = useState<FintinaData[]>([]);

//     const adaugaFintinaInLista = (fintina: FintinaData) => {
//       setFintinaList((prevList) => [...prevList, fintina]);
//     };

//   return (
//     <div>
//      <InregistrarePage adaugaFintina={adaugaFintinaInLista} />
//       <WellList fintinaList={fintinaList} />
//     </div>
//   );
// };

// export default ParentComponent;
