import { Layout, Typography } from 'antd';
import CustomButton from '../CustomButton.jsx';
import { sections } from '../../data.js';

const siderStyle = {
    padding: '3rem',
    backgroundColor: '#F4F4F4',
    height: '100vh',
};

const onChange = checked => {
    console.log(`switch to ${checked}`);
};

export default function AppSider({ activeSection, setActiveSection }) {
    return (
        <Layout.Sider width="23%" style={siderStyle}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <Typography.Title level={2}>Menu</Typography.Title>

                {sections.map(({ key, label }) => (
                    <CustomButton
                        key={key}
                        isActive={activeSection === key}
                        onClick={() => setActiveSection(key)}
                    >
                        <img src={`/images/${key}.svg`} alt="" style={{ height: '20px', marginRight: 8 }} />
                        {label}
                    </CustomButton>
                ))}

                <div style={{ marginTop: 'auto' }}>
                    <CustomButton isActive={false} onClick={() => console.log('Sign out')}>
                        <img src={`/images/signOut.svg`} alt="" style={{ height: '20px', marginRight: 8 }} />
                        Sign out
                    </CustomButton>

                </div>
            </div>
        </Layout.Sider>
    );
}
