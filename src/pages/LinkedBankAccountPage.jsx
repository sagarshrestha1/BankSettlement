import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
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
                <div className="row p-2">
                    <div className="col-9 col-md p-3 ml-3" style={{
                        backgroundColor: '#F3F5F9'
                    }}>
                        <table className="table table-scripted table-responsive-md">
                            <thead className="thead-info" >
                                <tr>
                                    <th>S. No</th>
                                    <th>Name</th>
                                    <th>Account Number</th>
                                    <th>Action</th>
                                    <th>EOD Bal.</th>
                                    <th>Current Bal.</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Nic Asia Bank</td>
                                    <td>13123123213123</td>
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
                                    <td><a href="linkbank/edit" style={{ color: styleColor }}><FontAwesomeIcon icon={faEdit} style={{
                                        fontSize: '25px'
                                    }} ></FontAwesomeIcon></a></td>
                                    <td>4564564</td>
                                    <td>4564564</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row p-2" style={{
                    color: '#0A3A84'
                }}>
                    <h4>Total Balance: 12,31,23,123</h4>
                    <hr />
                </div>
                <div className="row p-2">
                    <div className="col-9 col-md p-3 ml-3" style={{
                        backgroundColor: '#F3F5F9'
                    }}>
                        <div className="mt-2 fw-semibold" style={{
                            color: '#0A3A84'
                        }}>
                            <h4>Pending</h4>
                        </div>

                        <div>
                            <table className="table table-scripted m-0">
                                <thead className="thead-info" >
                                    <tr>
                                        <th>S. No.</th>
                                        <th>Name</th>
                                        <th>Account Number</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div className="table-responsive" style={{
                            maxHeight: '125px',
                            overflowY: 'auto'
                        }}>
                            <table className="table table-scripted m-0">
                                <tbody className="transacationDetail">
                                    <tr>
                                        <td>1</td>

                                        <td>Nic Asia Bank</td>

                                        <td>13123123213123</td>
                                        <td><a href="linkbank/edit" style={{ color: styleColor }}><FontAwesomeIcon icon={faEdit} style={{ fontSize: '25px' }}></FontAwesomeIcon></a></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>

                                        <td>Nic Asia Bank</td>

                                        <td>1232131231323</td>
                                        <td><a href="linkbank/edit" style={{ color: styleColor }}><FontAwesomeIcon icon={faEdit} style={{ fontSize: '25px' }}></FontAwesomeIcon></a></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>

                                        <td>Nabil Bank</td>

                                        <td>123123123123</td>
                                        <td><a href="linkbank/edit" style={{ color: styleColor }}><FontAwesomeIcon icon={faEdit} style={{ fontSize: '25px' }}></FontAwesomeIcon></a></td>
                                    </tr>
                                    <tr>
                                        <td>4</td>

                                        <td>Nabil Bank</td>

                                        <td>123123123123</td>
                                        <td><a href="linkbank/edit" style={{ color: styleColor }}><FontAwesomeIcon icon={faEdit} style={{ fontSize: '25px' }}></FontAwesomeIcon></a></td>
                                    </tr>
                                    <tr>
                                        <td>5</td>

                                        <td>Nabil Bank</td>

                                        <td>123123123123</td>
                                        <td><FontAwesomeIcon icon={faEdit} style={{ fontSize: '25px' }}></FontAwesomeIcon></td>
                                    </tr>
                                    <tr>
                                        <td>6</td>

                                        <td>Nabil Bank</td>

                                        <td>123123123123</td>
                                        <td><FontAwesomeIcon icon={faEdit} style={{ fontSize: '25px' }}></FontAwesomeIcon></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>



        </>
    )
}
export default LinkedBankAccount;