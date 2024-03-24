import { Container, Form } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import {data} from './Data.js'
import { useState } from 'react';

function NormalSearch() {
    // console.log(data,"123")
    const [search,setSearch]=useState('');
    // console.log(search,"111")
    return (
        <Container>
            <h1 className='text-center'>Search Functionality</h1>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control onChange={(e)=>setSearch(e.target.value)} type="name" placeholder="Search Name...!" />
                </Form.Group>
            </Form>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.filter((item)=>{
                            return search.toLowerCase()===""?item:item.first_name.toLowerCase().includes(search);
                        }).map((item)=>(
                            <tr key={item.id}>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.email}</td>
                            <td>{item.gender}</td>
                            <td>{item.phone}</td>
                        </tr>
                        ))}
                </tbody>
            </Table>
        </Container>

    );
}

export default NormalSearch;