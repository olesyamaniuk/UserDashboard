import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profileBlock}>
      <div className={css.desc}>
        <img className={css.icon} src={image} alt="User avatar" />
        <p className={css.textName}>{name}</p>
        <p className={css.textProf}>@{tag}</p>
        <p className={css.textProf}>{location}</p>
      </div>

      <ul className={css.listItem}>
        {Object.entries(stats).map(([key, value]) => (
          <li key={key} className={css.item}>
            <span className={css.itemName}>
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </span>
            <span className={css.itemQuantity}>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
