import { Button, ComponentsLibraryProvider } from '@dsoaress/components-library'
import { useState } from 'react'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <ComponentsLibraryProvider>
      <div>
        <div></div>
        <h1>Vite + React</h1>
        <div>
          <Button onClick={() => setCount(count => count + 1)}>count is {count}</Button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p>Click on the Vite and React logos to learn more</p>
      </div>
    </ComponentsLibraryProvider>
  )
}
