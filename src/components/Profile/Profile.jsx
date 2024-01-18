import css from "./Profile.module.css";
export const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={image} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.stat}>
          <span className={css.label}>Followers</span>
          <span className={css.value}>{stats.followers}</span>
        </li>
        <li className={css.stat}>
          <span className={css.label}>Views</span>
          <span className={css.value}>{stats.views}</span>
        </li>
        <li className={css.stat}>
          <span className={css.label}>Likes</span>
          <span className={css.value}>3000</span>
        </li>
      </ul>
    </div>
  );
};
