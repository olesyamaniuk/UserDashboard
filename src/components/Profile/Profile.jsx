import css from "./Profile.module.css"
export default function Profile({name, tag, location, image, stats}) {
    return (
      <div className={css.profileBlock}>
      <div>
        <img className={css.icon}
          src= {image}
          alt="User avatar"
        />
        <p className={css.textName}>{name}</p>
        <p className={css.textProf}>@{tag}</p>
        <p className={css.textProf}>{location}</p>
      </div>
    
      <ul className={css.listItem}>
        <li className={css.item}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
    )
  }
