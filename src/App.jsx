import * as Tabs from '@radix-ui/react-tabs'; import './App.css'
import Rpg from './components/rpg';
import Banco from './components/banco';

function App() {

  return (
    <div className="App">
      <Tabs.Root defaultValue='rpg'>
        <Tabs.List>
          <Tabs.Trigger value='rpg' >RPG</Tabs.Trigger>
          <Tabs.Trigger value='banco' >BANCO</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value='rpg'>
          <Rpg />
        </Tabs.Content>
        <Tabs.Content value='banco'>
          <Banco />
        </Tabs.Content>
      </Tabs.Root>
    </div>
  )
}

export default App
