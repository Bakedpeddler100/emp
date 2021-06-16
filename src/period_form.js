import './emp.css';
import axios from 'axios';
var queryString = require('querystring');
window.httpURL = "http://sms.kmsgtech.com:8244";
//window.httpURL = "http://sms.kmsgtech.com:8080/sms/mst/periodType/list?screenId=3";
function Form() {

  function doSomething() {

    console.log("hello team");
    var employee = {
      type: document.getElementById("type").value,
      CoverSyllabus: document.getElementById("CoverSyllabus").value,
      AssignTeacher: document.getElementById("AssignTeacher").value,
    }

    

    //var httpURL = "http://sms.kmsgtech.com:8244";

    axios.post(window.httpURL + '/employee/save',
      queryString.stringify({ "employee": JSON.stringify(employee) }), {
      headers: { 'tokenid': '' },
      withCredentials: true,
    }).then((response) => {
      console.log(response.data);
      if (response.data.SvcStatus === 'Success') {
        console.log(response.data.SvcMsg);
      } else {
        console.error(response.data.SvcMsg);
      }
    }).catch((e) => {
      console.error('Service failed: ' + e);
    });
  }
  return (
    <div className="App col-sm-12">

      <form className="form-horizontal col-sm-6 col-centered" style={{ margin: "0 auto", border: '1px solid #ccc' }}>
        <div className="form-group">
          <label className="control-label" htmlFor="name">Period: </label>
          <input className="form-control" type="text" name="name" id="name" />
        </div>
        <div className="form-group">
          <label className="control-label" htmlFor="age" >Cover Syllabus: </label>
          <input className="form-control" type="text" name="age" id="age" />
        </div>
        <div className="form-group">
          <label className="control-label" htmlFor="city" >Assign Teacher: </label>
          <input className="form-control" type="text" name="city" id="city" />
        </div>
        <div className="form-group">
          <input type="button" value="Save" onClick={doSomething} />
        </div>
      </form>
    </div>
  );
}

export default Form;









