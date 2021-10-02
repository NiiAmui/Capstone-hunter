import React, { Fragment, useState } from "react";
import "../scss/main.scss";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { handleDomainVerification } from "../redux/actions/domain/Action";
import { handleLogout } from "../redux/actions/user/Action";
import logo from "../images/hun-logo.png";

function Main(props) {
  const history = useHistory();
  const { verifyDomain, logout, domainInfo } = props;
  const [domain, setDomain] = useState("");
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState("");
  // console.log(employees)

  const onSubmitForm = async (e) => {
    e.preventDefault();
    verifyDomain(domain)
      .then((res) => {
        // console.log(res)
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const verifyEmployee = () => {
    if (Object.keys(domainInfo).length > 0) {
      const data = domainInfo.data.emails;
      for (let i = 0; i < data.length; i++) {
        if (name === data[i].first_name + " " + data[i].last_name) {
          return {
            state: true,
            response: data[i],
          };
        } else {
          return false;
        }
      }
    }
  };
  console.log(verifyEmployee());

  const logUserOut = () => {
    logout().then(() => {
      history.push("/login");
    });
  };

  // console.log(domainInfo.data.domain)

  return (
    <Fragment>
      <div className="main">
        <nav className="header">
          <div className="logo">
            <img src={logo} alt="logo"></img>
          </div>
          <div>
            <button
              className="logout"
              onClick={() => {
                logUserOut();
              }}
            >
              Logout
            </button>
          </div>
        </nav>

        <div className="body">
          <form className="input-card" onSubmit={onSubmitForm}>
            <p>Type in the domain name you want to see employees</p>
            <input
              type="text"
              className="domain input"
              placeholder="input domain name"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              required
            />
            <p>Type in the name of the Employee you want to find</p>
            <input
              type="text"
              className="name input"
              placeholder="input full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <button className="btn btn-success">Search</button>
          </form>

          {Object.keys(domainInfo).length > 0 && (
            <div className="output">
              <div className="domainResult" style={{ width: "18rem" }}>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <span>Domain: </span>
                    {domainInfo.data.domain}
                  </li>
                  <li className="list-group-item">
                    <span>Organization: </span>
                    {domainInfo.data.organization}
                  </li>
                  <li className="list-group-item">
                    <span>Country: </span>
                    {domainInfo.data.country}
                  </li>
                  <li className="list-group-item">
                    <span>State </span>
                    {domainInfo.data.state}
                  </li>
                </ul>
              </div>

              <div className="individualResult">
                {verifyEmployee().state && (
                  <div className="individual">
                    <div className='line'> <span>Email :</span> {verifyEmployee().response.value}</div>
                    <div className='line'>
                     <span>Confidence:</span>  {verifyEmployee().response.confidence}
                    </div>
                    <div className='line'> <span>Position:</span> {verifyEmployee().response.position}</div>
                    <div className='line'>
                     <span>Department:</span>  {verifyEmployee().response.department}
                    </div>
                  </div>
                )}

                {!verifyEmployee() && name.length > 0 && (
                  <div className="individual">
                    {`${name} is not an Employee with ${domainInfo.data.organization}`}
                  </div>
                )}

                {name.length === 0 && (
                  <div className="individual">
                    {`Input an Employee's Fullname to verify if they are with ${domainInfo.data.organization}`}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    domainInfo: state.domain.domainInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    verifyDomain: (url) => dispatch(handleDomainVerification(url)),
    logout: () => dispatch(handleLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
