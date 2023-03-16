import React, {useEffect, useState} from 'react'

const Characters = () => {
    const [characters, setCharacters] = useState([])

    const url = 'https://hp-api.onrender.com/api/characters'

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setCharacters(data))
    }, [])

    console.log(characters)

    return (
        <div>
            <h1>Harry Potter Characters</h1>
            {characters.map(character => (
                <div key={character.id}>
                    <h3>{character.name}</h3>
                    <img src={character.image} alt="" />
                </div>
            ))}
        </div>
    )
}

export default Characters;