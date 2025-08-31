import { Button } from 'antd';

const customButtonStyle = {
    justifyContent: 'start',
    width: '100%',
    padding: '0 10px',
};

export default function CustomButton({ isActive, children, onClick, style }) {
    return (
        <>
            <Button type={isActive ? 'primary' : 'default'} style={{ ...customButtonStyle, ...style }} onClick={onClick} > {children}</Button >
        </>
    )
}