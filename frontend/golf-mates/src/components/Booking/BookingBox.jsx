import React from "react";
import styled from "styled-components";

export default function BlogBox({ id, club, handicap, time, car, action, slots, players, players2, players3, players4}) {
  return (
    <WrapperBtn className="animate pointer" onClick={action ? () => action() : null}>
      <Wrapper className="whiteBg radius8 shadow">
        <div className="container">
        <div className="data">
        <h3 className="font20 extraBold">{id}</h3>
        <p className="tag blueColor radius6 font13 extraBold" style={{ padding: "" }}>{club}
        </p>
          <p className="font13 extraBold">{handicap}</p>
         <p className="font13 extraBold">{slots}</p>
          
          <p className="tag greenColor radius6 font13 extraBold">{time}</p>
          <p className="tag greenColor radius6 font13 extraBold">{car}</p>
          </div>
          <div className="players">
          <p className=" radius6 font13 extraBold" style={{ padding: "5px 15px" }}>{players}</p>
          
          <p className=" radius6 font13 extraBold" style={{ padding: "1px 15px" }}>{players2}</p>
          
          <p className=" radius6 font13 extraBold" style={{ padding: "1px 15px" }}>{players3}</p>
       
          <p className=" radius6 font13 extraBold" style={{ padding: "1px 15px" }}>{players4}</p>
          

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
