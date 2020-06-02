import * as React from "react";
import styled from "@emotion/styled";

const App: React.FC = ({ children }) => {
  return (
    <Layout>
      <HeaderContainer />
      <SidebarContainer />
      <ConversationContainer />
    </Layout>
  );
};
export default App;

const Layout = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  display: grid;
  grid-template-columns: 260px 1fr 1fr;
  grid-template-rows: 38px 1fr;
  grid-template-areas:
    "header header header"
    "sidebar main main";
`;

const HeaderContainer = styled.div`
  grid-area: header;
  background: darkgreen;
`;

const SidebarContainer = styled.div`
  grid-area: sidebar;
  background: green;
`;

const ConversationContainer = styled.div`
  grid-area: main;
  background: lightgray;
`;
