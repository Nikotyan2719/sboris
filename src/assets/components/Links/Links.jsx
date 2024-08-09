import stl from './Links.module.scss';

const Links = ({ backgroundColor, Icon }) => {
  return (
    <div className={stl.outBorder} style={{ backgroundColor }}>
      <a className={stl.inBorder}>{Icon && <Icon />}</a>
    </div>
  );
};
export default Links;
