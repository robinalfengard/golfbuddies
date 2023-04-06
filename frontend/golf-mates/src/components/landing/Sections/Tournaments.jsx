import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
// Assets
import ProjectImg1 from "../assets/img/projects/1.png";
import ProjectImg2 from "../assets/img/projects/2.png";
import ProjectImg3 from "../assets/img/projects/3.png";
import ProjectImg4 from "../assets/img/projects/4.png";
import ProjectImg5 from "../assets/img/projects/5.png";
import ProjectImg6 from "../assets/img/projects/6.png";
import AddImage2 from "../assets/img/add/add2.png";

export default function Projects() {
  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container1">
          <HeaderInfo>
            <h1 className="font40 extraBold">Aktuella tävlingar</h1>
            <p className="font13">
              Få en överblick över de aktuella tävlingar som finns tillgängliga.
            </p>
          </HeaderInfo>
          <div className="row textCenter1">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg1}
                title="Ullna GK 4/5"
                text="Öppen för dig som bor i Stockholm. Maxhandikapp 12."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg1}
                title="Hagge GK 8/6"
                text="Öppen för hela Sverige. Maxhandikapp 36."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg1}
                title="Ladies day out! Haninge GK 9/6"
                text="Öppen för hela Sverige. Endast damer. Maxhandikapp 36."
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row textCenter1">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg1}
                title="Partävling! Gävle GK 10/7"
                text="Spelform Scramble. Öppen för dig som bor i Gästrike-Hälsingland. Endast herrar. Maxhandikapp 20. "
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg1}
                title="Två generationer! Uppsala GK 12/7"
                text="Spelform Greensome. Öppen för hela Sverige. Maxhandikapp 36."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg1}
                title="Halmstad GK 8/8"
                text="Scratchtävling. Öppen för hela Sverige. Maxhandikapp 5"
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row flexCenter1">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Visa mer" action={() => alert("clicked")} />
            </div>
          </div>
        </div>
      </div>
      <div className="lightBg">
        <div className="container1">
          <Advertising className="flexSpaceCenter1">
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className="flexCenter1">
                  <img className="radius8" src={AddImage2} alt="add" />
                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              <h2 className="font40 extraBold">Vårt mål</h2>
              <p className="font12">
                Målet var att skapa en plattform för golfaren, en som söker efter en perfekt golfpartner. Vi tror på att en golfupplevelse blir roligare och mer givande genom att kunna hitta en perfekt golfpartner. Med hjälp av vår matchningsteknik kan du snabbt hitta en golfare som passar din spelstil och preferenser.

                Vi tror även på hållbarhet, därför skapade vi plattformen med hållbarhet i fokus. Vi jobbar aktivt med att minska miljöpåverkan och uppmuntrar våra användare att göra samma sak.
              </p>
              <ButtonsRow
                className="flexNullCenter1"
                style={{ margin: "30px 0" }}
              >
                <div style={{ width: "190px" }}>
                  <FullButton
                    title="Skapa konto"
                    action={() => alert("clicked")}
                  />
                </div>
                <div style={{ width: "190px", marginLeft: "15px" }}>
                  <FullButton
                    title="Kontakta oss"
                    action={() => alert("clicked")}
                    border
                  />
                </div>
              </ButtonsRow>
            </AddRight>
          </Advertising>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
    margin-top: 30%
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
