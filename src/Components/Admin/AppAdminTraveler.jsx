import { useState } from "react"
import AppMessage from "./AppMessage"
export default function AppAdminTraveler({ data, setData, showMessage, setShowMessage, message, setMessage, idTrip, setIdTrip }) {

    const currentTrip = data.find(element => element.id === idTrip)

    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        cf: '',
        email: '',
        number: 0
    })

    function handleInput(e) {

        const newElement = { ...formData, [e.target.name]: e.target.value }
        setFormData(newElement)
    }

    function handlerSubmit(e) {
        e.preventDefault()
        const index = data.indexOf(currentTrip)
        const tempTrip = currentTrip
        tempTrip.travelers.push(formData)
        const tempData = data
        tempData.splice(index, 1, tempTrip)
        setData(tempData)
        setShowMessage(true)
        setMessage("Viaggiatore aggiunto con successo")
        setFormData({
            name: '',
            surname: '',
            cf: '',
            email: '',
            number: 0
        });
    }

    function handlerDelete(index) {
        currentTrip.travelers.splice(index, 1)
        const newData = data
        newData.map(element => {
            element.id === currentTrip.id
            return currentTrip
        })

        setData(newData)
        setMessage("Viaggiatore eliminato con successo")
        setShowMessage(true)
    }


    return (
        <>
            {showMessage && <AppMessage showMessage={showMessage} setShowMessage={setShowMessage} message={message} showMessage={showMessage} />}

            <div className="col col-12 col-md-3 border py-3 position-relative">

                <button onClick={() => setIdTrip(-1)} className="btn btn-outline-secondary align-self-end rounded-5 m-2 position-absolute top-0 end-0 label-search fs-6" to={'/'}>
                    <i className="bi bi-escape"></i>
                </button>

                <ul className="list-unstyled">
                    <li className="">
                        <h2 className="fs-4 mt-3">Lista Viaggiatori: <br /> {currentTrip.destination}</h2>
                    </li>
                </ul>

                <div>
                    <form onSubmit={handlerSubmit}>

                        <div className="d-flex flex-column">
                            <label htmlFor="name">Nome</label>
                            <input
                                name="name"
                                id="name"
                                type="text"
                                className="form-control-sm"
                                value={formData.name}
                                onChange={handleInput}
                                autoComplete="given-name"
                                required
                            />
                        </div>

                        <div className="d-flex flex-column">
                            <label htmlFor="surname">Cognome</label>
                            <input
                                name="surname"
                                id="surname"
                                type="text"
                                className="form-control-sm"
                                value={formData.surname}
                                onChange={handleInput}
                                autoComplete="family-name"
                                required
                            />
                        </div>

                        <div className="d-flex flex-column">
                            <label htmlFor="cf">Codice Fiscale</label>
                            <input
                                name="cf"
                                id="cf"
                                type="text"
                                className="form-control-sm"
                                value={formData.cf}
                                onChange={handleInput}
                                maxLength="16"
                                pattern="^[a-zA-Z0-9]{16}$"
                                title="Inserisci un Codice Fiscale valido di 16 caratteri alfanumerici"
                                style={{ textTransform: 'uppercase' }} /* Aiuta visivamente l'utente */
                                required
                            />
                        </div>

                        <div className="d-flex flex-column">
                            <label htmlFor="email">Email</label>
                            <input
                                name="email"
                                id="email"
                                type="email"
                                className="form-control-sm"
                                value={formData.email}
                                onChange={handleInput}
                                autoComplete="email"
                                required
                            />
                        </div>

                        <div className="d-flex flex-column">
                            <label htmlFor="number">Cellulare</label>
                            <input
                                name="number"
                                id="number"
                                type="tel" /* Sostituito "number" con "tel" */
                                className="form-control-sm"
                                value={formData.number}
                                onChange={handleInput}
                                autoComplete="tel"
                                pattern="[0-9+]*" /* Permette solo numeri e il simbolo + per i prefissi */
                                required
                            />
                        </div>

                        <span className="d-flex justify-content-center">
                            <button className="btn btn-success mt-3 d-inline-block">Aggiungi viaggiatore</button>
                        </span>
                    </form>
                </div>
            </div>

            <div className="col border py-3 overflow-x-auto">
                <table className="table table-striped rounded">
                    <thead>
                        <tr>
                            <th scope="col">Nome</th>
                            <th scope="col">Cognome</th>
                            <th scope="col">C.F</th>
                            <th scope="col">Email</th>
                            <th scope="col">Cellulare</th>
                            <th scope="col">Azioni</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            currentTrip.travelers.map((travaler, index) => (
                                <tr key={index}>
                                    <td>{travaler.name}</td>
                                    <td>{travaler.surname}</td>
                                    <td>{travaler.cf}</td>
                                    <td>{travaler.email}</td>
                                    <td>{travaler.number}</td>
                                    <td>
                                        <button className="mx-2" onClick={() => handlerDelete(index)}>
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