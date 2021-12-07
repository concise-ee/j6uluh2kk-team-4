import React from 'react'

export const Christmas = ({christmas}) => {
    return(
        <div className="container">
            <h2>Caspar Deployed this!!!! {christmas.isItChristmasYet ? 'Yep' : 'Nope'}</h2>
        </div>
    )
}