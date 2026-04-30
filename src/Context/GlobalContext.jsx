
import { createContext, useState } from "react";

// GlobalContext
// Purpose: provide application-wide trips data and setter via Context API.
// Data shape: array of trip objects { id, destination, image, start_date, end_date, travelers[] }
// Usage: wrap app with <GlobalProvider> to expose `data` and `setData`.
const GlobalContext = createContext();

export function GlobalProvider({ children }) {

    const [ data, setData ] = useState ([
  {
    id: 1,
    destination: "Tokyo",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop",
    start_date: "2026-04-10",
    end_date: "2026-04-18",
    travelers: [
      { name: "Mario", surname: "Rossi", cf: "RSSMRA80A01H501U", email: "mario.rossi@email.it", number: "+393311234567" },
      { name: "Giulia", surname: "Bianchi", cf: "BNCGLI92R41F205Z", email: "giulia.bianchi@email.it", number: "+393359876543" },
      { name: "Luca", surname: "Verdi", cf: "VRDLCU85M10L219H", email: "luca.verdi@email.it", number: "+393405551234" },
      { name: "Elena", surname: "Neri", cf: "NRELNE88S52F205W", email: "elena.neri@email.it", number: "+393427894321" },
      { name: "Marco", surname: "Gialli", cf: "GLLMRC75T20H501I", email: "marco.gialli@email.it", number: "+393334567890" },
      { name: "Sara", surname: "Viola", cf: "VLISRA95P45L219B", email: "sara.viola@email.it", number: "+393281239876" }
    ]
  },
  {
    id: 2,
    destination: "Parigi",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop",
    start_date: "2026-05-15",
    end_date: "2026-05-20",
    travelers: [
      { name: "Paolo", surname: "Bruni", cf: "BRNPLA82A14H501C", email: "paolo.bruni@email.it", number: "+393201112222" },
      { name: "Chiara", surname: "Rizzo", cf: "RZZCHR90T60F205X", email: "chiara.rizzo@email.it", number: "+393345556666" },
      { name: "Stefano", surname: "Moro", cf: "MROSTF84D12L219O", email: "stefano.moro@email.it", number: "+393477778888" },
      { name: "Francesca", surname: "Gallo", cf: "GLLFNC93B42H501F", email: "f.gallo@email.it", number: "+393299990000" },
      { name: "Alessandro", surname: "Ferri", cf: "FRRLSN81M05L219S", email: "a.ferri@email.it", number: "+393383334444" },
      { name: "Marta", surname: "Longhi", cf: "LNGMRT87E44H501Y", email: "marta.longhi@email.it", number: "+393415556666" },
      { name: "Roberto", surname: "Santi", cf: "SNTRBT72B11L219K", email: "r.santi@email.it", number: "+393221112222" }
    ]
  },
  {
    id: 3,
    destination: "New York",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop",
    start_date: "2026-06-01",
    end_date: "2026-06-10",
    travelers: [
      { name: "Anna", surname: "D'Amico", cf: "DMCNNA89S52H501X", email: "anna.damico@email.it", number: "+393307778888" },
      { name: "Fabio", surname: "Riva", cf: "RVIFBA77L15L219J", email: "fabio.riva@email.it", number: "+393369991111" },
      { name: "Silvia", surname: "Ponti", cf: "PNTSLV91R42F205K", email: "silvia.ponti@email.it", number: "+393443334444" },
      { name: "Davide", surname: "Costa", cf: "CSTDVD83M20H501L", email: "davide.costa@email.it", number: "+393215556666" },
      { name: "Valentina", surname: "Gatti", cf: "GTTVNT94P45L219Q", email: "v.gatti@email.it", number: "+393397778888" },
      { name: "Simone", surname: "Galli", cf: "GLLSMN86A01F205M", email: "simone.galli@email.it", number: "+393321112222" },
      { name: "Laura", surname: "Vitali", cf: "VTLLRA78T60H501R", email: "laura.vitali@email.it", number: "+393379990000" },
      { name: "Federico", surname: "Fabbri", cf: "FBBFRC82B14L219N", email: "f.fabbri@email.it", number: "+393435556666" }
    ]
  },
  {
    id: 4,
    destination: "Barcellona",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop",
    start_date: "2026-07-12",
    end_date: "2026-07-18",
    travelers: [
      { name: "Giorgia", surname: "Martini", cf: "MRTGRG96E44F205P", email: "g.martini@email.it", number: "+393258889999" },
      { name: "Claudio", surname: "Russo", cf: "RSSCLD70T20H501B", email: "claudio.russo@email.it", number: "+393314445555" },
      { name: "Alice", surname: "Marini", cf: "MRNLCA92P45L219Z", email: "alice.marini@email.it", number: "+393466667777" },
      { name: "Matteo", surname: "Parisi", cf: "PRSMTT85M10H501V", email: "matteo.parisi@email.it", number: "+393481112222" },
      { name: "Sofia", surname: "De Luca", cf: "DLCSFO98R41L219Y", email: "sofia.deluca@email.it", number: "+393243334444" },
      { name: "Andrea", surname: "Fontana", cf: "FNTNDR81A01F205W", email: "andrea.fontana@email.it", number: "+393505556666" }
    ]
  },
  {
    id: 5,
    destination: "Londra",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop",
    start_date: "2026-08-05",
    end_date: "2026-08-11",
    travelers: [
      { name: "Lorenzo", surname: "Serra", cf: "SRRLNZ88S15H501P", email: "l.serra@email.it", number: "+393277778888" },
      { name: "Erica", surname: "Moretti", cf: "MRTRCE93B42L219I", email: "erica.more@email.it", number: "+393339990000" },
      { name: "Giovanni", surname: "Grassi", cf: "GRSGNN75A01F205E", email: "g.grassi@email.it", number: "+393455556666" },
      { name: "Beatrice", surname: "Lombardi", cf: "LMBBRC90T60H501K", email: "b.lombardi@email.it", number: "+393491112222" },
      { name: "Daniele", surname: "Caruso", cf: "CRSDNL84M10L219T", email: "daniele.caruso@email.it", number: "+393233334444" },
      { name: "Ilaria", surname: "Pellegrini", cf: "PLLLRI95P45F205U", email: "i.pellegrini@email.it", number: "+393515556666" },
      { name: "Valerio", surname: "Mariani", cf: "MRNVLR82D12H501J", email: "v.mariani@email.it", number: "+393267778888" }
    ]
  },
  {
    id: 6,
    destination: "Reykjavik",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop",
    start_date: "2026-09-20",
    end_date: "2026-09-28",
    travelers: [
      { name: "Manuela", surname: "Esposito", cf: "SPSMNL86E44L219R", email: "m.esposito@email.it", number: "+393529990000" },
      { name: "Riccardo", surname: "Colombo", cf: "CLMRCR79T20H501G", email: "r.colombo@email.it", number: "+393341112222" },
      { name: "Simona", surname: "Rinaldi", cf: "RNLSMN92R41F205Q", email: "s.rinaldi@email.it", number: "+393445556666" },
      { name: "Gabriele", surname: "Villa", cf: "VLLGRL83A01L219W", email: "g.villa@email.it", number: "+393208889999" },
      { name: "Cristina", surname: "Guerra", cf: "GRRCST90B42H501S", email: "c.guerra@email.it", number: "+393533334444" },
      { name: "Massimo", surname: "Bertoni", cf: "BRTMSM74D12F205V", email: "m.bertoni@email.it", number: "+393407778888" }
    ]
  },
  {
    id: 7,
    destination: "Bangkok",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop",
    start_date: "2026-11-10",
    end_date: "2026-11-22",
    travelers: [
      { name: "Enrico", surname: "Festa", cf: "FSTNRC80M20H501A", email: "e.festa@email.it", number: "+393541112222" },
      { name: "Alessia", surname: "Palumbo", cf: "PLMLSS94P45L219O", email: "a.palumbo@email.it", number: "+393355556666" },
      { name: "Gianluca", surname: "Amato", cf: "MTAGLC76T20F205T", email: "g.amato@email.it", number: "+393479990000" },
      { name: "Serena", surname: "Fabbri", cf: "FBBSRN91B42H501Z", email: "s.fabbri@email.it", number: "+393303334444" },
      { name: "Tommaso", surname: "Dusi", cf: "DSUTMS85A01L219C", email: "t.dusi@email.it", number: "+393555556666" },
      { name: "Eleonora", surname: "Sala", cf: "SLALNR88E44F205X", email: "e.sala@email.it", number: "+393567778888" }
    ]
  },
  {
    id: 8,
    destination: "Lisbona",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop",
    start_date: "2026-12-27",
    end_date: "2027-01-03",
    travelers: [
      { name: "Leonardo", surname: "Bernardi", cf: "BRNLND82M10H501P", email: "l.bernardi@email.it", number: "+393579990000" },
      { name: "Michela", surname: "Marchetti", cf: "MRCMHL93R41L219Q", email: "m.marchetti@email.it", number: "+393581112222" },
      { name: "Filippo", surname: "Rizzi", cf: "RZZFPP78T20F205L", email: "f.rizzi@email.it", number: "+393595556666" },
      { name: "Noemi", surname: "Piras", cf: "PRSNMO95P45H501I", email: "n.piras@email.it", number: "+393607778888" },
      { name: "Emanuele", surname: "Sanna", cf: "SNNMNL84A01L219M", email: "e.sanna@email.it", number: "+393619990000" },
      { name: "Vanessa", surname: "Dalla", cf: "DLLVNS89B42F205K", email: "v.dalla@email.it", number: "+393621112222" },
      { name: "Pietro", surname: "Boni", cf: "BNOPTR81D12H501V", email: "p.boni@email.it", number: "+393635556666" },
      { name: "Raffaella", surname: "Mazza", cf: "MZZRFL87E44L219W", email: "r.mazza@email.it", number: "+393647778888" },
      { name: "Christian", surname: "Roda", cf: "RDOCHR83S15F205G", email: "c.roda@email.it", number: "+393659990000" }
    ]
  }
]);

    return (
      <GlobalContext.Provider value={{data, setData}}>
        {children}
      </GlobalContext.Provider>
    )
};

export { GlobalContext };