import "./books.css";

import Footer from "../../components/Footer/Footer";
import NavbarComp from "../../components/Navbar/NavbarComp";

import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AddBook from "../../components/TableComp/AddBook";
import BooksList from "../../components/TableComp/BooksList";


const Book = () => {
    const [bookId, setBookId] = useState("");

    const getBookIdHandler = (id) => {
        console.log("The ID of document to be edited: ", id);
        setBookId(id);
    };

    return (
        <>
            <NavbarComp />

            <Container style={{ width: "400px" }}>
                <Row>
                    <Col>
                        <AddBook id={bookId} setBookId={setBookId} />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <BooksList getBookId={getBookIdHandler} />
                    </Col>
                </Row>
            </Container>



            <Footer />
        </>
    )
}

export default Book;