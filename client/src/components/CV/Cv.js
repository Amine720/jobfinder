import React, { Component } from "react";
import { Document, Page } from "react-pdf/dist/entry.webpack";

class Cv extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
    pdf: null,
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  componentDidMount() {
    this.setState({ pdf: this.props.match.params.file });
  }

  render() {
    const { pageNumber } = this.state;

    let styles = {
      width: "100%",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#0E1821",
    };

    return (
      <div style={styles}>
        <Document
          file={this.state.pdf}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        {/* <p>
          Page {pageNumber} of {numPages}
        </p> */}
      </div>
    );
  }
}

export default Cv;
