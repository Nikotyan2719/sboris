import stl from './Links.module.scss';

const Links = ({ backgroundColor, Icon, Link }) => {
  return (
    <div className={stl.outBorder} style={{ backgroundColor }}>
      <a href={Link} className={stl.inBorder}>
        {Icon && <Icon />}
      </a>
    </div>
  );
};
export default Links;
