import React from "react";
import styled from "styled-components";

export default function BlogBox({ id, club, handicap, time, car, action, slots, players, players2, players3, players4}) {
  return (
    <WrapperBtn className="animate pointer" onClick={action ? () => action() : null}>
      <Wrapper className="whiteBg radius8 shadow">
        <div className="container">
        <div className="data">
        <h3 className="font20 extraBold">{id}</h3>
        <p className="font13" style={{ padding: "30px 0" }}>
          {club}
        </p>
          <p className="font13 extraBold">{handicap}</p>
         <p className="font13 extraBold">{slots}</p>
          
          <p className="tag coralBg radius6 font13 extraBold">{time}</p>
          <p className="tag coralBg radius6 font13 extraBold">{car}</p>
          </div>
          <div className="players">
          <p className=" radius6 font13 extraBold">{players}</p>
          
          <p className=" radius6 font13 extraBold">{players2}</p>
          
          <p className=" radius6 font13 extraBold">{players3}</p>
       
          <p className=" radius6 font13 extraBold">{players4}</p>
          

        </div>
        </div>
      </Wrapper>
    </WrapperBtn>
  );
}

const Wrapper = styled.div`
  width: 100%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
`;
const WrapperBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  :hover {
    opacity: 0.5;
  }
`;

const container = styled.div`
display:flex;
justify-content: space-between


  }
`;

const data = styled.div`
flex-orientation :row;


  }
`;

const players = styled.div`
flex-orientation :row;


  }
`;
