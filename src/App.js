import React, { Component } from "react";
import { Animated } from "react-animated-css";
import classes from "./App.module.css";
import "./index.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();
  }
  state = {
    row1col1: true,
    row2col2: false,
    row2col1: false,
    row2col3: false,
    row3col1: false,
    row3col2: false,
    row3col3: false,
    row3col4: false,
    row4col1: false,
    row4col2: false,
    row4col3: false,
    row4col4: false,
    row4col5: false,
    row5col1: false,
    row5col2: false,
    row5col3: false,
    row5col4: false,
    row5col5: false,
    row5col6: false,
    row6col1: false,
    row6col2: false,
    row6col3: false,
    row6col4: false,
    row6col5: false,
    row6col6: false,
    row6col7: false,
    row6col8: false,
    row7col1: false,
    row7col2: false,
    row7col3: false,
    row7col4: false,
    row7col5: false,
    row7col6: false,
    /* row7col7: false, */
    row8col1: false,
    row8col2: false,
    row8col3: false,
    row8col4: false,
    row8col5: false,
    row8col6: false,
    row8col7: false,
    row9col1: false,
    row9col2: false,
    row9col3: false,
    row9col4: false,
    row9col5: false,
  };
  render() {
    var dict = {};

    dict["row1col1"] = {
      id: "row1col1",
      text: "Lorem Ipsum is simply ",
      color: "yellow",
      parentNode: "yellow",
      blueChilds: [],
      yellowChilds: ["row2col1", "row2col2", "row2col3"],
      display: this.state.row1col1,
      btnbox: false,

      style: {
        width: "80px",
        height: "80px",
        backgroundColor: "rgb(111, 96, 245)",

        color: "white",
        fontSize: "11px",

        border: "0",
        position: "absolute",
        top: " 100px",
        left: "810px",
      },
    };
    dict["row2col1"] = {
      id: "row2col1",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      color: "yellow",
      parentNode: "yellow",
      blueChilds: [],
      yellowChilds: ["row3col1"],
      display: this.state.row2col1,
      btnbox: false,
      style: {
        width: "80px",
        height: "80px",
        backgroundColor: "rgb(149, 149, 247)",
        color: "white",
        fontSize: "9px",

        border: "0",
        position: "absolute",
        top: "160px",
        left: "750px",
        can: "lu",
      },
    };
    dict["row2col2"] = {
      id: "row2col2",
      text: "Lorem Ipsum is simply dummy text ",
      color: "yellow",
      parentNode: "yellow",
      blueChilds: [],
      yellowChilds: ["row3col2", "row3col3"],
      display: this.state.row2col2,
      btnbox: false,
      style: {
        width: "80px",
        height: "80px",
        backgroundColor: "rgb(149, 149, 247)",
        color: "white",
        fontSize: "9px",

        border: "0",
        position: "absolute",
        top: "220px",
        left: "810px",
      },
    };
    dict["row2col3"] = {
      id: "row2col3",
      text: "Lorem Ipsum is simply dummy",
      color: "yellow",
      parentNode: "yellow",
      blueChilds: [],
      yellowChilds: ["row3col4"],
      display: this.state.row2col3,
      btnbox: false,
      style: {
        width: "80px",
        height: "80px",
        backgroundColor: "rgb(149, 149, 247)",
        color: "white",
        fontSize: "9px",

        border: "0",
        position: "absolute",
        top: "160px",
        left: "870px",
        can: "l",
        delay: "100",
      },
    };
    dict["row3col1"] = {
      id: "row3col1",
      text: "Lorem Ipsum is simply dummy",
      color: "yellow",
      parentNode: "yellow",
      blueChilds: ["row4col1", "row4col2"],
      yellowChilds: [],
      display: this.state.row3col1,
      btnbox: false,
      style: {
        width: "80px",
        height: "80px",

        backgroundColor: "rgb(111, 96, 245)",
        color: "white",
        fontSize: "10px",

        border: "0",
        position: "absolute",
        top: "100px",
        left: "350px",
        delay: "2500",
      },
    };
    dict["row3col2"] = {
      id: "row3col2",
      text: "Lorem Ipsum is ",
      color: "yellow",
      parentNode: "yellow",
      blueChilds: [],
      yellowChilds: ["row4col3"],
      display: this.state.row3col2,
      btnbox: false,
      style: {
        width: "80px",
        height: "80px",
        backgroundColor: "rgb(149, 149, 247)",
        color: "white",
        fontSize: "10px",
        border: "0",
        position: "absolute",
        top: "280px",
        left: "750px",
        can: "md",
      },
    };
    dict["row3col3"] = {
      id: "row3col3",
      text: "A titre preventif",
      color: "yellow",
      parentNode: "yellow",
      blueChilds: [],
      yellowChilds: ["row4col4"],
      display: this.state.row3col3,
      btnbox: false,
      style: {
        width: "80px",
        height: "80px",
        backgroundColor: "rgb(149, 149, 247)",
        color: "white",
        fontSize: "10px",
        border: "0",

        position: "absolute",
        top: "280px",
        left: "870px",
        can: "dl",
      },
    };
    dict["row3col4"] = {
      id: "row3col4",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      color: "yellow",
      parentNode: "yellow",
      blueChilds: ["row4col5"],
      yellowChilds: [],
      display: this.state.row3col4,
      btnbox: true,

      btnboxtxt: "INTERVENTION",
      style: {
        width: "90px",
        height: "90px",
        backgroundColor: "rgb(149, 149, 247)",

        color: "white",
        fontSize: "7px",
        border: "0",

        position: "absolute",
        top: "155px",
        left: "995px",
        can: "l",
        delay: "300",
      },
    };
    dict["row4col1"] = {
      id: "row4col1",
      text: "Oui",
      color: "blue",
      parentNode: "yellow",
      blueChilds: [],
      yellowChilds: ["row5col1"],
      display: this.state.row4col1,
      btnbox: false,
      style: {
        width: "80px",
        height: "80px",
        backgroundColor: "rgb(149, 149, 247)",
        color: "white",
        fontSize: "15px",

        border: "0",
        position: "absolute",
        top: "160px",
        left: "290px",
        can: "rd",
      },
    };
    dict["row4col2"] = {
      id: "row4col2",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      color: "blue",
      parentNode: "yellow",
      blueChilds: [],
      yellowChilds: ["row5col2"],
      display: this.state.row4col2,
      btnbox: false,
      style: {
        width: "80px",
        height: "80px",
        backgroundColor: "rgb(149, 149, 247)",
        color: "white",
        fontSize: "7px",

        border: "0",
        position: "absolute",
        top: "160px",
        left: "410px",
        can: "ld",
      },
    };
    dict["row4col3"] = {
      id: "row4col3",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      color: "yellow",
      parentNode: "yellow",
      blueChilds: ["row5col3"],
      yellowChilds: [],
      display: this.state.row4col3,
      btnbox: false,
      style: {
        width: "90px",
        height: "90px",
        backgroundColor: "rgb(126, 141, 126)",
        color: "white",
        fontSize: "7px",
        border: "0",
        position: "absolute",
        top: "420px",
        left: "745px",
        can: "md",
      },
    };
    dict["row4col4"] = {
      id: "row4col4",
      text: "Lorem Ipsum is simply dummy text ",
      color: "yellow",
      parentNode: "yellow",
      blueChilds: ["row5col4", "row5col5"],
      yellowChilds: [],
      display: this.state.row4col4,
      btnbox: false,
      style: {
        width: "80px",
        height: "80px",
        backgroundColor: "rgb(149, 149, 247)",
        color: "white",
        fontSize: "8px",
        border: "0",

        position: "absolute",
        top: "340px",
        left: "1140px",
        delay: "1500",
      },
    };
    dict["row4col5"] = {
      id: "row4col5",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      color: "blue",
      parentNode: "yellow",
      blueChilds: ["row5col6"],
      yellowChilds: [],
      display: this.state.row4col5,
      btnbox: true,
      btnboxtxt: "IVESTIGATION",
      style: {
        width: "90px",
        height: "90px",
        backgroundColor: "rgb(126, 141, 126)",
        color: "white",
        fontSize: "7px",
        border: "0",

        position: "absolute",
        top: "155px",
        left: "1135px",
        can: "l",
      },
    };
    dict["row5col1"] = {
      id: "row5col1",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting",
      color: "yellow",
      parentNode: "blue",
      blueChilds: ["row6col1", "row6col2"],
      yellowChilds: [],
      display: this.state.row5col1,
      btnbox: false,
      style: {
        width: "80px",
        height: "80px",
        backgroundColor: "rgb(111, 96, 245)",
        color: "white",
        fontSize: "8px",

        border: "0",
        position: "absolute",
        top: "350px",
        left: "200px",
        delay: "1000",
      },
    };
    dict["row5col2"] = {
      id: "row5col2",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting",
      color: "yellow",
      parentNode: "blue",
      blueChilds: ["row6col3", "row6col4"],
      yellowChilds: [],
      display: this.state.row5col2,
      btnbox: false,
      style: {
        width: "80px",
        height: "80px",
        backgroundColor: "rgb(111, 96, 245)",
        color: "white",
        fontSize: "8px",

        border: "0",
        position: "absolute",
        top: "350px",
        left: "500px",
        delay: "1000",
      },
    };
    dict["row5col3"] = {
      id: "row5col3",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      color: "blue",
      parentNode: "yellow",
      blueChilds: ["row6col5"],
      yellowChilds: [],
      display: this.state.row5col3,
      btnbox: false,
      style: {
        width: "90px",
        height: "90px",
        backgroundColor: "rgb(126, 141, 126)",
        color: "white",
        fontSize: "7px",
        border: "0",
        position: "absolute",
        top: "560px",
        left: "745px",
        can: "md",
      },
    };
    dict["row5col4"] = {
      id: "row5col4",
      text: "Oui",
      color: "blue",
      parentNode: "yellow",
      blueChilds: [],
      yellowChilds: ["row6col6"],
      display: this.state.row5col4,
      style: {
        width: "80px",
        height: "80px",
        backgroundColor: "rgb(149, 149, 247)",
        color: "white",
        fontSize: "15px",
        border: "0",

        position: "absolute",
        top: "400px",
        left: "1080px",
        can: "md",
      },
    };
    dict["row5col5"] = {
      id: "row5col5",
      text: "Non",
      color: "blue",
      parentNode: "yellow",
      blueChilds: [],
      yellowChilds: ["row6col7"],
      display: this.state.row5col5,
      btnbox: false,
      style: {
        width: "80px",
        height: "80px",
        backgroundColor: "rgb(149, 149, 247)",
        color: "white",
        fontSize: "15px",
        border: "0",

        position: "absolute",
        top: "400px",
        left: "1200px",
        can: "l",
      },
    };
    dict["row5col6"] = {
      id: "row5col6",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      color: "blue",
      parentNode: "blue",
      blueChilds: ["row6col8"],
      yellowChilds: [],
      display: this.state.row5col6,
      btnbox: true,
      btnboxtxt: "AUDITS",
      style: {
        width: "90px",
        height: "90px",
        backgroundColor: "rgb(126, 141, 126)",
        color: "white",
        fontSize: "7px",
        border: "0",

        position: "absolute",
        top: "155px",
        left: "1270px",
        can: "l",
      },
    };
    dict["row6col1"] = {
      id: "row6col1",
      text: "Oui",
      color: "blue",
      parentNode: "yellow",
      blueChilds: [],
      yellowChilds: ["row7col1"],
      display: this.state.row6col1,
      btnbox: false,
      style: {
        width: "80px",
        height: "80px",
        backgroundColor: "rgb(149, 149, 247)",
        color: "white",
        fontSize: "15px",

        border: "0",
        position: "absolute",
        top: "410px",
        left: "140px",
        can: "rd2",
      },
    };
    dict["row6col2"] = {
      id: "row6col2",
      text: "Non",
      color: "blue",
      parentNode: "yellow",
      blueChilds: [],
      yellowChilds: ["row7col2"],
      display: this.state.row6col2,
      btnbox: false,
      style: {
        width: "80px",
        height: "80px",
        backgroundColor: "rgb(149, 149, 247)",
        color: "white",
        fontSize: "15px",

        border: "0",
        position: "absolute",
        top: "410px",
        left: "260px",
        can: "md",
      },
    };
    dict["row6col3"] = {
      id: "row6col3",
      text: "Oui",
      color: "blue",
      parentNode: "yellow",
      blueChilds: [],
      yellowChilds: ["row7col3"],
      display: this.state.row6col3,
      btnbox: false,
      style: {
        width: "80px",
        height: "80px",
        backgroundColor: "rgb(149, 149, 247)",
        color: "white",
        fontSize: "15px",

        border: "0",
        position: "absolute",
        top: "410px",
        left: "440px",
        can: "md",
      },
    };
    dict["row6col4"] = {
      id: "row6col4",
      text: "Non",
      color: "blue",
      parentNode: "yellow",
      blueChilds: [],
      yellowChilds: ["row7col4"],
      display: this.state.row6col4,
      btnbox: false,
      style: {
        width: "80px",
        height: "80px",
        backgroundColor: "rgb(149, 149, 247)",
        color: "white",
        fontSize: "15px",

        border: "0",
        position: "absolute",
        top: "410px",
        left: "560px",
        can: "ld2",
      },
    };
    dict["row6col5"] = {
      id: "row6col5",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      color: "blue",
      parentNode: "yellow",
      blueChilds: [],
      yellowChilds: [],
      display: this.state.row6col5,
      btnbox: false,
      style: {
        width: "90px",
        height: "90px",
        backgroundColor: "rgb(126, 141, 126)",
        color: "white",
        fontSize: "7px",
        border: "0",
        position: "absolute",
        top: "700px",
        left: "745px",
      },
    };
    dict["row6col6"] = {
      id: "row6col6",
      text: "Lorem Ipsum is simply dummy text of",
      color: "yellow",
      parentNode: "blue",
      blueChilds: [],
      yellowChilds: ["row7col5", "row7col6"],
      display: this.state.row6col6,
      btnbox: false,
      style: {
        width: "80px",
        height: "80px",
        backgroundColor: "rgb(111, 96, 245)",
        color: "white",
        fontSize: "9px",
        border: "0",

        position: "absolute",
        top: "530px",
        left: "1080px",
      },
    };
    dict["row6col7"] = {
      id: "row6col7",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
      color: "yellow",
      parentNode: "blue",
      blueChilds: [],
      yellowChilds: [],
      display: this.state.row6col7,
      btnbox: true,
      btnboxtxt: "AUDIT",
      style: {
        width: "90px",
        height: "90px",
        backgroundColor: "rgb(126, 141, 126)",
        color: "white",
        fontSize: "8px",
        border: "0",

        position: "absolute",
        top: "395px",
        left: "1340px",
      },
    };
    dict["row6col8"] = {
      id: "row6col8",
      text:
        "Lorem Ipsum is simplytext of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      color: "blue",
      parentNode: "blue",
      blueChilds: ["row7col7"],
      yellowChilds: [],
      display: this.state.row6col8,
      btnbox: true,
      btnboxtxt: "SERVICE MANAGES",
      style: {
        width: "90px",
        height: "90px",
        backgroundColor: "rgb(126, 141, 126)",
        color: "white",
        fontSize: "5px",
        border: "0",

        position: "absolute",
        top: "155px",
        left: "1405px",
      },
    };
    dict["row7col1"] = {
      id: "row7col1",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ",
      color: "yellow",
      parentNode: "blue",
      blueChilds: [],
      yellowChilds: [],
      display: this.state.row7col1,
      btnbox: true,
      btnboxtxt: "AUDIT",
      style: {
        width: "90px",
        height: "90px",
        backgroundColor: "rgb(126, 141, 126)",
        color: "white",
        fontSize: "8px",

        border: "0",
        position: "absolute",
        top: "500px",
        left: "20px",
        delay: "800",
      },
    };
    dict["row7col2"] = {
      id: "row7col2",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ",
      color: "yellow",
      parentNode: "blue",
      blueChilds: ["row8col1"],
      yellowChilds: [],
      display: this.state.row7col2,
      btnbox: false,
      style: {
        width: "90px",
        height: "90px",
        backgroundColor: "rgb(126, 141, 126)",
        color: "white",
        fontSize: "8px",

        border: "0",
        position: "absolute",
        top: "550px",
        left: "255px",
        can: "md",
        delay: "500",
      },
    };
    dict["row7col3"] = {
      id: "row7col3",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      color: "yellow",
      parentNode: "blue",
      blueChilds: ["row8col2"],
      yellowChilds: [],
      display: this.state.row7col3,
      btnbox: true,
      btnboxtxt: "SERVICE MANAGES",
      style: {
        width: "90px",
        height: "90px",
        backgroundColor: "rgb(126, 141, 126)",
        color: "white",
        fontSize: "5.5px",

        border: "0",
        position: "absolute",
        top: "550px",
        left: "435px",
        can: "md",
        delay: "500",
      },
    };
    dict["row7col4"] = {
      id: "row7col4",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      color: "yellow",
      parentNode: "blue",
      blueChilds: ["row8col3"],
      yellowChilds: [],
      display: this.state.row7col4,
      btnbox: true,
      btnboxtxt: "AUDIT",
      style: {
        width: "90px",
        height: "90px",
        backgroundColor: "rgb(126, 141, 126)",
        color: "white",
        fontSize: "7px",

        border: "0",
        position: "absolute",
        top: "550px",
        left: "620px",
        can: "md",
        delay: "800",
      },
    };
    dict["row7col5"] = {
      id: "row7col5",
      text: "Lorem Ipsum is simply dummy text of the",
      color: "yellow",
      parentNode: "yellow",
      blueChilds: [],
      yellowChilds: ["row8col4", "row8col5", "row8col6"],
      display: this.state.row7col5,
      btnbox: false,
      style: {
        width: "80px",
        height: "80px",
        backgroundColor: "rgb(149, 149, 247)",
        color: "white",
        fontSize: "9px",
        border: "0",

        position: "absolute",
        top: "590px",
        left: "1020px",
        can: "ldr",
      },
    };
    dict["row7col6"] = {
      id: "row7col6",
      text: "Lorem Ipsum is simply dummy text of the",
      color: "yellow",
      parentNode: "yellow",
      blueChilds: [],
      yellowChilds: ["row8col7"],
      display: this.state.row7col6,
      btnbox: false,
      style: {
        width: "80px",
        height: "80px",
        backgroundColor: "rgb(149, 149, 247)",
        color: "white",
        fontSize: "9px",
        border: "0",

        position: "absolute",
        top: "590px",
        left: "1140px",
        can: "l",
      },
    };
    /* dict["row7col7"] = {
      id: "row7col7",
      text: "Vous",
      color: "blue",
      parentNode: "blue",
      blueChilds: [],
      yellowChilds: [],
      display: this.state.row7col7,
      btnbox: false,
      style: {
        width: "70px",
        border: "0",

        position: "absolute",
        top: "1050px",
        left: "1920px",
      },
    }; */
    dict["row8col1"] = {
      id: "row8col1",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem  and typesetting industry Lorem  and typesetting industry",
      color: "blue",
      parentNode: "yellow",
      blueChilds: ["row9col1"],
      yellowChilds: [],
      btnbox: true,
      btnboxtxt: "THREAT INTELL.",
      display: this.state.row8col1,
      style: {
        width: "90px",
        height: "90px",
        backgroundColor: "rgb(126, 141, 126)",
        color: "white",
        fontSize: "5.5px",

        border: "0",
        position: "absolute",
        top: "690px",
        left: "255px",
        can: "md",
      },
    };
    dict["row8col2"] = {
      id: "row8col2",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      color: "blue",
      parentNode: "yellow",
      blueChilds: [],
      yellowChilds: [],
      display: this.state.row8col2,
      btnbox: true,
      btnboxtxt: "FORMATIONS",
      style: {
        width: "90px",
        height: "90px",
        backgroundColor: "rgb(126, 141, 126)",
        color: "white",
        fontSize: "7px",

        border: "0",
        position: "absolute",
        top: "690px",
        left: "435px",
      },
    };
    dict["row8col3"] = {
      id: "row8col3",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      color: "blue",
      parentNode: "yellow",
      blueChilds: ["row9col2"],
      yellowChilds: [],
      display: this.state.row8col3,
      btnbox: true,
      btnboxtxt: "SERVICE MANAGES",
      style: {
        width: "90px",
        height: "90px",
        backgroundColor: "rgb(126, 141, 126)",
        color: "white",
        fontSize: "5.5px",

        border: "0",
        position: "absolute",
        top: "690px",
        left: "620px",
        can: "md",
      },
    };
    dict["row8col4"] = {
      id: "row8col4",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting",
      color: "yellow",
      parentNode: "yellow",
      blueChilds: [],
      yellowChilds: ["row9col3"],
      display: this.state.row8col4,
      btnbox: false,
      style: {
        width: "80px",
        height: "80px",
        backgroundColor: "rgb(149, 149, 247)",
        color: "white",
        fontSize: "9px",
        border: "0",

        position: "absolute",
        top: "760px",
        left: "960px",
        can: "r",
      },
    };
    dict["row8col5"] = {
      id: "row8col5",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting",
      color: "yellow",
      parentNode: "yellow",
      blueChilds: [],
      yellowChilds: ["row9col4"],
      display: this.state.row8col5,
      btnbox: false,
      style: {
        width: "80px",
        height: "80px",
        backgroundColor: "rgb(149, 149, 247)",
        color: "white",
        fontSize: "9px",
        border: "0",

        position: "absolute",
        top: "820px",
        left: "1020px",
        can: "md",
      },
    };
    dict["row8col6"] = {
      id: "row8col6",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting",
      color: "yellow",
      parentNode: "yellow",
      blueChilds: [],
      yellowChilds: ["row9col5"],
      display: this.state.row8col6,
      btnbox: false,
      style: {
        width: "80px",
        height: "80px",
        backgroundColor: "rgb(149, 149, 247)",
        color: "white",
        fontSize: "9px",
        border: "0",

        position: "absolute",
        top: "760px",
        left: "1080px",
        can: "l",
        delay: "800",
      },
    };
    dict["row8col7"] = {
      id: "row8col7",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting",
      color: "yellow",
      parentNode: "yellow",
      blueChilds: [],
      yellowChilds: [],
      display: this.state.row8col7,
      btnbox: true,
      btnboxtxt: "AUDIT",
      style: {
        width: "90px",
        height: "90px",
        backgroundColor: "rgb(126, 141, 126)",
        color: "white",
        fontSize: "9px",
        border: "0",

        position: "absolute",
        top: "585px",
        left: "1280px",
      },
    };
    dict["row9col1"] = {
      id: "row9col1",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem  and typesetting industry Lorem  and typesetting industry",
      color: "blue",
      parentNode: "blue",
      blueChilds: [],
      yellowChilds: [],
      display: this.state.row9col1,
      btnbox: true,
      btnboxtxt: "SERVICE MANAGES",
      style: {
        width: "90px",
        height: "90px",
        backgroundColor: "rgb(126, 141, 126)",
        color: "white",
        fontSize: "5.5px",

        border: "0",
        position: "absolute",
        top: "830px",
        left: "255px",
      },
    };
    dict["row9col2"] = {
      id: "row9col2",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      color: "blue",
      parentNode: "blue",
      blueChilds: [],
      yellowChilds: [],
      btnbox: true,
      btnboxtxt: "FORMATIONS",
      display: this.state.row9col2,
      style: {
        width: "90px",
        height: "90px",
        backgroundColor: "rgb(126, 141, 126)",
        color: "white",
        fontSize: "7px",

        border: "0",
        position: "absolute",
        top: "830px",
        left: "620px",
      },
    };
    dict["row9col3"] = {
      id: "row9col3",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      color: "yellow",
      parentNode: "yellow",
      blueChilds: [],
      yellowChilds: [],
      display: this.state.row9col3,
      btnbox: true,
      btnboxtxt: "SERVICE MANAGES",
      style: {
        width: "90px",
        height: "90px",
        backgroundColor: "rgb(126, 141, 126)",
        color: "white",
        fontSize: "5.5px",
        border: "0",

        position: "absolute",
        top: "755px",
        left: "825px",
      },
    };
    dict["row9col4"] = {
      id: "row9col4",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      color: "yellow",
      parentNode: "yellow",
      blueChilds: [],
      yellowChilds: [],
      display: this.state.row9col4,
      btnbox: true,
      btnboxtxt: "CONSULTING",
      style: {
        width: "90px",
        height: "90px",
        backgroundColor: "rgb(126, 141, 126)",
        color: "white",
        fontSize: "7px",
        border: "0",

        position: "absolute",
        top: "945px",
        left: "1015px",
      },
    };
    dict["row9col5"] = {
      id: "row9col5",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      color: "yellow",
      parentNode: "yellow",
      blueChilds: [],
      yellowChilds: [],
      display: this.state.row9col5,
      btnbox: true,
      btnboxtxt: "FORMATIONS",
      style: {
        width: "90px",
        height: "90px",
        backgroundColor: "rgb(126, 141, 126)",
        color: "white",
        fontSize: "7px",
        border: "0",

        position: "absolute",
        top: "755px",
        left: "1250px",
      },
    };

    const draw = (startX, startY, endX, endY, e) => {
      var canvas = this.myRef.current;
      var c = canvas.getContext("2d");
      var x = 0;
      var y = 0;
      var z = 0;
      var w = 0;
      var condition = true;
      var condition2 = true;
      var condition3 = true;
      var condition4 = true;
      console.log(e);
      setInterval(function () {
        c.beginPath();
        c.strokeStyle = "Ivory";
        c.lineWidth = 2;

        if (dict[e].style.can == "md" && condition) {
          c.moveTo(startX, startY);
          x = x + 5;
          c.lineTo(startX, startY + x);
          if (startY + x === endY) {
            condition = false;
          }
        }
        if (dict[e].style.can == "l" && condition) {
          c.moveTo(startX, startY);
          x = x + 5;
          c.lineTo(startX + x, startY);
          if (startX + x === endX) {
            condition = false;
          }
        }
        if (dict[e].style.can == "r" && condition) {
          c.moveTo(startX, startY);
          x = x + 5;
          c.lineTo(startX - x, startY);
          if (startX - x === endX) {
            condition = false;
          }
        }
        if (dict[e].style.can == "dl") {
          if (condition) {
            c.moveTo(startX, startY);
            x = x + 5;
            c.lineTo(startX, startY + x);
            if (startY + x === endY + 100) {
              condition = false;
            }
          }

          if (condition == false && condition2 == true) {
            c.moveTo(startX, startY + x);
            y = y + 5;
            c.lineTo(startX + y, startY + x);
            if (startX + y === endX) {
              condition2 = false;
            }
          }
        }
        if (dict[e].style.can == "ld") {
          if (condition) {
            c.moveTo(startX, startY);
            x = x + 5;
            c.lineTo(startX + x, startY);
            if (startX + x === endX + 40) {
              condition = false;
            }
          }
          if (condition == false && condition2 == true) {
            c.moveTo(startX + x, startY);
            y = y + 5;
            c.lineTo(startX + x, startY + y);
            if (startY + y === endY) {
              condition2 = false;
            }
          }
        }

        if (dict[e].style.can == "ld2") {
          if (condition) {
            c.moveTo(startX, startY);
            x = x + 5;
            c.lineTo(startX + x, startY);
            if (startX + x === endX + 45) {
              condition = false;
            }
          }
          if (condition == false && condition2 == true) {
            c.moveTo(startX + x, startY);
            y = y + 5;
            c.lineTo(startX + x, startY + y);
            if (startY + y === endY) {
              condition2 = false;
            }
          }
        }
        if (dict[e].style.can == "rd") {
          if (condition) {
            c.moveTo(startX, startY);
            x = x + 5;
            c.lineTo(startX - x, startY);
            if (startX - x === endX + 40) {
              condition = false;
            }
          }
          if (condition == false && condition2 == true) {
            c.moveTo(startX - x, startY);
            y = y + 5;
            c.lineTo(startX - x, startY + y);
            if (startY + y === endY) {
              condition2 = false;
            }
          }
        }
        if (dict[e].style.can == "rd2") {
          if (condition) {
            c.moveTo(startX, startY);
            x = x + 5;
            c.lineTo(startX - x, startY);
            if (startX - x === endX + 45) {
              condition = false;
            }
          }
          if (condition == false && condition2 == true) {
            c.moveTo(startX - x, startY);
            y = y + 5;
            c.lineTo(startX - x, startY + y);
            if (startY + y === endY) {
              condition2 = false;
            }
          }
        }
        if (dict[e].style.can == "lu") {
          if (condition) {
            c.moveTo(startX, startY);
            x = x + 5;
            c.lineTo(startX - x, startY);
            if (startX - x === endX + 270) {
              condition = false;
            }
          }
          if (condition == false && condition2 == true) {
            c.moveTo(startX - x, startY);
            y = y + 5;
            c.lineTo(startX - x, startY - y);
            if (startY - y === endY - 15) {
              condition2 = false;
            }
          }
          if (condition2 == false && condition3 == true) {
            c.moveTo(startX - x, startY - y);
            z = z + 5;
            c.lineTo(startX - x - z, startY - y);
            if (startX - x - z === endX + 40) {
              condition3 = false;
            }
          }
        }

        if (dict[e].style.can == "ldr") {
          if (condition) {
            c.moveTo(startX, startY);
            x = x + 5;
            c.lineTo(startX, startY + x);
            if (startY + x === endY - 15) {
              condition = false;
            }
          }

          if (condition == false && condition2 == true) {
            c.moveTo(startX, startY + x);
            y = y + 5;
            c.lineTo(startX + y, startY + x);
            if (startX + y === endX + 40) {
              condition2 = false;
            }
          }
          if (condition == false && condition3 == true) {
            c.moveTo(startX, startY + x);
            z = z + 5;
            c.lineTo(startX - z, startY + x);
            if (startX - z === endX - 80) {
              condition3 = false;
            }
          }
          if (condition == false && condition4 == true) {
            c.moveTo(startX, startY + x);
            w = w + 5;
            c.lineTo(startX, startY + x + w);
            if (startY + x + w === endY + 45) {
              condition4 = false;
            }
          }
        }

        c.stroke();
      }, 30);
    };

    var delay = (ms) => new Promise((res) => setTimeout(res, ms));

    const finction = async (e, startX, endX) => {
      await delay(
        dict[dict[e].yellowChilds[dict[e].yellowChilds.length - 1]].style.delay
      );

      dict[e].yellowChilds.map((el) => {
        this.setState({ [dict[el].id]: true });

        dict[el].blueChilds.map((elb) => {
          this.setState({ [dict[elb].id]: true });
          draw(
            parseInt(
              dict[el].style.left.slice(0, dict[el].style.left.indexOf("p"))
            ) + 45,
            parseInt(
              dict[el].style.top.slice(0, dict[el].style.top.indexOf("p"))
            ) + 45,
            parseInt(
              dict[
                dict[el].blueChilds[dict[el].blueChilds.length - 1]
              ].style.left.slice(
                0,
                dict[
                  dict[el].blueChilds[dict[el].blueChilds.length - 1]
                ].style.left.indexOf("p")
              )
            ),
            parseInt(
              dict[
                dict[el].blueChilds[dict[el].blueChilds.length - 1]
              ].style.top.slice(
                0,
                dict[
                  dict[el].blueChilds[dict[el].blueChilds.length - 1]
                ].style.top.indexOf("p")
              )
            ),
            el
          );

          dict[elb].blueChilds.map((els) => {
            this.setState({ [dict[els].id]: true });
            draw(
              parseInt(
                dict[elb].style.left.slice(0, dict[elb].style.left.indexOf("p"))
              ) + 45,
              parseInt(
                dict[elb].style.top.slice(0, dict[elb].style.top.indexOf("p"))
              ) + 45,
              parseInt(
                dict[
                  dict[elb].blueChilds[dict[elb].blueChilds.length - 1]
                ].style.left.slice(
                  0,
                  dict[
                    dict[elb].blueChilds[dict[elb].blueChilds.length - 1]
                  ].style.left.indexOf("p")
                )
              ),
              parseInt(
                dict[
                  dict[elb].blueChilds[dict[elb].blueChilds.length - 1]
                ].style.top.slice(
                  0,
                  dict[
                    dict[elb].blueChilds[dict[elb].blueChilds.length - 1]
                  ].style.top.indexOf("p")
                )
              ),
              elb
            );

            dict[els].blueChilds.map((elt) => {
              this.setState({ [dict[elt].id]: true });
              draw(
                parseInt(
                  dict[els].style.left.slice(
                    0,
                    dict[els].style.left.indexOf("p")
                  )
                ) + 45,
                parseInt(
                  dict[els].style.top.slice(0, dict[els].style.top.indexOf("p"))
                ) + 45,
                parseInt(
                  dict[
                    dict[els].blueChilds[dict[els].blueChilds.length - 1]
                  ].style.left.slice(
                    0,
                    dict[
                      dict[els].blueChilds[dict[els].blueChilds.length - 1]
                    ].style.left.indexOf("p")
                  )
                ),
                parseInt(
                  dict[
                    dict[els].blueChilds[dict[els].blueChilds.length - 1]
                  ].style.top.slice(
                    0,
                    dict[
                      dict[els].blueChilds[dict[els].blueChilds.length - 1]
                    ].style.top.indexOf("p")
                  )
                ),
                els
              );
            });
          });
        });
      });
    };
    return (
      <div>
        <canvas
          className={classes.c}
          style={{ position: "absolute", zIndex: "-1" }}
          ref={this.myRef}
          width="1520"
          height="1000"
        ></canvas>

        <div className={classes.triangleDown}>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard
          </span>
        </div>
        <div className={classes.downline}></div>
        {Object.keys(dict).map((key, index) =>
          dict[key].display ? (
            <Animated
              animationIn="pulse"
              animationOut="fadeOutX"
              isVisible={true}
            >
              <button
                style={dict[key].style}
                className={classes.btn}
                key={index}
                onClick={function (event) {
                  {
                    if (
                      dict[
                        dict[key].yellowChilds[
                          dict[key].yellowChilds.length - 1
                        ]
                      ]
                    ) {
                      draw(
                        parseInt(
                          dict[key].style.left.slice(
                            0,
                            dict[key].style.left.indexOf("p")
                          )
                        ) + 40,
                        parseInt(
                          dict[key].style.top.slice(
                            0,
                            dict[key].style.top.indexOf("p")
                          )
                        ) + 40,
                        parseInt(
                          dict[
                            dict[key].yellowChilds[
                              dict[key].yellowChilds.length - 1
                            ]
                          ].style.left.slice(
                            0,
                            dict[
                              dict[key].yellowChilds[
                                dict[key].yellowChilds.length - 1
                              ]
                            ].style.left.indexOf("p")
                          )
                        ),
                        parseInt(
                          dict[
                            dict[key].yellowChilds[
                              dict[key].yellowChilds.length - 1
                            ]
                          ].style.top.slice(
                            0,
                            dict[
                              dict[key].yellowChilds[
                                dict[key].yellowChilds.length - 1
                              ]
                            ].style.top.indexOf("p")
                          )
                        ),
                        dict[key].id
                      );
                      finction(dict[key].id);
                    }
                  }
                }}
              >
                <span className={classes.txt}>{dict[key].text}</span>
                {dict[key].btnbox ? (
                  <div className={classes.outline}>
                    {dict[key].btnboxtxt}
                    <span className={classes.lines}></span>
                  </div>
                ) : null}
              </button>
            </Animated>
          ) : null
        )}
      </div>
    );
  }
}

export default App;
