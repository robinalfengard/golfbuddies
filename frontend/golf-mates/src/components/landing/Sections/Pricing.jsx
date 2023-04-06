import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";

export default function Pricing() {
  return (
    <Wrapper id="pricing">
      <div className="whiteBg">
        <div className="container1">
          <HeaderInfo>
            <h1 className="font40 extraBold">Prisplan</h1>
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull1">
            <TableBox>
              <PricingTable
                icon="roller"
                price="Gratis"
                title="Bas"
                offers={[
                  { name: "Skapa konto", cheked: true },
                  { name: "Lägga upp annons", cheked: true },
                  { name: "Skapa turneringar", cheked: false },
                  { name: "Chattfunktion", cheked: false },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="monitor"
                price="49kr/mån"
                title="Premium"
                offers={[
                  { name: "Skapa konto", cheked: true },
                  { name: "Lägga upp annons", cheked: true },
                  { name: "Skapa turneringar", cheked: true },
                  { name: "Chattfunktion", cheked: false },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="browser"
                price="149kr/mån"
                title="Guld"
                offers={[
                  { name: "Skapa konto", cheked: true },
                  { name: "Lägga upp annons", cheked: true },
                  { name: "Skapa turneringar", cheked: true },
                  { name: "Chattfunktion", cheked: true },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
          </TablesWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;