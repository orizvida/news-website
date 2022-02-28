import { observer } from 'mobx-react-lite'
import React from 'react'
import { store } from '../app/stores/store'

export default observer(function Test() {
    const {testStore} = store;
  return (
    <div>
        <h1>{testStore.number}</h1>
    </div>
  )
})