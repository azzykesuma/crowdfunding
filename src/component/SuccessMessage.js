import React from 'react'
import check from '../images/icon-check.svg'

function successMessage() {
    let successContainer = document.getElementById('successContainer')

    // function to hide the success message
    function closeBtn() {
        successContainer.classList.add('hideSucessMessage')
    }

    return (
        <div className='messageContainer' id='successContainer'>
           <img src={check} alt='success-icon' />
            <h1>Thanks for your support!</h1>
            <p>
                Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
                an email once our campaign is completed.
            </p>
            <button onClick={closeBtn}>Got it!</button>
        </div>
    )
}

export default successMessage
