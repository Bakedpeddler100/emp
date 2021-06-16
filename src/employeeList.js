import React, { Component } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
//import './emplist.css';
//import {FontAwesome} from 'react-icons/fa';
var queryString = require('querystring');

var lstEmployee = [
    {Type:"Assembly", CoverSyllabus : "Yes", AssignTeacher: "No", UpdatedOn: "Date", UpdatedBy: "Khyati", Action:"" },
    {Type:"Physics", CoverSyllabus : "No", AssignTeacher: "Yes", UpdatedOn: "Date", UpdatedBy: "Khyati", Action:"" },
    {Type:"Chemistry", CoverSyllabus : "Yes", AssignTeacher: "No", UpdatedOn: "Date", UpdatedBy: "Khyati", Action:"" },
    {Type:"Maths", CoverSyllabus : "Yes", AssignTeacher: "Yes", UpdatedOn: "Date", UpdatedBy: "Khyati", Action:"" },
];
/*axios.post(window.httpURL + '/employee/list',
    //queryString.stringify({ "empId": empId }), 
    {
    headers: { 'tokenid': '' },
    withCredentials: true,
    }).then((response) => {
       console.log(response.data);
       //console.log(response.data.lstEmployee);
        if (response.data.SvcStatus === 'Success') {
            console.log(response.data.SvcMsg);
            console.log(response.data.lstEmployee);
        } else {
            console.error(response.data.SvcMsg);
        }
    }).catch((e) => {
        console.error('Service failed: ' + e);
    });*/


export default class EmployeeList extends Component{
    //to initialize
    /*constructor(props){
        super(props);
        this.state = { lstEmployee: []};
        console.log("constructor: state initialized" + this.props.screen);
    }
        /*this.state = {
            lstEmployee = [
            {
                "name": "Khyati",
                "age" : 18,
                "city" : "NOwwhere"
            },
            {
                 
                "name": "Khyati_1",
                "age" : 19,
                "city" : "NOwwhere"
            }]
    componentDidMount(){
        getListEmployee();
        //axios.get(window.httpURL + '/employee/list')
    };*/

  
//lifecycle 
    render(){
        console.log("rendered");
        return(
        <div className="container col-sm-6">
            <table className="table table-fixed">
                <thead>
                    <tr>
                     <th width="16.67%">Type</th>
                     <th width="16.67%">Cover Syllabus</th>
                     <th width="16.67%">Assign Teacher</th>
                     <th width="16.67%">Updated on</th>
                     <th width="16.67%">Updated By</th>
                     <th width="16.67%">Action</th>
                     </tr>
                </thead>
                </table>
                <div className="tableDiv "style={{width:"catc(100%-18px)", overflowY: "scroll"}}>
                    <table id="tableEmp" className="table-fixed" >
                        {/* <colgroup>
                              <col width="40%"/>
                              <col width="40%"/>
                              <col width="40%"/>
                        </colgroup> */}
                        <tbody id="tbodyEmp" className="table-fixed">
                            {
                                lstEmployee.map(emp=>
                                    <tr>
                                        <td width="16.67%">{emp.Type}</td>
                                        <td width="16.67%">{emp.CoverSyllabus}</td>
                                        <td width="16.67%">{emp.AssignTeacher}</td>
                                        <td width="16.67%">{emp.UpdatedOn}</td>
                                        <td width="16.67%">{emp.UpdatedBy}</td>
                                        <td width="16.67%">{emp.Action}<i class="far fa-trash-alt"></i></td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>)
    }
}
//map is just a loop
//export default employeeList;

