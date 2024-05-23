import "./topBox.scss";
import { topDealUsers } from "../../data.ts";

const TopBox = () => {
  return (
    <div className="topBox">
      <h1>Top Deals</h1>
      <div className="list">
        {topDealUsers.map((users) => (
          <div className="listItem" key={users.id}>
            <div className="user">
              <img src={users.img} alt="" />
              <div className="userTexts">
                <span className="username">{users.username}</span>
                <span className="email">{users.email}</span>
              </div>
            </div>
            <span className="amount">${users.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
