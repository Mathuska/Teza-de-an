import Header from "../Header/Header";
import fintina1 from "../../assets/fintina1.jpg"

const AboutPage = () => {
    return (
        <div className="bg-[url('/src/assets/bgimage1.png')] bg-no-repeat bg-cover w-screen h-screen flex items-center justify-center">
            <Header />
            <div className="flex-1 p-8">
               <p className="text-white">
                În Republica Moldova, fântânile reprezintă nu doar surse de apă potabilă, 
ci și vestigii ale istoriei și culturii locale. Împrăștiate pitorește în satele 
și orașele din această țară, fintinile moldovenești poartă în ele povești și tradiții adânc înrădăcinate.

Fântânile moldovenești sunt adesea construite cu grijă și atenție la detalii, 
reflectând arta și mestesugurile tradiționale ale locuitorilor. Mulți localnici 
consideră fântânile ca fiind adevărate opere de artă în aer liber, decorate cu motive 
tradiționale, simboluri religioase sau elemente inspirate din natură.

Fântânile din Republica Moldova nu sunt doar o sursă vitală de apă, ci și locuri 
de întâlnire pentru comunitate. În special în satele mai mici, fântânile devin puncte 
de adunare pentru vecini, unde oamenii se întâlnesc, schimbă păreri și împărtășesc povești. 
Aceste spații devin, astfel, catalizatoare ale vieții sociale și culturale locale.

Din punct de vedere istoric, multe dintre fântânile din Moldova sunt legate de 
tradiții și obiceiuri vechi. Ele au fost adesea construite în onoarea unor evenimente 
importante, ca monumente ale recunoștinței sau ca mijloace de a marca momente semnificative în viața comunității.

În concluzie, fântânile din Republica Moldova nu sunt doar surse de apă, 
ci și reprezentări vii ale identității culturale, istorice și sociale a acestei țări. 
Fiecare fântână are propria sa poveste și contribuie la bogăția patrimoniului cultural moldovenesc.
               </p>
             </div>
             <div className="flex-1 p-8">
                <img src={fintina1} alt="fintina" className="w-80 h-80 mx-auto" />
             </div>
        </div>
    );
};

export default AboutPage;