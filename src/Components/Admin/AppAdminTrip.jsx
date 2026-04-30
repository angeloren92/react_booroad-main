import { useEffect, useState } from "react";
import AppMessage from "./AppMessage";

// Component: AppAdminTrip
// Purpose: Admin panel for managing trips (create, list, delete).
// Props:
// - data, setData: shared trips state from GlobalContext
// - showMessage, setShowMessage, message, setMessage: UI feedback controls
// - idTrip, setIdTrip: selected trip id for switching views
// - sortByStartDate: sorted trips used to render the table
// Notes: Keep UI logic small here; data mutations update GlobalContext.
export default function AppAdminTrip({ data, setData, showMessage, setShowMessage, message, setMessage, idTrip, setIdTrip, sortByStartDate }) {

    
    const [formData, setFormData] = useState({
        destination: '',
        image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop',
        start_date: '',
        end_date: '',
        travelers: []
    })

    // Update form state for controlled inputs
    function handleInput(e) {
        const newElement = { ...formData, [e.target.name]: e.target.value }
        setFormData(newElement)
    }

    // Handle form submission: create a new trip and reset the form
    function handlerSubmit(e) {
        e.preventDefault()
        // Generate a new unique id: use max existing id + 1 (safe if list not ordered)
        const newId = (data && data.length > 0) ? Math.max(...data.map(t => t.id)) + 1 : 1
        const newTrip = { ...formData, id: newId };
        setData([...data, newTrip])
        setFormData({
            destination: '',
            image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop',
            start_date: '',
            end_date: '',
            travelers: []
        });
        // show a short confirmation message in the admin UI
        setShowMessage(true)
        setMessage("Viaggio aggiunto con successo")
    }

    // Remove a trip by id and notify user
    function handlerDelete(id) {
        const newData = data.filter(trip => trip.id !== id)
        setData(newData)
        setMessage("Viaggio eliminato con successo")
        setShowMessage(true)
    }

    
    return (
        <>
            <AppMessage message={message} setMessage={setMessage} showMessage={showMessage} setShowMessage={setShowMessage} />

            <div className="col col-12 col-md-3 border py-3">
                <ul className="list-unstyled">
                    <li className="">
                        <h2>Lista Viaggi</h2>
                    </li>
                </ul>

                <div>
                    <form onSubmit={handlerSubmit}>

                        <div className="d-flex flex-column">
                            <label htmlFor="destination"> Destinazione</label>
                            <input name="destination" id="destination" type="text" className="form-control-sm" value={formData.destination} onChange={handleInput} required />
                        </div>

                        <div className="d-flex flex-column">
                            <label htmlFor="start_date"> Inizio viaggio</label>
                            <input name="start_date" id="start_date" type="date" className="form-control-sm" value={formData.start_date} onChange={handleInput} required />
                        </div>

                        <div className="d-flex flex-column">
                            <label htmlFor="end_date"> Fine viaggio</label>
                            <input name="end_date" id="end_date" type="date" className="form-control-sm" value={formData.end_date} onChange={handleInput} required />
                        </div>

                        <div className="d-flex flex-column">
                            <label htmlFor="image"> Immagine</label>
                            <input name="image" id="image" type="text" className="form-control-sm" value={formData.image} onChange={handleInput} required />
                        </div>
                        <span className="d-flex justify-content-center">
                            <button className="btn btn-success mt-3 d-inline-block">Aggiungi viaggio</button>
                        </span>
                    </form>
                </div>

            </div>
            <div className="col border py-3">
                <table className="table table-striped rounded">
                    <thead>
                        <tr>
                            <th scope="col">Destinazione</th>
                            <th scope="col">Data Inizio</th>
                            <th scope="col">Data Fine</th>
                            <th scope="col">Azioni</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            sortByStartDate.map(trip => (
                                <tr key={trip.id} >
                                    <td className="w-25"><strong>{trip.destination}</strong></td>
                                    <td className="w-25">{trip.start_date}</td>
                                    <td className="w-25">{trip.end_date}</td>
                                    <td className="w-25">
                                        <button className="mx-2">
                                            <i className="bi bi-people-fill" onClick={() => setIdTrip(trip.id)}></i>
                                        </button>
                                        <button className="mx-2" onClick={() => handlerDelete(trip.id)}>
                                            <i className="bi bi-trash2-fill"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}   