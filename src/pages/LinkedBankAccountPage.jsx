import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faEdit } from '@fortawesome/free-solid-svg-icons';
import Breadcrumbs from '../components/BreadCrum';

function LinkedBankAccount() {
    const styleColor = '#0A3A84';
    return (
        <>

            <div className=" container d-block justify-content-start align-items-start mt-3 w-100 ml-3">

                <div className="row d-flex justify-content-between p-2">
                    <div>
                        <a href="/linkbank/add" className='btn btn-danger float-end px-5'>Add Bank</a>
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
                        backgroundColor: '#BAC8DC'
                    }}>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="success" role="tabpanel" aria-labelledby="success-tab">

                                <table className="table table-scripted table-responsive-md" style={{ textAlign: 'center',backgroundColor: '#BAC8DC ' }}>
                                    <thead className="thead-info" >
                                        <tr>
                                            <th>S. No</th>
                                            <th>Name</th>
                                            <th>Account Number</th>
                                            <th>Acc.Type</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                            <th>EOD Bal.</th>
                                            <th>Current Bal.</th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        <tr>
                                            <td>1</td>
                                            <td>Nic Asia Bank</td>
                                            <td>13123123213123</td>
                                            <td>Debit</td>
                                            <td><FontAwesomeIcon icon={faCircle} style={{ color: 'red' }}></FontAwesomeIcon></td>
                                            <td><a href="linkbank/edit" style={{ color: styleColor }}><FontAwesomeIcon icon={faEdit} style={{
                                                fontSize: '25px'
                                            }} ></FontAwesomeIcon></a></td>
                                            <td>4564564</td>
                                            <td>4564564</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Rastriya Banijya Bank</td>
                                            <td>13123123213123</td>
                                            <td>Credit</td>
                                            <td><FontAwesomeIcon icon={faCircle} style={{ color: 'red' }}></FontAwesomeIcon></td>

                                            <td><a href="linkbank/edit" style={{ color: styleColor }}><FontAwesomeIcon icon={faEdit} style={{
                                                fontSize: '25px'
                                            }}></FontAwesomeIcon></a></td>
                                            <td>4564564</td>
                                            <td>4564564</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Nabil Bank</td>
                                            <td>13123123213123</td>
                                            <td>Debit</td>
                                            <td><FontAwesomeIcon icon={faCircle} style={{ color: 'red' }}></FontAwesomeIcon></td>

                                            <td><a href="linkbank/edit" style={{ color: styleColor }}><FontAwesomeIcon icon={faEdit} style={{
                                                fontSize: '25px'
                                            }} ></FontAwesomeIcon></a></td>
                                            <td>4564564</td>
                                            <td>4564564</td>
                                        </tr>
                                    </tbody>
                                </table>
                                
                                <div className="row p-2" style={{
                                    color: '#0A3A84'
                                }}>
                                    <h4>Total Balance: 12,31,23,123</h4>

                                </div>
                            </div>
                            <div class="tab-pane fade" id="pending" role="tabpanel" aria-labelledby="pending-tab">

                                
                                <div>
                                    <table className="table table-scripted m-0">
                                        <thead className="thead-info" >
                                            <tr>
                                                <th>S. No.</th>
                                                <th>Name</th>
                                                <th>Account Number</th>
                                                <th>Account Type</th>
                                                <th>Status</th>
                                                <th>Approval</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                                <div className="table-responsive" style={{
                                    maxHeight: '175px',
                                    overflowY: 'auto'
                                }}>
                                    <table className="table table-scripted m-0">
                                        <tbody className="transacationDetail">
                                            <tr>
                                                <td>1</td>
                                                <td>Nic Asia Bank</td>
                                                <td>13123123213123</td>
                                                <td>Debit</td>
                                                <td><FontAwesomeIcon icon={faCircle} style={{color:'red'}}></FontAwesomeIcon></td>
                                                <td><span class="status-label approved">Approved</span></td>
                                                <td><a href="linkbank/edit" style={{ color: styleColor }}><FontAwesomeIcon icon={faEdit} style={{ fontSize: '25px' }}></FontAwesomeIcon></a></td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Nic Asia Bank</td>
                                                <td>13123123213123</td>
                                                <td>Debit</td>
                                                <td><FontAwesomeIcon icon={faCircle} style={{color:'green'}}></FontAwesomeIcon></td>
                                                <td><span class="status-label approved">Approved</span></td>
                                                <td><a href="linkbank/edit" style={{ color: styleColor }}><FontAwesomeIcon icon={faEdit} style={{ fontSize: '25px' }}></FontAwesomeIcon></a></td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Nic Asia Bank</td>
                                                <td>13123123213123</td>
                                                <td>Debit</td>
                                                <td><FontAwesomeIcon icon={faCircle} style={{color:'green'}}></FontAwesomeIcon></td>
                                                <td><span class="status-label approved">Approved</span></td>
                                                <td><a href="linkbank/edit" style={{ color: styleColor }}><FontAwesomeIcon icon={faEdit} style={{ fontSize: '25px' }}></FontAwesomeIcon></a></td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Nic Asia Bank</td>
                                                <td>13123123213123</td>
                                                <td>Debit</td>
                                                <td><FontAwesomeIcon icon={faCircle} style={{color:'red'}}></FontAwesomeIcon></td>
                                                <td><span class="status-label pending">Pending</span></td>
                                                <td><a href="linkbank/edit" style={{ color: styleColor }}><FontAwesomeIcon icon={faEdit} style={{ fontSize: '25px' }}></FontAwesomeIcon></a></td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>Nic Asia Bank</td>
                                                <td>13123123213123</td>
                                                <td>Debit</td>
                                                <td><FontAwesomeIcon icon={faCircle} style={{color:'red'}}></FontAwesomeIcon></td>
                                                <td><span class="status-label pending">Pending</span></td>
                                                <td><a href="linkbank/edit" style={{ color: styleColor }}><FontAwesomeIcon icon={faEdit} style={{ fontSize: '25px' }}></FontAwesomeIcon></a></td>
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
export default LinkedBankAccount;