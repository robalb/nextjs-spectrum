
import Image from 'next/image'

import img from '../../public/ida.jpg'
import style from "./ProfileIcon.module.css"

const ProfileIcon = (props) => {
  return (
    <Image
      className={style.icon}
      src={img}
      alt="Picture of the author"
      width={35}
      height={35}
    />
  )
}

export default ProfileIcon