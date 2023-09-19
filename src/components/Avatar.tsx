import styles from "./Avatar.module.css";

interface AvatarProps {
  hasBorder?: boolean;
  src: string;
  alt?: string;
}

export function Avatar({ hasBorder = true, src }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.Avatar}
      // src="https://avatars.githubusercontent.com/u/14254545?v=4"
      src={src}
      alt="Faran42"
    />
  );
}
