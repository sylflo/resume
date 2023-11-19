import React from "react"
import tw from "twin.macro"
import { FaTwitter, FaGithub } from "react-icons/fa"

const List = tw.ul`
  cursor-default list-none pl-0`

const Item = tw.ul`
inline-block p-0 pr-4 text-white`

const ItemLink = tw.a`
border border-solid border-white rounded-full
inline-block
w-10 h-10`

const Icons = () => (
  <List>
    <Item>
      <ItemLink href="https://github.com/sylflo">
        <FaGithub
          size={20}
          style={{ marginLeft: "0.55rem", marginTop: "0.55rem" }}
        />
      </ItemLink>
    </Item>
    <Item>
      <ItemLink href="https://twitter.com/dev_chateau">
        <FaTwitter
          size={20}
          style={{ marginLeft: "0.55rem", marginTop: "0.55rem" }}
        />
      </ItemLink>
    </Item>
  </List>
)

export default Icons
