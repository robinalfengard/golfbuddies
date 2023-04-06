import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";

export default function Blog() {
  return (
    <Wrapper id="blog">
      <div className="whiteBg">
        <div className="container1">
          <HeaderInfo>
            <h1 className="font40 extraBold">Senaste bokade rundorna</h1>
            <p className="font13">
              Här kan du se de senaste bokade golfrundorna av våra användare
              <br />
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Johannesbergs GK"
                tag="Olle & Stefan"
                author="10 minuter sen"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Arninge GK"
                tag="Stina, Frida & Greta"
                author="26 minuter sen"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Ystad GK"
                tag="Leif & Anders"
                author="56 minuter sen"
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Sand GK"
                tag="Urban & Johanna"
                author="1 timme sen"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Bro Hof GK"
                tag="Lotta, Märta, Per & Niklas"
                author="1 dag sen"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Trummenäs GK"
                tag="Paul & Martin"
                author="1 dag"
                
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Visa mer" action={() => alert("clicked")} />
            </div>
          </div>
        </div>
      </div>
      <div className="lightBg" style={{padding: '50px 0'}}>
        <div className="container">
          {/* <HeaderInfo>
            <h1 className="font40 extraBold">Kundomdömen</h1>
            <p className="font13">
          
            </p>
          </HeaderInfo>
          <TestimonialSlider /> */}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: -200px;
`;
const HeaderInfo = styled.div`
  margin-bottom: -50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;