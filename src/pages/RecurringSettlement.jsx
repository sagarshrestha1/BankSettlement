import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faEdit } from '@fortawesome/free-solid-svg-icons';
import Breadcrumbs from '../components/BreadCrum';
import SearchInput from '../components/SearchInput';

function RecurringSettlements() {
    const styleColor = '#0A3A84';
    return (
        <>

            <div className=" container d-block justify-content-start align-items-start mt-3 w-100 ml-3">

                <div className="row d-flex justify-content-between p-2">
                    <div>
                        <div className="float-end">
                            <SearchInput />
                            <a href="/recurringsettlements/addrecurringsettlement" className='btn btn-danger px-5 ml-2'>Add Settlement</a>
                        </div>
                        <h3 style={{
                            color: '#0A3A84'
                        }}><Breadcrumbs /></h3>

                    </div>
                </div>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-teams nav-item" role="presentation">
                        <button
                            className="nav-link active "
                            id="success-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#success"
                            role="tab"
                            aria-controls="success"
                            aria-selected="true"
                        >
                            Success
                        </button>
                    </li>
                    <li className="nav-teams nav-item" role="presentation">
                        <button
                            className="nav-link"
                            id="pending-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#pending"
                            type="button"
                            role="tab"
                            aria-controls="pending"
                            aria-selected="false"
                        >
                            Pending
                        </button>
                    </li>

                </ul>
                <div className="row p-0">
                    <div className="col-9 col-md p-3  " style={{
                        backgroundColor: '#F3F5F9'
                    }}>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="success" role="tabpanel" aria-labelledby="success-tab">

                                <table className="table table-scripted table-responsive-md" style={{ textAlign: 'center', backgroundColor: '#F3F5F9 ' }}>
                                    <thead className="thead-info" >
                                        <tr>
                                            <th>Created Date</th>
                                            <th>Dr. Bank</th>
                                            <th>Cr. Bank</th>
                                            <th>Settlement Time</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                            <th>Current Bal.</th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        <tr>
                                            <td>4/30/2025</td>
                                            <td>Nic Asia Bank</td>
                                            <td>RBB</td>
                                            <td>16:05:55</td>
                                            <td><FontAwesomeIcon icon={faCircle} style={{ color: 'lightgreen' }}></FontAwesomeIcon></td>
                                            <td><a href="linkbank/edit" style={{ color: styleColor }}><FontAwesomeIcon icon={faEdit} style={{
                                                fontSize: '25px'
                                            }} ></FontAwesomeIcon></a></td>
                                            <td>4564564</td>
                                           
                                        </tr>
                                        <tr>
                                            <td>4/30/2025</td>
                                            <td>Nabil Bank</td>
                                            <td>RBB</td>
                                            <td>16:05:55</td>
                                            <td><FontAwesomeIcon icon={faCircle} style={{ color: 'lightgreen' }}></FontAwesomeIcon></td>
                                            <td><a href="linkbank/edit" style={{ color: styleColor }}><FontAwesomeIcon icon={faEdit} style={{
                                                fontSize: '25px'
                                            }} ></FontAwesomeIcon></a></td>
                                            <td>4564564</td>
                                           
                                        </tr>
                                        <tr>
                                            <td>4/30/2025</td>
                                            <td>Siddhartha Bank</td>
                                            <td>RBB</td>
                                            <td>16:05:55</td>
                                            <td><FontAwesomeIcon icon={faCircle} style={{ color: 'lightgreen' }}></FontAwesomeIcon></td>
                                            <td><a href="linkbank/edit" style={{ color: styleColor }}><FontAwesomeIcon icon={faEdit} style={{
                                                fontSize: '25px'
                                            }} ></FontAwesomeIcon></a></td>
                                            <td>4564564</td>
                                           
                                        </tr>
                                        
                                    </tbody>
                                </table>

                            </div>
                            <div class="tab-pane fade pb-5 pt-3" id="pending" role="tabpanel" aria-labelledby="pending-tab">


                                <div>
                                    <table className="table table-scripted m-0" style={{ tableLayout: 'fixed', textAlign: 'center' }}>
                                        <thead className="thead-info" >
                                            <tr>
                                                <th>Created Date</th>
                                                <th>Dr. Bank</th>
                                                <th>Type</th>
                                                <th>Settlement Time</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                                <th>Approval</th>
                                                <th>Current Dr. Bal.</th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                                <div className="table-responsive" style={{
                                    maxHeight: '175px',
                                    overflowY: 'auto'
                                }}>
                                    <table className="table table-scripted m-0" style={{ tableLayout: 'fixed', textAlign: 'center' }}>
                                        <tbody className="transacationDetail">
                                            <tr>
                                                <td>4/30/2025</td>
                                                <td>ADBL</td>
                                                <td>Recurring</td>
                                                <td>-</td>
                                                <td><FontAwesomeIcon icon={faCircle} style={{ color: 'red' }}></FontAwesomeIcon></td>
                                                <td><span class="status-label approved">Approved</span></td>
                                                <td><a href="linkbank/edit" style={{ color: styleColor }}><FontAwesomeIcon icon={faEdit} style={{ fontSize: '25px' }}></FontAwesomeIcon></a></td>
                                                <td>456543</td>
                                            </tr>
                                            <tr>
                                                <td>4/30/2025</td>
                                                <td>Laxmi Bank</td>
                                                <td>Recurring</td>
                                                <td>16:05:55</td>
                                                <td><FontAwesomeIcon icon={faCircle} style={{ color: 'lightgreen' }}></FontAwesomeIcon></td>
                                                <td><span class="status-label pending">Pending</span></td>
                                                <td><a href="linkbank/edit" style={{ color: styleColor }}><FontAwesomeIcon icon={faEdit} style={{ fontSize: '25px' }}></FontAwesomeIcon></a></td>
                                                <td>456543</td>
                                            </tr>
                                            <tr>
                                                <td>4/30/2025</td>
                                                <td>ADBL</td>
                                                <td>Recurring</td>
                                                <td>-</td>
                                                <td><FontAwesomeIcon icon={faCircle} style={{ color: 'red' }}></FontAwesomeIcon></td>
                                                <td><span class="status-label approved">Approved</span></td>
                                                <td><a href="linkbank/edit" style={{ color: styleColor }}><FontAwesomeIcon icon={faEdit} style={{ fontSize: '25px' }}></FontAwesomeIcon></a></td>
                                                <td>456543</td>
                                            </tr>
                                            <tr>
                                                <td>4/30/2025</td>
                                                <td>ADBL</td>
                                                <td>Recurring</td>
                                                <td>-</td>
                                                <td><FontAwesomeIcon icon={faCircle} style={{ color: 'red' }}></FontAwesomeIcon></td>
                                                <td><span class="status-label approved">Approved</span></td>
                                                <td><a href="linkbank/edit" style={{ color: styleColor }}><FontAwesomeIcon icon={faEdit} style={{ fontSize: '25px' }}></FontAwesomeIcon></a></td>
                                                <td>456543</td>
                                            </tr>
                                            <tr>
                                                <td>4/30/2025</td>
                                                <td>ADBL</td>
                                                <td>Recurring</td>
                                                <td>-</td>
                                                <td><FontAwesomeIcon icon={faCircle} style={{ color: 'red' }}></FontAwesomeIcon></td>
                                                <td><span class="status-label approved">Approved</span></td>
                                                <td><a href="linkbank/edit" style={{ color: styleColor }}><FontAwesomeIcon icon={faEdit} style={{ fontSize: '25px' }}></FontAwesomeIcon></a></td>
                                                <td>456543</td>
                                            </tr>
                                            <tr>
                                                <td>4/30/2025</td>
                                                <td>ADBL</td>
                                                <td>Recurring</td>
                                                <td>-</td>
                                                <td><FontAwesomeIcon icon={faCircle} style={{ color: 'red' }}></FontAwesomeIcon></td>
                                                <td><span class="status-label approved">Approved</span></td>
                                                <td><a href="linkbank/edit" style={{ color: styleColor }}><FontAwesomeIcon icon={faEdit} style={{ fontSize: '25px' }}></FontAwesomeIcon></a></td>
                                                <td>456543</td>
                                            </tr>
                                            <tr>
                                                <td>4/30/2025</td>
                                                <td>ADBL</td>
                                                <td>Recurring</td>
                                                <td>-</td>
                                                <td><FontAwesomeIcon icon={faCircle} style={{ color: 'red' }}></FontAwesomeIcon></td>
                                                <td><span class="status-label approved">Approved</span></td>
                                                <td><a href="linkbank/edit" style={{ color: styleColor }}><FontAwesomeIcon icon={faEdit} style={{ fontSize: '25px' }}></FontAwesomeIcon></a></td>
                                                <td>456543</td>
                                            </tr>
                                           

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}
export default RecurringSettlements;