import "./CreateSpotButton.css";

import { useHistory } from "react-router-dom";

const CreateSpotButton = () => {
    const history = useHistory();

    const createASpot = () => {
        history.push('/spots/create');
    };

    return (
        <button onClick={createASpot}>Create Spot</button>
    );
};

export default CreateSpotButton;