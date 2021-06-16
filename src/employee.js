import React, { Component } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
//import './emplist.css';
var queryString = require('querystring');

/*var lstEmployee = [
    {name:"Harsh", age: 20, city: "Goa" },
    {name:"Khyati", age: 20, city: "Goa"},
    {name:"Viresh", age: 20, city: "Goa"}
];*/
//stateful Component 
export default class EmployeeList extends Component{
    //to initialize the state
    constructor(props){
        super(props);
        console.log("constructor() is called");
        this.state = { 
            lstEmployee: []
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
        this.getEmployee();
        console.log("call once in the lifecycle of a component");
        //getListEmployee();
        //axios.get(window.httpURL + '/employee/list')
    };

    componentWillUnmount(){
        console.log("when the component is destroyed");
    }
    
    componentDidUpdate(){
        //should be changed from parent component
        console.log("componentDiid called when props changes" + this.props.screen);
    }

    shouldComponentUpdate(nextProps, prevProps) {
        console.log("to decide if component should re-this render");
        //return false;
        return nextProps.screen !== this.props.screen;
    }


    //life cycle methods
    getEmployee=()=>{
        //getting list from backened
        axios.post(window.httpURL + '/employee/list',
        //queryString.stringify({ "empId": empId }), 
        {
            headers: { 'tokenid': '' },
            withCredentials: true,
        }).then((response) => {
            console.log(response.data);
        console.log(response.data.lstEmployee);
            if (response.data.SvcStatus === 'Success') {
                console.log(response.data.SvcMsg);
                console.log(response.data.lstEmployee);
                this.setState({lstEmployee: response.data.lstEmployee});
        } else {
            console.error(response.data.SvcMsg);
        }
        }).catch((e) => {
            console.error('Service failed: ' + e);
        });
            //this.setState({lstEmployee: lstEmployee});
        }

    render(){
        console.log("render() is called number of times state changes.");
        return(
        <div className="container col-sm-6">
            <table className="table table-fixed">
                <thead>
                    <tr>
                     <th width="33.3%">Name</th>
                     <th width="33.3%">Age</th>
                     <th width="33.3%">City</th>
                     </tr>
                </thead>
                </table>
                <div className="tableDiv "style={{width:"catc(100%-18px)", overflowY: "scroll"}}>
                    <table id="tableEmp" className="table-fixed" >
                        <colgroup>
                              <col width="40%"/>
                              <col width="20%"/>
                              <col width="40%"/>
                        </colgroup>
                        <tbody id="tbodyEmp" className="table-fixed">
                            {
                                this.state.lstEmployee.map(emp=>
                                    <tr>
                                        <td width="33.3%">{emp.name}</td>
                                        <td width="33.3%">{emp.city}</td>
                                        <td width="33.3%">{emp.age}</td>
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