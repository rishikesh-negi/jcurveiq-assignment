function SquareButtons({ icon, styles, ariaLabel = "", title }) {
  return (
    <button className={styles} aria-label={ariaLabel} title={title}>
      {icon}
    </button>
  );
}

export default SquareButtons;
