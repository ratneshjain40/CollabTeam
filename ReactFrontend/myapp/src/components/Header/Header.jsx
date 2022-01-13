function Header({ userName, isLogged }) {
  const handleLogout = () => {
    window.open("http://localhost:5000/logout","_self");
  };

  const handleLogin = () => {
    window.open("http://localhost:5000/login","_self");
  };

  const handleOnClick = () => {
    if (isLogged) {
      handleLogout();
    } else {
      handleLogin();
    }
  };

  if (isLogged) {
    return (
      <div className="header">
        <div className="header-title">
          <p className="header-text">CollabTeam</p>
        </div>
        <div className="header-item">
          <p className="header-text" onClick={handleOnClick}>
            Logout
          </p>
        </div>
        <div className="header-item">
          <p className="header-text">{userName}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="header">
        <div className="header-title">
          <p className="header-text">CollabTeam</p>
        </div>
        <div className="header-item">
          <p className="header-text" onClick={handleOnClick}>
            Login
          </p>
        </div>
      </div>
    );
  }
}

export default Header;