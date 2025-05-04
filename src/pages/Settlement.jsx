import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import Breadcrumbs from '../components/BreadCrum';
function Settlement() {
    const styleColor = '#0A3A84';
    return (
        <>

            <div className=" container d-block justify-content-start align-items-start mt-3 w-100 ml-3">

                <div className="row d-flex justify-content-between p-2">
                    <div>
                        <a href="/settlements/addsettlement" className='btn btn-danger float-end px-5'>Add Settlement</a>
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
                                    <th>Created Date</th>
                                    <th>Dr. Bank</th>
                                    <th>Cr. Bank</th>
                                    <th>Next Settlement</th>
                                    <th>Action</th>
                                    <th>Current Dr. Bal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>4/30/2025</td>
                                    <td>Nic Asia Bank</td>
                                    <td>Rastriya Banijya Bank</td>
                                    <td>16:05:55</td>
                                    <td><a href="linkbank/edit" style={{ color: styleColor }}><FontAwesomeIcon icon={faEdit} style={{
                                        fontSize: '25px'
                                    }} ></FontAwesomeIcon></a></td>
                                    <td>4564564</td>

                                </tr>
                                <tr>
                                    <td>4/30/2025</td>
                                    <td>Nic Asia Bank</td>
                                    <td>Rastriya Banijya Bank</td>
                                    <td>16:05:55</td>
                                    <td><a href="linkbank/edit" style={{ color: styleColor }}><FontAwesomeIcon icon={faEdit} style={{
                                        fontSize: '25px'
                                    }} ></FontAwesomeIcon></a></td>
                                    <td>4564564</td>

                                </tr>
                                <tr>
                                    <td>4/30/2025</td>
                                    <td>Nic Asia Bank</td>
                                    <td>Rastriya Banijya Bank</td>
                                    <td>16:05:55</td>
                                    <td><a href="linkbank/edit" style={{ color: styleColor }}><FontAwesomeIcon icon={faEdit} style={{
                                        fontSize: '25px'
                                    }} ></FontAwesomeIcon></a></td>
                                    <td>4564564</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row p-2" style={{
                    color: '#0A3A84'
                }}>

                    <hr />

                    <h4>Recent Transaction</h4>

                </div>
                <div className="row p-2">
                    <div className="col-9 col-md p-3 ml-3" style={{
                        backgroundColor: '#F3F5F9'
                    }}>


                        <div>
                            <table className="table table-scripted m-0">
                                <thead className="thead-info" >
                                    <tr>
                                        <th>ID</th>
                                        <th>Date</th>
                                        <th>Dr.Bank</th>
                                        <th>Cr. Bank</th>
                                        <th>Status</th>
                                        <th>Amount</th>
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
                                        <td>123</td>

                                        <td>4/30/2025 12:12:12</td>
                                        <td>Nic Asia Bank</td>
                                        <td>Rastriya Banijya Bank</td>
                                        <td>Retrying</td>
                                        <td>13123123213123</td>
                                    </tr>
                                    <tr>
                                        <td>12345</td>

                                        <td>4/30/2025 12:12:12</td>
                                        <td>Nabil Bank</td>
                                        <td>Rastriya Banijya Bank</td>
                                        <td>Success</td>
                                        <td>3432424323</td>
                                    </tr>
                                    <tr>
                                        <td>12233</td>

                                        <td>4/30/2025 12:12:12</td>
                                        <td>Nic Asia Bank</td>
                                        <td>Rastriya Banijya Bank</td>
                                        <td>Success</td>
                                        <td>13123123213123</td>
                                    </tr>
                                    <tr>
                                        <td>1224333</td>

                                        <td>4/30/2025 12:12:12</td>
                                        <td>Nic Asia Bank</td>
                                        <td>Rastriya Banijya Bank</td>
                                        <td>Success</td>
                                        <td>13123123213123</td>
                                    </tr>
                                    <tr>
                                        <td>1245333</td>

                                        <td>4/30/2025 12:12:12</td>
                                        <td>Nic Asia Bank</td>
                                        <td>Rastriya Banijya Bank</td>
                                        <td>Success</td>
                                        <td>13123123213123</td>
                                    </tr>
                                    <tr>
                                        <td>1234343</td>

                                        <td>4/30/2025 12:12:12</td>
                                        <td>Nic Asia Bank</td>
                                        <td>Rastriya Banijya Bank</td>
                                        <td>Success</td>
                                        <td>131231234213123</td>
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
export default Settlement;