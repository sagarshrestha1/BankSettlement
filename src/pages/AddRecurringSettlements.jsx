import Breadcrumbs from "../components/BreadCrum";
import BackButton from "../components/BackButton";


function AddRecurringSettlements() {
    return (
        <>

            <div className=" container d-block justify-content-start align-items-start mt-3 w-100 ml-3">

                <div className="row d-flex justify-content-between p-2">
                    <div>
                        <BackButton />
                        <h3 style={{
                            color: '#0A3A84'
                        }}><Breadcrumbs /></h3>
                    </div>
                </div>
                <div className="row p-2">
                    <div className="col-9 col-md p-3 ml-3" style={{
                        backgroundColor: '#F3F5F9'
                    }}>
                        <h3 style={{ color: '#0A3A84' }}>Add Recurring Settlement</h3>
                        <form>
                            <div class="row g-1 align-items-center mb-4">
                                <div class="col-2">
                                    <label for="inputBankName" className="col-form-label">Debit Bank Account:</label>
                                </div>
                                <div class="col-4">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected className="text-muted">Select Debit Bank Account</option>
                                        <option value="NabilBank">Nabil Bank</option>
                                        <option value="NicAsiaBank">Nic Asia Bank</option>
                                        <option value="SiddharthaBank">Siddhartha Bank</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row g-1 align-items-center mb-4">
                                <div class="col-2">
                                    <label for="inputAccountName" className="col-form-label">Credit Bank Account:</label>
                                </div>
                                <div class="col-4">
                                    <input type="text" id="inputAccountName" className="form-control" placeholder="Rastriya Banijya Bank" disabled style={{ color: '#0A3A84' }}></input>
                                </div>
                            </div>
                           
                            <div class="row g-3 align-items-center mb-4">
                                <div class="col-2">
                                    <label for="inputStatus" className="col-form-label">Status:</label>
                                </div>
                                <div className="col-2 d-flex justify-content-start">
                                    <div className="form-check pr-5">
                                        <input type="radio" id="inputStatusInactive" className="form-check-input" checked disabled ></input>
                                        <label for="inputStatus">Inactive</label>
                                    </div>
                                    <div className="form-check pl-5" style={{ paddingLeft: '30px' }}>
                                        <input type="radio" id="inputStatusActive" className="form-check-input" disabled ></input>
                                        <label for="inputStatus">Active</label>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn px-5" style={{ backgroundColor: '#0A3A84', color: 'white' }}>Save</button>


                        </form>
                    </div>

                </div>

            </div>




        </>
    );
}
export default AddRecurringSettlements;