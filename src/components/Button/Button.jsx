import './Button.scss';

function Button({ lnk, title, cls }) {
  return (
    <a target="_blank" href={lnk} className={"button " + cls || ""}>
      {title}
    </a>
  );
}

export default Button