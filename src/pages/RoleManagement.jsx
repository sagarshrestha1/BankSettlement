import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Breadcrumbs from "../components/BreadCrum";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons/faTrashAlt";
import { Navigate } from "react-router-dom";
import SearchInput from "../components/SearchInput";

function RoleManagement() {
    const styleColor = '#0A3A84';


    return (
        <div className=" container d-block justify-content-start align-items-start mt-3 w-100 ml-3">

            <div className="row d-flex justify-content-between p-2">
                <div>
                    <div className="float-end">
                        <SearchInput />
                        <a className='btn btn-danger px-5' href="/rolemanagement/addRole">Add Role</a>
                    </div>
                    <h3 style={{
                        color: '#0A3A84'
                    }}>Role Management</h3>
                </div>
            </div>
            <div className="row p-2">
                <div className="col-9 col-md p-3 ml-3" style={{
                    backgroundColor: '#F3F5F9'
                }}>
                    <table className="table table-scripted table-responsive-md">
                        <thead className="thead-info" >
                            <tr>
                                <th>S.No</th>
                                <th>Role</th>
                                <th className="text-end" style={{ paddingRight: '30px' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Admin</td>

                                <td className="text-end"><a href="rolemanagement/editRole" style={{ color: styleColor, paddingRight: '30px' }}><FontAwesomeIcon icon={faEdit} style={{
                                    fontSize: '25px'
                                }} ></FontAwesomeIcon></a><button className="trash-bin"><FontAwesomeIcon icon={faTrashAlt} ></FontAwesomeIcon></button> </td>


                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Admin</td>

                                <td className="text-end"><a href="rolemanagement/editRole" style={{ color: styleColor, paddingRight: '30px' }}><FontAwesomeIcon icon={faEdit} style={{
                                    fontSize: '25px'
                                }} ></FontAwesomeIcon></a><button className="trash-bin"><FontAwesomeIcon icon={faTrashAlt} ></FontAwesomeIcon></button> </td>


                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Admin</td>

                                <td className="text-end"><a href="rolemanagement/editRole" style={{ color: styleColor, paddingRight: '30px' }}><FontAwesomeIcon icon={faEdit} style={{
                                    fontSize: '25px'
                                }} ></FontAwesomeIcon></a><button className="trash-bin"><FontAwesomeIcon icon={faTrashAlt} ></FontAwesomeIcon></button> </td>


                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>



        </div>
    );




}
export default RoleManagement;
