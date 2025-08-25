import { Layout } from 'antd';
import AppSider from './AppSider';
import AppHeader from './AppHeader';
import AppContent from './AppContent';
import { useState } from 'react';

export default function AppLayout() {
    const [activeSection, setActiveSection] = useState('upcoming')

    return (
        <Layout>
            <AppSider activeSection={activeSection} setActiveSection={setActiveSection} />
            <Layout>
                <AppContent activeSection={activeSection} />
            </Layout>
        </Layout>
    )
}