import avatar from './avatar.png';

function Logo(props) {
  const userPic = <img src={avatar} alt="Coursera avatar" />;
  return userPic;
}

function App() {
  return (
    <div>
      <h1>Hello Word!</h1>
      <Logo />
    </div>
  );
}

export default App;
