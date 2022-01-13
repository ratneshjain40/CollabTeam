function Team() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(document.getElementById("invite-username").value);
  };
  return (
    <div className="Team">
      <form onSubmit={handleSubmit}>
        <input type="text" id="invite-username" />
        <button type="submit">Send Invite</button>
      </form>
    </div>
  );
}

export default Team;
