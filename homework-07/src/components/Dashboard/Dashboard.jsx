import { Link } from "react-router-dom";
import peopleIcon from "../../assets/people.png";
import albumIcon from "../../assets/gallery.png";

function Dashboard() {
  return (
    <div className="dashboard">
      <Link to="/users">
        <img src={peopleIcon} alt="" />
        Users
      </Link>
      <Link to="/albums">
        <img src={albumIcon} alt="" />
        Albums
      </Link>
    </div>
  );
}

export default Dashboard;
