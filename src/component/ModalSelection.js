import React,{ useState } from 'react'
import close from '../images/icon-close-modal.svg'
import { FaDollarSign } from 'react-icons/fa'
import SucessMessage from './SuccessMessage'

function ModalSelection(props) {

    const [selectFirst,setSelectFirst] = useState(false)
    const [selectSecond,setSelectSecond] = useState(false)
    const [selectThird,setSelectThird] = useState(false)

    const [amount,setAmount] = useState(0)

    const { setMoney,
            setPeoplePledged,
            bambooLeft,
            setBambooLeft,
            blackEditionLeft,
            setBlackEditionLeft
    } = props


// function to change the total amount of pledged money, reducing the stock for each products,
// showing success mesage, and closing the modal component
    const totalPledgeChange = (e) => {
        let successMessage = document.getElementById('success')
        let bamboo = document.getElementById('bamboo')
        let blackEdition = document.getElementById('blackEdition')

        setMoney(prevState => prevState + amount)
        setPeoplePledged(prevState => prevState + 1)
        if(bamboo) {
            setBambooLeft(prevState => prevState - 1)
        } else if (blackEdition) {
            setBlackEditionLeft(prevState => prevState - 1)
        }
        successMessage.style.display = 'block'
        closeFunc()
    }


    // function to change the value for each radio button
    const handleChangeFirst = () => {
        setSelectFirst(!selectFirst)
    }
    const handleChangeSecond = () => {
        setSelectSecond(!selectSecond)
    }
    const handleChangeThird = () => {
        setSelectThird(!selectThird)
    }

    // function to manage the amount of pledged money
    const handleAmountChange = e => {
        let amountInput = parseInt(e.target.value)
        if(amountInput !== 0) {
            setAmount(amountInput)
        }
        
    }

    // adding close function to close icon
    function closeFunc() {
        const modalContainer = document.getElementById('modal')
        const body = document.getElementById('body')
        modalContainer.classList.add('hide')
        body.classList.remove('blur')

    }

        return (
    <>
        <div className='modalContainer' id='modal'>
            <div className='headerModal'>
                <h1>Back this project</h1>
                <img src={close} alt='close-icon' id='close' onClick={closeFunc}/>
            </div>
            <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
            <div className='modalCard'>
                <div className='radioContainer'>
                    <input  type='radio' id='noReward' name='modalSelection' />
                    <label htmlFor='noReward'>Pledge with no reward</label>
                </div>
                <p>
                    Choose to support us without a reward if you simply believe in our project. As a backer, 
                    you will be signed up to receive product updates via email.
                </p>
            </div>

            <div className='modalCard'>
                <div className='radioContainer'>
                    <input type='radio' onClick={handleChangeFirst} id='bambooStand' 
                    name='modalSelection' value={selectFirst} 
                    />
                    <div>
                        <label htmlFor='bambooStand'>Bamboo Stand</label>
                        <p className='modalDesc'>Pledge $25 or more</p>
                    </div>
                </div>
                <p>
                    You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
                    you’ll be added to a special Backer member list.
                </p>
                <span><h1>{bambooLeft}</h1><p> left</p></span>
           
                {selectFirst ? (
                <>
             <hr className='selectedLine'/>
                    <div className='inputPledge'>
                        <p>Enter Your Plegde</p>
                        <div className='inputContainer'>
                            <span>
                                <input type='number' placeholder=' 25' 
                                value={amount}
                                id='inputVal'
                                onChange={handleAmountChange}
                                />
                                <FaDollarSign className='dollarSign'/>
                            </span>
                            <button onClick={totalPledgeChange} id='bamboo' >Continue</button>
                        </div>
                        {/* <div id='errorMessage' className='error'>Number cannot be zero</div> */}
                    </div>
                </>
                ) : null}
            </div>

            <div className='modalCard'>
                <div className='radioContainer'>
                    <input type='radio' onClick={handleChangeSecond} id='blackEdition' 
                    name='modalSelection' value={selectSecond}
                    />
                    <div>
                        <label htmlFor='bambooStand'>Black Edition Stand</label>
                        <p className='modalDesc'>Pledge $75 or more</p>
                    </div>
                </div>
                <p>
                    You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
                    member list. Shipping is included.
                </p>
                <span><h1>{blackEditionLeft}</h1><p> left</p></span>
                {selectSecond ? (
                <>
                    <hr className='selectedLine'/>
                    <div className='inputPledge'>
                        <p>Enter Your Plegde</p>
                        <div className='inputContainer'>
                            <span>
                                <input type='number' placeholder=' 75' 
                                value={amount}
                                onChange={handleAmountChange}
                                />
                                <FaDollarSign className='dollarSign'/>
                            </span>
                            <button onClick={totalPledgeChange} id='blackEdition'>Continue</button>
                        </div>
                        <div id='errorMessage' className='error'>Number cannot be zero</div>
                    </div>
                </>
                ) : null}
            </div>

            <div className='modalCard out'>
                <div className='radioContainer'>
                    <input type='radio' id='mahogany' name='modalSelection'
                    value={selectThird}
                    onClick={handleChangeThird}
                    disabled={true} 
                    />
                    <div>
                        <label htmlFor='mahogany'>Mahogany Special Edition</label>
                        <p className='modalDesc'>Pledge $200 or more</p>
                    </div>
                </div>
                <p>
                    You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
                    to our Backer member list. Shipping is included.
                </p>
                <span><h1>0</h1><p> left</p></span>
            </div>
        </div>
        <div class='visible' id='success'>
            <SucessMessage/>
        </div>
    </>
    )
}

export default ModalSelection;
