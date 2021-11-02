import { Button, Header, Navigation, Strange, Text, useParams } from "react-native-strange"
import { observer } from "mobx-react-lite"
import React from "react"
import { useStoreContext } from "./common"

const Page = observer<Strange.Properties<{ id: string }>>(() => {
  const { count, increment, decrement } = useStoreContext()
  const { id } = useParams<{ id: string }>()
  return (
    <React.Fragment>
      <Header title="Page 2" withBack />
      <Text h1>{id}</Text>
      <Button onPress={() => Navigation.push("sample_page1")}>to page1</Button>
      <Button onPress={() => Navigation.pop()}>pop</Button>
      <Button onPress={() => Navigation.popToRoot()}>popToRoot</Button>
      <Text>{count}</Text>
      <Button size="small" onPress={increment}>
        increment
      </Button>
      <Button size="small" onPress={decrement}>
        decrement
      </Button>
    </React.Fragment>
  )
})

export default Page
