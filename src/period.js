import React, { Component } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import Form from './period_form';
//import './emplist.css';
//import {FontAwesome} from 'react-icons/fa';
var queryString = require('querystring');


var lstPeriod = [
    {type:"Assembly", CoverSyllabus : "Yes", AssignTeacher: "No", UpdatedOn: "Date", UpdatedBy: "Khyati"},
    {type:"Physics", CoverSyllabus : "No", AssignTeacher: "Yes", UpdatedOn: "Date", UpdatedBy: "Khyati"},
    {type:"Chemistry", CoverSyllabus : "Yes", AssignTeacher: "No", UpdatedOn: "Date", UpdatedBy: "Khyati"},
    {type:"Maths", CoverSyllabus : "Yes", AssignTeacher: "Yes", UpdatedOn: "Date", UpdatedBy: "Khyati"},
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


export default class Period extends Component{
    setform=(emp)=>{
        console.log(emp);
        document.getElementById('type').value = emp.type
        document.getElementById('CoverSyllabus').value = emp.CoverSyllabus
        document.getElementById('AssignTeacher').value = emp.AssignTeacher
        document.getElementById('UpdatedBy').value = emp.UpdatedBy
        document.getElementById('UpdatedOn').value = emp.UpdatedOn
    }
    //to initialize
    constructor(){
        super();
        this.state = { 
            lstPeriod: []
        };
        //console.log("constructor: state initialized" + this.props.screen);
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
            }]*/
    componentDidMount(){
        this.getPeriod();
        //axios.get(window.httpURL + '/employee/list')
    };
    getPeriod = () =>{
        this.setState({lstPeriod: lstPeriod});
    }
  
//lifecycle 
    render(){
        console.log("rendered");
        return(
        <div className="container col-sm-6">
            <div className="col-sm-6">
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
                <div className="tableDiv" style={{width:"catc(100%-18px)", overflowY: "scroll"}}>
                    <table id="tableEmp" className="table-fixed" >
                        {<colgroup>
                              <col width="100px"/>
                              <col width="100px"/>
                              <col width="100px"/>
                              <col width="100px"/>
                              <col width="100px"/>
                        </colgroup>}
                        <tbody id="tbodyEmp" className="table-fixed">
                            {
                                lstPeriod.map(emp=>
                                    <tr>
                                        <td className="" width="700px">{emp.type}</td>
                                        <td className="" width="700px">{emp.CoverSyllabus}</td>
                                        <td className="" width="700px">{emp.AssignTeacher}</td>
                                        <td className="" width="700px">{emp.UpdatedOn}</td>
                                        <td className="" width="700px">{emp.UpdatedBy}</td>
                                        <td className="" width="700px"><span>
                                            <button><img onClick={() => this.setform(emp)} src={require("./edit.png").default} height="5px" width="5px"/></button>
                                            <button><img onClick={() => this.setform(emp)} src={require("./delete.png").default} height="5px" width="5px"/></button>
                                            </span>
                                        </td> 
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                </div>
                <div className="col-sm-6">
                    <Form></Form>
                </div>
           </div>)
    }
}
//map is just a loop
//export default employeeList;