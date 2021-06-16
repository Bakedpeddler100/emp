import React, { useState, useEffect } from 'react'

const PeriodTypeEditForm = (props) => {
  console.log("EditForm" + JSON.stringify(props.currentPeriodType));
  const [periodTypeObj, setPeriodTypeObj] = useState(props.currentPeriodType)

  useEffect(
    () => {
      setPeriodTypeObj(props.currentPeriodType)
    },
    [ props ]
  )
  
  const handleInputChange = (event) => {
    const { name, value } = event.target
    console.log(event.target.name);
    console.log(event.target.type);
    console.log(event.target.className);
    console.log(event.target.value);
    setPeriodTypeObj({ ...periodTypeObj, [name]: value })
    console.log(periodTypeObj);
  }

  const handleCboxChange = (event) => {
    const { name, checked } = event.target
    console.log(event.target.name);
    console.log(event.target.type);
    console.log(event.target.className);
    console.log(event.target.checked);
    setPeriodTypeObj({ ...periodTypeObj, [name]: checked })
    console.log(periodTypeObj);
  }

  return (
    <form onSubmit={(event) => {
        event.preventDefault()
        console.log('onSubmit: ' + JSON.stringify(periodTypeObj));
        props.updatePeriodType(periodTypeObj.periodTypeId, periodTypeObj)
    }}
    >
    {/* <form className="form-horizontal col-sm-6 col-centered" style={{ margin: "0 auto", border: '1px solid #ccc' }}> */}
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
        <button className="btn btn-warning" type="button" onClick={() => props.setEditing(false)}>Cancel</button>
        <button className="btn btn-success" type="submit" >Save</button>
        </form>
        // </form>
  )
}

export default PeriodTypeEditForm;