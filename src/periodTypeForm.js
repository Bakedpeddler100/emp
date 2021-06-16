import './emp.css';
//import axios from 'axios';
import React, {useState} from 'react';
//var queryString = require('querystring');
window.httpURL = "http://sms.kmsgtech.com:8244";
// import PeriodTypeScreen from './periodTypeScreen';
// import PeriodTypeTable from './periodTypeTable';
// import PeriodTypeEditForm from './periodTypeEditForm';
// import PeriodTypeAddForm from './periodTypeAddForm';

//window.httpURL = "http://sms.kmsgtech.com:8080/sms/mst/periodType/list?screenId=3";



    const PeriodTypeForm = (props) => {
        const initialFormState = { 
            periodTypeID: 0, 
            periodType: '', 
            canCoverSyllabus: false, 
            canAssignTeacher: false,  
            updatedBy: '', 
            updatedOn: ''
        }
        const [periodTypeObj, setPeriodTypeObj] = useState(initialFormState);
        const [lstPeriodType, setLstPeriodType] = useState(lstPeriodTypeData);
    
        //const [currentPeriodType, setCurrentPeriodType ] = useState(initialFormState);
        
        const handleInputChange = (event) => {
            const { name, value } = event.target
            setPeriodTypeObj({ ...periodTypeObj, [name]: value })
        }
        const deletePeriodType = (id) => {
            setLstPeriodType(lstPeriodType.filter((obj) => obj.periodTypeID !== id));
        }
        return (
            <form className="form-horizontal"
            onSubmit={(event) => {
                event.preventDefault()
                if (!periodTypeObj.periodType) return
                props.addPeriodType(periodTypeObj)
                setPeriodTypeObj(initialFormState);
            }}>
            <form className="form-horizontal col-sm-6 col-centered" style={{ margin: "0 auto", border: '1px solid #ccc' }}>
                <div className="form-group hidden">
                    <label className="control-label">Period Type ID </label>
                    <input className="form-control" type="text" name="periodTypeID" value={periodTypeObj.periodTypeID} onChange={handleInputChange}/>
                </div>
                <div className="form-group">
                    <label className="control-label">Period Type</label>
                    <input className="form-control" type="text" name="periodType" value={periodTypeObj.periodType} onChange={handleInputChange}/>
                </div>
                <div className="form-group">
                    <label className="control-label">Cover Syllabus</label>
                    <input className="form-control" type="checkbox" name="canCoverSyllabus" value={periodTypeObj.canCoverSyllabus} onChange={handleInputChange}/>
                </div>
                <div className="form-group">
                    <label className="control-label">Assign Teacher</label>
                    <input className="form-control" type="checkbox" name="canAssignTeacher" value={periodTypeObj.canAssignTeacher} onChange={handleInputChange}/>
                </div>
                <button className="btn btn-success" type="button" value="Save">Save</button>
            </form>
            </form>
            )
    }

//     console.log("hello team");
//     var employee = {
//       type: document.getElementById("type").value,
//       CoverSyllabus: document.getElementById("CoverSyllabus").value,
//       AssignTeacher: document.getElementById("AssignTeacher").value,
//     }

    

//     //var httpURL = "http://sms.kmsgtech.com:8244";

//     axios.post(window.httpURL + '/employee/save',
//       queryString.stringify({ "employee": JSON.stringify(employee) }), {
//       headers: { 'tokenid': '' },
//       withCredentials: true,
//     }).then((response) => {
//       console.log(response.data);
//       if (response.data.SvcStatus === 'Success') {
//         console.log(response.data.SvcMsg);
//       } else {
//         console.error(response.data.SvcMsg);
//       }
//     }).catch((e) => {
//       console.error('Service failed: ' + e);
//     });
//   }

// }

export default PeriodTypeForm; 