import BackButton from "../components/BackButton";
import Breadcrumbs from "../components/BreadCrum";

function AddRole() {
    const permissions = [
        {
            name: 'Dashboard',
            children: ['View Only', 'Initiator', 'Verifier']
        },
        {
            name: 'Settlement',
            children: ['View Only', 'Initiator', 'Verifier']
        },
        {
            name: 'Bank Accounts',
            children: ['View Only', 'Initiator', 'Verifier']
        },
        {
            name: 'Transaction Report',
            children: ['View Only', 'Initiator', 'Verifier']
        },
        {
            name: 'Activity Log',
            children: ['View Only', 'Initiator', 'Verifier']
        },
        {
            name: 'Role Management',
            children: ['View Only', 'Initiator', 'Verifier']
        }
    ];
    return (
        <>

            <div className=" container d-block justify-content-start align-items-start mt-3 w-100 ml-3">

                <div className="row d-flex justify-content-between p-2">
                    <div>
                        <BackButton/>
                        <h3 style={{
                            color: '#0A3A84'
                        }}><Breadcrumbs /></h3>
                    </div>
                </div>
                <div className="row p-2">
                    <div className="col-9 col-md p-3 ml-3" style={{
                        backgroundColor: '#F3F5F9'
                    }}>
                        <h3 style={{ color: '#0A3A84' }}>Add Role</h3>
                        <form>
                            <div class="row g-1 align-items-center mb-4">
                                <div class="col-2">
                                    <label for="inputName" className="col-form-label">Name:</label>
                                </div>
                                <div class="col-4">
                                    <input type='text' className="form-control" placeholder="Enter Name"></input>
                                </div>
                            </div>
                            <div class="row g-1 align-items-top mb-4">
                                <div class="col-2">
                                    <label for="inputPermission" className="col-form-label">Permissions:</label>
                                </div>
                                <div class="col-6">
                                    <div className="container p-4 rounded" >
                                        <div className="row" style={{color:'#0A3A84'}}>
                                            {permissions.map((perm, index) => (
                                                <div className="col-md-4 mb-3" key={index}>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id={`main-${perm.name}`} />
                                                        <label className="form-check-label fw-bold " htmlFor={`main-${perm.name}`}>
                                                            {perm.name}
                                                        </label>
                                                    </div>
                                                    {perm.children.map((child, i) => (
                                                        <div className="form-check ms-3" key={i}>
                                                            <input className="form-check-input" type="checkbox" id={`${perm.name}-${child}`} />
                                                            <label className="form-check-label " htmlFor={`${perm.name}-${child}`}>
                                                                {child}
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <button type="submit" className="btn px-5 mb-3" style={{ backgroundColor: '#0A3A84', color: 'white' }}>Save</button>


                        </form>
                    </div>

                </div>

            </div>




        </>
    );
}
export default AddRole;