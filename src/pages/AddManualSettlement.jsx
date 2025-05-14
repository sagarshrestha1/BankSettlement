import Breadcrumbs from "../components/BreadCrum";
import BackButton from "../components/BackButton";


function AddManualSettlements() {
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
                        <h3 style={{ color: '#0A3A84' }}>Add Manual Settlement</h3>
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
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected className="text-muted">Select Credit Bank Account</option>
                                        <option value="NabilBank">Nabil Bank</option>
                                        <option value="NicAsiaBank">Nic Asia Bank</option>
                                        <option value="SiddharthaBank">Siddhartha Bank</option>
                                    </select>
                                </div>
                            </div>
                           
                            <div class="row g-3 align-items-center mb-4">
                                <div class="col-2">
                                    <label for="inputAmount" className="col-form-label">Amount:</label>
                                </div>
                                <div className="col-4 d-flex justify-content-start">
                                    <input type="text" className="form-control" placeholder="Enter Amount" />
                                </div>
                            </div>
                            <div class="row g-3 align-items-center mb-4">
                                <div class="col-2">
                                    <label for="inputRemarks" className="col-form-label">Remarks:</label>
                                </div>
                                <div className="col-4 d-flex justify-content-start">
                                    <textarea type="text" className="form-control pb-5" placeholder="Type Remarks..." row='6' />
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
export default AddManualSettlements;