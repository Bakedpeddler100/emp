import React, {useState} from 'react'


const PeriodTypeAddForm = props => {
	const initialFormState = { 
        periodTypeId: 0, 
        periodType: '', 
        canAssignTeacher: false, 
        canCoverSyllabus: false,
        updatedBy: '',
        updatedOn: ''
    };

    const [periodTypeObj, setPeriodTypeObj] = useState(initialFormState);
	
	const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log(name);
        //console.log(event.target.type);
        //console.log(event.target.className);
        console.log(value);
        setPeriodTypeObj({ ...periodTypeObj, [name]: value })
        console.log(periodTypeObj);
      }
    
    const handleCboxChange = (event) => {
        const { name, checked } = event.target;
        console.log(name);
        //console.log(event.target.type);
        //console.log(event.target.className);
        console.log(checked);
        setPeriodTypeObj({ ...periodTypeObj, [name]: checked })
        console.log(periodTypeObj);
      }

	return (
		<form className="form-horizontal"
			onSubmit={event => {
				event.preventDefault()
				if (!periodTypeObj.periodType || !periodTypeObj.canAssignTeacher || !periodTypeObj.canCoverSyllabus) return
                console.log('periodTypeObj: ' + JSON.stringify(periodTypeObj));
				props.addPeriodType(periodTypeObj)
				setPeriodTypeObj(initialFormState);
			}}
		>
        {/* <h1>ADD USER</h1> */}
		<div className="form-group hidden">
            <label className="control-label">Period Type ID </label>
            <input className="form-control" type="text" name="periodTypeId" value={periodTypeObj.periodTypeId} onChange={handleInputChange}/>
        </div>
        <div className="form-group">
            <label className="control-label">Period Type</label>
            <input className="form-control" type="text" name="periodType" value={periodTypeObj.periodType} onChange={handleInputChange}/>
        </div>
        <div className="form-group">
            <label className="control-label">Cover Syllabus</label>
            <input className="form-control" type="checkbox" name="canCoverSyllabus" checked={periodTypeObj.canCoverSyllabus} onChange={handleCboxChange}/>
        </div>
        <div className="form-group">
            <label className="control-label">Assign Teacher</label>
            <input className="form-control" type="checkbox" name="canAssignTeacher" checked={periodTypeObj.canAssignTeacher} onChange={handleCboxChange}/>
        </div>
        <div className="form-group">
            <label className="control-label">Updated By</label>
            <input className="form-control" type="text" name="updatedBy" value={periodTypeObj.updatedBy} onChange={handleInputChange}/>
        </div>
        <div className="form-group">
            <label className="control-label">Updated On</label>
            <input className="form-control" type="datetime" name="updatedOn" value={periodTypeObj.updatedOn} onChange={handleInputChange}/>
        </div>
        <button className="btn btn-success" type="submit" value="Save">Save</button>
		</form>
	)
}

export default PeriodTypeAddForm;