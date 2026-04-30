import { Link } from "react-router-dom";

// Component: AppCardTrip
// Purpose: present a single trip summary card used in Trip page.
// Props: `trip` object { destination, image, start_date, end_date, travelers[] }
export default function AppCardTrip({ trip }) {

    // Render: image, metadata and navigation link
    return (
        <figure>
            <div className="card shadow">
                <div className="card-body row">
                    <img src={trip.image} alt={trip.destination} className="img-fluid col-6 d-none d-sm-block" />
                    <div className="col col-12 col-sm-6 d-flex flex-column position-relative">

                        <Link className="btn btn-outline-secondary align-self-end rounded-5 mx-4 position-absolute top-0 end-0" to={'/'}>
                            <i class="bi bi-escape"> Back</i>
                        </Link>

                        <h2 className="my-2">{trip.destination}</h2>
                        <figcaption>INIZIO: <strong>{trip.start_date}</strong></figcaption>
                        <figcaption>FINE: <strong>{trip.end_date}</strong></figcaption>
                        <figcaption>Numero Viaggiatori: <strong>{trip.travelers.length}</strong></figcaption>

                    </div>
                </div>
            </div>
        </figure>
    )
}