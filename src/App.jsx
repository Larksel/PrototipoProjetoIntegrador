import { useContext } from "react"
import { ThemeContext } from "./context/ThemeContext"

export default function App() {
  const { toggleTheme } = useContext(ThemeContext)

  const lightTheme = () => {
    toggleTheme('light');
  }

  const darkTheme = () => {
    toggleTheme('dark')
  }

  const highContrast = () => {
    toggleTheme('high-contrast')
  }

  return (
    <div className='flex flex-col text-text bg-background h-screen p-8'>
      <div className='flex flex-col h-full rounded-2xl overflow-hidden'>
        <div className='text-2xl text-center bg-natural'>
          <h3>text-text bg-natural</h3>
          <button onClick={lightTheme} className="underline">Toggle Light Theme</button>
        </div>
        <div className='flex-grow bg-primary'>
          <h3>bg-primary</h3>
          <button onClick={darkTheme} className="underline">Toggle Dark Theme</button>
        </div>
        <div className='flex-grow bg-secondary'>
          <h3>bg-secondary</h3>
          <button onClick={highContrast} className="underline">Toggle High Contrast</button>
        </div>
      </div>
    </div>
  )
}
