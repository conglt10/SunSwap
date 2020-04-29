import React from 'react';
import './App.css';
import { Layout } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import HeaderNav from './layout/Header';
import FooterNav from './layout/Footer';
const { Header, Content, Footer } = Layout;
export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Layout>
          <Header>
            <HeaderNav />
          </Header>
          <Content>
            <Router />
          </Content>
          <Footer>
            <FooterNav />
          </Footer>
        </Layout>
      </BrowserRouter>
    </div>
  );
}
