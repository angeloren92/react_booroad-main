import { GlobalContext } from "../Context/GlobalContext";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AppFilter from "../Components/AppFilter";
import AppTravelers from "../Components/AppTravelers";
import AppCardTrip from "../Components/AppCardTrip";
import AppNoResults from "../Components/AppNoResults";

// Page: Trip
// Purpose: Trip detail page — shows trip summary and a searchable list of travelers.
// Behavior: filters travelers by full name using `formData.fullName`.
export default function Trip() {

    const { data } = useContext(GlobalContext)
    const { id } = useParams()
    const [trip, setTrip] = useState(data.find(element => {
        return element.id === parseInt(id)
    }))

    const [formData, setFormData] = useState({ fullName: '' })
    const [filtered, setFiltered] = useState(trip.travelers)

    // Recalculate filtered travelers when search or trip changes
    useEffect(() => {
        setFiltered(trip.travelers.filter(element => {
            const tempFullName = `${element.name} ${element.surname}`
            return tempFullName.toLowerCase().includes(formData.fullName.toLowerCase())
        }))
    }, [formData, trip])

    return (
        <section>
            <div className="container">

                <AppCardTrip trip={trip} />
                <div className="card shadow">
                    <div className="card-body pt-0">

                        <AppFilter setFormData={setFormData} formData={formData} setFiltered={setFiltered} trip={trip} />

                        <div className="row">
                            {filtered.length === 0 ? <AppNoResults /> : <AppTravelers filtered={filtered} />  }
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}