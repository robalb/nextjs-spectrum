import {ComboBox, Item} from '@adobe/react-spectrum'
	import {SearchField} from '@adobe/react-spectrum'
import {MenuTrigger, Menu, Button, ActionButton, Text, Flex} from '@adobe/react-spectrum'
import ProfileIcon from '../ProfileIcon/ProfileIcon'
import styles from './Navbar.module.css'

export default function Navbar() {
    return (
      <header className={styles.header}>
        <Flex alignItems={"center"} gap={20}>
          <a href="#">Home</a>
          <SearchField />
        </Flex>

        <Flex alignItems={"center"} gap={20}>
          <a href="#">Portfolio</a>
          <MenuTrigger >
            <ActionButton variant="primary">
              <ProfileIcon />
              <Text>Antonio</Text>
            </ActionButton>
            <Menu minWidth={200}>
              <Item key="cut">Portfolio</Item>
              <Item key="copy">settings</Item>
              <Item key="paste">Logout</Item>
            </Menu>
          </MenuTrigger>
        </Flex>
      </header>
    )
}