import React from 'react';

const Thanks = () => {

    localStorage.removeItem("nascent_firstname");
    localStorage.removeItem("nascent_lastname");
    localStorage.removeItem("nascent_phonenumber");
    localStorage.removeItem("nascent_address");
    localStorage.removeItem("nascent_pokemon");

    return (
        <div className='flex flex-column items-center justify-center'>
            <p className='text-3xl'>Thanks for submitting your information.</p>
        </div>
    );
}

export default Thanks;
