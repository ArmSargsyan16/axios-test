function Header() {
    return (
        <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
            <div className="row ">
                <div className="col-sm-3 mt-5 mb-4 text-gred">
                </div>
                <div className="col-sm-2 offset-sm-2 mt-5 mb-4 text-gred" id="addPerson" style={{ color: "green" }}><h2><b>Persons Details</b></h2></div>
                <div className="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred" >
                </div>
            </div>
        </div>
    )
}

export default Header;