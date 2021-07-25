import React,{ useState } from 'react';
import './App.css';
import hamburger from './images/icon-hamburger.svg'
import logo from './images/logo.svg'
import logoMastercraft from './images/logo-mastercraft.svg'
import bookmark from './images/icon-bookmark.svg'

import MobileMenu from './component/MobileMenu'
import ModalSelection from './component/ModalSelection'

function App() {
  // setting state 
  const [clicked,setClicked] = useState(false)
  const [modalClick,setModalClick] = useState(false)
  const [money,setMoney] = useState(89914)
  const [peoplePledged,setPeoplePledged] = useState(5007)
  const [bambooLeft,setBambooLeft] = useState(101)
  const [blackEditionLeft,setBlackEditionLeft] = useState(64)



  const handleClick = e => {
    setClicked(!clicked)
  }

  const handleModalClick = e => {

      // blurring body container while modelselection is up
    const body = document.getElementById('body')
    body.classList.add('blur')
    setModalClick(!modalClick)
  }

  // changing bookmark status
  function changeBookmark() {
    let bookmarkIcon = document.getElementById('bookmarkIcon')
    bookmarkIcon.innerHTML = 'Bookmarked'
  }

  return (
      <div className='main'>
        <div className='header'>
          <div className='headerTitle'>
            <img src={logo} alt='logo' />
            <img className='hamburger' src={hamburger} onClick={handleClick} alt='logo' />
          </div>
          <div className='desktopMenu'>
              <ul>
                <li>About</li>
                <li>Discover</li>
                <li>Get Started</li>
              </ul>
            </div>
        </div>
        {clicked ? <MobileMenu /> : null}

        <img className='Logo' src={logoMastercraft} alt='logo-mastercraft' />
        <div className='bodyContainer' id='body'>

          <div className='topSection'>
            <h1>Mastercraft Bamboo Monitor Riser</h1>
            <p> A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
            <div className='buttonContainer'>
              <button onClick={handleModalClick}>Back this project</button>
              <div className='bookMarkContainer'>
                <img src={bookmark} className='bookmarkImg' alt='icon-bookmark' />
                <button id='bookmarkIcon' className='BookmarkBtn' onClick={changeBookmark}>Bookmark</button>
              </div>
            </div>
          </div>

          <div className='midSection'>
            <div className='midDescription'>
              <div className='description'>
                <h1>$ {money}</h1>
                <p>of $100,000 backed</p>
                <hr />
              </div>
              <div className='description'>
                <h1>{peoplePledged}</h1>
                <p>total backers</p>
                <hr />
              </div>
              <div className='description'>
                <h1>56</h1>
                <p>days left</p>
              </div>
            </div>
            <div className='progressBarContainer'>
                  <div className='progressBarMeter'></div>
              </div>
          </div>
          
          {/* description project */}
          <div className='bottomSection'>
            <h2>About this project</h2>

            <p>
              The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
              to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
              your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
            </p>
            <br />
            <p>
              Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
              to allow notepads, pens, and USB sticks to be stored under the stand.
            </p>
            <br style={{marginBottom : '20px'}}/>

            <div className='card'>
              <div className='cardTitle'>
                <h2>Bamboo Stand</h2>
                <p className='pledgeDesc'>Pledge $25 or more</p>
              </div>
              
              <p>
                You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
                you’ll be added to a special Backer member list.
              </p>

              <div className='cardBottom'>
              <span>
                <h1>{bambooLeft}</h1><p> left</p>
              </span>
              <button onClick={handleModalClick}>Select Reward</button>
              </div>
              
            </div>

            <div className='card'>
              <h2>Black Edition Stand</h2>
              <p className='pledgeDesc'>Pledge $75 or more</p>
              <p>
                You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
                member list. Shipping is included
              </p>
              <div className='cardBottom'>
              <span><h1>{blackEditionLeft}</h1><p> left</p></span>
              <button onClick={handleModalClick}>Select Reward</button>
              </div>
            </div>

            <div className='card out'>
              <h2>Mahogany Special Edition</h2>
              <p className='pledgeDesc'>Pledge $200 or more</p>
              <p>
                You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
                to our Backer member list. Shipping is included.
              </p>
              <div className='cardBottom'>
              <span><h1>0</h1><p> left</p></span>
              <button style={{cursor:'not-allowed'}} disabled={true} onClick={handleModalClick}>Out of Stock</button>
              </div> 
            </div>
          </div>  
        </div>
        { modalClick ? <ModalSelection 
      setMoney={setMoney} 
      setPeoplePledged={setPeoplePledged}
      bambooLeft={bambooLeft}
      setBambooLeft={setBambooLeft}
      blackEditionLeft={blackEditionLeft}
      setBlackEditionLeft={setBlackEditionLeft}
      /> : null}

      </div>
      
  );
}

export default App;
