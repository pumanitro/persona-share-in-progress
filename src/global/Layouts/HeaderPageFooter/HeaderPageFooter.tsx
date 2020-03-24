import React, { FunctionComponent } from 'react';
import Header from './Header/Header';
import styled from 'styled-components';

const HeaderPageFooterWrapper = styled.div`
  min-height: 100vh;
  position: relative;
`;

const PagePaddingWrapper = styled.main`
  padding-bottom: 0;
`;

export const HeaderPageFooter: FunctionComponent = ({ children }: { children?: React.ReactNode }) => (
  <HeaderPageFooterWrapper>
    <Header />
    <PagePaddingWrapper>{children}</PagePaddingWrapper>
  </HeaderPageFooterWrapper>
);
