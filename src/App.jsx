import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

export default function App() {
  const { fontSize, changeFontSize, toggleTheme } = useContext(ThemeContext);

  return (
    <div className='flex flex-col text-text bg-background h-screen p-8'>
      <div className='flex flex-col h-full rounded-2xl overflow-hidden'>
        <div className='text-2xl text-center bg-natural flex flex-col'>
          <h3>text-text bg-natural</h3>
          <button onClick={() => toggleTheme('light')} className='underline'>
            Toggle Light Theme
          </button>
          <button onClick={() => changeFontSize(fontSize - 2)} className='underline'>
            Fonte menor
          </button>
          <button onClick={() => changeFontSize(fontSize + 2)} className='underline'>
            Fonte maior
          </button>
        </div>
        <div className='flex-grow bg-primary'>
          <h3>bg-primary</h3>
          <button onClick={() => toggleTheme('dark')} className='underline'>
            Toggle Dark Theme
          </button>
        </div>
        <div className='flex-grow bg-secondary'>
          <h3>bg-secondary</h3>
          <button
            onClick={() => toggleTheme('high-contrast')}
            className='underline'
          >
            Toggle High Contrast
          </button>
        </div>
      </div>
    </div>
  );
}
