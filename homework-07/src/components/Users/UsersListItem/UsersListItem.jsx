import "./UsersListItem.css";

function UsersListItem(props) {
  const { user } = props;
  const { address, company } = user;

  return (
    <>
      <div className="cards__item">
        <ul>
          <li>
            <span>name:</span> {user.name}
          </li>
          <li>
            <span>username:</span> {user.username}
          </li>
          <li>
            <span>email:</span> {user.email}
          </li>
          <li>
            <span>address:</span> ({address.zipcode}), {address.city}, {address.street}
            , {address.suite}
          </li>
          <li>
            <span>phone:</span> {user.phone}
          </li>
          <li>
            <span>website:</span> {user.website}
          </li>
          <li>
            <span>company:</span> {company.name}
          </li>
        </ul>
      </div>
    </>
  );
}

export default UsersListItem;
