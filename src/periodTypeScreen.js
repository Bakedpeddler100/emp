import React, { useState, useEffect } from 'react';
import PeriodTypeTable from './periodTypeTable';
import PeriodTypeEditForm from './periodTypeEditForm';
import PeriodTypeAddForm from './periodTypeAddForm';
import axios from 'axios';

const PeriodTypeScreen = () => {
    const lstPeriodTypeData = [];
        // periodTypeId: 1, 
        // periodType: "Space and Technology", 
        // canAssignTeacher: false, 
        // canCoverSyllabus: false,
        // updatedBy: "Khyati",
        // updatedOn: "2021-01-15 15:23:45.0"
    
    const initialFormState = { 
        periodTypeId: null,
        periodType: '',
        canAssignTeacher: false, 
        canCoverSyllabus: false,
        updatedBy: '',
        updatedOn: ''
    }
    const [lstPeriodType, setLstPeriodType] = useState(lstPeriodTypeData);
    const [editing, setEditing] = useState(false);

    useEffect(
        () => {
          getLstPeriodType()
        },
        []
    )
    const [currentPeriodType, setCurrentPeriodType ] = useState(initialFormState);
    
    const addPeriodType = (obj) => {
        obj.periodTypeId = lstPeriodType.length + 1
        setLstPeriodType([...lstPeriodType, obj]) //it's a spread operator

        //lstPeriodType.push(obj);
        //setLstPeriodType(lstPeriodType);
    }

    const deletePeriodType = (id) => {
        setEditing(false);
		setLstPeriodType(lstPeriodType.filter((obj) => obj.periodTypeId !== id));
	}

    const updatePeriodType = (id, updatedPeriodType) => {
        console.log("updatePeriodType:" + updatePeriodType);
        console.log('periodTypeId: ' + id);
		setEditing(false);
		setLstPeriodType(lstPeriodType.map(obj => (obj.periodTypeId === id ? updatedPeriodType : obj)))
	}

	const editRow = obj => {
		setEditing(true)

		setCurrentPeriodType({ 
            periodTypeId: obj.periodTypeId, 
            periodType: obj.periodType, 
            canCoverSyllabus: obj.canCoverSyllabus,
            canAssignTeacher: obj.canAssignTeacher,
            updatedBy: 'Khyati',
            updatedOn: new Date().toString()
        });
	}

    const getLstPeriodType = () => {

        axios({
            url: 'http://sms.kmsgtech.com:8080' + '/sms/mst/periodType/list',
            method: "POST",
            params: {"screenId" : 1},
            headers: { 'tokenId': '7zbhkfjmygmbma7padpm4lcs06h2m3' },
            withCredentials: true,
        }).then((response) => {
            if (response.data.SvcStatus === 'Success') {
                setLstPeriodType(response.data.lstPeriodType)
            }
            
            else {
                console.error(response.data.SvcMsg);
                if (response.data.SvcMsg === 'You are not logged in') {
                    setTimeout(function () { window.location.href = ('/') }, 2000);
                    return false;
                }
                else if (response.data.SvcMsg === 'Your Session is expired, login again') {
                    setTimeout(function () { window.location.href = ('/') }, 2000);
                    return false;
                }
    
        }

        }).catch((error) => {

            console.error("Service failed " + error);
        });

    }  
    return (
        <div className="container">
            <div className="col-sm-11 col-centered">
                <div className="col-sm-6" style={{padding: '10px'}}>
                    <PeriodTypeTable data={lstPeriodType} deletePeriodType={deletePeriodType} editRow={editRow}/>
                </div>
                <span className="glyphicon glyphicon-plus" onClick={setEditing}></span>
            <div className="col-sm-6">
					{editing ? (
						<div>
							<h2>Edit user</h2>
							<PeriodTypeEditForm
                                editing={editing}
								setEditing={setEditing}
								currentPeriodType={currentPeriodType}
								updatePeriodType={updatePeriodType}
							/>
						</div>
					) : (
						<div className="col-sm-6">
							<h2>ADD USER</h2>
							<PeriodTypeAddForm addPeriodType={addPeriodType} />
						</div>
					)}
            </div>
            </div>
        </div>
  );
}

export default PeriodTypeScreen;