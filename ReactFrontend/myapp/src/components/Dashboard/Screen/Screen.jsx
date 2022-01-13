import Team from "./TeamScreen/Team";

function Screen({ isLogged, sideBarOptions }) {
  let screen;
  console.log(sideBarOptions);
  if (sideBarOptions === 0) {
    screen = <Team />;
  } else if (sideBarOptions === 1) {
    screen = <p>User logged in</p>;
  }
  if (isLogged) {
    return (
      <div className="container_main">
        <div className="content-center"> {screen} </div>
      </div>
    );
  } else {
    return (
      <div className="container_main">
        <div className="content-center">
          <p>User not logged in</p>
        </div>
      </div>
    );
  }
}

export default Screen;
