function BlockContent({title, image, children}) {
  return (
    <div className="block-content">
      <div className="block-content__description">
        <h2 className="block-content__title">{title}</h2>
        <div className="block-content__text">{children}</div>
      </div>
      {image && <img className="block-content__image" src={image} alt="" />}
    </div>
  );
}
export default BlockContent;
