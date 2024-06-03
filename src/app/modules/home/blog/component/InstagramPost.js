import { InstagramEmbed } from "react-social-media-embed";

const InstagramPost = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <InstagramEmbed
        url="https://www.instagram.com/nmac_bda/?hl=en"
        width="100%"
        height={410}
      />
    </div>
  );
};

export default InstagramPost;
