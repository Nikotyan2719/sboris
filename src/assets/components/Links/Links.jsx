import stl from './Links.module.scss';

const Links = ({ backgroundColor, Icon }) => {
  return (
    <div className={stl.outBorder} style={{ backgroundColor }}>
      <div className={stl.inBorder}>{Icon && <Icon />}</div>
    </div>
  );
};
export default Links;
