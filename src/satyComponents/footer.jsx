 function Footer({footerinfo, children}){
    //let {footerinfo} = props;

    return(
        <footer style={{backgroundColor:"#ccc", padding:"5px", textAlign:"center"}}>
            <div className="d-flex  justify-content-between">
            <div>{footerinfo.Copy} </div>   <div>{children}</div>
            </div>
        </footer>
    )
}
export default Footer;