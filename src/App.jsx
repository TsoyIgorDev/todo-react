import AppLayout from './components/layout/AppLayout'
import { ConfigProvider } from 'antd';
export default function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          // Primary (активные кнопки)
          colorPrimary: "#EBEBEB",
          colorPrimaryHover: "#d9d9d9",
          colorTextLightSolid: "#444444",

          // Default (обычные кнопки)
          colorBgContainer: "#ffffff",
          colorBorder: "#d9d9d9",
          colorText: "#444444",
          colorBgTextHover: "#f5f5f5",
          colorTextHover: "#030303ff",
          colorBorderSecondary: "#999999",
        },
      }}
    >
      <AppLayout />
    </ConfigProvider >
  )
}
