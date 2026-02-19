
function productlist() {
        let products = [
            { id: 1, name: "Product 1", price: 10 },
            { id: 2, name: "Product 2", price: 20 },
            { id: 3, name: "Product 3", price: 2239337910 }
        ];
    return (
    <>
        <h1>Product List</h1>
        <table border={1} cellPadding={10} cellSpacing={0}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((valu)=>(
                       <tr>
                        <td>{valu.id}</td>
                          <td>{valu.name}</td>
                            <td>{valu.price}</td>
                       </tr>
                    ))

                }

                
            
            </tbody>
        </table>
    </>

    )
}

export default productlist;