function sidebar({ sideBarOptions, setSideBarOptions }) {
  const handleSideBarClick = (option) => {
    setSideBarOptions(option);
  };

  return (
    <div className="container_sidebar">
      <ul className="sidebar-list">
        <li
          className={`list-item`}
          onClick={() => {
            handleSideBarClick(0);
          }}
        >
          <p className="list-text">Team</p>
        </li>
        <li
          className={`list-item `}
          onClick={() => {
            handleSideBarClick(1);
          }}
        >
          <p className="list-text">Notifications</p>
        </li>
      </ul>
    </div>
  );
}

export default sidebar;
