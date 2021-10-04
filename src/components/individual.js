import React, { Fragment, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { handleIndividualVerification } from "../redux/actions/individual/Action";
import { handleLogout } from "../redux/actions/user/Action";
import logo from "../images/hun-logo.png";
import "../scss/individual.scss";

function Individual(props) {
  const history = useHistory();
  const { verifyIndividual, logout, dataInfo } = props;
  const [domain, setDomain] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setLastname] = useState("");
  // console.log(employees)

  const onSubmitForm = async (e) => {
    e.preventDefault();
    verifyIndividual(domain,firstname,lastname)
      .then((res) => {
        // console.log(res);
        return res;
      })
      .catch((err) => {
        alert("input a valid domain name");
        return console.log(err);
      });
  };

  console.log(dataInfo)


  const logUserOut = () => {
    logout().then(() => {
      history.push("/login");
    });
  };


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

        <div className="main-body" id="hardguy">
          <div className="input-card" id="inputSide">
            <form onSubmit={onSubmitForm}>
              <div>
                <p className="paragraph">
                  Type in the domain name you want to see employees
                </p>
              </div>

              <input
                type="text"
                className="domain input"
                placeholder="input domain name"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                required
              />

              <div>
                <p className="paragraph">
                  Type in the name of the Employee you want to find
                </p>
              </div>

              <input
                type="text"
                className="first input"
                placeholder="input firstname"
                value={firstname}
                onChange={(e) => setfirstname(e.target.value)}
              />

              <input
                type="text"
                className="last input"
                placeholder="input lastname"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />

              <br />
             
              <button className="btn btn-success">Search</button>
              <Link to='main' className='long'>
              <button className="btn btn-success">Search Domain</button>
              </Link>
            </form>
          </div>

             {Object.keys(dataInfo).length > 0 &&
             <div className='individual-output'>
             <ul className='results'>
               <li><span>Email: </span>{dataInfo.data.email}</li>
               <li><span>Company: </span>{dataInfo.data.company}</li>
               <li><span>LinkedIn: </span>{dataInfo.data.linkedin_url}</li>
               <li><span>Score: </span>{dataInfo.data.score}</li>
               <li><span>Position: </span>{dataInfo.data.position}</li>
              
             </ul>
           </div>
             } 
            
          
        </div>
      </div>
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    dataInfo: state.individual.dataInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    verifyIndividual: (url, first_name, last_name) =>
      dispatch(handleIndividualVerification(url, first_name, last_name)),
    logout: () => dispatch(handleLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Individual);
