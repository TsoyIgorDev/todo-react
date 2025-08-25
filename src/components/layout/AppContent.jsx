import { Layout } from 'antd';
import { sections } from '../../data.js';

const contentStyle = {
    textAlign: 'left',
    backgroundColor: '#ffffffff',
    minHeight: 'calc(100vh)',
    padding: '3rem',
};

export default function AppContent({ activeSection }) {
    const currentSection = sections.find((s) => s.key == activeSection)
    const SectionComponent = currentSection.component
    return (
        <>
            <Layout.Content style={contentStyle}>
                <SectionComponent />
            </Layout.Content>
        </>
    )
}