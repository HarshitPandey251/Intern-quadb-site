import React, { useState } from 'react'
import 'App.css'
import { Dropdown, Container, Table, Col, Row} from 'react-bootstrap'
import TelegramIcon from '@material-ui/icons/Telegram';

// Media Import
import logo from './img/HODLINFO.png';
import middleImg from './img/middle-section.png';
import BottomImg from './img/Bottom-Banner.png';
import wazirX from './img/wazirX.png';
import bitbns from './img/bitbns.png'
import giotus from './img/giotus.png';
import colodax from './img/colodax.png';
import zebpay from './img/zebpay.png';
import coindcx from './img/coindcx.png';

const App = (props) => {
    const [theme, setTheme] = useState('dark-theme');
    const [currencyName, setCurrencyName] = useState('BTC');

    const changeTheme = () => {
        if (theme === 'dark-theme') {
            setTheme('light-theme');
        } else {
            setTheme('dark-theme');
        }
    }

    function createData(sno,img, platform, lastTraded, sellPrice, color, difference, savings) {
        return { sno,img, platform, lastTraded, sellPrice, color, difference, savings };
      }
      
      const rows = [
        createData(1, wazirX, 'WazirX', '₹ 29,66,333', '₹ 29,67,629 / ₹ 29,75,244', '', 2.06, '▲ ₹ 67,034'),
        createData(2, bitbns, 'Bitbns', '₹ 29,59,221', '₹ 29,61,793 / ₹ 29,69,589', 'red-color', -0.40 , '▼ ₹ 11,914'),
        createData(3, giotus, 'Giotus', '₹ 30,29,990', '₹ 29,75,500 / ₹ 30,20,000', '', 1.74, '▲ ₹ 51,673'),
        createData(4, colodax, 'Colodax', '₹ 29,82,144', '₹ 29,59,380 / ₹ 29,89,124', '', 0.13, '▲ ₹ 3,827'),
        createData(5, zebpay, 'Zebpay', '₹ 29,70,501', '₹ 29,70,501 / ₹ 29,70,000', 'red-color', -0.26, '▼ ₹ 7,815'),
        createData(6, coindcx, 'CoinDCX', '₹ 29,62,671', '₹ 29,67,814 / ₹ 29,69,866', 'red-color', -0.53, '▼ ₹ 15,644')
      ];

    return (
        <>
            <div className={theme}>
                <header className="header-div">
                    <Row>
                        <Col lg={4} md={4} sm={12} xs={12}>
                            <div className="header-logo-div">
                                <img src={logo} alt="HODLINFO" />
                                <p> Powered By <a href="https://finstreet.in" target="_blank" rel="noopener noreferrer"> Finstreet</a></p>
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={12} xs={12} className="d-flex justify-content-center">
                            <div className="header-currency-div text-center">
                                <div className="header-btn-div">
                                    <Dropdown>
                                        <Dropdown.Toggle variant="secondary" className="header-btn">
                                            INR
                                    </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="/BTC-INR">INR</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className="header-btn-div">
                                    <Dropdown>
                                        <Dropdown.Toggle variant="secondary" className="header-btn">
                                            {currencyName}
                                    </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item onSelect={(key,e) => setCurrencyName(e.target.innerText)}>BTC</Dropdown.Item>
                                            <Dropdown.Item onSelect={(key,e) => setCurrencyName(e.target.innerText)}>ETH</Dropdown.Item>
                                            <Dropdown.Item onSelect={(key,e) => setCurrencyName(e.target.innerText)}>USDT</Dropdown.Item>
                                            <Dropdown.Item onSelect={(key,e) => setCurrencyName(e.target.innerText)}>XRP</Dropdown.Item>
                                            <Dropdown.Item onSelect={(key,e) => setCurrencyName(e.target.innerText)}>TRX</Dropdown.Item>
                                            <Dropdown.Item onSelect={(key,e) => setCurrencyName(e.target.innerText)}>DASH</Dropdown.Item>
                                            <Dropdown.Item onSelect={(key,e) => setCurrencyName(e.target.innerText)}>ZEC</Dropdown.Item>
                                            <Dropdown.Item onSelect={(key,e) => setCurrencyName(e.target.innerText)}>XEM</Dropdown.Item>
                                            <Dropdown.Item onSelect={(key,e) => setCurrencyName(e.target.innerText)}>IOST</Dropdown.Item>
                                            <Dropdown.Item onSelect={(key,e) => setCurrencyName(e.target.innerText)}>WIN</Dropdown.Item>
                                            <Dropdown.Item onSelect={(key,e) => setCurrencyName(e.target.innerText)}>BTT</Dropdown.Item>
                                            <Dropdown.Item onSelect={(key,e) => setCurrencyName(e.target.innerText)}>WRX</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className="header-btn-div">
                                    <a href="https://wazirx.com/invite/sp7pvbt6?utm_source=finstreet&utm_medium=affiliate&utm_campaign=regnow-btn" target="_blank" rel="noopener noreferrer" className="btn btn-secondary header-btn">Buy {currencyName} </a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} sm={12} xs={12} className="d-flex" style={{ justifyContent: "flex-end" }}>
                            <div className="right-header-div">
                                <div className="counter-bar">
                                </div>
                                <a className="telegram-btn" href="https://hodlinfo.com/connect/telegram" target="_blank" rel="noopener noreferrer"><TelegramIcon/> Connect Telegram</a>
                                <div className="switch-div">
                                    <input type="checkbox" defaultChecked />
                                    <div className="slider" onClick={changeTheme}></div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </header>
                <main className="content-area">
                    <Container fluid className="first-section-container">
                        <div className="first-section">
                            <div className="text-center">
                                <div className="first-section-heading text-color">0.88 %</div>
                                <div className="first-section-subheading">5 Mins</div>
                            </div>
                            <div className="text-center">
                                <div className="first-section-heading text-color">0.9 %</div>
                                <div className="first-section-subheading">1 Hour</div>
                            </div>
                            <div className="first-section-middle text-center">
                                <span className="first-section-subText">Best Price to Trade</span>
                                <div className="first-section-heading">₹ 28,88,266</div>
                                <div className="first-section-subText">Average {currencyName}/INR net price including commission</div>
                            </div>
                            <div className="text-center">
                                <div className="first-section-heading text-color">10.17 %</div>
                                <div className="first-section-subheading">1 Day</div>
                            </div>
                            <div className="text-center">
                                <div className="first-section-heading text-color">9 %</div>
                                <div className="first-section-subheading">7 Days</div>
                            </div>
                        </div>
                        <a href="https://finstreet.in/" target="_blank" rel="noopener noreferrer">
                            <img src={middleImg} alt="Finstreet" />
                        </a>
                    </Container>


                    <div className="crypto-table">
                        <Table borderless>
                            <thead>
                                <tr>
                                    <th><h4 className="pointer">#</h4></th>
                                    <th><h4 className="pointer">Platform</h4></th>
                                    <th><h4 className="pointer">Last Traded Price</h4></th>
                                    <th><h4 className="pointer">Buy / Sell Price</h4></th>
                                    <th><h4 className="pointer">Difference</h4></th>
                                    <th><h4 className="pointer">Savings</h4></th>
                                </tr>
                            </thead>
                            <tbody>

                            {rows.map((row) => (
                                <tr>
                                 <td><h4 className="table-content">{row.sno}</h4></td>
                                 <td><a href={props.link}><h4 className="table-content"><img src={row.img} alt=""/> <span>{row.platform} </span> </h4></a></td>
                                 <td><h4 className="table-content">{row.lastTraded}</h4></td>
                                 <td><h4 className="table-content">{row.sellPrice} </h4></td>
                                 <td><h4 className={row.color} >{row.difference}</h4></td>
                                 <td><h4 className={row.color} >{row.savings}</h4></td>
                                 </tr>
                            ))}                           
                            </tbody> 
                        </Table>
                    </div>


                    <div className="bottom-banner-div">
                        <a href="https://ftx.com/#a=finstreet" target="_blank" rel="noopener noreferrer">
                            <img src={BottomImg} alt="Finstreet Banner" />
                        </a>
                    </div>
                </main>
                <footer className="footer-div">
                    <div className="footer-text">
                        Copyright © 2019
                    </div>
                    <div className="footer-text">
                        HodlInfo.com
                    </div>
                    <div className="footer-text">
                        Developed By <a href="https://www.quadbtech.com/" target="_blank" rel="noopener noreferrer">QuadBTech</a>
                    </div>
                    <div className="footer-text">
                        <a href="mailto:support@hodlinfo.com"> Support</a>
                    </div>
                </footer>
            </div>
        </>
    )
}


export default App