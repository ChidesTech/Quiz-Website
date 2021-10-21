const Footer = () => {
  return (
    <div
      style={{
        textAlign: "center",
        marginBottom: 10,
        fontWeight:"bolder",
      }}
      className="footer"
    >
      By{" "}
      <a
        href="https://api.whatsapp.com/send?phone=+2348141680547"
        style={{ cursor: "pointer" }}
      >
        Chides Technologies
      </a>
    </div>
  );
};

export default Footer;
