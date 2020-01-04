import React from 'react';

const ItemFolio = props => {
  const { itemSrc, itemTitle, description, dataSize = '800x800' } = props;

  return (
    <div className="masonry__brick" data-aos="fade-up">
      <div className="item-folio">
        <div className="item-folio__thumb">
          <a
            href={itemSrc}
            className="thumb-link"
            title="Back On the Lash"
            data-size={dataSize}
          >
            <img src={itemSrc} alt={itemTitle} />
          </a>
        </div>

        <div className="item-folio__text">
          <h3 className="item-folio__title">{itemTitle}</h3>
          <p className="item-folio__cat">{description}</p>
        </div>

        <a
          href="https://www.behance.net/"
          className="item-folio__project-link"
          title="Project link"
        >
          <i className="icon-link" />
        </a>

        <div className="item-folio__caption">
          <p>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemFolio;
