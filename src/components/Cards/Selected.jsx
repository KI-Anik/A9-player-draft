import React from 'react';

const Selected = ({selectedPlayers}) => {
    return (
        <div>
            selected: {selectedPlayers.length}
        </div>
    );
};

export default Selected;