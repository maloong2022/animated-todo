import React from 'react'
import AppContainer from './src/components/app-container'
import Navigator from './src/'
import TaskContext from './src//models/task'

const { RealmProvider } = TaskContext

function App() {
  return (
    <AppContainer>
      <Navigator />
    </AppContainer>
  )
}

export default function AppWrapper() {
  if (!RealmProvider) {
    return null
  }
  return (
    <RealmProvider>
      <App />
    </RealmProvider>
  )
}


