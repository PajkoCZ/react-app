import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


const TabsComp = (props) => {
    document.title = "Tabs";

    const [key, setKey] = useState('home');

    return (
        <div className='subcontent'>
            <h1>{props.heading}</h1>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >
                <Tab eventKey="home" title="ReactJS">
                    <strong>React </strong>je JavaScriptová knihovna pro tvorbu uživatelského rozhraní. Je vyvíjený Facebookem a komunitou samostatných vývojářů a společností. React může být využit jako základ pro tvorbu single-page nebo mobilních aplikací, protože je optimální pro práci s rychle se měnícími daty.
                </Tab>
                <Tab eventKey="profile" title="Angular">
                    <strong>Angular</strong> je framework pro vývoj single page aplikací postavený na JavaScriptu a jeho nadstavbě, TypeScriptu. V první verzi se mu říkalo AngularJS. Vytvořil ho Google v roce 2010 a uvolnil ho jako open source.
                </Tab>
                <Tab eventKey="contact" title="Contact" disabled>
                    Tab content for Contact
                </Tab>
            </Tabs>
        </div>
    )
}

export default TabsComp;