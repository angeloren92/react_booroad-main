import { useState } from "react";
import AppModal from "./AppModal";

// Component: AppTravelers
// Purpose: renders a table of travelers and opens a modal with details on click.
// Props: `filtered` - array of traveler objects to display.
export default function AppTravelers({ filtered }) {

    // modal and temporary traveler selected for details view
    const [modal, setModal] = useState(false)
    const [tempTraveler, setTempTraveler] = useState([])

    // Open modal and set the selected traveler by index
    function handlerClick(i) {
        setModal(true)
        setTempTraveler(filtered[i])
    }

    return (
        <>
            {modal && <AppModal tempTraveler={tempTraveler} setModal={setModal}   /> }
            <table className="table table-striped rounded">
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Cognome</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filtered.map((traveler, index) => (
                            <tr key={index} onClick={() => handlerClick(index)} >
                                <td className="w-50">{traveler.name}</td>
                                <td className="w-50">{traveler.surname}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </>
    );
}