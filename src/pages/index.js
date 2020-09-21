import React from "react"
import { 
  Container,
  FeatureImage,
  Content,
  ContentCard
} from "../components"

const index = () => {
  return (
    <Container>
      <FeatureImage/>
       <Content>
         <ContentCard date="20-08-12" title="first blog" excerpt="lore mupp" slug=""/>
         <ContentCard date="20-09-12" title="second blog" excerpt="lore two" slug=""/>
         <ContentCard date="20-09-20" title="third blog" excerpt="hupp hopp" slug=""/>
         {/* <ContentCard date="20-09-21" title="fourth blog" excerpt="hmmm" slug=""/> */}
       </Content>
    </Container>
  )
}

export default index