
import './App.css';

function App() {

  return <div className="container">
            <header className="header">
                <h1 className="header__title">What time is the meeting?</h1>
                <div className="header__deskr">Plan your participation in international meetings. Check what time it will be in your area when the meeting takes place</div>
            </header>
            <main className="info-blocks">
                <div className="info-block host">
                    <h2 className="info-block__title">Host city</h2>
                    <input className="info-block__input" type="text" />
                    <input className="info-block__input" type="text" />
                    <input className="info-block__input" type="text" />
                </div>
                <div className="info-block dest">
                    <h2 className="info-block__title">Your location</h2>
                    <input className="info-block__input" type="text" />
                    <input className="info-block__input" type="text" />
                    <input className="info-block__input" type="text" />
                </div>
            </main>
            <aside className="msg">
                <div className="msg__wrapper">
                    <div className="msg__text">On 21/12/2022 at 4:00pm in Sydney(Australia) it will be 21/12/2022 7:00am in Warsaw (Poland)</div>
                    <button className="msg__btn">Copy</button>
                </div>
            </aside>
        </div>
     
  
}

export default App;
