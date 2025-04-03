import { useState } from "react";
import styles from "./Gallery.module.scss";
import { images } from "./images";

export function Gallery() {
  const [index, setIndex] = useState(0);
  const visibleImages = 3;

  const nextSlide = () => {
    if (index < images.length - visibleImages) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className={styles.galleryBlock}>
      <h1 className={styles.titleName}>Discover our app in action</h1>
      <div className={styles.contentBlock}>
        <button onClick={prevSlide} className={styles.arrow}>
          ❮
        </button>
        <div className={styles.imagesBlock}>
          {images.slice(index, index + visibleImages).map((img, i) => (
            <img key={`${index}-${i}`} src={img} alt={`Images ${i}`} className={styles.image} />
          ))}
        </div>
        <button onClick={nextSlide} className={styles.arrow}>
          ❯
        </button>
      </div>
    </div>
  );
}

//Остановилась на том что нужно разобраться со стилем (поменять стрелки и добавить при ховере увеличение изображения)
