import styled from 'styled-components';

const LayoutWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
`;

const Layout = ({ children }) => {
  return <LayoutWrapper>{children}</LayoutWrapper>;
};

export default Layout;

