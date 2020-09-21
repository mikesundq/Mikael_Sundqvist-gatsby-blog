import React from "react"
import { 
  Container,
  FeatureImage,
  Content,
  ContentCard,
  Pagination
} from "../components"
import { H1 } from "../elements"

const index = () => {
  return (
    <Container>
      <FeatureImage/>
       <Content>
        <H1 textAlign="center" margin="0 0 1rem 0">
          My Glorious Blog
        </H1>
         <ContentCard date="20-08-12" title="first blog" excerpt="lore mupp" slug=""/>
         <ContentCard date="20-09-12" title="second blog" excerpt="lore two" slug=""/>
         <ContentCard date="20-09-20" title="third blog" excerpt="hupp hopp" slug=""/>
         {/* <ContentCard date="20-09-21" title="fourth blog" excerpt="hmmm" slug=""/> */}
       </Content>
       <Pagination
         isFirst=""
         isLast=""
         prevPage="/"
         nextPage="/"
       />
    </Container>
  )
}

export default index