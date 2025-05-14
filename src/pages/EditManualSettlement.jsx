import BackButton from "../components/BackButton";
import Breadcrumbs from "../components/BreadCrum";
function EditManualSettlement() {
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
                            <h3 style={{ color: '#0A3A84' }}>Edit Manual Settlement</h3>
                            <form>
                                <div class="row g-1 align-items-center mb-4">
                                    <div class="col-2">
                                        <label for="inputDebitBankAccount" className="col-form-label">Debit Bank Account:</label>
                                    </div>
                                    <div class="col-4">
                                        <input type="text" id="inputDebitBankAccount" className="form-control" style={{color:'#0A3A84'}} value="Nabil Bank"></input>
                                    </div>
                                </div>
                                <div class="row g-1 align-items-center mb-4">
                                    <div class="col-2">
                                        <label for="inputCreditAccount" className="col-form-label">Credit Bank Account :</label>
                                    </div>
                                    <div class="col-4">
                                        <input type="text" id="inputCreditAccount" className="form-control" style={{color:'#0A3A84'}} value="Siddhartha Bank"></input>
                                    </div>
                                </div>
                                <div class="row g-3 align-items-center mb-4">
                                    <div class="col-2">
                                        <label for="inputAmount" className="col-form-label">Account Number:</label>
                                    </div>
                                    <div class="col-4">
                                        <input type="text" id="inputAmount" className="form-control" value="10000" style={{color:'#0A3A84'}}></input>
                                    </div>
                                </div>
                                <div class="row g-3 align-items-center mb-4">
                                    <div class="col-2">
                                        <label for="inputRemarks" className="col-form-label">Remarks:</label>
                                    </div>
                                    <div class="col-4">
                                        <textarea type="text" id="inputRemarks" className="form-control pb-5" value='Amount transfer.....' style={{color:'#0A3A84'}} row="5"/>
                                    </div>
                                </div>
                                
                                
                                <div className="d-flex">
                                <button type="submit" className="btn px-5" style={{backgroundColor:'#0A3A84',color:'white',marginRight:'60px'}}>Save</button>
                                <button type="submit" className="btn px-5 btn-danger" style={{color:'white'}}>Delete</button>
                                </div>

                            </form>
                        </div>

                    </div>

                </div>
          

           

        </>
    );
}
export default EditManualSettlement;


