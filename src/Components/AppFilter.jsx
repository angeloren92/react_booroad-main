// Component: AppFilter
// Purpose: small search form to filter travelers by full name.
// Props:
// - setFormData, formData: parent state used to store search query
// - setFiltered: callback to update filtered travelers list
// - trip: current trip object (used as source for travelers)
import { useState } from "react";
export default function AppFilter({ setFormData, formData, setFiltered, trip }) {
    // Local controlled input for search text
    const [search, setSearch] = useState("")

    function handlerSubmit(e) {
        e.preventDefault()
        setFormData({ fullName: search })
        setSearch("")
    }

    
    // Clear search and reset filtered list to all travelers
    function handlerClear () {
        setSearch("")
        const tempTrip = trip
        setFiltered(tempTrip.travelers)
    }
    return (
            <form onSubmit={handlerSubmit} className="row row-cols-2 mt-5 mb-3">

                <span className="col-7 d-flex align-items-center position-relative">
                    <label htmlFor="name-surname" className="label-search position-absolute translate-middle-y px-2">Cerca viaggiatore</label>
                    <input type="text" value={search} className="form-control" id="name-surname" onChange={(e) => setSearch(e.target.value)} />
                </span>

                <span className="col-5 d-flex align-items-center gap-2">
                    <button type="submit" className="btn btn-outline-success"><i className="bi bi-search-heart-fill"></i></button>
                    <button type="clear" className="btn btn-outline-danger"><i className="bi bi-x-octagon" onClick={() => {handlerClear()}}></i></button>
                </span>

            </form>
    );
}