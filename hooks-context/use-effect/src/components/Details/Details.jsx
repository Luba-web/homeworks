export const Details = ({ infoUser }) => {
  return (
    <>
      <img className="img" src={infoUser.avatar} alt="avatar" />
      <h2 className="reset list">{infoUser.name}</h2>
      <p className="reset list">City: {infoUser.details?.city}</p>
      <p className="reset list">Company: {infoUser.details?.company}</p>
      <p className="reset list">Position: {infoUser.details?.position}</p>
    </>
  );
};
