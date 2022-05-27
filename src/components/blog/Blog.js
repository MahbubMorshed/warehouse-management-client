import React from "react";
import { Accordion } from "react-bootstrap";

const Blog = () => {
  return (
    <div className="container w-75 min-vh-100">
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Difference between javaScript and nodejs
          </Accordion.Header>
          <Accordion.Body>
            JavaScript is a simple programming language that runs in any browser
            JavaScript Engine. Whereas Node JS is an interpreter or running
            environment for a JavaScript programming language that holds many
            excesses, it requires libraries that can easily be accessed from
            JavaScript programming for better use
            <br />
            JavaScript running in any engine like Spider monkey (FireFox),
            JavaScript Core (Safari), V8 (Google Chrome). So JavaScript
            programming is very easy to write, and put any running environment
            means proper browser. Whereas Node JS only support the V8 engine,
            which googles chrome specific. But whether it supports the V8
            engine, written JavaScript code can able to run in any environment.
            So there has no browser-specific constraint on it. <br />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Difference between sql and nosql</Accordion.Header>
          <Accordion.Body>
            SQL databases are relational, NoSQL databases are non-relational.
            <br />
            SQL databases use structured query language and have a predefined
            schema. NoSQL databases have dynamic schemas for unstructured data.
            <br />
            SQL databases are vertically scalable, while NoSQL databases are
            horizontally scalable.
            <br />
            SQL databases are table-based, while NoSQL databases are document,
            key-value, graph, or wide-column stores.
            <br />
            SQL databases are better for multi-row transactions, while NoSQL is
            better for unstructured data like documents or JSON.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="">
          <Accordion.Header>
            when should you use nodejs and when should you use mongodb
          </Accordion.Header>
          <Accordion.Body>
            Node. js is primarily used for non-blocking, event-driven servers,
            due to its single-threaded nature. It's used for traditional web
            sites and back-end API services, but was designed with real-time,
            push-based architectures in mind.
            <br />
            MongoDB is built on a scale-out architecture that has become popular
            with developers of all kinds for developing scalable applications
            with evolving data schemas. As a document database, MongoDB makes it
            easy for developers to store structured or unstructured data. It
            uses a JSON-like format to store documents.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blog;
