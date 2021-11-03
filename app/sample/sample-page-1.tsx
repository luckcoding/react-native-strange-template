import { Button, Header, Navigation, Strange } from "react-native-strange"
import { log } from "@strange/common"
import React, { useEffect } from "react"

const Page: Strange.FC<{}> = (props) => {
  useEffect(() => {
    log(`create ReactRootView: ${Date.now() - Number(props.timestamp)}`)
  }, [])
  return (
    <React.Fragment>
      <Header title="Page 1" withBack />
      <Button onPress={() => Navigation.push("sample_page2", { id: Math.random() })}>to page2</Button>
    </React.Fragment>
  )
}

export default Page
