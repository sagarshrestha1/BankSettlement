import DoughnutChart from "../components/chart/DoughnutChart";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Navigation from "../components/Navigation";
function Dashboard() {
    return (
        <>

            <div className=" container d-block justify-content-start align-items-start mt-3 w-100 ml-3">
                <div className="row p-2">
                   <div className="col-4">
                    <div className="card" style={{width:'23rem',backgroundColor:'#F3F5F9'}}>
                        <div className="card-body d-flex justify-content-center align-items-center py-5">
                            <div style={{color:'#0A3A84'}}>
                            <h3 className="card-title" style={{paddingLeft:'40px'}}>4</h3>
                            <h5 className="card-subtitle">Linked Bank</h5>
                            </div>
                        </div>
                    </div>
                   </div>
                   <div className="col-4">
                    <div className="card" style={{width:'23rem',backgroundColor:'#F3F5F9'}}>
                        <div className="card-body d-flex justify-content-center align-items-center py-5">
                            <div style={{color:'#0A3A84'}} className="d-block ">
                            <h3 className="card-title" style={{paddingRight:'40px'}}>1234543211</h3>
                            <h5 className="card-subtitle">Total Balance</h5>
                            </div>
                        </div>
                    </div>
                   </div>
                   <div className="col-4">
                    <div className="card" style={{width:'23rem',backgroundColor:'#F3F5F9'}}>
                        <div className="card-body d-flex justify-content-center align-items-center py-5">
                            <div style={{color:'#0A3A84'}}>
                            <h3 className="card-title" style={{paddingLeft:'40px'}}>8</h3>
                            <h5 className="card-subtitle">Settlement</h5>
                            </div>
                        </div>
                    </div>
                   </div>
                   
                </div>
                <div className="row p-2">
                    <div className="linkbank col-9 col-md p-3 ml-3" style={{
                        backgroundColor: '#F3F5F9'
                    }}>

                        <h4 style={{
                            color: '#0A3A84'
                        }}>Linked Bank</h4>
                        <table className="table table-scripted">
                            <thead className="thead-info" >
                                <tr>
                                    <th>Name</th>
                                    <th>Account No.</th>
                                    <th>EOD Bal.</th>
                                    <th>Balance</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Nic Asia Bank</td>
                                    <td>13123123213123</td>
                                    <td>4564564</td>
                                    <td>4564564</td>
                                </tr>
                                <tr>
                                    <td>Rastriya Banijya Bank</td>
                                    <td>1232131231323</td>
                                    <td>78978979</td>
                                    <td>78978979</td>
                                </tr>
                                <tr>
                                    <td>Nabil Bank</td>
                                    <td>123123123123</td>
                                    <td>789789789</td>
                                    <td>789789789</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="mt-2 fw-semibold" style={{
                            color: '#0A3A84'
                        }}>
                            Total Balance: 123123123123
                            <a className="float-end">View All</a>
                        </div>
                    </div>
                    <div className="col col-3 ml-5" style={{
                        backgroundColor: '#F3F5F9'
                    }}>
                        <DoughnutChart />
                    </div>
                </div>
                <div className="row p-2">
                    <div className="col-9 col-md p-3 ml-3" style={{
                        backgroundColor: '#F3F5F9'
                    }}>
                        <h4 style={{
                            color: '#0A3A84'
                        }}>Creditor Transaction</h4>
                        <table className="table table-scripted">
                            <thead className="thead-info" >
                                <tr>
                                    <th>Name</th>
                                    <th>Account No.</th>
                                    <th>Transaferred</th>
                                    <th>EOD Bal.</th>
                                    <th>Current Bal.</th>
                                    <th>Mirror Portal Bal.</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Rastriya Banijya Bank</td>
                                    <td>13123123213123</td>
                                    <td>4564564</td>
                                    <td>4564564</td>
                                    <td>4564564</td>
                                    <td>4564564</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row p-2">
                    <div className="col-9 col-md p-3 ml-3" style={{
                        backgroundColor: '#F3F5F9'
                    }}>
                        <div className="mt-2 fw-semibold" style={{
                            color: '#0A3A84'
                        }}>
                            <a className="float-end">View All</a>
                            <h4>Transaction Details</h4>
                        </div>

                        <div>
                            <table className="table table-scripted m-0">
                                <thead className="thead-info" >
                                    <tr>
                                        <th>ID</th>
                                        <th>Date</th>
                                        <th>Dr.Account</th>
                                        <th>Cr.Account</th>
                                        <th>Amount</th>
                                        <th>Status</th>
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
                                        <td>4564564</td>
                                        <td>4/30/2025</td>
                                        <td>Nic Asia Bank</td>
                                        <td>Rastriya Banijya Bank</td>
                                        <td>13123123213123</td>
                                        <td>Success</td>
                                    </tr>
                                    <tr>
                                        <td>78978979</td>
                                        <td>4/30/2025</td>
                                        <td>Nic Asia Bank</td>
                                        <td>Rastriya Banijya Bank</td>
                                        <td>1232131231323</td>
                                        <td>Success</td>
                                    </tr>
                                    <tr>
                                        <td>789789789</td>
                                        <td>4/30/2025</td>
                                        <td>Nabil Bank</td>
                                        <td>Nepal Banijya Bank</td>
                                        <td>123123123123</td>
                                        <td>Success</td>
                                    </tr>
                                    <tr>
                                        <td>789789789</td>
                                        <td>4/30/2025</td>
                                        <td>Nabil Bank</td>
                                        <td>Nepal Banijya Bank</td>
                                        <td>123123123123</td>
                                        <td>Success</td>
                                    </tr>
                                    <tr>
                                        <td>789789789</td>
                                        <td>4/30/2025</td>
                                        <td>Nabil Bank</td>
                                        <td>Nepal Banijya Bank</td>
                                        <td>123123123123</td>
                                        <td>Success</td>
                                    </tr>
                                    <tr>
                                        <td>789789789</td>
                                        <td>4/30/2025</td>
                                        <td>Nabil Bank</td>
                                        <td>Nepal Banijya Bank</td>
                                        <td>123123123123</td>
                                        <td>Success</td>
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
export default Dashboard;