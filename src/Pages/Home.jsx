import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalContext";
import AppNoResults from "../Components/AppNoResults";

// Page: Home
// Purpose: list trips sorted by start date. Uses GlobalContext for data.
export default function Home() {

    const { data } = useContext(GlobalContext);

    // Keep a local sorted snapshot by start date for display
    const [sortByStartDate, setbyStartDate] = useState(data.sort((a, b) => {
        return new Date(a.start_date) - new Date(b.start_date)
    }))

    return (
        <section className="py-5 min-vh-100">
            <div className="container">
                
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

                    {data.length === 0 &&  <AppNoResults />}

                    {
                        sortByStartDate.map((trip) => (
                            <div key={trip.id} className="col">
                                <Link className="card h-100 shadow" to={`/viaggio/${trip.id}`}>
                                    <img src={trip.image} alt={trip.destination} className="img-fluid d-none d-sm-block" />
                                    <div className="card-body position-relative">
                                        <h3>{trip.destination}</h3>
                                        <p>INIZIO: {trip.start_date}</p>
                                        <p>FINE: {trip.end_date}</p>
                                        <label className={`position-absolute top-0 end-0 badge bg-${trip.travelers.length !== 0 ? 'danger' : 'success'} m-3`}></label> 
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}