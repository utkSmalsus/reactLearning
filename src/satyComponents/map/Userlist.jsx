
import { Container } from "react-bootstrap"
function Userlist() {
    let userinfo = [
        { name: "satye", dob: "12-10-1989", Email: "saty.web@gmail.com", },
        { name: "Ram", dob: "14-10-1989", Email: "test.web@gmail.com", },
        { name: "Sita", dob: "15-10-1989", Email: "sita.web@gmail.com", },
        { name: "Shyam", dob: "16-10-1989", Email: "dhyam.web@gmail.com", }
    ]
    return (
        <>
            <Container >
                <h2>User details</h2>
                <table border={1} cellPadding={10} cellSpacing={0}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Dob</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userinfo.map((value) => (
                                <tr>
                                    <td>
                                        {value.name}
                                    </td>
                                    <td>
                                        {value.dob}
                                    </td>
                                    <td>
                                        {value.Email}
                                    </td>
                                </tr>
                            ))

                        }


                    </tbody>

                </table>

            </Container>
        </>
    )
}
export default Userlist