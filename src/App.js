import Profile from "./Profile";
import PersonalInformation from "./PersonalInformation";
import Messages from "./Messages";
import Information from "./Information";
import Posts from "./Posts";
import "./app.css"
import Aditionals from "./Additionals";
import "./Profile.css"

function App() {
  return (
    <>
    <div className="content">
      <div className="container">
        <div className="row">
        <Profile/>
        </div>
        <div class="row">
          <div class="col-xl-4">
            <PersonalInformation/>
            <Messages/>
          </div>
          <div class="col-xl-8">
            <div class="row">
              <Information/>
              <Posts/>
              <Aditionals/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
