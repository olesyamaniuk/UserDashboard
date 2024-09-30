import clsx from "clsx";
import css from "./FriendListItem.module.css"

export default function FriendListItem({
    friend:{
        avatar,
        name,
        isOnline
    },
}) {
    const statusList = clsx(css.statusText, isOnline ? css.isOnline : css.isOffline);
    return (
    <>
    <div>
      <img className={css.icon} src={avatar} alt="Avatar" width="48" />
      <p className={css.textName}>{name}</p>
      <p className={statusList}>{isOnline ? "Online": "Offline"}</p>
    </div>
    </>
    )
  }