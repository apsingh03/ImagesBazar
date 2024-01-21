import React, { useRef } from "react";
import { FaShareAlt } from "react-icons/fa";

const ShareButton = ({ links, index }) => {
  const shareLinkRef = useRef(null);

  const copyToClipboard = () => {
    if (shareLinkRef.current) {
      navigator.clipboard
        .writeText(shareLinkRef.current.value)
        .then(() => {
          //   console.log(`Link ${index} copied to clipboard`);
          alert("Link Copied");
        })
        .catch((err) => {
          //   console.error(`Unable to copy link ${index} to clipboard`, err);
        });
    }
  };

  return (
    <div>
      <input type="hidden" value={links} readOnly ref={shareLinkRef} />
      <FaShareAlt color="black" size={25} onClick={copyToClipboard} />
      {/* <button onClick={copyToClipboard} >Copy Link</button> */}
    </div>
  );
};

export default ShareButton;
