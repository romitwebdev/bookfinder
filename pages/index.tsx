import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import {
    Alert,
    Button,
    Card,
    Col,
    FloatingLabel,
    Form,
    Row,
    Spinner,
} from "react-bootstrap";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css";
import { addBooks } from "../redux/stateSlice";
import { useSelector, useDispatch } from "react-redux";
import { rootState } from "../redux/store";
import Loader from "../components/Loader";

// get data on each render
export const getServerSideProps = async () => {
    const res = await fetch("https://api.itbook.store/1.0/new");
    const data = await res.json();

    return {
        props: { data: data.books },
    };
};

// each book array types
interface DataTypes {
    data: {
        title: string;
        subtitle: string;
        isbn13: string;
        price: string;
        image: string;
        url: string;
    }[];
}

// each book object type in map
interface bookType {
    title: string;
    subtitle: string;
    isbn13: string;
    price: string;
    image: string;
    url: string;
}

const Home: NextPage<DataTypes> = ({ data }) => {
    const [category, setCategory] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const { books } = useSelector((state: rootState) => state.stateSlice);
    const dispatch = useDispatch();

    // sets the books
    useEffect(() => {
        dispatch(addBooks({ args: data }));
    }, [data]);

    // fetch data
    const fetchData = async () => {
        const res = await fetch(
            `https://api.itbook.store/1.0/search/${category}`
        );

        const data = await res.json();

        return data.books;
    };

    // book search form submit
    const handleBookSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        fetchData()
            .then((data) => {
                setTimeout(() => {
                    dispatch(addBooks({ args: data }));
                    setLoading(false);
                }, 4000);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
        setCategory("");
    };

    return (
        <div className="bg-dark">
            <NavBar />
            <h1 className="display-1 fw-bold text-center mt-5 text-light">
                Search the <span className="text-danger">Books</span>
            </h1>
            <h3 className="lead text-center text-secondary">Get the books</h3>

            {/* search box */}

            <Form
                className="d-flex justify-content-center mt-4 mb-5"
                onSubmit={handleBookSearch}
            >
                <FloatingLabel label="Search Books" className="w-50">
                    <Form.Control
                        type="text"
                        placeholder="Search Books"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    ></Form.Control>
                </FloatingLabel>
                <Button
                    variant="outline-danger"
                    type="submit"
                    className="w-10 ms-2 px-4"
                >
                    Search
                </Button>
            </Form>

            {/* content */}

            {loading && (
                <div className={styles.spinner}>
                    <Spinner
                        variant="light"
                        animation="border"
                        style={{ width: "7rem", height: "7rem" }}
                    ></Spinner>
                </div>
            )}

            <Row className="m-3">
                {books === null ? (
                    <Loader />
                ) : books.length > 0 ? (
                    books.map((book: bookType) => {
                        return (
                            <Col
                                xs={12}
                                md={6}
                                lg={3}
                                key={book.isbn13}
                                className="mb-4"
                            >
                                <Card className="shadow-lg bg-secondary rounded-0">
                                    <Card.Img
                                        src={book.image}
                                        variant="top"
                                        className="rounded-0"
                                        alt=""
                                    ></Card.Img>

                                    <Card.Body className="bg-secondary border-top border-dark">
                                        <Card.Title className="text-light text-center fw-bolder">
                                            {book.title}
                                        </Card.Title>
                                        <Card.Subtitle className="text-dark text-center">
                                            {book.subtitle || "no description"}
                                        </Card.Subtitle>
                                        <div className="d-flex align-items-center justify-content-around  py-4">
                                            <p className="d-inline-block mb-0 fw-bold text-info">
                                                {book.price}
                                            </p>
                                            <Card.Link
                                                href={book.url}
                                                className="text-danger d-block text-center"
                                                target="_blank"
                                            >
                                                <Button variant="warning">
                                                    Buy now
                                                </Button>
                                            </Card.Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })
                ) : (
                    <Alert
                        variant="danger"
                        className="w-50 text-center mx-auto mt-5"
                    >
                        Not Found
                    </Alert>
                )}
            </Row>
        </div>
    );
};

export default Home;
