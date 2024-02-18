import TeamList from "./teamList/TeamList";

const Team = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Our Team</h1>
      <p className="text-center">Meet with all our qualified team members</p>
      <TeamList/>
    </div>
  );
};

export default Team;
