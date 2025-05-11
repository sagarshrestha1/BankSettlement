import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Breadcrumbs from "../components/BreadCrum";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons/faTrashAlt";
import { Navigate } from "react-router-dom";


function UserManagement() {
    const styleColor = '#0A3A84';
    
   
    return(
    <div className=" container d-block justify-content-start align-items-start mt-3 w-100 ml-3">

        <div className="row d-flex justify-content-between p-2">
            <div>
                <div className="float-end">
                <input type="search" ></input>
                <a className='btn btn-danger float-end px-5' href="/usermanagement/addUser">Add User</a>
                </div>
                <h3 style={{
                    color: '#0A3A84'
                }}>User Management</h3>
                
            </div>
        </div>
        <div className="row p-2">
            <div className="col-9 col-md p-3 ml-3" style={{
                backgroundColor: '#F3F5F9'
            }}>
                <table className="table table-scripted table-responsive-md">
                    <thead className="thead-info" >
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th className="text-end" style={{paddingRight:'30px'}}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Anjali Chaudhary</td>
                            <td>Finance Executive</td>
                            <td>Active</td>
                            
                            <td className="text-end"><a href="usermanagement/editUser" style={{ color: styleColor,paddingRight:'30px' }}><FontAwesomeIcon icon={faEdit} style={{
                                fontSize: '25px'
                            }} ></FontAwesomeIcon></a><button className="trash-bin"><FontAwesomeIcon icon={faTrashAlt} ></FontAwesomeIcon></button> </td>
                          

                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Sushila Acharya</td>
                            <td>Settlement Associate </td>
                            <td>Active</td>
                            
                            <td className="text-end"><a href="usermanagement/editUser" style={{ color: styleColor,paddingRight:'30px' }}><FontAwesomeIcon icon={faEdit} style={{
                                fontSize: '25px'
                            }} ></FontAwesomeIcon></a><button className="trash-bin"><FontAwesomeIcon icon={faTrashAlt} ></FontAwesomeIcon></button> </td>
                          

                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Anish Luitel</td>
                            <td>Settlement Associate</td>
                            <td>Active</td>
                            
                            <td className="text-end"><a href="usermanagement/editUser" style={{ color: styleColor,paddingRight:'30px' }}><FontAwesomeIcon icon={faEdit} style={{
                                fontSize: '25px'
                            }} ></FontAwesomeIcon></a><button className="trash-bin"><FontAwesomeIcon icon={faTrashAlt} ></FontAwesomeIcon></button> </td>
                          

                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Prajjwal Pokhrel</td>
                            <td>Settlement Associate</td>
                            <td>Inactive</td>
                            
                            <td className="text-end"><a href="usermanagement/editUser" style={{ color: styleColor,paddingRight:'30px' }}><FontAwesomeIcon icon={faEdit} style={{
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
export default UserManagement;
