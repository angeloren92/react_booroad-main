// Component: AppModal
// Purpose: modal that shows traveler details (CF, email, phone).
// Props:
// - tempTraveler: object with traveler details { name, surname, cf, email, number }
// - setModal: setter to close the modal
export default function AppModal({ tempTraveler, setModal }) {

    // UI: simple bootstrap modal; expects `tempTraveler` to be defined
    return (
        <>
            <div className="modal show d-block bg-modal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">

                            <h5 className="modal-title h2 mx-auto">{tempTraveler.name} {tempTraveler.surname}</h5>

                        </div>
                        <div className="modal-body">
                            <ul className="list-group list-group-flush">

                                <li className="list-group-item fs-3">
                                    <i className="bi bi-postcard-heart"> </i>{tempTraveler.cf.toUpperCase()}</li>

                                <li className="list-group-item fs-3">
                                    <a href={`mailto:${tempTraveler.email}`} className="text-decoration-none text-black" >
                                        <i className="bi bi-envelope-at-fill"> </i>{tempTraveler.email}</a>
                                </li>

                                <li className="list-group-item fs-3">
                                    <a href={`tel:${tempTraveler.number}`} className="text-decoration-none text-black">
                                        <i className="bi bi-telephone-fill"> </i>
                                        {tempTraveler.number}
                                    </a>
                                </li>

                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => setModal(false)}>Close</button>

                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}