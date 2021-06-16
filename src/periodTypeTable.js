import React from 'react';

const PeriodTypeTable = (props) => (
  <table style={{width:'calc(100%-18px)'}}>
    <thead>
      <tr>
        <th className="hidden">Period Type ID</th>
        <th width="20%">Period Type</th>
        <th width="10%">Cover Syllabus</th>
        <th width="20%">Assign Teacher</th>
        <th width="20%">Updated on</th>
        <th width="20%">Updated By</th>
        <th width="10%">Action</th>
      </tr>
    </thead>
    {/* <div className="tableDiv" style={{width:"catc(100%-18px)", overflowY: "scroll"}}>
        <table id="tableEmp" className="table-fixed" >
            {<colgroup>
                <col width="20%"/>
                <col width="10%"/>
                <col width="10%"/>
                <col width="20%"/>
                <col width="20%"/>
                <col width="20%"/>
            </colgroup>} */}
    <tbody>
        {props.data.map((obj) => (
            
            <tr key = {obj.PeriodTypeId} data={obj}>
               <td className="hidden">{obj.PeriodTypeId}</td>
               <td>{obj.periodType}</td> 
               <td>{obj.canCoverSyllabus ? 'Yes' : 'No'}</td> 
               <td>{obj.canAssignTeacher ? 'Yes' : 'No'}</td> 
               <td>{obj.updatedOn}</td> 
               <td>{obj.updatedBy}</td> 
               <td>
                 <span>
                    <button className="glyphicon glyphicon-pencil" onClick={() => {props.editRow(obj)}}></button>
                    <button className="glyphicon glyphicon-minus" onClick={() => props.deletePeriodType(obj.periodTypeId)}></button> 
                  </span>
                </td>
            </tr>
        ))}
    </tbody>
    </table>)

export default PeriodTypeTable;

// style={{width:"10px"}}
// className="button muted-button"