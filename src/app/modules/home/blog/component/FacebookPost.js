import React from "react";

const FacebookPost = () => {
  return (
    <>
      <div className="blog-scrollbar">
        <div className="facebbok-info">
         <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FNMACBermuda&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="100%" height="410" style={{border:'none',overflow:'hidden'}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div>
      </div>
    </>
  );
};

export default FacebookPost;


// import React from 'react';
// import { FacebookEmbed } from "react-social-media-embed";

// const FacebookPost = () => {

//   return (
//     <div style={{ display: "flex", justifyContent: "center" }}>
//       <FacebookEmbed
//         url="https://www.facebook.com/NMACBermuda/posts/pfbid02diR7kVSWFmme2eQo6AdemcikdV9cwSciSQu4MX6W1ucF5chWdWYZeK9XsW4qJR3hl"  
//         width={328}
//         height={360}
//       />
//     </div>
//   );
// };

// export default FacebookPost;

