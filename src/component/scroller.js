import React from "react";
import About from "./about";
import Blog from "./blog";
import Contact from "./contact"
import Skills from "./skills";
import ReactPageScroller from "react-page-scroller";

export default class Scroller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: props,
    };
    this._pageScroller = null;
  }

  goToPage = eventKey => {
    this._pageScroller.goToPage(eventKey);
  };

  pageOnChange = number => {
    this.setState({
      currentPage: number,
    });
  };


  render() {
    return (
      <ReactPageScroller ref={c => (this._pageScroller = c)} pageOnChange={this.pageOnChange} >
        <section className="full-page">
          <About />
        </section>
        <section className="full-page">
        <Skills />
        </section>
        <section className="full-page">
        <Blog />
        </section>
        <section className="full-page">
        <Contact />
        </section>
      </ReactPageScroller>
    );
  }
}
