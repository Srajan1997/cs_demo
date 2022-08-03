import './App.css';
import {useState} from 'react';

function Slide1() {
  const [fullName, setFullName] = useState('');
  const [displayName, setDisplayName] = useState('');
  const updateFullName = (event) => {
      setFullName(event.target.value);
      localStorage.setItem('userName', event.target.value.toString());
  }
  const updateDisplayName = (event) => {
    setDisplayName(event.target.value);
}
  return (
    <div className="Slide">
        <h1>Welcome! First things first...</h1>
        <h2>You can always change them later</h2>
        <div className='input-section'>
        <p className="input-label">Full Name</p>
      <input className="common-input" type="text" name="Full-Name" placeholder='Full Name' value={fullName} onChange={updateFullName} /> 
      <p className="input-label">Display Name</p>
      <input className="common-input" type="text" name="Display-Name" placeholder='Display Name' value={displayName} onChange={updateDisplayName} />
    </div>
    </div>
  );
}

function Slide2() {
    const [workspaceName, setWorkspaceName] = useState('');
    const [workspaceURL, setWorkspaceURL] = useState('');
    const updateWorkspaceName = (event) => {
        setWorkspaceName(event.target.value);
    }
    const updateWorkspaceURL = (event) => {
      setWorkspaceURL(event.target.value);
  }
    return (
      <div className="Slide">
          <h1>Let's set up a home for all your work</h1>
          <h2>You can always create another workspace later</h2>
          <div className='input-section'>
          <p className="input-label">Workspace Name</p>
        <input className="common-input" type="text" name="Full-Name" placeholder='Workspace Name' value={workspaceName} onChange={updateWorkspaceName} /> 
        <p className="input-label">Workspace URL <span className="faint-text">(optional)</span></p>
        <div className="whole-input"><div className='workspace-prefix'>www.eden.com/</div><input className="workspace-input" type="text" name="Display-Name" placeholder='Display Name' value={workspaceURL} onChange={updateWorkspaceURL} /></div>
      </div>
      </div>
    );
  }

  function Slide3() {
    const [cardNames, setCardNames] = useState(['use-card-selected','use-card']);
    const toggleSelectCard = () => {
        if(cardNames[0]==='use-card-selected') 
        {
          setCardNames(['use-card','use-card-selected']);
        }
        else
        {
          setCardNames(['use-card-selected','use-card']);
        }
    }
    return (
      <div className="Slide">
          <h1>How are you planning to use Eden?</h1>
          <h2>We'll streamline your setup experience accordingly </h2>
          <div className={cardNames[0]} onClick={toggleSelectCard}><ion-icon className="ion-icon" ios="ios-contact" name="person"></ion-icon>For myself<p className="card-info">Write Better. Think more clearly. Stay Organized.</p></div>
          <div className={cardNames[1]}  onClick={toggleSelectCard}><ion-icon className="ion-icon" ios="ios-contact" name="people"></ion-icon>With team<p className="card-info">Wikis, docs, tasks and projects, all in one place.</p></div>
     
      </div>
    );
  }

  function Slide4() {
    const [fullName, setFullName] = useState('');
    const [displayName, setDisplayName] = useState('');
    const updateFullName = (event) => {
        setFullName(event.target.value);
    }
    const updateDisplayName = (event) => {
      setDisplayName(event.target.value);
  }
    return (
      <div className="Slide">
          <h1>Congratulations, {window.localStorage.getItem('userName').split(' ')[0]}!</h1>
          <h2>You have completed onboarding, you can start using Eden</h2>
          <div className="big-circle"><ion-icon className="ion-icon" ios="ios-contact" name="checkmark"></ion-icon></div>
      </div>
    );
  }



export {Slide1,Slide2,Slide3,Slide4};
